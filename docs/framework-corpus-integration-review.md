# Framework Corpus Integration Review

Fecha: 2026-06-08  
Ámbito: análisis editorial/estructural (sin cambios)  
Fuentes revisadas:
- [sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts](sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts)
- [docs/framework-architecture.md](docs/framework-architecture.md)
- [docs/framework-content.md](docs/framework-content.md)
- [docs/framework-v2-simplification.md](docs/framework-v2-simplification.md)
- [docs/framework-corpus-alignment-audit.md](docs/framework-corpus-alignment-audit.md)
- [docs/framework-corpus-audit-validation.md](docs/framework-corpus-audit-validation.md)
- [content/enterprise-ai/article-01/article.md](content/enterprise-ai/article-01/article.md) ... [content/enterprise-ai/article-29/article.md](content/enterprise-ai/article-29/article.md)

---

## 1) Lista definitiva de artículos asignados por capa

### Layer 1 — Diagnóstico AI-Ready
- article-11: por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia
- article-12: las-7-caracteristicas-arquitectura-ai-ready
- article-13: ai-ready-systems-vs-legacy-systems

Total: 3

### Layer 2 — Contexto explícito y Knowledge Debt
- article-01: architecture-md-vale-mas-que-prompts
- article-03: documentacion-necesita-llm
- article-06: context-engineering-legacy-ia-falla
- article-14: por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia
- article-15: context-engineering-vs-prompt-engineering

Total: 5

### Layer 3 — Governance
- article-09: architecture-review-efectiva-ia
- article-10: architecture-governance-contexto-compartido
- article-20: ai-governance-framework

Total: 3

### Layer 4 — AI Operating Model
- article-16: ai-augmented-development-teams
- article-17: ai-native-organizations
- article-21: ai-operating-model-enterprise

Total: 3

### Layer 5 — Organizational Memory
- article-22: organizational-memory-activo-ai-native
- article-23: memory-architecture-contexto-reutilizable-enterprise

Total: 2

### Layer 6 — Context Systems y capacidad agéntica
- article-24: context-systems-entregar-contexto-correcto-enterprise
- article-25: agentic-ai-enterprise-governance-memoria-arquitectura
- article-26: framework-archwise-integracion-capacidades-escalar-ia
- article-27: arquitectura-adopcion-framework-archwise-orden-activacion
- article-28: measurement-system-integracion-madurez-operativa
- article-29: integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas

Total: 6

Resumen asignados: 22/29

---

## 2) Lista definitiva de artículos no asignados (huérfanos)

- article-02: deuda-tecnica-ia-revela
- article-04: arquitectura-vuelve-ser-estrategica
- article-05: technical-debt-vs-knowledge-debt-ia
- article-07: framework-context-engineering-enterprise
- article-08: plantillas-ejemplos-architecture-md-enterprise
- article-18: por-que-fracasan-iniciativas-ia
- article-19: enterprise-ai-transformation-roadmap

Total huérfanos: 7/29 (24.14%)

---

## 3) Huérfanos: capa candidata, justificación, confianza

### article-02 — deuda-tecnica-ia-revela
- Capa candidata: Layer 2
- Justificación: `cluster: Technical Debt`, `series: Context Engineering Essentials`; temática de deuda de conocimiento/contexto.
- Confianza: Alta

### article-04 — arquitectura-vuelve-ser-estrategica
- Capa candidata: Layer 3
- Justificación: foco en criterio arquitectónico/decisión; puente natural hacia governance; ya aparece en ruta Consultor→Corregir.
- Confianza: Media

### article-05 — technical-debt-vs-knowledge-debt-ia
- Capa candidata: Layer 2
- Justificación: `cluster: Context Engineering`, `category: Technical Debt`; núcleo conceptual de Knowledge Debt.
- Confianza: Alta

### article-07 — framework-context-engineering-enterprise
- Capa candidata: Layer 2
- Justificación: `cluster: Context Engineering`; artículo de implementación del dominio contextual.
- Confianza: Alta

### article-08 — plantillas-ejemplos-architecture-md-enterprise
- Capa candidata: Layer 2
- Justificación: `cluster: Context Engineering`; artefactos prácticos de documentación contextual (architecture.md).
- Confianza: Alta

### article-18 — por-que-fracasan-iniciativas-ia
- Capa candidata: Layer 1
- Justificación: diagnóstico de fallos sistémicos previos a escalado; en `framework-content.md` se usa como soporte del ciclo diagnóstico.
- Confianza: Media

