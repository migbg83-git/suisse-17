# Archwise AI Handoff

> **Última actualización:** 2026-06-01
> **Último artículo publicado:** article-21 (AI Operating Model)
> **Estado del proyecto:** Operativo. 21 artículos publicados.

---

## 1. Project Overview

Archwise es una plataforma editorial y técnica para arquitectos de software y CTOs que buscan transformar organizaciones hacia sistemas realmente preparados para IA. El objetivo es documentar, publicar y compartir prácticas reales de arquitectura empresarial, context engineering y AI Readiness, priorizando contexto, arquitectura, governance y conocimiento sobre el hype tecnológico. La audiencia principal son arquitectos, CTOs, tech leads y equipos técnicos de empresas medianas y grandes. Archwise se posiciona como referencia práctica y operativa, con contenido basado en experiencia real, frameworks accionables y casos reales. La propuesta de valor es ofrecer guías, frameworks y recursos que permitan a equipos técnicos evolucionar hacia sistemas AI-Ready, con foco en calidad, continuidad y autoridad.

---

## 2. Current Status

- **Infraestructura:** Angular SSG/SSR, Vercel, dominio propio (archwise.org)
- **Despliegue:** Automático en Vercel
- **Angular:** v21.2.0 (SSR/SSG)
- **SSG:** Completado
- **SEO:** Implementado (Open Graph, metadatos, sitemap, robots.txt)
- **Analytics:** Google Analytics conectado
- **Search Console:** Conectado y verificado
- **Sitemap:** Generado y funcional (incluye article-21)
- **Vercel:** Deploy automático

**Completado:** Infraestructura técnica, clusters iniciales, publicación iterativa, 21 artículos publicados.

**Pendiente/Bloqueos:**
- Expansión de clusters y artículos
- Revisión visual article-21 en producción
- Verificar canonical URLs en producción post-deploy
- Limpieza de variantes editoriales históricas (article-01/article-v2.md, article-05/article-v2.md, article-05/article.md.cleaned)

---

## 3. Editorial Workflow

1. **brief.md**: Definición de objetivo, público y ángulo del artículo
2. **notes.md**: Ideas, referencias, ejemplos y casos reales
3. **outline.md**: Estructura y secciones principales
4. **article.md**: Redacción completa con frontmatter YAML válido (title, slug, description, date)
5. **review.md**: Revisión técnica y editorial, checklist de calidad
6. **assets.md**: Prompts, imágenes, recursos visuales y Open Graph
7. **article.json**: Metadatos para indexación y SEO (category, author, tags, etc.)
8. **publication**: build, verificación y despliegue

Cada fase debe ser validada antes de pasar a la siguiente. El objetivo es asegurar calidad, coherencia y continuidad editorial.

### Post-publication Checklist (obligatorio)

Tras cada publicación, validar:

- [ ] Artículo aparece en /articulos (listado)
- [ ] Artículo renderiza contenido completo (no solo cabecera/metadata)
- [ ] Related articles funcionan
- [ ] sitemap.xml incluye la URL del artículo
- [ ] robots.txt apunta al sitemap correcto
- [ ] Canonical URL correcta
- [ ] Open Graph tags presentes y correctos

---

## 4. Content Architecture

- **Clusters:** Agrupaciones temáticas (ej: Context Engineering, AI-Ready Systems)
- **Categorías (taxonomía cerrada):**
  - Context Engineering: Prácticas y frameworks para estructurar y transferir contexto en equipos y sistemas.
  - Governance: Modelos y herramientas para gobierno arquitectónico y organizacional.
  - AI-Ready Systems: Capacidades y requisitos para que sistemas y organizaciones sean realmente preparados para IA.
  - Enterprise AI: Estrategias y casos de uso de IA en entornos empresariales.
  - Architecture Strategy: Enfoques y decisiones estratégicas de arquitectura.
  - Technical Debt: Gestión de deuda técnica y de conocimiento.

Usar la categoría que mejor represente el foco principal del artículo. No usar categorías secundarias salvo decisión editorial explícita.

---

## 5. Published Articles

