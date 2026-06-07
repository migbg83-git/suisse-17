import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkIntent, FrameworkProfile, FrameworkResolvedPath } from '../../framework.types';
import { FrameworkReadingPathComponent } from '../framework-reading-path/framework-reading-path.component';

@Component({
  selector: 'aw-framework-navigator',
  standalone: true,
  imports: [CommonModule, FrameworkReadingPathComponent],
  templateUrl: './framework-navigator.component.html',
  styleUrls: ['./framework-navigator.component.scss']
})
export class FrameworkNavigatorComponent {
  @Input() profiles: FrameworkProfile[] = [];
  @Input() intents: FrameworkIntent[] = [];
  @Input() activeProfileId = '';
  @Input() activeIntentId = '';
  @Input() activePath: FrameworkResolvedPath | null = null;
  @Input() isFallbackPath = false;

  @Output() profileChanged = new EventEmitter<string>();
  @Output() intentChanged = new EventEmitter<string>();
  @Output() articleSelected = new EventEmitter<string>();

  get activeProfileLabel(): string {
    const current = this.profiles.find((profile) => profile.id === this.activeProfileId);
    return current ? current.label : this.activeProfileId;
  }

  get activeIntentLabel(): string {
    const current = this.intents.find((intent) => intent.id === this.activeIntentId);
    return current ? current.label : this.activeIntentId;
  }

  onProfileChanged(profileId: string): void {
    this.profileChanged.emit(profileId);
  }

  onIntentChanged(intentId: string): void {
    this.intentChanged.emit(intentId);
  }

  handleArticleSelected(slug: string): void {
    this.articleSelected.emit(slug);
  }
}


