# Auditoria linguistica integral - Archwise Framework

## 1. Alcance y criterio

Esta auditoria cubre exclusivamente:

- Framework canónico documental:
  - [docs/framework-discovery.md](docs/framework-discovery.md)
  - [docs/framework-architecture.md](docs/framework-architecture.md)
  - [docs/framework-content.md](docs/framework-content.md)
  - [docs/framework-v2-simplification.md](docs/framework-v2-simplification.md)
  - [docs/framework-ui-spec.md](docs/framework-ui-spec.md)
  - [docs/framework-visual-design-spec.md](docs/framework-visual-design-spec.md)
- Fuente de UI/datos de framework:
  - [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts)
- Corpus editorial objetivo:
  - [content/enterprise-ai/article-20/article.md](content/enterprise-ai/article-20/article.md)
  - [content/enterprise-ai/article-21/article.md](content/enterprise-ai/article-21/article.md)
  - [content/enterprise-ai/article-22/article.md](content/enterprise-ai/article-22/article.md)
  - [content/enterprise-ai/article-23/article.md](content/enterprise-ai/article-23/article.md)
  - [content/enterprise-ai/article-24/article.md](content/enterprise-ai/article-24/article.md)
  - [content/enterprise-ai/article-25/article.md](content/enterprise-ai/article-25/article.md)
  - [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md)
  - [content/enterprise-ai/article-27/article.md](content/enterprise-ai/article-27/article.md)
  - [content/enterprise-ai/article-28/article.md](content/enterprise-ai/article-28/article.md)
  - [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md)

No se realizaron correcciones. Solo diagnostico, clasificacion y propuesta canonica.

## 2. Resumen ejecutivo

El problema principal no es una falta puntual de tildes, sino una deriva sistemica en tres frentes:

1. Inconsistencia ortografica masiva (acentos) en activos canónicos y en partes del corpus.
2. Politica terminologica EN/ES no explicitada, con variaciones del mismo concepto segun archivo.
3. Spanglish no controlado en registros formales (especialmente en algunos documentos y en article-26/article-29).

Impacto:

- Deteriora autoridad editorial.
- Debilita el vocabulario del framework como sistema de precision.
- Introduce ruido semantico entre UI de framework, docs de diseño y articulos.

## 3. Hallazgos por severidad

## Critico

