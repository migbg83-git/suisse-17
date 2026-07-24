# Archwise — Inventario de Contenido Publicado

> Fecha del análisis: 2026-07-24  
> Fuente de verdad: frontmatter de cada `article.md` en `content/enterprise-ai/`  
> Artículos analizados: 31 publicados (article-01 a article-31)  
> Artículos en preparación: 1 (article-32, solo brief)

---

## Metodología

- Se leyó el frontmatter y el cuerpo de cada `article.md`.
- El **slug efectivo** se extrae del campo `slug:` del frontmatter, no del nombre de carpeta.
- La **intención del artículo** se asigna observando el tipo de problema que resuelve: diagnóstico (¿qué está mal?), definición (¿qué es esto?), comparación (¿en qué se diferencia?), diseño (¿cómo se construye?), implementación (¿cómo se aplica?), governance (¿cómo se gobierna?), operación (¿cómo se opera?), medición (¿cómo se evalúa?).
- Los **clusters** siguen la arquitectura de capas del Framework Archwise, contrastada con los `cluster:` y `tags:` del frontmatter.
- Los **artículos relacionados** se mencionan cuando el texto los referencia explícitamente.

---

## Tabla de inventario

### Article-01
| Campo | Valor |
|-------|-------|
| **Número** | 01 |
| **Título** | Por qué un architecture.md vale más que cien prompts mágicos |
| **Slug** | `architecture-md-vale-mas-que-prompts` |
| **Fecha** | 2026-01-15 |
| **Descripción / tesis** | El contexto es más importante que la formulación del prompt. La documentación correcta multiplica el valor de la IA. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | Knowledge Debt, AI-Ready Systems |
| **Intención** | Definición, diagnóstico |
| **Conceptos estratégicos** | architecture.md, contexto diferencial, prompts vs contexto |
| **Series** | Context Engineering Essentials |
| **Artículos relacionados configurados** | No indicados explícitamente en frontmatter |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-02
| Campo | Valor |
|-------|-------|
| **Número** | 02 |
| **Título** | La deuda técnica que la IA está empezando a revelar |
| **Slug** | `deuda-tecnica-ia-revela` |
| **Fecha** | 2026-02-10 |
| **Descripción / tesis** | La IA actúa como audit involuntario de la calidad del conocimiento explícito. Revela deuda técnica que ya existía. |
| **Cluster principal** | Knowledge Debt |
| **Clusters secundarios** | Context Engineering, AI-Ready Systems |
| **Intención** | Diagnóstico |
| **Conceptos estratégicos** | Technical Debt, Knowledge Debt, organizational knowledge |
| **Series** | Context Engineering Essentials |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-03
| Campo | Valor |
|-------|-------|
| **Número** | 03 |
| **Título** | Qué documentación necesita realmente un LLM |
| **Slug** | `documentacion-necesita-llm` |
| **Fecha** | 2026-03-05 |
| **Descripción / tesis** | No toda documentación ayuda a la IA. La diferencia entre documentar frameworks públicos (que el modelo ya conoce) y decisiones privadas (que solo tu equipo puede proporcionar). |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | Knowledge Debt |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | LLM, contexto diferencial, documentación privada vs pública |
| **Series** | Context Engineering Essentials |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-04
| Campo | Valor |
|-------|-------|
| **Número** | 04 |
| **Título** | La arquitectura vuelve a ser estratégica |
| **Slug** | `arquitectura-vuelve-ser-estrategica` |
| **Fecha** | 2026-04-20 |
| **Descripción / tesis** | Cuando la ejecución de código se abarata, el criterio arquitectónico aumenta su valor. Equipos pequeños con arquitectura explícita superan a equipos grandes sin ella. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | AI-Ready Systems, AI Operating Model |
| **Intención** | Diagnóstico, definición |
| **Conceptos estratégicos** | Enterprise architecture, decision systems, criterio arquitectónico |
| **Series** | Context Engineering Essentials |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-05
| Campo | Valor |
|-------|-------|
| **Número** | 05 |
| **Título** | Technical Debt vs Knowledge Debt: cómo la IA cambia la gestión de deuda en organizaciones |
| **Slug** | `technical-debt-vs-knowledge-debt-ia` |
| **Fecha** | 2026-05-28 |
| **Descripción / tesis** | La IA no solo amplifica la deuda técnica, sino que expone la deuda de conocimiento que antes era invisible. Gestionar el conocimiento explícito es el nuevo reto estratégico. |
| **Cluster principal** | Knowledge Debt |
| **Clusters secundarios** | Context Engineering, Organizational Memory |
| **Intención** | Comparación, diagnóstico |
| **Conceptos estratégicos** | Technical Debt, Knowledge Debt, explicit knowledge, organizational memory |
| **Series** | Context Engineering Essentials |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-06
| Campo | Valor |
|-------|-------|
| **Número** | 06 |
| **Título** | Context Engineering para proyectos legacy: por qué la IA falla en sistemas enterprise reales |
| **Slug** | `context-engineering-legacy-ia-falla` |
| **Fecha** | 2026-05-28 |
| **Descripción / tesis** | La IA no falla en sistemas legacy por limitaciones técnicas, sino porque tropieza con reglas invisibles, conocimiento tácito y memoria institucional. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | Knowledge Debt, AI-Ready Systems, Legacy / Modernización |
| **Intención** | Diagnóstico |
| **Conceptos estratégicos** | Legacy systems, invisible rules, conocimiento tácito, memoria institucional |
| **Series** | Context Engineering Essentials |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt / Capa 1: AI-Ready |

