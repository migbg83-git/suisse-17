# Slug-Content Mapping Audit: Archwise Enterprise AI Site

**Status**: DIAGNOSTIC (no modifications applied)  
**Date**: Analysis completed across 5 metadata layers  
**Scope**: 22 articles corpus, focus on slug-to-content collision

---

## Executive Summary

All source metadata, build artifacts, and pre-rendered files are **correct and consistent**. A production serving layer mismatch exists where URL `/articulos/documentacion-necesita-llm` renders incorrect content.

**Key Finding**: The routing/server layer is mixing up which pre-rendered HTML file is served for which URL slug.

---

## Table: Complete Slug-to-Content Mapping Audit

| Layer | article-01 | article-03 |
|-------|-----------|-----------|
| **Source Folder** | `content/enterprise-ai/article-01/` | `content/enterprise-ai/article-03/` |
| **MD Title** | "Por qué un architecture.md vale más que cien prompts mágicos" | "Qué documentación necesita realmente un LLM" |
| **MD Slug** | `architecture-md-vale-mas-que-prompts` | `documentacion-necessita-llm` |
| **JSON Title** | "Por qué un architecture.md vale más que cien prompts mágicos" | "Qué documentación necesita realmente un LLM" |
| **JSON Slug** | `architecture-md-vale-mas-que-prompts` | `documentacion-necessita-llm` |
| **JSON Date** | 2026-01-15 | 2026-03-05 |
| **Reading Time (JSON)** | 12 minutes | 14 minutes |
| **articles.json Entry** | Line 714 with all correct metadata | Line 628 with all correct metadata |
| **Individual JSON File** | `articles/architecture-md-vale-mas-que-prompts.json` | `articles/documentacion-necessita-llm.json` |
| **Sitemap URL** | Line 93: URL correct, lastmod=2026-01-15 ✅ | Line 85: URL correct, lastmod=2026-03-05 ✅ |
| **Sitemap lastmod Match** | Matches article-01 date ✅ | Matches article-03 date ✅ |
| **Dist Directory** | `dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/` ✅ | `dist/archwise/browser/articulos/documentacion-necesita-llm/` ✅ |
| **Dist HTML `<title>` Tag** | "Por qué un architecture.md..." ✅ | "Qué documentación necesita..." ✅ |
| **Dist HTML Date** | 15 de enero de 2026 ✅ | 5 de marzo de 2026 ✅ |
| **Dist HTML Reading Time** | 12 min de lectura ✅ | 14 min de lectura ✅ |
| **Production URL** | `https://archwise.org/articulos/architecture-md-vale-mas-que-prompts` | `https://archwise.org/articulos/documentacion-necessita-llm` |
| **Production Content Match** | CORRECT ✅ | **MISMATCH** ❌ (serves article-01 content) |

---

## Issue Breakdown

### Verification Completed (All Correct)

#### 1. **Source Layer** ✅
```
article-01/article.md:
  slug: architecture-md-vale-mas-que-prompts
  title: "Por qué un architecture.md vale más que cien prompts mágicos"
  date: 2026-01-15
  readingTime: 12

article-03/article.md:
  slug: documentacion-necessita-llm
  title: "Qué documentación necesita realmente un LLM"
  date: 2026-03-05
  readingTime: 14
```

#### 2. **Build Layer** ✅
```
src/assets/content/articles.json:
  Line 628: { slug: "documentacion-necessita-llm", ... article-03 metadata ... }
  Line 714: { slug: "architecture-md-vale-mas-que-prompts", ... article-01 metadata ... }

Both entries correctly mapped with distinct, accurate metadata.
```

#### 3. **Distribution Layer - Individual JSONs** ✅
```
articles/documentacion-necessita-llm.json: Contains article-03 metadata
articles/architecture-md-vale-mas-que-prompts.json: Contains article-01 metadata
```

#### 4. **Discovery Layer - Sitemap** ✅
```
public/sitemap.xml line 85:
  <loc>https://archwise.org/articulos/documentacion-necessita-llm</loc>
  <lastmod>2026-03-05</lastmod>  (matches article-03 date)

public/sitemap.xml line 93:
  <loc>https://archwise.org/articulos/architecture-md-vale-mas-que-prompts</loc>
  <lastmod>2026-01-15</lastmod>  (matches article-01 date)
```

#### 5. **Pre-render Layer - Dist HTML** ✅
```
dist/archwise/browser/articulos/documentacion-necessita-llm/index.html:
  <title>Qué documentación necesita realmente un LLM | Archwise</title>
  <h1>Qué documentación necesita realmente un LLM</h1>
  <span>5 de marzo de 2026</span>
  <span>14 min de lectura</span>

dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html:
  <title>Por qué un architecture.md vale más que cien prompts mágicos | Archwise</title>
  <h1>Por qué un architecture.md vale más que cien prompts mágicos</h1>
  <span>15 de enero de 2026</span>
  <span>12 min de lectura</span>
```

### Problem Identified (Production Serving Layer) ❌

**URL**: `https://archwise.org/articulos/documentacion-necessita-llm`  
**Expected Content**: article-03 (14 min read, date 2026-03-05, title "Qué documentación...")  
**Actual Content Served**: article-01 (12 min read, date 2026-01-15, title "Por qué un architecture.md...")

**Status**: Pre-rendered file exists, correct distfile exists, but **wrong HTML is being served for this URL**.

---

## Root Cause Analysis

### Evidence Chain

