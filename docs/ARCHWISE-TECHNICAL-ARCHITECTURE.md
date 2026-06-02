# ARCHWISE — Technical Architecture Document

> Última actualización: 2026-06-01  
> Propósito: documentar cómo funciona técnicamente el proyecto Archwise a nivel Angular, contenido, build, SSG, SEO y despliegue.  
> Audiencia: desarrolladores, IAs asistentes, contribuidores.

---

## 1. Executive Summary

Archwise es un sitio de publicación editorial construido con **Angular v21.2.0** en modo SSG (Static Site Generation). El flujo técnico es:

1. Los artículos se escriben en **Markdown** (`content/enterprise-ai/article-XX/article.md`) con frontmatter YAML mínimo.
2. Los metadatos editoriales se definen en **article.json** junto al artículo.
3. El script **`build-content.ts`** lee ambos archivos, convierte el Markdown a HTML, fusiona metadatos y genera:
   - `src/assets/content/articles.json` (listado completo)
   - `src/assets/content/articles/{slug}.json` (JSON individual por artículo)
4. El script **`generate-seo-files.ts`** lee `articles.json` y genera `public/sitemap.xml` y `public/robots.txt`.
5. **Angular** consume los JSON generados a través de `ContentService` vía HTTP.
6. Los componentes `ArticlesComponent` y `ArticleDetailComponent` renderizan listado y detalle.
7. La configuración de **SSG/prerender** genera HTML estático para todas las rutas definidas.
8. El HTML estático se despliega en **Vercel** como hosting estático.

El resultado es un sitio completamente estático, optimizado para SEO, sin backend en runtime.

---

## 2. Arquitectura general

```
content/enterprise-ai/article-XX/
    ├── article.md          (contenido Markdown + frontmatter)
    └── article.json        (metadatos editoriales)
            │
            ▼
scripts/build-content.ts
            │
            ▼
src/assets/content/
    ├── articles.json               (listado completo)
    └── articles/{slug}.json        (JSON individual)
            │
            ▼
Angular ContentService (HTTP GET /assets/content/...)
            │
            ▼
ArticlesComponent ← articles.json
ArticleDetailComponent ← articles/{slug}.json
            │
            ▼
Angular SSG (prerender: true, outputMode: "static")
            │
            ▼
dist/archwise/browser/ (HTML estático)
            │
            ▼
Vercel (hosting estático)
```

Flujo SEO paralelo:

```
src/assets/content/articles.json
            │
            ▼
scripts/generate-seo-files.ts
            │
            ▼
public/sitemap.xml
public/robots.txt
```

---

## 3. Estructura de carpetas

### `content/enterprise-ai/`
Repositorio centralizado de contenido editorial. Cada artículo vive en `article-XX/` con:
- `article.md` — contenido + frontmatter
- `article.json` — metadatos editoriales
- Opcionalmente: `brief.md`, `notes.md`, `outline.md`, `review.md`, `assets.md`

### `sites/enterprise-ai/archwise/`
Proyecto Angular principal. Raíz del workspace Angular.

### `sites/enterprise-ai/archwise/scripts/`
Scripts de build del pipeline de contenido:
- `build-content.ts` — transforma Markdown → JSON
- `generate-seo-files.ts` — genera sitemap.xml y robots.txt

### `sites/enterprise-ai/archwise/src/app/`
Código Angular:
- `core/services/` — ContentService (acceso a datos)
- `core/models/` — interfaces TypeScript (Article, ArticleDetail)
- `pages/` — componentes de página (articles, article-detail, home, about, manifesto, newsletter)
- `shared/seo/` — SeoService (meta tags, canonical, Open Graph)
- `layout/` — componentes de layout (navbar, footer, article-card)

### `sites/enterprise-ai/archwise/src/assets/content/`
Archivos JSON generados automáticamente por `build-content.ts`:
- `articles.json` — array de todos los artículos
- `articles/{slug}.json` — JSON individual con HTML incluido

