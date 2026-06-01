# Internal Linking Audit — Archwise Enterprise AI
Fecha: 2026-06-01  
Alcance: article-01 → article-22  
Estado: Auditoría + ejecución parcial. Fase 1 completada (framework core). Fase 2 y Fase 3 pendientes.

---

## 1. Estado actual del enlazado

### 1.1 Artículos con relatedArticles configurados (estado actualizado tras Fase 1)

| Artículo | Slug | relatedArticles configurados |
|----------|------|------------------------------|
| article-01 | architecture-md-vale-mas-que-prompts | 5 (documentacion-necesita-llm, deuda-tecnica-ia-revela, arquitectura-vuelve-ser-estrategica, framework-context-engineering-enterprise, context-engineering-vs-prompt-engineering) |
| article-02 | deuda-tecnica-ia-revela | 5 (technical-debt-vs-knowledge-debt-ia, documentacion-necesita-llm, context-engineering-legacy-ia-falla*, architecture-md-vale-mas-que-prompts, por-que-fracasan-iniciativas-ia) |
| article-03 | documentacion-necesita-llm | 5 (architecture-md-vale-mas-que-prompts, deuda-tecnica-ia-revela, framework-context-engineering-enterprise, context-engineering-vs-prompt-engineering, technical-debt-vs-knowledge-debt-ia) |
| article-04 | arquitectura-vuelve-ser-estrategica | 5 (enterprise-ai-transformation-roadmap, ai-operating-model-enterprise, ai-native-organizations, ai-augmented-development-teams, por-que-fracasan-iniciativas-ia) |
| article-05 | technical-debt-vs-knowledge-debt-ia | 5 (deuda-tecnica-ia-revela, documentacion-necesita-llm, context-engineering-legacy-ia-falla*, por-que-fracasan-iniciativas-ia, ai-governance-framework) |
| article-17 | ai-native-organizations | 5 (ai-operating-model-enterprise, ai-governance-framework, organizational-memory-activo-ai-native, enterprise-ai-transformation-roadmap, por-que-fracasan-iniciativas-ia) |
| article-18 | por-que-fracasan-iniciativas-ia | 5 (enterprise-ai-transformation-roadmap, ai-governance-framework, organizational-memory-activo-ai-native, technical-debt-vs-knowledge-debt-ia, por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia) |
| article-19 | enterprise-ai-transformation-roadmap | 5 (ai-native-organizations, ai-governance-framework, ai-operating-model-enterprise, organizational-memory-activo-ai-native, por-que-fracasan-iniciativas-ia) |
| article-20 | ai-governance-framework | 5 (ai-operating-model-enterprise, organizational-memory-activo-ai-native, ai-native-organizations, enterprise-ai-transformation-roadmap, architecture-governance-contexto-compartido) |
| article-21 | ai-operating-model-enterprise | 5 (organizational-memory-activo-ai-native, ai-governance-framework, enterprise-ai-transformation-roadmap, por-que-fracasan-iniciativas-ia, ai-native-organizations) |
| article-22 | organizational-memory-activo-ai-native | 5 (ai-operating-model-enterprise, ai-governance-framework, ai-native-organizations, context-engineering-vs-prompt-engineering, por-que-fracasan-iniciativas-ia) |

*Nota: `context-engineering-legacy-ia-falla` es el slug de article-06, que existe en el corpus pero no tiene `article.json`. El slug es correcto.

### 1.2 Artículos sin relatedArticles (11 artículos, tras Fase 1)

| Artículo | Slug | Categoría |
|----------|------|-----------|
| article-06* | context-engineering-legacy-ia-falla | Context Engineering |
| article-07 | framework-context-engineering-enterprise | Context Engineering |
| article-08 | plantillas-ejemplos-architecture-md-enterprise | Context Engineering |
| article-09 | architecture-review-efectiva-ia | Governance |
| article-10 | architecture-governance-contexto-compartido | Governance |
| article-11 | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | AI-Ready Systems |
| article-12 | las-7-caracteristicas-arquitectura-ai-ready | AI-Ready Systems |
| article-13 | ai-ready-systems-vs-legacy-systems | AI-Ready Systems |
| article-14 | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Context Engineering |
| article-15 | context-engineering-vs-prompt-engineering | Context Engineering |
| article-16 | ai-augmented-development-teams | Enterprise AI |

