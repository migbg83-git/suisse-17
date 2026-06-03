# Notes — Article 25: Agentic AI en la empresa

Fecha: 2026-06-04  
Estado: Notas para outline.md y redacción  
Fuentes: brief.md, articles 20-24, AI-HANDOFF.md  

---

## Síntesis de prerequisitos (no repetir en artículo, pero anclar explícitamente)

### Article 20: AI Governance Framework — "El agente requiere límites explícitos"

**Aporte a article-25:**
- Governance como "ownership + accountability + decision rights + policy + human-in-the-loop + auditability"
- Escalada exponencial de complejidad con múltiples agentes
- Agent Governance como capas de: ownership claro, decision rights por dominio, human-in-the-loop en casos límite, auditability de cada acción

**Concepto clave nuevo para article-25:**
- Un agente sin governance no es un "sistema autónomo eficiente"  
- Es un "generador de complejidad descontrolada"
- Ejemplo enterprise: agentes que toman decisiones de crédito sin límites escalados lleva a concentración de riesgos no auditables

**Anclaje explícito requerido:**
"Article-24 define cómo entregar contexto. Article-25 debe responder: ¿qué hace un agente cuando recibe ese contexto sin governance definido? Respuesta: replica decisiones sin criterio, entra en conflicto con límites organizativos, escala errores."

---

### Article 21: AI Operating Model — "El agente requiere ownership organizativo"

**Aporte a article-25:**
- Operating Model como "ciclo: governance → coordination → memory → execution → learning"
- AI Operating Model define roles, ownership distribuido, procesos coordinados
- Diferencia entre "agente como experimento aislado" vs "agente como capacidad organizativa"

**Concepto clave nuevo para article-25:**
- Sin Operating Model, el agente existe pero NO PERTENECE A NADIE en operación real
- Aparece la pregunta administrativa: ¿quién es propietario del agente? ¿Quién lo actualiza? ¿Quién responde si falla? ¿Quién arbitral conflictos entre el agente y procesos humanos?
- Ejemplo enterprise: agentes de customer support sin ownership claro generan fricción interequipos; cada área quiere dirlo al cliente, pero nadie quiere ser responsable del error

**Anclaje explícito requerido:**
"Un agente empresarial no es una herramienta técnica. Es una entidad operativa con ownership, roles, ciclos de cambio, entrenamiento y supervisión. El Operating Model define cómo todo eso se coordina. Sin él, tienes herramientas sueltas, no capacidad."

---

### Article 22: Organizational Memory — "El agente requiere conocimiento persistente"

**Aporte a article-25:**
- Organizational Memory como infraestructura: capas de capture, structuring, governance, retrieval, reuse
- Knowledge Debt explícito: decisiones no documentadas, contexto perdido, onboarding dependiente de expertos

**Concepto clave nuevo para article-25:**
- Un agente es una entidad que ENVEJECE si no tiene memoria
- Sin memory, el agente en mes 1 es brillante; en mes 12 es un legado heredado que nadie entiende
- El agente no aprende del histórico organizativo: toma decisiones desconectadas del aprendizaje colectivo
- Ejemplo enterprise: agentes de compliance que no acceden a cambios de regulación porque la memoria organizativa no captura excepciones regulatorias; el agente sigue aplicando reglas obsoletas

**Anclaje explícito requerido:**
"Los agentes sin Organizational Memory son sistemas de contexto incompleto y no evolucionan. No reutilizan lo que la organización ya sabe. La memoria organizativa es lo que permite que un agente en month-12 siga siendo mejor que un agente en month-1."

---

### Article 23: Memory Architecture — "El agente requiere recuperación estructurada de conocimiento"

**Aporte a article-25:**
- Memory Architecture como diseño explícito del sistema de recuperación
- Diferencia entre "documentación existe" y "documentación es recuperable en operación"
- Cinco capas: capture → structuring → governance → retrieval → reuse

**Concepto clave nuevo para article-25:**
- Sin Memory Architecture, el agente tiene acceso a memoria pero NO ACCESO A CONTEXTO UTILIZABLE
- La diferencia es critical: RAG sobre documentos caóticos = ruido. RAG sobre memoria arquitecturada = decisiones informadas
- Ejemplo enterprise: agente de decisión de crédito que accede a "todos los documentos históricos" tarda 30s en extraer contexto de 5 documentos contradictorios; el mismo agente sobre memoria arquitecturada recupera criterios en 300ms

**Anclaje explícito requerido:**
"Memory Architecture no es lujo administrativo. Es la diferencia entre agentes que 'tienen información' y agentes que 'pueden operar bien'. Sin arquitectura de memoria, los agentes son sistemas de latencia alta y contexto bajo."

