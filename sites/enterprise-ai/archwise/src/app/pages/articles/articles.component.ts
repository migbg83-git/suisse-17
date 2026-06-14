import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ContentService } from '../../core/services/content.service';
import { STATIC_HREFLANG } from '../../core/seo/hreflang-map';
import { Article } from '../../core/models/article.model';
import { isPlatformBrowser } from '@angular/common';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FRAMEWORK_PAGE_DATA } from '../framework/framework.data';
import { ArticleLayerInfo, getLayerForArticle } from '../../core/utils/layer-mapping';

interface StartHereSeed {
  slug: string;
  reason: string;
}

interface StartHereItem {
  number: number;
  reason: string;
  article: Article;
}

interface FrameworkLayerItem {
  id: string;
  order: number;
  name: string;
  shortDescription: string;
  articles: Article[];
}

interface ArticleWithLayer {
  article: Article;
  layer: ArticleLayerInfo | null;
}

interface ArticlesViewModel {
  articlesWithLayer: ArticleWithLayer[];
  startHereItems: StartHereItem[];
  frameworkLayers: FrameworkLayerItem[];
}

const START_HERE_SEEDS: StartHereSeed[] = [
  {
    slug: 'architecture-md-vale-mas-que-prompts',
    reason: 'Por qué la documentación correcta es el verdadero multiplicador de valor con IA.'
  },
  {
    slug: 'context-engineering-vs-prompt-engineering',
    reason: 'La diferencia entre optimizar prompts y diseñar contexto operativo sólido.'
  },
  {
    slug: 'por-que-fracasan-iniciativas-ia',
    reason: 'Explica por qué muchas iniciativas de IA fallan por causas organizativas, no tecnológicas.'
  },
  {
    slug: 'ai-governance-framework',
    reason: 'Las reglas, límites y accountability que hacen escalar IA sin derivas.'
  },
  {
    slug: 'context-systems-entregar-contexto-correcto-enterprise',
    reason: 'Cómo transformar conocimiento en contexto útil en el momento de decidir.'
  }
];

@Component({
  selector: 'aw-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  viewModel$!: Observable<ArticlesViewModel>;
  isBrowser: boolean;

  constructor(
    private contentService: ContentService,
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  scrollToSection(sectionId: string): void {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  ngOnInit(): void {
    this.viewModel$ = this.contentService.getArticles().pipe(
      map((articles) => {
        const articleBySlug = new Map(articles.map((article) => [article.slug, article])); // Use articles directly from the service

        const startHereItems = START_HERE_SEEDS
          .map((seed, index) => {
            const article = articleBySlug.get(seed.slug);
            if (!article) {
              return null;
            }

            return {
              number: index + 1,
              reason: seed.reason,
              article
            };
          })
          .filter((item): item is StartHereItem => item !== null);

        const frameworkLayers = FRAMEWORK_PAGE_DATA.layers.map((layer) => ({
          id: layer.id,
          order: layer.order,
          name: layer.name,
          shortDescription: layer.shortDescription,
          articles: layer.articleSlugs
            .map((slug) => articleBySlug.get(slug))
            .filter((article): article is Article => !!article)
        }));

        const articlesWithLayer = articles.map((article) => ({
          article,
          layer: getLayerForArticle(article.slug)
        }));

        return {
          articlesWithLayer,
          startHereItems,
          frameworkLayers
        };
      })
    );

    this.seo.update({
      title: 'Artículos sobre arquitectura enterprise e IA | Archwise',
      description: 'Artículos sobre documentación, contexto explícito, deuda técnica, arquitectura enterprise e IA aplicada.',
      url: SeoService.getBaseUrl() + '/articulos',
      type: 'website'
    });
    this.seo.setHreflang(STATIC_HREFLANG.articles.es, STATIC_HREFLANG.articles.fr);
  }
}
