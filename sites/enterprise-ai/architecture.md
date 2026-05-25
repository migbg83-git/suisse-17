# Architecture — archwise.dev

## Principio rector

La arquitectura más simple que cumpla los requisitos. Cero infraestructura innecesaria. Cero dependencias que no aporten valor directo. Un solo desarrollador debe poder entender, mantener y desplegar todo el sistema sin fricción.

---

## Decisiones fundamentales

| Decisión | Elección | Razón |
|----------|----------|-------|
| Framework | Angular 21 | SSG nativo. Ecosistema conocido. Estabilidad enterprise. |
| Rendering | SSG (prerender) | HTML estático = SEO perfecto + hosting mínimo. |
| CSS | Bootstrap 5 | No requiere diseño custom. Responsive inmediato. Familiar. |
| Contenido | Markdown → HTML en build | Edición simple. Versionable. Sin CMS. Sin base de datos. |
| Hosting | Arsys (hosting estático/VPS básico) | Coste mínimo. Dominio .dev incluido o económico. |
| Newsletter | Servicio externo (Buttondown) | Sin backend propio. API mínima. Coste $0-9/mes. |
| Analytics | Plausible / Umami self-hosted | Ligero. Sin cookies. GDPR-compliant. |
| Dominio | archwise.dev | Profesional. Corto. Memorable. |

---

## Stack completo

```
┌─────────────────────────────────────────────┐
│  BUILD TIME                                  │
│                                              │
│  Markdown (.md) → marked/unified → HTML      │
│  Angular 21 SSG → archivos estáticos         │
│  Generadores: sitemap.xml, rss.xml, robots   │
│                                              │
├─────────────────────────────────────────────┤
│  OUTPUT                                      │
│                                              │
│  /dist/archwise/browser/                     │
│  ├── index.html (homepage)                   │
│  ├── manifesto/index.html                    │
│  ├── articles/index.html                     │
│  ├── articles/[slug]/index.html              │
│  ├── newsletter/index.html                   │
│  ├── about/index.html                        │
│  ├── legal/privacy/index.html                │
│  ├── sitemap.xml                             │
│  ├── rss.xml                                 │
│  ├── robots.txt                              │
│  └── assets/                                 │
│                                              │
├─────────────────────────────────────────────┤
│  RUNTIME                                     │
│                                              │
│  Servidor web estático (Arsys)               │
│  No backend. No API propia. No DB.           │
│  Solo archivos HTML/CSS/JS servidos.         │
│                                              │
└─────────────────────────────────────────────┘
```

---

## Estructura de carpetas

```
archwise/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── content.service.ts       # Lee JSON pre-generado de artículos
│   │   │   │   ├── seo.service.ts           # Meta tags, OG, structured data
│   │   │   │   └── newsletter.service.ts    # Integración Buttondown
│   │   │   └── models/
│   │   │       └── article.model.ts
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── layout.component.ts
│   │   └── pages/
│   │       ├── home/
│   │       ├── manifesto/
│   │       ├── articles/
│   │       │   ├── article-list/
│   │       │   └── article-detail/
│   │       ├── newsletter/
│   │       ├── about/
│   │       └── legal/
│   ├── assets/
│   │   └── icons/
│   ├── content/                              # ← ARTÍCULOS AQUÍ
│   │   ├── articles/
│   │   │   ├── architecture-md-vale-mas-que-prompts.md
│   │   │   ├── deuda-tecnica-ia-revela.md
│   │   │   ├── documentacion-necesita-llm.md
│   │   │   └── arquitectura-vuelve-ser-estrategica.md
│   │   └── pages/
│   │       ├── manifesto.md
│   │       └── about.md
│   ├── styles/
│   │   ├── styles.scss                       # Bootstrap imports + overrides
│   │   ├── _variables.scss                   # Custom Bootstrap variables
│   │   └── _typography.scss                  # Tipografía para lectura
│   └── environments/
├── scripts/
│   ├── build-content.ts                      # Markdown → JSON con frontmatter
│   ├── generate-sitemap.ts                   # Genera sitemap.xml
│   ├── generate-rss.ts                       # Genera rss.xml
│   └── generate-robots.ts                    # Genera robots.txt
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Estrategia de contenido

### Formato de artículos

Cada archivo `.md` en `src/content/articles/` tiene frontmatter YAML:

```yaml
---
title: "Por qué un architecture.md vale más que cien prompts mágicos"
slug: "architecture-md-vale-mas-que-prompts"
date: "2026-05-15"
description: "El contexto explícito de tu proyecto es órdenes de magnitud más importante que la formulación del prompt."
cluster: "context-engineering"
tags: ["architecture", "documentation", "ai", "context"]
readingTime: 12
featured: true
series: "fundacional"
---