---

### Article 24: Context Systems — "El agente requiere contexto exacto en el momento exacto"

**Aporte a article-25:**
- Context Systems como "entrega dinámica de contexto" a personas y agentes
- Context Routing: quién recibe qué contexto, cuándo, y bajo qué gobernanza
- Tres capas: memoria → arquitectura → entrega

**Concepto clave nuevo para article-25:**
- Los agentes no son "consumidores pasivos" de memoria
- Son "actores que REQUIEREN contexto exacto para operar SIN ERRORES"
- Context Systems es lo que hace que un agente de decisión use contexto correcto (política vigente, excepciones activas, decisiones previas) en lugar de contexto obsoleto o contradictorio
- Ejemplo enterprise: agente que empieza a procesar una solicitud recibe automáticamente: políticas vigentes, cambios de usuario reciente, decisiones similares previas, límites de riesgo por dominio; esto es Context Systems en acción

**Anclaje explícito requerido:**
"Context Systems es el momento en el que TODAS las capas previas (governance, operating model, memory, memory architecture) se censan en un momento operativo real: ayudar a un agente a decidir bien. Article-25 debe explicar qué pasa cuando ese sistema falla y cómo se diseña para que los agentes NO OPEREN A CIEGAS."

---

## Los 10 temas clave — Conocimiento nuevo para article-25

### 1. AGENT BOUNDARIES — Límites operativos explícitos

**Concepto:**
Un agente sin límites es un acelerador de riesgo, no de capacidad.

Agent Boundaries son los límites explícitos sobre qué SÍ puede hacer el agente y qué NO bajo ninguna circunstancia.

**Tipos de límites:**
- **Límites de acción**: qué operaciones está autorizado a realizar (crear, modificar, eliminar, escalar)
- **Límites de datos**: a qué información tiene acceso (contexto sensible, datos de clientes, decisiones internas)
- **Límites de decisión**: en qué rangos puede tomar decisiones autónomas vs debe escalar (montos de dinero, ranking de prioridad, decisiones de riesgo)
- **Límites temporales**: con qué frecuencia puede actuar (una vez por día, permanentemente, durante ventanas específicas)
- **Límites de dominio**: en qué áreas de la empresa opera (solo pagos, o también cobranza; solo logística, o también customer service)

**Realidad enterprise:**
- Muchos agentes operan sin límites formalizados
- Los límites aparecen como incidentes post-mortem, no como diseño previo
- Patología: "el agente hizo X porque nadie dijo que no podía hacer X"

**Relación con governance (article 20):**
Las definiciones de límites NO SON TÉCNICAS. Son definiciones de governance y ownership.
AI Governance Framework define decision rights; los límites del agente son la implementación de esos decision rights.

**Elemento nuevo para article-25:**
Proponer un framework de "Agent Boundary Definition Matrix":
- Eje 1: tipo de acción (creación, modificación, escalada, eliminación)
- Eje 2: tipo de datos (públicos, internos, sensibles, regulados)
- Eje 3: nivel de riesgo (bajo, medio, alto, crítico)
- Resultado: matriz clara de "el agente SÍ puede" vs "el agente DEBE ESCALAR" vs "el agente NUNCA PUEDE"

**Preguntas de auditoría:**
- ¿Tiene el agente una lista formal de acciones permitidas?
- ¿Qué sucede si el agente intenta hacer algo fuera de límites? ¿Se detiene? ¿Se registra? ¿Se escala?
- ¿Han revisado ustedes los últimos 10 incidentes para ver cuántos fueron violaciones de límites no formalizados?

---

### 2. AGENT DECISION RIGHTS — Autoridad para decidir

**Concepto:**
Decision Rights en governance son quién decide QUÉ bajo reglas organizativas. Agent Decision Rights son qué puede decidir un agente sin intervención humana y bajo qué condiciones.

**Modelo:**
```
Nivel 0: El agente no decide. Solo recomienda.
Nivel 1: El agente decide si criterios X, Y, Z se cumplen. Si no, escala.
Nivel 2: El agente decide hasta límite de riesgo Z. Por encima, escala.
Nivel 3: El agente decide siempre, pero registra en log crítico.
Nivel 4: El agente decide y puede modificar parámetros de política [NO debería existir]
```

**Realidad enterprise:**
- "Decision Rights ambiguos" es la causa #1 de conflictos agente-equipo humano
- Un agente califica leads como "hot". ¿Quién decide si esa clasificación es definitiva o consultiva? ¿El equipo de ventas? ¿El agente?
- Síntoma: "El agente debería haber hecho X, pero hizo Y"

