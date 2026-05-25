import { Component, OnInit } from '@angular/core';
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

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.foundationalArticles$ = this.contentService.getFeaturedArticles();
  }
}
