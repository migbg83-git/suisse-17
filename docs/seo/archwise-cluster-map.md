# Archwise — Mapa de Clusters Editoriales y SEO

> Fecha del análisis: 2026-07-24  
> Base: frontmatter de artículos, `docs/framework-architecture.md`, `docs/AI-HANDOFF.md`  
> Datos de Search Console: periodo 2026-05-28 a 2026-07-21

---

## Marco de referencia

El Framework Archwise estructura el corpus en **6 capas causales**. No son categorías temáticas arbitrarias: cada capa es una dependencia del sistema. Un artículo puede pertenecer a varios clusters si los conceptos que desarrolla cruzan capas.

Esta guía mapea los 12 territorios relevantes a esas 6 capas y evalúa la cobertura editorial actual.

---

## Cluster 01 — AI-Ready Systems y Modernización de Legacy

### Definición del territorio
Diagnóstico de preparación para IA: por qué la mayoría de los sistemas no pueden adoptar IA de forma sostenible, qué características distinguen a una arquitectura AI-Ready, y cuál es la brecha entre sistemas legacy y organizaciones AI-Ready.

### Capa del Framework
Capa 1 (Diagnóstico) + transición hacia Capa 2.

### Artículo pilar actual
**Article-13** (`ai-ready-systems-vs-legacy-systems`) — Cierra el cluster con la comparativa definitiva y el framework de las cuatro deudas invisibles.

### Artículos de apoyo existentes
| Artículo | Slug | Rol en el cluster |
|----------|------|-------------------|
| Article-11 | `por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia` | Apertura y diagnóstico |
| Article-12 | `las-7-caracteristicas-arquitectura-ai-ready` | Definición de capacidades |
| Article-13 | `ai-ready-systems-vs-legacy-systems` | Comparativa / cierre |
| Article-18 | `por-que-fracasan-iniciativas-ia` | Diagnóstico de fracasos |
| Article-19 | `enterprise-ai-transformation-roadmap` | Roadmap de evolución |
| Article-06 | `context-engineering-legacy-ia-falla` | Perspectiva técnica legacy |

### Grado de cobertura
**Fuerte** — Cuatro artículos directamente centrados en AI-Ready, más dos de apoyo. El cluster tiene diagnóstico, definición, comparación y roadmap.

### Solapamientos o canibalización potencial
- Article-11 y article-18 se solapan parcialmente: ambos diagnostican por qué fracasan las iniciativas de IA. No hay canibalización directa porque article-11 se centra en los sistemas y article-18 en las iniciativas organizativas, pero los títulos compiten en búsqueda.
- Article-06 tiene un pie en este cluster y en el de Context Engineering: si se busca "IA en sistemas legacy", ambos pueden aparecer.

### Huecos editoriales
- No hay artículo específico sobre **modernización de sistemas legacy con IA** como proceso técnico. Article-13 lo aborda conceptualmente pero no como guía operativa.
- Falta cobertura de **AI-Readiness Assessment** como herramienta concreta.

### Calidad del enlazado interno
Parcial. Article-13 menciona articles 11 y 12 en la introducción. Article-22 referencia article-13. El enlazado entre article-06 y article-11 no está documentado en el inventario.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| modernización de sistemas legacy con ia | 2 | 37.5 | no identificada |
| modernización legacy con ia | 1 | 47 | no identificada |
| ai-ready systems vs legacy systems *(inferido)* | — | — | art-13 |

### Páginas que Google ya asocia con este cluster
- `ai-ready-systems-vs-legacy-systems`: **1 clic, 49 impresiones, pos 35.4**

---

## Cluster 02 — Context Engineering

### Definición del territorio
Context Engineering es la disciplina que define con qué conocimiento trabaja la IA (no cómo se le habla). Abarca la captura, estructuración y entrega de contexto diferencial: el conocimiento privado de la organización que ningún LLM ya conoce.

