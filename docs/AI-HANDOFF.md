# Archwise AI Handoff

> Última actualización: 2026-06-11  
> Último artículo publicado: article-31 (Del Prompt al Sistema: una arquitectura para equipos virtuales de IA)  
> Estado del proyecto: Operativo. 31 artículos publicados. Article-31 integrado y prerenderizado. /framework desplegado y operativo.

---

## 1. Project Overview

Archwise es una plataforma editorial y técnica orientada a arquitectos de software, CTOs, tech leads y equipos de transformación digital que buscan escalar IA en entornos enterprise sin depender de hype.

La propuesta de valor de Archwise se centra en:
- contexto explícito y gobernable,
- arquitectura como activo estratégico,
- governance operativo,
- y memoria organizativa como infraestructura.

No es un blog genérico de IA. Es un corpus técnico acumulativo que conecta práctica arquitectónica, decisiones organizativas y escalabilidad real.

---

## 2. Current State

Estado técnico:
- Angular SSG/SSR v21.2.0 operativo.
- Deploy automático en Vercel.
- SEO técnico funcional (OG, metadatos, sitemap, robots).
- prerender dinámico de slugs activo.
- Deploy de article-30 validado en producción.
- Pipeline de build corregido: `npm run build` ejecuta `build:seo` antes de compilar (evita sitemap stale).
- Total de rutas estimadas para SSG: **35** (4 estáticas: /, /manifesto, /articulos, /framework + 31 artículos).

Estado editorial:
- 30 artículos publicados (01-30).
- **article-30 completado, publicado e integrado** como parte de la etapa fundacional.
- Internal Linking Fase 1 completada en framework core (17-23).
- Articles Index v2 deployado (2026-06-03): Hero, Empieza aquí, Últimos publicados, Mapa del framework, Navegación por anclas.

### Article-31 (resumen operativo)

- Título: "Del Prompt al Sistema: una arquitectura para equipos virtuales de IA"
- Slug: `arquitectura-equipos-virtuales-ia-enterprise`
- Categoría: Enterprise AI
- Capa Framework: Capa 4 · AI Operating Model
- Fecha: 2026-06-11
- Estado: Publicado / integrado / prerenderizado

Cambios técnicos realizados durante la integración (resumen):

1. El slug inicial fue normalizado a `arquitectura-equipos-virtuales-ia-enterprise` y sincronizado en `article.json` y en el frontmatter de `article.md`.
2. `build-content` (MD -> HTML/JSON) requiere que el slug en frontmatter sea la fuente de verdad; `article.json` fue actualizado para permanecer en sincronía.
3. `FRAMEWORK_PAGE_DATA.layers[].articleSlugs` se actualizó para incluir el nuevo slug (Article-31 mapeado a Capa 4 · AI Operating Model). El slug ya existía en `pathMappings` y se añadió a `layers[].articleSlugs` para permitir la visibilidad en el Framework.
4. Se detectó y eliminó un bloque duplicado al final de `article.md` (copia completa a partir de "## Executive Summary"). Esta corrección editorial evitó la duplicación en el HTML prerenderizado.

Notas operativas:
- Estas acciones son ajustes editoriales y de mapeo; no implicaron cambios en componentes Angular ni en la lógica de aplicación.
- Ver sección "Correcciones técnicas realizadas" más abajo para el diff conceptual resumido.

Estado de build (validado):
- `npm run build:content`: OK
- `npm run build:seo`: OK
- `npm run build:ssg`: OK (exit code 0)
- deploy: OK

Estado de validación SSG:
- relatedArticles visibles en HTML prerenderizado de:
  - article-01
  - article-17
  - article-22
  - article-23
  - article-30

Estado de publicación article-30:
- Título: De la integración a la coherencia: el principio rector y el mecanismo arquitectónico que cierran el Framework Archwise
- Slug: integracion-coherencia-principio-rector-mecanismo-arquitectonico
- Categoría: Enterprise AI
- Author: Miguel Benito García
- Fecha: 2026-06-08
- readingTime: 17 min
- Conceptos clave: System Coherence, Interface Integrity.
- Sitemap actualizado: OK
- relatedArticles funcionando: OK (4/4)

Nota técnica importante (slug source of truth):
- El slug efectivo de producción lo toma build-content desde el frontmatter de article.md (campo `slug`).
- article.json debe mantenerse sincronizado con ese valor, pero no es la fuente que gobierna el slug efectivo.
- Validación obligatoria antes de cada publicación: frontmatter.slug === article.json.slug.

### /Framework Deployment

Fecha: 2026-06-08
Estado: DEPLOYED AND VALIDATED