---

### Article-07
| Campo | Valor |
|-------|-------|
| **Número** | 07 |
| **Título** | Framework práctico para Context Engineering en equipos Enterprise |
| **Slug** | `framework-context-engineering-enterprise` |
| **Fecha** | 2026-05-29 |
| **Descripción / tesis** | Framework práctico para implementar Context Engineering: capturar contexto diferencial, reducir Knowledge Debt y mejorar la productividad con IA. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | AI Operating Model |
| **Intención** | Diseño, implementación |
| **Conceptos estratégicos** | Context Engineering framework, context differential, knowledge debt reduction |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-08
| Campo | Valor |
|-------|-------|
| **Número** | 08 |
| **Título** | Plantillas y ejemplos reales de architecture.md para proyectos enterprise |
| **Slug** | `plantillas-ejemplos-architecture-md-enterprise` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | Plantillas y ejemplos reales de architecture.md para proyectos enterprise. El architecture.md como interfaz crítica entre conocimiento tácito y capacidad de las máquinas. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | AI-Augmented Teams |
| **Intención** | Implementación |
| **Conceptos estratégicos** | architecture.md, plantillas, onboarding, documentación viva |
| **Posible pilar** | Capa 2: Contexto explícito y Knowledge Debt |

---

### Article-09
| Campo | Valor |
|-------|-------|
| **Número** | 09 |
| **Título** | Cómo hacer una Architecture Review efectiva en la era de la IA |
| **Slug** | `architecture-review-efectiva-ia` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | La Architecture Review como herramienta estratégica de transferencia de contexto, reducción de riesgos y aceleración de la inteligencia organizacional. |
| **Cluster principal** | Context Engineering |
| **Clusters secundarios** | AI Governance, Knowledge Debt |
| **Intención** | Diseño, governance |
| **Conceptos estratégicos** | Architecture review, context transfer, knowledge debt, governance arquitectónico |
| **Keywords declarados** | architecture review, context engineering, knowledge debt, architecture.md |
| **Posible pilar** | Capa 2 / Capa 3: Governance |

---

### Article-10
| Campo | Valor |
|-------|-------|
| **Número** | 10 |
| **Título** | Architecture Governance en la era de la IA: del comité de arquitectura al contexto compartido |
| **Slug** | `architecture-governance-contexto-compartido` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | El verdadero gobierno arquitectónico es la capacidad de compartir y aplicar contexto diferencial, no control ni burocracia. |
| **Cluster principal** | AI Governance |
| **Clusters secundarios** | Context Engineering, AI Operating Model |
| **Intención** | Governance, definición |
| **Conceptos estratégicos** | Architecture governance, contexto compartido, ownership, transferencia de conocimiento |
| **Posible pilar** | Capa 3: Governance |