*article-06 no tiene article.json propio, pero es referenciado por artículos 02 y 05.

---

## 2. Framework Archwise — Eje conceptual principal

El framework de Archwise establece una cadena conceptual progresiva que debe reflejarse en el enlazado:

```
Context Engineering (art-01, 03, 06, 07, 08, 14, 15)
        ↓
Knowledge Debt (art-02, 05)
        ↓
Organizational Memory (art-22)
        ↓
AI Governance (art-20)
        ↓
AI Operating Model (art-21)
        ↓
AI-Native Organizations (art-17)
```

**Artículos de entrada al framework:** art-04 (arquitectura estratégica), art-11/12/13 (AI-Ready Systems), art-18 (fracasos de IA), art-19 (roadmap)

**Artículos de soporte horizontal:** art-09 (Architecture Review), art-10 (Architecture Governance), art-16 (AI-Augmented Teams)

---

## 3. Matriz de relaciones

Para cada artículo: qué debería enlazar (outbound) y qué debería enlazarle (inbound).

---

### Article-01 — Por qué un architecture.md vale más que cien prompts mágicos
`architecture-md-vale-mas-que-prompts`

**Outbound recomendados (debería enlazar a):**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| documentacion-necesita-llm | Profundiza qué documentar exactamente | "qué documentación necesita realmente un LLM" |
| framework-context-engineering-enterprise | Siguiente paso práctico | "framework práctico de Context Engineering" |
| plantillas-ejemplos-architecture-md-enterprise | Ejemplos directos del tema | "plantillas y ejemplos de architecture.md" |
| technical-debt-vs-knowledge-debt-ia | Consecuencias de no documentar | "deuda de conocimiento" |
| context-engineering-vs-prompt-engineering | Diferencia clave | "diferencia entre Context Engineering y Prompt Engineering" |

**Inbound recomendados (debería recibir desde):**
- art-03, art-07, art-08, art-14, art-15 (todos del cluster Context Engineering)
- art-09, art-10 (Architecture Review / Governance — mencionan architecture.md)

**Estado actual:** Bien enlazado en outbound. Faltan inbound desde art-07, art-08, art-09, art-10.

---

### Article-02 — La deuda técnica que la IA está empezando a revelar
`deuda-tecnica-ia-revela`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| technical-debt-vs-knowledge-debt-ia | Desarrollo directo del concepto | "diferencia entre deuda técnica y deuda de conocimiento" |
| organizational-memory-activo-ai-native | Solución estructural a la deuda | "Organizational Memory como respuesta a la deuda acumulada" |
| por-que-fracasan-iniciativas-ia | Consecuencia directa | "por qué fracasan las iniciativas de IA" |
| context-engineering-legacy-ia-falla | Aplicación práctica | "Context Engineering para sistemas legacy" |
| ai-governance-framework | Governance como mitigación | "AI Governance Framework" |

**Inbound recomendados:**
- art-05 ✅ (ya enlaza)
- art-18, art-19, art-22 (contexto de deuda histórica)

**Estado actual:** Razonablemente enlazado. Falta enlace a art-22.

---

### Article-03 — Qué documentación necesita realmente un LLM
`documentacion-necesita-llm`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| architecture-md-vale-mas-que-prompts | Ejemplo concreto de documentación de calidad | "architecture.md como ejemplo de documentación diferencial" |
| framework-context-engineering-enterprise | Marco de trabajo | "framework práctico de Context Engineering" |
| organizational-memory-activo-ai-native | Nivel superior del mismo problema | "Organizational Memory como infraestructura de contexto" |
| technical-debt-vs-knowledge-debt-ia | Consecuencias de documentar mal | "Knowledge Debt" |
| plantillas-ejemplos-architecture-md-enterprise | Herramientas prácticas | "plantillas reales para documentar" |

