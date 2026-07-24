# Archwise — Backlog SEO y Editorial

> Fecha del análisis: 2026-07-24  
> Base: inventario de corpus, mapa de clusters, análisis de Search Console

---

## Marco de priorización

Las propuestas de este backlog se ordenan por prioridad (1 = más urgente, 5 = menor urgencia) y se justifican con evidencia concreta del corpus o de Search Console, no con hipótesis de volumen de búsqueda.

Una prioridad alta no significa "hacer esto esta semana": significa que el impacto potencial es mayor con el menor esfuerzo relativo dadas las señales actuales del sitio.

---

## A. Correcciones o mejoras sobre contenido existente

### A1 — Corregir fecha de article-12
**Artículo**: `las-7-caracteristicas-arquitectura-ai-ready`  
**Problema**: El campo `date` en el frontmatter contiene "2024-06-07". El año 2024 es incompatible con la secuencia editorial (el artículo es parte del cluster AI-Ready Systems publicado en mayo-junio 2026). La fecha correcta probable es 2026-06-07.  
**Impacto SEO**: Una fecha anterior puede afectar la señal de frescura del contenido y el orden en feeds o índices internos.  
**Acción**: Verificar la fecha correcta con el equipo editorial y corregir el frontmatter.  
**Prioridad**: 2  
**Evidencia**: Frontmatter directo: `date: "2024-06-07"`. Todos los demás artículos del cluster tienen fechas 2026.

---

### A2 — Mejorar meta descripción de article-14 (Prompt Engineering)
**Artículo**: `por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia`  
**Problema**: Con posición media 6.3 en Google y 53 impresiones, este artículo es el más cercano a convertirse en fuente de tráfico real. Sin embargo, tiene 0 clics. La descripción actual es técnicamente correcta pero no invita al clic en SERP.  
**Descripción actual**: *"El auge y los límites del Prompt Engineering en IA. Por qué el verdadero multiplicador de resultados está en el Context Engineering y la arquitectura AI-Ready. Casos reales, marcos conceptuales y lecciones para organizaciones enterprise."*  
**Problema específico**: Es informativa pero genérica. No genera urgencia ni curiosidad. En posición 6-7, el snippet compite con resultados en posiciones 1-5 que probablemente tengan más autoridad de dominio.  
**Acción recomendada**: Revisar y mejorar el campo `description` del frontmatter para hacerlo más específico y orientado a la necesidad del lector. No cambiar el contenido del artículo.  
**Prioridad**: 1  
**Evidencia**: 53 impresiones con posición 6.3 y 0 clics. Máxima prioridad para mejorar CTR.

---

### A3 — Mejorar meta descripción de article-15 (Context Engineering vs PE)
**Artículo**: `context-engineering-vs-prompt-engineering`  
**Problema**: Misma situación que A2. Posición 6.5 con 36 impresiones y 0 clics.  
**Descripción actual**: *"Por qué Prompt Engineering y Context Engineering no compiten, cómo evolucionar de la optimización local a la sistémica y qué marcos permiten construir sistemas AI-Ready. Casos reales, frameworks y recomendaciones prácticas para líderes enterprise."*  
**Acción recomendada**: Revisar y mejorar `description` para que capture mejor la diferenciación que el lector busca.  
**Prioridad**: 1  
**Evidencia**: 36 impresiones con posición 6.5 y 0 clics.

---

### A4 — Mejorar meta descripción de article-21 (AI Operating Model)
**Artículo**: `ai-operating-model-enterprise`  
**Problema**: Posición 5.2 con 6 impresiones y 0 clics. Hay señal de que "ai operating model" aparece en posición 3 en consultas. El potencial es alto si el volumen de búsqueda crece.  
**Acción recomendada**: Revisar `description` para asegurarse de que incluye los términos "AI Operating Model" de forma natural y atractiva para el perfil de CTO/arquitecto.  
**Prioridad**: 2  
**Evidencia**: Consulta "ai operating model" en posición 3. Página con posición 5.2 en GSC.

---

