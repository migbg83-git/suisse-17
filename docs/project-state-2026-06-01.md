# Project State Report — Enterprise AI Cluster
Fecha: 2026-06-01

---

## Executive Summary

El clúster Enterprise AI de Archwise cuenta con **21 artículos publicados**. Durante la sesión del 31 de mayo / 1 de junio de 2026 se completó el ciclo editorial completo de article-21 ("AI Operating Model"), se detectó y resolvió un bug crítico en el pipeline de generación de contenido (`build-content.ts`), y se completó la normalización editorial/técnica de article-01 → article-05 con creación de `article.json`.

El proyecto se encuentra en estado operativo. La infraestructura técnica, el pipeline de build y la publicación editorial funcionan correctamente. No hay bloqueos activos de publicación.

---

## Estado técnico

### Infraestructura

| Componente | Estado | Notas |
|------------|--------|-------|
| Angular SSG/SSR | ✅ Operativo | v21.2.0 |
| Vercel deploy | ✅ Configurado | Deploy automático |
| SEO (OG, meta, sitemap) | ✅ Funcional | sitemap.xml regenerado 2026-06-01 |
| Google Analytics | ✅ Conectado | — |
| Search Console | ✅ Verificado | — |
| robots.txt | ✅ Correcto | Apunta a https://archwise.org/sitemap.xml |

### Build pipeline

| Comando | Estado | Última ejecución |
|---------|--------|------------------|
| `npm run build:content` | ✅ | 2026-06-01 |
| `npm run build:seo` | ✅ | 2026-06-01 |
| `npm run build` | ✅ | 2026-06-01 (doble ejecución OK) |

### Archivos generados clave

- `src/assets/content/articles.json` — 21 artículos, todos con `content` y `html` presentes
- `src/assets/content/articles/ai-operating-model-enterprise.json` — article-21 individual
- `content/enterprise-ai/article-01/article.json` — creado en normalización
- `content/enterprise-ai/article-02/article.json` — creado en normalización
- `content/enterprise-ai/article-03/article.json` — creado en normalización
- `content/enterprise-ai/article-04/article.json` — creado en normalización
- `content/enterprise-ai/article-05/article.json` — creado en normalización
- `public/sitemap.xml` — incluye `https://archwise.org/articulos/ai-operating-model-enterprise`
- `public/robots.txt` — `Sitemap: https://archwise.org/sitemap.xml`

### Technical State (actual)

- 21 artículos normalizados.
- Todos con `article.json` en `content/enterprise-ai/article-XX/`.
- Build correcto (doble ejecución exitosa).
- Sitemap correcto (21 artículos detectados, incluyendo article-01 → article-05 y article-21).

---

## Estado editorial

### Artículos publicados: 21

| Nº | Título | Categoría | Slug | Estado |
|----|--------|-----------|------|--------|
| 01 | Por qué un architecture.md vale más que cien prompts mágicos | Context Engineering | architecture-md-vale-mas-que-prompts | ✅ |
| 02 | La deuda técnica que la IA está empezando a revelar | Technical Debt | deuda-tecnica-ia-revela | ✅ |
| 03 | Qué documentación necesita realmente un LLM | Context Engineering | documentacion-necesita-llm | ✅ |
| 04 | La arquitectura vuelve a ser estratégica | Architecture Strategy | arquitectura-vuelve-ser-estrategica | ✅ |
| 05 | Technical Debt vs Knowledge Debt | Technical Debt | technical-debt-vs-knowledge-debt-ia | ✅ |
| 06 | Context Engineering para proyectos legacy | Context Engineering | context-engineering-legacy-ia-falla | ✅ |
| 07 | Framework práctico para Context Engineering | Context Engineering | framework-context-engineering-enterprise | ✅ |
| 08 | Plantillas y ejemplos reales de architecture.md | Context Engineering | plantillas-ejemplos-architecture-md-enterprise | ✅ |
| 09 | Architecture Review efectiva en la era de la IA | Governance | architecture-review-efectiva-ia | ✅ |
| 10 | Architecture Governance en la era de la IA | Governance | architecture-governance-contexto-compartido | ✅ |
| 11 | Sistemas no preparados para IA | AI-Ready Systems | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | ✅ |
| 12 | 7 características de arquitectura AI-Ready | AI-Ready Systems | las-7-caracteristicas-arquitectura-ai-ready | ✅ |
| 13 | AI-Ready Systems vs Legacy Systems | AI-Ready Systems | ai-ready-systems-vs-legacy-systems | ✅ |
| 14 | Por qué Prompt Engineering no es suficiente | Context Engineering | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | ✅ |
| 15 | Context Engineering vs Prompt Engineering | Context Engineering | context-engineering-vs-prompt-engineering | ✅ |
| 16 | AI-Augmented Development Teams | Enterprise AI | ai-augmented-development-teams | ✅ |
| 17 | AI-Native Organizations | Enterprise AI | ai-native-organizations | ✅ |
| 18 | Por qué fracasan iniciativas de IA | Enterprise AI | por-que-fracasan-iniciativas-ia | ✅ |
| 19 | Enterprise AI Transformation Roadmap | Enterprise AI | enterprise-ai-transformation-roadmap | ✅ |
| 20 | AI Governance Framework | Governance | ai-governance-framework | ✅ |
| **21** | **AI Operating Model** | **Enterprise AI** | **ai-operating-model-enterprise** | **✅ Nuevo** |

