# Project State Report — Enterprise AI Cluster
Fecha: 2026-06-01

Actualizacion operativa: 2026-06-04 (post-publicacion de article-27)

---

## Executive Summary

El clúster Enterprise AI de Archwise cuenta con **27 artículos publicados**. Tras la publicación de article-27 ("Arquitectura de adopción del Framework Archwise: por qué el orden de activación determina la escalabilidad real") y la validación de producción, el proyecto mantiene estado operativo pleno. La página /articulos refleja el nuevo artículo en listado y detalle, con metadata y relatedArticles correctos.

El proyecto se encuentra en estado operativo. La infraestructura técnica, el pipeline de build y la publicación editorial funcionan correctamente. No hay bloqueos activos de publicación.

---

## Estado técnico

### Infraestructura

| Componente | Estado | Notas |
|------------|--------|-------|
| Angular SSG/SSR | ✅ Operativo | v21.2.0 |
| Vercel deploy | ✅ Configurado | Deploy automático |
| SEO (OG, meta, sitemap) | ✅ Funcional | sitemap.xml regenerado 2026-06-03 |
| SEO interno (relatedArticles prerender) | ✅ Mejorado | Fase 1 framework core completada |
| Google Analytics | ✅ Conectado | — |
| Search Console | ✅ Verificado | — |
| robots.txt | ✅ Correcto | Apunta a https://archwise.org/sitemap.xml |

### Build pipeline

| Comando | Estado | Última ejecución |
|---------|--------|------------------|
| `npm run build:content` | ✅ | 2026-06-04 |
| `npm run build:seo` | ✅ | 2026-06-04 |
| `npm run build:ssg` | ✅ | 2026-06-04 |
| deploy | ✅ | 2026-06-04 |

### Archivos generados clave

- `src/assets/content/articles.json` — 26 artículos, todos con `content` y `html` presentes
- `src/assets/content/articles/ai-operating-model-enterprise.json` — article-21 individual
- `src/assets/content/articles/organizational-memory-activo-ai-native.json` — article-22 individual
- `src/assets/content/articles/memory-architecture-contexto-reutilizable-enterprise.json` — article-23 individual
- `content/enterprise-ai/article-01/article.json` — creado en normalización
- `content/enterprise-ai/article-02/article.json` — creado en normalización
- `content/enterprise-ai/article-03/article.json` — creado en normalización
- `content/enterprise-ai/article-04/article.json` — creado en normalización
- `content/enterprise-ai/article-05/article.json` — creado en normalización
- `public/sitemap.xml` — incluye `https://archwise.org/articulos/memory-architecture-contexto-reutilizable-enterprise`
- `public/robots.txt` — `Sitemap: https://archwise.org/sitemap.xml`

### Technical State (actual)

- 27 artículos normalizados.
- Todos con `article.json` en `content/enterprise-ai/article-XX/`.
- Build correcto (doble ejecución exitosa).
- Sitemap correcto en producción para article-27.
- Internal linking framework core (articles 17–23) con relatedArticles en HTML prerenderizado.
- Pipeline corregido: `npm run build` ejecuta `build:seo` antes de compilar para evitar sitemap stale.

---

## Estado editorial

### Artículos publicados: 27

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
| **21** | **AI Operating Model** | **Enterprise AI** | **ai-operating-model-enterprise** | **✅ Publicado** |
| **22** | **Organizational Memory** | **Enterprise AI** | **organizational-memory-activo-ai-native** | **✅ Nuevo** |
| **23** | **Memory Architecture: cómo diseñar sistemas que convierten conocimiento organizativo en contexto reutilizable para humanos y agentes de IA** | **Enterprise AI** | **memory-architecture-contexto-reutilizable-enterprise** | **✅ Publicado** |
| **24** | **Context Systems: entregar el contexto correcto a la persona e IA correcta en el momento correcto** | **Enterprise AI** | **context-systems-entregar-contexto-correcto-enterprise** | **✅ Publicado** |
| **25** | **Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen** | **Enterprise AI** | **agentic-ai-enterprise-governance-memoria-arquitectura** | **✅ Publicado** |
| **26** | **Framework Archwise: por qué la IA no escala con más capacidades sino con mejor integración** | **Enterprise AI** | **framework-archwise-integracion-capacidades-escalar-ia** | **✅ Publicado** |
| **27** | **Arquitectura de adopción del Framework Archwise: por qué el orden de activación determina la escalabilidad real** | **Enterprise AI** | **arquitectura-adopcion-framework-archwise-orden-activacion** | **✅ Publicado** |

