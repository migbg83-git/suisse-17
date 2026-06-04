# Archwise AI Handoff

> Ultima actualizacion: 2026-06-04  
> Ultimo articulo publicado: article-26 (Framework Archwise: por que la IA no escala con mas capacidades sino con mejor integracion)  
> Estado del proyecto: Operativo. 26 articulos publicados. Article-26 deployado y validado en produccion.

---

## 1. Project Overview

Archwise es una plataforma editorial y tecnica orientada a arquitectos de software, CTOs, tech leads y equipos de transformacion digital que buscan escalar IA en entornos enterprise sin depender de hype.

La propuesta de valor de Archwise se centra en:
- contexto explicito y gobernable,
- arquitectura como activo estrategico,
- governance operativo,
- y memoria organizativa como infraestructura.

No es un blog generico de IA. Es un corpus tecnico acumulativo que conecta practica arquitectonica, decisiones organizativas y escalabilidad real.

---

## 2. Current State

Estado tecnico:
- Angular SSG/SSR v21.2.0 operativo.
- Deploy automatico en Vercel.
- SEO tecnico funcional (OG, metadatos, sitemap, robots).
- prerender dinamico de slugs activo.
- Deploy de article-26 validado en produccion.

Estado editorial:
- 26 articulos publicados (01-26).
- article-26 completado, publicado e integrado.
- Internal Linking Fase 1 completada en framework core (17-23).
- Articles Index v2 deployado (2026-06-03): Hero, Empieza aqui, Ultimos publicados, Mapa del framework, Navegacion por anclas.

Estado de build (validado):
- `npm run build:content`: OK
- `npm run build:seo`: OK
- `npm run build:ssg`: OK (exit code 0)
- deploy: OK

Estado de validacion SSG:
- relatedArticles visibles en HTML prerenderizado de:
  - article-01
  - article-17
  - article-22
  - article-23

Estado de publicacion article-23:
- Titulo: Memory Architecture: como disenar sistemas que convierten conocimiento organizativo en contexto reutilizable para humanos y agentes de IA
- Slug: memory-architecture-contexto-reutilizable-enterprise
- Categoria: Enterprise AI
- Author: Miguel Benito Garcia
- Sitemap actualizado: OK
- Canonical correcta: OK
- relatedArticles funcionando: OK

Estado de publicacion article-24:
- Titulo: Context Systems: entregar el contexto correcto a la persona e IA correcta en el momento correcto
- Slug: context-systems-entregar-contexto-correcto-enterprise
- Categoria: Enterprise AI
- Author: Miguel Benito Garcia
- Fecha: 2026-06-03
- readingTime: 13 min
- Sitemap actualizado: OK
- Canonical correcta: OK
- relatedArticles: configurados

Estado de publicacion article-25:
- Titulo: Agentic AI en la empresa: por que los agentes fallan y como construir la infraestructura para que funcionen
- Slug: agentic-ai-enterprise-governance-memoria-arquitectura
- Categoria: Enterprise AI
- Author: Miguel Benito Garcia
- Fecha: 2026-06-04
- readingTime: 16 min
- Sitemap: post-deploy validado en produccion
- Canonical correcta: OK
- relatedArticles funcionando: OK

Estado de publicacion article-26:
- Titulo: Framework Archwise: por que la IA no escala con mas capacidades sino con mejor integracion
- Slug: framework-archwise-integracion-capacidades-escalar-ia
- Categoria: Enterprise AI
- Author: Miguel Benito Garcia
- Fecha: 2026-06-04
- readingTime: 27 min
- Build content/SEO/SSG: OK
- Deploy: OK
- Produccion validada: OK
- Sitemap actualizado: OK
- Canonical correcta: OK
- relatedArticles funcionando: OK

### Articles Index v2

Fecha: 2026-06-03
Estado: DEPLOYED

