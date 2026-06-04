---
title: "Publication Report — Article-26: Framework Archwise"
date: 2026-06-04
status: READY FOR DEPLOY
---

# Publication Report — Article-26

**Artículo:** Framework Archwise: por qué la IA no escala con más capacidades sino con mejor integración  
**Slug:** `framework-archwise-integracion-capacidades-escalar-ia`  
**Fecha de informe:** 2026-06-04  
**Estado final:** ✅ READY FOR DEPLOY

---

## Pre-Validation

| Item | Valor | Estado |
|------|-------|--------|
| article.md | APPROVED - PRODUCTION READY | ✅ |
| review.md | APPROVED WITH MINOR CHANGES → aplicadas | ✅ |
| assets.md | READY FOR DESIGNER | ✅ |
| article.json | GENERATED & VALIDATED | ✅ |
| readingTime | 27 (validado vs corpus 220 WPM) | ✅ |
| article-final-adjustments.md | DOCUMENTED | ✅ |
| article-json-validation.md | DOCUMENTED | ✅ |
| reading-time-validation.md | DOCUMENTED | ✅ |

### Issue detectado pre-build (CORREGIDO)

**Slug/Title mismatch entre article.md frontmatter y article.json:**

El build-content.ts usa `article.md` frontmatter como fuente de verdad para `slug` y `title`, y `article.json` para `readingTime`, `relatedArticles` y `category`. Al generar article.json se eligió un slug/title SEO mejorado que no había sido sincronizado en el frontmatter de article.md.

**Corrección aplicada:** article.md frontmatter actualizado con slug y title finales antes del build:
- `slug`: `framework-archwise-capacidad-operativa-ia-escala` → `framework-archwise-integracion-capacidades-escalar-ia`
- `title`: "Framework Archwise: como convertir..." → "Framework Archwise: por qué la IA no escala..."
- `description`: actualizada con la versión final de article.json
- `date`: 2026-06-03 → 2026-06-04

---

## FASE 1 — Build Content

**Comando ejecutado:** `npm run build:ssg` (incluye build:content + build:seo + ng build --prerender)

| Validación | Resultado | Estado |
|-----------|---------|--------|
| `src/assets/content/articles.json` generado | 26 artículos | ✅ |
| Article-26 presente en articles.json | Slug correcto | ✅ |
| Article-26 en `articles/[slug].json` | Archivo existe | ✅ |
| **slug** | `framework-archwise-integracion-capacidades-escalar-ia` | ✅ |
| **title** | Framework Archwise: por qué la IA no escala... | ✅ |
| **author** | Miguel Benito García | ✅ |
| **category** | Enterprise AI | ✅ |
| **readingTime** | 27 | ✅ |
| **relatedArticles** | 6 artículos vinculados | ✅ |

### relatedArticles — Validación de existencia

| Slug | Existe en build | Estado |
|------|----------------|--------|
| `ai-governance-framework` | True | ✅ |
| `ai-operating-model-enterprise` | True | ✅ |
| `organizational-memory-activo-ai-native` | True | ✅ |
| `memory-architecture-contexto-reutilizable-enterprise` | True | ✅ |
| `context-systems-entregar-contexto-correcto-enterprise` | True | ✅ |
| `agentic-ai-enterprise-governance-memoria-arquitectura` | True | ✅ |

---

## FASE 2 — Build SEO

**Generado por:** `build:seo` (parte de `build:ssg`)  
**Archivo:** `public/sitemap.xml` → copiado a `dist/archwise/browser/sitemap.xml`

| Validación | Resultado | Estado |
|-----------|---------|--------|
| sitemap.xml generado | ✅ | ✅ |
| Total `<loc>` en sitemap | 29 (3 estáticas + 26 artículos) | ✅ |
| **Article-26 en sitemap** | `https://archwise.org/articulos/framework-archwise-integracion-capacidades-escalar-ia` | ✅ |
| robots.txt generado | `User-agent: * / Allow: / / Sitemap: https://archwise.org/sitemap.xml` | ✅ |

---

## FASE 3 — Build SSG

**Comando:** `ng build --prerender`  
**Resultado:** Prerendered 29 static routes (23.865 segundos)

| Validación | Resultado | Estado |
|-----------|---------|--------|
| Total rutas prerenderizadas | 29 | ✅ |
| Ruta article-26 prerenderizada | `/articulos/framework-archwise-integracion-capacidades-escalar-ia/index.html` | ✅ |
| Canonical URL en HTML | `https://archwise.org/articulos/framework-archwise-integracion-capacidades-escalar-ia` | ✅ |
| Errores SSR | Ninguno | ✅ |
| Errores getPrerenderParams | Ninguno | ✅ |
| Errores relatedArticles | Ninguno | ✅ |
| Exit code | 1 (ver Warnings) | ⚠️ |

---

## FASE 4 — Validación Local (output estático)

