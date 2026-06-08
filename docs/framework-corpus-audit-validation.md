# Framework-Corpus Alignment Audit — Validation Report

**Fecha:** 2026-06-08  
**Auditoría Fuente:** docs/framework-corpus-alignment-audit.md  
**Método:** Verificación contra evidencia directa en archivos fuente y framework.data.ts  
**Resultado Global:** Auditoría anterior es mayormente correcta con dos matices no detectados

---

## VALIDACIÓN POR SECCIÓN

---

## 1. ARTÍCULOS HUÉRFANOS

### Claim: "7 artículos no asignados a ninguna capa"

**ESTADO: ✅ CONFIRMADO**

Evidencia directa (framework.data.ts): los siguientes slugs no aparecen en ningún `articleSlugs` de ninguna capa:

| Art | Slug | Cluster/Category | Capa Candidata | Evidencia |
|---|---|---|---|---|
| 02 | deuda-tecnica-ia-revela | `cluster: Technical Debt`, `series: Context Engineering Essentials` | **Layer 2** | Series idéntica a art-01, 03, 06 ya en Layer 2 |
| 04 | arquitectura-vuelve-ser-estrategica | `cluster: Architecture Strategy`, `series: Context Engineering Essentials` | **Layer 3 o meta** | En Navigator (consultor/corregir), no en capas. Único con cluster "Architecture Strategy". |
| 05 | technical-debt-vs-knowledge-debt-ia | `cluster: Context Engineering`, `category: Technical Debt` | **Layer 2** | Cluster Context Engineering = Layer 2. Explícitamente sobre Knowledge Debt. |
| 07 | framework-context-engineering-enterprise | `cluster: Context Engineering` | **Layer 2** | Implementación directa de Context Engineering. |
| 08 | plantillas-ejemplos-architecture-md-enterprise | `cluster: Context Engineering` | **Layer 2** | Recurso práctico del mismo cluster que art-01. |
| 18 | por-que-fracasan-iniciativas-ia | sin `cluster` ni `category` explícita | **Layer 1 o meta** | Sin cluster. En Navigator (transformation-leader/medir). Temáticamente: diagnóstico de fracasos = Layer 1. |
| 19 | enterprise-ai-transformation-roadmap | sin `cluster` ni `category` explícita | **Meta (ninguna capa específica)** | Sin cluster. No aparece en Navigator. Roadmap transversal a todas las capas. |

**Observación adicional no detectada en auditoría anterior:** art-09 y art-10 tienen `category: governance` (acertado → Layer 3) pero también `cluster: Context Engineering` (misma categoría que Layer 2). La asignación a Layer 3 es correcta porque su `category` field lo posiciona en Governance. Sin embargo, temáticamente tienen doble naturaleza. Este matiz no fue señalado en el audit anterior.

---

## 2. SLUG MISMATCHES

### Claim: "3 artículos con slug mismatch por tildes"

**ESTADO: ✅ CONFIRMADO**

Evidencia directa comparando `framework.data.ts` vs slugs reales en `article.md`:

| Art | Slug en framework.data.ts | Slug real en article.md | Coinciden |
|---|---|---|---|
| 01 | `architecture-md-vale-**más**-que-prompts` | `architecture-md-vale-**mas**-que-prompts` | ❌ |
| 03 | `**documentación**-necesita-llm` | `**documentacion**-necesita-llm` | ❌ |
| 12 | `las-7-**características**-arquitectura-ai-ready` | `las-7-**caracteristicas**-arquitectura-ai-ready` | ❌ |

**Impacto en producción:** CONFIRMADO en logs de build:
```
[framework] Slugs no resueltos en capa layer-1 [ 'las-7-características-arquitectura-ai-ready' ]
[framework] Slugs no resueltos en capa layer-2 [ 'architecture-md-vale-más-que-prompts', 'documentación-necesita-llm' ]
```

**Visible en producción:** Los 3 artículos NO aparecen como links en las capas Layer 1 y Layer 2. Son huecos silenciosos — la capa se muestra pero sin esos artículos.

**Claim del audit:** "P1-002 - Artículos no resuelven en framework" → ✅ **CONFIRMADO Y ACTIVO EN PRODUCCIÓN**

---

## 3. LAYER COVERAGE

### Claim: Distribución de artículos por capa

**ESTADO: ✅ CONFIRMADO (con corrección aritmética)**

| Capa | Claim (audit) | Real | Estado |
|---|---|---|---|
| Layer 1 | 3 | 3 (art-11, 12*, 13) | ✅ Correcto |
| Layer 2 | 5 | 5 (art-01*, 03*, 06, 14, 15) | ✅ Correcto |
| Layer 3 | 3 | 3 (art-09, 10, 20) | ✅ Correcto |
| Layer 4 | 3 | 3 (art-16, 17, 21) | ✅ Correcto |
| Layer 5 | 2 | 2 (art-22, 23) | ✅ Correcto |
| Layer 6 | 6 | 6 (art-24, 25, 26, 27, 28, 29) | ✅ Correcto |
| **Huérfanos** | 7 | 7 | ✅ Correcto |
| **Total** | 29 | 22 asignados + 7 huérfanos | ✅ |