### A5 — Revisar indexación de articles 02 y 03
**Artículos**: `deuda-tecnica-ia-revela` (art-02) y `documentacion-necesita-llm` (art-03)  
**Problema**: Ninguno de los dos aparece en el informe de páginas de Search Console, lo que sugiere que Google no los ha indexado con suficientes impresiones o hay un problema técnico.  
**Posibles causas**: Fecha de publicación anterior al inicio del historial GSC (art-02: 2026-02-10, art-03: 2026-03-05), problemas de indexación o simplemente bajo volumen de búsqueda para sus términos.  
**Acción recomendada**: Verificar en Google Search Console (URL Inspection) si estas URLs están indexadas. Comprobar que el sitemap las incluye.  
**Prioridad**: 3  
**Evidencia**: Ausentes del informe `paginas.csv`.

---

## B. Mejoras de enlazado interno

### B1 — Crear enlaces desde articles 20/21 hacia el cluster de Context Engineering
**Situación**: Los artículos de AI Governance (art-20) y AI Operating Model (art-21) son de las páginas mejor posicionadas, pero no enlazan de forma explícita hacia los artículos de Context Engineering (especialmente art-07, art-14, art-15).  
**Impacto esperado**: Transferir autoridad desde páginas con más visibilidad SEO hacia el cluster de Context Engineering. Ayuda especialmente a art-14 y art-15 que están cerca del top 5.  
**Artículos que deben recibir enlaces**: art-14, art-15, art-07  
**Artículos desde los que añadir enlaces**: art-20, art-21, art-26  
**Prioridad**: 2  
**Evidencia**: Context Engineering tiene 6+ artículos bien posicionados pero con bajo tráfico. Necesitan más señal de autoridad interna.

---

### B2 — Crear enlace desde article-31 hacia articles 22 y 23
**Situación**: Article-31 referencia "Organizational Memory" como concepto central (executive summary menciona explícitamente "Memoria Organizacional"), pero no enlaza directamente hacia art-22 ni art-23.  
**Impacto esperado**: Mejorar la autoridad del cluster de Organizational Memory y guiar al lector hacia la profundización.  
**Artículos que deben recibir enlaces**: art-22, art-23  
**Artículos desde los que añadir**: art-31  
**Prioridad**: 3  
**Evidencia**: Article-31 tiene 26 impresiones y 1 clic. Articles 22 y 23 tienen 5-16 impresiones pero pueden beneficiarse de más autoridad entrante.

---

### B3 — Crear enlace desde art-13 hacia art-19 (AI Transformation Roadmap)
**Situación**: Article-13 (`ai-ready-systems-vs-legacy-systems`) es la página con más clics del corpus (1 clic, 49 impresiones, pos 35). Es probable que sea la entrada de muchos lectores nuevos. Debería enlazar hacia art-19 que proporciona el siguiente paso lógico (roadmap de transformación).  
**Prioridad**: 3  
**Evidencia**: Lógica narrativa y flujo de lectura del cluster AI-Ready → Transformación.

---

### B4 — Añadir enlace desde art-25 hacia art-22 (Agentic AI → Organizational Memory)
**Situación**: Article-25 argumenta que los agentes fallan sin infraestructura organizativa, pero no enlaza explícitamente hacia el cluster de Organizational Memory donde Archwise desarrolla esa infraestructura.  
**Prioridad**: 3  
**Evidencia**: Coherencia temática entre ambos clusters.

---

### B5 — Añadir sección "Artículos relacionados" o "Continúa leyendo" en art-14 y art-15
**Situación**: Ambos artículos sobre Prompt Engineering vs Context Engineering son puertas de entrada potenciales para lectores nuevos, pero si no hay enlaces hacia el resto del corpus, el lector abandona sin profundizar.  
**Artículos que deben enlazar**: art-07, art-08, art-01, art-21  
**Prioridad**: 2  
**Evidencia**: Ambas páginas tienen las posiciones medias más altas del corpus (< 7) y 0 clics de retorno interno.

---

## C. Posibles artículos nuevos

> **Nota importante**: Estos artículos NO deben redactarse todavía. Son propuestas estratégicas basadas en huecos editoriales del corpus y señales de Search Console. La decisión de escribirlos requiere revisión editorial independiente.

---

