# Articles Page Framework Alignment — Phase 1 Report

**Fecha:** 2026-06-09  
**Scope:** Implementación P0 de `docs/articles-page-framework-alignment-plan.md`  
**Objetivo:** Transformar `/articulos` de archivo cronológico tipo blog a índice de conocimiento del Framework Archwise.

---

## Cambios Aplicados

### 1) Hero de `/articulos`

**Aplicado en:** `src/app/pages/articles/articles.component.html`

- Título cambiado:
  - De: `Artículos`
  - A: `Decisiones arquitectónicas`

- Subtítulo cambiado:
  - De: `Índice editorial para CTOs, arquitectos y equipos que escalan IA en entornos enterprise.`
  - A: `Cada artículo explica una decisión crítica del Framework Archwise. Las decisiones tienen dependencias. Navega por capa, no por fecha.`

---

### 2) Anchor nav

**Aplicado en:** `src/app/pages/articles/articles.component.html`

- `Últimos publicados` → `Índice completo`
- `Mapa del framework` → `Capas del Framework`
- Anclas actualizadas:
  - `#ultimos-publicados` → `#indice-completo`
  - `#mapa-framework` → `#capas-framework`

---

### 3) Reordenación de secciones

**Aplicado en:** `src/app/pages/articles/articles.component.html`

**Orden final implementado:**
1. Hero
2. Anchor nav
3. Empieza aquí
4. Capas del Framework
5. Índice completo

La sección de capas quedó antes del índice completo, tal como se pidió.

---

### 4) Eliminación de lenguaje de blog

**Aplicado en:** `src/app/pages/articles/articles.component.html`

- Título de sección cambiado:
  - De: `Últimos publicados`
  - A: `Índice completo`

- Subtítulo cambiado:
  - De: `Cronología completa del índice editorial.`
  - A: `Todos los artículos del framework. Ordenados por fecha de publicación.`

- Título de sección de mapa alineado:
  - De: `Mapa del framework Archwise`
  - A: `Capas del Framework`

---

### 5) Reemplazo de 4 stages por 6 capas reales

**Aplicado en:** `src/app/pages/articles/articles.component.ts`, `src/app/pages/articles/articles.component.html`

#### Cambios técnicos

- Se eliminó el uso de `FRAMEWORK_STAGES` (4 stages hardcodeados).
- Se incorporó como fuente única `FRAMEWORK_PAGE_DATA.layers` desde `src/app/pages/framework/framework.data.ts`.

#### Nuevo ViewModel

- `frameworkStages` fue reemplazado por `frameworkLayers`.
- Se construye `frameworkLayers` con:
  - `id`
  - `order`
  - `name`
  - `shortDescription`
  - `articles` resueltos por `articleSlugs`.

#### Render en template

Para cada capa se muestra:
- `CAPA X`
- nombre
- `shortDescription`
- lista de artículos
- CTA: `Ver esta capa en el Framework →` con destino `/framework#layer-X` (via `routerLink` + `fragment`)

#### Capas mostradas

Quedaron alineadas a las 6 capas reales de framework:
1. Diagnóstico AI-Ready
2. Contexto explícito y Knowledge Debt
3. Governance
4. AI Operating Model
5. Organizational Memory
6. Context Systems y capacidad agéntica

---

### 6) Badge de capa en Índice completo

**Aplicado en:** `src/app/pages/articles/articles.component.ts`, `src/app/pages/articles/articles.component.html`

#### Reutilización solicitada

- Se reutilizó `getLayerForArticle()` desde `src/app/core/utils/layer-mapping.ts`.

#### Implementación

- Se añadió `articlesWithLayer` al ViewModel:
  - `{ article, layer }`
  - `layer` se resuelve por slug con `getLayerForArticle(article.slug)`.

- En la sección `Índice completo`, cada ítem muestra:
  - `CAPA X · Nombre de capa` cuando existe layer.
  - Si no existe layer, no se renderiza badge.

---

## Ajustes mínimos de estilo (solo para no romper layout)

**Aplicado en:** `src/app/pages/articles/articles.component.scss`

- `.framework-layer-cta`: estilo mínimo para el nuevo CTA por capa.
- `.editorial-layer-badge`: estilo mínimo para el badge de capa en índice completo.

No hubo rediseño, ni cambios visuales amplios, ni alteraciones fuera de `/articulos`.

---

## Archivos Modificados

1. `src/app/pages/articles/articles.component.ts`
2. `src/app/pages/articles/articles.component.html`
3. `src/app/pages/articles/articles.component.scss`
4. `docs/articles-page-framework-alignment-phase1-report.md` (este reporte)

---

## Validaciones Ejecutadas

### Comandos

1. `npm run build:content` ✅
2. `npm run build:seo` ✅
3. `npm run build:ssg` ✅

### Resultados verificados

- `30 artículos generados` ✅
- `34 rutas prerenderizadas` ✅
- `/articulos` compila/renderiza en SSG ✅
- `/framework` compila/renderiza en SSG ✅
- `article-detail` compila/renderiza en SSG ✅
- La página `/articulos` muestra **6 capas** (no 4 stages) ✅
- Ya no aparece `Últimos publicados` ✅
- Ya no aparece `cronología editorial` ✅
- El índice muestra badge de capa cuando existe ✅

---

## Riesgos

1. **Anchor active state estático**: el link `Empieza aquí` sigue marcado `is-active` estático en HTML; no afecta funcionalidad P0, pero no refleja scroll real.
2. **Dependencia de mapeo por slug**: si en el futuro aparece un artículo sin slug mapeado a capa, no tendrá badge (comportamiento esperado por requisito).
3. **Warnings preexistentes de Angular/Sass**: detectados en build, no introducidos por este cambio.

---

## Estado Final

**Clasificación final:** **ARTICLES PAGE FRAMEWORK ALIGNED**

El P0 solicitado quedó implementado y validado, manteniendo URLs, SEO, SSR/SSG y sin tocar Home, Framework ni Article Detail.