### `sites/enterprise-ai/archwise/public/`
Archivos estáticos servidos en la raíz del sitio:
- `sitemap.xml` — generado por `generate-seo-files.ts`
- `robots.txt` — generado por `generate-seo-files.ts`

---

## 4. Modelo de contenido

### `article.md` (fuente humana)
Archivo Markdown con frontmatter YAML mínimo obligatorio:

```yaml
---
title: "Título del artículo"
slug: "slug-del-articulo"
description: "Descripción SEO"
date: "2026-05-31"
---

## Contenido del artículo en Markdown...
```

Campos opcionales en frontmatter: `category`, `cluster`, `tags`, `series`, `author`, `readingTime`, `featured`, `summary`.

### `article.json` (metadatos editoriales)
Archivo JSON con metadatos ricos. No contiene el contenido del artículo.

```json
{
  "title": "...",
  "slug": "...",
  "description": "...",
  "excerpt": "...",
  "category": "Context Engineering",
  "tags": ["tag1", "tag2"],
  "keywords": ["keyword1", "keyword2"],
  "readingTime": 12,
  "difficulty": "intermediate",
  "featured": false,
  "published": true,
  "author": "Miguel Benito García",
  "relatedArticles": ["slug-1", "slug-2"],
  "ogImage": "/assets/images/og-image.png",
  "canonicalUrl": "https://archwise.org/articulos/slug"
}
```

### `articles.json` (generado automáticamente)
Array de objetos artículo con todos los campos fusionados, **incluyendo `content` y `html`**. Ordenado por fecha (más reciente primero). Generado por `build-content.ts`.

### `articles/{slug}.json` (generado automáticamente)
JSON individual por artículo. Mismo objeto que aparece en el array de `articles.json`. Usado por `ArticleDetailComponent` para cargar un artículo concreto.

### Prioridad de campos (build-content.ts)

| Campo | Prioridad 1 | Prioridad 2 | Fallback |
|-------|-------------|-------------|----------|
| category | article.json | frontmatter category | frontmatter cluster |
| author | article.json | frontmatter | "Miguel Benito García" |
| readingTime | article.json | frontmatter | calculado (200 wpm) |
| tags | article.json | frontmatter | undefined |
| series | article.json | frontmatter | undefined |
| summary | article.json | frontmatter summary | description |
| featured | article.json | frontmatter | false |
| relatedArticles | article.json | — | [] |

---

## 5. Pipeline build-content.ts

Ubicación: `sites/enterprise-ai/archwise/scripts/build-content.ts`  
Ejecutor: `tsx` (TypeScript ejecutable directo)  
Comando: `npm run build:content`

### Paso a paso:

1. **Localiza el directorio de contenido**: `content/enterprise-ai/` (3 niveles arriba del cwd)
2. **Enumera carpetas `article-*`**: lee el directorio y filtra por prefijo `article-`
3. **Para cada carpeta article-XX:**
   - Lee `article.md` con `gray-matter` → extrae frontmatter y contenido Markdown
   - Lee `article.json` si existe → extrae metadatos editoriales
   - Valida campos obligatorios en frontmatter: `title`, `slug`, `description`, `date`
   - **Prioriza metadatos de article.json** sobre frontmatter (ver tabla §4)
   - Normaliza `category` a objeto `{ slug, name }` (genera slug con `toSlug()`)
   - Elimina primer H1 si duplica el título del frontmatter
   - Convierte Markdown a HTML con `marked` (con highlight.js para bloques de código)
   - Calcula `readingTime` si no viene definido (200 palabras/minuto)
  - Compone objeto artículo completo con `content` (Markdown limpio), `html` (HTML renderizado) y `relatedArticles` (si existe en article.json)
4. **Genera JSON individual**: escribe `src/assets/content/articles/{slug}.json`
5. **Ordena por fecha** (más reciente primero)
6. **Genera `articles.json`**: escribe `src/assets/content/articles.json`

