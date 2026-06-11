# Project State — 2026-06-11

Resumen ejecutivo
- Estado: Proyecto operativo.
- Artículos totales publicados: 31 (Article-31 integrado y prerenderizado).
- Fecha del snapshot: 2026-06-11

Article-31 (cerrado)
- Título: Del Prompt al Sistema: una arquitectura para equipos virtuales de IA
- Slug: arquitectura-equipos-virtuales-ia-enterprise
- Categoría: Enterprise AI
- Capa Framework: Capa 4 · AI Operating Model
- Fecha de publicación: 2026-06-11
- Estado: Publicado / integrado / prerenderizado

Cambios aplicados durante integración (resumen)
- Normalización y sincronización del slug en `article.md` (frontmatter) y `article.json`.
- Inclusión del slug en `FRAMEWORK_PAGE_DATA.layers[].articleSlugs` para Capa 4.
- Eliminación de un bloque duplicado en `content/enterprise-ai/article-31/article.md` (higiene editorial en la fuente MD).
- No se modificó código de aplicación ni componentes Angular.

Build y validación (ejecutado)
- Comando ejecutado: `npm run build` (incluye `build:content` y `build:seo`).
- Resultado de `build:content`: ✓ generado `articles.json` y JSONs por artículo.
- Rutas prerenderizadas: `/articulos/arquitectura-equipos-virtuales-ia-enterprise` incluida.
- Total rutas prerenderizadas: 35
- Exit code: 0 (build completado)

Warnings observadas (deuda técnica pendiente)
- NG8107: optional chaining diagnostics en plantillas Angular (advertencias de compilador v21).
- Deprecations Sass: uso de `@import` y funciones de color (`darken`) marcadas como obsoletas.
- Budgets Angular excedidos: initial bundle y algunos SCSS de componentes exceden budgets configurados.

Estado técnico general
- Framework: Angular v21 (SSG/static outputMode).
- Pipeline content/build: funcional (MD -> JSON -> prerender).
- Prerender: 35 rutas estáticas generadas.
- Artículo-31 presente en `sites/enterprise-ai/archwise/dist/archwise/browser/articulos/arquitectura-equipos-virtuales-ia-enterprise/index.html`.

Decisiones tomadas
- `Article-31` se integra formalmente en la Capa 4 (AI Operating Model) del Framework Archwise.
- El slug canónico debe venir siempre del `frontmatter` de `article.md`; `article.json` debe sincronizarse.
- Las modificaciones aplicadas fueron de carácter editorial y de mapeo; no cambiaron lógica de la app.

Riesgos y pendientes
- Imagen Open Graph (`og-image.png`) para Article-31: pendiente de generar/añadir (impacto SEO/preview en redes).
- Warnings de Sass / NG8107: deuda técnica que debe revisarse en una tarea separada.
- Budgets Angular: requiere revisión (optimización o ajuste de budgets) si se requiere exit code 0 sin advertencias en CI.

Próximos pasos recomendados
1. Generar y publicar `og-image` para Article-31 (assets/images/og-image-article-31.png) y revalidar sitemap/preview.
2. Planificar una tarea para revisar warnings de Sass y recomendaciones de migración a `color.adjust`.
3. Revisar budgets Angular (audit bundles y revisar importaciones de CSS/Bootstrap).
4. Post-launch: registrar la nueva URL en Search Console y ejecutar verificación de indexación tras el LinkedIn launch.
5. Preparar Article-32 (AI economics) como próximo candidato editorial.

Notas operativas
- No se tocó código de aplicación ni componentes Angular durante estas acciones.
- Cualquier cambio adicional en `framework.data.ts` debe validarse contra `src/assets/content/articles.json` antes de deploy.

Contacto
- Responsable editorial: Miguel Benito García
- Responsable técnico (build/content): equipo Archwise

-----
Archivo generado automáticamente como snapshot de estado tras cierre de Article-31.