### C1 — Cómo auditar y cuantificar Knowledge Debt en tu organización
| Campo | Valor |
|-------|-------|
| **Título provisional** | Cómo auditar y cuantificar Knowledge Debt en tu organización |
| **Búsqueda / necesidad** | Lectores que llegan a art-05 quieren saber cómo medir y gestionar KD operativamente |
| **Cluster** | Knowledge Debt |
| **Artículo pilar que refuerza** | art-05 (`technical-debt-vs-knowledge-debt-ia`) |
| **Artículos desde los que recibir enlaces** | art-05, art-06, art-22 |
| **Motivo estratégico** | "Knowledge debt" está en posición 1 en GSC. El artículo pilar diagnostica el problema pero no da herramientas de medición. Un artículo de auditoría retiene al lector que ya tiene el diagnóstico y quiere la solución operativa. |
| **Prioridad** | 2 |

---

### C2 — Guía de implementación de Organizational Memory: de cero al primer sistema funcional
| Campo | Valor |
|-------|-------|
| **Título provisional** | Guía de implementación de Organizational Memory: de cero al primer sistema funcional |
| **Búsqueda / necesidad** | Lectores de art-22 y art-23 que quieren implementar lo que han leído |
| **Cluster** | Organizational Memory |
| **Artículo pilar que refuerza** | art-22 (`organizational-memory-activo-ai-native`) |
| **Artículos desde los que recibir enlaces** | art-22, art-23, art-24, art-25 |
| **Motivo estratégico** | El cluster de Organizational Memory tiene buenas posiciones (6-7) pero el corpus solo tiene definición y arquitectura. La guía de implementación cierra el loop y aumenta el tiempo de lectura en el cluster. |
| **Prioridad** | 3 |

---

### C3 — AI Governance para sistemas agénticos: gobernar agentes autónomos en producción enterprise
| Campo | Valor |
|-------|-------|
| **Título provisional** | AI Governance para sistemas agénticos: gobernar agentes autónomos en producción enterprise |
| **Búsqueda / necesidad** | Líderes técnicos que están implementando Agentic AI y necesitan un marco de governance específico |
| **Cluster** | AI Governance + Agentic AI |
| **Artículo pilar que refuerza** | art-20 (`ai-governance-framework`) y art-25 (`agentic-ai-enterprise`) |
| **Artículos desde los que recibir enlaces** | art-20, art-25, art-31 |
| **Motivo estratégico** | El cluster de AI Governance tiene posición 7.3 para art-20. El territorio de governance para agentes es un hueco editorial claro que ningún artículo del corpus cubre. Además, es un tema emergente con creciente demanda. |
| **Prioridad** | 3 |

---

### C4 — De AI-Augmented a AI-Native: cómo hacer la transición organizativa real
| Campo | Valor |
|-------|-------|
| **Título provisional** | De AI-Augmented a AI-Native: cómo hacer la transición organizativa real |
| **Búsqueda / necesidad** | Lectores de art-16 y art-17 que quieren entender el paso siguiente |
| **Cluster** | AI-Native Organizations + AI-Augmented Teams |
| **Artículo pilar que refuerza** | art-17 (`ai-native-organizations`) |
| **Artículos desde los que recibir enlaces** | art-16, art-17, art-19, art-21 |
| **Motivo estratégico** | Art-16 (42 impresiones, pos 55) indica demanda para el territorio AI-Augmented Teams. La transición hacia AI-Native es el puente lógico y Archwise no tiene artículo que lo cubra explícitamente. |
| **Prioridad** | 4 |

---

### C5 — Orquestación multi-agente en la empresa: arquitectura, protocolos y governance
| Campo | Valor |
|-------|-------|
| **Título provisional** | Orquestación multi-agente en la empresa: arquitectura, protocolos y governance |
| **Búsqueda / necesidad** | Equipos técnicos implementando sistemas con múltiples agentes en producción |
| **Cluster** | Agentic AI |
| **Artículo pilar que refuerza** | art-25 y art-31 |
| **Artículos desde los que recibir enlaces** | art-25, art-31, art-20 |
| **Motivo estratégico** | El cluster de Agentic AI tiene solo 2 artículos y es el territorio con mayor interés editorial actual. Art-31 cubre equipos virtuales pero no la orquestación desde el punto de vista de arquitectura de sistemas. |
| **Prioridad** | 3 |

---