### ⚠️ ADVERTENCIA CRÍTICA

**Nunca eliminar los campos `content` y `html` del objeto artículo generado.**

Si `build-content.ts` deja de serializar `content` o `html`:
- Los artículos mostrarán cabecera (título, categoría, meta) pero **no cuerpo**
- El componente `ArticleDetailComponent` usa `[innerHTML]="article.html"` para renderizar
- Sin `html`, el `<div>` queda vacío → el lector ve un artículo aparentemente roto

Después de cualquier modificación a `build-content.ts`, **siempre verificar en navegador** que los artículos muestran contenido completo.

### Related Articles (estado 2026-06-01)

- `build-content.ts` serializa `relatedArticles` desde `article.json` hacia:
  - `src/assets/content/articles.json`
  - `src/assets/content/articles/{slug}.json`
- Formato esperado: `string[]` (slugs) en orden editorial.
- Regla de integridad: todos los slugs deben existir en el corpus publicado.

---

## 6. Pipeline SEO (generate-seo-files.ts)

Ubicación: `sites/enterprise-ai/archwise/scripts/generate-seo-files.ts`  
Comando: `npm run build:seo`

### Funcionamiento:

1. **Lee** `src/assets/content/articles.json`
2. **Define rutas estáticas**: `/`, `/manifesto`, `/articulos`
3. **Genera URLs de artículos**: `https://archwise.org/articulos/{slug}` con `lastmod` de la fecha del artículo
4. **Escribe `public/sitemap.xml`**: formato estándar con `<urlset>`, `<url>`, `<loc>`, `<lastmod>`
5. **Escribe `public/robots.txt`**: permite todo, apunta al sitemap

### Reglas:

- `sitemap.xml` **no debe editarse manualmente** — se sobreescribe en cada ejecución de `build:seo`
- `robots.txt` **no debe editarse manualmente** — se sobreescribe en cada ejecución de `build:seo`
- Ejecutar `build:seo` **después** de `build:content` (necesita `articles.json` actualizado)
- El baseUrl está hardcodeado: `https://archwise.org`

---

## 7. Angular rendering

### ArticlesComponent (`pages/articles/`)

- Inyecta `ContentService` y llama `getArticles()`
- `getArticles()` hace GET a `/assets/content/articles.json`
- Renderiza listado con `@for` loop sobre el array de artículos
- Muestra por cada artículo: `title`, `summary`, `category.name`, `date`, `readingTime`
- Link a detalle: `[routerLink]="['/articulos', article.slug]"`
- Aplica SEO estático (título y descripción de la página de listado)

### ArticleDetailComponent (`pages/article-detail/`)

- Lee `slug` de `ActivatedRoute.snapshot.paramMap`
- Llama `contentService.getArticleBySlug(slug)` → GET a `/assets/content/articles/{slug}.json`
- Renderiza:
  - `article.category.name` — badge de categoría
  - `article.title` — H1
  - `article.summary` — lead/subtítulo
  - `article.author`, `article.date`, `article.readingTime` — metadata
  - **`article.html`** — contenido renderizado vía `[innerHTML]`
  - `article.tags` — etiquetas
  - Carga artículos y relacionados en flujo SSR-friendly con `forkJoin` (`article + articles`)
  - Resolución de relacionados:
    - Si `article.relatedArticles` existe: resolver por slug preservando orden (excluyendo artículo actual)
    - Si no existe: fallback por categoría → tags compartidos → featured
  - Este enfoque garantiza que "Seguir leyendo" quede en HTML prerenderizado (SSG), no solo en runtime cliente.
- Aplica SEO dinámico con `SeoService`:
  - `<title>`: `{article.title} | Archwise`
  - `meta description`: `article.description`
  - `canonical`: `https://archwise.org/articulos/{slug}`
  - Open Graph: title, description, url, type=article, image