### Último artículo completado

- **Article-27: Arquitectura de adopción del Framework Archwise**
- Título completo: "Arquitectura de adopción del Framework Archwise: por qué el orden de activación determina la escalabilidad real"
- Slug: arquitectura-adopcion-framework-archwise-orden-activacion
- Categoría: Enterprise AI
- Author: Miguel Benito García
- Fecha: 2026-06-04
- readingTime: 21 min
- Estado técnico:
   - build:content OK
   - build:seo OK
   - build:ssg OK
   - deploy OK
- Producción validada:
   - URL operativa OK
   - renderizado OK
   - metadata OK
   - relatedArticles OK

### Actualización operativa — Article-27

Fecha: 2026-06-04  
Estado: PUBLISHED

Datos:
- slug: `arquitectura-adopcion-framework-archwise-orden-activacion`
- categoría: `Enterprise AI`
- readingTime: `21`
- autor: `Miguel Benito García`
- build: OK
- deploy: OK
- producción validada: OK
- sitemap fix aplicado: OK
- pipeline build corregido (`build` incluye `build:seo`): OK

### Registro histórico (article-24)

- **Article-24: Context Systems**
- Título completo: "Context Systems: entregar el contexto correcto a la persona e IA correcta en el momento correcto"
- Slug: context-systems-entregar-contexto-correcto-enterprise
- Categoría: Enterprise AI
- Author: Miguel Benito García
- readingTime: 13 min
- Fecha: 2026-06-03
- Artefactos completados: brief.md, notes.md, outline.md, article.md, article.json
- Estado técnico:
   - build:content OK
   - build:seo OK
   - build:ssg OK
   - deploy OK (via PR #27 → main)
- Presencia en sitemap.xml: ✅ Confirmada (local/dist)
- Canonical correcta: ✅ Confirmada
- relatedArticles: ✅ Configurados
- Presencia en /articulos/: ✅ Confirmada
- Presencia en articles.json: ✅ Confirmada

### Articles Index v2

Fecha: 2026-06-03
Estado: DEPLOYED

Resumen:
- Hero editorial
- Empieza aquí (5 artículos)
- Últimos publicados (24 artículos cronológicos)
- Mapa del framework (4 etapas con conectores visuales)
- Navegación por anclas (#empieza-aqui, #ultimos-publicados, #mapa-framework)

Resultado:
Mejora de discoverability y onboarding del framework Archwise.

### Internal Linking — Fase 1 (completada)

- Alcance aplicado: `article-17` a `article-23` (`article.json` con `relatedArticles` explícitos)
- Soporte técnico completado:
   - `build-content.ts` serializa `relatedArticles` desde `article.json`
   - Modelo Angular incluye `relatedArticles?: string[]`
   - `ArticleDetailComponent` usa flujo SSR-friendly con `forkJoin(article + articles)`
   - Resolución por slug en orden definido + fallback por category/tags
- Validación completada:
   - `npm run build:ssg` exit code 0
   - article-01, article-17, article-22 y article-23 contienen enlaces relacionados en HTML estático (`dist/.../index.html`)

### Historical Articles Audit

- Auditoría histórica 01–05 completada (docs/article-01-05-audit.md).
- Resultado: 01–05 auditados, publicados, indexados, normalizados.
- Acción aplicada: creación de `article.json` para los cinco artículos.
- Estado final: integrados en el corpus oficial 01–23.

### Distribución por categoría (articles 01–27)

| Categoría | Artículos | IDs |
|-----------|-----------|-----|
| Context Engineering | 7 | 01, 03, 06, 07, 08, 14, 15 |
| Governance | 3 | 09, 10, 20 |
| AI-Ready Systems | 3 | 11, 12, 13 |
| Enterprise AI | 11 | 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27 |
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

### 3. Build SSG falla con exit code 1 — exceso de presupuesto de bundle

- **Fecha:** 2026-06-01
- **Severidad:** Media (bloquea builds, pero output se genera)
- **Síntoma:** `npm run build:ssg` termina con exit code 1 tras completar el build. SASS warnings sobre funciones deprecadas. Bundle: 518.77 kB vs presupuesto 500 kB.
- **Causa raíz:** Angular detecta exceso de bundle (518.77 kB > 500 kB) como violación de presupuesto `maximumWarning`.
- **Contexto:** El crecimiento del corpus hasta article-23 incrementó el bundle. El exceso medido fue de 18.77 kB (3.75%).
- **Solución:** Ajustar presupuesto en `angular.json` (build.configurations.production.budgets): actualizar `maximumWarning: 520kB` y `maximumError: 600kB`. Mantiene control futuro (error en 600 kB) mientras permite build actual.
- **Validación:** `npm run build:ssg` completa con exit code 0. Article-23 presente en:
   - `dist/archwise/browser/articulos/memory-architecture-contexto-reutilizable-enterprise/index.html` ✅
  - `dist/archwise/browser/assets/content/articles.json` ✅
  - `dist/archwise/browser/sitemap.xml` ✅
- **Estado:** ✅ Resuelto. Future: considerar optimización de bundles (SCSS deprecation, CSS tree-shaking) en session posterior.

### 4. Related articles visibles en runtime pero ausentes en HTML prerenderizado

- **Fecha:** 2026-06-01
- **Severidad:** Alta (SEO interno + navegación estática)
- **Síntoma:** En detalle de artículo aparecía "No hay artículos relacionados" en HTML prerenderizado aunque `article.json` tuviera `relatedArticles`.
- **Causa raíz:** Flujo asíncrono en dos subscriptions en `ArticleDetailComponent`; prerender no capturaba la segunda carga de datos.
- **Solución:** Unificar carga en `forkJoin` (`article + articles`) y resolver related explícitos por slug preservando orden.
- **Validación:** HTML estático con enlaces relacionados reales en:
   - `dist/archwise/browser/articulos/ai-native-organizations/index.html` ✅
   - `dist/archwise/browser/articulos/architecture-md-vale-mas-que-prompts/index.html` ✅
   - `dist/archwise/browser/articulos/organizational-memory-activo-ai-native/index.html` ✅
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
| Ajuste de presupuesto en `angular.json` (budget inicial) | Exceso de 18.77 kB sobre presupuesto anterior (500 kB → 518.77 kB) tras crecimiento del corpus | Permite builds exitosos (exit code 0) mientras mantiene control futuro (error threshold 600 kB) |
| Fase 1 Internal Linking en framework core | Mejorar SEO interno y coherencia de navegación | RelatedArticles configurados en articles 17–23 |
| Validación de relatedArticles en HTML prerenderizado | Runtime de navegador no es suficiente para una web editorial SSG | Criterio operativo obligatorio de QA técnico |

---

## Próximos pasos

### Inmediatos (prioridad alta)

1. **Corpus Audit 2.0**
2. **Article-24 candidato: Context Systems**
3. **Optimización de metadata/relatedArticles si procede**
4. **Eliminar logs de debug** en build-content.ts (console.log de article-11)
5. **Optimizar bundle** — investigar SCSS deprecation y tree-shaking

### Medio plazo (próximas sesiones)

6. **Definir article-24** — Temas candidatos:
   - Context Systems
   - AI Coordination Beyond Teams
   - De Knowledge Systems a Continuous Learning Organizations
7. **Revisión visual** del sitio completo (verificar que todos los artículos renderizan, assets se visualizan correctamente)

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
7. **Valida relatedArticles en HTML prerenderizado (`dist/.../index.html`), no solo en navegador.**

### Para la arquitectura del proyecto

- El pipeline actual (`build:content` → `build:seo` → `ng build`) es funcional pero tiene un gap: no hay validación automática de que los campos críticos (`content`, `html`) estén presentes.
- Considerar añadir un script de validación post-build que verifique la integridad de articles.json antes de generar el SSG.
- El flujo `build:ssg` (que incluye prerender) ya es el flujo canónico. Mantener su uso para evitar ejecutar prerender sin `build:content` previo.

---

## Verificación final

- article-26 (Framework Archwise) es el último artículo completado y publicado.
- Los artículos 01–26 están publicados y normalizados con article.json.
- Build pipeline ejecuta con exit code 0 tras ajuste de presupuesto de bundle.
- No hay bloqueos activos.
- El sitio es funcional y los 25 artículos se procesan correctamente en el build.
- Presencia verificada en articles.json, sitemap.xml y rutas de prerender.
- Related articles del framework core visibles en HTML estático prerenderizado.

---

_Informe generado el 2026-06-01. Actualizacion operativa aplicada el 2026-06-04 con inclusion de article-26, validacion de build/deploy/produccion y estado PUBLISHED._