| Nº | Título | Categoría | Slug |
|----|--------|-----------|------|
| 01 | Por qué un architecture.md vale más que cien prompts mágicos | Context Engineering | architecture-md-vale-mas-que-prompts |
| 02 | La deuda técnica que la IA está empezando a revelar | Technical Debt | deuda-tecnica-ia-revela |
| 03 | Qué documentación necesita realmente un LLM | Context Engineering | documentacion-necesita-llm |
| 04 | La arquitectura vuelve a ser estratégica | Architecture Strategy | arquitectura-vuelve-ser-estrategica |
| 05 | Technical Debt vs Knowledge Debt: cómo la IA cambia la gestión de deuda en organizaciones | Technical Debt | technical-debt-vs-knowledge-debt-ia |
| 06 | Context Engineering para proyectos legacy | Context Engineering | context-engineering-legacy-ia-falla |
| 07 | Framework práctico para Context Engineering | Context Engineering | framework-context-engineering-enterprise |
| 08 | Plantillas y ejemplos reales de architecture.md | Context Engineering | plantillas-ejemplos-architecture-md-enterprise |
| 09 | Cómo hacer una Architecture Review efectiva en la era de la IA | Governance | architecture-review-efectiva-ia |
| 10 | Architecture Governance en la era de la IA | Governance | architecture-governance-contexto-compartido |
| 11 | ¿Por qué la mayoría de los sistemas no están preparados para trabajar con IA? | AI-Ready Systems | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia |
| 12 | Las 7 características de una arquitectura realmente AI-Ready | AI-Ready Systems | las-7-caracteristicas-arquitectura-ai-ready |
| 13 | AI-Ready Systems vs Legacy Systems | AI-Ready Systems | ai-ready-systems-vs-legacy-systems |
| 14 | Por qué el Prompt Engineering no es suficiente para construir sistemas con IA | Context Engineering | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia |
| 15 | Context Engineering vs Prompt Engineering | Context Engineering | context-engineering-vs-prompt-engineering |
| 16 | AI-Augmented Development Teams | Enterprise AI | ai-augmented-development-teams |
| 17 | AI-Native Organizations | Enterprise AI | ai-native-organizations |
| 18 | Por qué fracasan la mayoría de las iniciativas de IA en las empresas | Enterprise AI | por-que-fracasan-iniciativas-ia |
| 19 | Enterprise AI Transformation Roadmap | Enterprise AI | enterprise-ai-transformation-roadmap |
| 20 | AI Governance Framework | Governance | ai-governance-framework |
| **21** | **AI Operating Model: cómo organizar equipos, procesos y arquitectura para escalar la IA en la empresa** | **Enterprise AI** | **ai-operating-model-enterprise** |

### Estado de integridad

- articles 01–21: Publicados, indexados y presentes en sitemap.xml.
- articles 01–21: Normalizados con `article.json` presente en cada carpeta de contenido.
- No se aplicaron reclasificaciones pendientes de auditoría: article-04 mantiene Architecture Strategy y article-05 mantiene Technical Debt.

### Historical Articles Audit (01–05)

- Auditoría completada y documentada en docs/article-01-05-audit.md.
- Estado confirmado: auditados, publicados, indexados y normalizados.
- Acción ejecutada: creación de article.json para article-01, article-02, article-03, article-04 y article-05.
- Verificación operativa: build correcto, sitemap correcto, sin duplicados de slug.
- Nota de gobernanza editorial: la auditoría recomienda posibles reclasificaciones futuras (04 y 05), pero no se aplican por decisión actual.

### Distribución editorial actual (01–21)

- Context Engineering: 7 (01, 03, 06, 07, 08, 14, 15)
- Governance: 3 (09, 10, 20)
- AI-Ready Systems: 3 (11, 12, 13)
- Enterprise AI: 5 (16, 17, 18, 19, 21)
- Architecture Strategy: 1 (04)
- Technical Debt: 2 (02, 05)

No se aplican reclasificaciones pendientes: article-04 se mantiene en Architecture Strategy y article-05 se mantiene en Technical Debt.

---

## 6. Current Article

- **Último artículo completado:** AI Operating Model (article-21) — 2026-05-31
- **Artículo en curso:** Ninguno
- **Posibles próximos artículos:**
  - Organizational Memory: el activo más infravalorado de las organizaciones AI-Native
  - Knowledge Systems for Enterprise AI
  - AI Coordination at Scale
  - Enterprise Knowledge Architecture

