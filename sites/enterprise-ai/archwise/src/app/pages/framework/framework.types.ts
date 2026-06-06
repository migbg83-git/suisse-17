import type { Article } from '../../core/models/article.model';

export interface FrameworkLayer {
  id: string;
  order: number;
  name: string;
  shortDescription: string;
  articleSlugs: string[];
}

export interface FrameworkProfile {
  id: string;
  label: string;
  description: string;
}

export interface FrameworkIntent {
  id: string;
  label: string;
  description: string;
}

export interface FrameworkPathMapping {
  profileId: string;
  intentId: string;
  articleSlugs: string[];
}

export interface FrameworkTerm {
  id: string;
  term: string;
  definition: string;
  articleSlug: string;
}

export interface FrameworkContinuityCta {
  id: string;
  label: string;
  route?: string;
  description?: string;
  disabled?: boolean;
}

export interface FrameworkResolvedLayer {
  id: string;
  order: number;
  name: string;
  shortDescription: string;
  articles: Article[];
  unresolvedSlugs: string[];
}

export interface FrameworkResolvedTerm {
  id: string;
  term: string;
  definition: string;
  articleSlug: string;
  article: Article | null;
}

export interface FrameworkResolvedPath {
  profileId: string;
  intentId: string;
  articles: Article[];
  unresolvedSlugs: string[];
}

export interface FrameworkPageData {
  title: string;
  subtitle: string;
  layers: FrameworkLayer[];
  profiles: FrameworkProfile[];
  intents: FrameworkIntent[];
  pathMappings: FrameworkPathMapping[];
  terms: FrameworkTerm[];
  continuityCtas: FrameworkContinuityCta[];
}

export interface FrameworkPageViewModel {
  title: string;
  subtitle: string;
  layers: FrameworkResolvedLayer[];
  profiles: FrameworkProfile[];
  intents: FrameworkIntent[];
  resolvedPaths: Record<string, FrameworkResolvedPath>;
  terms: FrameworkResolvedTerm[];
  continuityCtas: FrameworkContinuityCta[];
  unresolvedCount: number;
}