### Capa del Framework
Capa 2 (Contexto explícito y Knowledge Debt).

### Artículo pilar actual
**Article-07** (`framework-context-engineering-enterprise`) — Framework práctico e implementable.  
Candidato alternativo: **Article-15** (`context-engineering-vs-prompt-engineering`) — Mayor potencial SEO.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-01 | `architecture-md-vale-mas-que-prompts` | Entrada conceptual / contexto vs prompt |
| Article-03 | `documentacion-necesita-llm` | Qué documentar |
| Article-06 | `context-engineering-legacy-ia-falla` | Contexto en legacy |
| Article-07 | `framework-context-engineering-enterprise` | Framework operativo |
| Article-08 | `plantillas-ejemplos-architecture-md-enterprise` | Implementación / plantillas |
| Article-09 | `architecture-review-efectiva-ia` | Governance de contexto |
| Article-15 | `context-engineering-vs-prompt-engineering` | Comparativa con PE |

### Grado de cobertura
**Fuerte** — Es el cluster más denso del corpus (7 artículos). Tiene entrada conceptual, diagnóstico, framework, implementación y comparativa.

### Solapamientos o canibalización potencial
- Articles 01 y 15 compiten en la diferenciación prompt vs contexto. Article-01 es más narrativo y antiguo; article-15 es más completo y técnico.
- Articles 07 y 08 son muy complementarios pero podrían confundir al lector sobre cuál leer primero.
- Article-03 y article-08 tienen algo de solapamiento en "qué documentar y cómo".

### Huecos editoriales
- No hay artículo sobre **Context Engineering en equipos distribuidos o multi-dominio**.
- Falta un artículo sobre **cómo medir la calidad del contexto** (más allá de la auditoría de architecture.md).

### Calidad del enlazado interno
Buena en la serie Context Engineering Essentials (articles 01-07). Article-22 enlaza hacia article-03. Necesita más enlaces desde los artículos de capas superiores (20, 21, 25) hacia el núcleo de Context Engineering.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| context engineering | 1 | 41 | no identificada |
| prompt thinking | 2 | 10 | — |
| respuesta arquitectónica coherente | 53 | 26 | integracion-coherencia-...† |

*† La consulta "respuesta arquitectónica coherente" aparece mayoritariamente vinculada a article-30, no a este cluster.*

### Páginas que Google ya asocia con este cluster
- `context-engineering-vs-prompt-engineering`: 36 impresiones, pos 6.5 → **quick win potencial**
- `por-que-el-prompt-engineering-no-es-suficiente...`: 53 impresiones, pos 6.3 → **quick win potencial**
- `architecture-review-efectiva-ia`: 18 impresiones, pos 8.1
- `framework-context-engineering-enterprise`: 5 impresiones, pos 6.4

---

## Cluster 03 — Prompt Engineering

### Definición del territorio
La disciplina de optimizar interacciones con LLMs: su papel, sus límites y su relación con Context Engineering. No se trata de un territorio que Archwise quiera poseer como especialidad; se trata de un territorio adyacente desde el que atraer lectores que después descubran Context Engineering.

### Capa del Framework
Capa 2 (entrada al sistema, contexto previo al framework).

### Artículo pilar actual
**Article-14** (`por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia`) — Mejor candidato como puerta de entrada SEO.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-14 | `por-que-el-prompt-engineering-no-es-suficiente...` | Límites del PE |
| Article-15 | `context-engineering-vs-prompt-engineering` | Comparativa |
| Article-31 | `arquitectura-equipos-virtuales-ia-enterprise` | Evolución: de prompt a sistema |

### Grado de cobertura
**Parcial** — Hay artículos que abordan Prompt Engineering como punto de partida o límite, pero ninguno que lo desarrolle como disciplina en sí. Esto es coherente con el posicionamiento estratégico de Archwise.

