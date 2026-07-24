# Cluster: Knowledge Debt

> Última actualización: 2026-07-24  
> Estado: **Parcial**  
> Capa del Framework: 2 (Contexto explícito y Knowledge Debt)

---

## Definición del territorio

Knowledge Debt es la deuda de conocimiento: el conocimiento crítico de una organización que nunca fue documentado, sistematizado ni transferido. No es deuda técnica (código malo o desfasado): es la deuda de lo que se sabe pero no se ha capturado.

La IA hace visible esta deuda porque la necesita para funcionar. Una organización con alta Knowledge Debt no puede escalar IA porque la IA no tiene el contexto que necesita para operar con precisión en ese dominio.

---

## Objetivo del cluster

Poseer la respuesta a: *"¿Por qué nuestro conocimiento organizativo no sobrevive a la rotación de personas o al escalado de IA?"*

Convertir "Knowledge Debt" en un término que la audiencia enterprise en español asocie directamente con Archwise.

---

## Artículo pilar

**Article-05** — `technical-debt-vs-knowledge-debt-ia`  
*"Technical Debt vs Knowledge Debt: cómo la IA cambia la gestión de deuda en organizaciones"*

Justificación: Es el artículo que introduce y compara los dos conceptos. Tiene la señal SEO más notable del cluster (posición 1 para "knowledge debt" en una impresión). Es la pieza que puede consolidar autoridad en este término.

---

## Artículos secundarios

| # | Artículo | Slug | Rol |
|---|----------|------|-----|
| Art-02 | La deuda técnica que la IA está empezando a revelar | `deuda-tecnica-ia-revela` | Diagnóstico inicial (predecesor de art-05) |
| Art-06 | Context Engineering para proyectos legacy | `context-engineering-legacy-ia-falla` | Knowledge Debt en entornos legacy |
| Art-22 | Organizational Memory | `organizational-memory-activo-ai-native` | Consecuencias a escala de la Knowledge Debt no resuelta |

---

## Estado de cobertura

| Dimensión | Cobertura |
|-----------|-----------|
| Diagnóstico inicial (la deuda existe) | ✅ Fuerte — art-02, art-05 |
| Comparativa Technical Debt vs Knowledge Debt | ✅ Fuerte — art-05 |
| Knowledge Debt en legacy | ✅ Presente — art-06 |
| Consecuencias organizativas | ✅ Presente — art-22 |
| Cómo auditar y medir Knowledge Debt | ❌ Sin cobertura |
| Knowledge Debt en contextos agénticos | ❌ Sin cobertura |

---

## Señales SEO

`HECHO` — GSC 2026-07-24:

| Página | Impresiones | Posición | Clics | Confianza |
|--------|-------------|----------|-------|-----------|
| `technical-debt-vs-knowledge-debt-ia` | 22 | 8.6 | 0 | Media |
| `deuda-tecnica-ia-revela` | 0 | — | 0 | **Sin datos** |

`HECHO` — Consultas GSC:

| Consulta | Impresiones | Posición | Valoración |
|----------|-------------|----------|------------|
| knowledge debt | 1 | **1** | **Evidencia de posición, pero 1 sola impresión — peso muy bajo** |
| technical debts | 1 | 11 | Señal temprana — peso muy bajo |

`INFERENCIA` — La posición 1 para "knowledge debt" es una señal positiva de que Google considera a Archwise la mejor respuesta para ese término. Sin embargo, 1 sola impresión en 55 días indica que el volumen de búsqueda de ese término en español es extremadamente bajo.

`IMPORTANTE` — No interpretar "posición 1" como un logro de alto impacto con solo 1 impresión. Con ese nivel de evidencia, la posición puede ser una fluctuación puntual del algoritmo. Se necesitan al menos 20-30 impresiones para considerar la posición como estable.

`HIPÓTESIS` — Art-02 no aparece en GSC posiblemente porque: (a) sus términos tienen aún menos volumen que art-05, (b) no está bien indexado, o (c) Google lo considera duplicado o inferior a art-05 para las mismas búsquedas.

---

## Enlazado interno

`HECHO` — Art-22 referencia art-05 explícitamente en su cuerpo.

`INFERENCIA` — El enlazado desde art-05 hacia art-22 (consecuencias → solución) probablemente existe pero no está documentado. Verificar.

**Oportunidades de enlazado**:
- Art-25 (Agentic AI) → art-05: cuando los agentes operan sobre una organización con alta Knowledge Debt, fallan. La conexión conceptual es directa.
- Art-07 (Framework Context Engineering) → art-05: el framework parte de resolver Knowledge Debt.

---

## Backlog del cluster

| ID | Acción | Tipo | Evidencia | Prioridad |
|----|--------|------|-----------|-----------|
| KD-01 | Verificar indexación de art-02 en GSC URL Inspection | Técnica | HECHO — sin impresiones en GSC | Alta |
| KD-02 | Monitorizar posición para "knowledge debt" en próxima exportación GSC | Seguimiento | 1 impresión — evidencia insuficiente para actuar | Alta |
| KD-03 | Propuesta futura: artículo de auditoría y cuantificación de Knowledge Debt | Contenido | Hueco editorial claro — sin señal GSC todavía | Media |
| KD-04 | Añadir enlace desde art-25 → art-05 (agentes y Knowledge Debt) | Enlazado | INFERENCIA — sin dato directo | Baja |
