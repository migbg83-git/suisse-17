# Framework Implementation Plan

Fecha: 2026-06-06
Estado: Plan tecnico cerrado para implementacion Angular de /framework
Entradas aprobadas: framework-ui-spec, framework-v2-simplification, framework-content, framework-architecture
Alcance: plan de ejecucion sin implementacion de codigo

---

## 1) Alcance tecnico

## 1.1 Que se va a implementar

Se implementara una nueva pagina `/framework` en Angular SSG/SSR con 6 bloques aprobados:
1. Tesis operativa
2. Mapa causal de 6 capas
3. Capas (detalle)
4. Navigator unificado
5. Vocabulario minimo
6. Continuidad

Incluye:
- nueva ruta publica `/framework`,
- integracion con `ContentService` para metadata real de articulos,
- resolucion de slugs a articulos reales,
- SEO via `SeoService` (title, description, canonical, OG),
- navegacion interna por anclas,
- navegacion cruzada con `/articulos` y `/manifesto`,
- soporte responsive (desktop/tablet/mobile),
- prerender SSG de `/framework`.

---

## 1.2 Que queda fuera (explicitamente)

Fuera de alcance:
- cambios conceptuales o taxonomicos,
- cambios en ASIS,
- nuevas capas,
- nueva version de arquitectura,
- implementacion de scoring/ITE,
- rediseno global de Home o /articulos,
- automatizaciones editoriales adicionales fuera de /framework.

---

## 2) Archivos a crear (listado exacto)

## 2.1 Page principal

Crear:
- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.scss`

---

## 2.2 Tipos y datos del framework

Crear:
- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.types.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts`

Opcional (si se decide centralizar modelos en core):
- `sites/enterprise-ai/archwise/src/app/core/models/framework.model.ts`

---

## 2.3 Componentes internos del page

Crear:
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-map/framework-layer-map.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-map/framework-layer-map.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-map/framework-layer-map.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-detail/framework-layer-detail.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-detail/framework-layer-detail.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-detail/framework-layer-detail.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-navigator/framework-navigator.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-navigator/framework-navigator.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-navigator/framework-navigator.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-vocabulary/framework-vocabulary.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-vocabulary/framework-vocabulary.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-vocabulary/framework-vocabulary.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-continuity/framework-continuity.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-continuity/framework-continuity.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-continuity/framework-continuity.component.scss`

- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-reading-path/framework-reading-path.component.ts`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-reading-path/framework-reading-path.component.html`
- `sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-reading-path/framework-reading-path.component.scss`

Total estimado nuevos archivos: 26 (sin opcion core model) o 27 (con model en core).

---

## 3) Archivos a modificar (listado exacto)

Modificar:
- `sites/enterprise-ai/archwise/src/app/app.routes.ts`
  - agregar ruta lazy para `/framework`.

- `sites/enterprise-ai/archwise/src/app/app.routes.server.ts`
  - agregar ruta prerender para `/framework`.

- `sites/enterprise-ai/archwise/src/app/layout/navbar/navbar.component.html`
  - agregar enlace visible a `/framework`.

- `sites/enterprise-ai/archwise/src/app/pages/home/home.component.html` (si aplica)
  - agregar CTA contextual a `/framework` sin alterar estructura editorial principal.

- `sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.html` (si aplica)
  - agregar enlace "Ver /framework completo" en seccion mapa existente.

- `sites/enterprise-ai/archwise/scripts/generate-seo-files.ts` (si aplica)
  - verificar inclusion de `/framework` en sitemap generado.

No modificar:
- `ContentService` salvo que sea estrictamente necesario,
- `SeoService` (ya cubre contrato requerido),
- ASIS/docs conceptuales.

---

## 4) Orden de implementacion (fases)

## Fase 1 - Routing y shell

Objetivo:
- habilitar ruta `/framework` y page minima renderizable.

Tareas:
1. crear `framework.component.*` con estructura base de 6 bloques (sin detalle final),
2. agregar ruta en `app.routes.ts`,
3. agregar entrada prerender en `app.routes.server.ts`,
4. validar navegacion manual a `/framework`.

Resultado esperado:
- `/framework` abre sin errores en dev y en build SSR/SSG.

---

## Fase 2 - Datos y modelos

Objetivo:
- definir contratos tipados y mapeo de datos.

Tareas:
1. crear `framework.types.ts` con interfaces obligatorias,
2. crear `framework.data.ts` con:
   - capas,
   - perfiles,
   - intenciones,
   - terminos,
   - mapeos de slugs,
3. implementar resolucion de slugs contra `ContentService.getArticles()` en page container.

Resultado esperado:
- view model de /framework resuelto con articulos reales.

---

## Fase 3 - Componentes base

Objetivo:
- implementar componentes de los 6 bloques y composition en page.

Tareas:
1. construir componentes internos,
2. componer en `framework.component.html` en orden oficial,
3. conectar inputs/outputs entre mapa, capas y navigator,
4. reutilizar `ArticleCardComponent` y `NewsletterCtaComponent` cuando aplique.

Resultado esperado:
- UI estructurada completa sin interacciones avanzadas.

---

## Fase 4 - Interacciones

Objetivo:
- activar comportamiento UX definido.

Tareas:
1. seleccion de capa desde mapa,
2. expand/collapse de detalle,
3. seleccion perfil/intencion en navigator,
4. generacion dinamica de reading path,
5. navegacion por anclas y retorno a mapa.

Resultado esperado:
- flujo completo de uso 30s/3m/10m operando.

---

## Fase 5 - SEO y accesibilidad

Objetivo:
- asegurar discoverability y A11y minima.

Tareas:
1. `SeoService.update` para `/framework`,
2. jerarquia headings (H1 unico, H2 por bloque),
3. atributos ARIA en acordeones/selectores,
4. foco visible y navegacion por teclado,
5. canonical/OG correctos.

Resultado esperado:
- pagina semantica y accesible en nivel base.

---

## Fase 6 - Integracion navegacion

Objetivo:
- integrar /framework en ecosistema existente.

Tareas:
1. navbar link a /framework,
2. enlace contextual desde Home (si aplica),
3. enlace contextual desde /articulos (si aplica),
4. validar navegacion cruzada /framework <-> /articulos <-> /manifesto.

Resultado esperado:
- /framework conectado al recorrido principal del sitio.

---

## Fase 7 - Validacion SSG/build

Objetivo:
- confirmar que build/prerender/links funcionan end-to-end.

Tareas:
1. ejecutar build repetido,
2. verificar prerender de `/framework`,
3. validar anclas internas y enlaces de articulos,
4. validar salida SEO y sitemap/canonical.

Resultado esperado:
- deployable sin regresiones tecnicas.

---

## 5) Contratos TypeScript (obligatorios)

Definir en `framework.types.ts`:

```ts
export interface FrameworkLayer {
  id: string;
  order: number;
  name: string;
  shortDescription: string;
  whatItSolves: string;
  whatItEnables: string;
  riskIfMissing: string;
  readinessQuestion: string;
  articleSlugs: string[];
  secondaryArticleSlugs?: string[];
}