**Relación con governance (article 20):**
Article 20 define governance como "ownership + accountability + decision rights"  
Article 25 debe responder: ¿cómo el agente entiende cuál es su decision rights?

**Elemento nuevo para article-25:**
Concepto de "Agent Authority Specification"
- No es lo mismo "el agente puede recomendar" que "el agente puede decidir"
- La diferencia determina si necesitas human-in-the-loop o no
- Recomendación → requiere validación → human-in-the-loop obligatorio
- Decisión autónoma → requiere governance de límites → control por auditoría

**Preguntas de auditoría:**
- ¿Puede el agente tomar decisiones que afecten ingresos? Si sí, ¿cuál es el límite?
- ¿Qué % de decisiones del agente son autónomas vs requieren validación?
- ¿Qué sucede si el agente toma una decisión fuera de sus decision rights? ¿Se ha formalizado la respuesta escalada?

---

### 3. AGENT OWNERSHIP — Quién es responsable

**Concepto:**
En governance, ownership es quién es responsable de un sistema. En agentes, es lo mismo, pero a veces NO ESTÁ DEFINIDO.

Un agente puede estar "en producción" sin que nadie tenga ownership explícito.

**Modelo de ownership:**
- **Propietario del agente** (quién es responsable del diseño y evolución): típicamente un PM o Tech Lead
- **Propietario operativo** (quién lo supervisa en día a día): típicamente un Ops/SRE
- **Propietario de gobernanza** (quién audita que cumpla límites y políticas): típicamente Governance o Compliance
- **Propietario de memoria** (quién mantiene el conocimiento que usa el agente): típicamente arquitectura o knowledge manager

En organizaciones AI-Native, pueden ser los MISMOS roles para MÚLTIPLES agentes. Pero la claridad es obligatoria.

**Realidad enterprise:**
- Agentes "huérfanos" en producción cuyo owner está fuera o ya no está
- Síntoma: "¿Quién mantiene ese agente? No lo sabemos. Hace años que funciona"
- Riesgo: si el agente falla, nadie responde

**Relación con operating model (article 21):**
Article 21 define operating model como coordinación de roles. Ownership del agente es un rol en ese operating model.

**Elemento nuevo para article-25:**
Matriz de "Agent Ownership in Operating Model"
```
Agente X
├── Product Owner: [nombre] — responsable de roadmap y capacidades
├── Tech Lead: [nombre] — responsable de integración y arquitectura
├── Ops/SRE: [nombre] — responsable de SLAs y uptime
├── Governance: [nombre] — responsable de auditoría y límites
└── Knowledge Owner: [nombre] — responsable de memoria que usa el agente
```

Cuando hay gap o incertidumbre, hay riesgo.

**Preguntas de auditoría:**
- ¿Quién es el propietario del agente en cada dimensión?
- ¿Qué sucede si el propietario se va de la empresa?
- ¿Quién recibe alertas si el agente genera resultados anómales?
- ¿Quién tiene accountability si el agente causa un incidente?

---

### 4. AGENT ACCOUNTABILITY — Quién responde si algo falla

**Concepto:**
Accountability es la trazabilidad y la responsabilidad por acciones y resultados.

Con agentes, se complica: ¿quién es responsable de una mala decisión del agente? ¿El agente? ¿El owner? ¿El equipo que lo entrenó? ¿El que lo deployó?

**Modelo:**
```
Mala decisión del agente
├── IF causado por falta de governance (límites no aplicados)
│   → responsable: Governance Owner
├── IF causado por falta de memoria/contexto
│   → responsable: Memory/Knowledge Owner
├── IF causado por falta de supervisión operativa
│   → responsable: Ops/SRE Owner
├── IF causado por falta de capacidad del modelo
│   → responsable: Product/ML Owner
└── IF causado por política no comunicada
    → responsable: Governance + Communication
```

**Realidad enterprise (antipatrón):**
- "El agente se equivocó" es la conclusión, no la investigación
- No hay trazabilidad clara de por qué el agente decidió X
- Resultado: no hay aprendizaje, solo blame

**Relación con governance (article 20):**
Article 20 define accountability como "transparencia y auditoría"  
Para agentes: auditoría de cada acción, trazabilidad de decisión, registros de contexto usado

**Elemento nuevo para article-25:**
Concepto de "Agent Audit Trail"
Cada decisión del agente debe registrar:
- qué información recibió (contexto)
- qué límites verificó
- en qué momento decidió
- qué criterios aplicó
- si escaló o no, y por qué

Sin esto, accountability es imposible.

