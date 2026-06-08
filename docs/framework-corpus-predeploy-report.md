# Framework Corpus Predeploy Report

Fecha: 2026-06-08
Contexto: Validación final predeploy de /framework y corpus (sin cambios de implementación)

## Cambios acumulados verificados

Comandos ejecutados:

- `git diff --stat`
- `git diff -- sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts`
- `git diff -- content/enterprise-ai/article-11/article.md`

Resultado:

- Solo hay cambios en 2 archivos:
  - `content/enterprise-ai/article-11/article.md`
  - `sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts`
- `framework.data.ts` contiene exclusivamente:
  - 3 slugs normalizados de Phase 1:
    - `las-7-caracteristicas-arquitectura-ai-ready`
    - `architecture-md-vale-mas-que-prompts`
    - `documentacion-necesita-llm`
  - 7 slugs huérfanos integrados de Phase 2:
    - `por-que-fracasan-iniciativas-ia`
    - `deuda-tecnica-ia-revela`
    - `technical-debt-vs-knowledge-debt-ia`
    - `framework-context-engineering-enterprise`
    - `plantillas-ejemplos-architecture-md-enterprise`
    - `arquitectura-vuelve-ser-estrategica`
    - `enterprise-ai-transformation-roadmap`
- `article-11` contiene correcciones lingüísticas/editoriales (título, descripción, headings y texto), sin cambio de slug.
- No se detectan cambios inesperados fuera del alcance aprobado.

## Archivos modificados

- `sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts`
- `content/enterprise-ai/article-11/article.md`

## Builds

Comandos ejecutados en `sites/enterprise-ai/archwise`:

1. `npm run build:content`
2. `npm run build:seo`
3. `npm run build:ssg`

Resultado:

- `build:content`: OK (`Generated: articles.json (29 articles)`)
- `build:seo`: OK (`sitemap.xml and robots.txt generated`)
- `build:ssg`: OK (`Prerendered 33 static routes`)

Observación:

- Warnings no bloqueantes preexistentes (Angular/Sass), sin error de build.

## Validación de rutas

Evidencia revisada en `dist/archwise/prerendered-routes.json`:

- `articles.json = 29`: OK
- `/framework` prerenderiza: OK
- `/articulos` prerenderiza: OK
- Article-11 prerenderiza: OK (`/articulos/por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia`)
- 7 artículos integrados prerenderizan: OK
- Slugs no resueltos en framework: 0 (`[framework] Slugs no resueltos en capa` en log SSG = 0)

## Validación de sitemap

Evidencia revisada en `public/sitemap.xml`:

- Contiene Article-11: OK
- Contiene los 7 artículos integrados: OK
- Contiene `/framework`: FAIL
  - `https://archwise.org/framework`: no encontrado
  - `https://archwise.org/framework/`: no encontrado

## Validación lingüística

Búsqueda solicitada en salida prerenderizada de `/framework`:

Términos:

- `Por que la mayoria`
- `mayoria`
- `estan preparados`
- `intencion`
- `segun`
- `Como usar`
- `quien eres`
- `proximamente`

Resultado sobre texto visible (normalizado desde `dist/archwise/browser/framework/index.html`):

- Todos los términos: 0

Nota técnica:

- En búsqueda de HTML crudo, `mayoria` aparece por el slug de URL (`.../por-que-la-mayoria-...`), no por texto visible al usuario.

## Riesgos

- Riesgo bloqueante de SEO/navegabilidad declarativa: `/framework` no está incluido en `sitemap.xml`.
- Riesgo bajo de interpretación en validaciones por substring sobre HTML crudo: falsos positivos en términos que aparecen en slugs/hrefs.

## Estado final

**BLOCKED**

Razón de bloqueo:

- No se cumple el criterio solicitado de sitemap para `/framework`.

No se realizó deploy desde esta validación.
