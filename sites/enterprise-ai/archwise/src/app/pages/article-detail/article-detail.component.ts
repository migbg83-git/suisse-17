import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private cdr: ChangeDetectorRef
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
        console.log('Article loaded:', article);
        console.log('Before - loading:', this.loading, 'notFound:', this.notFound);
        if (article) {
          this.article = article;
          this.loading = false;
          this.notFound = false;
        } else {
          this.notFound = true;
          this.loading = false;
        }
        console.log('After - loading:', this.loading, 'notFound:', this.notFound, 'article:', !!this.article);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading article:', err);
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