*Artículo con slug mismatch — existe pero no resuelve en el framework.

**Claim "Layer 2 débil" (5 artículos, debería ser 8-10):**  
**ESTADO: ✅ CONFIRMADO CON EVIDENCIA**

Evidencia: 5 artículos adicionales del corpus pertenecen temáticamente a Layer 2 (art-02, 05, 07, 08 por cluster Context Engineering/Technical Debt + art-01, 03 por slug mismatch que impide resolución). Layer 2 cubre Context Engineering y Knowledge Debt, y el corpus tiene 9 artículos sobre ese dominio, pero solo 3 resuelven actualmente.

**Claim "Layer 6 sobrecargado":**  
**ESTADO: ⚠️ PARCIALMENTE CONFIRMADO**

6 artículos es el mayor número por capa, confirmado. Pero el claim de "conceptos dispares" requiere matiz:

Subclusters identificados dentro de Layer 6:
- **Grupo Operacional (24, 25):** Context Systems y Agentic AI — infraestructura de operación
- **Grupo Meta-Framework (26, 27, 28, 29):** Integración, Adopción, Medición, Integridad — artículos sobre el propio Archwise

Conclusión: Layer 6 agrupa dos subcategorías distintas con coherencia interna. "Sobrecargado" es válido cuantitativamente (6 artículos). La afirmación de que los conceptos son "dispares" es solo **parcialmente correcta** — son distintos pero relacionados. No hay evidencia objetiva en frontmatter de artículos que soporte una Layer 7 explícita.

**Claim "Layer 5 muy pequeño":**  
**ESTADO: ✅ CONFIRMADO**

Solo 2 artículos (art-22, 23). Ningún huérfano tiene cluster de Organizational Memory. Es la capa con menor cobertura en términos absolutos.

---

## 4. ARTÍCULO-11: TÍTULO CON ERRORES EN PRODUCCIÓN

### Claim: "Art-11 título visible con errores ('mayoria', 'estan', 'que')"

**ESTADO: ✅ CONFIRMADO Y EXTENDIDO**

Evidencia directa desde el frontmatter de article-11/article.md:

```
title: Por que la mayoria de los sistemas no estan preparados para IA
slug: por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia
description: Sistemas legacy, deuda de conocimiento, arquitectura y governance 
             explican por que muchas organizaciones no estan preparadas para 
             trabajar con IA.
```

Errores en `title`:
- "Por que" → "Por qué" (acento interrogativo)
- "mayoria" → "mayoría" (tilde)
- "estan" → "están" (tilde)

Errores en `description` (no auditados en reporte anterior):
- "por que" → "por qué" (×2)
- "estan" → "están"

**Extensión del hallazgo:** El primer encabezado del cuerpo del artículo (`# Introduccion`) también carece de tilde. El body del artículo tiene numerosas ausencias de tildes en todo el texto. El audit anterior solo reportó el `title` visible; la `description` (usada en meta tags SEO) también está afectada.

**Visible en producción:** ✅ SÍ — confirmado en snapshot anterior: "Por que la mayoria de los sistemas no estan preparados para IA" aparece en:
1. Layer 1 → article link text
2. Navigator → Reading path item #2

---

## 5. NAVIGATOR — REPETICIONES

### Claim: "Art-29, 26, 28, 20 aparecen en 4/5 rutas"

**ESTADO: ⚠️ PARCIALMENTE CONFIRMADO — CON CORRECCIÓN**

Frecuencias reales calculadas (conteo directo en pathMappings de framework.data.ts):

| Slug | Rutas donde aparece | Claim anterior |
|---|---|---|
| framework-archwise-integracion-capacidades-escalar-ia (art-26) | **4/5** | ✅ |
| integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas (art-29) | **4/5** | ✅ |
| measurement-system-integracion-madurez-operativa (art-28) | **3/5** | Claim decía 4/5 → ❌ INCORRECTO |
| ai-governance-framework (art-20) | **3/5** | Claim decía 4/5 → ❌ INCORRECTO |
| arquitectura-adopcion-framework-archwise-orden-activacion (art-27) | **3/5** | No mencionado → OMITIDO |

**Corrección:** El audit anterior afirmó que art-28 y art-20 aparecen en 4/5 rutas. La cuenta real es 3/5 para ambos. Los más repetidos son art-26 y art-29 (ambos 4/5).

**¿Las repeticiones son problemáticas?**  
Contextualmente: art-26 es el artículo de integración del framework — tiene sentido que aparezca en casi todas las rutas como referencia meta. Art-29 es sobre madurez/integridad de secuencia — también transversal. Las repeticiones son **estructuralmente justificables** para artículos que actúan como síntesis del framework. Sin embargo, la concentración en Layer 6 (todos los artículos repetidos son de Layer 6) significa que los perfiles que necesitan Layers 1-5 quedan sub-representados en las rutas del Navigator.

---

## 6. INTEGRIDAD DE LAS 6 CAPAS

