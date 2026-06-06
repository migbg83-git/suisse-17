import { RenderMode, ServerRoute } from '@angular/ssr';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface PrerenderArticle {
  slug: string;
}

function getArticleSlugs(): string[] {
  const articlesPath = resolve(process.cwd(), 'src', 'assets', 'content', 'articles.json');
  const raw = readFileSync(articlesPath, 'utf-8');
  const articles = JSON.parse(raw) as PrerenderArticle[];

  return articles
    .map((article) => article.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0);
}

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'framework',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'manifesto',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'articulos',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'articulos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return getArticleSlugs().map((slug) => ({ slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
