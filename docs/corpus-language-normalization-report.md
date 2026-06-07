# Alcance
- Objetivo: normalizacion linguistica del corpus publicado solo en `content/enterprise-ai/article-20..29/article.md`.
- Restricciones respetadas: sin cambios en framework, Angular, rutas, slugs, SEO estructural ni articulo-30.
- Trabajo aplicado:
  - Recuperacion de integridad de codificacion UTF-8 en los 10 articulos objetivo (eliminacion de mojibake detectado durante la ejecucion).
  - Correcciones editoriales seguras y de alta confianza en microcopy/titulares de `article-26` y `article-29`.

# Archivos modificados
- `content/enterprise-ai/article-26/article.md`
- `content/enterprise-ai/article-29/article.md`

# Tipos de correccion aplicados
- Correccion de codificacion/mojibake en el conjunto `article-20..29`.
- Correccion de acentuacion y signos en encabezados/microcopy evidente:
  - `como` -> `cómo` cuando corresponde en titulares.
  - `organizacion` -> `organización` en heading.
  - `Por que?` -> `¿Por qué?`.
  - `articulo/practica` -> `artículo/práctica` en frontmatter y H1.

# Conceptos preservados en ingles
- Se mantuvieron sin traducir (segun criterio canonical): `Sequence Integrity`, `Evidence Integrity`, `Activation Debt`, `Context Debt`, `Operating Model`, `Governance`, `DevOps`, `enterprise`, `framework`.

# Builds
- Comando ejecutado en `sites/enterprise-ai/archwise`:
  - `npm run build:content` -> OK
    - Resultado: `articles.json` generado con 29 articulos.
  - `npm run build:seo` -> OK
    - Resultado: `sitemap.xml` y `robots.txt` generados.
  - `npm run build:ssg` -> OK
    - Resultado: 33 rutas prerenderizadas.
- Nota: existen warnings preexistentes de Angular/Sass (sin nuevos errores de compilacion asociados a esta normalizacion).

# Issues encontrados
- Issue 1: durante la ejecucion se introdujo corrupcion de codificacion (mojibake) en el lote objetivo.
  - Resolucion: restauracion de integridad textual de `article-20..29` y validacion posterior sin patrones mojibake (`Ã`, `Â`, `ÔÇ`, `├`, `�`).
- Issue 2: intento inicial de builds desde la raiz del repo (`C:\suisse-17`) sin `package.json`.
  - Resolucion: ejecucion correcta desde `sites/enterprise-ai/archwise`.

# Estado final
`CORPUS LANGUAGE NORMALIZATION COMPLETE`
