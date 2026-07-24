# Cluster: AI Governance

> Última actualización: 2026-07-24  
> Estado: **Parcial**  
> Capa del Framework: 3

---

## Definición del territorio

AI Governance es el sistema nervioso de la organización IA: los mecanismos, estructuras y procesos que permiten coordinar, supervisar y evolucionar el uso de IA de forma alineada con objetivos, valores y riesgos aceptables.

Archwise diferencia explícitamente governance de control: governance como coordinación que habilita, no como burocracia que restringe.

Este cluster no cubre compliance regulatorio (AI Act, GDPR) ni gobierno corporativo general. Cubre el governance operativo de sistemas, equipos y agentes de IA en la empresa.

---

## Objetivo del cluster

Poseer la respuesta a: *"¿Cómo coordinamos el uso de IA en nuestra organización sin generar burocracia ni perder velocidad?"*

---

## Artículo pilar

**Article-20** — `ai-governance-framework`  
*"AI Governance Framework: cómo gobernar sistemas, equipos y agentes de IA en la empresa"*

---

## Artículos secundarios

| # | Artículo | Slug | Rol |
|---|----------|------|-----|
| Art-09 | Architecture Review efectiva en la era de la IA | `architecture-review-efectiva-ia` | Governance arquitectónico como proceso |
| Art-10 | Architecture Governance: del comité al contexto compartido | `architecture-governance-contexto-compartido` | Governance como contexto, no control |
| Art-20 | AI Governance Framework | `ai-governance-framework` | **Definición completa del framework** |

---

## Estado de cobertura

| Dimensión | Cobertura |
|-----------|-----------|
| Definición de AI Governance | ✅ Fuerte — art-20 |
| Governance vs control | ✅ Fuerte — art-20 |
| Governance arquitectónico | ✅ Fuerte — arts 09, 10 |
| Componentes del framework | ✅ Fuerte — art-20 |
| Governance para agentes autónomos | ❌ Sin cobertura |
| Governance y compliance regulatorio | ❌ Sin cobertura (fuera de scope estratégico) |
| Ownership y accountability en sistemas distribuidos | ⚠️ Parcial — art-20 lo menciona |

---

## Señales SEO

`HECHO` — GSC 2026-07-24:

| Página | Impresiones | Posición | Clics | Confianza |
|--------|-------------|----------|-------|-----------|
| `ai-governance-framework` | 11 | 7.3 | 0 | Baja-media |
| `architecture-review-efectiva-ia` | 18 | 8.1 | 0 | Media |
| `architecture-governance-contexto-compartido` | 5 | 9.0 | 0 | Baja |

`HECHO` — Consultas GSC: No se detectaron consultas específicas relacionadas con este cluster con impresiones registradas.

`INFERENCIA` — El cluster está técnicamente bien posicionado (posiciones 7-9) pero con bajo volumen de búsqueda. "AI Governance" en español tiene menos demanda que en inglés. El artículo pilar puede estar captando búsquedas mixtas español/inglés.

`HIPÓTESIS` — Art-09 (`architecture-review-efectiva-ia`) puede estar captando búsquedas relacionadas con "architecture review" más que con "governance" propiamente. Sus 18 impresiones pueden venir de un término diferente al que esperamos.

---

## Enlazado interno

`INFERENCIA` — Art-20 y art-21 (AI Operating Model) son la Capa 3 y Capa 4 del framework respectivamente. Deberían estar bien enlazados entre sí conceptualmente. La relación "governance establece las reglas, operating model define cómo se opera" es el eje de su interdependencia.

**Oportunidades de enlazado**:
- Art-25 (Agentic AI) → art-20: los agentes necesitan governance previo para operar en producción.
- Art-31 → art-20: los equipos virtuales de IA necesitan governance gates.

---

## Backlog del cluster

| ID | Acción | Tipo | Evidencia | Prioridad |
|----|--------|------|-----------|-----------|
| GOV-01 | Monitorizar impresiones de art-20 en próxima GSC | Seguimiento | 11 impresiones — evidencia insuficiente | Media |
| GOV-02 | Verificar enlazado entre art-20 y art-21 (son capas consecutivas) | Enlazado | INFERENCIA | Media |
| GOV-03 | Propuesta futura: AI Governance para sistemas agénticos | Contenido | Hueco editorial claro — alta relevancia estratégica | Media |
