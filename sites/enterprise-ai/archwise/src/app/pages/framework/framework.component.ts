import { CommonModule, ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { ContentService } from '../../core/services/content.service';
import { Article } from '../../core/models/article.model';
import { SeoService } from '../../shared/seo/seo.service';
import { STATIC_HREFLANG } from '../../core/seo/hreflang-map';
import { FRAMEWORK_PAGE_DATA } from './framework.data';
import {
  FrameworkPageViewModel,
  FrameworkResolvedLayer,
  FrameworkResolvedPath,
  FrameworkResolvedTerm
} from './framework.types';
import { FrameworkHeroComponent } from './components/framework-hero/framework-hero.component';
import { FrameworkLayerMapComponent } from './components/framework-layer-map/framework-layer-map.component';
import { FrameworkLayerDetailComponent } from './components/framework-layer-detail/framework-layer-detail.component';
import { FrameworkNavigatorComponent } from './components/framework-navigator/framework-navigator.component';
import { FrameworkVocabularyComponent } from './components/framework-vocabulary/framework-vocabulary.component';
import { FrameworkContinuityComponent } from './components/framework-continuity/framework-continuity.component';

@Component({
  selector: 'aw-framework',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FrameworkHeroComponent,
    FrameworkLayerMapComponent,
    FrameworkLayerDetailComponent,
    FrameworkNavigatorComponent,
    FrameworkVocabularyComponent,
    FrameworkContinuityComponent
  ],
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  viewModel$!: Observable<FrameworkPageViewModel>;
  activeLayerId = 'layer-1';
  activeProfileId = '';
  activeIntentId = '';
  expandedLayerIds: string[] = [];

  constructor(
    private contentService: ContentService,
    private seo: SeoService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.viewModel$ = this.contentService.getArticles().pipe(
      map((articles) => this.buildViewModel(articles)),
      map((viewModel) => {
        this.ensureInitialState(viewModel);
        return viewModel;
      })
    );

    this.route.fragment.pipe(distinctUntilChanged()).subscribe((fragment) => {
      if (fragment) {
        this.scrollToAnchor(fragment);
      }
    });

    this.seo.update({
      title: 'Framework Archwise | Arquitectura causal para escalar IA',
      description: 'Seis capas de decisiones arquitectónicas conectadas por dependencias causales. El framework para construir capacidades IA empresariales en el orden correcto.',
      url: SeoService.getBaseUrl() + '/framework',
      type: 'website',
      image: SeoService.getBaseUrl() + '/assets/images/og-image.png'
    });
    this.seo.setHreflang(STATIC_HREFLANG.framework.es, STATIC_HREFLANG.framework.fr);
  }

  private buildViewModel(articles: Article[]): FrameworkPageViewModel {
    const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

    const resolvedLayers: FrameworkResolvedLayer[] = FRAMEWORK_PAGE_DATA.layers.map((layer) => {
      const articlesForLayer: Article[] = [];
      const unresolvedSlugs: string[] = [];

      for (const slug of layer.articleSlugs) {
        const article = articleBySlug.get(slug);
        if (article) {
          articlesForLayer.push(article);
        } else {
          unresolvedSlugs.push(slug);
        }
      }

      if (unresolvedSlugs.length > 0) {
        console.warn(
          '[framework] Slugs no resueltos en capa',
          layer.id,
          unresolvedSlugs
        );
      }

      return {
        id: layer.id,
        order: layer.order,
        name: layer.name,
        shortDescription: layer.shortDescription,
        articles: articlesForLayer,
        unresolvedSlugs
      };
    });

    const resolvedPaths = this.resolvePaths(articleBySlug);
    const resolvedTerms = this.resolveTerms(articleBySlug);

    const unresolvedCount = resolvedLayers.reduce(
      (acc, layer) => acc + layer.unresolvedSlugs.length,
      0
    ) + this.countPathUnresolved(resolvedPaths) + this.countTermUnresolved(resolvedTerms);

    return {
      title: FRAMEWORK_PAGE_DATA.title,
      subtitle: FRAMEWORK_PAGE_DATA.subtitle,
      layers: resolvedLayers,
      profiles: FRAMEWORK_PAGE_DATA.profiles,
      intents: FRAMEWORK_PAGE_DATA.intents,
      resolvedPaths,
      terms: resolvedTerms,
      continuityCtas: FRAMEWORK_PAGE_DATA.continuityCtas,
      unresolvedCount
    };
  }

  onPrimaryAction(): void {
    const firstExpanded = this.expandedLayerIds[0] || this.activeLayerId;
    if (firstExpanded) {
      this.activeLayerId = firstExpanded;
    }
    this.scrollToAnchor('capas');
  }

  onSecondaryAction(): void {
    this.scrollToAnchor('navigator');
  }

  onLayerSelected(layerId: string): void {
    this.activeLayerId = layerId;
    this.ensureLayerExpanded(layerId);
    this.scrollToAnchor('capas');
  }

  onLayerToggled(layerId: string): void {
    if (this.expandedLayerIds.includes(layerId)) {
      this.expandedLayerIds = this.expandedLayerIds.filter((id) => id !== layerId);
      return;
    }

    this.activeLayerId = layerId;
    this.expandedLayerIds = [...this.expandedLayerIds, layerId];
  }

  onProfileChanged(profileId: string): void {
    this.activeProfileId = profileId;
  }

  onIntentChanged(intentId: string): void {
    this.activeIntentId = intentId;
  }

  resolveActivePath(paths: Record<string, FrameworkResolvedPath>): FrameworkResolvedPath | null {
    const exactKey = `${this.activeProfileId}::${this.activeIntentId}`;
    if (paths[exactKey]) {
      return paths[exactKey];
    }

    const profileFallbackKey = `${this.activeProfileId}::diagnosticar`;
    if (paths[profileFallbackKey]) {
      return paths[profileFallbackKey];
    }

    const firstKey = Object.keys(paths)[0];
    return firstKey ? paths[firstKey] : null;
  }

  isActivePathFallback(paths: Record<string, FrameworkResolvedPath>): boolean {
    const exactKey = `${this.activeProfileId}::${this.activeIntentId}`;
    return !paths[exactKey] && !!this.resolveActivePath(paths);
  }

  private resolvePaths(articleBySlug: Map<string, Article>): Record<string, FrameworkResolvedPath> {
    const paths: Record<string, FrameworkResolvedPath> = {};

    for (const mapping of FRAMEWORK_PAGE_DATA.pathMappings) {
      const articles: Article[] = [];
      const unresolvedSlugs: string[] = [];

      for (const slug of mapping.articleSlugs) {
        const article = articleBySlug.get(slug);
        if (article) {
          articles.push(article);
        } else {
          unresolvedSlugs.push(slug);
        }
      }

      if (unresolvedSlugs.length > 0) {
        console.warn('[framework] Slugs no resueltos en ruta', `${mapping.profileId}::${mapping.intentId}`, unresolvedSlugs);
      }

      paths[`${mapping.profileId}::${mapping.intentId}`] = {
        profileId: mapping.profileId,
        intentId: mapping.intentId,
        articles,
        unresolvedSlugs
      };
    }

    return paths;
  }

  private resolveTerms(articleBySlug: Map<string, Article>): FrameworkResolvedTerm[] {
    return FRAMEWORK_PAGE_DATA.terms.map((term) => {
      const article = articleBySlug.get(term.articleSlug) ?? null;
      if (!article) {
        console.warn('[framework] Slug no resuelto en vocabulario', term.id, term.articleSlug);
      }

      return {
        id: term.id,
        term: term.term,
        definition: term.definition,
        articleSlug: term.articleSlug,
        article
      };
    });
  }

  private countPathUnresolved(paths: Record<string, FrameworkResolvedPath>): number {
    return Object.values(paths).reduce((acc, path) => acc + path.unresolvedSlugs.length, 0);
  }

  private countTermUnresolved(terms: FrameworkResolvedTerm[]): number {
    return terms.reduce((acc, term) => acc + (term.article ? 0 : 1), 0);
  }

  private ensureInitialState(viewModel: FrameworkPageViewModel): void {
    if (!this.activeLayerId && viewModel.layers.length > 0) {
      this.activeLayerId = viewModel.layers[0].id;
    }

    if (this.expandedLayerIds.length === 0 && this.activeLayerId) {
      this.expandedLayerIds = [this.activeLayerId];
    }

    if (!this.activeProfileId && viewModel.profiles.length > 0) {
      this.activeProfileId = viewModel.profiles[0].id;
    }

    if (!this.activeIntentId && viewModel.intents.length > 0) {
      this.activeIntentId = viewModel.intents[0].id;
    }
  }

  private ensureLayerExpanded(layerId: string): void {
    if (!this.expandedLayerIds.includes(layerId)) {
      this.expandedLayerIds = [...this.expandedLayerIds, layerId];
    }
  }

  private scrollToAnchor(anchor: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(anchor);
    }, 0);
  }
}