**Preguntas de auditoría:**
- ¿Tiene el agente registros de auditoría?
- ¿Pueden reconstruir por qué el agente tomó una decisión X hace 3 meses?
- ¿Quién puede auditar esos registros?
- ¿Qué sucede si los registros revelan que el agente violó una política?

---

### 5. AGENT ESCALATION — Cuándo y cómo escalar

**Concepto:**
Escalation es el mecanismo mediante el cual un agente reconoce que una situación está fuera de su autoridad y la remite a un humano o a un agente de mayor jerarquía.

**Tipos de escalación:**
- **Escalación por límites**: "Esta solicitud supera mi límite de aprobación, pasándola a humano"
- **Escalación por incertidumbre**: "Los criterios son ambiguos, necesito intervención"
- **Escalación por conflicto**: "Mi decisión contradice la de otro agente; necesito árbitro"
- **Escalación por riesgo**: "La situación tiene riesgo elevado no contemplado en mis límites"
- **Escalación por política**: "Esta política no está clara; necesito interpretación"

**Realidad enterprise (antipatrón frecuente):**
- Agentes que NO escalan cuando deberían (toman decisiones fuera de autoridad)
- Agentes que escalan TODO (no asumen responsabilidad ni en casos simples)
- Agentes que escalan a nadie (decisión se queda en limbo o se ignora)

**Relación con governance + operating model (articles 20, 21):**
Escalation es el mecanismo de coordinación entre agentes y governance.

**Elemento nuevo para article-25:**
Framework de "Escalation Matrix"
```
Tipo de situación | Criterio de escalación | A quién escalar | SLA de respuesta
Límite superado | moneda > $X | CFO | 4 horas
Conflicto entre agentes | decision contradictoria | Orchestrator Agent | 5 min
Política ambigua | ambigüedad detectada | Governance + Policy Owner | 24 horas
Riesgo no clasificado | riesgo > threshold | Risk Office | 2 horas
```

**Preguntas de auditoría:**
- ¿Qué % de decisiones del agente requieren escalación?
- ¿A cuántas escalaciones se da respuesta efectiva?
- ¿Cuál es el tiempo medio de resolución de una escalación?
- ¿Qué sucede si el agente escala y nadie responde?

---

### 6. AGENT RELIABILITY — Consistencia y confianza

**Concepto:**
Reliability de un agente no es solo "no se cae técnicamente". Es:
- **Consistencia de decisiones**: ¿el agente toma la misma decisión en casos similares?
- **Confiabilidad en contexto**: ¿el agente usa contexto relevante o toma decisiones de forma aislada?
- **Predictibilidad**: ¿se puede anticipar cómo el agente reaccionará ante una situación?
- **Recuperabilidad**: ¿qué hace el agente si encuentra un estado que no entiende?

**Realidad enterprise:**
- Agentes que"funcionan" pero sin consistencia: misma entrada, distintos outputs
- Síntoma: "El agente a veces aprueba, a veces rechaza, sin que entendamos por qué"

**Relación con memory architecture (article 23):**
Reliability depende de acceso consistente a memoria arquitecturada. Sin architectura de memoria, el agente trabaja "a ciegas" en algunos casos y con contexto en otros.

**Elemento nuevo para article-25:**
Métricas de "Agent Reliability":
- Decision consistency rate: % de decisiones que son consistentes en casos similares
- Context availability: % de decisiones donde el agente accedió a memoria relevante
- Error recovery: % de situaciones fuera del modelo donde el agente escaló vs asumió
- Audit trail completeness: % de decisiones con registro claro de contexto usado

**Preguntas de auditoría:**
- ¿Has comparado decisiones del agente en casos similares? ¿Son consistentes?
- ¿Qué sucede cuando el agente encuentra un contexto que no conoce?
- ¿Cuál es la tasa de redecisión (decisiones que algún humano revierte)?
- ¿El agente depende de una persona o un dato específico para funcionar bien?

---

### 7. AGENT SUPERVISION — Vigilancia y control

**Concepto:**
Supervision es la vigilancia continua del agente para asegurar que:
- Opera dentro de límites
- Toma decisiones consistentes
- No degrada en calidad
- No "se pierde" en contexto

**Niveles de supervisión:**
- **Real-time monitoring**: alertas si el agente hace algo fuera de límites
- **Periodic review**: auditoría regular de decisiones (semanal, mensual)
- **Anomaly detection**: alertas de patrones inusuales
- **Human-spot-check**: curación manual de decisiones críticas

**Realidad enterprise:**
- Agentes "en producción" sin supervisión formal
- Síntoma: incidente detectado meses después, "¿por qué nadie se dio cuenta?"