1. Degradacion ortografica extendida en piezas de alto peso editorial.
- Evidencia intensa en [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md) y [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md), con alta densidad de formas sin tilde: como, integracion, adopcion, diagnostico, operacion, senales, metrica(s), etc.
- Evidencia en docs canónicos del framework, por ejemplo [docs/framework-architecture.md](docs/framework-architecture.md#L10), [docs/framework-content.md](docs/framework-content.md#L95), [docs/framework-ui-spec.md](docs/framework-ui-spec.md#L553), [docs/framework-visual-design-spec.md](docs/framework-visual-design-spec.md#L53).

2. Inconsistencia ortografica en labels/definiciones de la fuente UI del framework.
- Ejemplos: [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L10), [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L66), [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L205).

## Alto

1. Variacion EN/ES del mismo termino sin regla visible.
- Ejemplos: Governance/Gobernanza, Operating Model/Modelo Operativo, Organizational Memory/Memoria Organizativa, Context Systems/Sistemas Contextuales, Agentic AI/IA Agentica.
- Convivencia documentada en [docs/framework-content.md](docs/framework-content.md#L304), [content/enterprise-ai/article-20/article.md](content/enterprise-ai/article-20/article.md#L8), [content/enterprise-ai/article-28/article.md](content/enterprise-ai/article-28/article.md#L60), [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L34).

2. Variacion intra-concepto en terminos clave del vocabulario Archwise.
- Sequence Integrity / Integridad de Secuencia.
- Evidence Integrity / Integridad de Evidencia.
- Coherence Signals / Senales de Coherencia.
- Evidencia: [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md#L34), [content/enterprise-ai/article-28/article.md](content/enterprise-ai/article-28/article.md#L88), [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L192).

## Medio

1. Spanglish no funcional en registro formal.
- Mezclas no estandarizadas en docs de framework (ej. like, waste, breaks, index, etc.) en [docs/framework-page-v1-spec.md](docs/framework-page-v1-spec.md#L1976).
- Mezclas de terminos tecnicos no curadas en article-26 (ej. breaks, model-training, infrastructure, acceleramos) en [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md#L624).

2. Variacion de estilo de capitalizacion para conceptos marco.
- Framework Archwise / framework Archwise.
- Context Systems en ingles frente a formas traducidas en la misma familia semantica.

## Bajo

1. Ruido esperable en slugs y rutas.
- Formas sin acento en slugs son correctas por restriccion tecnica y no deben usarse como evidencia de error ortografico de copy.
- Ejemplos en [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts#L73).

## 4. Diccionario canonico propuesto

Politica de clasificacion:

- A = Mantener en ingles.
- B = Traducir siempre al espanol.
- C = Depende del contexto (regla explicita de uso).

| Concepto | Forma actual (dominante) | Variantes detectadas | Canon recomendado | Politica |
|---|---|---|---|---|
| Governance (capa) | Governance | gobernanza, governance | Governance | A |
| AI Governance Framework (titulo de articulo) | AI Governance Framework | Framework de Gobernanza IA | AI Governance Framework | A |
| Operating Model (capa) | AI Operating Model | Operating Model, Modelo Operativo | AI Operating Model | C |
| Organizational Memory | Organizational Memory | Memoria Organizativa | Organizational Memory | C |
| Memory Architecture | Memory Architecture | Arquitectura de Memoria | Memory Architecture | C |
| Context Systems | Context Systems | Sistemas Contextuales | Context Systems | C |
| Agentic AI | Agentic AI | IA agentica, IA agéntica | Agentic AI | A |
| Sequence Integrity | Sequence Integrity | Integridad de Secuencia | Sequence Integrity | A |
| Evidence Integrity | Evidence Integrity | Integridad de Evidencia | Evidence Integrity | A |
| Coherence Signals | Coherence Signals | Señales de Coherencia, Senales de Coherencia | Coherence Signals | A |
| Integration Health | Integration Health | salud de integracion | Integration Health | A |
| System Health | System Health | salud del sistema | System Health | A |
| Context Debt | Context Debt | deuda de contexto | Context Debt | A |
| Activation Debt | Activation Debt | deuda de activacion | Activation Debt | A |
| Interface Integrity | Interface Integrity | integridad de interfaz | Interface Integrity | A |
| Knowledge Debt | Knowledge Debt | deuda de conocimiento | Knowledge Debt | A |
| Diagnostico | Diagnostico | diagnóstico | Diagnóstico | B |
| Evaluacion | Evaluacion | evaluación | Evaluación | B |
| Integracion | Integracion | integración | Integración | B |
| Operacion | Operacion | operación | Operación | B |
| Adopcion | Adopcion | adopción | Adopción | B |
| Metricas | Metricas | métricas | Métricas | B |
| Senales | Senales | señales | Señales | B |
| Cronologia | Cronologia | cronología | Cronología | B |
| Agentica (adj.) | agentica | agéntica | agéntica | B |
| Arquitectonica | arquitectonica | arquitectónica | arquitectónica | B |

## 5. Clasificacion spanglish (A/B/C)

## A) Mantener ingles

- Conceptos de marco propios de Archwise: Sequence Integrity, Evidence Integrity, Coherence Signals, Integration Health, Context Debt, Activation Debt, Interface Integrity.
- Nombres oficiales de piezas: AI Governance Framework, AI Operating Model, Organizational Memory, Memory Architecture, Context Systems, Agentic AI.

Razon: son anclas semanticas de posicionamiento y continuidad del corpus.

## B) Traducir siempre

- Vocabulario narrativo general y terminos no-marca: diagnostico, evaluacion, integracion, operacion, adopcion, metricas, senales, cronologia, arquitectura, decision, organizacion.

Razon: mejora legibilidad y consistencia de estilo en espanol.

## C) Depende del contexto

- Formato recomendado para primera aparicion en piezas didacticas:
  - AI Operating Model (Modelo Operativo)
  - Organizational Memory (Memoria Organizativa)
  - Memory Architecture (Arquitectura de Memoria)
  - Context Systems (Sistemas Contextuales)

Regla operativa:

- Primera mencion: EN + equivalente ES entre parentesis.
- Menciones siguientes: mantener EN cuando el texto sea de marco conceptual; usar ES en copy de apoyo didactico o resumen ejecutivo.

## 6. Matriz de inconsistencias observadas

1. Ortografia de acentos
- Estado: inconsistencia alta.
- Zonas criticas: [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md), [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md), [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts).

2. Terminologia EN/ES
- Estado: inconsistencia media-alta.
- Zonas criticas: [docs/framework-content.md](docs/framework-content.md), [content/enterprise-ai/article-20/article.md](content/enterprise-ai/article-20/article.md), [content/enterprise-ai/article-28/article.md](content/enterprise-ai/article-28/article.md).

3. Spanglish no gobernado
- Estado: inconsistencia media.
- Zonas criticas: [docs/framework-page-v1-spec.md](docs/framework-page-v1-spec.md), [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md).

4. Capitalizacion y forma de etiquetas de capa
- Estado: inconsistencia media.
- Zonas: docs de framework y data source de framework.

## 7. Recomendaciones de normalizacion (sin ejecutar)

1. Congelar una politica terminologica unica (A/B/C) y publicarla como anexo editorial.
2. Normalizar ortografia de acentos en dos pasadas:
- pasada 1: framework canónico + framework.data.ts;
- pasada 2: articulos 20-29.
3. Aplicar regla de primera mencion bilingue para terminos clase C.
4. Bloquear spanglish no funcional fuera de:
- nombres oficiales,
- slugs,
- terminos marco clase A.
5. Definir lista de exclusiones tecnicas para auditoria automatica (slugs, rutas, identificadores).

## 8. Prioridad de correccion sugerida

1. P0: [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts) + docs canónicos del framework.
2. P1: [content/enterprise-ai/article-26/article.md](content/enterprise-ai/article-26/article.md) y [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md).
3. P2: Resto de articulos 20-25, 27-28 para homogeneizacion fina de terminologia.

---

Estado final de esta fase: auditoria completada, sin correcciones aplicadas al corpus.