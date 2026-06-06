import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aw-framework-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-hero.component.html',
  styleUrls: ['./framework-hero.component.scss']
})
export class FrameworkHeroComponent {
  @Input() title = '';
  @Input() subtitle = '';

  @Output() primaryAction = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();

  onPrimaryAction(): void {
    this.primaryAction.emit();
  }

  onSecondaryAction(): void {
    this.secondaryAction.emit();
  }
}