**Relación con operating model + governance (articles 20, 21):**
Supervision es parte de Operating Model (ciclo execute → learning) y de Governance (auditoría).

**Elemento nuevo para article-25:**
Framework de "Agent Supervision Architecture"
```
Agente X
├── Real-time Monitoring: alertas en dashboard
├── Weekly Review: muestra de 100 decisiones; score calidad
├── Monthly Audit: análisis de anomalías y desviaciones
└── Quarterly Learning: retroalimentación al modelo
```

**Preguntas de auditoría:**
- ¿Quién supervisa el agente actualmente?
- ¿Con qué frecuencia se revisan las decisiones del agente?
- ¿Qué métricas usan para determinar si el agente está "funcionando bien"?
- ¿Qué sucede si la calidad del agente degrada?

---

### 8. HUMAN-IN-THE-LOOP (HITL) — Validación humana en decisiones críticas

**Concepto:**
HITL es la integración de validación o supervisión humana en momentos específicos de la cadena de decisión del agente.

**Tipos de HITL:**
- **Approval-before**: el humano aprueba antes de que el agente actúe (lento, pero control máximo)
- **Approval-after**: el humano valida después de actuar (rápido, riesgo de error)
- **Exception-handling**: HITL solo cuando el agente detecta incertidumbre (balance)
- **Auction/Arbitration**: múltiples agentes o humanos sugieren, un humano decide conflictos (complejo)

**Realidad enterprise:**
- "Human-in-the-loop" se entiende como "siempre requiere validación humana" (error: eso no es HITL, es automación manual)
- HITL bien diseñado es MAYORÍA de decisiones autónomas + MINORÍA de validación humana en casos críticos

**Relación con governance (article 20):**
HITL es la implementación operativa de governance; el lugar donde los límites de decision rights se aplican.

**Elemento nuevo para article-25:**
Matriz de "HITL Decision": para cada tipo de decisión, establecer:
- ¿HITL requerido? Sí / No
- Si sí: ¿approval-before o approval-after?
- ¿Criterio de entrada a HITL? (moneda > X, conflicto detectado, etc.)
- ¿SLA de respuesta del humano?
- ¿Qué sucede si el humano no responde en SLA?

**Preguntas de auditoría:**
- ¿Qué % de decisiones del agente requieren HITL?
- ¿Cuánto tiempo tarda HITL? ¿Neutraliza la aceleración del agente?
- ¿Cuál es la tasa de rechazo de HITL vs aprobación? (si es >50%, quizás el agente no está listo)
- ¿Qué perfiles hacen HITL? ¿Pueden hacer bien esa validación dado el contexto disponible?

---

### 9. AGENT FAILURE MODES — Cómo fallan los agentes

**Concepto:**
Failure modes son los patrones sistemáticos de error de un agente.

No son "bugs" (defectos técnicos). Son comportamientos predecibles que ocurren bajo condiciones específicas.

**Failure modes comunes:**
1. **Context blindness**: agente toma decisión sin acceso a memoria crítica → resultado subóptimo
   - Causa raíz: Context Systems incompleto
   - Señal: decisión inconsistente con política conocida

2. **Boundary violation**: agente actúa fuera de sus límites autorizados → incidente de governance
   - Causa raíz: límites no formalizados o mal aplicados
   - Señal: acción inesperada, retroalimentación de usuario sorprendida

3. **Decision drift**: decisiones del agente se vuelven progresivamente peor dentro de un dominio → degradación de calidad
   - Causa raíz: falta de supervisión o retraining continuo
   - Señal: score de calidad disminuye mes a mes

4. **Escalation deadlock**: agente escala un problema, nadie lo resuelve, situación queda en limbo → proceso bloqueado
   - Causa raíz: operatig model incompleto, ownership difuso
   - Señal: usuarios reportan "solicitud en estado extraño desde hace semanas"

5. **Context contradiction**: agente recibe contexto contradictorios de múltiples fuentes → decisión caótica
   - Causa raíz: Memory Architecture incompleta, gobernanza de memoria débil
   - Señal: "el agente decidió X, pero dijimos Y; los contextos se contradicen"

6. **Cascade failure**: fallo de agente A propaga a agente B, que propaga a C → fallo en cascada
   - Causa raíz: coordinación débil entre agentes, sin límites de propagación
   - Señal: un agente falla, cadena completa se bloquea

7. **Hallucination in situ**: agente "inventa" información para llenar gaps de contexto → decisión basada en ficción
   - Causa raíz: contexto incompleto, acceso a memoria incompleta
   - Señal: decisión que no es refutada hasta después (es crítica)

