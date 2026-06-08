# Framework-Corpus Alignment Audit

**Fecha:** 2026-06-08  
**Scope:** Análisis estructural editorial de 29 artículos vs Framework  
**Método:** Análisis sin implementación, solo diagnóstico

---

## HALLAZGO CRÍTICO INICIAL

**SLUG MISMATCH CRISIS DETECTED**

Hay inconsistencias graves en los slugs de los artículos entre lo que espera el framework y lo que existe realmente en los archivos. Ejemplo:

- Framework espera: `las-7-características-arquitectura-ai-ready`  
- Archivo referencia: `las-7-caracteristicas-arquitectura-ai-ready`

Diferencia: `características` vs `caracteristicas` (tildes en slug)

Este problema afecta la resolución de artículos en el framework.

---

## 1. MATRIZ COMPLETA: ARTÍCULOS vs CAPAS

### Artículos Identificados (29 totales)

| Nº | Slug Actual | Capa Asignada | Estado | Comentario |
|---|---|---|---|---|
| 01 | architecture-md-vale-mas-que-prompts | Layer 2 | ⚠️ PARTIALLY RESOLVED | Slug mismatch: "mas" vs "más" |
| 02 | deuda-tecnica-ia-revela | HUÉRFANO | ❌ NO ASIGNADO | Capa lógica: Layer 2 (Knowledge Debt) |
| 03 | documentacion-necesita-llm | Layer 2 | ⚠️ PARTIALLY RESOLVED | Slug mismatch: "documentacion" vs "documentación" |
| 04 | arquitectura-vuelve-ser-estrategica | Navigator only | ⚠️ WEAK | Solo en Consultor/Corregir, no en capa |
| 05 | technical-debt-vs-knowledge-debt-ia | HUÉRFANO | ❌ NO ASIGNADO | Capa lógica: Layer 2 (Knowledge Debt) |
| 06 | context-engineering-legacy-ia-falla | Layer 2 | ✅ RESOLVED | |
| 07 | framework-context-engineering-enterprise | HUÉRFANO | ❌ NO ASIGNADO | Capa lógica: Layer 2 (Context Engineering) |
| 08 | plantillas-ejemplos-architecture-md-enterprise | HUÉRFANO | ❌ NO ASIGNADO | Capa lógica: Layer 2/3 (Governance/Architecture) |
| 09 | architecture-review-efectiva-ia | Layer 3 | ✅ RESOLVED | |
| 10 | architecture-governance-contexto-compartido | Layer 3 | ✅ RESOLVED | |
| 11 | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Layer 1 | ⚠️ PARTIALLY RESOLVED | Título tiene errores: "mayoria" "estan" "que" |
| 12 | las-7-caracteristicas-arquitectura-ai-ready | Layer 1 | ⚠️ PARTIALLY RESOLVED | Slug mismatch: "características" esperado |
| 13 | ai-ready-systems-vs-legacy-systems | Layer 1 | ✅ RESOLVED | |
| 14 | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Layer 2 | ✅ RESOLVED | |
| 15 | context-engineering-vs-prompt-engineering | Layer 2 | ✅ RESOLVED | |
| 16 | ai-augmented-development-teams | Layer 4 | ✅ RESOLVED | |
| 17 | ai-native-organizations | Layer 4 | ✅ RESOLVED | |
| 18 | por-que-fracasan-iniciativas-ia | Navigator only | ⚠️ WEAK | Solo en Transformation Leader/Medir, no en capa |
| 19 | enterprise-ai-transformation-roadmap | HUÉRFANO | ❌ NO ASIGNADO | Capa lógica: Layer 6 (Meta/Integration) |
| 20 | ai-governance-framework | Layer 3 | ✅ RESOLVED | |
| 21 | ai-operating-model-enterprise | Layer 4 | ✅ RESOLVED | |
| 22 | organizational-memory-activo-ai-native | Layer 5 | ✅ RESOLVED | |
| 23 | memory-architecture-contexto-reutilizable-enterprise | Layer 5 | ✅ RESOLVED | |
| 24 | context-systems-entregar-contexto-correcto-enterprise | Layer 6 | ✅ RESOLVED | |
| 25 | agentic-ai-enterprise-governance-memoria-arquitectura | Layer 6 | ✅ RESOLVED | |
| 26 | framework-archwise-integracion-capacidades-escalar-ia | Layer 6 | ✅ RESOLVED | |
| 27 | arquitectura-adopcion-framework-archwise-orden-activacion | Layer 6 | ✅ RESOLVED | |
| 28 | measurement-system-integracion-madurez-operativa | Layer 6 | ✅ RESOLVED | |
| 29 | integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas | Layer 6 | ✅ RESOLVED | |