### Solapamientos o canibalización potencial
Articles 14 y 15 compiten por la misma búsqueda ("prompt engineering" + "context engineering"). Article-14 tiene más impresiones en GSC (53) que article-15 (36). Deberían estar bien enlazados entre sí para que el usuario navegue de uno al otro.

### Huecos editoriales
Deliberado: Archwise no necesita cubrir Prompt Engineering como especialidad. El hueco estratégico es que article-14 podría captar búsquedas de "prompt engineering" para luego derivar al territorio propio de Context Engineering.

### Calidad del enlazado interno
Parcial. Article-15 menciona articles 06, 07 y 13. No hay evidencia de que article-14 enlace hacia artículos de Context Engineering o Framework Archwise.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| prompt thinking | 2 | 10 | — |

### Páginas que Google ya asocia con este cluster
- `por-que-el-prompt-engineering-no-es-suficiente...`: **53 impresiones, pos 6.3** → **máxima prioridad SEO**
- `context-engineering-vs-prompt-engineering`: 36 impresiones, pos 6.5

---

## Cluster 04 — Knowledge Debt

### Definición del territorio
La deuda de conocimiento: el conocimiento crítico de la organización que nunca fue documentado, sistematizado ni transferido. La IA hace visible esta deuda porque la necesita para funcionar. Territorio de diagnóstico y de diferenciación frente a "technical debt".

### Capa del Framework
Capa 2 (Contexto explícito y Knowledge Debt).

### Artículo pilar actual
**Article-05** (`technical-debt-vs-knowledge-debt-ia`) — Comparativa definitiva y más buscada.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-02 | `deuda-tecnica-ia-revela` | Diagnóstico inicial |
| Article-05 | `technical-debt-vs-knowledge-debt-ia` | Comparativa / definición |
| Article-06 | `context-engineering-legacy-ia-falla` | Knowledge Debt en legacy |
| Article-22 | `organizational-memory-activo-ai-native` | Consecuencias a escala |

### Grado de cobertura
**Parcial** — Hay buenos artículos de diagnóstico y comparativa, pero el territorio necesita más profundidad operativa: cómo medir, cuantificar y gestionar Knowledge Debt.

### Solapamientos o canibalización potencial
Article-02 y article-05 son muy similares en intención diagnóstica. Article-02 es más narrativo y menos técnico; article-05 es la pieza madura. Pueden competir por "deuda técnica IA" o "knowledge debt".

### Huecos editoriales
- Falta un artículo sobre **cómo auditar y cuantificar Knowledge Debt** en una organización.
- Falta cobertura de **Knowledge Debt en contextos de IA agentic**: qué pasa cuando un agente hereda una organización con Knowledge Debt alto.

### Calidad del enlazado interno
Buena entre articles 02, 05 y 22. Débil desde articles 20 y 21 hacia este cluster.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| knowledge debt | **1** | **1** | `technical-debt-vs-knowledge-debt-ia` |
| technical debts | 1 | 11 | — |

### Páginas que Google ya asocia con este cluster
- `technical-debt-vs-knowledge-debt-ia`: 22 impresiones, pos 8.6 → con posición 1 para "knowledge debt"

---

## Cluster 05 — Organizational Memory y Memory Architecture

### Definición del territorio
La capacidad de una organización para capturar, estructurar, gobernar, recuperar y reutilizar decisiones, reglas, contexto y aprendizajes críticos. Memory Architecture como su implementación técnica y organizativa.

### Capa del Framework
Capa 5 (Organizational Memory).

### Artículo pilar actual
**Article-22** (`organizational-memory-activo-ai-native`) — Definición y alcance estratégico.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-22 | `organizational-memory-activo-ai-native` | Definición / alcance |
| Article-23 | `memory-architecture-contexto-reutilizable-enterprise` | Arquitectura / diseño |
| Article-24 | `context-systems-entregar-contexto-correcto-enterprise` | Sistema de entrega |

