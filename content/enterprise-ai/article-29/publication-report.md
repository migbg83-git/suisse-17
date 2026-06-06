# Publication Report - Article-29

Fecha: 2026-06-06
Articulo: Integridad de Secuencia: Como Evaluar la Madurez Operativa con Evidencia y No con Narrativas
Slug: integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas
Estado del alcance: Publicacion tecnica completada (sin deploy)

---

## Prevalidation

Validaciones ejecutadas sobre `content/enterprise-ai/article-29/article.md`:

- Frontmatter presente y valido:
  - `title`: OK
  - `slug`: OK
  - `description`: OK
  - `date`: OK
- YAML inicia exactamente en primera linea con `---`: OK
- Sin caracteres antes del primer `---`: OK
- BOM/bytes ocultos al inicio: NO (UTF-8 sin BOM)
- Slug validado:
  - sin acentos: OK
  - sin mayusculas: OK
  - sin espacios: OK
  - solo minusculas, numeros y guiones: OK

Referencia estructural usada para `article.json`:

- `content/enterprise-ai/article-28/article.json`
- `content/enterprise-ai/article-27/article.json`

No se modifico `article.md`.

---

## Article JSON

Archivo generado:

- `content/enterprise-ai/article-29/article.json`

Campos validados:

- `title`: Integridad de Secuencia: Como Evaluar la Madurez Operativa con Evidencia y No con Narrativas
- `slug`: integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas
- `author`: Miguel Benito García
- `category`: Enterprise AI
- `tags`: coherentes con Article-29, incluyendo los solicitados
- `relatedArticles`: prioriza y resuelve Article-26/27/28

Relacionado validado (resolucion de slugs):

- framework-archwise-integracion-capacidades-escalar-ia: OK
- arquitectura-adopcion-framework-archwise-orden-activacion: OK
- measurement-system-integracion-madurez-operativa: OK

Reading time:

- Criterio del proyecto confirmado en `sites/enterprise-ai/archwise/scripts/build-content.ts`:
  - `wordsPerMinute = 200`
  - `readingTime = Math.ceil(words / 200)` si no viene en `article.json`
- Para evitar valor inventado, `readingTime` se dejo sin fijar manualmente en `article.json`.
- Resultado de build para Article-29: `readingTime = 29`.

---

## Content Build

Comando ejecutado:

- `npm run build` (fase content incluida)

Resultado:

- Build content completado: OK
- `articles.json` generado con total esperado: 29 articulos
- Article-29 aparece en `src/assets/content/articles.json`: OK
- Slug correcto: OK
- Title correcto: OK
- Author correcto: OK
- Category correcta: OK
- ReadingTime generado: 29
- `relatedArticles` resuelven correctamente: OK
- Sin errores de frontmatter: OK
- Sin errores de JSON: OK

---

## SEO Build

Comando ejecutado:

- `npm run build` (fase SEO incluida)

Resultado:

- `sitemap.xml` generado: OK
- `robots.txt` generado: OK
- URL presente en sitemap:
  - `https://archwise.org/articulos/integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas`: OK
- `robots.txt`:
  - `Allow: /`: OK
  - `Sitemap: https://archwise.org/sitemap.xml`: OK
- Canonical en HTML prerenderizado del detalle: OK

Sin errores SEO bloqueantes.

---

## SSG Build

Comando ejecutado:

- `npm run build` (fase SSG incluida)

Resultado:

- Prerender completado: `Prerendered 32 static routes`
- Ruta prerenderizada validada:
  - `/articulos/integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas`: OK
- Sin errores SSR bloqueantes: OK
- Sin errores de `getPrerenderParams`: OK
- Related articles en pagina individual: OK
- Pagina individual generada correctamente: OK

---

## Local Validation

Rutas validadas en salida local prerenderizada:

- `/articulos`: OK
- `/articulos/integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas`: OK

Comprobaciones:

- Aparece en listado: OK
- Pagina individual renderiza: OK
- Titulo correcto: OK
- Slug correcto: OK
- Autor correcto: OK
- Categoria correcta: OK
- ReadingTime correcto (`29 min`): OK
- Contenido completo: OK
- Canonical correcta: OK
- Sitemap correcta: OK
- Related articles visibles y funcionales (incluye 26/27/28): OK

---

## Issues Found

No se encontraron bloqueos de publicacion tecnica.

Warnings no bloqueantes observados en build:

1. Angular diagnostics (`NG8107`, `NG8113`) preexistentes.
2. Sass deprecations (`@import`, `darken()`) preexistentes.
3. CSS budget warning preexistente (`article-detail.component.scss`).
4. Mensaje Angular no bloqueante: `The "prerender" option is not considered when "outputMode" is specified.`

Nota tecnica menor (no bloqueante):

- La funcion `toSlug` actual convierte etiquetas con acentos a slugs con hueco (`Transformación` -> `transformaci-n`).
- Impacto: solo slug de tag interno; no afecta slug del articulo, render, sitemap ni canonical.

---

## Publication Status

**READY FOR DEPLOY**

Se completo la publicacion tecnica de Article-29 sin deploy y sin cambios editoriales en `article.md`.