**Elemento nuevo para article-25:**
Diagrama de "Failure Mode Analysis":
```
Failure mode | Cause layer | Indicator | Recovery
Context blindness | Memory Architecture | Inconsistent decision vs known policy | Audit context availability
Boundary violation | Governance | Unexpected agent action | Review limits definition
Decision drift | Operating Model | Quality score decline | Trigger retraining + supervision
Escalation deadlock | Operating Model | Unresolved escalation > 7d | Governance escalation
Context contradiction | Memory Architecture | Conflicting contexts | Governance of sources
Cascade failure | Operating Model | Related agents failing | Circuit breaker
Hallucination | Context Systems | Decision not refutable ex-post | Increase HITL
```

**Preguntas de auditoría:**
- ¿Cuál de estos failure modes has observado en tu agente?
- ¿Para cada failure mode, qué es la causa raíz en el framework (governance, operating model, memory, architecture, context)?
- ¿Qué sistema de detección tienes para cada failure mode?
- ¿Cuál es el recovery process?

---

### 10. ENTERPRISE AGENT ARCHITECTURE — Diseño del sistema

**Concepto:**
Enterprise Agent Architecture es el diseño completo de cómo un agente se integra en la organización enterprise.

No es la arquitectura técnica del agente (eso es ML/LLM engineering). Es la arquitectura organizativa: cómo el agente se conecta a governance, operating model, memoria, contexto y supervisión.

**Capas de Enterprise Agent Architecture:**

**Capa 1: Governance Layer**
- Decision rights del agente
- Límites formalizados
- Políticas aplicables
- Ownership claro
- Auditoría y trazabilidad

**Capa 2: Operating Model Layer**
- Rol del agente en procesos clave
- Ownership y responsabilidades
- Supervisión y escalación
- Ciclo de mejora (feedback para retraining)

**Capa 3: Memory Layer**
- Acceso a Organizational Memory
- Acceso a políticas vigentes
- Acceso a excepciones activas
- Acceso a histórico de decisiones similares

**Capa 4: Context Systems Layer**
- Context Routing que entienda el agente
- Entrega dinámica de contexto en tiempo de decisión
- Manejo de contexto contradictorio
- Caducidad de contexto

**Capa 5: Supervision & Learning Layer**
- Monitoring real-time
- Review periódica
- Anomaly detection
- Retroalimentación para evolución del agente

**Elemento nuevo para article-25:**
Diagrama de "Enterprise Agent Architecture":
```
┌─────────────────────────────────────────────────────────────┐
│                    ENTERPRISE AGENT                           │
├─────────────────────────────────────────────────────────────┤
│ Decision Point: Agent needs to act                          │
└─────────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────────┐
│ GOVERNANCE LAYER: Check limits & decision rights            │
│  - Permission check (can agent act?)                        │
│  - Limit verification (within boundaries?)                  │
│  - Policy alignment (is this consistent?)                   │
└─────────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────────┐
│ CONTEXT SYSTEMS LAYER: Retrieve relevant context            │
│  - Query Memory Architecture                                │
│  - Assemble policy + history + exceptions                   │
│  - Detect contradictions                                    │
└─────────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────────┐
│ DECISION LAYER: Agent decides                               │
│  - If clear: decide autonomously                            │
│  - If ambiguous: escalate                                   │
│  - If outside limits: escalate                              │
└─────────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────────┐
│ SUPERVISION & AUDIT LAYER: Record & monitor                 │
│  - Log context used                                          │
│  - Log decision rationale                                   │
│  - Alert if anomaly detected                                │
│  - Periodic review                                          │
│  - Feedback to operating model                              │
└─────────────────────────────────────────────────────────────┘
```

**Preguntas de auditoría:**
- ¿Existe una especificación formal de cómo tu agente se conecta a cada capa?
- ¿Qué sucede si una capa está ausente? (ej: no hay memoria, no hay supervisión)
- ¿Quién lidera el diseño de cada capa?
- ¿Cuándo fue la última revisión de la arquitectura del agente?

---

## Patrones de fallo real en empresas enterprise

Estos son patrones observables en organizaciones reales; no son hipotéticos:

### Patrón 1: El agente huérfano
Síntoma: agente en producción desde "hace años", nadie sabe quién la mantiene, cambios lentos, incidentes no se asignan claros
Causa raíz: falta de ownership + operating model incompleto
Riesgo: agente evoluciona mal, falla es invisible, cuando falla no hay respuesta
Solución: formalizar ownership, ligar a operating model explícito