Descripción:
- Página `/framework` implementada con 6 capas de contexto que mapean el corpus 01-31.
- **Cobertura de framework: 31/31 artículos integrados.**
- Navegación multi-dimensional por perfil (CTO, Enterprise Architect, Head of Engineering, Transformation Leader, Consultor).
- Navegación por intento (Diagnosticar, Diseñar, Operar, Medir, Corregir).

Capas del Framework (Corpus 01-30):
1. Diagnóstico AI-Ready: 4 artículos (011, 012, 013, 018)
2. Contexto explícito y Knowledge Debt: 9 artículos (01, 03, 06, 07, 08, 14, 15, 02, 05)
3. Governance: 4 artículos (09, 10, 20, 04)
4. AI Operating Model: 5 artículos (16, 17, 21, 19, 31)
5. Organizational Memory: 2 artículos (22, 23)
6. Context Systems y capacidad agéntica: 7 artículos (24, 25, 26, 27, 28, 29, **30**)

Validación Producción (2026-06-10):
- ✅ https://archwise.org/framework carga correctamente.
- ✅ Contenido del framework visible (6 capas, 30 artículos).
- ✅ Article-30 integrado como Capstone en Capa 6.
- ⚠️ Sitemap en producción: No incluye /framework en listado visible (investigar issue de caché de Vercel).
- ⚠️ Normalización: Detectados 3 mismatches de slugs (tildes) en `framework.data.ts` para artículos 01, 03 y 12.

---

## 3. Editorial Workflow

Workflow oficial (obligatorio):
1. `brief.md`
2. `notes.md`
3. `outline.md`
4. `article.md`
5. `review.md`
6. `assets.md`
7. `article.json`
8. publication (`build:content` -> `build:seo` -> `build:ssg` -> verify -> deploy)

Reglas:
- No saltar fases.
- Validar cada artefacto antes de pasar al siguiente.
- No tocar `article.md` fuera de workflow validado.

### Post-publication Checklist (obligatorio)

- [ ] Artículo aparece en `/articulos`
- [ ] Artículo renderiza contenido completo (no solo cabecera/metadata)
- [ ] Related articles funcionan
- [ ] Related articles están presentes en HTML prerenderizado (`dist/.../index.html`)
- [ ] `sitemap.xml` incluye la URL del artículo
- [ ] `robots.txt` apunta al sitemap correcto
- [ ] Canonical URL correcta
- [ ] Open Graph tags correctos

### Post-deploy verification for Vercel

Contexto operativo:
- Se detectó un incidente transitorio donde producción sirvió contenido antiguo/cache para una ruta de artículo, aunque source, build, dist, sitemap y JSON eran correctos.

Regla post-deploy:
- Verificar siempre 3 URLs críticas:
  - article-01
  - article-03
  - último artículo publicado (article-30)

---

## 4. Corpus Overview (01-30)

### Tabla canónica de artículos