---

## 2. ANÁLISIS POR CAPA

### Distribución Actual

| Capa | Nº | Artículos | Estado de Cobertura | Análisis |
|---|---|---|---|---|
| **Layer 1: Diagnóstico AI-Ready** | 3 | 11, 12ⓘ, 13 | ⚠️ BORDERLINE | (Débil) Solo 3 artículos. Concepto crítico. 2/3 tienen issues. |
| **Layer 2: Contexto & Knowledge Debt** | 5 | 01ⓘ, 03ⓘ, 06, 14, 15 | ⚠️ WEAK | Debería ser más fuerte (5→8+). Faltan: art-02, 05, 07 (todos huérfanos) |
| **Layer 3: Governance** | 3 | 09, 10, 20 | ✅ OK | Bien distribuido. Coherente. |
| **Layer 4: AI Operating Model** | 3 | 16, 17, 21 | ✅ OK | Bien distribuido. Coherente. |
| **Layer 5: Organizational Memory** | 2 | 22, 23 | ⓘ WEAK | Muy pequeño. Solo 2 artículos para concepto importante. |
| **Layer 6: Context Systems & Agentic** | 6 | 24, 25, 26, 27, 28, 29 | ⚠️ OVERLOADED | Muy pesado (6 artículos). Conceptos muy diversos. |

**Summary:** 22 artículos en capas, 7 huérfanos

---

## 3. ARTÍCULOS HUÉRFANOS (NO MAPEADOS EN CAPAS)

| Art | Slug | Título | Capa Lógica | P | Nota |
|---|---|---|---|---|---|
| 02 | deuda-tecnica-ia-revela | La deuda técnica que la IA está empezando a revelar | Layer 2 | P1 | Foundation concept, debería estar en Layer 2 |
| 04 | arquitectura-vuelve-ser-estrategica | La arquitectura vuelve a ser estratégica | Layer 0/Meta | P2 | Solo en Navigator (Consultor/Corregir), no en capas |
| 05 | technical-debt-vs-knowledge-debt-ia | Technical Debt vs Knowledge Debt | Layer 2 | P1 | Critical for Layer 2 distinction |
| 07 | framework-context-engineering-enterprise | Framework práctico para Context Engineering | Layer 2 | P2 | Implementación de Context Engineering |
| 08 | plantillas-ejemplos-architecture-md-enterprise | Architecture.md Plantilla enterprise | Layer 2/3 | P3 | Recurso práctico, no core content |
| 18 | por-que-fracasan-iniciativas-ia | Por qué fracasan las iniciativas de IA | Layer 6/Meta | P1 | Critical cautionary tale. Solo en Navigator. |
| 19 | enterprise-ai-transformation-roadmap | Enterprise AI Transformation Roadmap | Layer 6/Meta | P2 | Meta-framework. Debería estar visible. |

**Total huérfanos:** 7 artículos (24% del corpus)  
**Críticos (P1):** 3 (art-02, 05, 18)

---

## 4. ANÁLISIS NAVIGATOR (PATHWAYS)

### Rutas Configuradas (5 perfiles × 5 intents = 25 combos posibles)

Configuradas: **5 rutas** (solo una por perfil/intent)

| Ruta | Artículos en Path |  Status | Coherencia |
|---|---|---|---|
| CTO → Diagnosticar | art-29, 11, 27, 20, 26 | ✅ OK | Secuencia coherente |
| Enterprise Architect → Diseñar | art-26, 28, 29, 20, 23 | ✅ OK | Secuencia coherente |
| Head of Engineering → Operar | art-21, 22, 23, 24, 27 | ✅ OK | Secuencia coherente |
| Transformation Leader → Medir | art-26, 27, 28, 29, 18 | ⚠️ WEAK | art-18 solo aquí, desconectado de capas |
| Consultor → Corregir | art-04, 29, 20, 26, 28 | ⚠️ WEAK | art-04 solo aquí, no en capas |

**Issues:**
- ⚠️ art-04 y art-18 aparecen SOLO en rutas de navigator, nunca en capas layer
- ❌ Muchas combinaciones posibles (25) pero solo 5 configuradas → poco explorable
- ⚠️ Rutas tienen mucha repetición: art-29, 26, 28, 20 aparecen en 4 de 5 rutas

