import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { Article, ArticleDetail } from '../../core/models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsletterCtaComponent } from '../../shared/newsletter-cta/newsletter-cta.component';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

    forkJoin({
      article: this.contentService.getArticleBySlug(slug),
      articles: this.contentService.getArticles().pipe(catchError(() => of([] as Article[])))
    }).subscribe({
      next: ({ article, articles }) => {
        if (!article) {
          this.notFound = true;
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }

        this.article = article;
        this.relatedArticles = this.resolveRelatedArticles(article, articles);

        this.seo.update({
          title: `${article.title} | Archwise`,
          description: article.description,
          url: SeoService.getBaseUrl() + '/articulos/' + article.slug,
          type: 'article',
          image: SeoService.getBaseUrl() + '/assets/images/og-image.png'
        });

        this.loading = false;
        this.notFound = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });

  }

  private resolveRelatedArticles(article: ArticleDetail, articles: Article[]): Article[] {
    const others = articles.filter(a => a.slug !== article.slug);

    if (article.relatedArticles && article.relatedArticles.length > 0) {
      return article.relatedArticles
        .map(slug => others.find(a => a.slug === slug))
        .filter((a): a is Article => a !== undefined)
        .slice(0, 5);
    }

    let related = others.filter(a => a.category?.slug === article.category?.slug);

    if (related.length < 3 && article.tags?.length) {
      const tagSlugs = article.tags.map(t => t.slug);
      const byTags = others.filter(a =>
        a.tags?.some(t => tagSlugs.includes(t.slug)) &&
        !related.some(r => r.slug === a.slug)
      );
      related = related.concat(byTags);
    }

    if (related.length < 3) {
      const featured = others.filter(a => a.featured && !related.some(r => r.slug === a.slug));
      related = related.concat(featured);
    }

    return related.slice(0, 3);
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