### Patrón 2: El agente que repite errores históricos
Síntoma: agente toma decisión identica a una que fracasó hace 2 años; nadie comunicó el aprendizaje
Cause raíz: organizational memory no captura lecciones, agente sin acceso a historico
Riesgo: inversión perdida en aprendizaje; agente reinventa el fracaso
Solución: memory architecture debe incluir "anti-patterns" y "lessons learned"

### Patrón 3: El agente sin límites
Síntoma: agente aprueba 10 solicitudes anualese de $10M; no hay límite formal; "simplemente funciona"
Causa raíz: governance incompleto, decision rights no formalizados
Riesgo: colapso repentino; un error del agente puede costar fortunas; responsabilidad ambigua
Solución: formalizar limites de decision rights, implementar supervisión HITL

### Patrón 4: El agente ciego
Síntoma: agente recomendaciones subóptimas; revisan casos y ven que el agente carece de contexto obvio
Causa raíz: context systems incompleto, memory architecture incompleta
Riesgo: confianza erosionada, usuarios ignoran recomendaciones del agente
Solución: mapear qué contexto el agente necesita; construir context routing

### Patrón 5: El agente en cascada
Síntoma: agente X falla; agente Y que depende de X también falla; cadena de fallos
Causa raíz: coordinación débil entre agentes, sin mecanismo de "circuit breaker"
Riesgo: fallo localizado se convierte en crisis sistémica
Solución: operating model debe incluir coordinaclón entre agentes; limites de escalada

### Patrón 6: El agente regulatorio
Síntoma: agente en dominio regulado; cambio de regulación; agente sigue aplicando regla vieja por 3 meses
Causa raíz: organizational memory no captura cambios de política; agente sin supervisión de actualizaciones
Riesgo: incumplimiento regulatorio; sanciones y auditoría
Solución: governance policy update debe disparar revisión+ actualización de lógica del agente

---

## Preguntas de auditoría holística

Una organización que quiere saber si está lista para desplegar agentes debería contestarse:

**Governance (Article 20):**
1. ¿Existe un AI Governance Framework documentado?
2. ¿Están definidas decision rights de los agentes?
3. ¿Existe mecanismo de escalación formalizado?
4. ¿Quién es responsable de definir límites del agente?
5. ¿Hay auditoria de las acciones del agente? ¿Con qué frecuencia?

**Operating Model (Article 21):**
6. ¿Existe un Operating Model que defina cómo el agente se integra en procesos?
7. ¿Está claro quién es propietario del agente?
8. ¿Quién supervisa el agente en día a día?
9. ¿Existe un ciclo de feedback para mejorar el agente?
10. ¿Hay coordinación entre agentes si existen múltiples?

**Memory (Article 22):**
11. ¿Existe Organizational Memory capturando decisiones y lecciones?
12. ¿Tiene el agente acceso a contexto histórico relevante?
13. ¿Cómo se capturan los errores pasados para que el agente no los repita?
14. ¿Existe Knowledge Debt conocida que el agente podría amplificar?

**Memory Architecture (Article 23):**
15. ¿Está estructura la memoria de forma que el agente puede recuperar contexto rápidamente?
16. ¿Hay gobernanza de la memoria (ownership, caducidad, revisión)?
17. ¿Puede el agente reconstruir el rationale de una decisión histórica?
18. ¿La memoria se actualiza cuando aparecen nuevas políticas?

**Context Systems (Article 24):**
19. ¿Existe un mecanismo de Context Routing específicamente para el agente?
20. ¿Recibe el agente contexto en tiempo de decisión o tiene que buscarlo?
21. ¿Qué sucede si hay contextos contradictorios?

**Agent-specific (Article 25):**
22. ¿Están formalizados los límites del agente (boundaries)?
23. ¿Están claros los decision rights del agente?
24. ¿Existe matriz de ownership del agente (product, ops, governance, knowledge)?
25. ¿Hay trazabilidad de auditoría (audit trail) de cada decisión del agente?
26. ¿Existe una mátriz de escalación clara?
27. ¿Se miden métricas de confiabilidad del agente?
28. ¿Hay supervisión real-time del agente?
29. ¿Se han identificado los failure modes del agente?
30. ¿Existe Human-in-the-loop en decisiones críticas?

Puntuación: Si contestas "no" a 5+ preguntas, NO ESTÁS LISTO para agentes en producción.

---

## Argumentos principales para el outline

### Argumento 1: Agentes como convergencia de infraestructura
Los agentes no son punto de partida. Son la culminación de 5 capas de infraestructura enterprise. Un agente sin governance es caos. Sin operating model, es experimento. Sin memoria, es sistema de contexto ciego. Sin memory architecture, es recuperación ineficiente. Sin context systems, opera a ciegas.