---

## 5. ANÁLISIS VOCABULARY (TÉRMINOS BASE)

### Términos Configurados (5 términos)

| Término | Base Article | Existe | Status |
|---|---|---|---|
| Sequence Integrity | integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas | ✅ art-29 | ✅ RESOLVED |
| Evidence Integrity | measurement-system-integracion-madurez-operativa | ✅ art-28 | ✅ RESOLVED |
| Coherence Signals | measurement-system-integracion-madurez-operativa | ✅ art-28 | ✅ RESOLVED |
| Context Debt | context-systems-entregar-contexto-correcto-enterprise | ✅ art-24 | ✅ RESOLVED |
| Activation Debt | arquitectura-adopcion-framework-archwise-orden-activacion | ✅ art-27 | ✅ RESOLVED |

**Issues:**
- ⚠️ Art-28 es base de 2 términos (concentración)
- ❌ Otros conceptos críticos sin término: "Technical Debt", "Knowledge Debt", "AI-Ready", etc.
- ❌ Art-02, 05 (Technical/Knowledge Debt fundamentals) no tienen términos

---

## 6. ANÁLISIS DE CONTINUIDAD

### Framework → Articulos
✅ **OK:** Link en CTA section "Explorar los 29 artículos"

### Artículos → Framework
❓ **NO VERIFICADO:** No hay reverse link desde corpus a framework visible en auditoría

### Framework → Manifesto
✅ **OK:** Link en CTA section "Leer el Manifesto"

### Manifesto → Framework
❓ **NO VERIFICADO:** No en scope (manifesto no auditado)

---

## 7. PROBLEMAS TÉCNICOS: SLUG MISMATCHES

### Tildes en Slugs - CRÍTICO

| Article | Expected Slug (framework.data.ts) | Actual Slug (article.md) | Status |
|---|---|---|---|
| 01 | `architecture-md-vale-**más**-que-prompts` | `architecture-md-vale-**mas**-que-prompts` | ⚠️ MISMATCH |
| 03 | `**documentación**-necesita-llm` | `**documentacion**-necesita-llm` | ⚠️ MISMATCH |
| 12 | `las-7-**características**-arquitectura-ai-ready` | `las-7-**caracteristicas**-arquitectura-ai-ready` | ⚠️ MISMATCH |

**Root Cause:** Framework data tiene tildes, pero article slugs no. CSS/HTML rendering puede hacer que se muestren, pero links no resuelven.

**Impact:** Estos 3 artículos reportados como "no resueltos" en framework logs, pero en realidad existen.

---

## 8. MATRIZ FINAL: ESTADO POR CAPA

| Capa | Nº | Artículos | Calidad | Cobertura | Riesgo | Notas |
|---|---|---|---|---|---|---|
| **L1** | 3 | Débil | ⚠️ 2 issues | 50% | **MEDIA** | Muy pocas, título defectuoso en art-11, slug mismatch en art-12 |
| **L2** | 5 | Débil | ⚠️ 2 issues | 40% | **ALTA** | 7 deberían estar aquí, solo 5 están. Missing art-02, 05, 07 |
| **L3** | 3 | Bueno | ✅ OK | 100% | **BAJA** | Bien estructurado y coherente |
| **L4** | 3 | Bueno | ✅ OK | 100% | **BAJA** | Bien estructurado y coherente |
| **L5** | 2 | Débil | ⚠️ Tiny | 100% | **MEDIA** | Muy pequeño para concepto importante |
| **L6** | 6 | Sobrecargado | ⚠️ Too much | 90% | **ALTA** | Demasiado, conceptos dispares. Necesita reducción. |

---

## RESUMEN DE HALLAZGOS

### ✅ QUÉ ESTÁ BIEN

1. **Vocabulary término-artículo**: 5/5 términos con artículos base resueltos
2. **Layers 3 & 4**: Bien distribuidos (3 artículos cada uno), coherentes
3. **Navigator rutas**: 5 rutas lógicas, secuencias razonables
4. **CTA continuidad**: Links Framework ↔ Artículos presentes
5. **Artículos 13-17, 20-29**: Mayormente bien integrados

### ❌ QUÉ ESTÁ MAL

