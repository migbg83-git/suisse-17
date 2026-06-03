# Article 24 Publication Report

Fecha: 2026-06-03  
Artículo: `content/enterprise-ai/article-24`  
Slug objetivo: `context-systems-entregar-contexto-correcto-enterprise`

## Prevalidation

### Archivos revisados
- `content/enterprise-ai/article-24/article.md`
- `content/enterprise-ai/article-24/article.json`
- `content/enterprise-ai/article-24/assets.md`

### Validaciones solicitadas

1. **Slug consistente**  
   - Objetivo: `context-systems-entregar-contexto-correcto-enterprise`  
   - Estado: OK (frontmatter y article.json alineados tras corrección crítica).

2. **Title consistente (`article.md` vs `article.json`)**  
   - Estado: OK.

3. **Author = Miguel Benito García**  
   - Estado: OK en frontmatter, article.json y outputs generados.

4. **Category = Enterprise AI**  
   - Estado: OK.

5. **ReadingTime (13 vs 19): fuente de verdad del pipeline**  
   - Hallazgo técnico confirmado en `sites/enterprise-ai/archwise/scripts/build-content.ts`:
     - `readingTime` se toma de `article.json` si existe.
     - Si no existe, se calcula desde el contenido de `article.md`.
     - El `readingTime` del frontmatter no es la fuente principal en este flujo.
   - Resultado actual:
     - `article.md` frontmatter: 19
     - `article.json`: 13
     - `src/assets/content/articles.json` generado: 13
   - **Decisión**: mantener `13` como valor efectivo de publicación (consistente con la fuente real usada por pipeline).

6. **relatedArticles (existencia de slugs)**  
   - Validados y existentes:
     - `memory-architecture-contexto-reutilizable-enterprise`
     - `organizational-memory-activo-ai-native`
     - `ai-operating-model-enterprise`
     - `context-engineering-vs-prompt-engineering`
     - `technical-debt-vs-knowledge-debt-ia`
   - Estado: OK.

### Incidencia crítica detectada en prevalidación

Durante la primera ejecución de validación, el artículo apareció como `/articulos/undefined` en sitemap/listado.  
Causa raíz: faltaban `slug` y `description` en frontmatter de `article.md` (campos requeridos por el pipeline de contenido).  
Acción mínima aplicada: se añadieron únicamente esos dos campos de metadata en frontmatter para desbloquear publicación local.

---

## Content Build

Comando ejecutado:
- `npm run build:content`

Resultado:
- OK
- Se detectan `24 article director(ies)`
- Se genera `src/assets/content/articles.json` con 24 artículos.

Validación article-24 en outputs:
- `title`: OK
- `slug`: `context-systems-entregar-contexto-correcto-enterprise` OK
- `author`: `Miguel Benito García` OK
- `category`: `Enterprise AI` OK
- `readingTime`: `13` (según fuente de verdad del pipeline) OK
- `relatedArticles`: 5 slugs esperados OK

Nota operativa:
- Se observan artefactos legacy en `src/assets/content/articles/` (`undefined.json`, `why-prompt-engineering-is-not-enough.json`).  
- No bloquean esta publicación porque el listado real lo determina `articles.json` y la ruta de article-24 quedó correcta tras el fix.

---

## SEO Build

Comando ejecutado:
- `npm run build:seo`

Resultado:
- OK (`sitemap.xml` y `robots.txt` generados)

Validaciones:
- `dist/archwise/browser/sitemap.xml` contiene:
  - `https://archwise.org/articulos/context-systems-entregar-contexto-correcto-enterprise` ✅
- `dist/archwise/browser/robots.txt`:
  - `Sitemap: https://archwise.org/sitemap.xml` ✅
- Canonical del detalle prerenderizado:
  - `https://archwise.org/articulos/context-systems-entregar-contexto-correcto-enterprise` ✅

---

## SSG Build

Comando ejecutado:
- `npm run build:ssg`

Resultado:
- OK
- `Prerendered 27 static routes.`

Validaciones técnicas:
- Ruta prerenderizada presente en `dist/archwise/prerendered-routes.json`:
  - `/articulos/context-systems-entregar-contexto-correcto-enterprise` ✅
- Sin errores SSR de bloqueo ✅
- Sin errores de `getPrerenderParams` de bloqueo ✅
- Sin errores de relatedArticles de bloqueo ✅

Warnings observados (no bloqueantes):
- Warnings Angular (`NG8107`, `NG8113`) preexistentes
- Warnings Sass deprecations preexistentes
- Mensaje informativo: `The "prerender" option is not considered when "outputMode" is specified.`
- No se reprodujo un fallo de CSS budget bloqueante en esta ejecución.

---

## Local Validation

Rutas validadas:
- `/articulos` ✅
- `/articulos/context-systems-entregar-contexto-correcto-enterprise` ✅

### /articulos (listado)
- Aparece article-24 en primera posición ✅
- Enlace correcto a slug final ✅
- Category visible: `Enterprise AI` ✅
- Reading time visible: `13 min` ✅

### /articulos/context-systems-entregar-contexto-correcto-enterprise (detalle)
- Página renderiza completa ✅
- `title` correcto ✅
- `date` correcta (3 de junio de 2026) ✅
- `author` correcto (`Miguel Benito García`) ✅
- `category` correcta (`Enterprise AI`) ✅
- `readingTime` correcto (`13 min de lectura`, fuente real pipeline) ✅
- Contenido completo renderizado ✅
- `relatedArticles` visibles y con slugs correctos ✅
- Canonical correcta ✅

---

## Issues Found

1. **CRÍTICO (resuelto):** article-24 generaba `/articulos/undefined` en sitemap/listado.  
   - Causa: ausencia de `slug` y `description` en frontmatter.  
   - Resolución: añadido mínimo de metadata en frontmatter de `article.md`.

2. **NO BLOQUEANTE:** desalineación potencial `readingTime` (frontmatter 19 vs article.json 13).  
   - Fuente de verdad real del pipeline: `article.json.readingTime` (o cálculo si no existe).  
   - Resolución operativa: mantener `13` como valor efectivo de publicación.

3. **NO BLOQUEANTE (higiene):** archivos legacy en `src/assets/content/articles/` por no limpieza automática del output dir.

---

## Publication Status

## READY FOR DEPLOY

Motivo:
- Pipeline local validado end-to-end (`build:content`, `build:seo`, `build:ssg`)
- Ruta final correcta y prerenderizada
- Sitemap, canonical, author, category, relatedArticles y readingTime efectivos validados
- Incidencia crítica detectada y resuelta

No se realizó deploy (según instrucción).