### Argumento 2: La diferencia entre agente experimental y agente empresarial
Un agente experimental: "Funciona en el lab". Un agente empresarial: "Función en producción bajo límites, governance, supervision y accountability claros, con respuesta escalada si necesita intervención, con memoria de aprendizajes previos, con contexto exacto en el momento de decisión."

La diferencia no es técnica. Es organizativa.

### Argumento 3: Antipatrones observados en el mercado
Empresas están desplegando agentes sin governance, con ownership difuso, sin supervisión, sin límites formales. Resultado: incidentes, conflictos interequipos, caos operativo. No porque falta tecnología, sino porque falta infraestructura organizativa.

### Argumento 4: Failure modes como feedback al framework
Si un agente falla "por falta de contexto", el feedback es: "Memory architecture incompleta". Si falla "por violación de límites", es "governance incompleta". Mapping failure modes a causa raíz en el framework (governance, operating model, memory, architecture, context). Eso es cómo una organización diagnostica y mejora.

### Argumento 5: Agentes como drivers de transformación organizativa
Los agentes obligan a la empresa a resolver carencias organizativas. Muchas empresas no saben si tienen governance, operating model, memoria ordenada, context systems. Los agentes las exponen: si el agente no puede funcionar, es señal de que falta infraestructura.

---

## Diagramas conceptuales para esquema

### Diagrama 1: Cadena de prerrequisitos
```
Governance (20) — define límites y accountability
     ↓
Operating Model (21) — coordina roles y responsabilidad
     ↓
Organizational Memory (22) — captura conocimiento
     ↓
Memory Architecture (23) — estructura el conocimiento
     ↓
Context Systems (24) — entrega contexto en tiempo real
     ↓
Agentic AI (25) — agente opera con infraestructura completa
```

### Diagrama 2: El agente en contexto enterprise
```
┌ BOUNDARIES
├ DECISION RIGHTS
├ OWNERSHIP
├ ACCOUNTABILITY
├ ESCALATION ─────→ Agente ←─────── SUPERVISION
├ RELIABILITY ──────────────────── HUMAN-IN-LOOP
└ FAILURE MODES & MONITORING
```

### Diagrama 3: Causa → Failure Mode → Recovery
```
Absence of governance → Boundary violation → Incident → Governance formalization
Absence of memory → Context blindness → Bad decision → Memory capture
Weak architecture → Contradiction → Confusion → Memory structuring
Weak context systems → Delayed decision → Inefficiency → Context routing
Weak supervision → Drift → Degradation → Real-time monitoring
```

---

## Esquema inicial del outline (sin detalles aún)

1. **Apertura**: El problema de agentes sin infraestructura
2. **Por qué article-25 cierra el ciclo 20-24**: agentes como convergencia
3. **Diferencia: agente experimental vs agente empresarial**
4. **Los 10 elementos de un agente empresarial** (boundaries, decision rights, ownership, accountability, escalation, reliability, supervision, HITL, failure modes, architecture)
5. **Patrones de fallo reales en el mercado**
6. **Cómo auditar si estás listo para agentes**
7. **Relación con /framework**: agentes como aplicación de la arquitectura conceptual
8. **Conclusión**: agentes como drivers de transformación organizativa

---

## Referencias dentro article-25 que NO deben ser repetición

- Article 20: referenciar "governance define decision rights" pero no enseñar QUÉ ES governance
- Article 21: referenciar "operating model coordina roles" pero no enseñar QUÉ ES operating model
- Article 22: referenciar "memoria preserva conocimiento" pero no enseñar CÓMO se captura
- Article 23: referenciar "memory architecture estructura" pero no enseñar el modelo de 5 capas
- Article 24: referenciar "context systems entrega contexto" pero no enseñar CÓMO funciona context routing

**En su lugar**: enfoque en QUÉ PASA cuando un agente RECIBE governance, operating model, memoria, arquitectura y context systems correctamente.

---

## Tono esperado

- **Incisivo**: "Las organizaciones están desplegando agentes sin infraestructura. Eso no es ambición, es riesgo."
- **Práctico**: ejemplos enterprise concretos, no abstracciones
- **Honesto**: antipatrones reales observados, no hipotetizaciones
- **Accionable**: auditoría checklist, cómo diagnosticar, qué priorizar

---

## Notas finales

El artículo NO debe ser "cómo construir agentes". El artículo DEBE ser "por qué la infraestructura empresarial es prerrequisito para agentes confiables".

La audiencia es arquitectos, CTOs, transformation leaders que estan siendo presionados a construir agentes pero carecen de infraestructura. El artículo debe ayudarles a diagnosticar qué falta y qué priorizar ANTES de tocar un agente.