| ID | Título | Categoría | Slug | Estado |
|---|---|---|---|---|
| 01 | Por qué un architecture.md vale más que cien prompts mágicos | Context Engineering | architecture-md-vale-mas-que-prompts | Publicado |
| 02 | La deuda técnica que la IA está empezando a revelar | Technical Debt | deuda-tecnica-ia-revela | Publicado |
| 03 | Qué documentación necesita realmente un LLM | Context Engineering | documentacion-necesita-llm | Publicado |
| 04 | La arquitectura vuelve a ser estratégica | Architecture Strategy | arquitectura-vuelve-ser-estrategica | Publicado |
| 05 | Technical Debt vs Knowledge Debt | Technical Debt | technical-debt-vs-knowledge-debt-ia | Publicado |
| 06 | Context Engineering para proyectos legacy | Context Engineering | context-engineering-legacy-ia-falla | Publicado |
| 07 | Framework práctico para Context Engineering | Context Engineering | framework-context-engineering-enterprise | Publicado |
| 08 | Plantillas y ejemplos reales de architecture.md | Context Engineering | plantillas-ejemplos-architecture-md-enterprise | Publicado |
| 09 | Cómo hacer una Architecture Review efectiva | Governance | architecture-review-efectiva-ia | Publicado |
| 10 | Architecture Governance: del comité al contexto compartido | Governance | architecture-governance-contexto-compartido | Publicado |
| 11 | Sistemas no preparados para IA | AI-Ready Systems | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Publicado |
| 12 | 7 características de arquitectura AI-Ready | AI-Ready Systems | las-7-caracteristicas-arquitectura-ai-ready | Publicado |
| 13 | AI-Ready Systems vs Legacy Systems | AI-Ready Systems | ai-ready-systems-vs-legacy-systems | Publicado |
| 14 | Por qué Prompt Engineering no es suficiente | Context Engineering | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Publicado |
| 15 | Context Engineering vs Prompt Engineering | Context Engineering | context-engineering-vs-prompt-engineering | Publicado |
| 16 | AI-Augmented Development Teams | Enterprise AI | ai-augmented-development-teams | Publicado |
| 17 | AI-Native Organizations | Enterprise AI | ai-native-organizations | Publicado |
| 18 | Por qué fracasan iniciativas de IA | Enterprise AI | por-que-fracasan-iniciativas-ia | Publicado |
| 19 | Enterprise AI Transformation Roadmap | Enterprise AI | enterprise-ai-transformation-roadmap | Publicado |
| 20 | AI Governance Framework | Governance | ai-governance-framework | Publicado |
| 21 | AI Operating Model | Enterprise AI | ai-operating-model-enterprise | Publicado |
| 22 | Organizational Memory | Enterprise AI | organizational-memory-activo-ai-native | Publicado |
| 23 | Memory Architecture | Enterprise AI | memory-architecture-contexto-reutilizable-enterprise | Publicado |
| 24 | Context Systems | Enterprise AI | context-systems-entregar-contexto-correcto-enterprise | Publicado |
| 25 | Agentic AI en la empresa | Enterprise AI | agentic-ai-enterprise-governance-memoria-arquitectura | Publicado |
| 26 | Framework Archwise: Integración | Enterprise AI | framework-archwise-integracion-capacidades-escalar-ia | Publicado |
| 27 | Arquitectura de adopción | Enterprise AI | arquitectura-adopcion-framework-archwise-orden-activacion | Publicado |
| 28 | Measurement System | Enterprise AI | measurement-system-integracion-madurez-operativa | Publicado |
| 29 | Integridad de Secuencia | Enterprise AI | integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas | Publicado |
| 30 | De la integración a la coherencia (Capstone) | Enterprise AI | integracion-coherencia-principio-rector-mecanismo-arquitectonico | Publicado |
| 31 | Del Prompt al Sistema: una arquitectura para equipos virtuales de IA | Enterprise AI | arquitectura-equipos-virtuales-ia-enterprise | Publicado |

Estado de integridad del corpus:
- 01-31 presentes y publicados.
- **System Coherence** e **Interface Integrity** consolidados como los pilares rectores que cierran la etapa fundacional.
- La evaluación de madurez operativa (26-29) queda subordinada al principio de Coherencia Sistémica.

---

## 5. Categories and Taxonomy

Taxonomía cerrada oficial:
- Context Engineering
- Governance
- AI-Ready Systems
- Enterprise AI
- Architecture Strategy
- Technical Debt

Distribución actual (01-30):
- Enterprise AI: 14
- Context Engineering: 7
- Governance: 3
- AI-Ready Systems: 3
- Technical Debt: 2
- Architecture Strategy: 1

---

## 6. Historical Audits

### Auditoria 01-05 (fuente: `docs/article-01-05-audit.md`)
Resultado consolidado: Artículos 01-05 publicados y normalizados. 
Acción aplicada: creación de `article.json` para los cinco artículos. Integrados en el corpus oficial.

---

## 7. Technical Architecture

Referencia canónica detallada: `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`.

Resumen operativo:
- Fuente: Markdown + JSON individual por artículo.
- Scripts: `build-content.ts` (MD -> HTML/JSON) y `generate-seo-files.ts` (Sitemap/Robots).
- SSG: Angular v21 con `outputMode: static` y rutas dinámicas en `app.routes.server.ts`.
- Prerender: Basado en `src/assets/content/articles.json`.

---

## 8. Critical Files

Archivos de alto riesgo (validación estricta post-cambio):
1. `scripts/build-content.ts`: Romper serialización de contenido.
2. `src/app/pages/article-detail/article-detail.component.ts`: Sincronización SSR de relacionados.
3. `src/app/app.routes.server.ts`: Rutas dinámicas de prerender.
4. `scripts/generate-seo-files.ts`: Sitemap inconsistente.

---

## 9. Build Pipeline

Comandos oficiales:
- `npm run build:content`
- `npm run build:seo`
- `npm run build:ssg` (Comando estándar de publicación)

---

## 10. Conceptual Framework

Cadena conceptual consolidada de Archwise:

