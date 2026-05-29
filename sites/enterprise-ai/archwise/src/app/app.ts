
import { Component, inject } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AnalyticsService } from './shared/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: '<aw-layout />',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    // Solo inicializar Analytics en navegador
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      inject(AnalyticsService);
    }
  }
}
