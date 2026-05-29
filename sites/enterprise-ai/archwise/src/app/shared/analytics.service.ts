
import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// Extensión global para window.gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-63K8KKP31Y';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private router = inject(Router);
  private initialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initGtag();
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.sendPageView(event.urlAfterRedirects);
        }
      });
    }
  }

  private initGtag() {
    if (this.initialized) return;
    // Inject gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    // Init gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
    this.initialized = true;
  }

  sendPageView(url: string) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title
    });
  }
}