### SeoService (`shared/seo/`)

- Actualiza `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Actualiza Open Graph: `og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:image`
- Actualiza Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Base URL hardcodeada: `https://archwise.org`

### Propiedades requeridas para renderizar un artículo completo:

| Propiedad | Uso |
|-----------|-----|
| `title` | H1 del artículo |
| `description` | Meta SEO |
| `summary` | Lead visible al lector |
| `category` | Badge y breadcrumb |
| `tags` | Etiquetas al final |
| `html` | **Cuerpo del artículo** |
| `author` | Crédito |
| `date` | Fecha formateada |
| `readingTime` | Indicador de lectura |
| `slug` | URL y routing |
| `relatedArticles` | Resolución de sección "Seguir leyendo" |

---

## 8. Angular SSG / SSR

### Configuración en angular.json

```json
"production": {
  "prerender": true,
  "outputMode": "static"
}
```

- `prerender: true` → Angular genera HTML estático en build time
- `outputMode: "static"` → output puramente estático (no requiere servidor Node en runtime)

### Server-side rendering (server.ts)

El archivo `src/server.ts` define un servidor Express para uso en **desarrollo** y como fallback. Usa `AngularNodeAppEngine` de `@angular/ssr/node`. En producción con `outputMode: "static"`, el servidor **no se usa** — el output es HTML plano servido por Vercel.

### Rutas prerenderizadas (app.routes.server.ts)

```typescript
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'manifesto', renderMode: RenderMode.Prerender },
  { path: 'articulos', renderMode: RenderMode.Prerender },
  { path: 'articulos/:slug', renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const articles = JSON.parse(
        readFileSync(resolve(process.cwd(), 'src/assets/content/articles.json'), 'utf-8')
      );
      return articles.map((a: { slug: string }) => ({ slug: a.slug }));
    }
  },
  { path: '**', renderMode: RenderMode.Client }
];
```

**Estado actual (2026-06-01):** `getPrerenderParams` ya no usa slugs hardcodeados. Lee dinámicamente todos los slugs publicados desde `src/assets/content/articles.json`.

Validación operativa reciente:
- `npm run build:ssg` OK
- 21 artículos prerenderizados
- 24 rutas estáticas totales
- Sin errores SSR

Validación SEO interna reciente (relatedArticles en HTML estático):
- `npm run build:ssg` exit code 0
- article-01 con enlaces relacionados en `dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html`
- article-17 con enlaces relacionados en `dist/archwise/browser/articulos/ai-native-organizations/index.html`
- article-22 con enlaces relacionados en `dist/archwise/browser/articulos/organizational-memory-activo-ai-native/index.html`

**Dependencia crítica:** este enfoque requiere que `articles.json` exista y esté actualizado antes del prerender. Por eso el flujo canónico de publicación es `npm run build:ssg` (`build:content` -> `build:seo` -> `ng build --prerender`).

**Riesgo menor remanente:** ejecutar `ng build --prerender` manualmente sin `build:content` previo puede fallar o prerenderizar un conjunto desactualizado de rutas.

### Diferencia entre builds

| Comando | Qué hace |
|---------|----------|
| `ng build` | Build de producción con prerender (por `defaultConfiguration: production`) |
| `ng build --prerender` | Equivalente (prerender ya está activo en production config) |
| `npm run build` | `build:content` + `ng build` |
| `npm run build:ssg` | `build:content` + `build:seo` + `ng build --prerender` |

En la práctica, `npm run build:ssg` es el **comando canónico** para generar el sitio completo listo para deploy.

---

## 9. Comandos oficiales

