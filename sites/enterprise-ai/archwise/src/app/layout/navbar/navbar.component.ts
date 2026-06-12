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
  currentLanguage = 'Español';
  isFrameworkActive = false;
  
  constructor(private router: Router, private elementRef: ElementRef) {
    // Detect framework route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isFrameworkActive = event.urlAfterRedirects.startsWith('/framework');
      });
    
    // Initial check
    this.isFrameworkActive = this.router.url.startsWith('/framework');
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
