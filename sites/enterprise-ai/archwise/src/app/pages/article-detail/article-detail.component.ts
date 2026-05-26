import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ArticleDetail } from '../../core/models/article.model';
import { CommonModule } from '@angular/common';
import { NewsletterCtaComponent } from '../../shared/newsletter-cta/newsletter-cta.component';

@Component({
  selector: 'aw-article-detail',
  standalone: true,
  imports: [CommonModule, NewsletterCtaComponent],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleDetail | null = null;
  loading = true;
  notFound = false;

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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