| Comando | Qué hace | Cuándo usarlo | Archivos generados |
|---------|----------|---------------|-------------------|
| `npm run build:content` | Ejecuta `build-content.ts` con tsx | Después de crear/modificar artículos | `src/assets/content/articles.json`, `src/assets/content/articles/*.json` |
| `npm run build:seo` | Ejecuta `generate-seo-files.ts` con tsx | Después de `build:content` cuando cambian slugs o fechas | `public/sitemap.xml`, `public/robots.txt` |
| `npm run build` | `build:content` + `ng build` (production) | Build rápido sin regenerar SEO files | `dist/archwise/` |
| `npm run build:ssg` | `build:content` + `build:seo` + `ng build --prerender` | **Build completo para deploy** | `dist/archwise/`, `public/sitemap.xml`, `public/robots.txt` |
| `npm run start` | `ng serve` (development) | Desarrollo local | Nada (sirve en memoria) |
| `npm run watch` | `ng build --watch --configuration development` | Desarrollo con rebuild automático | `dist/archwise/` |
| `npm run serve:ssr:archwise` | `node dist/archwise/server/server.mjs` | Probar SSR localmente | Nada (sirve el build existente) |
| `npm run test` | `ng test` | Ejecutar tests unitarios | Nada |

---

## 10. Flujo completo para publicar un artículo

### Paso a paso:

1. **Crear carpeta**: `content/enterprise-ai/article-XX/`
2. **Crear `brief.md`**: definir tema, audiencia, objetivo
3. **Crear `notes.md`**: investigación y referencias
4. **Crear `outline.md`**: estructura del artículo
5. **Escribir `article.md`**: contenido completo con frontmatter (`title`, `slug`, `description`, `date`)
6. **Crear `review.md`** (opcional): notas de revisión editorial
7. **Crear `assets.md`** (opcional): recursos visuales necesarios
8. **Crear `article.json`**: metadatos editoriales completos (category, tags, keywords, readingTime, author, canonicalUrl, etc.)
9. **Ejecutar `npm run build:content`** desde `sites/enterprise-ai/archwise/`
10. **Verificar** que el artículo aparece en `src/assets/content/articles.json`
11. **Verificar** que existe `src/assets/content/articles/{slug}.json` con `html` presente
12. **Ejecutar `npm run build:seo`**
13. **Verificar** que el slug aparece en `public/sitemap.xml`
14. **Ejecutar `npm run build:ssg`** (o `npm run build` para test rápido)
15. **Verificar en navegador** `/articulos` — el artículo aparece en el listado
16. **Verificar en navegador** `/articulos/{slug}` — el artículo muestra contenido completo
17. **Verificar** canonical URL, Open Graph, meta description en el HTML generado
18. **Deploy** (push a repositorio → Vercel despliega automáticamente)

---

## 11. Validaciones obligatorias

Checklist post-build antes de deploy:

- [ ] El artículo aparece en `src/assets/content/articles.json`
- [ ] El JSON individual existe en `src/assets/content/articles/{slug}.json`
- [ ] El JSON individual contiene campos `content` y `html` con valor no vacío
- [ ] El artículo se renderiza completo en navegador (título + cuerpo + tags)
- [ ] La categoría es visible en el badge y breadcrumb
- [ ] `public/sitemap.xml` incluye la URL del artículo
- [ ] El canonical URL es correcto (`https://archwise.org/articulos/{slug}`)
- [ ] Open Graph tags presentes en el HTML renderizado (og:title, og:description, og:url)
- [ ] No hay slugs duplicados en `articles.json`
- [ ] El build completa sin errores (`ng build` exit code 0)

### Post-deploy verification for Vercel

Contexto:
- Se detecto un incidente transitorio donde produccion sirvio contenido antiguo/cache para una ruta de articulo, aunque source, build, dist, sitemap y JSON eran correctos.

Regla:
- Despues de cada deploy, verificar 3 URLs criticas:
  - article-01
  - article-03
  - ultimo articulo publicado

Para cada URL comprobar:
- title
- h1
- date
- reading time
- canonical
- relatedArticles

