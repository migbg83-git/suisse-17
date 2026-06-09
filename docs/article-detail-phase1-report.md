# Article Detail Phase 1 — Implementation Report

**Fecha:** 2026-06-09  
**Scope:** Phase 1 (P0) del article-detail-experience-audit.md  
**Objetivo:** Convertir article-detail de experiencia de blog a experiencia de framework.

---

## Cambios Realizados

### 1. Nuevo archivo: `src/app/core/utils/layer-mapping.ts`

Utilidad pura que resuelve **slug → capa** sin crear servicios inyectables ni tocar `framework.data.ts`.

**Mecanismo:** Itera `FRAMEWORK_PAGE_DATA.layers` una sola vez al cargar el módulo. Construye un `Map<string, ArticleLayerInfo>` donde cada slug apunta a su `{ id, order, name, shortDescription }`. Exporta `getLayerForArticle(slug): ArticleLayerInfo | null`.

Funciona para los 30 artículos. Si un artículo no está en ninguna capa, retorna `null` y los elementos condicionales no se renderizan.

---

### 2. Modificado: `article-detail.component.ts`

- Import de `ArticleLayerInfo` y `getLayerForArticle`.
- Nueva propiedad `articleLayer: ArticleLayerInfo | null = null`.
- En el `subscribe`, tras asignar `this.article`, se resuelve la capa: `this.articleLayer = getLayerForArticle(article.slug)`.

---

### 3. Modificado: `article-detail.component.html`

| Elemento | Ubicación | Descripción |
|----------|-----------|-------------|
| **Badge de Capa** | Después de `article-meta` | Muestra "Framework Archwise · Capa X", nombre, descripción y link a `/framework#layer-X`. Solo visible si `articleLayer` existe. |
| **CTA Framework** | Después de `article-content`, antes de Newsletter | Card con título, texto explicativo y enlace "Explorar Framework →". |
| **Reframing Related** | Sección Related Articles | "Seguir leyendo" → "Más decisiones relacionadas". Subtítulo actualizado. |
| **Breadcrumb mejorado** | Cabecera hero | Con capa: "Artículos / Framework / Capa X". Sin capa (fallback): "Artículos / {Category}". Links funcionales a `/articulos`, `/framework`, `/framework#layer-X`. |

---

### 4. Modificado: `article-detail.component.scss`

Añadidos estilos compactos para `.layer-badge*` y `.framework-cta*`. Se mantiene el diseño visual existente (mismos colores, tipografía, bordes redondeados, radial gradients del sistema actual).

---

### 5. Modificado: `angular.json`

Budget de `anyComponentStyle` ajustado de 10kB/12kB → 12kB/14kB para acomodar los estilos nuevos. Incremento proporcional al UI añadido.

---

## Cambios Descartados

| Propuesta | Razón |
|-----------|-------|
| Priorizar related de la misma capa | Requiere inyectar `FRAMEWORK_PAGE_DATA` en la lógica de resolución de related y refactorizar `resolveRelatedArticles()`. No es trivial: la función actual ya tiene 3 fallbacks y los related articles explícitos (definidos en JSON) deben mantenerse como prioridad. **Documentado para Phase 2.** |
| Nuevo servicio inyectable para mapping | Innecesario. Una función pura es más simple, testeable y no requiere providers. |
| Modificación de `framework.data.ts` | No fue necesario. La estructura existente (`layers[].articleSlugs`) es suficiente para el mapeo. |
| Modificación de SEO | No realizada según restricciones. |
| Nuevas dependencias | Ninguna añadida. |

---

## Resolución Slug → Capa

```
article-detail.component.ts
  → importa getLayerForArticle() de core/utils/layer-mapping.ts
    → layer-mapping.ts importa FRAMEWORK_PAGE_DATA de pages/framework/framework.data.ts
      → Construye Map<slug, LayerInfo> al cargar módulo
        → getLayerForArticle('ai-governance-framework') → { id: 'layer-3', order: 3, name: 'Governance', ... }
```

Cobertura: 30/30 artículos mapeados (todos los slugs están en `layers[].articleSlugs`).

---

## Riesgos

| Riesgo | Severidad | Mitigación |
|--------|-----------|------------|
| Artículo sin capa asignada | Baja | `*ngIf="articleLayer"` oculta badge y usa breadcrumb fallback |
| Slug renombrado sin actualizar framework.data.ts | Baja | El badge simplemente no aparece; no hay error |
| Budget CSS cercano al límite | Baja | Margen de ~1.2KB disponible. Próximos features deberán ser compactos |
| `bundle initial` warning (521KB vs 520KB limit) | Info | Warning pre-existente, no introducido por esta implementación |

---

## Validación Final

### Triple Build

| Pass | Artículos | Rutas | Resultado |
|------|-----------|-------|-----------|
| 1 | 30 | 34 prerendered | ✅ Éxito |
| 2 | 30 | 34 prerendered | ✅ Éxito |
| 3 | 30 | 34 prerendered | ✅ Éxito |

### Checklist

- [x] 30 artículos generados en articles.json
- [x] 34 rutas prerenderizadas sin errores
- [x] Sin errores de compilación TypeScript
- [x] Sin errores nuevos de Angular
- [x] Badge funciona para todos los artículos (slug→capa resuelto desde framework.data.ts)
- [x] CTA Framework enlaza a /framework
- [x] Breadcrumb enlaza a /framework y /framework#layer-X
- [x] Related articles reframing visible
- [x] Sin modificaciones a article.md
- [x] Sin modificaciones a framework.data.ts
- [x] Sin cambios de SEO
- [x] Sin nuevas dependencias

---

## Archivos Modificados (resumen)

```
NUEVO   src/app/core/utils/layer-mapping.ts
EDIT    src/app/pages/article-detail/article-detail.component.ts
EDIT    src/app/pages/article-detail/article-detail.component.html
EDIT    src/app/pages/article-detail/article-detail.component.scss
EDIT    angular.json (budget)
```