Contenido del artículo en Markdown...
```

### Clusters de contenido

| Cluster | Slug | Prioridad |
|---------|------|:---------:|
| Context Engineering | context-engineering | 1 |
| Angular Enterprise | angular-enterprise | 2 |
| Arquitectura + IA | architecture-ai | 3 |
| .NET + Azure | dotnet-azure | 4 |
| DevOps & Pipelines | devops-pipelines | 5 |
| Microfrontends | microfrontends | 6 |

### Proceso de compilación de contenido

`scripts/build-content.ts` ejecuta en pre-build:

1. Lee todos los `.md` de `src/content/articles/`
2. Extrae frontmatter (gray-matter)
3. Convierte Markdown a HTML (marked + highlight.js para código)
4. Genera `src/assets/content/articles.json` (índice con metadata)
5. Genera `src/assets/content/articles/[slug].json` (contenido HTML completo por artículo)

Angular consume estos JSON en build-time durante SSG. No hay lectura de archivos en runtime.

---

## Estrategia SEO

### SEO técnico

| Elemento | Implementación |
|----------|---------------|
| Title tags | `<title>` único por página. Formato: "Título — Archwise" |
| Meta description | Desde frontmatter `description`. 150-160 chars. |
| Open Graph | og:title, og:description, og:image, og:url por página |
| Twitter Cards | summary_large_image para artículos |
| Canonical URL | `<link rel="canonical">` en todas las páginas |
| Structured Data | JSON-LD: Article, WebSite, BreadcrumbList |
| Sitemap | Generado en build. Todas las URLs con lastmod y priority. |
| Robots.txt | Allow all. Referencia al sitemap. |
| URL structure | `/articles/[slug]` — planas, descriptivas, sin fechas |
| Internal linking | Links entre artículos del mismo cluster. Links al manifesto. |
| Heading hierarchy | Un solo H1 por página. H2-H4 para estructura. |
| Core Web Vitals | HTML estático = LCP < 1s. Sin JS blocking. |
| Mobile | Responsive por defecto (Bootstrap 5 grid). |

### SEO on-page por artículo

- H1 = título del artículo
- Primary keyword en título, H1, primer párrafo, meta description
- 2-3 internal links a artículos del mismo cluster
- 1 link al manifesto o a la newsletter (contextual)
- Imágenes con alt text descriptivo (si las hay)
- Lectura estimada visible (engagement signal)

### Sitemap strategy

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://archwise.dev/</loc>
    <lastmod>2026-05-25</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://archwise.dev/manifesto</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://archwise.dev/articles</loc>
    <priority>0.9</priority>
  </url>
  <!-- Cada artículo con priority 0.8 y lastmod real -->
</urlset>
```

### RSS

Formato Atom. Incluye título, link, fecha, descripción y contenido completo de cada artículo. Autodiscovery en `<head>`:

```html
<link rel="alternate" type="application/rss+xml" title="Archwise" href="/rss.xml">
```

---

## Flujo de publicación

### Escribir un artículo nuevo