---

## 7. Technical Architecture

### Estructura de carpetas

```
content/enterprise-ai/article-XX/
├── brief.md
├── notes.md
├── outline.md
├── article.md       ← Contenido (frontmatter: title, slug, description, date)
├── review.md
├── assets.md
└── article.json     ← Metadatos editoriales (category, author, tags, readingTime)
```

### Build pipeline

```
sites/enterprise-ai/archwise/
├── scripts/
│   ├── build-content.ts    ← Genera articles.json + individual JSONs
│   └── generate-seo-files.ts ← Genera sitemap.xml + robots.txt
├── src/assets/content/
│   ├── articles.json       ← Listado completo (generado)
│   └── articles/           ← JSONs individuales (generados)
└── public/
    ├── sitemap.xml         ← Generado por build:seo
    └── robots.txt          ← Generado por build:seo
```

### Comandos de build

| Comando | Propósito |
|---------|-----------|
| `npm run build:content` | Genera articles.json desde content/ |
| `npm run build:seo` | Genera sitemap.xml y robots.txt |
| `npm run build` | build:content + ng build |
| `npm run build:ssg` | build:content + build:seo + ng build --prerender |

### Reglas críticas

- article.md = contenido editorial
- article.json = metadatos editoriales (category, author, tags, readingTime)
- articles.json = **generado automáticamente**, nunca editar manualmente
- sitemap.xml = **generado automáticamente** por `npm run build:seo`
- build-content.ts prioriza category desde article.json sobre frontmatter

---

## 8. Historical Issues & Lessons Learned

| Fecha | Síntoma | Causa raíz | Solución | Lección |
|-------|---------|------------|----------|---------|
| Pre-2026-05 | Artículo no aparece en /articulos | description/slug ausente, YAML inválido | Validar frontmatter, revisar logs | Siempre validar frontmatter mínimo |
| Pre-2026-05 | Errores YAML | BOM invisible, delimitadores incorrectos | Validar YAML, linters | Eliminar caracteres invisibles |
| 2026-05 | category vacía en /articulos | build-content.ts no leía category de article.json | Priorizar article.json en build-content.ts | article.json es fuente de verdad para metadatos |
| **2026-05-31** | **Todos los artículos sin contenido renderizado** | **build-content.ts dejó de serializar `content` y `html` al modificar soporte de categorías** | **Reintroducir `content` y `html` en el objeto article generado** | **Toda modificación de build-content.ts requiere validación completa (ver checklist)** |
| 2026-05-31 | sitemap.xml no incluía article-21 | sitemap.xml no se regeneró tras build:content | Ejecutar `npm run build:seo` | Siempre ejecutar build:seo tras añadir artículos |

### ⚠️ REGLA CRÍTICA: Modificaciones a build-content.ts

Toda modificación a `build-content.ts` DEBE validarse con:

1. Listado de artículos en /articulos (aparecen todos)
2. Artículo individual renderiza contenido completo (body HTML visible)
3. Related articles visibles
4. sitemap.xml contiene todas las URLs
5. Campos `content` y `html` presentes en articles.json y JSONs individuales

**Contexto del incidente (2026-05-31):** Al añadir soporte para leer `category` desde article.json, se reescribió la función de generación del objeto article sin incluir los campos `content` y `html`. El build no falló. Los JSONs se generaban. Pero Angular no recibía contenido para renderizar. El bug solo era visible en el navegador.

---

## 9. Editorial Principles

- Sin hype IA ni marketing
- Basado en experiencia real y casos prácticos
- Dirigido a CTOs, arquitectos y equipos técnicos
- Documentar trade-offs y decisiones
- Priorizar governance, context engineering y organizational memory
- Visibilizar knowledge debt y cómo reducirla
- Voz: primera persona profesional, experiencia directa, observaciones originales
- Extensión: 2500–4500 palabras por artículo

---

## 10. Current Decisions

- Marca: Archwise
- Dominio: archwise.org
- article.json es la fuente de metadatos editoriales
- frontmatter mínimo en article.md (title, slug, description, date)
- Taxonomía cerrada de categorías
- Workflow editorial oficial y validado
- build-content.ts usa `tsx` para ejecución directa de TypeScript
- generate-seo-files.ts lee articles.json para generar sitemap.xml