### Último artículo completado

- **Article-21: AI Operating Model**
- Título completo: "AI Operating Model: cómo organizar equipos, procesos y arquitectura para escalar la IA en la empresa"
- Categoría: Enterprise AI
- Tags: Enterprise AI, Governance, Organizational Memory, Knowledge Debt, AI Operating Model, AI-Native Organizations, Context Engineering
- Author: Archwise Editorial
- readingTime: 18 min
- Fecha: 2026-05-31
- Artefactos completados: brief.md, notes.md, outline.md, article.md, review.md, assets.md, article.json
- Publicación técnica: ✅ Completada
- Presencia en sitemap.xml: ✅ Confirmada

### Historical Articles Audit

- Auditoría histórica 01–05 completada (docs/article-01-05-audit.md).
- Resultado: 01–05 auditados, publicados, indexados, normalizados.
- Acción aplicada: creación de `article.json` para los cinco artículos.
- Estado final: integrados en el corpus oficial 01–21.

### Distribución por categoría (articles 01–21)

| Categoría | Artículos | IDs |
|-----------|-----------|-----|
| Context Engineering | 7 | 01, 03, 06, 07, 08, 14, 15 |
| Governance | 3 | 09, 10, 20 |
| AI-Ready Systems | 3 | 11, 12, 13 |
| Enterprise AI | 5 | 16, 17, 18, 19, 21 |
| Architecture Strategy | 1 | 04 |
| Technical Debt | 2 | 02, 05 |

Nota: no se aplican reclasificaciones pendientes de auditoría. Se mantiene category actual en article-04 (Architecture Strategy) y article-05 (Technical Debt).

---

## Riesgos activos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Modificaciones a build-content.ts sin validación | Media | **Crítico** | Checklist de validación obligatorio (ver lección aprendida) |
| Ejecutar `ng build --prerender` sin `build:content` previo | Baja | Medio | Usar `npm run build:ssg` como flujo canónico para garantizar `articles.json` actualizado |
| Deploy sin regenerar sitemap | Baja | Medio | Incluir `build:seo` en flujo de publicación |
| Código debug (console.log article-11) en build-content.ts | Baja | Bajo | Eliminar en próxima sesión de limpieza |
| Variantes editoriales históricas no consolidadas | Media | Medio | Limpiar article-01/article-v2.md, article-05/article-v2.md, article-05/article.md.cleaned con criterio editorial |

---

## Problemas encontrados y resueltos (sesión 2026-05-31/06-01)

### 1. Bug crítico: contenido no renderizado en todos los artículos

- **Fecha:** 2026-05-31
- **Severidad:** Crítica (afectaba a TODO el sitio)
- **Síntoma:** Todos los artículos mostraban solo cabecera, metadata y newsletter. El cuerpo completo desaparecía.
- **Causa raíz:** Al modificar `build-content.ts` para soportar lectura de categorías desde `article.json`, se reescribió el bloque de generación del objeto article sin incluir los campos `content` y `html`.
- **Por qué no se detectó inicialmente:** El build no falla. Los JSON se generan sin errores. El problema solo es visible al cargar un artículo en el navegador.
- **Solución:** Reintroducir `content: cleanedContent` y `html: html` en el objeto article generado por la función `buildContent()`.
- **Estado:** ✅ Resuelto.

### 2. article-21 ausente en sitemap.xml

