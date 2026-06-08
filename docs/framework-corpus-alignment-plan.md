# Framework-Corpus Alignment Plan

Fecha: 2026-06-08
Alcance: Alineamiento editorial entre corpus Archwise (01-29) y Framework
Base de análisis:
- docs/framework-corpus-alignment-audit.md
- docs/framework-corpus-audit-validation.md

Restricciones aplicadas:
- Sin cambios de UX
- Sin cambios Angular
- Sin cambios de arquitectura técnica
- Sin propuesta de Layer 7
- Solo alineamiento editorial

---

## 1) Estado Actual Consolidado

- Total artículos corpus: 29
- Artículos referenciados en capas del Framework: 22
- Artículos huérfanos (fuera de capas): 7
- Slug mismatches activos en framework.data.ts: 3
- Integridad de capas: 6 capas válidas (confirmado)

Framework Coverage (definición para este plan):
- Cobertura = artículos no huérfanos / total corpus
- Antes = 22/29 = 75.86% (≈ 76%)

Nota: la cobertura mide asignación editorial a capa. La resolubilidad de enlace (slug match) se trata aparte.

---

## 2) Los 7 Artículos Huérfanos

### Criterio de asignación
Se usa evidencia de `cluster`, `category`, `series`, título y relación temática con capas existentes.

| Artículo | Capa candidata | Justificación | Confianza |
|---|---|---|---|
| article-02 (deuda-tecnica-ia-revela) | Layer 2 | `cluster: Technical Debt`, `series: Context Engineering Essentials`; dominio de Knowledge/Context Debt | Alta |
| article-04 (arquitectura-vuelve-ser-estrategica) | Layer 3 | Orientación de criterio arquitectónico y decisión estructural; hoy aparece en Navigator (consultor/corregir) pero no en capas | Media |
| article-05 (technical-debt-vs-knowledge-debt-ia) | Layer 2 | `cluster: Context Engineering`, `category: Technical Debt`; vínculo directo con deuda de conocimiento | Alta |
| article-07 (framework-context-engineering-enterprise) | Layer 2 | `cluster: Context Engineering`; contenido operativo del dominio Layer 2 | Alta |
| article-08 (plantillas-ejemplos-architecture-md-enterprise) | Layer 2 | `cluster: Context Engineering`; activo práctico de documentación contextual | Alta |
| article-18 (por-que-fracasan-iniciativas-ia) | Layer 1 | Diagnóstico de fallos sistémicos previos a escalado; hoy solo aparece en Navigator | Media |
| article-19 (enterprise-ai-transformation-roadmap) | Layer 4 | Roadmap de transformación organizativa hacia AI-native; más alineado a operating model que a capa diagnóstica | Media |

Resultado esperado tras integración editorial de huérfanos:
- 29/29 artículos mapeados a capa
- Cobertura editorial completa

---

## 3) Slug Mismatches

### Caso 1
- Origen:
  - Esperado en framework.data.ts: `architecture-md-vale-más-que-prompts`
  - Real en article-01: `architecture-md-vale-mas-que-prompts`
- Impacto:
  - No resuelve en Layer 2
  - Reportado por logs como slug no resuelto
- Corrección recomendada:
  - Unificar referencia de framework al slug canónico real del artículo (ASCII sin tildes)

### Caso 2
- Origen:
  - Esperado en framework.data.ts: `documentación-necesita-llm`
  - Real en article-03: `documentacion-necesita-llm`
- Impacto:
  - No resuelve en Layer 2
  - Pérdida de cobertura visible en la capa
- Corrección recomendada:
  - Alinear referencia del Framework al slug canónico real del artículo

### Caso 3
- Origen:
  - Esperado en framework.data.ts: `las-7-características-arquitectura-ai-ready`
  - Real en article-12: `las-7-caracteristicas-arquitectura-ai-ready`
- Impacto:
  - No resuelve en Layer 1
  - Diagnóstico AI-Ready incompleto en interfaz
- Corrección recomendada:
  - Alinear referencia del Framework al slug canónico real del artículo

Nota operativa editorial:
- Los slugs deben mantenerse consistentes y canónicos en una sola norma.
- En el corpus actual, la norma dominante real es ASCII sin tildes.

---

## 4) Article-11 — Inventario Completo de Apariciones

Slug: `por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia`