**Inbound recomendados:**
- art-01 ✅ (ya enlaza)
- art-07, art-08, art-14, art-15, art-22 (todos relacionados con calidad del contexto)

**Estado actual:** Outbound parcialmente completo. Falta enlace a art-22. Inbound escaso desde el cluster Context Engineering.

---

### Article-04 — La arquitectura vuelve a ser estratégica
`arquitectura-vuelve-ser-estrategica`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-native-organizations | Objetivo final de la arquitectura estratégica | "organizaciones AI-Native" |
| enterprise-ai-transformation-roadmap | Hoja de ruta concreta | "roadmap de transformación enterprise" |
| ai-governance-framework | Governance como pilar | "AI Governance Framework" |
| architecture-review-efectiva-ia | Herramienta de la arquitectura estratégica | "Architecture Review efectiva" |
| architecture-md-vale-mas-que-prompts | Fundamento de contexto | "architecture.md como activo estratégico" |

**Inbound recomendados:**
- art-01 ✅ (ya enlaza)
- art-09, art-10, art-19, art-21 (todos abordan arquitectura a nivel organizativo)

**Estado actual:** Outbound razonablemente cubierto. Faltan inbound desde art-09, art-10.

---

### Article-05 — Technical Debt vs Knowledge Debt
`technical-debt-vs-knowledge-debt-ia`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| organizational-memory-activo-ai-native | Solución directa al Knowledge Debt | "Organizational Memory como mecanismo de reducción de deuda" |
| deuda-tecnica-ia-revela | Contexto del problema | "deuda técnica que la IA está revelando" |
| ai-governance-framework | Governance como herramienta | "AI Governance para gestionar deuda sistémica" |
| context-engineering-legacy-ia-falla | Aplicación en legacy | "Context Engineering para mitigar Knowledge Debt en sistemas legacy" |
| documentacion-necesita-llm | Qué documentar para reducir la deuda | "qué documentar para que la IA funcione correctamente" |

**Inbound recomendados:**
- art-02 ✅ (ya enlaza)
- art-22 (art-22 referencia a art-05 en su narrativa — debe confirmarse el enlace recíproco)
- art-18, art-19

**Estado actual:** Buen outbound. Falta enlace crítico a art-22.

---

### Article-06 — Context Engineering para proyectos legacy
`context-engineering-legacy-ia-falla`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| framework-context-engineering-enterprise | Framework general | "framework de Context Engineering" |
| architecture-md-vale-mas-que-prompts | Documentación de arquitectura legacy | "architecture.md para proyectos legacy" |
| technical-debt-vs-knowledge-debt-ia | Problema subyacente | "deuda de conocimiento en sistemas legacy" |
| por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Diagnóstico del problema | "por qué los sistemas legacy no están preparados para IA" |
| organizational-memory-activo-ai-native | Solución de largo plazo | "Organizational Memory como salida del ciclo legacy" |

**Inbound recomendados:**
- art-02 ✅, art-05 ✅ (ya enlazan)
- art-11, art-12, art-13 (cluster AI-Ready Systems — legacy es su tema central)

**Estado actual:** Sin article.json propio. Referenciado pero no enlaza a otros.

---

### Article-07 — Framework práctico para Context Engineering
`framework-context-engineering-enterprise`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| architecture-md-vale-mas-que-prompts | Herramienta central del framework | "architecture.md como pilar de Context Engineering" |
| documentacion-necesita-llm | Qué documentar en el framework | "documentación que realmente necesita un LLM" |
| plantillas-ejemplos-architecture-md-enterprise | Implementación práctica | "plantillas reales para implementar el framework" |
| context-engineering-vs-prompt-engineering | Posicionamiento del framework | "por qué Context Engineering supera al Prompt Engineering" |
| organizational-memory-activo-ai-native | Evolución natural del framework | "Organizational Memory como madurez del Context Engineering" |

**Inbound recomendados:**
- art-01 ✅, art-03 ✅ (ya enlazan)
- art-06, art-08, art-14, art-15 (cluster Context Engineering)

**Estado actual:** Sin relatedArticles en article.json. Crítico: recibe enlaces pero no los distribuye.

---