### Grado de cobertura
**Parcial** — Tres artículos que avanzan desde la definición hasta el sistema de entrega, pero el territorio de implementación práctica (cómo instalar una Memory Architecture en una organización real) está poco desarrollado.

### Solapamientos o canibalización potencial
Articles 22, 23 y 24 forman una trilogía cohesionada. El solapamiento es intencional y estructural. El riesgo es que un lector externo no sepa por cuál empezar.

### Huecos editoriales
- Falta un artículo sobre **cómo implementar Organizational Memory paso a paso** (guía operativa).
- Falta un artículo sobre **Memory Architecture para sistemas agénticos**: cómo los agentes acceden y actualizan la memoria organizativa.
- No hay artículo sobre **métricas de Organizational Memory**.

### Calidad del enlazado interno
Buena entre 22-24. Article-31 referencia Organizational Memory como columna vertebral. Falta enlazado desde articles 17, 20, 21 hacia este cluster.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| memory infrastructure | 1 | 12 | — |

### Páginas que Google ya asocia con este cluster
- `memory-architecture-contexto-reutilizable-enterprise`: 16 impresiones, pos 6.6 → posición prometedora, poco volumen aún

---

## Cluster 06 — AI Governance

### Definición del territorio
El sistema nervioso de la organización IA: los mecanismos, estructuras y procesos que permiten coordinar, supervisar y evolucionar el uso de IA de forma alineada con objetivos, valores y riesgos. Governance como coordinación, no como control.

### Capa del Framework
Capa 3 (Governance).

### Artículo pilar actual
**Article-20** (`ai-governance-framework`) — Definición completa del framework de governance.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-09 | `architecture-review-efectiva-ia` | Governance arquitectónico |
| Article-10 | `architecture-governance-contexto-compartido` | Contexto compartido como governance |
| Article-20 | `ai-governance-framework` | Framework principal |

### Grado de cobertura
**Parcial** — El territorio tiene un artículo pilar sólido y dos artículos de apoyo desde el ángulo arquitectónico. Pero falta cobertura de governance específico para agentes y sistemas agentic.

### Solapamientos o canibalización potencial
Articles 09 y 10 se solapan parcialmente: ambos hablan de governance arquitectónico. Article-10 es más conceptual; article-09 es más operativo. No hay canibalización SEO directa.

### Huecos editoriales
- Falta un artículo sobre **AI Governance para sistemas agénticos** (¿cómo gobernar agentes que toman decisiones autónomas?).
- Falta cobertura de **AI Governance y compliance regulatorio** (AI Act europeo, etc.).
- No hay artículo sobre **ownership y accountability en AI Operating Models distribuidos**.

### Calidad del enlazado interno
Parcial. Articles 20 y 21 se mencionen mutuamente conceptualmente. Article-25 (Agentic AI) referencia governance como condición necesaria.

### Consultas de Search Console relacionadas
Ninguna consulta directa en el dataset actual.

### Páginas que Google ya asocia con este cluster
- `ai-governance-framework`: 11 impresiones, pos 7.3 → página cercana a top 10
- `architecture-governance-contexto-compartido`: 5 impresiones, pos 9

---

## Cluster 07 — AI Operating Model

### Definición del territorio
El sistema que define cómo se coordinan personas, procesos, conocimiento y agentes para operar IA a escala. No es estrategia ni governance ni arquitectura técnica. Es la infraestructura invisible que convierte capacidades aisladas en capacidad organizativa sostenible.

### Capa del Framework
Capa 4 (AI Operating Model).

### Artículo pilar actual
**Article-21** (`ai-operating-model-enterprise`) — Definición y diseño del AI Operating Model.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-21 | `ai-operating-model-enterprise` | Definición y diseño |
| Article-16 | `ai-augmented-development-teams` | Aplicación en equipos |
| Article-31 | `arquitectura-equipos-virtuales-ia-enterprise` | Orquestación como Operating Model |

