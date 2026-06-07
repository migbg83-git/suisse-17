import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FrameworkContinuityCta } from '../../framework.types';

@Component({
  selector: 'aw-framework-continuity',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './framework-continuity.component.html',
  styleUrls: ['./framework-continuity.component.scss']
})
export class FrameworkContinuityComponent {
  @Input() ctas: FrameworkContinuityCta[] = [];
}


