import { Component, OnInit } from '@angular/core';
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

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.articles$ = this.contentService.getArticles();
  }
}