### Claim: "Las 6 capas siguen siendo válidas"

**ESTADO: ✅ CONFIRMADO**

Las 6 capas tienen soporte articulado en el corpus. Cada una cubre un dominio conceptual distinguible:

| Capa | Coherencia Conceptual | Soporte en Corpus |
|---|---|---|
| L1: Diagnóstico AI-Ready | ✅ Coherente | ✅ (art-11, 12, 13 temáticamente alineados) |
| L2: Contexto y Knowledge Debt | ✅ Coherente | ⚠️ Cuerpo real más grande que el asignado (9 artículos temáticos, 3 resuelven) |
| L3: Governance | ✅ Coherente | ✅ |
| L4: AI Operating Model | ✅ Coherente | ✅ |
| L5: Organizational Memory | ✅ Coherente | ⚠️ Pequeño pero conceptualmente distinto |
| L6: Context Systems & Agentic | ⚠️ Doble subcapa | ✅ (pero contiene dos subclusters internos) |

### Claim: "Existe evidencia objetiva para una Layer 7"

**ESTADO: ❌ NO CONFIRMADO**

Evidencia revisada:
- Ningún artículo tiene un cluster o category que mapee a una hipotética "Layer 7"
- Los artículos de Layer 6 grupo Meta-Framework (26-29) están sobre el propio Archwise — podrían ser "meta-capa" pero no hay evidencia editorial que los defina así
- La existencia de 2 subclusters dentro de Layer 6 indica **densidad**, no necesariamente necesidad de división

**Conclusión:** No hay evidencia en frontmatter, clusters, categories ni series de artículos que justifique objetivamente una Layer 7. El claim del audit anterior era una propuesta editorial, no un hallazgo basado en evidencia.

---

## 7. HALLAZGO ADICIONAL NO DETECTADO EN AUDIT ANTERIOR

**Art-09 y art-10 tienen doble naturaleza de cluster:**

```
article-09: cluster: Context Engineering + category: governance
article-10: cluster: Context Engineering + category: governance
```

Ambos están en Layer 3 (Governance), lo cual es correcto por `category`. Pero su `cluster: Context Engineering` es el mismo que Layer 2. Esto no representa un error de asignación sino una **zona de transición editorial** entre Layer 2 y Layer 3 que el audit anterior no identificó.

---

## TABLA DE VALIDACIÓN FINAL

| ID Claim | Hallazgo Original | Estado Validación | Corrección |
|---|---|---|---|
| P1-001 | 7 artículos huérfanos | **CONFIRMADO** | — |
| P1-002 | 3 slug mismatches (tildes) | **CONFIRMADO** | Activos en producción, build logs lo confirman |
| P1-003 | Art-11 título con errores | **CONFIRMADO Y EXTENDIDO** | También afecta `description` y body del artículo |
| P1-004 | Layer 2 débil | **CONFIRMADO** | 9 artículos temáticos, solo 3 resuelven actualmente |
| P2-001 | Layer 6 sobrecargado | **PARCIALMENTE CONFIRMADO** | 6 artículos es el máximo; conceptos son distintos pero relacionados; no "dispares" |
| P2-002 | Layer 5 muy pequeño | **CONFIRMADO** | 2 artículos, ningún huérfano candidato |
| P2-003 | Art-04, 18 huérfanos en Navigator | **CONFIRMADO** | Aparecen en Navigator pero no en capas |
| P2-004 | Repeticiones en Navigator | **PARCIALMENTE CONFIRMADO** | Art-26, 29 son 4/5 (correcto); art-28, 20 son 3/5 (audit decía 4/5, incorrecto) |
| — | Claim Layer 7 necesaria | **NO CONFIRMADO** | No hay evidencia editorial objetiva |
| — | Art-09/10 doble naturaleza | **NUEVO HALLAZGO** | No detectado en audit anterior |

---

## RESUMEN EJECUTIVO

**De 9 claims principales:**
- 5 CONFIRMADOS
- 3 PARCIALMENTE CONFIRMADOS (con matices o correcciones)
- 1 NO CONFIRMADO (Layer 7)

**Correcciones al audit anterior:**
1. Art-28 y art-20 en Navigator: 3/5 rutas, no 4/5
2. "Layer 6 conceptos dispares" es inexacto — tienen 2 subclusters relacionados, no conceptos dispares
3. La Layer 7 no tiene soporte editorial en el corpus actual
4. Art-11 errores se extienden a `description` y body del artículo, no solo al `title`
5. Art-09/10 tienen doble naturaleza cluster/category no señalada

**Hallazgos confirmados con mayor impacto:**
- ✅ **P1-002** (slug mismatches) está activo en producción — 3 artículos invisibles en el framework
- ✅ **P1-003** (art-11 errores) es visible en producción en 2 ubicaciones
- ✅ **P1-001** (7 huérfanos) — 24% del corpus sin capa asignada

---

**Validación Completada:** 2026-06-08  
**Sin modificaciones aplicadas**  
**Conclusión:** La auditoría anterior es MAYORMENTE VÁLIDA con las correcciones señaladas
