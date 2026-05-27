import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { RouterLink } from '@angular/router';
import { ArticleCardComponent } from '../../layout/article-card/article-card.component';
import { ContentService } from '../../core/services/content.service';
import { Article } from '../../core/models/article.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aw-home',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foundationalArticles$!: Observable<Article[]>;

  constructor(private contentService: ContentService, private seo: SeoService) {}

  ngOnInit(): void {
    this.foundationalArticles$ = this.contentService.getFeaturedArticles();
    this.seo.update({
      title: 'Enterprise Architecture para la era de la IA | Archwise',
      description: 'Análisis sobre arquitectura enterprise, documentación, contexto explícito, IA aplicada y decisiones técnicas para arquitectos y tech leads.',
      url: SeoService.getBaseUrl() + '/',
      type: 'website'
    });
  }
}