Resumen:
- Hero editorial (titulo + subtitulo + CTAs a anclas)
- Empieza aqui (5 articulos: ruta de entrada estrategica)
- Ultimos publicados (24 articulos cronologicos)
- Ultimos publicados (25 articulos cronologicos)
- Mapa del framework (4 etapas con conectores visuales)
- Navegacion por anclas (#empieza-aqui, #ultimos-publicados, #mapa-framework)

Resultado:
Mejora de discoverability y onboarding del framework Archwise.

Archivos modificados:
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.ts
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.html
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.scss

Bloqueos activos:
- No hay bloqueos criticos de publicacion.

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

- [ ] Articulo aparece en `/articulos`
- [ ] Articulo renderiza contenido completo (no solo cabecera/metadata)
- [ ] Related articles funcionan
- [ ] Related articles estan presentes en HTML prerenderizado (`dist/.../index.html`)
- [ ] `sitemap.xml` incluye la URL del articulo
- [ ] `robots.txt` apunta al sitemap correcto
- [ ] Canonical URL correcta
- [ ] Open Graph tags correctos

### Post-deploy verification for Vercel

Contexto operativo:
- Se detecto un incidente transitorio donde produccion sirvio contenido antiguo/cache para una ruta de articulo, aunque source, build, dist, sitemap y JSON eran correctos.

Regla post-deploy:
- Verificar siempre 3 URLs criticas:
  - article-01
  - article-03
  - ultimo articulo publicado

Para cada URL comprobar:
- title
- h1
- date
- reading time
- canonical
- relatedArticles

Si hay desajuste:
1. comprobar deployment activo en Vercel
2. comprobar headers cache y x-vercel-cache
3. redeploy sin cache si es necesario
4. validar en incognito o con curl

---

## 4. Corpus Overview (01-26)

### Tabla canonica de articulos

| ID | Titulo | Categoria | Slug | Estado |
|---|---|---|---|---|
| 01 | Por que un architecture.md vale mas que cien prompts magicos | Context Engineering | architecture-md-vale-mas-que-prompts | Publicado |
| 02 | La deuda tecnica que la IA esta empezando a revelar | Technical Debt | deuda-tecnica-ia-revela | Publicado |
| 03 | Que documentacion necesita realmente un LLM | Context Engineering | documentacion-necesita-llm | Publicado |
| 04 | La arquitectura vuelve a ser estrategica | Architecture Strategy | arquitectura-vuelve-ser-estrategica | Publicado |
| 05 | Technical Debt vs Knowledge Debt: como la IA cambia la gestion de deuda en organizaciones | Technical Debt | technical-debt-vs-knowledge-debt-ia | Publicado |
| 06 | Context Engineering para proyectos legacy | Context Engineering | context-engineering-legacy-ia-falla | Publicado |
| 07 | Framework practico para Context Engineering en equipos Enterprise | Context Engineering | framework-context-engineering-enterprise | Publicado |
| 08 | Plantillas y ejemplos reales de architecture.md para proyectos enterprise | Context Engineering | plantillas-ejemplos-architecture-md-enterprise | Publicado |
| 09 | Como hacer una Architecture Review efectiva en la era de la IA | Governance | architecture-review-efectiva-ia | Publicado |
| 10 | Architecture Governance en la era de la IA: del comite de arquitectura al contexto compartido | Governance | architecture-governance-contexto-compartido | Publicado |
| 11 | Por que la mayoria de los sistemas no estan preparados para trabajar con IA | AI-Ready Systems | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Publicado |
| 12 | Las 7 caracteristicas de una arquitectura realmente AI-Ready | AI-Ready Systems | las-7-caracteristicas-arquitectura-ai-ready | Publicado |
| 13 | AI-Ready Systems vs Legacy Systems: que impide realmente adoptar IA | AI-Ready Systems | ai-ready-systems-vs-legacy-systems | Publicado |
| 14 | Por que el Prompt Engineering no es suficiente para construir sistemas con IA | Context Engineering | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Publicado |
| 15 | Context Engineering vs Prompt Engineering: la diferencia que la mayoria de las organizaciones todavia no entiende | Context Engineering | context-engineering-vs-prompt-engineering | Publicado |
| 16 | AI-Augmented Development Teams: como cambia realmente el trabajo de los equipos de software | Enterprise AI | ai-augmented-development-teams | Publicado |
| 17 | AI-Native Organizations: como se construyen organizaciones disenadas para trabajar con IA | Enterprise AI | ai-native-organizations | Publicado |
| 18 | Por que fracasan la mayoria de las iniciativas de IA en las empresas | Enterprise AI | por-que-fracasan-iniciativas-ia | Publicado |
| 19 | Enterprise AI Transformation Roadmap: como evolucionar desde Legacy Systems hasta AI-Native Organizations | Enterprise AI | enterprise-ai-transformation-roadmap | Publicado |
| 20 | AI Governance Framework: como gobernar sistemas, equipos y agentes de IA en la empresa | Governance | ai-governance-framework | Publicado |
| 21 | AI Operating Model: como organizar equipos, procesos y arquitectura para escalar la IA en la empresa | Enterprise AI | ai-operating-model-enterprise | Publicado |
| 22 | Organizational Memory: el activo mas infravalorado de las organizaciones AI-Native | Enterprise AI | organizational-memory-activo-ai-native | Publicado |
| 23 | Memory Architecture: como disenar sistemas que convierten conocimiento organizativo en contexto reutilizable para humanos y agentes de IA | Enterprise AI | memory-architecture-contexto-reutilizable-enterprise | Publicado |
| 24 | Context Systems: entregar el contexto correcto a la persona e IA correcta en el momento correcto | Enterprise AI | context-systems-entregar-contexto-correcto-enterprise | Publicado |
| 25 | Agentic AI en la empresa: por que los agentes fallan y como construir la infraestructura para que funcionen | Enterprise AI | agentic-ai-enterprise-governance-memoria-arquitectura | Publicado |
| 26 | Framework Archwise: por que la IA no escala con mas capacidades sino con mejor integracion | Enterprise AI | framework-archwise-integracion-capacidades-escalar-ia | Publicado |

Estado de integridad del corpus:
- 01-26 presentes en pipeline de contenido.
- 01-26 publicados e indexados.
- article-26 presente en listado, detalle, sitemap y prerender.

---

## 5. Categories and Taxonomy

Taxonomia cerrada oficial:
- Context Engineering
- Governance
- AI-Ready Systems
- Enterprise AI
- Architecture Strategy
- Technical Debt

Distribucion actual (01-26):
- Context Engineering: 7
- Governance: 3
- AI-Ready Systems: 3
- Enterprise AI: 10
- Architecture Strategy: 1
- Technical Debt: 2

Notas de gobernanza taxonomica:
- Se mantienen clasificaciones historicas sin reclasificacion automatica.
- article-04 y article-05 conservan categoria actual segun decision vigente.

---

## 6. Historical Audits

### Auditoria 01-05 (fuente: `docs/article-01-05-audit.md`)

Resultado consolidado:
- Articulos 01-05 confirmados como publicados (en `articles.json` y `sitemap.xml`).
- Calidad editorial: alta / media-alta.
- Alineacion estrategica: alta en general.

Oportunidades detectadas por auditoria:
- article-04: posible reclasificacion futura de `Architecture Strategy` a `Enterprise AI`.
- article-05: posible realineacion de categoria con `Context Engineering`.

Estado de artefactos historicos:
- Se detectan variantes adicionales:
  - `article-01/article-v2.md`
  - `article-05/article-v2.md`
  - `article-05/article.md.cleaned`

Decision vigente:
- No reclasificar ni consolidar automaticamente sin validacion editorial explicita.

---

## 7. Technical Architecture

Referencia canonica detallada: `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`.

Resumen operativo:
- Fuente de contenido:
  - `content/enterprise-ai/article-XX/article.md`
  - `content/enterprise-ai/article-XX/article.json`
- Generacion:
  - `scripts/build-content.ts` -> `src/assets/content/articles.json` + `articles/{slug}.json`
  - `scripts/generate-seo-files.ts` -> `public/sitemap.xml` + `public/robots.txt`
- Consumo Angular:
  - `ContentService` carga datos por HTTP desde `/assets/content/...`
  - `ArticlesComponent` renderiza listado
  - `ArticleDetailComponent` renderiza detalle
- SSG:
  - `prerender: true`, `outputMode: static`
  - slugs dinamicos desde `src/assets/content/articles.json` en `app.routes.server.ts`

Estado tecnico relevante:
- `build-content.ts` serializa `relatedArticles`.
- `Article` model incluye `relatedArticles?: string[]`.
- `ArticleDetailComponent` resuelve relateds con flujo SSR-friendly (`forkJoin`).

---

## 8. Critical Files

Archivos de alto riesgo (validacion estricta post-cambio):

1. `sites/enterprise-ai/archwise/scripts/build-content.ts`
- Riesgo: romper serializacion de `content`, `html`, `relatedArticles`.
- Impacto: articulos sin cuerpo o sin relacionados en prerender.

2. `sites/enterprise-ai/archwise/src/app/pages/article-detail/article-detail.component.ts`
- Riesgo: romper render de detalle o sincronizacion SSR.
- Impacto: estado vacio de relacionados en HTML estatico.

3. `sites/enterprise-ai/archwise/src/app/core/models/article.model.ts`
- Riesgo: tipado desalineado con JSON generado.

4. `sites/enterprise-ai/archwise/src/app/core/services/content.service.ts`
- Riesgo: fallos de carga en listado/detalle.

5. `sites/enterprise-ai/archwise/src/app/app.routes.server.ts`
- Riesgo: prerender incompleto por rutas dinamicas mal resueltas.

6. `sites/enterprise-ai/archwise/scripts/generate-seo-files.ts`
- Riesgo: sitemap/robots inconsistentes.

---

## 9. Build Pipeline

Comandos oficiales:
- `npm run build:content`
- `npm run build:seo`
- `npm run build`
- `npm run build:ssg`

Flujo canonico de publicacion:
1. `build:content`
2. `build:seo`
3. `build:ssg`
4. Verificar output de dist + navegador
5. Deploy

Reglas operativas:
- No editar manualmente `src/assets/content/articles.json`.
- No editar manualmente `public/sitemap.xml` ni `public/robots.txt`.
- Para publicacion tecnica, preferir siempre `npm run build:ssg`.

---

## 10. Conceptual Framework

Cadena conceptual consolidada de Archwise:

Context Engineering  
-> Knowledge Debt  
-> Organizational Memory  
-> AI Governance  
-> AI Operating Model  
-> Memory Architecture  
-> AI-Native Organizations

Mapeo por corpus:
- Context Engineering: 01, 03, 06, 07, 08, 14, 15
- Knowledge Debt: 02, 05
- Organizational Memory: 22
- AI Governance: 20 (con puente 10)
- AI Operating Model: 21
- Memory Architecture: 23
- Context Systems: 24
- AI-Native Organizations: 17

Articulos de entrada:
- 04, 11, 12, 13, 18, 19

Articulos puente:
- 09, 10, 16

---

## 11. Emerging Thesis of Archwise

Tesis central:
- La barrera principal para escalar IA no es tecnologica; es la ausencia de contexto explicito, estructurado y gobernable.

Subtesis:
1. Prompt Engineering sin Context Engineering produce optimizacion local, no capacidad organizativa.
2. Knowledge Debt es deuda invisible que la IA expone y amplifica.
3. La arquitectura vuelve a ser estrategica porque define los limites y el contexto operativo de IA.
4. Governance sin memoria organizativa deriva en burocracia o compliance superficial.
5. El diferencial competitivo AI-Native esta en organizational memory, no en competir por modelos.

Formula sintetica:
- Contexto explicito + Governance adaptativo + Transferencia de conocimiento = Capacidad AI-Native sostenible.

---

## 12. Internal Linking Strategy

Estado actual:
- Fase 1 completada (framework core 17-22).

Cobertura Fase 1:
- `article-17/article.json`
- `article-18/article.json`
- `article-19/article.json`
- `article-20/article.json`
- `article-21/article.json`
- `article-22/article.json`
- `article-23/article.json`

Soporte tecnico completado:
- `build-content.ts` serializa `relatedArticles` desde `article.json`.
- `ArticleDetailComponent` resuelve relacionados de forma SSR-friendly (`forkJoin`).
- Resolucion explicita por slug preservando orden editorial.
- Fallback por categoria/tags mantenido cuando no hay relateds explicitos.

Validacion de resultado:
- links reales en HTML prerenderizado para:
  - article-01
  - article-17
  - article-22
  - article-23

Pendiente:
- Fase 2: clusters desconectados (11 articulos sin relatedArticles).
- Fase 3: enlazado contextual inline dentro de `article.md`.

---

## 13. Known Risks and Technical Debt

Riesgos activos:

1. Cambios a pipeline sin validacion completa
- Probabilidad: media
- Impacto: critico

2. Validacion incompleta de relatedArticles (solo navegador)
- Probabilidad: media
- Impacto: alto en SSG/SEO interno

3. Logs debug residuales en `build-content.ts`
- Probabilidad: baja
- Impacto: bajo

4. Variantes editoriales historicas no consolidadas
- Probabilidad: media
- Impacto: medio

5. Ejecucion de prerender fuera de flujo canonico
- Probabilidad: baja
- Impacto: medio

Mitigacion general:
- checklist post-build obligatorio
- validacion en `dist` para HTML prerenderizado
- uso estricto de `npm run build:ssg`

---

## 14. Lessons Learned

1. Build green no equivale a render correcto.
2. `article.json` debe ser fuente de verdad de metadata editorial.
3. En estrategia SSG editorial, lo que no aparece en HTML prerenderizado no se considera validado.
4. RelatedArticles deben validarse en `dist/.../index.html`.
5. Cambios en build/render requieren validacion extremo a extremo.

---

## 15. Instructions For Any Future AI

1. Leer este handoff completo antes de actuar.
2. Leer `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md` para implementacion tecnica.
3. No tocar `article.md` ni `article.json` fuera del workflow editorial.
4. No editar archivos generados manualmente (`articles.json`, `sitemap.xml`, `robots.txt`).
5. Si se modifica build/render:
   - ejecutar `build:content`, `build:seo`, `build:ssg`
   - validar corpus en `/articulos`
   - validar al menos 3 detalles de articulo
   - validar relateds en HTML prerenderizado en `dist`
6. Documentar incidentes y decisiones operativas en docs.
7. Mantener coherencia con framework conceptual y tesis de Archwise.

---

## 16. Current Priorities

1. Article-27: recomendacion estrategica y decision editorial.
2. Pagina /framework: consolidacion v1 (narrativa, rutas y posicionamiento).
3. Corpus Audit 2.0: integridad editorial, taxonomica y de enlazado interno.
4. Internacionalizacion futura: ES -> FR -> EN.

---

## 17. Backlog

- Validacion automatica post-build para integridad de:
  - `content`
  - `html`
  - `relatedArticles`
- Regla automatica de slugs existentes en relatedArticles.
- Evaluacion futura de reclasificaciones taxonomicas pendientes.
- Refinamiento de bundle/CSS en sesiones tecnicas posteriores.

---

## 18. Next Article Candidates

Candidatos priorizados:
1. Article-27 (pendiente definicion final por recomendacion estrategica).
2. Corpus Audit 2.0 (diagnostico estructural post-26).
3. AI Coordination Beyond Teams.
4. Continuous Learning Organizations en contexto AI-Native.

Criterio de seleccion:
- continuidad con cadena conceptual 01-25
- alto valor estrategico para audiencia enterprise
- posibilidad de reutilizacion como framework accionable

---

## 19. Diff Conceptual (secciones recuperadas)

Recuperado respecto a la version reducida:
- Corpus Overview completo 01-25 con tabla canonica.
- Categories and Taxonomy.
- Historical Audits.
- Technical Architecture ampliada.
- Critical Files.
- Build Pipeline formalizado.
- Conceptual Framework explicito.
- Emerging Thesis of Archwise.
- Internal Linking Strategy (Fase 1 completada + Fase 2/3 pendientes).
- Known Risks and Technical Debt.
- Lessons Learned.
- Instructions For Any Future AI (version extensa).
- Current Priorities.
- Backlog.
- Next Article Candidates.

Se mantiene explicitamente:
- article-26 publicado.
- Internal Linking Fase 1 completada.
- fix SSR de relatedArticles documentado.
- prerender dinamico documentado.

---

## 20. Referencias

Fuentes obligatorias utilizadas en esta reconstruccion:
- `docs/project-state-2026-06-01.md`
- `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`
- `docs/internal-linking-audit.md`
- `docs/article-01-05-audit.md`
- `docs/handoff-integrity-check.md`

Referencias complementarias:
- `content/enterprise-ai/article-*/article.json`

---

Este archivo vuelve a ser el documento maestro operativo del proyecto.