---

### Article-11
| Campo | Valor |
|-------|-------|
| **Número** | 11 |
| **Título** | Por qué la mayoría de los sistemas no están preparados para IA |
| **Slug** | `por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | La IA actúa como espejo: revela carencias de contexto, conocimiento, arquitectura y governance que ya existían. Diagnóstico de AI-Readiness. |
| **Cluster principal** | AI-Ready Systems |
| **Clusters secundarios** | Legacy / Modernización, Context Engineering |
| **Intención** | Diagnóstico |
| **Conceptos estratégicos** | AI-Ready, legacy systems, context engineering, governance, knowledge debt |
| **Categoría** | Enterprise AI |
| **Posible pilar** | Capa 1: Diagnóstico AI-Ready |

---

### Article-12
| Campo | Valor |
|-------|-------|
| **Número** | 12 |
| **Título** | Las 7 características de una arquitectura realmente AI-Ready |
| **Slug** | `las-7-caracteristicas-arquitectura-ai-ready` |
| **Fecha** | 2024-06-07 ⚠️ *Anomalía: probablemente 2026-06-07* |
| **Descripción / tesis** | Las organizaciones AI-Ready no destacan por las herramientas, sino por cómo gestionan conocimiento, arquitectura y contexto. |
| **Cluster principal** | AI-Ready Systems |
| **Clusters secundarios** | Context Engineering |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | AI-Ready architecture, 7 características, context management, knowledge transfer |
| **Posible pilar** | Capa 1: Diagnóstico AI-Ready |

---

### Article-13
| Campo | Valor |
|-------|-------|
| **Número** | 13 |
| **Título** | AI-Ready Systems vs Legacy Systems: qué impide realmente adoptar IA |
| **Slug** | `ai-ready-systems-vs-legacy-systems` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | Comparativa definitiva entre organizaciones AI-Ready y sistemas legacy. Las cuatro deudas invisibles como framework de diagnóstico. |
| **Cluster principal** | AI-Ready Systems |
| **Clusters secundarios** | Legacy / Modernización, Knowledge Debt |
| **Intención** | Comparación, diagnóstico |
| **Conceptos estratégicos** | AI-Ready Systems, Legacy Systems, cuatro deudas invisibles, adoption barriers |
| **Posible pilar** | Capa 1: Diagnóstico AI-Ready (artículo pilar de cierre del cluster) |

---

### Article-14
| Campo | Valor |
|-------|-------|
| **Número** | 14 |
| **Título** | Por qué el Prompt Engineering no es suficiente para construir sistemas con IA |
| **Slug** | `por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia` |
| **Fecha** | 2026-05-30 |
| **Descripción / tesis** | El auge y los límites del Prompt Engineering. El verdadero multiplicador de resultados está en el Context Engineering y la arquitectura AI-Ready. |
| **Cluster principal** | Prompt Engineering |
| **Clusters secundarios** | Context Engineering, AI-Ready Systems |
| **Intención** | Diagnóstico, comparación |
| **Conceptos estratégicos** | Prompt Engineering, Context Engineering, prompt debt, AI systems |
| **Posible pilar** | Capa 2: Contexto explícito / Prompt Engineering |

---

### Article-15
| Campo | Valor |
|-------|-------|
| **Número** | 15 |
| **Título** | Context Engineering vs Prompt Engineering: la diferencia que la mayoría de las organizaciones todavía no entiende |
| **Slug** | `context-engineering-vs-prompt-engineering` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | Prompt Engineering optimiza la interacción; Context Engineering optimiza el sistema. Cómo evolucionar de la optimización local a la sistémica. |
| **Cluster principal** | Prompt Engineering / Context Engineering |
| **Clusters secundarios** | AI-Ready Systems |
| **Intención** | Comparación, definición |
| **Conceptos estratégicos** | Context Engineering, Prompt Engineering, AI-Ready, optimización sistémica |
| **Posible pilar** | Capa 2: Prompt Engineering vs Context Engineering |

---

### Article-16
| Campo | Valor |
|-------|-------|
| **Número** | 16 |
| **Título** | AI-Augmented Development Teams: cómo cambia realmente el trabajo de los equipos de software |
| **Slug** | `ai-augmented-development-teams` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | La IA aumenta la productividad individual. Los equipos AI-Augmented aumentan la productividad colectiva. Cómo integrar IA como capacidad colectiva con contexto, arquitectura y governance. |
| **Cluster principal** | AI-Augmented Teams |
| **Clusters secundarios** | AI Operating Model, Context Engineering, AI Governance |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | AI-Augmented teams, productividad colectiva, roles, governance, documentación viva |
| **Posible pilar** | Capa 4: AI Operating Model / AI-Augmented Teams |

---

### Article-17
| Campo | Valor |
|-------|-------|
| **Número** | 17 |
| **Título** | AI-Native Organizations: cómo se construyen organizaciones diseñadas para trabajar con IA |
| **Slug** | `ai-native-organizations` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | La verdadera transformación con IA ocurre cuando la organización rediseña procesos, conocimiento, governance y arquitectura para colaborar estructuralmente con sistemas inteligentes. |
| **Cluster principal** | AI-Native Organizations |
| **Clusters secundarios** | AI Operating Model, AI Governance, Organizational Memory |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | AI-Native, transformación estructural, collaboration, knowledge systems |
| **Categoría** | Enterprise AI |
| **Posible pilar** | Capa 4: AI Operating Model / AI-Native Organizations |

---

### Article-18
| Campo | Valor |
|-------|-------|
| **Número** | 18 |
| **Título** | Por qué fracasan la mayoría de las iniciativas de IA en las empresas |
| **Slug** | `por-que-fracasan-iniciativas-ia` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | Los fracasos en IA empresarial no son tecnológicos, sino organizativos, arquitectónicos y de gestión del conocimiento. Los 10 patrones de fracaso más comunes. |
| **Cluster principal** | AI-Native Organizations |
| **Clusters secundarios** | AI-Ready Systems, Context Engineering, AI Governance |
| **Intención** | Diagnóstico |
| **Conceptos estratégicos** | AI washing, pilots, context engineering, legacy architecture, governance, knowledge tribal |
| **Posible pilar** | Capa 1: Diagnóstico / Transición hacia AI-Native |

---

### Article-19
| Campo | Valor |
|-------|-------|
| **Número** | 19 |
| **Título** | Enterprise AI Transformation Roadmap: cómo evolucionar desde Legacy Systems hasta AI-Native Organizations |
| **Slug** | `enterprise-ai-transformation-roadmap` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | La transformación hacia la IA no es un proyecto, sino una evolución organizativa progresiva. Modelo de madurez y roadmap estratégico. |
| **Cluster principal** | AI-Native Organizations |
| **Clusters secundarios** | AI-Ready Systems, Legacy / Modernización, AI Operating Model |
| **Intención** | Diseño, implementación |
| **Conceptos estratégicos** | AI Transformation Roadmap, maturity model, Legacy Organization, digitized, AI-Native |
| **Posible pilar** | Capa 1: Diagnóstico AI-Ready / Transición |

---

### Article-20
| Campo | Valor |
|-------|-------|
| **Número** | 20 |
| **Título** | AI Governance Framework: cómo gobernar sistemas, equipos y agentes de IA en la empresa |
| **Slug** | `ai-governance-framework` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | La IA solo escala cuando existe governance. Sin governance, la complejidad crece más rápido que el valor generado. Framework, casos y madurez. |
| **Cluster principal** | AI Governance |
| **Clusters secundarios** | AI Operating Model, Agentic AI |
| **Intención** | Governance, definición |
| **Conceptos estratégicos** | AI Governance, ownership, accountability, trazabilidad, governance vs control |
| **Posible pilar** | Capa 3: Governance (artículo pilar) |

---

### Article-21
| Campo | Valor |
|-------|-------|
| **Número** | 21 |
| **Título** | AI Operating Model: cómo organizar equipos, procesos y arquitectura para escalar la IA en la empresa |
| **Slug** | `ai-operating-model-enterprise` |
| **Fecha** | 2026-05-31 |
| **Descripción / tesis** | La IA no escala mediante herramientas, sino mediante coordinación. El AI Operating Model como infraestructura invisible que convierte capacidades aisladas en capacidad organizativa sostenible. |
| **Cluster principal** | AI Operating Model |
| **Clusters secundarios** | AI Governance, AI-Native Organizations |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | AI Operating Model, coordinación, capacidad organizativa, knowledge transfer |
| **Posible pilar** | Capa 4: AI Operating Model (artículo pilar) |

---

### Article-22
| Campo | Valor |
|-------|-------|
| **Número** | 22 |
| **Título** | Organizational Memory: el activo más infravalorado de las organizaciones AI-Native |
| **Slug** | `organizational-memory-activo-ai-native` |
| **Fecha** | 2026-06-01 |
| **Descripción / tesis** | Las organizaciones AI-Native no compiten por modelos, compiten por memoria. La Organizational Memory como infraestructura crítica para escalar IA. |
| **Cluster principal** | Organizational Memory |
| **Clusters secundarios** | Context Engineering, AI Governance, AI Operating Model |
| **Intención** | Definición, diagnóstico |
| **Conceptos estratégicos** | Organizational Memory, memoria institucional, Knowledge Debt, Context Engineering |
| **Artículos referenciados en cuerpo** | article-03, article-05, article-17, article-20, article-21 |
| **Posible pilar** | Capa 5: Organizational Memory (artículo pilar) |

---

### Article-23
| Campo | Valor |
|-------|-------|
| **Número** | 23 |
| **Título** | Memory Architecture: cómo diseñar sistemas que convierten conocimiento organizativo en contexto reutilizable para humanos y agentes de IA |
| **Slug** | `memory-architecture-contexto-reutilizable-enterprise` |
| **Fecha** | 2026-06-02 |
| **Descripción / tesis** | La escalabilidad real de la IA depende de diseñar Memory Architecture como infraestructura organizativa, con capacidad de captura, estructura, recuperación contextual y gobernanza. |
| **Cluster principal** | Organizational Memory |
| **Clusters secundarios** | Context Engineering, AI Governance, Agentic AI |
| **Intención** | Diseño, implementación |
| **Conceptos estratégicos** | Memory Architecture, Knowledge, Organizational Memory, AI-Native, contexto reutilizable |
| **Posible pilar** | Capa 5: Memory Architecture |

---

### Article-24
| Campo | Valor |
|-------|-------|
| **Número** | 24 |
| **Título** | Context Systems: entregar el contexto correcto a la persona e IA correcta en el momento correcto |
| **Slug** | `context-systems-entregar-contexto-correcto-enterprise` |
| **Fecha** | 2026-06-03 |
| **Descripción / tesis** | El problema no es almacenamiento de conocimiento, sino distribución: entregar el contexto correcto en el momento de decisión. Context Debt como coste acumulativo. |
| **Cluster principal** | Organizational Memory / Context Engineering |
| **Clusters secundarios** | Agentic AI, AI Operating Model |
| **Intención** | Definición, diseño |
| **Conceptos estratégicos** | Context Systems, Context Debt, distribución de contexto, momento de decisión |
| **Categoría** | Enterprise AI |
| **Posible pilar** | Capa 6: Context Systems |

---

### Article-25
| Campo | Valor |
|-------|-------|
| **Número** | 25 |
| **Título** | Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen |
| **Slug** | `agentic-ai-enterprise-governance-memoria-arquitectura` |
| **Fecha** | 2026-06-04 |
| **Descripción / tesis** | Los agentes de IA no son el punto de partida de la transformación enterprise. Son la consecuencia de cinco capas de infraestructura organizativa correctamente construida. |
| **Cluster principal** | Agentic AI |
| **Clusters secundarios** | AI Governance, Organizational Memory, AI Operating Model |
| **Intención** | Diagnóstico, diseño |
| **Conceptos estratégicos** | Agentic AI, agente huérfano, infraestructura organizativa, producción enterprise |
| **Posible pilar** | Capa 6: Capacidad agéntica enterprise (artículo pilar) |

---

### Article-26
| Campo | Valor |
|-------|-------|
| **Número** | 26 |
| **Título** | Framework Archwise: por qué la IA no escala con más capacidades sino con mejor integración |
| **Slug** | `framework-archwise-integracion-capacidades-escalar-ia` |
| **Fecha** | 2026-06-04 |
| **Descripción / tesis** | La escalabilidad no falla por ausencia de capacidades. Falla por ausencia de integración. El Framework Archwise como sistema operativo organizativo coherente. |
| **Cluster principal** | Framework Archwise |
| **Clusters secundarios** | AI Operating Model, AI Governance, Organizational Memory, Agentic AI |
| **Intención** | Diseño, definición |
| **Conceptos estratégicos** | Framework Archwise, integración, capacidades aisladas, capacidad operativa, éxito local / fracaso global |
| **Posible pilar** | Framework Archwise (artículo síntesis principal) |

---

### Article-27
| Campo | Valor |
|-------|-------|
| **Número** | 27 |
| **Título** | Arquitectura de adopción del Framework Archwise: por qué el orden de activación determina la escalabilidad real |
| **Slug** | `arquitectura-adopcion-framework-archwise-orden-activacion` |
| **Fecha** | 2026-06-04 |
| **Descripción / tesis** | Las organizaciones fracasan no por falta de capacidades, sino por activarlas fuera de secuencia. Activation Debt y Arquitectura de adopción. |
| **Cluster principal** | Framework Archwise |
| **Clusters secundarios** | Integración y Madurez Operativa, AI Operating Model |
| **Intención** | Diseño, implementación |
| **Conceptos estratégicos** | Activation Debt, orden de activación, secuencia de adopción, arquitectura de adopción |
| **Posible pilar** | Framework Archwise (artículo de adopción) |

---

### Article-28
| Campo | Valor |
|-------|-------|
| **Número** | 28 |
| **Título** | Measurement System para Integración y Madurez Operativa: cómo detectar salud sistémica antes de que la deuda se convierta en estructura |
| **Slug** | `measurement-system-integracion-madurez-operativa` |
| **Fecha** | 2026-06-05 |
| **Descripción / tesis** | Escalar IA no depende de medir más actividad, sino de interpretar señales de salud sistémica. El Measurement System Archwise como arquitectura de evidencia. |
| **Cluster principal** | Integración y Madurez Operativa |
| **Clusters secundarios** | Framework Archwise, AI Operating Model |
| **Intención** | Medición, governance |
| **Conceptos estratégicos** | Measurement System, System Health, Operational Maturity, señales de salud, actividad vs capacidad |
| **Posible pilar** | Integración y Madurez Operativa / Framework Archwise |

---

### Article-29
| Campo | Valor |
|-------|-------|
| **Número** | 29 |
| **Título** | Integridad de Secuencia: Cómo Evaluar la Madurez Operativa con Evidencia y No con Narrativas |
| **Slug** | `integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas` |
| **Fecha** | 2026-06-06 |
| **Descripción / tesis** | La actividad puede crecer mientras la coherencia operativa se deteriora. Cómo distinguir crecimiento real, crecimiento aparente y deuda estructural en incubación. |
| **Cluster principal** | Integración y Madurez Operativa |
| **Clusters secundarios** | Framework Archwise, AI Operating Model |
| **Intención** | Medición, diagnóstico |
| **Conceptos estratégicos** | Sequence Integrity, Context Debt, Activation Debt, Evidence Integrity, Coherence Signals |
| **Posible pilar** | Integración y Madurez Operativa |

---

### Article-30
| Campo | Valor |
|-------|-------|
| **Número** | 30 |
| **Título** | De la integración a la coherencia: el principio rector y el mecanismo arquitectónico que cierran el Framework Archwise |
| **Slug** | `integracion-coherencia-principio-rector-mecanismo-arquitectonico` |
| **Fecha** | 2026-06-08 |
| **Descripción / tesis** | System Coherence como principio rector, Interface Integrity como mecanismo de preservación. Cierre conceptual de la etapa fundacional del Framework Archwise. |
| **Cluster principal** | Framework Archwise |
| **Clusters secundarios** | Integración y Madurez Operativa |
| **Intención** | Diseño, definición |
| **Conceptos estratégicos** | System Coherence, Interface Integrity, Sequence Integrity, Evidence Integrity, Coherence Signals |
| **Posible pilar** | Framework Archwise (cierre fundacional) |

---

### Article-31
| Campo | Valor |
|-------|-------|
| **Número** | 31 |
| **Título** | Del Prompt al Sistema: una arquitectura para equipos virtuales de IA |
| **Slug** | `arquitectura-equipos-virtuales-ia-enterprise` |
| **Fecha** | 2026-06-11 |
| **Descripción / tesis** | La IA empresarial no escala con prompts más sofisticados. Escala cuando se diseñan equipos virtuales especializados gobernados por protocolos de interacción estrictos y un AI Operating Model que trata la orquestación de agentes como activo de ingeniería. |
| **Cluster principal** | Agentic AI / AI Operating Model |
| **Clusters secundarios** | Framework Archwise, Organizational Memory, Prompt Engineering |
| **Intención** | Diseño, implementación |
| **Conceptos estratégicos** | Virtual teams, Prompt Thinking vs System Thinking, Organizational Memory, governance gates, AI Operating Model |
| **Categoría** | Enterprise AI |
| **Capa Framework** | Capa 4: AI Operating Model |
| **Posible pilar** | Agentic AI / AI Operating Model (artículo de síntesis operativa) |

---

## Resumen del corpus

| Métrica | Valor |
|---------|-------|
| Total artículos publicados | 31 |
| Rango de fechas | 2026-01-15 a 2026-06-11 |
| Artículos solo con brief (no publicados) | 1 (article-32) |
| Artículos con fecha anómala | 1 (article-12: "2024-06-07") |
| Artículos sin fecha explícita en frontmatter | 0 (artículo-06 sí tiene fecha: 2026-05-28) |
| Artículos con categoría "Enterprise AI" | 5+ (articles 11, 17, 24, 31…) |
| Artículos en series "Context Engineering Essentials" | 7 (01-07) |

---

## Inconsistencias detectadas

1. **Article-12, fecha "2024-06-07"**: El año 2024 probablemente es un error tipográfico. Dado que el artículo pertenece al cluster AI-Ready Systems y está en la misma secuencia que article-11 (2026-05-30) y article-13 (2026-05-30), lo más probable es que deba ser 2026-06-07. Esta anomalía puede afectar el orden editorial visible en el sitio.

2. **Article-32**: La carpeta `content/enterprise-ai/article-32/` solo contiene `brief.md`. El artículo no está publicado. El brief propone el tema "Coherence Drift: la degradación silenciosa que rompe la continuidad arquitectónica en sistemas enterprise con IA" (aprobado 2026-06-08).

3. **`aparicion-en-busquedas.csv`**: El archivo de Search Console sobre aparición en búsquedas está vacío (solo encabezados). No hay datos de tipos de búsqueda disponibles para este periodo.

4. **Ausencia de slugs para algunos artículos en GSC**: Los artículos `documentacion-necesita-llm` (art-03) y `deuda-tecnica-ia-revela` (art-02) no aparecen en el informe de páginas de Search Console, lo que indica que Google aún no los ha indexado con impresiones relevantes o no los asocia con consultas con datos.

5. **Solapamiento de fechas**: Articles 05 y 06 tienen la misma fecha (2026-05-28). Articles 11, 13, 08, 09, 10 comparten 2026-05-30. Esto sugiere una publicación por lotes y puede afectar la velocidad de indexación.