### Article-08 — Plantillas y ejemplos reales de architecture.md
`plantillas-ejemplos-architecture-md-enterprise`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| architecture-md-vale-mas-que-prompts | Fundamento del tema | "por qué architecture.md es más que documentación" |
| framework-context-engineering-enterprise | Marco teórico detrás de las plantillas | "framework de Context Engineering" |
| documentacion-necesita-llm | Criterios de lo que se documenta | "qué documentación necesita realmente un LLM" |
| architecture-review-efectiva-ia | Uso de las plantillas en revisiones | "Architecture Review efectiva" |
| context-engineering-vs-prompt-engineering | Contextualización | "diferencia entre Prompt y Context Engineering" |

**Inbound recomendados:**
- art-01, art-03, art-07 (cluster Context Engineering central)
- art-09, art-10 (Governance usa estas plantillas)

**Estado actual:** Sin relatedArticles. Falta enlazado completo en ambas direcciones.

---

### Article-09 — Cómo hacer una Architecture Review efectiva en la era de la IA
`architecture-review-efectiva-ia`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| architecture-md-vale-mas-que-prompts | Architecture.md como insumo de la review | "architecture.md como insumo clave de la revisión" |
| architecture-governance-contexto-compartido | Governance como marco de la review | "Architecture Governance en la era de la IA" |
| plantillas-ejemplos-architecture-md-enterprise | Herramientas para la review | "plantillas de architecture.md" |
| ai-governance-framework | Governance más amplio | "AI Governance Framework" |
| arquitectura-vuelve-ser-estrategica | Contexto estratégico | "arquitectura como decisión estratégica" |

**Inbound recomendados:**
- art-04, art-08, art-10 (arquitectura y governance)
- art-19 (roadmap incluye Architecture Review como actividad)

**Estado actual:** Sin relatedArticles. Sin tags. Alta deuda de enlazado.

---

### Article-10 — Architecture Governance en la era de la IA
`architecture-governance-contexto-compartido`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-governance-framework | Extensión directa al AI Governance | "AI Governance Framework para escalar la governance" |
| architecture-review-efectiva-ia | Herramienta operativa de governance | "Architecture Review como mecanismo de governance" |
| architecture-md-vale-mas-que-prompts | Contexto compartido como activo | "architecture.md como base del contexto compartido" |
| organizational-memory-activo-ai-native | Governance de la memoria | "Organizational Memory como base de governance sostenible" |
| ai-operating-model-enterprise | Governance en el operating model | "AI Operating Model" |

**Inbound recomendados:**
- art-04, art-09, art-20, art-21 (governance a distintos niveles)

**Estado actual:** Sin relatedArticles. Sin tags. Artículo puente crítico sin enlazado.

---