1. **CRÍTICO:** 7 artículos huérfanos (24% del corpus) sin asignación a capas
2. **CRÍTICO:** Slug mismatches en 3 artículos (tildes) hacen que no resuelvan
3. **GRAVE:** Layer 2 (Knowledge Debt) es débil: 5 artículos pero deberían ser 8-10
4. **GRAVE:** Layer 6 sobrecargado: 6 artículos, conceptos dispares
5. **GRAVE:** Art-11 título visible con errores en producción ("mayoria" "estan" "que")
6. **SERIO:** Art-04, art-18 huérfanos pero en Navigator (inconsistencia)

### ❓ QUÉ FALTA

1. **Asignación de capas** para art-02, 05, 07, 08, 19
2. **Categorización clara** de art-04, 18 (meta? intro? Layer 0?)
3. **Reverse navs** (Artículos → Framework breadcrumbs)
4. **Deduplicación** de art-29, 26, 28, 20 en Navigator paths
5. **Slug normalization** rules (tildes sí/no)
6. **Términos adicionales** para Technical Debt, Knowledge Debt, AI-Ready

### ⚠️ QUÉ SOBRA

1. **Repeticiones en Navigator**: art-29 en 4/5 rutas
2. **Layer 6 sobrecargado**: Debería dividirse en Layer 6 + Layer 7
3. **Incoherencia art-04, 18**: En Navigator pero no en capas (confuso)

---

## CLASIFICACIÓN DE HALLAZGOS

### P1 - CRÍTICO (Bloquea integridad)

| ID | Hallazgo | Impacto | Acción |
|---|---|---|---|
| P1-001 | 7 artículos huérfanos (art-02, 05, 07, 08, 18, 19 + art-04 semi-huérfano) | 24% del corpus sin capa asignada | Asignar capas apropiadas |
| P1-002 | Slug mismatches tildes (art-01, 03, 12) | Artículos no resuelven en framework | Normalizar slugs (quitar tildes o mantenerlas consistente) |
| P1-003 | Art-11 título visible con errores ("mayoria" "estan" "que") | Producción contiene texto defectuoso | Corregir a "mayoría" "están" "qué" |
| P1-004 | Layer 2 débil (5→8-10) | Concepto crítico insuficientemente cubierto | Asignar art-02, 05, 07 a Layer 2 |

### P2 - IMPORTANTE (Afecta estructura)

| ID | Hallazgo | Impacto | Acción |
|---|---|---|---|
| P2-001 | Layer 6 sobrecargado (6 artículos dispares) | Coherencia fragmentada | Considerar Layer 7 o redistribución |
| P2-002 | Layer 5 muy pequeño (2 artículos) | Concepto Memoria insuficiente | Expandir o fusionar con Layer 4 |
| P2-003 | Art-04, 18 huérfanos en capas pero en Navigator | Definición de roles confusa (meta? intro?) | Clarificar si son meta-framework o core |
| P2-004 | Repeticiones Navigator rutas | Art-29, 26, 28, 20 aparecen 4/5 veces cada uno | Diversificar rutas (usar huérfanos) |

### P3 - MEJORA (Conveniencia)

| ID | Hallazgo | Impacto | Acción |
|---|---|---|---|
| P3-001 | Términos insuficientes | Solo 5/10+ conceptos clave cubiertos | Agregar términos: Technical Debt, Knowledge Debt, etc. |
| P3-002 | Sin reverse navs (Articulos→Framework) | Frustrante flujo Artículos→Framework | Considerar breadcrumbs o nav inverso |
| P3-003 | Navigator 25 slots, solo 5 rutas | Poco explorable | Expandir a 10-15 rutas |

---

## CONCLUSIÓN

**Estado General:** ⚠️ **MISALIGNED - REQUIRES CORRECTIONS**

El framework y corpus tienen **graves desalineaciones estructurales**:

- 24% del corpus no integrado en capas
- 3 artículos técnicamente no resuelven por slug mismatches
- 1 artículo visible en producción con errores lingüísticos
- Layer 2 debajo de capacidad, Layer 6 sobrecargada
- Inconsistencias en mapping (huérfanos semi-integrados)

**No está listo para producción** sin resolver al menos los P1s.

---

**Auditoría Completada:** 2026-06-08  
**Requerimientos:** Análisis estructural, sin implementación propuesta  
**Status:** MISALIGNMENT DETECTED - 4 Critical Issues, 4 Important Issues, 3 Improvement Opportunities