Si hay desajuste:
1. comprobar deployment activo en Vercel
2. comprobar headers cache y x-vercel-cache
3. redeploy sin cache si es necesario
4. validar en incognito o con curl

---

## 12. Incidentes conocidos

### Bug: artículos sin cuerpo renderizado

**Síntoma:**  
Todos los artículos mostraban cabecera (título, categoría, autor, fecha, newsletter CTA) pero el cuerpo del artículo estaba vacío.

**Causa:**  
Una modificación a `build-content.ts` dejó de incluir los campos `content` y `html` en el objeto artículo serializado a JSON. El campo `html` es el que `ArticleDetailComponent` usa con `[innerHTML]="article.html"`.

**Solución:**  
Reintroducir `content` y `html` en el objeto artículo generado en `build-content.ts`:
```typescript
const article = {
  // ... otros campos
  content: cleanedContent,   // ← CRÍTICO
  html: html                 // ← CRÍTICO
};
```

**Lección:**  
Después de tocar `build-content.ts`, **siempre validar en navegador** que los artículos muestran contenido completo. El build puede completar sin errores y el sitemap puede ser correcto, pero los artículos pueden estar vacíos si falta `html`.

---

### Bug: debug console.log en build-content.ts

**Síntoma:**  
El build imprime logs de debug para article-11 en cada ejecución.

**Causa:**  
Código temporal de diagnóstico no eliminado:
```typescript
if (filePath.includes('article-11')) {
  console.log('DEBUG article-11: ...');
}
```

**Estado:** Pendiente de limpieza. No afecta funcionalidad.

---

### Limitación: getPrerenderParams hardcodeado

**Síntoma:**  
`app.routes.server.ts` solo lista 4 slugs en `getPrerenderParams`. 

**Impacto:**  
Los artículos no listados pueden no tener HTML estático prerenderizado explícitamente. Angular puede resolverlos igualmente durante el build si los detecta por navegación interna.

**Estado:** Conocido. Funciona en la práctica porque el build con `outputMode: "static"` prerenderiza las rutas descubiertas.

---

## 13. Reglas para futuras IAs

1. **No editar archivos generados manualmente** — `articles.json`, `articles/{slug}.json`, `sitemap.xml` y `robots.txt` se sobreescriben en cada build. Cualquier edición manual se pierde.

2. **No tocar `build-content.ts` sin validación completa** — Después de cualquier cambio:
   - Ejecutar `npm run build:content`
   - Verificar que `articles.json` tiene todos los artículos
   - Verificar que cada JSON individual tiene `html` no vacío
   - Verificar en navegador que los artículos renderizan cuerpo

3. **No editar `sitemap.xml` ni `robots.txt` manualmente** — Se regeneran con `npm run build:seo`. Ediciones manuales se pierden.

4. **No inventar comandos npm** — Solo usar los definidos en `package.json` (ver §9). No existen `npm run deploy`, `npm run lint`, ni otros no listados.

5. **No reescribir contenido editorial fuera del workflow** — El contenido vive en `content/enterprise-ai/article-XX/article.md`. No editar los JSON generados en `src/assets/content/`.

6. **No modificar Angular sin comprobar renderizado** — Cualquier cambio en componentes, servicios o routing debe verificarse tanto con artículos antiguos como nuevos. El sitio tiene 21 artículos; todos deben seguir funcionando.

7. **No eliminar `content` ni `html` de los objetos artículo** — Son campos críticos para el renderizado. Ver §12 incidente documentado.

8. **No cambiar la estructura de `article.json`** sin actualizar `build-content.ts` — El pipeline lee campos específicos de article.json. Campos nuevos requieren soporte explícito en el script.

9. **Respetar la prioridad de metadatos** — `article.json` > frontmatter > defaults. No asumir que cambiar el frontmatter es suficiente si existe article.json.

10. **Ejecutar el flujo completo antes de deploy** — `npm run build:ssg` es el estándar. No hacer deploy parcial sin content + seo + build.
