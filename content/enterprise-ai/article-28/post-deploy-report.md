# Post-Deploy Report — Article-28

Fecha: 2026-06-05
Articulo: Measurement System para Integración y Madurez Operativa
URL producción: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa

---

## Resumen

Article-28 publicado correctamente en producción. Todos los checks técnicos y editoriales pasaron. Un issue de sincronización de slug fue detectado y corregido durante el proceso de publicación. El artículo introduce System Health, Coherence Signals, Evidence Integrity e Integration Health como nuevos conceptos del vocabulario operativo de Archwise.

---

## Build

Comando ejecutado: npm run build:ssg
Fecha de ejecución: 2026-06-05
Exit code: 0

Resultados:
- Artículos procesados: 28
- Rutas prerenderizadas: 31
- Tiempo de build: ~56 segundos

Warnings no bloqueantes:
- NG8107 x3: optional chain operators en templates pre-existentes
- NG8113: ArticleCardComponent unused import en HomeComponent (pre-existente)
- Sass @import deprecation (pre-existente, Dart Sass 3.0.0)
- darken() color function deprecation (pre-existente)
- CSS budget: styles.css 229.72 kB (dentro del budget ajustado)

---

## SEO

Sitemap generado: public/sitemap.xml
URLs en sitemap: 31
Dominio: archwise.org (correcto)
URL Article-28 en sitemap: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa

robots.txt:
- User-agent: *
- Allow: /
- Sitemap: https://archwise.org/sitemap.xml

Nota: src/assets/sitemap.xml obsoleto (7 URLs, archwise.com) no afecta producción.
Robots.txt apunta a /sitemap.xml (raíz del browser), que es el correcto.
Deuda técnica pendiente: limpiar src/assets/sitemap.xml en próxima sesión técnica.

---

## SSG

HTML prerenderizado: dist/archwise/browser/articulos/measurement-system-integracion-madurez-operativa/index.html
Ruta: /articulos/measurement-system-integracion-madurez-operativa

Validación HTML prerenderizado:
- title: Measurement System para Integración y Madurez Operativa [...] | Archwise — OK
- og:url: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa — OK
- meta description: presente — OK
- og:description: presente — OK
- twitter:description: presente — OK

---

## Producción

URL activa: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa
Estado: DEPLOYED

Validaciones de producción:
- Artículo aparece en articles.json generado (28 total): OK
- JSON individual generado: dist/archwise/browser/assets/content/articles/measurement-system-integracion-madurez-operativa.json — OK
- Título correcto: OK
- Autor: Miguel Benito García — OK
- Category: Enterprise AI — OK
- readingTime: 29 — OK
- Canonical URL: https://archwise.org/articulos/measurement-system-integracion-madurez-operativa — OK
- Sitemap root (31 URLs): contiene Article-28 — OK

---

## Slug Synchronization

Issue detectado y resuelto durante publicación:

Situación inicial:
- article.md frontmatter slug: "measurement-system-integracion-madurez-operativa"
- article.json slug: "measurement-system-salud-sistemica-coherence-signals" (propuesto durante generación del JSON)

Causa: el JSON fue generado con un slug diferente al que ya existía en el frontmatter de article.md.

Impacto potencial: si no se hubiera corregido, el artículo se publicaría con el slug del frontmatter (correcto) pero article.json apuntaría a una canonical URL incorrecta.

Resolución: article.json corregido para sincronizar:
- slug: "measurement-system-integracion-madurez-operativa"
- canonicalUrl: "https://archwise.org/articulos/measurement-system-integracion-madurez-operativa"

Lección incorporada al proceso: validar frontmatter.slug === article.json.slug como check obligatorio pre-publicación.

---

## Related Articles

relatedArticles configurados (5/5):
- arquitectura-adopcion-framework-archwise-orden-activacion — EXISTE OK
- framework-archwise-integracion-capacidades-escalar-ia — EXISTE OK
- agentic-ai-enterprise-governance-memoria-arquitectura — EXISTE OK
- context-systems-entregar-contexto-correcto-enterprise — EXISTE OK
- organizational-memory-activo-ai-native — EXISTE OK

Todos los slugs resuelven correctamente en dist.

---

## Observaciones

1. El slug "measurement-system-integracion-madurez-operativa" es más conciso y descriptivo que la alternativa propuesta inicialmente. Refleja correctamente el tema sin sobreextenderse.

2. Los conceptos System Health, Coherence Signals, Evidence Integrity e Integration Health pasan a formar parte del vocabulario conceptual activo del corpus. Pueden usarse como relacionados en artículos futuros.

3. La mini-tipología de Coherence Signals (alineación, tensión, ruptura) introducida en article-28 tiene potencial para ser referenciada en article-29 (Sequence Integrity Scorecard).

4. La continuidad editorial con articles 24 y 27 está explícita en el texto y en relatedArticles.

5. article-final-adjustments.md documenta los 5 ajustes menores aplicados tras la review editorial (P1.1–P3.1).

---

## Estado Final

**PUBLISHED**

Artículo #28 del corpus Enterprise AI de Archwise.
Total corpus: 28 artículos publicados.
Siguiente artículo recomendado: Article-29 (ver docs/article-29-recommendation.md).
