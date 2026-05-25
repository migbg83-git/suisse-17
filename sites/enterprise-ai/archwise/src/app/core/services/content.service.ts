import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Article, ArticleDetail } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly assetsPath = '/assets/content';

  constructor(private http: HttpClient) {}

  /**
   * Get all articles
   */
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.assetsPath}/articles.json`).pipe(
      catchError((error: unknown) => {
        console.error('Error loading articles:', error);
        return of([]);
      })
    );
  }

  /**
   * Get featured articles (for homepage)
   */
  getFeaturedArticles(): Observable<Article[]> {
    return this.getArticles().pipe(
      map((articles: Article[]) => articles.filter((article: Article) => article.featured))
    );
  }

  /**
   * Get article by slug
   */
  getArticleBySlug(slug: string): Observable<ArticleDetail | null> {
    return this.http.get<ArticleDetail>(`${this.assetsPath}/articles/${slug}.json`).pipe(
      catchError((error: unknown) => {
        console.error(`Error loading article ${slug}:`, error);
        return of(null);
      })
    );
  }
}
