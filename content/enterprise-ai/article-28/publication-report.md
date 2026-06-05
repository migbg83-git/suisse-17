# Publication Report - Article-28

Articulo: Measurement System para Integración y Madurez Operativa
Fecha de publicacion: 2026-06-05
Build ejecutado: npm run build:ssg
Slug de produccion: measurement-system-integracion-madurez-operativa
Canonical: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa

---

## Prevalidation

Estado editorial previo al build:

- candidate-analysis.md: APPROVED
- brief.md: APPROVED
- notes.md: APPROVED
- outline.md: APPROVED
- article.md: APPROVED (6.230 palabras, readingTime = 29 min)
- review.md: APPROVED WITH MINOR CHANGES
- article-final-adjustments.md: APPLIED
- assets.md: COMPLETE
- article.json: VALIDATED Y CORREGIDO

Validaciones previas:
- Slug sin acentos: OK
- article.json sincronizado con frontmatter de article.md: OK (corregido durante esta sesion)
- relatedArticles con slugs reales: OK

---

## Content Build (FASE 1)

Comando: npm run build:content (parte de build:ssg)
Estado: PASS

Validaciones:
- Article-28 generado en articles.json: OK
- Total articulos en articles.json: 28
- Slug correcto: measurement-system-integracion-madurez-operativa
- Titulo: Measurement System para Integración y Madurez Operativa: cómo detectar salud sistémica antes de que la deuda se convierta en estructura
- Author: Miguel Benito García
- Category: Enterprise AI
- readingTime: 29
- relatedArticles resuelven: OK (5/5 slugs existen)
- Archivo individual generado: dist/archwise/browser/assets/content/articles/measurement-system-integracion-madurez-operativa.json

---

## SEO Build (FASE 2)

Comando: npm run build:seo (parte de build:ssg)
Estado: PASS

Validaciones:
- sitemap.xml generado en public/ con 31 URLs: OK
- URL Article-28 en sitemap: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa
- robots.txt apunta a: https://archwise.org/sitemap.xml
- Dominio correcto en sitemap: archwise.org

Issues conocidos (no bloqueantes):
- ISSUE-SEO-1 (CONOCIDO, PRE-EXISTENTE): src/assets/sitemap.xml es un archivo estatico obsoleto con 7 URLs y dominio archwise.com. Este archivo se copia a dist/archwise/browser/assets/sitemap.xml durante ng build. No afecta el sitemap canonico que sirven los servidores web (public/sitemap.xml → browser/sitemap.xml), ya que robots.txt apunta a /sitemap.xml (raiz del browser), no a /assets/sitemap.xml. No es un bloqueante de publicacion.

---

## SSG Build / Prerender (FASE 3)

Comando: ng build --prerender (parte de build:ssg)
Estado: PASS

Validaciones:
- Total rutas prerenderizadas: 31
- Ruta Article-28 prerenderizada: /articulos/measurement-system-integracion-madurez-operativa
- Archivo HTML generado: dist/archwise/browser/articulos/measurement-system-integracion-madurez-operativa/index.html
- Sin errores SSR: OK
- Sin errores getPrerenderParams: OK
- og:url en HTML: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa

Warnings conocidos (no bloqueantes):
- NG8107 x3: optional chain operators en templates (ArticleCardComponent, ArticleDetailComponent) - pre-existentes en corpus
- NG8113: ArticleCardComponent no usado en HomeComponent - pre-existente
- Sass @import deprecation: Dart Sass 3.0.0 incompatibility warning - pre-existente
- darken() deprecation: Sass color functions - pre-existente
- CSS budget: posible exceso de budget en styles.css (229 kB) - pre-existente

---

## Local Validation (FASE 4)

Validaciones sobre dist generado:

Listado /articulos:
- Article-28 aparece en articles.json: OK
- Total articulos: 28

Pagina individual /articulos/measurement-system-integracion-madurez-operativa:
- HTML prerenderizado: EXISTE
- Titulo en HTML: correcto
- og:url: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa
- description en meta: correcta
- Canonical URL: alineada con slug de produccion
- relatedArticles (5/5): todos existen en dist

SEO checks:
- sitemap.xml (browser root, 31 URLs): contiene Article-28
- robots.txt: apunta a sitemap correcto en archwise.org
- Canonical: correcta

---

## Issues Found

### ISSUE-1: Slug mismatch (RESUELTO)

Descripcion:
- article.json tenia slug "measurement-system-salud-sistemica-coherence-signals"
- article.md frontmatter tenia slug "measurement-system-integracion-madurez-operativa"
- El build usa frontmatter.slug como fuente de verdad para el slug de produccion

Impacto: article.json tendia slug incorrecto respecto al sistema de build.
Resolucion: article.json corregido durante esta sesion. Slug y canonicalUrl sincronizados.
Estado: CLOSED

### ISSUE-2: Stale sitemap en src/assets (CONOCIDO, NO BLOQUEANTE)

Descripcion:
- src/assets/sitemap.xml contiene 7 URLs antiguas con dominio archwise.com
- Este archivo se copia a dist/.../browser/assets/sitemap.xml durante ng build
- El sitemap canonico correcto (31 URLs, archwise.org) esta en dist/.../browser/sitemap.xml

Impacto: El sitemap en /assets/sitemap.xml no es el sitemap canonico. robots.txt apunta a /sitemap.xml (correcto). Ningun crawler usa /assets/sitemap.xml como entrada.
Recomendacion: Eliminar o actualizar src/assets/sitemap.xml para evitar confusion futura.
Estado: PRE-EXISTENTE, NO BLOQUEANTE PARA PUBLICACION

### ISSUE-3: Encoding en terminal (COSMÉTICO, NO BLOQUEANTE)

Descripcion:
- Los outputs de terminal muestran caracteres Unicode como "IntegraciÃ³n" en lugar de "Integración"
- El archivo HTML generado contiene los caracteres correctos en UTF-8
- Es un problema de codificacion de la consola PowerShell, no del contenido real

Impacto: Ninguno en produccion.
Estado: COSMÉTICO

---

## Publication Status

**READY FOR DEPLOY**

Slug de produccion: measurement-system-integracion-madurez-operativa
URL publica: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa
Total articulos en corpus: 28
Rutas prerenderizadas: 31 (estaticas + articulos + paginas core)

Todos los checks criticos pasan:
- Content build: PASS
- SEO build: PASS
- Prerender: PASS
- Sitemap canonico: PASS (31 URLs, archwise.org)
- robots.txt: PASS
- relatedArticles: PASS (5/5)
- HTML prerenderizado: PASS

No hay bloqueantes para deploy.