### article-19 — enterprise-ai-transformation-roadmap
- Capa candidata: Layer 4
- Justificación: roadmap de transformación organizativa y modelo operativo; mejor encaje con operating model que con capa diagnóstica.
- Confianza: Media

---

## 4) Artículos asignados potencialmente mal ubicados

### Hallazgos
- No se detectan artículos claramente mal ubicados de forma crítica.
- Se detecta zona de frontera semántica (no error):
  - article-09 y article-10 están en Layer 3 por `category: governance`, pero conservan `cluster: Context Engineering`.

### Conclusión de ubicación
- Estado: mayormente correcto.
- Ajustes recomendables en el futuro: solo afinado editorial de frontera Layer 2 ↔ Layer 3, no reubicación obligatoria.

---

## 5) Capas infrarepresentadas

Criterio cuantitativo base con 29 artículos y 6 capas:
- promedio teórico = 4.83 artículos/capa

### Infrarepresentación observada
- Layer 5: 2 artículos (muy por debajo del promedio)
- Layer 1: 3 artículos (por debajo)
- Layer 3: 3 artículos (por debajo)
- Layer 4: 3 artículos (por debajo)

### Infrarepresentación semántica específica
- Layer 2 hoy tiene 5 asignados, pero por densidad temática real debería absorber varios huérfanos (02, 05, 07, 08).

---

## 6) Capas sobrecargadas

- Layer 6: 6 artículos (máxima carga actual)

Evaluación cualitativa:
- Sobrecarga moderada, no crítica.
- El conjunto de Layer 6 contiene dos subgrupos internos coherentes:
  - Operacional: 24, 25
  - Meta-framework / madurez: 26, 27, 28, 29

No hay evidencia objetiva para crear una capa nueva; sí para modelar subcapas internas si se desea mayor claridad.

---

## 7) Coherencia del Framework con 29, 50 y 100 artículos

## 7.1 Coherencia con 29 actuales
- Estructura de 6 capas: coherente y válida.
- Gap principal: 7 huérfanos (24.14%), no problema de arquitectura base sino de integración editorial incompleta.

## 7.2 Coherencia proyectada hasta article-50
- Según [docs/framework-v2-simplification.md](docs/framework-v2-simplification.md): 6 capas se mantienen y la simplificación exige taxonomía primaria única por capa.
- Con 50 artículos, el modelo de 6 capas sigue siendo válido si se refuerza disciplina de asignación primaria/secundaria.

## 7.3 Coherencia proyectada hasta article-100
- La especificación v2 indica explícitamente: no crear nuevas capas hasta superar article-100.
- Por tanto, la arquitectura de 6 capas es coherente con el roadmap a 100, siempre que se gestione la densidad interna de Layer 6 y el balance de Layer 2/Layer 5.

Conclusión de roadmap:
- Coherente para 29, 50 y 100.
- Riesgo principal: deriva editorial por huérfanos, no insuficiencia de arquitectura.

---

## 8) Recomendación final (A/B/C)

### Opción A — Mantener 6 capas
- Viable, pero deja ambiguo el crecimiento interno de Layer 6 y la frontera Layer 2/3.

### Opción B — Mantener 6 capas + subcapas internas
- Viable y más robusta para 50/100 sin romper arquitectura.
- Compatible con [docs/framework-v2-simplification.md](docs/framework-v2-simplification.md).
- Permite absorber densidad semántica sin introducir Layer 7.

### Opción C — Modificar arquitectura
- No hay evidencia objetiva suficiente para justificarlo ahora.
- Contradice la guía de estabilidad hasta article-100.

## Recomendación
**Opción B: Mantener 6 capas + subcapas internas.**

Razones:
- Conserva coherencia del modelo causal actual.
- Evita cambios estructurales prematuros.
- Resuelve mejor la concentración temática de Layer 6.
- Es consistente con la simplificación v2 y roadmap a article-100.

---

## 9) Resumen ejecutivo

- Asignados: 22
- Huérfanos: 7
- Arquitectura de 6 capas: válida
- Capa más débil: Layer 5 (2)
- Capa más cargada: Layer 6 (6)
- Desajuste principal: integración editorial del corpus, no diseño estructural
- Recomendación final: **B (6 capas + subcapas internas)**