### Grado de cobertura
**Parcial** — El artículo pilar es sólido pero el cluster tiene pocos artículos de apoyo en comparación con Context Engineering. Article-31 refuerza el modelo desde el ángulo de los equipos virtuales.

### Solapamientos o canibalización potencial
Article-21 y article-31 se complementan: 21 define el modelo, 31 lo implementa en la práctica con equipos virtuales. No hay canibalización.

### Huecos editoriales
- Falta un artículo sobre **cómo diseñar AI Operating Model para empresas medianas** (el corpus asume escala enterprise grande).
- Falta cobertura de **métricas del AI Operating Model**: ¿cómo saber si el modelo operativo está funcionando?

### Calidad del enlazado interno
Parcial. Article-21 referencia governance (20) y context engineering (implícito). Article-31 es reciente y no tiene suficientes enlaces entrantes aún.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| ai operating model | 1 | **3** | `ai-operating-model-enterprise` |

### Páginas que Google ya asocia con este cluster
- `ai-operating-model-enterprise`: 6 impresiones, pos **5.2** → muy bien posicionado, poco volumen
- `arquitectura-equipos-virtuales-ia-enterprise`: 26 impresiones, pos **8.8** → mejor performance del cluster

---

## Cluster 08 — AI-Augmented Teams

### Definición del territorio
Cómo cambia el trabajo de los equipos de software cuando la IA se integra como capacidad colectiva (no individual): roles, procesos, niveles de madurez, productividad colectiva vs individual.

### Capa del Framework
Capa 4 (AI Operating Model, aplicación a equipos).

### Artículo pilar actual
**Article-16** (`ai-augmented-development-teams`).

### Artículos de apoyo existentes
Solo article-16 cubre directamente este territorio. Articles 21 y 31 son complementarios.

### Grado de cobertura
**Débil** — Un solo artículo directo. El territorio tiene potencial de búsqueda (ver GSC: "augmented development team" con 27 impresiones en posición 75).

### Huecos editoriales
- Falta un artículo sobre **AI-Augmented Teams: casos reales y métricas**.
- Falta un artículo sobre **roles específicos en un equipo AI-Augmented** (AI Product Owner, AI Architect, etc.).

### Calidad del enlazado interno
Débil. Article-16 no aparece con suficientes referencias desde otros artículos del corpus.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| augmented development team | 27 | 75.8 | `ai-augmented-development-teams` |
| ai-augmented development team | 2 | 71 | — |

### Páginas que Google ya asocia con este cluster
- `ai-augmented-development-teams`: **42 impresiones, pos 55.5** → alta demanda, posición muy baja, oportunidad a desarrollar

---

## Cluster 09 — AI-Native Organizations

### Definición del territorio
Organizaciones diseñadas estructuralmente para trabajar con IA: no las que adoptan herramientas, sino las que rediseñan procesos, conocimiento, governance y arquitectura para colaborar con sistemas inteligentes. Incluye los patrones de fracaso y el modelo de madurez de transformación.

### Capa del Framework
Transición entre Capa 1 y Capa 4.

### Artículo pilar actual
**Article-17** (`ai-native-organizations`) — Definición de la organización AI-Native.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-17 | `ai-native-organizations` | Definición |
| Article-18 | `por-que-fracasan-iniciativas-ia` | Diagnóstico de fracasos |
| Article-19 | `enterprise-ai-transformation-roadmap` | Roadmap de transformación |

### Grado de cobertura
**Parcial** — Tres artículos que cubren el territorio desde diagnóstico, definición y roadmap, pero la transición operativa (cómo pasar de AI-Ready a AI-Native) no tiene artículo propio.

### Solapamientos o canibalización potencial
Articles 17 y 19 pueden solaparse para búsquedas como "organizaciones AI-Native" o "AI transformation". La diferencia es que 17 define y 19 da el roadmap, pero en búsqueda orgánica pueden competir.

