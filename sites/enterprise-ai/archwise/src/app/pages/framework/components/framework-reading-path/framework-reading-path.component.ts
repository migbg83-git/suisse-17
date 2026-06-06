import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'aw-framework-reading-path',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './framework-reading-path.component.html',
  styleUrls: ['./framework-reading-path.component.scss']
})
export class FrameworkReadingPathComponent {
  @Input() articles: Article[] = [];
  @Input() unresolvedSlugs: string[] = [];

  @Output() articleSelected = new EventEmitter<string>();

  onArticleSelected(slug: string): void {
    this.articleSelected.emit(slug);
  }
}


