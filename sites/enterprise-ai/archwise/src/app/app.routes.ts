import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'framework',
    loadComponent: () => import('./pages/framework/framework.component').then(m => m.FrameworkComponent)
  },
  {
    path: 'manifesto',
    loadComponent: () => import('./pages/manifesto/manifesto.component').then(m => m.ManifestoComponent)
  },
  {
    path: 'articulos',
    loadComponent: () => import('./pages/articles/articles.component').then(m => m.ArticlesComponent)
  },
  {
    path: 'articulos/:slug',
    loadComponent: () => import('./pages/article-detail/article-detail.component').then(m => m.ArticleDetailComponent)
  },
  {
    path: 'newsletter',
    loadComponent: () => import('./pages/newsletter/newsletter.component').then(m => m.NewsletterComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { lang: 'es' }
  },
  {
    path: 'fr',
    children: [
      {
        path: 'a-propos',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        data: { lang: 'fr' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