### Huecos editoriales
- Falta un artículo sobre **casos reales de organizaciones AI-Native**: qué las diferencia en la práctica.
- La transición de "AI-Augmented" a "AI-Native" no tiene artículo de puente.

### Calidad del enlazado interno
Débil. Article-17 y article-18 no aparecen bien enlazados con el Framework Archwise (articles 26-30), que es donde el corpus resuelve "cómo construir una organización AI-Native".

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| ai native organization | 2 | 69.5 | — |
| ai-native organization | 2 | 73.5 | — |
| ai native | 1 | 34 | — |

### Páginas que Google ya asocia con este cluster
- `ai-native-organizations`: 16 impresiones, pos 28.2

---

## Cluster 10 — Agentic AI

### Definición del territorio
Los agentes de IA en entornos enterprise: por qué fallan, qué infraestructura necesitan para funcionar, y cómo diseñar sistemas de agentes gobernados por protocolos de interacción. Diferenciación entre Agentic AI y automatización simple.

### Capa del Framework
Capa 6 (capacidad agéntica enterprise).

### Artículo pilar actual
**Article-25** (`agentic-ai-enterprise-governance-memoria-arquitectura`) — Diagnóstico y arquitectura de fallo.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-25 | `agentic-ai-enterprise-governance-memoria-arquitectura` | Diagnóstico + infraestructura |
| Article-31 | `arquitectura-equipos-virtuales-ia-enterprise` | Arquitectura de equipos virtuales |

### Grado de cobertura
**Débil** — Dos artículos. El territorio de Agentic AI es uno de los de mayor interés editorial actual y está infradesarrollado en el corpus.

### Huecos editoriales
- Falta un artículo sobre **Agentic AI: casos reales de implementación enterprise**.
- Falta un artículo sobre **orquestación multi-agente**: cómo coordinar múltiples agentes bajo un AI Operating Model.
- Falta cobertura de **Agentic AI y Knowledge Debt**: qué pasa cuando los agentes operan sobre bases de conocimiento degradadas.

### Calidad del enlazado interno
Débil. Article-25 es el más reciente del cluster antes de article-31. Necesita enlaces desde articles 20, 21, 22 y 24.

### Consultas de Search Console relacionadas
Ninguna consulta directa en el dataset actual.

### Páginas que Google ya asocia con este cluster
- `agentic-ai-enterprise-governance-memoria-arquitectura`: 4 impresiones, pos 5.5 → excelente posición, muy pocas impresiones

---

## Cluster 11 — Integración, Coherencia y Madurez Operativa

### Definición del territorio
La diferencia entre integrar capacidades y mantener coherencia sistémica. Incluye Sequence Integrity, Evidence Integrity, Coherence Signals, Measurement System y el cierre conceptual del Framework Archwise (System Coherence + Interface Integrity).

### Capa del Framework
Capas 5-6 (síntesis y cierre del framework).

### Artículo pilar actual
**Article-30** (`integracion-coherencia-principio-rector-mecanismo-arquitectonico`) — Cierre conceptual.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-27 | `arquitectura-adopcion-framework-archwise-orden-activacion` | Activation Debt y secuencia |
| Article-28 | `measurement-system-integracion-madurez-operativa` | Measurement System |
| Article-29 | `integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas` | Evaluación de madurez |
| Article-30 | `integracion-coherencia-principio-rector-mecanismo-arquitectonico` | Cierre conceptual |

### Grado de cobertura
**Fuerte** — Cuatro artículos consecutivos con una progresión lógica clara: orden de activación → measurement → evaluación → síntesis. El corpus más maduro del framework.

### Huecos editoriales
- El concepto de **Coherence Drift** (article-32, en preparación) completará este territorio.
- Falta un artículo más accesible de entrada al tema: el cluster es denso para lectores que no vienen de articles 26-29.

