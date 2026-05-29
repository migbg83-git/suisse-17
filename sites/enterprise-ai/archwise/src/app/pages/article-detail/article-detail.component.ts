import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { Article, ArticleDetail } from '../../core/models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsletterCtaComponent } from '../../shared/newsletter-cta/newsletter-cta.component';

@Component({
  selector: 'aw-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsletterCtaComponent],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleDetail | null = null;
  loading = true;
  notFound = false;
  relatedArticles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private cdr: ChangeDetectorRef,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    
    if (!slug) {
      this.notFound = true;
      this.loading = false;
      return;
    }

    this.contentService.getArticleBySlug(slug).subscribe({
      next: (article: ArticleDetail | null) => {
        if (article) {
          this.article = article;
          this.seo.update({
            title: `${article.title} | Archwise`,
            description: article.description,
            url: SeoService.getBaseUrl() + '/articulos/' + article.slug,
            type: 'article'
          });
          this.loading = false;
          this.notFound = false;
          // Cargar artículos relacionados
          this.loadRelatedArticles(article);
        } else {
          this.notFound = true;
          this.loading = false;
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.notFound = true;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });

  }

  private loadRelatedArticles(article: ArticleDetail) {
    this.contentService.getArticles().subscribe((articles: Article[]) => {
      // Excluir el artículo actual
      const others = articles.filter(a => a.slug !== article.slug);
      // 1. Misma category
      let related = others.filter(a => a.category?.slug === article.category?.slug);
      // 2. Si hay menos de 3, añadir por tags compartidos
      if (related.length < 3 && article.tags?.length) {
        const tagSlugs = article.tags.map(t => t.slug);
        const byTags = others.filter(a =>
          a.tags?.some(t => tagSlugs.includes(t.slug)) &&
          !related.some(r => r.slug === a.slug)
        );
        related = related.concat(byTags);
      }
      // 3. Si aún hay menos de 3, añadir featured
      if (related.length < 3) {
        const featured = others.filter(a => a.featured && !related.some(r => r.slug === a.slug));
        related = related.concat(featured);
      }
      // Limitar a 3
      this.relatedArticles = related.slice(0, 3);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