### Article-11 — Por qué la mayoría de los sistemas no están preparados para IA
`por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| las-7-caracteristicas-arquitectura-ai-ready | Siguiente paso directo | "7 características de una arquitectura AI-Ready" |
| ai-ready-systems-vs-legacy-systems | Comparativa directa | "AI-Ready Systems vs Legacy Systems" |
| context-engineering-legacy-ia-falla | Causa raíz: falta de contexto | "Context Engineering para sistemas no preparados" |
| technical-debt-vs-knowledge-debt-ia | Deuda subyacente | "Knowledge Debt como causa de la falta de preparación" |
| enterprise-ai-transformation-roadmap | Solución global | "roadmap de transformación enterprise" |

**Inbound recomendados:**
- art-12, art-13, art-18, art-19 (cluster AI-Ready + fracasos + roadmap)

**Estado actual:** Sin relatedArticles. Sin tags. Artículo de entrada de cluster sin enlazado.

---

### Article-12 — Las 7 características de una arquitectura realmente AI-Ready
`las-7-caracteristicas-arquitectura-ai-ready`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Diagnóstico del problema | "por qué la mayoría de sistemas no están listos" |
| ai-ready-systems-vs-legacy-systems | Comparativa aplicada | "AI-Ready Systems vs Legacy Systems" |
| architecture-md-vale-mas-que-prompts | Architecture.md como característica AI-Ready | "architecture.md como señal de sistema AI-Ready" |
| framework-context-engineering-enterprise | Context Engineering como requisito | "framework de Context Engineering" |
| enterprise-ai-transformation-roadmap | Contexto del journey | "roadmap de transformación" |

**Inbound recomendados:**
- art-11, art-13 (cluster AI-Ready)
- art-04, art-19 (arquitectura estratégica + roadmap)

**Estado actual:** Sin relatedArticles. Sin tags.

---

### Article-13 — AI-Ready Systems vs Legacy Systems
`ai-ready-systems-vs-legacy-systems`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Diagnóstico previo | "por qué los sistemas legacy no están preparados" |
| las-7-caracteristicas-arquitectura-ai-ready | Características del lado AI-Ready | "7 características de una arquitectura AI-Ready" |
| context-engineering-legacy-ia-falla | Puente práctico | "Context Engineering para proyectos legacy" |
| technical-debt-vs-knowledge-debt-ia | Deuda como barrera | "deuda técnica vs deuda de conocimiento" |
| ai-native-organizations | Objetivo final | "organizaciones AI-Native como destino" |

**Inbound recomendados:**
- art-11, art-12, art-18, art-19

**Estado actual:** Sin relatedArticles. Sin tags.

---

### Article-14 — Por qué el Prompt Engineering no es suficiente
`por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| context-engineering-vs-prompt-engineering | Siguiente paso directo | "diferencia entre Prompt Engineering y Context Engineering" |
| framework-context-engineering-enterprise | Alternativa propuesta | "framework de Context Engineering" |
| architecture-md-vale-mas-que-prompts | Herramienta superior al prompt | "architecture.md como sustituto del prompt" |
| documentacion-necesita-llm | Qué documentar en lugar de promptear | "documentación que realmente necesita un LLM" |
| por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Problema sistémico subyacente | "sistemas no preparados para IA" |

**Inbound recomendados:**
- art-15 (continuación directa), art-01, art-03, art-07

**Estado actual:** Sin relatedArticles. Sin tags. Artículo de alta intención de búsqueda desenlazado.

---

### Article-15 — Context Engineering vs Prompt Engineering
`context-engineering-vs-prompt-engineering`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| framework-context-engineering-enterprise | Framework del lado ganador | "framework práctico de Context Engineering" |
| architecture-md-vale-mas-que-prompts | Herramienta de Context Engineering | "architecture.md" |
| por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Entrada al tema | "por qué el Prompt Engineering no es suficiente" |
| documentacion-necesita-llm | Qué documenta Context Engineering | "documentación que necesita un LLM" |
| organizational-memory-activo-ai-native | Nivel de madurez superior | "Organizational Memory como evolución del Context Engineering" |

**Inbound recomendados:**
- art-01 ✅, art-03 ✅ (ya enlazan)
- art-14 (artículo anterior en la misma línea argumental)
- art-22 ✅ (ya enlaza)

**Estado actual:** Sin relatedArticles. Sin tags. Muy enlazado en inbound pero no distribuye.

---

### Article-16 — AI-Augmented Development Teams
`ai-augmented-development-teams`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-native-organizations | Evolución del equipo aumentado | "organizaciones AI-Native" |
| ai-operating-model-enterprise | Operating model del equipo | "AI Operating Model para equipos" |
| framework-context-engineering-enterprise | Herramienta para equipos aumentados | "Context Engineering para equipos de desarrollo" |
| organizational-memory-activo-ai-native | Memoria del equipo → memoria organizativa | "Organizational Memory como memoria colectiva del equipo" |
| por-que-fracasan-iniciativas-ia | Riesgo del equipo aumentado sin estructura | "por qué fracasan las iniciativas de IA" |

**Inbound recomendados:**
- art-04 ✅, art-17, art-21 (ya lo enlazan parcialmente)
- art-19 (roadmap menciona equipos)

**Estado actual:** Sin relatedArticles. Sin tags.

---