---

## 11. Next Priorities

1. Verificar article-21 en producción tras deploy (visual, canonical, OG)
2. Limpiar variantes editoriales históricas (article-01/article-v2.md, article-05/article-v2.md, article-05/article.md.cleaned)
3. Definir y desarrollar article-22 (tema candidato: Organizational Memory)
4. Mantener calidad y continuidad editorial
5. Mejorar automatización de validaciones editoriales

---

## 12. Asignación de categorías oficiales

- article-01 → Context Engineering
- article-02 → Technical Debt
- article-03 → Context Engineering
- article-04 → Architecture Strategy
- article-05 → Technical Debt
- article-06 → Context Engineering
- article-07 → Context Engineering
- article-08 → Context Engineering
- article-09 → Governance
- article-10 → Governance
- article-11 → AI-Ready Systems
- article-12 → AI-Ready Systems
- article-13 → AI-Ready Systems
- article-14 → Context Engineering
- article-15 → Context Engineering
- article-16 → Enterprise AI
- article-17 → Enterprise AI
- article-18 → Enterprise AI
- article-19 → Enterprise AI
- article-20 → Governance
- article-21 → Enterprise AI

---

## 13. Technical Documentation

La documentación técnica detallada del proyecto vive en:

**`docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`**

Este documento es la fuente oficial para:

- Angular architecture (componentes, servicios, modelos, routing)
- SSG/SSR configuration (prerender, outputMode, server routes)
- SEO pipeline (generate-seo-files.ts, sitemap.xml, robots.txt)
- Build pipeline (build-content.ts paso a paso, prioridad de campos)
- Deployment process (Vercel, static output)
- Technical incidents (bug de artículos sin cuerpo, debug logs pendientes)
- Comandos npm oficiales y su propósito
- Validaciones post-build obligatorias

**AI-HANDOFF.md NO duplica detalles técnicos.** Este documento se centra en:

- Continuidad del proyecto
- Roadmap y próximos pasos
- Decisiones editoriales y de producto
- Contexto editorial y narrativa intelectual
- Riesgos operativos y lecciones aprendidas
- Marco conceptual emergente

Para cualquier duda sobre cómo funciona el build, Angular, SEO o deployment → consultar `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`.

---

## 14. Critical Files

Archivos cuya modificación puede romper la plataforma completa. Requieren máximo cuidado y validación post-cambio.

| Archivo | Riesgo | Validaciones obligatorias |
|---------|--------|--------------------------|
| `scripts/build-content.ts` | **CRÍTICO.** Si falla o se altera la serialización, todos los artículos pierden cuerpo renderizado. | 1. `npm run build:content` sin errores. 2. Verificar `html` y `content` en articles.json. 3. Verificar renderizado en navegador. 4. Todos los 21 artículos visibles en /articulos. |
| `scripts/generate-seo-files.ts` | **ALTO.** Sitemap y robots.txt incorrectos afectan indexación Google. | 1. `npm run build:seo`. 2. Verificar que sitemap.xml tiene 21 URLs de artículos + rutas estáticas. 3. Verificar robots.txt apunta a sitemap correcto. |
| `src/app/pages/article-detail/article-detail.component.ts` | **ALTO.** Controla renderizado de artículos individuales. Si se rompe, ningún artículo muestra contenido. | 1. Verificar renderizado de al menos 3 artículos en navegador. 2. Verificar que `[innerHTML]` sigue vinculado a `article.html`. 3. Verificar SEO dinámico (canonical, OG). |
| `src/app/core/services/content.service.ts` | **ALTO.** Único punto de acceso a datos. Si se rompe, ni listado ni detalle funcionan. | 1. Verificar /articulos carga listado. 2. Verificar artículo individual carga. 3. Verificar featured articles en home. |
| `src/app/shared/seo/seo.service.ts` | **MEDIO-ALTO.** Si se rompe, todo el SEO dinámico desaparece (canonical, OG, meta). Invisible sin inspección del HTML. | 1. Inspeccionar HTML de artículo individual: verificar `<title>`, `<meta description>`, `<link canonical>`, `og:*` tags. |
| `src/app/app.routes.server.ts` | **ALTO.** Controla qué rutas se prerrenderizan. Si se rompe, el SSG genera HTML vacío o incompleto. | 1. Build completo sin errores. 2. Verificar que dist/ contiene HTML para rutas principales. 3. Verificar que artículos tienen HTML estático. |

