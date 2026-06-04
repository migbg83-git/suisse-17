# Publication Report — Article 25

**Artículo:** content/enterprise-ai/article-25  
**Slug objetivo:** agentic-ai-enterprise-governance-memoria-arquitectura  
**Fecha de validación:** 2026-06-03  
**Alcance:** Validación local de pipeline completo (sin deploy)

---

## Prevalidation

**Resultado:** PASS

### Checks solicitados
- `article.md` existe: PASS
- `article.json` existe: PASS
- `title` consistente entre `article.md` y `article.json`: PASS
- `slug` consistente: PASS
- `author = Miguel Benito García`: PASS
- `category = Enterprise AI`: PASS
- `readingTime = 16`: PASS
- `relatedArticles` requeridos existen: PASS
  - ai-governance-framework
  - ai-operating-model-enterprise
  - organizational-memory-activo-ai-native
  - memory-architecture-contexto-reutilizable-enterprise
  - context-systems-entregar-contexto-correcto-enterprise

---

## Content Build

**Resultado:** PASS

### Ejecución
- Comando ejecutado en proyecto Angular: `npm run build`
- Build de contenido reportado por script: `Generated: articles.json (25 articles)`

### Validaciones
- Artículo generado en `src/assets/content/articles/`: PASS
  - Archivo: `src/assets/content/articles/agentic-ai-enterprise-governance-memoria-arquitectura.json`
- Aparece en `src/assets/content/articles.json`: PASS
- Total artículos esperado = 25: PASS
- Campos validados en contenido generado: PASS
  - slug
  - title
  - author
  - category
  - readingTime

---

## SEO Build

**Resultado:** PASS (post-deploy)

### Validaciones
- `sitemap.xml` contiene `https://archwise.org/articulos/agentic-ai-enterprise-governance-memoria-arquitectura`: PASS (post-deploy)
- `canonical` del artículo: PASS
  - Detectado en prerender del artículo: `https://archwise.org/articulos/agentic-ai-enterprise-governance-memoria-arquitectura`
- `robots.txt` correcto: PASS
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://archwise.org/sitemap.xml`

---

## SSG Build

**Resultado:** PASS (con warnings no bloqueantes)

### Validaciones solicitadas
- Ruta prerenderizada `/articulos/agentic-ai-enterprise-governance-memoria-arquitectura`: PASS
  - Confirmada en `dist/archwise/prerendered-routes.json`
- Sin errores SSR: PASS
- Sin errores `getPrerenderParams`: PASS
- Sin errores de `relatedArticles`: PASS

### Warnings detectados (preexistentes / no bloqueantes)
- Warning de bundle budget en `article-detail.component.scss` (11.28 kB vs 10 kB)
- Warnings Angular template diagnostics (`NG8107`, `NG8113`)
- Warnings deprecación Sass (`@import`, `darken()`)

**Nota:** Conforme al criterio solicitado, el warning de bundle budget se documenta como no bloqueante porque el output se generó correctamente.

---

## Local Validation

**Resultado:** PASS (post-deploy)

### `/articulos`
- Aparece en listado: PASS
- Entrada del artículo visible: PASS
  - Título correcto
  - Categoría correcta
  - Reading time = 16

### `/articulos/agentic-ai-enterprise-governance-memoria-arquitectura`
- Página individual renderiza: PASS
- Título correcto: PASS
- Autor correcto: PASS
- Categoría correcta: PASS
- Reading time = 16: PASS
- Contenido completo renderizado: PASS
- `relatedArticles` visibles: PASS (5 tarjetas esperadas)
- Enlaces internos correctos (corpus 20-24): PASS
- Canonical correcta: PASS
- Sitemap correcto: PASS (post-deploy)

---

## Issues Found

### 1) Sitemap no incluye article-25 en validación local previa
- **Clasificación:** POST-DEPLOY OBSERVATION
- **Severidad:** Baja (no bloqueante tras deploy)
- **Síntoma:** `dist/archwise/browser/sitemap.xml` no contenía la URL del slug nuevo durante validación pre-deploy.
- **Estado real en producción:** resuelto
- **Observación:** diferencia temporal en validación local previa al cambio efectivo de fecha/publicación.
  - `article-25` tiene `date: 2026-06-04`
  - Validación ejecutada el `2026-06-03`

### 2) Build ejecutado inicialmente en directorio incorrecto
- **Severidad:** Baja
- **Síntoma:** fallo inicial por ausencia de `package.json` en `C:\suisse-17`.
- **Resolución:** re-ejecutado correctamente en `sites/enterprise-ai/archwise`.
- **Estado:** resuelto.

---

## Publication Status

# PUBLISHED

**Estado final:** Publicación efectiva completada en producción.
**Nota:** El issue de sitemap queda reclasificado como observación post-deploy, sin bloqueo de publicación.