### C6 — Por qué el Framework Archwise: guía de entrada para lectores sin contexto previo
| Campo | Valor |
|-------|-------|
| **Título provisional** | Qué es el Framework Archwise y cómo usarlo: guía de entrada para líderes de transformación |
| **Búsqueda / necesidad** | Lectores que llegan por primera vez al sitio y no saben por dónde empezar |
| **Cluster** | Framework Archwise |
| **Artículo pilar que refuerza** | art-26 (`framework-archwise-integracion-capacidades-escalar-ia`) |
| **Artículos desde los que recibir enlaces** | Homepage, art-26, /framework |
| **Motivo estratégico** | La página /framework tiene 15 impresiones pero CTR 0%. Art-26 tiene posición 5.3. El sitio necesita un artículo de entrada más accesible que explique el framework sin asumir que el lector conoce los 26 artículos previos. |
| **Prioridad** | 4 |

---

## D. Temas que no deberían abordarse todavía

### D1 — Contenido en inglés
**Motivo**: El corpus tiene identidad editorial sólida en español. Iniciar contenido en inglés requeriría una estrategia de SEO independiente, doble mantenimiento y riesgo de fragmentar la audiencia. La señal de 200 impresiones desde EE.UU. no es suficiente para justificar la inversión.  
**Condición de revisión**: Cuando el tráfico orgánico en español supere los 1.000 clics/mes.

---

### D2 — Artículos sobre herramientas específicas (ChatGPT, Copilot, Claude, etc.)
**Motivo**: Archwise se diferencia precisamente por no ser un blog de herramientas. Artículos sobre herramientas específicas diluirían el posicionamiento editorial y competirían con miles de recursos más autorizados en ese territorio.  
**Condición de revisión**: Si en algún momento se decide un formato de "análisis de herramientas desde la perspectiva del Framework Archwise", pero requiere diseño editorial separado.

---

### D3 — Contenido sobre AI Regulation / AI Act
**Motivo**: El corpus de Archwise está posicionado en arquitectura organizativa y escalabilidad de IA, no en compliance regulatorio. Un artículo sobre AI Act o regulación europea requiere expertise legal que no es el differentiator de Archwise y puede desviar el foco editorial.  
**Condición de revisión**: Si aparecen señales de búsqueda claras que conecten "AI governance" con regulación desde la audiencia de Archwise.

---

### D4 — Comparativas con competidores nombrados
**Motivo**: Las consultas "alteria vs manifest ai" detectadas en GSC son ruido, no señal. Crear contenido de comparativa con otras empresas o frameworks atraería tráfico no cualificado y podría crear problemas editoriales y de reputación.  
**Condición de revisión**: Nunca recomendado.

---

### D5 — Contenido sobre machine learning técnico o MLOps
**Motivo**: El corpus de Archwise cubre la capa organizativa y arquitectónica, no la capa técnica de entrenamiento de modelos, pipelines de datos o MLOps. Entrar en ese territorio compite con recursos mucho más especializados y alejará a la audiencia de perfil CTO/arquitecto organizativo.

---

## Resumen de prioridades

| ID | Tipo | Título | Prioridad |
|----|------|--------|-----------|
| A2 | Mejora | Mejorar meta descripción art-14 (Prompt Eng.) | 1 |
| A3 | Mejora | Mejorar meta descripción art-15 (Context Eng. vs PE) | 1 |
| A1 | Corrección | Corregir fecha art-12 (2024 → 2026) | 2 |
| A4 | Mejora | Mejorar meta descripción art-21 (AI Op. Model) | 2 |
| B1 | Enlazado | Añadir enlaces desde arts-20/21 hacia Context Eng. | 2 |
| B5 | Enlazado | Añadir "continúa leyendo" en art-14 y art-15 | 2 |
| C1 | Artículo nuevo | Auditar y cuantificar Knowledge Debt | 2 |
| A5 | Verificación | Comprobar indexación arts-02 y 03 | 3 |
| B2 | Enlazado | Enlace art-31 → arts-22/23 | 3 |
| B3 | Enlazado | Enlace art-13 → art-19 | 3 |
| B4 | Enlazado | Enlace art-25 → art-22 | 3 |
| C2 | Artículo nuevo | Guía implementación Organizational Memory | 3 |
| C3 | Artículo nuevo | AI Governance para sistemas agénticos | 3 |
| C5 | Artículo nuevo | Orquestación multi-agente enterprise | 3 |
| C4 | Artículo nuevo | Transición AI-Augmented → AI-Native | 4 |
| C6 | Artículo nuevo | Guía de entrada al Framework Archwise | 4 |