### Regla general

Si modificas cualquiera de estos archivos:
1. Ejecutar `npm run build:ssg` completo
2. Verificar en navegador: home, /articulos, al menos 2 artículos individuales
3. Inspeccionar HTML generado para SEO
4. No hacer deploy sin validación visual

---

## 15. Conceptual Framework

### Marco intelectual de Archwise (artículos 01–21)

Los 21 artículos publicados construyen un marco conceptual coherente que progresa desde problemas concretos hacia una visión organizativa completa.

#### Capas conceptuales

```
┌─────────────────────────────────────────────────────────┐
│            CAPA 1: PROBLEMA OBSERVABLE                   │
│                                                         │
│  Technical Debt (02, 05)                                │
│  Legacy Systems no preparados para IA (11, 13)          │
│  Fracaso de iniciativas IA (18)                         │
│  Límites del Prompt Engineering (14, 15)                │
└────────────────────────┬────────────────────────────────┘
                         │ revela
                         ▼
┌─────────────────────────────────────────────────────────┐
│            CAPA 2: CAUSA RAÍZ                           │
│                                                         │
│  Knowledge Debt (05)                                    │
│  Falta de contexto explícito (01, 03, 06)              │
│  Documentación no diseñada para IA (03)                │
│  Arquitectura no tratada como activo estratégico (04)  │
└────────────────────────┬────────────────────────────────┘
                         │ se resuelve con
                         ▼
┌─────────────────────────────────────────────────────────┐
│            CAPA 3: DISCIPLINA / PRÁCTICA                │
│                                                         │
│  Context Engineering (06, 07, 08, 14, 15)              │
│  Architecture.md como artefacto vivo (01, 08)          │
│  Architecture Reviews (09)                              │
│  AI-Ready Systems design (12)                          │
└────────────────────────┬────────────────────────────────┘
                         │ se escala con
                         ▼
┌─────────────────────────────────────────────────────────┐
│            CAPA 4: GOVERNANCE Y EQUIPOS                 │
│                                                         │
│  Architecture Governance (10)                           │
│  AI Governance Framework (20)                           │
│  AI-Augmented Teams (16)                               │
└────────────────────────┬────────────────────────────────┘
                         │ permite
                         ▼
┌─────────────────────────────────────────────────────────┐
│            CAPA 5: MODELO ORGANIZATIVO                  │
│                                                         │
│  AI Operating Model (21)                                │
│  Enterprise AI Transformation Roadmap (19)             │
│  AI-Native Organizations (17)                          │
│  Organizational Memory (concepto transversal)          │
└─────────────────────────────────────────────────────────┘
```

#### Diagrama de dependencias conceptuales

```
Documentation for AI (01, 03)
        │
        ▼
Context Engineering (06, 07, 08, 14, 15)
        │
        ├──────────────────────┐
        ▼                      ▼
Knowledge Debt (05)    AI-Ready Systems (11, 12, 13)
        │                      │
        ▼                      ▼
Architecture as Strategy (04, 09)
        │
        ▼
Architecture Governance (10, 20)
        │
        ▼
AI-Augmented Teams (16)
        │
        ▼
AI Operating Model (21)
        │
        ▼
AI-Native Organizations (17, 19)
        │
        ▼
Organizational Memory (concepto emergente → article-22 candidato)
```

#### Conceptos clave y sus relaciones

| Concepto | Artículos | Depende de | Habilita |
|----------|-----------|------------|----------|
| Documentation for AI | 01, 03 | — | Context Engineering |
| Context Engineering | 06, 07, 08, 14, 15 | Documentation for AI | Knowledge Debt reduction, AI-Ready Systems |
| Knowledge Debt | 02, 05 | Context Engineering (para resolverla) | Justificación de inversión en contexto |
| Architecture as Strategy | 04, 09 | Context Engineering | Governance |
| AI-Ready Systems | 11, 12, 13 | Context Engineering, Architecture | Transformation Roadmap |
| Architecture Governance | 10, 20 | Architecture as Strategy | AI-Augmented Teams |
| AI-Augmented Teams | 16 | Governance, Context Engineering | AI Operating Model |
| AI Operating Model | 21 | Teams, Governance | AI-Native Organizations |
| AI-Native Organizations | 17, 19 | Operating Model | Organizational Memory |
| Organizational Memory | (transversal) | Todo lo anterior | Resiliencia organizativa |