### Article-17 — AI-Native Organizations
`ai-native-organizations`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-operating-model-enterprise | Cómo opera una AI-Native Org | "AI Operating Model para organizaciones AI-Native" |
| ai-governance-framework | Governance de la AI-Native Org | "AI Governance Framework" |
| organizational-memory-activo-ai-native | Activo diferencial de la AI-Native Org | "Organizational Memory como ventaja competitiva" |
| enterprise-ai-transformation-roadmap | Cómo llegar a ser AI-Native | "roadmap de transformación enterprise" |
| por-que-fracasan-iniciativas-ia | Qué evitar en el camino | "por qué fracasan las iniciativas de IA" |

**Inbound recomendados:**
- art-04 ✅, art-21 ✅, art-22 ✅ (ya enlazan)
- art-13, art-16, art-18, art-19

**Estado actual:** Sin relatedArticles. Sin tags. Artículo tesis del framework sin distribuir enlaces.

---

### Article-18 — Por qué fracasan las iniciativas de IA
`por-que-fracasan-iniciativas-ia`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| enterprise-ai-transformation-roadmap | Solución al fracaso | "roadmap de transformación enterprise" |
| ai-governance-framework | Governance como prevención | "AI Governance Framework para evitar fracasos" |
| organizational-memory-activo-ai-native | Memoria como prevención de fracasos repetidos | "Organizational Memory para no repetir errores" |
| technical-debt-vs-knowledge-debt-ia | Causa profunda | "Knowledge Debt como causa de fracaso" |
| por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | Causa técnica | "sistemas no preparados para IA" |

**Inbound recomendados:**
- art-02 ✅, art-05 ✅, art-04 ✅, art-21 ✅, art-22 ✅ (bien enlazado en inbound)
- art-11, art-13, art-17, art-19

**Estado actual:** Sin relatedArticles. Sin tags. Muy popular en inbound pero no distribuye.

---

### Article-19 — Enterprise AI Transformation Roadmap
`enterprise-ai-transformation-roadmap`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-native-organizations | Destino del roadmap | "organizaciones AI-Native como objetivo final" |
| ai-governance-framework | Pilar del roadmap | "AI Governance Framework como fase del roadmap" |
| ai-operating-model-enterprise | Pilar del roadmap | "AI Operating Model como capacidad a construir" |
| organizational-memory-activo-ai-native | Activo a construir en el roadmap | "Organizational Memory como infraestructura del roadmap" |
| por-que-fracasan-iniciativas-ia | Qué evitar | "por qué fracasan las iniciativas de IA" |

**Inbound recomendados:**
- art-04 ✅, art-21 ✅ (ya enlazan)
- art-11, art-13, art-17, art-18

**Estado actual:** Sin relatedArticles. Sin tags. Artículo estratégico de alta autoridad potencial sin distribuir.

---

### Article-20 — AI Governance Framework
`ai-governance-framework`

**Outbound recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| ai-operating-model-enterprise | Governance en acción | "AI Operating Model que operacionaliza el governance" |
| organizational-memory-activo-ai-native | Memoria como objeto de governance | "Organizational Memory como activo a gobernar" |
| ai-native-organizations | Objetivo del governance | "organizaciones AI-Native" |
| enterprise-ai-transformation-roadmap | Governance en el roadmap | "roadmap de transformación enterprise" |
| architecture-governance-contexto-compartido | Governance de arquitectura | "Architecture Governance" |

**Inbound recomendados:**
- art-05 ✅, art-21 ✅, art-22 ✅ (ya enlazan)
- art-09, art-10, art-17, art-18, art-19

**Estado actual:** article.json tiene internalLinks pero no relatedArticles estándar. Sin tags. No distribuye.

---

### Article-21 — AI Operating Model
`ai-operating-model-enterprise`

**Outbound actuales:** ai-governance-framework ✅, enterprise-ai-transformation-roadmap ✅, por-que-fracasan-iniciativas-ia ✅, ai-native-organizations ✅, ai-augmented-development-teams ✅

**Outbound adicionales recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| organizational-memory-activo-ai-native | Memoria como componente del operating model | "Organizational Memory como capa de continuidad del operating model" |
| architecture-governance-contexto-compartido | Governance de arquitectura en el operating model | "Architecture Governance como componente del operating model" |

