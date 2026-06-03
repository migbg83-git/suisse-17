import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { ContentService } from '../../core/services/content.service';
import { Article } from '../../core/models/article.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface StartHereSeed {
  slug: string;
  reason: string;
}

interface StartHereItem {
  number: number;
  reason: string;
  article: Article;
}

interface FrameworkStage {
  name: string;
  description: string;
  slugs: string[];
}

interface FrameworkStageItem {
  name: string;
  description: string;
  articles: Article[];
}

interface ArticlesViewModel {
  articles: Article[];
  startHereItems: StartHereItem[];
  frameworkStages: FrameworkStageItem[];
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

const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    name: 'Contexto y deuda de conocimiento',
    description: 'Fundamentos de contexto explícito y deuda de conocimiento como base operativa.',
    slugs: [
      'architecture-md-vale-mas-que-prompts',
      'documentacion-necesita-llm',
      'context-engineering-vs-prompt-engineering',
      'technical-debt-vs-knowledge-debt-ia'
    ]
  },
  {
    name: 'Gobierno y control',
    description: 'Marco de governance para reglas, trazabilidad y toma de decisiones confiable.',
    slugs: [
      'architecture-review-efectiva-ia',
      'architecture-governance-contexto-compartido',
      'ai-governance-framework'
    ]
  },
  {
    name: 'Modelo operativo',
    description: 'Diseño organizativo para coordinar equipos, ownership y ejecución con IA.',
    slugs: [
      'ai-operating-model-enterprise',
      'ai-native-organizations'
    ]
  },
  {
    name: 'Memoria y Context Systems',
    description: 'Capacidad para transformar conocimiento en contexto útil en tiempo de decisión.',
    slugs: [
      'organizational-memory-activo-ai-native',
      'memory-architecture-contexto-reutilizable-enterprise',
      'context-systems-entregar-contexto-correcto-enterprise'
    ]
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

  constructor(private contentService: ContentService, private seo: SeoService) {}

  ngOnInit(): void {
    this.viewModel$ = this.contentService.getArticles().pipe(
      map((articles) => {
        const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

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

        const frameworkStages = FRAMEWORK_STAGES.map((stage) => ({
          name: stage.name,
          description: stage.description,
          articles: stage.slugs
            .map((slug) => articleBySlug.get(slug))
            .filter((article): article is Article => !!article)
        }));

        return {
          articles,
          startHereItems,
          frameworkStages
        };
      })
    );

    this.seo.update({
      title: 'Artículos sobre arquitectura enterprise e IA | Archwise',
      description: 'Artículos sobre documentación, contexto explícito, deuda técnica, arquitectura enterprise e IA aplicada.',
      url: SeoService.getBaseUrl() + '/articulos',
      type: 'website'
    });
  }
}
