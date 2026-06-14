import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { HREFLANG_MAP, HreflangEntry } from '../../core/seo/hreflang-map';

const BASE_URL = 'https://archwise.org';

// Reverse lookup: ES slug → HreflangEntry (computed once at module load)
const ES_SLUG_TO_HREFLANG: Record<string, HreflangEntry> = Object.fromEntries(
  Object.values(HREFLANG_MAP).map(entry => {
    const slug = entry.es.split('/').pop()!;
    return [slug, entry];
  })
);

export interface SeoConfig {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  update(config: SeoConfig) {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.setCanonical(config.url);
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'og:site_name', content: 'Archwise' });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }

  setCanonical(url: string) {
    let link: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    if (!link.parentNode) {
      this.document.head.appendChild(link);
    }
  }

  setHreflang(esUrl: string, frUrl: string): void {
    this.clearHreflang();
    const pairs = [
      { hreflang: 'es', href: esUrl },
      { hreflang: 'fr', href: frUrl },
      { hreflang: 'x-default', href: esUrl }
    ];
    for (const { hreflang, href } of pairs) {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      link.setAttribute('data-aw-hreflang', 'true');
      this.document.head.appendChild(link);
    }
  }

  clearHreflang(): void {
    const existing = this.document.querySelectorAll('link[data-aw-hreflang]');
    existing.forEach(el => el.parentNode?.removeChild(el));
  }

  static getBaseUrl() {
    return BASE_URL;
  }

  static getHreflangBySlug(esSlug: string): HreflangEntry | null {
    return ES_SLUG_TO_HREFLANG[esSlug] ?? null;
  }
}