#### Narrativa común

Los artículos de Archwise construyen un argumento acumulativo:

1. **El problema visible** es que la IA falla en organizaciones reales (legacy systems, iniciativas fracasadas, prompt engineering insuficiente).
2. **La causa profunda** es la ausencia de contexto explícito y la acumulación de knowledge debt.
3. **La solución práctica** es Context Engineering: sistematizar la captura, estructuración y distribución de contexto (con architecture.md como artefacto concreto).
4. **La escalabilidad** requiere governance (reviews, frameworks, procesos) y equipos capacitados (AI-Augmented Teams).
5. **La visión final** es la organización AI-Native, que trata el conocimiento como infraestructura y opera con un AI Operating Model explícito.

---

## 16. Emerging Thesis of Archwise

### Tesis central

**La verdadera barrera para la adopción de IA en las empresas no es tecnológica. Es la ausencia de contexto explícito, estructurado y gobernable.**

### Ideas fundamentales

1. **El contexto es infraestructura, no documentación.** Las organizaciones que tratan el contexto como un artefacto vivo y gobernable (no como un wiki olvidado) son las que logran escalar la IA. Sin contexto explícito, cualquier herramienta de IA opera en un vacío que produce resultados inconsistentes e inmantenibles.

2. **La deuda de conocimiento es más peligrosa que la deuda técnica.** La deuda técnica es visible (código legacy, frameworks obsoletos). La knowledge debt es invisible: decisiones no documentadas, contexto tácito en la cabeza de expertos, procesos que nadie puede explicar. La IA la expone brutalmente, porque necesita contexto que simplemente no existe.

3. **Prompt Engineering es optimización local; Context Engineering es optimización sistémica.** Afinar prompts mejora interacciones puntuales. Sistematizar el contexto transforma la capacidad organizativa. La diferencia es entre mejorar una conversación y mejorar un sistema.

4. **La arquitectura ha vuelto a ser estratégica gracias a la IA.** En la era pre-IA, la arquitectura se degradó a infraestructura invisible. La IA la ha devuelto al centro: sin arquitectura explícita, los sistemas no pueden colaborar con agentes inteligentes. Architecture.md no es un lujo documental: es la interfaz entre humanos y máquinas.

5. **La madurez organizativa en IA se mide por la capacidad de transferir conocimiento, no por el número de herramientas adoptadas.** Organizaciones con muchos copilots pero sin procesos de transferencia de conocimiento están en nivel 1. Organizaciones con documentación viva, governance adaptativo y memoria organizativa están en niveles 4-5.

6. **El destino final es la organización AI-Native**, donde el conocimiento es infraestructura, la governance es adaptativa, los equipos son AI-Augmented y la memoria organizativa es viva. No es una utopía: es el resultado de aplicar Context Engineering a escala organizativa.

### Fórmula sintética

```
Contexto explícito + Governance adaptativo + Transferencia de conocimiento = Organización AI-Native
```

### Posición intelectual de Archwise

Archwise no es un blog de IA. Es una editorial técnica que construye un argumento: **las organizaciones que invierten en contexto, arquitectura y governance son las que logran resultados sostenibles con IA.** Todo lo demás es optimización local disfrazada de transformación.

---

## 17. Known Risks & Technical Debt

### Riesgos técnicos activos