### 4.1 En el propio artículo (content/enterprise-ai/article-11/article.md)
- title (frontmatter): presente con errores ortográficos
- description (frontmatter): presente con errores ortográficos
- article body:
  - encabezados con tildes ausentes (ej. "Introduccion", "adopcion")
  - múltiples ocurrencias de lenguaje sin acentuación en cuerpo

### 4.2 En Framework (sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts)
- layer-1.articleSlugs: referencia del slug
- cto/diagnosticar pathMapping: referencia del slug

### 4.3 En Navigator (derivado de pathMappings)
- Ruta recomendada CTO → Diagnosticar: item #2
- Visible en producción con título mostrado desde contenido del artículo

### 4.4 En salida publicada y artefactos
- assets content index (articles.json): presente
- dist prerender route: presente
- metadatos OG/Twitter/canonical del artículo en dist: presente

Conclusión de inventario:
- El problema editorial de article-11 no está aislado: se propaga a framework/navigator/metadata por reutilización del contenido fuente.

---

## 5) Framework Coverage

### Métrica principal: cobertura editorial por capa
- Antes: 22/29 = 75.86% (≈ 76%)
- Después (integrando 7 huérfanos): 29/29 = 100%

### Métrica complementaria: resolubilidad de referencias en capa
- Antes: 19/22 referencias resolubles (3 mismatches)
- Después (tras alinear slugs): 22/22 resolubles

Lectura combinada:
- Cobertura editorial: 76% → 100%
- Resolubilidad técnica de capa (sobre asignados actuales): 86.36% → 100%

---

## 6) Impacto sobre Arquitectura Editorial

### ¿Cambian las 6 capas?
- No.
- Evidencia consolidada: las 6 capas siguen siendo válidas y suficientes para estructurar el corpus.

### ¿Hay que mover artículos existentes?
- No es requisito estructural para cerrar brecha principal.
- El problema crítico es falta de asignación de huérfanos + mismatches de slug.

### ¿Hay que crear nuevas categorías?
- No obligatorio para ejecutar el plan de alineamiento definitivo.
- La estructura actual permite absorber huérfanos sin introducir nuevas capas/categorías.

---

## 7) Plan de Ejecución (sin implementación en este documento)

### Fase 1 — Normalización de Referencias y Slugs
Objetivo:
- Eliminar mismatches entre Framework y corpus en los 3 casos detectados.

Alcance:
- Referencias de `framework.data.ts` asociadas a slugs 01, 03, 12.

Esfuerzo estimado:
- Bajo (0.5 día)

Riesgo:
- Bajo

Salida esperada:
- 0 slugs no resueltos en Layer 1/Layer 2

---

### Fase 2 — Integración de 7 Huérfanos en Capas
Objetivo:
- Mapear 100% del corpus (29/29) dentro del Framework.

Alcance:
- Incorporar artículos 02, 04, 05, 07, 08, 18, 19 a sus capas candidatas definidas.

Esfuerzo estimado:
- Medio (1 a 1.5 días)

Riesgo:
- Medio (impacto en balance de capas y señal editorial)

Salida esperada:
- Cobertura editorial 100%
- Sin artículos huérfanos

---

### Fase 3 — Saneamiento Editorial de Article-11 y Verificación de Propagación
Objetivo:
- Corregir consistencia lingüística en title/description/body de article-11 y verificar propagación en Framework/Navigator/metadatos.

Alcance:
- Frontmatter + cuerpo article-11
- Verificación de apariciones derivadas

Esfuerzo estimado:
- Medio (1 día)

Riesgo:
- Medio-bajo (requiere validar tono y consistencia editorial en todo el artículo)

Salida esperada:
- Article-11 sin deuda lingüística
- Texto visible consistente en framework, navigator y metadata

---

## 8) Resultado Esperado (KPIs)

Framework Coverage:
- Antes: 76%
- Después: 100%

Resolubilidad de referencias de capa (sobre 22 actuales):
- Antes: 86.36%
- Después: 100%

Estado editorial esperado tras ejecutar plan:
- 0 huérfanos
- 0 mismatches de slug
- 6 capas intactas
- Alineamiento corpus-framework completo

---

## 9) Cierre

Este plan define un alineamiento definitivo sin alterar UX, Angular ni arquitectura técnica. El foco es estrictamente editorial:
1) consistencia de slugs,
2) cobertura total del corpus en capas,
3) saneamiento de contenido fuente que hoy se propaga a framework/navigator.