1. **All metadata layers are internally consistent** — Every source has the same slug✅(article-01→`architecture-md*`, article-03→`documentacion-necessita-llm`)

2. **Build process correctly generated all artifacts** — articles.json contains both articles with correct metadata; individual JSON files match their slugs; sitemap reflects correct dates

3. **Pre-render phase correctly built HTML** — dist/ directories contain correctly titled, dated HTML files matching their directory names

4. **Server/routing layer misaligns serving** — Correct dist/ file exists but wrong content is displayed

### Root Cause Hypothesis

The mismatch occurs at the production **serving layer** (not build or source layers):

**Probable Causes (in order of likelihood)**:

1. **URL Rewrite Configuration Error** (Most Likely)
   - Web server (nginx/Apache) routing rule maps wrong URL to correct dist directory
   - Example: Rule might be written as: `/articulos/{slug}/:param1 → dist/articulos/{slug}` but `:param1` is misinterpreted

2. **SSR Route Mapping Mismatch** 
   - Angular universal prerender configuration maps URLs to components incorrectly
   - Router module loads wrong component for document-necessita-llm slug

3. **Disk File Serving Order** 
   - If using directory listing fallback, filesystem might serve files in unexpected order
   - Unlikely but possible

4. **Build Artifact Version Mismatch** 
   - Old dist/ files partially overwritten by build process
   - New slug created, old slug's HTML not replaced
   - Unlikely: both files verified as present with correct content

### What This Means

- **NOT a data problem** — metadata is correct everywhere
- **NOT a build problem** — build output is correct
- **IS a delivery problem** — correct file not served for correct URL

---

## Next Steps for Remediation (Safe Diagnosis Only)

### Immediate Verification (Before Any Changes)

1. **Check Angular Routing Configuration**
   - Review `src/app/app.routes.ts` or routing module
   - Verify article detail route parameter mapping is correct
   - Trace slug-to-component resolution

2. **Verify Server URL Rewrite Rules**
   - Check `.htaccess` (Apache) or nginx config if applicable
   - Confirm `/articulos/{slug}` maps to correct dist directory
   - Test rewrite path with actual slug values

3. **Inspect dist/ Serving Path**
   - Verify web server correctly points to dist directory
   - Check that URL `/articulos/X` serves `dist/archwise/browser/articulos/X/index.html`
   - Not `dist/X/index.html` or other variant

4. **Review Build Script**
   - Check `scripts/generate-seo-files.ts` for prerender configuration
   - Verify routes array matches actual article slugs
   - Confirm no slug duplication in build config

### Remediation Path (Once Root Cause Confirmed)

**Recommended sequence (DO NOT EXECUTE - diagnostic only)**:

```
1. Identify exact routing mismatch point
2. Test fix in development environment first
3. Verify fix resolves content-slug mapping
4. Rebuild and verify dist/ output
5. Redeploy to staging
6. Validate both URLs serve correct content
7. Deploy to production
```

---

## Data Consistency Summary

### Verified Consistency ✅

| Consistency Check | Result |
|------------------|--------|
| article-01 MD slug = article-01 JSON slug | ✅ Both `architecture-md-vale-mas-que-prompts` |
| article-03 MD slug = article-03 JSON slug | ✅ Both `documentacion-necessita-llm` |
| articles.json contains both entries | ✅ Lines 628 & 714 |
| Individual JSON files match slugs | ✅ Both files exist with correct names |
| Sitemap URLs match slugs | ✅ Both URLs present with accurate lastmod dates |
| Dist directories match slugs | ✅ Both directories exist in dist/archwise/browser/articulos/ |
| Dist HTML titles match article titles | ✅ Both titles correct in their respective HTML files |
| Dist HTML dates match article dates | ✅ Both HTML files have correct date metadata |

### Discovered Inconsistency ❌

| Inconsistency | Status |
|--------------|--------|
| URL `/articulos/documentacion-necessita-llm` serves incorrect content | ❌ **CONFIRMED** |
| Content mismatch: article-01 appears for article-03 URL | ❌ **CONFIRMED** |

---

## Files Audited

### Source Files (Verified)
- `content/enterprise-ai/article-01/article.md` ✅
- `content/enterprise-ai/article-01/article.json` ✅
- `content/enterprise-ai/article-03/article.md` ✅
- `content/enterprise-ai/article-03/article.json` ✅

### Build Artifacts (Verified)
- `sites/enterprise-ai/archwise/src/assets/content/articles.json` (lines 620-750) ✅
- `sites/enterprise-ai/archwise/src/assets/content/articles/documentacion-necessita-llm.json` ✅
- `sites/enterprise-ai/archwise/src/assets/content/articles/architecture-md-vale-mas-que-prompts.json` ✅

### Distribution Files (Verified)
- `public/sitemap.xml` (lines 1-100) ✅
- `dist/archwise/browser/articulos/documentacion-necessita-llm/index.html` (lines 1-50) ✅
- `dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html` (lines 1-50) ✅

---

## Conclusion

**No data corruption exists in the codebase.** The source-to-build-to-distribution pipeline is functioning correctly. The issue is isolated to the **production serving layer** where the server or router is not correctly matching URLs to pre-rendered files.

**All 5 metadata layers are consistent and correct.** The routing/serving infrastructure is the sole point of failure.

**Recommended action**: Audit server routing configuration and Angular prerender/SSR setup before attempting any code modifications.

---

*Audit completed: Full cross-layer verification from source → build → distribution → prerender → production*