### Calidad del enlazado interno
Buena entre los artículos 27-30. Débil desde artículos anteriores del corpus hacia este territorio.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| respuesta arquitectónica coherente | 53 | 26 | article-30 |

### Páginas que Google ya asocia con este cluster
- `integracion-coherencia-principio-rector-mecanismo-arquitectonico`: **59 impresiones, pos 24** → mayor volumen de impresiones del corpus individual

---

## Cluster 12 — Framework Archwise

### Definición del territorio
La síntesis del corpus Archwise como sistema operativo organizativo: por qué la IA no escala con más capacidades sino con mejor integración, cómo activar las capacidades en el orden correcto, y la página `/framework` como hub de orientación.

### Capa del Framework
Capas 1-6 (síntesis transversal).

### Artículo pilar actual
**Article-26** (`framework-archwise-integracion-capacidades-escalar-ia`) — Introducción al framework completo.

### Artículos de apoyo existentes
| Artículo | Slug | Rol |
|----------|------|-----|
| Article-26 | `framework-archwise-integracion-capacidades-escalar-ia` | Síntesis / definición |
| Article-27 | `arquitectura-adopcion-framework-archwise-orden-activacion` | Adopción / secuencia |
| Article-30 | `integracion-coherencia-principio-rector-mecanismo-arquitectonico` | Cierre fundacional |
| `/framework` | — | Hub de navegación del framework |

### Grado de cobertura
**Parcial** — El framework tiene artículos de síntesis y cierre, pero le falta un artículo de entrada más accesible para audiencias que no vienen del corpus completo. La página `/framework` cumple parte de esa función, pero tiene limitaciones SEO al ser una página de navegación.

### Huecos editoriales
- Falta un artículo de entrada sobre **qué es el Framework Archwise y cómo usarlo** orientado a lectores sin contexto previo.
- Falta cobertura de **casos de éxito usando el Framework Archwise**: evidencia de resultados.

### Calidad del enlazado interno
Parcial. La página `/framework` tiene 15 impresiones en GSC. Article-26 tiene 7 impresiones y posición 5.3. Necesita más enlaces entrantes desde el corpus.

### Consultas de Search Console relacionadas
| Consulta | Impresiones | Posición | Página asociada |
|----------|-------------|----------|-----------------|
| archwise | 39 | 8.8 | homepage |
| space wise arquitectura *(probable error tipográfico)* | 7 | 47 | — |

### Páginas que Google ya asocia con este cluster
- `framework-archwise-integracion-capacidades-escalar-ia`: 7 impresiones, pos **5.3** → excelente posición
- `/framework`: 15 impresiones, pos 10.1

---

## Resumen de cobertura por cluster

| Cluster | Cobertura | Artículo pilar | Artículos de apoyo | Huecos principales |
|---------|-----------|----------------|--------------------|--------------------|
| AI-Ready Systems | Fuerte | art-13 | 5 | Modernización técnica legacy |
| Context Engineering | Fuerte | art-07 / art-15 | 6 | Context Engineering multi-dominio |
| Prompt Engineering | Parcial | art-14 | 2 | Deliberado |
| Knowledge Debt | Parcial | art-05 | 3 | Auditoría y cuantificación de KD |
| Organizational Memory | Parcial | art-22 | 2 | Implementación operativa |
| AI Governance | Parcial | art-20 | 2 | Governance para agentes |
| AI Operating Model | Parcial | art-21 | 2 | Métricas del Operating Model |
| AI-Augmented Teams | Débil | art-16 | 0 | Casos reales, roles específicos |
| AI-Native Organizations | Parcial | art-17 | 2 | Transición AI-Augmented → AI-Native |
| Agentic AI | Débil | art-25 | 1 | Implementación, multi-agente |
| Integración y Madurez | Fuerte | art-30 | 3 | Entrada accesible al territorio |
| Framework Archwise | Parcial | art-26 | 2 | Artículo de entrada sin contexto previo |