- **Fecha:** 2026-06-01
- **Severidad:** Media (SEO)
- **Síntoma:** article-21 presente en articles.json pero no en public/sitemap.xml.
- **Causa raíz:** `npm run build:seo` no se había ejecutado tras añadir article-21.
- **Solución:** Ejecutar `npm run build:seo` (confirma presencia de URL en sitemap).
- **Estado:** ✅ Resuelto.

---

## Decisiones tomadas (sesión 2026-05-31/06-01)

| Decisión | Contexto | Impacto |
|----------|----------|---------|
| article.json de article-21 usa `"author": "Archwise Editorial"` | El artículo usa primera persona colectiva, no atribución individual | Consistencia editorial |
| Tags expandidos en article-21 | Incluye Organizational Memory, Knowledge Debt, AI Operating Model | Mejor SEO y discoverability |
| Checklist de validación post-build-content.ts | Resultado del incidente crítico | Prevención de regresiones |
| `npm run build:seo` como paso separado obligatorio | sitemap.xml no se genera automáticamente en `build` | Claridad en pipeline |
| `getPrerenderParams` dinámico desde `src/assets/content/articles.json` | Evitar mantenimiento manual de slugs hardcodeados | Prerender completo y escalable con el crecimiento del corpus |
| `npm run build:ssg` como comando estándar de publicación técnica | Garantiza secuencia `build:content` -> `build:seo` -> prerender | Evita fallos por `articles.json` ausente/desactualizado |

---

## Próximos pasos

### Inmediatos (prioridad alta)

1. **Verificar article-21 en producción** tras deploy en Vercel
   - Contenido renderizado completo
   - Canonical URL: `https://archwise.org/articulos/ai-operating-model-enterprise`
   - Open Graph tags correctos
   - Related articles visibles
2. **Limpieza de variantes editoriales antiguas**
   - article-01/article-v2.md
   - article-05/article-v2.md
   - article-05/article.md.cleaned
3. **Definir y arrancar article-22** (tema y brief)
4. **Eliminar logs de debug** en build-content.ts (console.log de article-11)

### Medio plazo (próximas sesiones)

5. **Definir article-22** — Temas candidatos:
   - Organizational Memory: el activo más infravalorado de las organizaciones AI-Native
   - Knowledge Systems for Enterprise AI
   - AI Coordination at Scale
   - Enterprise Knowledge Architecture
6. **Revisión visual** del sitio completo (verificar que todos los artículos renderizan)

### Backlog

7. Mejorar automatización de validaciones editoriales
8. Considerar test automatizado que valide presencia de `content` y `html` en articles.json
9. Revisar y expandir clusters temáticos
10. Evaluar RSS feed (actualmente no implementado)

---

## Recomendaciones

### Para cualquier IA o humano que continúe el proyecto

1. **Lee AI-HANDOFF.md primero.** Es la fuente de verdad operativa.
2. **Nunca modifiques build-content.ts sin validar el output completo.** El build no falla aunque falten campos críticos para el renderizado.
3. **Ejecuta siempre `npm run build:seo` tras añadir artículos.** El sitemap no se regenera automáticamente con `npm run build`.
4. **Usa los comandos exactos de package.json.** No inventes comandos. El runtime es `tsx`, no `node` para scripts TypeScript.
5. **El contenido editorial no se toca sin seguir el workflow.** brief → notes → outline → article → review → assets → article.json → build → verify → deploy.
6. **Si algo no renderiza, verifica primero que `content` y `html` están en el JSON generado.** Es el error más común y más difícil de detectar sin abrir el navegador.

### Para la arquitectura del proyecto

- El pipeline actual (`build:content` → `build:seo` → `ng build`) es funcional pero tiene un gap: no hay validación automática de que los campos críticos (`content`, `html`) estén presentes.
- Considerar añadir un script de validación post-build que verifique la integridad de articles.json antes de generar el SSG.
- El flujo `build:ssg` (que incluye prerender) ya es el flujo canónico. Mantener su uso para evitar ejecutar prerender sin `build:content` previo.

---

## Verificación final

- article-21 (AI Operating Model) es el último artículo completado.
- El siguiente artículo a desarrollar es article-22 (tema por definir).
- Los artículos 01–21 están publicados y normalizados con article.json.
- No hay bloqueos activos.
- El sitio es funcional y los 21 artículos se procesan correctamente en el build.

---

_Informe generado el 2026-06-01. Basado en análisis directo de archivos fuente, build pipeline y estado de artefactos generados._
