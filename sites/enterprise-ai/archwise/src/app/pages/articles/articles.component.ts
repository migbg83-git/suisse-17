import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ArticleCardComponent } from '../../layout/article-card/article-card.component';
import { ContentService } from '../../core/services/content.service';
import { Article } from '../../core/models/article.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aw-articles',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private contentService: ContentService, private seo: SeoService) {}

  ngOnInit(): void {
    this.articles$ = this.contentService.getArticles();
    this.seo.update({
      title: 'Artículos sobre arquitectura enterprise e IA | Archwise',
      description: 'Artículos sobre documentación, contexto explícito, deuda técnica, arquitectura enterprise e IA aplicada.',
      url: SeoService.getBaseUrl() + '/articulos',
      type: 'website'
    });
  }
}
