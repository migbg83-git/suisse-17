import { FRAMEWORK_PAGE_DATA } from '../../pages/framework/framework.data';

export interface ArticleLayerInfo {
  id: string;
  order: number;
  name: string;
  shortDescription: string;
}

const slugToLayerMap = new Map<string, ArticleLayerInfo>();

for (const layer of FRAMEWORK_PAGE_DATA.layers) {
  for (const slug of layer.articleSlugs) {
    slugToLayerMap.set(slug, {
      id: layer.id,
      order: layer.order,
      name: layer.name,
      shortDescription: layer.shortDescription,
    });
  }
}

export function getLayerForArticle(slug: string): ArticleLayerInfo | null {
  return slugToLayerMap.get(slug) ?? null;
}