```
1. Crear archivo .md en src/content/articles/nuevo-slug.md
2. Escribir frontmatter + contenido
3. Commit + push a main
4. Build pipeline se ejecuta automáticamente
5. Deploy automático a Arsys
6. Artículo live en archwise.dev/articles/nuevo-slug
```

### Detalle del flujo

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Escribir │    │  Commit  │    │  Build   │    │  Deploy  │
│  .md      │ → │  + Push  │ → │  (CI)    │ → │  (Arsys) │
│  local    │    │  main    │    │  SSG     │    │  FTP/SSH │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### Sin CMS

No hay panel de administración. No hay draft/publish workflow visual. El repositorio Git ES el CMS:

- `main` = producción
- Crear artículo = crear archivo y hacer push
- Editar artículo = editar archivo y hacer push
- Eliminar = borrar archivo y hacer push

Simplicidad absoluta. Un solo punto de verdad.

---

## Build pipeline

### Comandos

```
npm run build:content     # scripts/build-content.ts → JSON
npm run build:seo         # scripts/generate-sitemap.ts + rss + robots
npm run build:app         # ng build (SSG prerender)
npm run build             # Todo secuencial: content → seo → app
```

### Pipeline CI (GitHub Actions)

```
Trigger: push to main
Steps:
  1. Checkout
  2. Node 22 setup
  3. npm ci
  4. npm run build
  5. Deploy dist/ a Arsys (FTP/SSH/rsync)
```

### Prerender (SSG)

Angular 21 con `@angular/ssr`. Configuración en `angular.json`:

- `prerender: true`
- Lista de rutas generada dinámicamente desde `articles.json`
- Cada ruta produce un `index.html` completo

Output: carpeta `dist/` con HTML estático puro para cada URL.

### Tiempos de build esperados

| Fase | Estimación |
|------|:----------:|
| build:content (10 artículos) | < 2s |
| build:seo | < 1s |
| build:app (SSG) | < 30s |
| Deploy (FTP/rsync) | < 15s |
| **Total** | **< 1 min** |

---

## Despliegue

### Arsys — Hosting estático

| Aspecto | Detalle |
|---------|---------|
| Tipo | Hosting web básico o VPS mínimo |
| Qué se sube | Contenido de `dist/archwise/browser/` |
| Método | FTP (lftp) o SSH (rsync) desde GitHub Actions |
| SSL | Let's Encrypt (gratis, auto-renovable) |
| CDN | No necesario inicialmente (Arsys sirve España/EU bien) |
| Coste | ~3-5 €/mes |

### Configuración del servidor

Requisitos mínimos del servidor web (Apache/Nginx):

- Servir `index.html` para cada ruta (fallback para SPA routing NO necesario con SSG puro)
- Gzip/Brotli habilitado
- Cache headers para assets estáticos (1 año para CSS/JS hasheados)
- HTTPS forzado (redirect 301 HTTP → HTTPS)
- Headers de seguridad: X-Content-Type-Options, X-Frame-Options, CSP básico

### .htaccess (si Apache en Arsys)

Configuración necesaria:

- RewriteRule para URLs limpias (sin .html)
- ErrorDocument 404 → página 404 custom
- Expiración de cache para assets
- Compresión gzip
- Redirect www → non-www (o viceversa)

---

## Newsletter — Integración

### Servicio: Buttondown

| Criterio | Valor |
|----------|-------|
| Coste | Gratis hasta 100 suscriptores. $9/mes hasta 1000. |
| API | REST simple. Solo necesitamos endpoint de suscripción. |
| Sin tracking invasivo | Compatible con la filosofía de la marca. |
| RSS-to-email | Puede enviar automáticamente cuando hay nuevo artículo. |

### Integración en la web

Formulario HTML puro que hace POST al endpoint de Buttondown. No requiere JS del proveedor. No carga scripts de terceros. No afecta performance.

