import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FrameworkResolvedTerm } from '../../framework.types';

@Component({
  selector: 'aw-framework-vocabulary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './framework-vocabulary.component.html',
  styleUrls: ['./framework-vocabulary.component.scss']
})
export class FrameworkVocabularyComponent {
  @Input() terms: FrameworkResolvedTerm[] = [];

  @Output() termArticleSelected = new EventEmitter<string>();

  onTermArticleSelected(slug: string): void {
    this.termArticleSelected.emit(slug);
  }
}


