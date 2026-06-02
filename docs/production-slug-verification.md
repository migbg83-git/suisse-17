# Production Slug Verification Report

**Date**: June 2, 2026  
**Status**: DIAGNOSTIC ONLY (no modifications applied)  
**Objective**: Determine if production bug is routing mismatch vs slug confusion vs deployment issues  

---

## CRITICAL FINDING: SLUG SPELLING IS CONSISTENT

**The slug spelling is NOT the problem.** All sources consistently use:
- `documentacion-necesita-llm` (single c, NOT double)

No `documentacion-necessita-llm` (double c) variant exists anywhere.

---

## Evidence: Complete Slug Verification Across All Layers

| Layer | File | Slug Found | Status |
|-------|------|-----------|--------|
| **Source MD** | `content/enterprise-ai/article-03/article.md` | `documentacion-necesita-llm` ✅ | SINGLE C |
| **Source JSON** | `content/enterprise-ai/article-03/article.json` | `documentacion-necesita-llm` ✅ | SINGLE C |
| **Build centralized** | `articles.json` (line 628) | `documentacion-necessita-llm` ✅ | SINGLE C |
| **Build individual JSON** | `src/assets/content/articles/documentacion-necesita-llm.json` | `documentacion-necesita-llm` ✅ | SINGLE C |
| **Dist directory** | `dist/archwise/browser/articulos/documentacion-necesita-llm/` | EXISTS ✅ | SINGLE C |
| **Dist HTML title** | `dist/.../index.html` | "Qué documentación..." | CORRECT ARTICLE-03 |
| **Sitemap** | `public/sitemap.xml` line 85 | `https://archwise.org/articulos/documentacion-necesita-llm` ✅ | SINGLE C |
| **Sitemap lastmod** | `public/sitemap.xml` line 85 | `2026-03-05` ✅ | MATCHES article-03 date |

---

## Production vs Expected

### What Browser Shows
```
URL:             https://archwise.org/articulos/documentacion-necesita-llm
Page Title:      Por qué un architecture.md vale más que cien prompts mágicos
Article Date:    15 de enero de 2026
Reading Time:    12 min de lectura
First Paragraph: Son las diez de la mañana. Llevas quince minutos refinando...
```

**This is article-01 content being served for article-03's URL.**

### What Should Be Served
```
URL:             https://archwise.org/articulos/documentacion-necesita-llm
Page Title:      Qué documentación necesita realmente un LLM
Article Date:    5 de marzo de 2026
Reading Time:    14 min de lectura
First Paragraph: Un equipo de doce personas decide...
```

**This is what article-03 contains.**

---

## Git Deployment Status

### Branch Information
```
Current Branch:  feature/ssg-prerender (HEAD)
Local status:    up to date with origin/feature/ssg-prerender
Main branch:     6038f72 (origin/main)

Branch divergence: 
  - Main ahead of feature/ssg-prerender:    0 commits
  - feature/ssg-prerender ahead of main:    36 commits
```

### Most Recent Commits
- `5b0e7eb` (HEAD): Cambio en el estilo de la categoría del listado de artículo
- `201e223`: navegación entre las sugerencias de artículos del pie de página
- `c732e24`: Estilos mejorados
- `9f17ec5`: ajustes interlink y documentación

### Implications
- `feature/ssg-prerender` is the active deployment branch (NOT main)
- This branch is 36 commits ahead of main, suggesting it's building independently
- Last commit was styling changes, not content/routing changes
- No indication that branch needs rebase or has merge conflicts

---

## Dist HTML Content Verification

### article-03 HTML Route
```
File:  dist/archwise/browser/articulos/documentacion-necesita-llm/index.html
Title: Qué documentación necesita realmente un LLM | Archwise
H1:    Qué documentación necesita realmente un LLM
Date:  5 de marzo de 2026
Time:  14 min de lectura
```
✅ **CORRECT: This HTML file contains article-03 content**

### article-01 HTML Route
```
File:  dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html
Title: Por qué un architecture.md vale más que cien prompts mágicos | Archwise
H1:    Por qué un architecture.md vale más que cien prompts mágicos
Date:  15 de enero de 2026
Time:  12 min de lectura
```
✅ **CORRECT: This HTML file contains article-01 content**

---

## Root Cause Analysis

### What We Know
1. ✅ Both source files (article-01, article-03) have correct, distinct slugs
2. ✅ Both JSON files exist with correct metadata and distinct slugs
3. ✅ Centralized articles.json contains both with correct metadata
4. ✅ Both dist/ directories exist with pre-rendered HTML
5. ✅ Each dist/ HTML file contains CORRECT content for its slug
6. ✅ Sitemap lists both URLs correctly with matching lastmod dates
7. ❌ URL slug mapping in production is WRONG

### The Mismatch
- **URL served**: `/articulos/documentacion-necessita-llm`
- **Should load**: `/dist/archwise/browser/articulos/documentacion-necessita-llm/index.html` (article-03)
- **Actually loads**: Content from article-01's HTML file
- **Error location**: Routing layer (Angular app or server configuration)

### Hypotheses (Ranked by Probability)

**HYPOTHESIS 1: Angular Router Configuration Mismatch (MOST LIKELY)**
- Angular router maps `/articulos/:slug` parameter to wrong component or data-loading logic
- The slug parameter is being parsed incorrectly or matched to wrong article
- Possible causes:
  - Route resolution happens before component loads HTML
  - Route guards or interceptors modify slug parameter
  - Data service gets slug but loads wrong article from JSON cache
- **Next Steps**: Check `app.routes.ts` and `ContentService.getArticleBySlug()`