**Inbound recomendados:**
- art-22 ✅ (ya enlaza)
- art-04 ✅ (ya enlaza)
- art-17, art-18, art-19, art-20 (todos deberían enlazar a art-21)

**Estado actual:** Bien enlazado en outbound. Faltan inbound desde art-17, art-18, art-19, art-20.

---

### Article-22 — Organizational Memory
`organizational-memory-activo-ai-native`

**Outbound actuales:** ai-operating-model-enterprise ✅, ai-governance-framework ✅, ai-native-organizations ✅, context-engineering-vs-prompt-engineering ✅, por-que-fracasan-iniciativas-ia ✅

**Outbound adicionales recomendados:**
| Slug | Razón | Anchor text sugerido |
|------|-------|----------------------|
| technical-debt-vs-knowledge-debt-ia | Relación directa en el framework | "Knowledge Debt como origen de la falta de Organizational Memory" |
| documentacion-necesita-llm | Enlace al origen del Context Engineering | "documentación que necesita realmente un LLM" |

**Inbound recomendados:**
- art-21 ✅ referencia pero falta enlace explícito en relatedArticles
- art-05, art-10, art-17, art-18, art-19, art-20 (todos deberían enlazar a art-22 como artículo de madurez)

**Estado actual:** Bien configurado para ser reciente. Necesita más inbound desde el corpus existente.

---

## 4. Análisis de gaps críticos

### Gap 1 — El cluster central del framework (art-17, art-19, art-20) no distribuye ningún enlace
Estos artículos son tesis del framework Archwise. Son referenciados por muchos artículos pero no enlazan a nada. Generan autoridad sin distribuirla. Impacto SEO: alto.

### Gap 2 — Article-15 (Context Engineering vs Prompt Engineering) muy enlazado en inbound pero sin outbound
Es uno de los artículos con más inbound del corpus (art-01, art-03, art-22 ya lo mencionan). Sin embargo, no tiene relatedArticles. Es una oportunidad de redistribución de autoridad hacia el resto del cluster.

### Gap 3 — Cluster AI-Ready Systems (art-11, art-12, art-13) completamente aislado
Estos tres artículos no enlazan entre sí ni a otros clusters. No tienen relatedArticles ni tags. Ruptura de la navegación entre clusters.

### Gap 4 — Article-22 está mal representado en el inbound del corpus anterior
Article-22 introduce el concepto clave de Organizational Memory y cierra el framework Archwise. Solo art-21 (por el contexto editorial) y art-22 mismo tienen ese enlace. Los artículos 02, 05, 10, 17, 18, 19, 20 deberían enlazarlo.

### Gap 5 — Articles 14 y 15 forman una secuencia natural pero no se enlazan entre sí
Art-14 plantea el problema (Prompt Engineering insuficiente), art-15 desarrolla la solución (Context Engineering). Sin enlace bidireccional, se pierde la narración secuencial.

---

## 5. Oportunidades de enlazado contextual dentro del cuerpo de los artículos

Estas son oportunidades para añadir enlaces inline en el cuerpo del artículo, más allá de la sección relatedArticles.

| Artículo | Mención natural | Enlace recomendado | Anchor text en contexto |
|----------|----------------|-------------------|------------------------|
| art-22 | "la Knowledge Debt no se ve hasta que duele" | technical-debt-vs-knowledge-debt-ia | "Knowledge Debt" |
| art-22 | "una organización AI-Native no adopta solo herramientas" | ai-native-organizations | "organización AI-Native" |
| art-17 | Mención a memoria organizativa | organizational-memory-activo-ai-native | "Organizational Memory" |
| art-20 | Mención a contexto explícito | documentacion-necesita-llm | "contexto explícito" |
| art-18 | Mención a deuda de conocimiento | technical-debt-vs-knowledge-debt-ia | "deuda de conocimiento" |
| art-19 | Mención a AI Governance | ai-governance-framework | "AI Governance Framework" |
| art-10 | Mención a AI Governance | ai-governance-framework | "AI Governance" |
| art-09 | Mención a architecture.md | architecture-md-vale-mas-que-prompts | "architecture.md" |

