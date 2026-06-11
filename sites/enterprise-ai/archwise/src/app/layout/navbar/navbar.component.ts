import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'aw-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
  languageDropdownOpen = false;
  // `currentLanguage` will be derived from the current URL at runtime
  currentLanguage = '';
  isFrameworkActive = false;
  
  private readonly translations: Record<string, any> = {
    es: {
      framework: 'Explorar Framework',
      articles: 'Artículos',
      manifesto: 'Manifesto',
      newsletter: 'Newsletter',
      about: 'About', // Mantener en inglés según el contexto original, aunque el literal sea "About"
      es: 'ES',
      selectLanguage: 'Seleccionar idioma',
      spanish: 'Español',
      french: 'Français',
      english: 'English',
      soon: 'próximamente'
    },
    fr: {
      framework: 'Framework',
      articles: 'Articles',
      manifesto: 'Manifeste',
      newsletter: 'Newsletter',
      about: 'À propos',
      es: 'FR', // El texto del botón de idioma en francés será "FR"
      selectLanguage: 'Sélectionner la langue',
      spanish: 'Espagnol',
      french: 'Français',
      english: 'Anglais',
      soon: 'prochainement'
    }
  };

  get t() {
    return this.translations[this.currentLanguage] || this.translations['es'];
  }

  constructor(private router: Router, private elementRef: ElementRef) {
    // Detect framework route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Update active framework flag (keep original behavior)
        this.isFrameworkActive = event.urlAfterRedirects.startsWith('/framework');
        // Update current language based on navigated URL
        this.currentLanguage = this.detectLanguageFromUrl(event.urlAfterRedirects);
      });
    
    // Initial check
    this.isFrameworkActive = this.router.url.startsWith('/framework');
    this.currentLanguage = this.detectLanguageFromUrl(this.router.url);
  }

  private detectLanguageFromUrl(url: string): string {
    if (!url) return 'es';
    return url.startsWith('/fr') ? 'fr' : 'es';
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isClickInsideLanguageWrapper = this.elementRef.nativeElement
      .querySelector('.aw-navbar__language-wrapper')
      ?.contains(target);
    
    if (!isClickInsideLanguageWrapper) {
      this.languageDropdownOpen = false;
    }
  }
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu(): void {
    this.menuOpen = false;
  }
  
  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }
  
  closeLanguageDropdown(): void {
    this.languageDropdownOpen = false;
  }
}