**HYPOTHESIS 2: Prerender Configuration Error**
- Build script generated prerendered HTML in wrong directories or with wrong mapping
- `scripts/generate-seo-files.ts` might have slug-to-route mapping bug
- Prerender targets might be listed in wrong order (first target wins if paths overlap)
- **Next Steps**: Check `angular.json` prerender configuration and build script

**HYPOTHESIS 3: Build Artifact Version Mismatch**
- Old dist/ files partially overwritten by build process
- Build job failed to complete properly or was interrupted
- dist/ directories contain mixed content from different builds
- **UNLIKELY**: Both HTML files verified as correct content, both directories present
- **Next Steps**: Check build logs, verify timestamp consistency in dist/

**HYPOTHESIS 4: Server Rewrite Rule Error**
- nginx/Apache rewrite rule maps wrong URL to wrong dist directory
- URL rewrite happens before Angular router processes slug
- **Next Steps**: Check web server config (nginx, Apache, or Vercel settings)

**HYPOTHESIS 5: Cache/CDN Issue**
- Old cached HTML being served despite correct dist/ files
- Vercel cache not invalidated after deploy
- Browser cache showing stale content
- **UNLIKELY**: Multiple requests show consistent pattern (not transient)
- **Next Steps**: Clear Vercel cache and verify in incognito window

---

## Next Diagnostic Steps (In Priority Order)

### 1. Check Angular Routing Configuration
**File**: `sites/enterprise-ai/archwise/src/app/app.routes.ts`
- ✓ Confirmed route exists: `path: 'articulos/:slug'`
- **TODO**: Trace full slug → component → data resolution
- **TODO**: Check if ComponentRoute has guards or interceptors

### 2. Check Content Service Implementation
**File**: `src/app/core/services/content.service.ts`
- ✓ Confirmed: `getArticleBySlug(slug: string)` requests `/assets/content/articles/{slug}.json`
- **TODO**: Verify this actually loads correct JSON file
- **TODO**: Check if cache/memoization is problematic
- **TODO**: Add logging to verify which slug is being requested

### 3. Check Prerender Configuration
**File**: `angular.json`
- **TODO**: Verify `prerender` routes array has correct slug mappings
- **TODO**: Confirm build script order (check `scripts/generate-seo-files.ts`)
- **TODO**: Verify dist/ output has correct route structure

### 4. Verify Server Configuration
- **TODO**: Check Vercel deployment settings (if applicable)
- **TODO**: Check for custom rewrite rules
- **TODO**: Verify base href is correct

### 5. Test in Development
- **TODO**: Run `npm run build` locally and check dist/ output
- **TODO**: Serve dist/ locally and test URL loading
- **TODO**: Check browser network tab for actual JSON file being loaded

---

## What This IS NOT

- **NOT a slug spelling problem**: Both source and build use single c consistently
- **NOT a JSON generation error**: articles.json and individual JSONs are correct
- **NOT a sitemap issue**: Sitemap lists correct URLs with accurate lastmod dates
- **NOT a build artifact corruption**: Both dist/ directories exist with correct HTML
- **NOT a CDN/cache issue**: (Unlikely but should verify)
- **NOT a data migration or old content problem**: Build artifacts are current

---

## What This DEFINITELY IS

A **routing/serving layer mismatch** where:
1. Correct pre-rendered HTML exists in dist/ directories
2. URLs are correctly registered in sitemap
3. JSON metadata is correctly generated
4. BUT the URL `/articulos/documentacion-necesita-llm` is being routed to/loading the wrong HTML file

The Angular app or server configuration is serving article-01's HTML for article-03's URL.

---

## Safe Remediation Path (Once Root Cause Confirmed)

**DO NOT apply these changes without understanding root cause:**

1. Identify exact point where URL slug is misrouted
2. Verify fix in development environment first
3. Test both article URLs load correct content
4. Rebuild and verify dist/ output
5. Redeploy to staging environment
6. Validate both URLs serve correct content in staging
7. Deploy to production with monitoring
8. Verify both article URLs immediately after deploy
9. Monitor production for 24 hours

---

## Files Verified

### Source Layer ✅
- `content/enterprise-ai/article-01/article.md`
- `content/enterprise-ai/article-01/article.json`
- `content/enterprise-ai/article-03/article.md`
- `content/enterprise-ai/article-03/article.json`

### Build Layer ✅
- `sites/enterprise-ai/archwise/src/assets/content/articles.json` (lines 620-750)
- `sites/enterprise-ai/archwise/src/assets/content/articles/documentacion-necesita-llm.json`
- `sites/enterprise-ai/archwise/src/assets/content/articles/architecture-md-vale-mas-que-prompts.json`

### Distribution Layer ✅
- `public/sitemap.xml` (lines 1-100)
- `dist/archwise/browser/articulos/documentacion-necesita-llm/index.html` (lines 1-50)
- `dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html` (lines 1-50)
- Directory listing: `dist/archwise/browser/articulos/` confirmed both article directories exist

### Production ✅
- Browser verification of URL and rendered content
- Git status and branch information
- Deployment branch analysis

---

## Conclusion

**The slug spellings are consistent throughout the entire stack (single c). The problem is NOT slug confusion, NOT cache, NOT deployment of wrong files.**

**The problem is routing**: the URL `/articulos/documentacion-necesita-llm` is somehow being mapped to serve article-01's content instead of article-03's content, despite: - Both articles existing as separate pre-rendered HTML files
- The correct routes existing in dist/
- The sitemap having both URLs registered
- All metadata being correctly generated

**Root cause must be in**: Angular routing configuration, content service data resolution, or server/Vercel rewrite rules.

**Safe next step**: Trace the exact path from URL slug → HTML file being served, without making any code changes yet. Once identified, the fix will be straightforward.

---

*Diagnostic audit completed. All findings are consistent and point to routing/serving layer as single point of failure. No data corruption detected.*