export interface FrameworkProfile {
  id: string;
  label: string;
  description: string;
}

export interface FrameworkIntent {
  id: 'diagnosticar' | 'disenar' | 'operar' | 'medir' | 'corregir';
  label: string;
  description: string;
}

export interface FrameworkReadingPathItem {
  order: number;
  slug: string;
  reason: string;
  isAnchor: boolean;
}

export interface FrameworkTerm {
  id: string;
  term: string;
  definition: string;
  articleSlug: string;
  layerId?: string;
}

export interface FrameworkNavigationState {
  activeLayerId: string;
  activeProfileId: string;
  activeIntentId: FrameworkIntent['id'];
  expandedLayers: string[];
}
```

Opcional recomendado:

```ts
export interface FrameworkResolvedReadingPathItem extends FrameworkReadingPathItem {
  article: import('../../core/models/article.model').Article;
}

export interface FrameworkViewModel {
  layers: FrameworkLayer[];
  profiles: FrameworkProfile[];
  intents: FrameworkIntent[];
  terms: FrameworkTerm[];
  navigation: FrameworkNavigationState;
  resolvedArticlesBySlug: Map<string, import('../../core/models/article.model').Article>;
}
```

---

## 6) Estrategia de datos

## 6.1 Que vive en `framework.data.ts`

Debe contener datos estructurales estables:
- definicion de 6 capas,
- perfiles,
- intenciones,
- terminos de vocabulario,
- mapeo de rutas de lectura por perfil/intencion,
- clasificacion ancla/satelite.

No debe contener:
- metadata duplicada de articulos (titulo/fecha/categoria),
- HTML de articulos,
- textos derivados de `articles.json`.

---

## 6.2 Que viene de `ContentService`

Desde `ContentService.getArticles()`:
- title,
- slug,
- summary,
- category,
- date,
- readingTime,
- featured,
- relatedArticles.

Regla:
- `framework.data.ts` referencia por `slug` solamente.

---

## 6.3 Resolucion de slugs

Proceso:
1. cargar articulos con `ContentService`,
2. construir `Map<string, Article>`,
3. resolver todos los slugs definidos en `framework.data.ts`,
4. filtrar no resueltos de UI visible,
5. registrar warning no bloqueante.

---

## 6.4 Gestion de articulos faltantes

Politica:
- no romper render,
- ocultar item faltante en listas,
- mantener orden relativo restante,
- loggear warning con contexto (`layerId`, `profileId`, `intentId`, `slug`).

Condicion de alerta:
- si falta un articulo ancla, marcar warning de alta prioridad en consola.

---

## 6.5 Evitar duplicados

Reglas:
1. deduplicacion por `slug` por contexto visible,
2. maximo 3 apariciones visibles por articulo en toda la pagina:
   - una por capa,
   - una por perfil,
   - una por intencion,
3. si aparece en capa + perfil, no repetir en listado adicional del mismo viewport.

Implementacion sugerida:
- `Set<string>` por bloque y `Set<string>` global de visibilidad.

---

## 7) Criterios de aceptacion tecnicos

La implementacion se acepta cuando:

1. `/framework` renderiza en local sin errores.
2. build pasa con exit code 0.
3. ruta `/framework` queda prerenderizada en salida SSG.
4. anclas internas por bloque/capa funcionan.
5. todos los links visibles a `/articulos/:slug` resuelven correctamente.
6. SEO de `/framework` correcto:
   - title,
   - description,
   - canonical,
   - OG.
7. A11y minima correcta:
   - keyboard nav,
   - focus visible,
   - aria-expanded/aria-current donde aplique,
   - headings consistentes.
8. responsive correcto en desktop/tablet/mobile.
9. navbar incluye enlace a `/framework`.
10. no hay regresion visible en `/articulos` y `/manifesto`.

---

## 8) Riesgos tecnicos y mitigaciones

### Riesgo 1 - Slugs no resueltos

Causa:
- drift entre `framework.data.ts` y `articles.json`.

Mitigacion:
- validacion de slugs al inicializar view model,
- warnings estructurados,
- checklist de publicacion incluye auditoria de slugs.

---

### Riesgo 2 - SSG / getPrerenderParams

Causa:
- ruta nueva no incluida en server routes.

Mitigacion:
- agregar `/framework` explicito en `app.routes.server.ts`,
- validar salida `dist/.../framework/index.html`.

---

### Riesgo 3 - Duplicacion de datos

Causa:
- copiar metadata de articulo en `framework.data.ts`.

Mitigacion:
- usar slugs como unica referencia,
- resolver metadata solo desde `ContentService`.

---

### Riesgo 4 - Rutas rotas

Causa:
- links hardcodeados mal formados o slug desincronizado.

Mitigacion:
- generar enlaces solo con `routerLink` y slug resuelto,
- ocultar links invalidos.

---

### Riesgo 5 - Estado interactivo en SSR

Causa:
- dependencia en APIs de navegador durante render inicial.

Mitigacion:
- estado inicial puro en componente,
- eventos solo en cliente,
- evitar acceso directo a `window/document` en init.

---

### Riesgo 6 - Exceso de CSS

Causa:
- estilos redundantes por componente.

Mitigacion:
- limitar reglas por bloque,
- reutilizar tokens y utilidades existentes,
- evitar cascadas profundas.

---

### Riesgo 7 - Problemas responsive

Causa:
- alta densidad en bloques 3 y 4.

Mitigacion:
- layout adaptativo por breakpoint,
- acordeones en mobile,
- controles de navigator por pasos.

---

## 9) Validacion final

## 9.1 Comandos a ejecutar (exactos)

Ejecutar en este orden:

```bash
npm run build:content
npm run build:seo
npm run build:ssg
```

Objetivo:
- `build:content` valida articulos y metadatos.
- `build:seo` valida sitemap, robots y canonical.
- `build:ssg` valida prerender y SSR/SSG.

---

## 9.2 Checklist final de validacion local

Rutas principales:
- `/framework` carga y renderiza 6 bloques.
- `/articulos` sigue funcionando.

Navegacion:
- navbar incluye y navega a `/framework`.
- enlaces internos/anclas de `/framework` funcionan.
- enlaces a ` /articulos/:slug` desde `/framework` resuelven.

SEO/SSG:
- canonical de `/framework` presente y correcto.
- title/description/OG de `/framework` correctos.
- prerender de `/framework` generado en `dist`.
- sitemap incluye `/framework` si el pipeline lo genera automaticamente.

Regresion:
- Home sin ruptura visual.
- Manifesto sin ruptura visual.
- Articles sin ruptura visual.

---

## 10) Definicion de ready-to-implement

Este plan se considera listo para ejecucion cuando:
- lista de archivos a crear/modificar esta cerrada,
- fases de implementacion estan ordenadas,
- contratos TypeScript estan definidos,
- estrategia de datos esta definida,
- criterios tecnicos y validacion final estan definidos,
- no requiere reinterpretacion arquitectonica.

Estado actual:
- plan tecnico cerrado,
- listo para iniciar implementacion Angular en siguiente fase.