```
[Form] → POST api.buttondown.email/v1/subscribers → Confirmación en frontend
```

Alternativa: action del form directa a Buttondown (sin JS, máximo SEO).

---

## Performance budget

| Métrica | Target |
|---------|:------:|
| LCP (Largest Contentful Paint) | < 1.2s |
| FID (First Input Delay) | < 50ms |
| CLS (Cumulative Layout Shift) | < 0.05 |
| Total bundle JS | < 50KB gzipped |
| HTML por página | < 30KB |
| Lighthouse score | > 95 (todas las categorías) |

### Cómo se consigue

- HTML estático pre-renderizado (sin espera a JS para contenido)
- Bootstrap 5 solo los módulos usados (grid, typography, utilities) via tree-shaking SCSS
- Zero JavaScript de terceros en initial load (no analytics blocking, no chat widgets, no social embeds)
- Imágenes: WebP, lazy loading, dimensiones explícitas
- Fonts: system font stack (sin Google Fonts cargando externamente)

---

## Escalabilidad futura

### Lo que NO se hace ahora pero está previsto

| Fase | Adición | Impacto arquitectónico |
|------|---------|----------------------|
| Fase 2 | Página /recursos (lead magnets) | Nueva ruta + nuevos .md en content/resources/ |
| Fase 2 | Tags/clusters como páginas | Nuevas rutas prerender: /articles/tag/[tag] |
| Fase 3 | Productos digitales (eBook, templates) | Página /productos. Integración Gumroad/LemonSqueezy (externo). |
| Fase 3 | Búsqueda de artículos | Pagefind (search estático en build-time, zero backend) |
| Fase 4 | Curso online | Plataforma externa (Teachable/Podia). Link desde la web. |
| Fase 4 | Consulting page | Nueva ruta estática. Calendly embed. |
| Fase 4 | Multi-idioma (EN) | Carpetas content/en/articles/. Rutas /en/articles/[slug]. |

### Lo que NUNCA se hará

- Backend propio (no hay razón para mantener servidor)
- Base de datos (el contenido vive en Git)
- CMS visual (Git es el CMS)
- Comentarios nativos (si se necesitan: Giscus, externo)
- Autenticación de usuarios (productos en plataformas externas)
- Server-side rendering dinámico (SSG cubre todo)

---

## Costes operativos

| Servicio | Coste mensual |
|----------|:-------------:|
| Arsys hosting | ~4 €/mes |
| Dominio archwise.dev | ~12 €/año (~1 €/mes) |
| Buttondown newsletter | 0 € (hasta 100 subs) → 9 € |
| GitHub (repo privado + Actions) | 0 € |
| Plausible analytics (o Umami self-hosted) | 0-9 €/mes |
| **Total Fase 1** | **~5 €/mes** |
| **Total Fase 2 (>100 subs)** | **~14 €/mes** |

---

## Dependencias externas

| Dependencia | Propósito | Riesgo si desaparece |
|-------------|-----------|---------------------|
| Angular | Framework | Bajo. LTS de años. Migración posible pero no probable. |
| Bootstrap | Estilo | Nulo. CSS compilado. No hay vendor lock-in. |
| GitHub Actions | CI/CD | Bajo. Pipeline trivial de replicar en cualquier CI. |
| Buttondown | Newsletter | Bajo. Estándar email. Exportar lista y migrar a otro. |
| Arsys | Hosting | Nulo. Archivos estáticos portables a cualquier hosting. |
| marked | Markdown parser | Nulo. Librería estándar, reemplazable por cualquier parser. |

---

## Resumen ejecutivo

```
Escribir .md → Build genera HTML estático → Deploy a hosting barato → Web live

Sin backend. Sin base de datos. Sin CMS. Sin complejidad.
Coste: ~5€/mes. SEO: máximo. Performance: máxima. Mantenimiento: mínimo.
```

---

*Última actualización: Mayo 2026*