| Validación | Resultado | Estado |
|-----------|---------|--------|
| Article-26 aparece en `/articulos` listing | True | ✅ |
| Página individual renderiza | True | ✅ |
| Título correcto en `<title>` | "Framework Archwise: por qué la IA no escala con más capacidades sino con mejor integración \| Archwise" | ✅ |
| Autor "Miguel Benito García" presente | True | ✅ |
| Categoría "Enterprise AI" presente | True | ✅ |
| readingTime "27 min" presente en HTML | True | ✅ |
| relatedArticles visibles (todos 6) | True (todos existen) | ✅ |
| Canonical correcta | `https://archwise.org/articulos/framework-archwise-integracion-capacidades-escalar-ia` | ✅ |
| Sitemap correcto | 26 artículos incluidos | ✅ |
| robots.txt correcto | Allow: / + Sitemap correcto | ✅ |

---

## Issues Found

### Resueltos durante esta sesión

**ISSUE-01 — Slug/Title mismatch (BLOCKER — CORREGIDO)**
- **Descripción:** `article.json` tenía el slug/title SEO mejorado pero `article.md` frontmatter conservaba los valores originales. `build-content.ts` usa `article.md` frontmatter como fuente de verdad para `slug` y `title`.
- **Impacto:** Build habría publicado artículo con slug antiguo, canonical incorrecta, URL diferente a la planificada.
- **Corrección:** `article.md` frontmatter actualizado con slug, title, description y date finales antes del build.

**ISSUE-02 — Sitemap no actualizado (BLOCKER — RESUELTO)**
- **Descripción:** `npm run build` no incluye `build:seo` (generación dinámica del sitemap). El sitemap en `public/` era manual y tenía 25 entradas sin article-26.
- **Impacto:** Article-26 prerenderizado pero no indexable por crawlers.
- **Corrección:** Ejecutado `npm run build:ssg` (incluye `build:seo`) que regenera el sitemap desde `articles.json`. Resultado: 26 artículos en sitemap.

### No bloqueantes (conocidos)

**WARN-01 — Build exit code 1 (CSS budget)**
- **Descripción:** `article-detail.component.scss` supera el budget de 10kB en 1.28 kB (total: 11.28 kB).
- **Impacto:** Build finaliza con exit code 1, pero todos los assets y rutas se generan correctamente. Issue preexistente (no introducido por article-26).
- **Decisión:** No bloqueante. Documentar como deuda técnica de CSS a corregir en sprint separado.

**WARN-02 — Angular template warnings NG8107 (3 instancias)**
- **Descripción:** Uso de `?.` en templates donde el tipo no incluye `null | undefined`.
- **Impacto:** Warning en compilación, sin impacto en runtime.
- **Decisión:** No bloqueante. Preexistente.

**WARN-03 — NG8113 — ArticleCardComponent unused**
- **Descripción:** `ArticleCardComponent` importado pero no usado en `HomeComponent`.
- **Impacto:** Ninguno en runtime. Bundle ligeramente mayor.
- **Decisión:** No bloqueante. Preexistente.

**WARN-04 — Sass deprecations (4 instancias)**
- **Descripción:** `@import` y función `darken()` deprecated en Dart Sass 3.0.0.
- **Impacto:** Ninguno hasta migración a Dart Sass 3.0. Preexistente.
- **Decisión:** No bloqueante. Documentar para migración futura.

---

## Follow-up Pendiente (fuera de scope)

**FU-01 — Article-25 readingTime inconsistente**
- Article-25 (`agentic-ai-enterprise-governance-memoria-arquitectura`) tiene `readingTime: 16`
- Palabras reales: ~5,610
- readingTime esperado a 220 WPM: **~26 minutos**
- Discrepancia: −10 minutos (subestimado)
- **Acción recomendada:** Actualizar `content/enterprise-ai/article-25/article.json` con `"readingTime": 26`
- **Prioridad:** Media (no bloquea publicación de article-26)
- **Scope:** Tarea separada

---

## Resumen de Build

```
Build command:  npm run build:ssg
Build time:     23.865 seconds
Static routes:  29 prerendered
Exit code:      1 (non-blocking CSS budget warning)
Output:         dist/archwise/browser/
```

---

## Publication Status

```
✅ READY FOR DEPLOY
```

**Condiciones verificadas:**
- ✅ Article-26 en articles.json (26 total)
- ✅ Slug correcto: framework-archwise-integracion-capacidades-escalar-ia
- ✅ Title correcto con acentos
- ✅ Author: Miguel Benito García
- ✅ Category: Enterprise AI
- ✅ readingTime: 27
- ✅ relatedArticles: 6 (todos existen)
- ✅ Prerendered: /articulos/framework-archwise-integracion-capacidades-escalar-ia/
- ✅ Canonical correcta
- ✅ En sitemap (26 artículos)
- ✅ robots.txt correcto
- ✅ Aparece en listado /articulos
- ✅ Sin errores SSR ni getPrerenderParams

**Pendiente antes de deploy:**
- [ ] (Opcional) Corregir CSS budget warning en article-detail.component.scss
- [ ] (Follow-up) Corregir readingTime de Article-25
- [ ] Configurar og-image.png para Article-26 (asset de diseño pendiente)

**No hace falta nuevo build** — el output actual en `dist/archwise/browser/` está listo para deploy.