| Riesgo | Severidad | Estado | Impacto potencial | Mitigación |
|--------|-----------|--------|-------------------|------------|
| Prerender dinámico depende de `articles.json` generado previamente | **MEDIO** | Activo | Si alguien ejecuta `ng build --prerender` sin correr antes `build:content`, la lectura de slugs en `getPrerenderParams` puede fallar por archivo ausente/desactualizado. | Usar `npm run build:ssg` como flujo canónico (`build:content` → `build:seo` → `ng build --prerender`). |
| Crecimiento del corpus (>50 artículos) | **MEDIO** | Futuro | `articles.json` contiene el HTML completo de cada artículo. A 50+ artículos, el archivo puede superar 5-10 MB. Impacto: tiempo de carga de /articulos, memory footprint del build. | Considerar lazy loading o paginación. Separar listado (sin HTML) de detalle (con HTML). Actualmente no es problema con 21 artículos. |
| Categorías sin validación automática | **BAJO** | Aceptado | No hay validación en build-content.ts de que la categoría en article.json sea una de las 6 categorías oficiales. Typos crearían categorías fantasma. | Añadir validación en build-content.ts contra lista cerrada. O simplemente revisar manualmente (corpus pequeño). |
| Sitemap no incluye lastmod para rutas estáticas | **BAJO** | Aceptado | `/`, `/manifesto`, `/articulos` no tienen `<lastmod>`. Impacto mínimo en SEO pero no es óptimo. | Añadir fechas estáticas en generate-seo-files.ts. |
| Debug console.log en build-content.ts (article-11) | **BAJO** | Pendiente de limpieza | Ruido en output de build. Sin impacto funcional. | Eliminar bloque de debug. |
| Variantes editoriales huérfanas | **BAJO** | Documentado | `article-01/article-v2.md`, `article-05/article-v2.md`, `article-05/article.md.cleaned` coexisten con article.md. No afectan el build (solo se lee article.md) pero pueden confundir a futuros editores. | Eliminar o archivar variantes. |

### Riesgo estratégico: prerender y crecimiento

**Estado actualizado (2026-06-01):** la deuda técnica de slugs hardcodeados en `getPrerenderParams` está resuelta. `src/app/app.routes.server.ts` ahora lee dinámicamente todos los slugs desde `src/assets/content/articles.json`.

Resultado verificado en build:
1. `npm run build:ssg` OK
2. 21 artículos prerenderizados
3. 24 rutas estáticas totales
4. Sin errores SSR

Riesgo remanente a medio plazo:
1. Ejecución manual de `ng build --prerender` sin `build:content` previo
2. Crecimiento del corpus sin optimizaciones de payload (archivo `articles.json` con HTML completo)

**Situación actual:** El prerender ya no depende de discovery implícito por enlaces internos. Depende de una fuente explícita y única (`articles.json`) generada por el pipeline.

**Recomendación operativa:** Mantener `npm run build:ssg` como flujo estándar de publicación para garantizar `articles.json` actualizado antes del prerender.

**Mejora futura opcional:** añadir validación explícita con mensaje claro cuando `articles.json` no exista o esté vacío.

---

## 18. Instructions For Any Future AI

1. **Lee este documento completo** antes de trabajar en Archwise.
2. **Lee `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`** para detalles técnicos (build, Angular, SEO, deployment).
3. No modifiques article.md ni article.json sin seguir el workflow editorial (sección 3).
4. No edites articles.json manualmente: siempre usa `npm run build:content`.
5. Para crear un artículo: brief.md → notes.md → outline.md → article.md → review.md → assets.md → article.json → publication.
6. Valida siempre frontmatter mínimo en article.md (title, slug, description, date).
7. Usa article.json para todos los metadatos editoriales y de SEO.
8. **Ejecuta `npm run build:ssg`** como comando canónico antes de publicar.
9. Verifica que el artículo aparece en /articulos y en sitemap.xml.
10. **Si modificas archivos de la sección "Critical Files" (§14)**, aplica las validaciones indicadas.
11. Documenta cualquier incidencia o decisión relevante en este archivo.
12. No inventes comandos. Usa solo los definidos en package.json.
13. Si tienes dudas, revisa los ejemplos existentes antes de modificar.
14. Consulta la sección "Conceptual Framework" (§15) para entender la narrativa intelectual antes de escribir artículos nuevos.

---

Este documento es la referencia operativa y de continuidad para cualquier IA o humano que trabaje en Archwise. Para detalles técnicos de implementación, consultar `docs/ARCHWISE-TECHNICAL-ARCHITECTURE.md`. Si sigues estas instrucciones, podrás continuar el proyecto correctamente en menos de 5 minutos.