---

## 6. Priorización de acciones

### Fase 1 (completada) — Framework core

- Alcance completado:
        - `article-17/article.json`
        - `article-18/article.json`
        - `article-19/article.json`
        - `article-20/article.json`
        - `article-21/article.json`
        - `article-22/article.json`
- Estado técnico asociado: completado
        - `build-content.ts` serializa `relatedArticles`
        - `ArticleDetailComponent` resuelve relacionados en SSR-friendly flow (`forkJoin`)
        - Related links presentes en HTML prerenderizado (article-01, article-17, article-22)

### Fase 2 (pendiente) — Clusters desconectados

- Objetivo: reducir artículos en modo isla fuera del framework core.
- Alcance recomendado:
        - Cluster AI-Ready Systems: article-11, article-12, article-13
        - Cluster Context Engineering intermedio + Governance: article-07, article-08, article-09, article-10
        - Puentes de alta intención: article-14, article-15
        - Enterprise bridge: article-16

### Fase 3 (pendiente) — Enlaces contextuales inline + refinamiento

- Objetivo: mejorar autoridad temática y profundidad semántica en cuerpo editorial.
- Alcance recomendado:
        - Añadir enlaces contextuales en `article.md` con anchor text editorial (sin keyword stuffing)
        - Revisar consistencia de tags en artículos antiguos (especialmente article-07)
        - Crear `article.json` de article-06 para cerrar hueco de metadatos
        - Revalidar matrix inbound/outbound completa post-implementación

### Prioridad Alta (impacto SEO + navegación inmediata)

1. **Añadir relatedArticles a art-17, art-18, art-19, art-20** — Artículos con alta autoridad potencial y cero distribución
2. **Añadir relatedArticles a art-14, art-15** — Alta intención de búsqueda, cero distribución, uno de los slugs más enlazados del corpus
3. **Añadir enlace a organizational-memory-activo-ai-native en art-05, art-17, art-18, art-19, art-20** — Integrar art-22 en el corpus anterior
4. **Conectar bidireccionalmenteart-14 ↔ art-15** — Secuencia argumental obvia no enlazada

### Prioridad Media (completar clusters)

5. **Añadir relatedArticles a art-11, art-12, art-13** — Conectar el cluster AI-Ready Systems internamente y con el resto
6. **Añadir relatedArticles a art-07, art-08, art-09, art-10** — Completar el cluster Context Engineering intermedio y Governance
7. **Añadir relatedArticles a art-16** — Conectar AI-Augmented Teams con Operating Model y AI-Native

### Prioridad Baja (refinamiento)

8. **Añadir enlace a art-22 desde relatedArticles de art-21** — Enlace bidireccional entre artículos consecutivos del framework
9. **Revisar art-07 — tags con valores incorrectos** — Tags actuales son conceptos mezclados en un string largo, no el formato `[array, de, tags]` estándar
10. **Crear article.json para art-06** — Artículo referenciado pero sin metadata propia

---

## 7. Resumen ejecutivo

| Métrica | Valor |
|---------|-------|
| Total artículos analizados | 22 |
| Artículos con relatedArticles | 11 (50%) |
| Artículos sin relatedArticles | 11 (50%) |
| Artículos sin tags | 15 (68%) |
| Artículos del framework core sin distribución | 0 (Fase 1 completada) |
| Artículos aislados de clusters | 5 (art-11, art-12, art-13, art-14, art-15) |
| Enlace crítico faltante más frecuente | → organizational-memory-activo-ai-native (art-22) |

**Veredicto:** El corpus mejoró su arquitectura de enlazado en el framework central (art-17 → art-22) tras Fase 1. La principal oportunidad ahora es ejecutar Fase 2 para conectar clusters en isla (AI-Ready, Context Engineering intermedio, Governance) y Fase 3 para enriquecer enlazado contextual inline.

---

*Auditoría actualizada. Fase 1 completada en framework core. Próximo paso: ejecutar Fase 2 (clusters desconectados) y Fase 3 (enlaces inline y refinamiento).* 
