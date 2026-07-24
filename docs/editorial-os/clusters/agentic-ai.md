# Cluster: Agentic AI

> Última actualización: 2026-07-24  
> Estado: **Débil**  
> Capa del Framework: 6 (capacidad agéntica enterprise)

---

## Definición del territorio

Agentic AI enterprise cubre los agentes de IA en entornos de producción real: por qué fallan, qué infraestructura organizativa necesitan para funcionar de forma sostenible, y cómo diseñar sistemas de agentes gobernados, trazables y auditables.

Archwise diferencia Agentic AI de automatización simple: los agentes toman decisiones, coordinan con otros sistemas y operan con un grado de autonomía que requiere infraestructura organizativa previa (governance, memoria, context systems).

Este cluster es **estratégicamente relevante** porque es el territorio de mayor interés ejecutivo actual (boards hablan de agentes), pero está **infradesarrollado** en el corpus.

---

## Objetivo del cluster

Poseer la respuesta a: *"¿Por qué nuestros agentes de IA funcionan en la demo pero fallan en producción?"* y ofrecer la infraestructura conceptual para resolverlo.

---

## Artículo pilar

**Article-25** — `agentic-ai-enterprise-governance-memoria-arquitectura`  
*"Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen"*

---

## Artículos secundarios

| # | Artículo | Slug | Rol |
|---|----------|------|-----|
| Art-25 | Agentic AI en la empresa | `agentic-ai-enterprise-governance-memoria-arquitectura` | **Diagnóstico e infraestructura** |
| Art-31 | Del Prompt al Sistema | `arquitectura-equipos-virtuales-ia-enterprise` | Arquitectura de equipos virtuales de agentes |

---

## Estado de cobertura

| Dimensión | Cobertura |
|-----------|-----------|
| Por qué fallan los agentes | ✅ Fuerte — art-25 |
| Infraestructura organizativa necesaria | ✅ Fuerte — art-25 |
| Equipos virtuales de agentes | ✅ Fuerte — art-31 |
| Casos reales de implementación enterprise | ❌ Sin cobertura |
| Orquestación multi-agente | ❌ Sin cobertura |
| Agentes y Knowledge Debt | ❌ Sin cobertura |
| Governance específico para agentes | ❌ Sin cobertura (art-20 lo roza) |

---

## Señales SEO

`HECHO` — GSC 2026-07-24:

| Página | Impresiones | Posición | Clics | Confianza |
|--------|-------------|----------|-------|-----------|
| `agentic-ai-enterprise-governance-memoria...` | 4 | **5.5** | 0 | Muy baja |
| `arquitectura-equipos-virtuales-ia-enterprise` | 26 | 8.8 | **1** | Media |

`HECHO` — Consultas GSC: No hay consultas específicas de Agentic AI con impresiones registradas.

`INFERENCIA` — Art-25 tiene una posición excelente (5.5) pero solo 4 impresiones. El volumen de búsqueda en español para términos de Agentic AI enterprise es muy bajo todavía. Art-31 tiene más tráfico (26 impresiones) pero el término que lo activa puede ser diferente a "agentic AI".

`HIPÓTESIS` — El territorio de Agentic AI en español para audiencias enterprise tiene aún poca demanda de búsqueda, pero la demanda ejecutiva (boardrooms) es alta. El desfase entre demanda de búsqueda y demanda de contenido puede resolverse con tiempo.

---

## Enlazado interno

`INFERENCIA` — Art-25 y art-31 necesitan enlazado entrante desde arts 20, 21, 22 y 24, que son las capas previas que el Framework Archwise dice que son necesarias antes de implementar agentes. Esta secuencia causal (capas 1-5 → Capa 6) debería reflejarse en el enlazado.

---

## Backlog del cluster

| ID | Acción | Tipo | Evidencia | Prioridad |
|----|--------|------|-----------|-----------|
| AG-01 | Monitorizar impresiones de art-25 en próxima GSC | Seguimiento | 4 impresiones — evidencia muy baja | Media |
| AG-02 | Añadir enlace desde art-20 → art-25 (governance previo a agentes) | Enlazado | INFERENCIA — causal y lógico | Media |
| AG-03 | Añadir enlace desde art-24 (Context Systems) → art-25 | Enlazado | INFERENCIA | Media |
| AG-04 | Propuesta futura: orquestación multi-agente en enterprise | Contenido | Hueco editorial — alta relevancia futura | Media |
| AG-05 | Propuesta futura: AI Governance para sistemas agénticos | Contenido | Hueco editorial — alta relevancia estratégica | Media |