**System Coherence (Principio Rector)**
-> **Interface Integrity (Mecanismo)**
-> Context Engineering  
-> Knowledge Debt  
-> Organizational Memory  
-> AI Governance  
-> AI Operating Model  
-> Memory Architecture  
-> Context Systems  
-> Enterprise Agent Architecture  
-> Adoption Architecture / Activation Debt  
-> Sequence & Evidence Integrity (Validación)

---

## 11. Emerging Thesis of Archwise

Tesis central actualizada:
- La IA empresarial no fracasa por falta de capacidades técnicas; fracasa porque la intención arquitectónica se degrada al atravesar fronteras organizativas y técnicas (**Interface Integrity**). La escalabilidad real requiere **System Coherence** como estado global preservado mediante mecanismos de preservación en cada handoff.

---

## 12. Internal Linking Strategy

Estado actual: Fase 1 completada (17-23).  
Pendiente: Fase 2 (Clusters desconectados) y Fase 3 (Enlazado inline).

---

## 13. Known Risks and Technical Debt

1. **Desincronización de Slugs**: Riesgo de que `framework.data.ts` apunte a slugs con tildes/errores que no existen en el FS.
2. **Sitemap Stale**: Aunque el pipeline está corregido, el sitemap en producción a veces no refleja los cambios inmediatos de rutas estáticas como `/framework`.
3. **Logs debug residuales**: Pendiente limpieza en `build-content.ts`.

---

## Correcciones técnicas realizadas

Durante la integración de Article-31 se aplicaron las siguientes correcciones técnicas (resumen):

1. El slug inicial fue cambiado de `fin-prompt-aislado-equipos-virtuales-ia-enterprise` a `arquitectura-equipos-virtuales-ia-enterprise`.
2. El slug fue actualizado tanto en `article.json` como en el `frontmatter` de `article.md` (build-content toma el slug canónico desde `article.md`).
3. `article.md` frontmatter quedó como fuente de la verdad para el slug; `article.json` se mantuvo sincronizado.
4. Article-31 no aparecía inicialmente en el Framework porque el slug estaba en `pathMappings` pero no en `FRAMEWORK_PAGE_DATA.layers[].articleSlugs`.
5. Se resolvió añadiendo `arquitectura-equipos-virtuales-ia-enterprise` a `layers[].articleSlugs` en la Capa 4 (AI Operating Model).
6. El contenido duplicado al final del artículo provenía del propio `article.md`: había una segunda copia completa que comenzaba en `## Executive Summary`. Se eliminó el bloque duplicado en el MD fuente.

Estas correcciones se documentan aquí para trazabilidad editorial; no se modificó código de aplicación ni componentes Angular.


## 14. Lessons Learned

1. **Build green no equivale a render correcto**: Validar siempre el campo `html` en el JSON generado.
2. **Lo que no está en el HTML estático no existe para el SEO**: Los relacionados deben resolverse antes del fin del ciclo de vida de prerender.
3. **El frontmatter manda**: El slug real es el del MD, no el del JSON fuente.

---

## 15. Instructions For Any Future AI

1. Leer este handoff completo antes de actuar.
2. No tocar `article.md` ni `article.json` fuera del workflow editorial.
3. Si se modifica la estructura de `/framework`, actualizar `framework.data.ts` y validar contra los slugs reales en `src/assets/content/articles.json`.
4. Mantener la jerarquía conceptual: Coherencia > Integridad > Validación.

---

## 16. Current Priorities

### Prioridades (CRÍTICO)
1. **Normalización de Slugs en UI**: Corregir tildes en `framework.data.ts` para los artículos 01, 03 y 12.
2. **Investigar sitemap en producción**: Resolver por qué `/framework` no aparece en el listado raíz de `archwise.org/sitemap.xml`.

### Prioridades (IMPORTANTE)
3. **Saneamiento lingüístico Article-11**: Corregir errores ortográficos en el contenido fuente.
4. **Internal Linking Fase 2**: Conectar los clusters desconectados (11 artículos sin relacionados explícitos).

---

## 17. Backlog

- Validación automática de slugs existentes en relatedArticles.
- Implementación de RSS Feed.
- Internacionalización (ES -> FR -> EN).

---

## 18. Next Article Candidates

1. **AI Coordination Beyond Teams**: Cómo escalar la coherencia en organizaciones multidepartamentales.
2. **Interface Integrity Deep Dive**: Guía técnica para preservar semántica y decisión en fronteras.
3. **The Cost of Incoherence**: Cómo medir el impacto financiero de la degradación de interfaces.

---

## 20. Referencias
- `docs/project-state-2026-06-01.md`
- `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`
- `src/assets/content/articles.json` (Source of truth para el corpus 30)
