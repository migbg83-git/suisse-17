# Framework Page v1 — Propuesta Estratégica

**Documento:** Especificación estratégica para página `/framework`  
**Versión:** 1.0  
**Fecha:** 2026-06-04  
**Autor:** Archwise Editorial Team  
**Estado:** Propuesta (sin implementación)

---

## CONTENIDO

1. Executive Summary
2. Relación con el resto del sitio
3. Estructura exacta de la página
4. Wireframe ASCII completo
5. Modelo conceptual (diagrama lógico)
6. Mapeo de artículos
7. Navegación
8. Escalabilidad futura
9. Riesgos y mitigation
10. Recomendación final

---

## 1. EXECUTIVE SUMMARY

### Propósito

La página `/framework` es el **centro neurálgico conceptual** de Archwise. Su función es responder:

> "¿Qué es el Framework Archwise y por qué existe?"

No vende. No captura leads. No hace marketing. 

**Su única función es explicar**, como haría un científico presentando una tesis ante colegas.

### Audiencia Primaria

- **CTO** de empresas medianas (200-5000 empleados)
- **Arquitectos de sistemas** que entienden complejidad
- **Líderes de transformación digital** buscando frameworks operacionales
- **Académicos y consultores** investigando governance de IA

**Característica común:** No necesitan vender a alguien más. Tienen autoridad para decidir.

### Audiencia Secundaria

- Ejecutivos senior (VP, C-level) que necesitan entender contexto antes de decisiones
- Ingenieros sénior interesados en architecture patterns

### Valor Estratégico

La página `/framework` resuelve un **problema de arquitectura de información crítico:**

**Hoy:** Un visitante ve 26 artículos dispersos. No sabe por dónde empezar. No entiende las relaciones. El corpus queda incomprensible.

**Mañana:** Un visitante entra a `/framework` y ve el **mapa completo** — dónde está — por dónde debería leer — cómo encajan las piezas.

**Resultado esperado:** 
- Visitante entiende la tesis en 3-5 minutos
- Visitante sabe qué artículos leer en qué orden
- Visitante se convierte en **lector profundo** (no casual)

---

## 2. RELACIÓN CON EL RESTO DEL SITIO

### Arquitectura del sitio actual

```
Home (portal, descubrimiento general)
  ↓
  ├─ /articulos (listado, búsqueda, navegación)
  │   ├─ /articulos/{slug} (individual articles)
  │   └─ Artículos 1-26 (cada uno independiente)
  │
  ├─ /about (identidad, equipo — si existe)
  │
  └─ Newsletter (email, conversión)
```

### Propuesta: insertar /framework

```
Home (portal, descubrimiento general)
  ↓
  ├─ /framework ← NUEVA (mapa conceptual, onboarding)
  │   └─ propósito: explicar arquitectura conceptual
  │   └─ destino: artículos específicos
  │
  ├─ /articulos (listado, búsqueda)
  │   ├─ /articulos/{slug} (individual)
  │   └─ Artículos 1-26
  │
  ├─ /about (identidad, equipo)
  │   └─ propósito: confianza, credibilidad
  │
  └─ Newsletter (email, conversión)
      └─ propósito: suscripción seguidores
```

### Responsabilidades definidas

| Página | Responsabilidad | Pregunta que responde |
|--------|-----------------|----------------------|
| **Home** | Primer impacto + orientación | ¿Qué es Archwise? (30 segundos) |
| **/framework** | Explicación completa + mapa | ¿Cómo funciona Archwise? (3-5 minutos) |
| **/articulos** | Exploración y búsqueda | ¿Qué artículos existen? |
| **/articulos/{slug}** | Profundidad temática | Artículo específico (15-30 min) |
| **/about** | Confianza + contexto editorial | ¿Quién está detrás? |
| **Newsletter** | Suscripción y seguimiento | ¿Cómo me mantengo actualizado? |

### Flujos de usuario

**Flujo 1: Descubridor casual**
```
Home → intriga → /framework → lee resumen ejecutivo → decides si profundizar → /articulos o artículos específicos
```

**Flujo 2: Investigador profesional**
```
Home → confianza → /framework → estudia mapa → elige artículos recomendados → lectura profunda
```

**Flujo 3: Convertidor a suscriptor**
```
Home → /framework → "esto es valioso" → Newsletter signup in /framework
```

**Flujo 4: Referenciador**
```
/framework → comparte URL con colegas → "empecemos por aquí"
```

### No duplicación

- **Home NO replica el contenido de /framework** — Home es intro rápida
- **/articulos NO lista la arquitectura conceptual** — Solo lista artículos
- **Cada artículo profundiza en su tema** — No resume el framework
- **/framework NO reemplaza artículos** — Los organiza y contextualizó

---

## 3. ESTRUCTURA EXACTA DE LA PÁGINA

### Secciones (en orden visual/lectura)

#### Sección 1: HERO + VALUE PROPOSITION

**Objetivo:** Capturar atención. Responder "¿Qué voy a aprender?"

**Contenido:**
- Título principal: "Framework Archwise"
- Subtítulo: "Un modelo operacional para escalar IA en empresas"
- Declaración de propósito (1-2 frases): "Archwise es un framework que resuelve el problema fundamental: **¿cómo operan las organizaciones cuando la IA es un sistemas distribuido que debe integrar governance, memoria, contexto y agentes?**"

**Mensaje principal:** Esto no es un producto. Es un modelo de pensamiento. Es arquitectura, no herramienta.

**CTA editorial (no de venta):** "Explora las 6 capas" o "Comienza con Governance"

---

#### Sección 2: EL PROBLEMA

**Objetivo:** Establecer contexto. Explicar por qué Archwise existe.

**Contenido estructurado:**

```
¿Por qué Archwise existe?

Problema 1: La IA no escala en organizaciones
  → Las empresas implementan IA fragmentada (chatbots, automations)
  → No hay visión integrada
  → Cada inciativa es un silo

Problema 2: Falta de arquitectura operacional
  → Governance está separado de Operating Model
  → Operating Model está separado de Memory
  → Memory está separada de Agentes
  → Resultado: chaos operacional

Problema 3: Las organizaciones no saben qué es "ser un sistema"
  → Piensan en funciones (RH, Ventas, IT)
  → No piensan en integración
  → No piensan en flujos de información
  → No piensan en retroalimentación

Pregunta estratégica: ¿Cómo operan las organizaciones COMO SISTEMA cuando tienen IA distribuida?
```

**Mensaje principal:** El framework responde esa pregunta.

---

#### Sección 3: LA SOLUCIÓN EN BREVE

**Objetivo:** Presentar el concepto core sin overwhelm.

**Contenido:**

```
La solución: 6 capas integradas

Archwise propone que la operación de IA en empresas funciona como 6 capas interdependientes:

1. GOVERNANCE → ¿Quién decide? ¿Con qué criterios? ¿Cómo se controla el poder?
2. OPERATING MODEL → ¿Cómo se organiza el trabajo? ¿Cómo se alinea con gobernanza?
3. ORGANIZATIONAL MEMORY → ¿Cómo la organización recuerda? ¿Cuál es la fuente de verdad?
4. MEMORY ARCHITECTURE → ¿Cómo se structure la memoria? ¿Cómo se accesa?
5. CONTEXT SYSTEMS → ¿Cómo se contextualiza? ¿Cómo llega el contexto correcto a los agentes?
6. ENTERPRISE AGENT ARCHITECTURE → ¿Cómo actúan los agentes? ¿Cómo se integran en el sistema?

Cada capa **depende de la anterior** y **habilita la siguiente**.

NO es un stack tecnológico. Es una arquitectura conceptual.
```

**Mensaje principal:** 6 capas. Secuencia clara. Cada capas justifica la siguiente.

---

#### Sección 4: MAPA VISUAL CONCEPTUAL

**Objetivo:** Mostrar las relaciones. Visualizar la arquitectura.

**Contenido (ASCII representación):**

```
═══════════════════════════════════════════════════════════════════

ARCHWISE: 6 CAPAS INTEGRADAS

                    ┌─────────────────────────────────┐
                    │  ENTERPRISE AGENT ARCHITECTURE  │  (Capa 6)
                    │  Agentes actúan en el sistema    │
                    └──────────────┬────────────────────┘
                                   ▲
                                   │ depende de contexto correcto
                                   │
                    ┌──────────────┴────────────────────┐
                    │   CONTEXT SYSTEMS (Capa 5)        │
                    │   Contexto llega a los agentes    │
                    └──────────────┬────────────────────┘
                                   ▲
                                   │ depende de memoria estructurada
                                   │
                    ┌──────────────┴────────────────────┐
                    │ MEMORY ARCHITECTURE (Capa 4)      │
                    │ Cómo se estructura la memoria     │
                    └──────────────┬────────────────────┘
                                   ▲
                                   │ depende de memoria organizacional
                                   │
                    ┌──────────────┴────────────────────┐
                    │ ORGANIZATIONAL MEMORY (Capa 3)    │
                    │ Qué recuerda la organización      │
                    └──────────────┬────────────────────┘
                                   ▲
                                   │ depende de modelo operacional
                                   │
                    ┌──────────────┴────────────────────┐
                    │  OPERATING MODEL (Capa 2)         │
                    │  Cómo se organiza el trabajo      │
                    └──────────────┬────────────────────┘
                                   ▲
                                   │ depende de gobernanza
                                   │
                    ┌──────────────┴────────────────────┐
                    │      GOVERNANCE (Capa 1)          │
                    │   Quién decide. Con qué criterios │
                    └────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

LECTURA (arriba → abajo):
Cada capa se construye sobre la anterior.
Cada capa habilita la siguiente.

FLUJO DE DATOS:
Governance → Operating Model definen estructura
Operating Model → organiza qué se recuerda
Memory → se estructura en Memory Architecture
Architecture → provee contexto
Contexto → habilita agentes efectivos
```

**Mensaje principal:** No son capas separadas. Son capas integradas. La complejidad es **acumulativa pero coherente**.

---

#### Sección 5: EXPLICACIÓN DETALLADA DE CADA CAPA

**Objetivo:** Dar suficiente contexto sin replicar artículos.

**Formato por capa:**

```
CAPAPara cada capa:

CAPA X: [Nombre]
├─ Propósito: [1 frase]
├─ Pregunta central: [¿?]
├─ Principios clave:
│  ├─ [Principio 1]
│  ├─ [Principio 2]
│  └─ [Principio 3]
├─ Artículo recomendado: Article-20 (title, read time)
└─ Lectura adicional: [Article IDs]

EJEMPLO:

CAPA 1: GOVERNANCE
├─ Propósito: Definir quién toma decisiones sobre IA y con qué criterios
├─ Pregunta central: ¿Cómo se ejerce el poder en la decisión de IA?
├─ Principios clave:
│  ├─ Poder explícito > poder implícito
│  ├─ Criterios públicos > criterios ocultos
│  └─ Accountability distribuida > centralizada
├─ Artículo recomendado: Article-20 "Governance and distributed power"
└─ Lectura adicional: Article-21 (operating model perspective)
```

Este patrón se repite para capas 2-6.

**Mensaje principal:** Cada capa tiene lógica. Cada capa responde una pregunta real.

---

#### Sección 6: RECORRIDO RECOMENDADO DEL LECTOR

**Objetivo:** Orientar cómo leer los artículos. Separar obligatorio de avanzado.

**Contenido:**

```
TRES CAMINOS DE LECTURA

CAMINO 1: EJECUTIVO (Essential, 90-120 min)
├─ Article-20: Governance → entender decisiones
├─ Article-21: Operating Model → entender estructura
└─ Article-26: Framework Archwise → integración

CAMINO 2: ARQUITECTO (Comprehensive, 180-240 min)
├─ Article-20: Governance
├─ Article-21: Operating Model
├─ Article-22: Organizational Memory
├─ Article-23: Memory Architecture
├─ Article-24: Context Systems
├─ Article-25: Enterprise Agent Architecture
└─ Article-26: Framework Archwise (integration)

CAMINO 3: INVESTIGADOR (Deep Dive + Extensión + Custom)
├─ Leer todas las capas (path 2)
├─ + Explorar artículos 1-19 (contexto histórico)
├─ + Estudiar relaciones interdependencias
└─ + Definir aplicación a tu contexto

GUÍA RÁPIDA:
├─ Tienes 10 minutos? → Sección 5 (explicación visual) + CTA
├─ Tienes 30 minutos? → Secciones 1-4 + camino ejecutivo (primeros 2 artículos)
├─ Tienes 2 horas? → Explicación completa + camino ejecutivo o arquitecto
└─ Tienes tiempo ilimitado? → Camino 3
```

**Mensaje principal:** No obligamos a nadie a leer todo. Pero ofrecemos recorridos claros.

---

#### Sección 7: ARTÍCULOS ORGANIZADOS POR CAPA

**Objetivo:** Mapeo explícito. Cada artículo → dónde está en el framework.

**Contenido:**

```
MAPEO DE ARTÍCULOS EN EL FRAMEWORK

CAPA 1: GOVERNANCE
├─ Article-20: Enterprise Governance and Distributed Authority
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/governance-autoridad-distribuida
│  └─ Why: Define las bases de todo el sistema

CAPA 2: OPERATING MODEL
├─ Article-21: Operating Model for AI-Driven Organizations
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/modelo-operativo-ia-organizaciones
│  └─ Why: Especifica cómo se trabaja

CAPA 3: ORGANIZATIONAL MEMORY
├─ Article-22: [Title]
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/[slug]
│  └─ Why: Define qué se recuerda

CAPA 4: MEMORY ARCHITECTURE
├─ Article-23: Memory Architecture for Context-Aware Systems
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/arquitectura-memoria-contexto
│  └─ Why: Estructura técnica de memoria

CAPA 5: CONTEXT SYSTEMS
├─ Article-24: Context Systems and Information Flow
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/sistemas-contexto-flujo-info
│  └─ Why: Distribuye contexto a agentes

CAPA 6: ENTERPRISE AGENT ARCHITECTURE
├─ Article-25: Enterprise Agent Architecture and Autonomy
│  └─ Tipo: OBLIGATORIO
│  └─ URL: /articulos/arquitectura-agentes-autonomia
│  └─ Why: Cómo actúan los agentes

INTEGRACIÓN: FRAMEWORK ARCHWISE
├─ Article-26: Framework Archwise - Integration and Synthesis
│  └─ Tipo: OBLIGATORIO (después de 1-6)
│  └─ URL: /articulos/framework-archwise-integracion
│  └─ Why: Cierra el círculo. Explica cómo trabajan juntas todas las capas.

CONTEXTO HISTÓRICO (Recomendado, no obligatorio)
├─ Articles 1-19: [Contexto que llevó a desarrollar el framework]
│  └─ Tipo: RECOMENDADO para entender la tesis
│  └─ Why: Proporciona perspectiva. Explica por qué el framework.
```

**Mensaje principal:** Claridad. Cada artículo tiene lugar. Transparencia sobre qué es obligatorio vs recomendado.

---

#### Sección 8: PREGUNTAS FRECUENTES

**Objetivo:** Anticipar preguntas. Resolver ambigüedades.

**Contenido:**

```
PREGUNTAS FRECUENTES

P: ¿Debo leer todos los artículos?
R: No. Depende tu rol:
   - CTO: Camino Ejecutivo (20, 21, 26) ~90 min
   - Arquitecto: Camino Completo (20-26) ~240 min
   - Implementador: Camino Completo + Articles 1-19 para contexto

P: ¿En qué orden debo leer?
R: Orden de capas (20→21→22→23→24→25→26). NO saltes capas.
   Cada capa teoría se construye sobre la anterior.

P: ¿Qué pasa si tengo experiencia con frameworks similares?
R: Empieza por Article-26 (síntesis), luego salta a temas específicos.
   El contexto histórico (1-19) puede ayudarte a ver perspectiva de Archwise.

P: ¿Es Archwise específico para IA?
R: Es un framework para organizaciones que operan con IA.
   Pero los principios (governance, memory, contexto) aplican a cualquier sistema distribuido.

P: ¿Puedo usar Archwise sin implementar todas las capas?
R: Teóricamente sí. Pero sin Governance, todo lo demás es frágil.
   Sin Memory, los Agentes son ciegos.
   La arquitectura es coherente pero **no está diseñada para aplicación parcial**.

P: ¿Cómo se relaciona Archwise con [framework X]?
R: Articles 1-19 contextualizan esto. Archwise es **específico para IA distribuida en empresas**.

P: ¿Dónde comienza la implementación técnica?
R: Esta página es conceptual.
   Implementación técnica está en documentación de arquitectura separada.
   Articles 22-25 dan primeros pasos técnicos.
```

**Mensaje principal:** Servicio al lector. Respuestas claras. Reducción de fricción.

---

#### Sección 9: LLAMADA A LA ACCIÓN EDITORIAL

**Objetivo:** Guiar siguiente paso sin presionar venta.

**Contenido:**

```
¿CUÁL ES TU SIGUIENTE PASO?

Opción 1: QUIERO ENTENDER GOVERNANCE
└─ Leer Article-20 (18 min read) → Comienza

Opción 2: QUIERO APRENDER EL FRAMEWORK COMPLETO
└─ Seguir Camino Arquitecto (6-7 artículos, ~240 min) → Ver ruta

Opción 3: QUIERO PROFUNDIZAR EN IMPLEMENTACIÓN
└─ Leer Memory Architecture (Article-23) y Context Systems (Article-24) → Comienza

Opción 4: QUIERO EVITAR ERRORES COMUNES
└─ Leer Article-20 + Article-26 → Comienza

Opción 5: TENGO PREGUNTAS ESPECÍFICAS
└─ Ir a /articulos y buscar por tema → Explorar

Opción 6: QUIERO MANTENERME ACTUALIZADO
└─ Suscribirse a newsletter → Suscribir
   (Nuevos artículos sobre aplicaciones, estudios de caso, evoluciones framework)
```

**Nota:** NO es "Compra nuestro producto". Es "¿Qué quieres aprender?".

**Mensaje principal:** Múltiples caminos. Cada uno legítimo. Respeto por la autonomía del lector.

---

### Resumen de secciones

| # | Sección | Propósito | Tiempo lectura | Acción resultante |
|---|---------|----------|---|---|
| 1 | Hero | Capturar | 30 seg | "Sí, incluso seguir" |
| 2 | Problema | Establecer contexto | 2-3 min | "Ah, esto importa" |
| 3 | Solución en breve | Simplificar | 2-3 min | "Entiendo 6 capas" |
| 4 | Mapa visual | Mostrar relaciones | 2-3 min | "Veo la arquitectura" |
| 5 | Explicación por capa | Detallar sin overwhelm | 5-7 min | "Entiendo cada capa" |
| 6 | Recorridos | Orientar lectura | 2 min | "Sé qué leer" |
| 7 | Artículos por capa | Mapeo explícito | 2 min | "Sé dónde está todo" |
| 8 | FAQ | Resolver dudas | 3-5 min | "Próximas preguntas contestadas" |
| 9 | CTA editorial | Próximo paso | 1 min | Acción: lectura específica |

**Tiempo total promedio:** 20-25 minutos lectura completa.

---

## 4. WIREFRAME ASCII COMPLETO

### Layout general

```
════════════════════════════════════════════════════════════════════════════════════
                                    ARCHWISE.ORG
════════════════════════════════════════════════════════════════════════════════════

HEADER
├─ Logo + Title: Framework Archwise
├─ Navigation: Home | Artículos | Framework | About | Newsletter
└─ Search (opcional)

────────────────────────────────────────────────────────────────────────────────────

SECTION 1: HERO
────────────────────────────────────────────────────────────────────────────────────

┌─ HERO IMAGE / VISUAL (izq)        ─ TEXT (der) ──────────────────────────────┐
│                                                                               │
│  [Illustration o placeholder]      Framework Archwise                         │
│  Mostrando 6 capas integradas      ═══════════════════════════════════════    │
│                                     Un modelo operacional para escalar IA    │
│                                     en empresas                              │
│                                                                               │
│                                     Archwise responde la pregunta que te      │
│                                     mantiene despierto de noche:             │
│                                     ¿Cómo operan las organizaciones          │
│                                     como sistemas cuando tienen IA           │
│                                     distribuida?                             │
│                                                                               │
│                                     No es un producto.                        │
│                                     Es arquitectura.                          │
│                                                                               │
│                                     [CTA: Explora las 6 capas ↓]            │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 2: EL PROBLEMA (Full width)
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  ¿POR QUÉ EXISTE ARCHWISE?                                                     │
│  ════════════════════════════════════════════════════════════════════════════   │
│                                                                                 │
│  Problema 1: IA fragmentada en empresas                                        │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ Las organizaciones implementan IA en silos:                              │  │
│  │ • Chatbot aquí                                                           │  │
│  │ • Automación allá                                                        │  │
│  │ • ML en otro lado                                                        │  │
│  │ Resultado: Caos. Sin visión integrada.                                  │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Problema 2: Falta de arquitectura operacional                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ • Governance está separado de Operating Model                           │  │
│  │ • Operating Model está separado de Memory                               │  │
│  │ • Memory está separada de Context                                       │  │
│  │ • Context está separado de Agents                                       │  │
│  │ Cada pieza existe, pero aislada.                                        │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Problema 3: Las organizaciones no saben ser "sistemas"                        │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ Piensan en funciones, no en flujos.                                      │  │
│  │ Piensan en jerarquías, no en integración.                                │  │
│  │ Piensan en tareas, no en retroalimentación.                              │  │
│  │                                                                          │  │
│  │ La pregunta: ¿Cómo operan como SISTEMA?                                 │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Archwise responde esa pregunta.                                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 3: SOLUCIÓN EN BREVE (Full width)
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  LA SOLUCIÓN: 6 CAPAS INTEGRADAS                                               │
│  ════════════════════════════════════════════════════════════════════════════   │
│                                                                                 │
│  Archwise propone que operar IA en empresas es construir 6 capas que se        │
│  integran en un sistema coherente:                                             │
│                                                                                 │
│  1. Governance     → ¿Quién decide? ¿Con qué criterios?                       │
│  2. Operating      → ¿Cómo se organiza el trabajo?                            │
│     Model                                                                       │
│  3. Organizational → ¿Qué recuerda la organización?                            │
│     Memory                                                                      │
│  4. Memory         → ¿Cómo se estructura esa memoria?                          │
│     Architecture                                                                │
│  5. Context        → ¿Cómo llega el contexto correcto a los agentes?           │
│     Systems                                                                     │
│  6. Enterprise     → ¿Cómo actúan los agentes? ¿Cómo se integran?             │
│     Agent Arch                                                                  │
│                                                                                 │
│  Cada capa depende de la anterior. Cada capa habilita la siguiente.            │
│                                                                                 │
│  NO es un stack tecnológico. Es arquitectura conceptual.                       │
│                                                                                 │
│  [Next: Ver modelo visual ↓]                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 4: MAPA VISUAL (Full width, código ASCII del apartado 3)
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│                     ARCHWISE: CAPAS INTEGRADAS                                  │
│                                                                                 │
│                         ┌───────────────────────┐                              │
│                         │   ENTERPRISE AGENTS   │ ← Capa 6                     │
│                         │  (Actúan en sistema)  │                              │
│                         └───────────┬───────────┘                              │
│                                     ▲                                           │
│                                  depende                                        │
│                                     │                                           │
│                         ┌───────────┴───────────┐                              │
│                         │ CONTEXT SYSTEMS (5)   │                              │
│                         │ (Contexto a agentes)  │                              │
│                         └───────────┬───────────┘                              │
│                                     ▲                                           │
│                                  depende                                        │
│                                     │                                           │
│                         ┌───────────┴───────────┐                              │
│                         │ MEMORY ARCHITECTURE   │ ← Capa 4                     │
│                         │ (Estructura memoria)  │                              │
│                         └───────────┬───────────┘                              │
│                                     ▲                                           │
│                                  depende                                        │
│                                     │                                           │
│                    ┌────────────────┴────────────────┐                         │
│                    │ORGANIZATIONAL MEMORY (Capa 3)  │                         │
│                    │   (Qué se recuerda)             │                         │
│                    └────────────────┬────────────────┘                         │
│                                     ▲                                           │
│                                  depende                                        │
│                                     │                                           │
│                    ┌────────────────┴────────────────┐                         │
│                    │  OPERATING MODEL (Capa 2)      │                         │
│                    │  (Cómo se organiza trabajo)     │                         │
│                    └────────────────┬────────────────┘                         │
│                                     ▲                                           │
│                                  depende                                        │
│                                     │                                           │
│                    ┌────────────────┴────────────────┐                         │
│                    │    GOVERNANCE (Capa 1)         │                         │
│                    │ (Quién decide. Criterios.)     │                         │
│                    └────────────────────────────────┘                         │
│                                                                                 │
│  ◆ Por debajo: Governance establece reglas y criterios                         │
│  ◆ Por encima: Cada capa habilita mayor autonomía y sofisticación              │
│  ◆ Integración: Flujos de información conectan todas las capas                 │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 5: EXPLICACIÓN DETALLADA (Full width, 6 subsecciones)
────────────────────────────────────────────────────────────────────────────────────

┌─ CAPA 1: GOVERNANCE ──────────────────────────────────────────────────────────┐
│                                                                               │
│  Propósito: Definir quién toma decisiones y con qué criterios               │
│  Pregunta: ¿Cómo se ejerce el poder en la organización respecto a IA?      │
│                                                                               │
│  Principios clave:                                                           │
│  • El poder se ejerce, mejor explícito que implícito                        │
│  • Las decisiones tienen criterios, mejor públicos que ocultos              │
│  • La responsabilidad se distribuye, mejor que concentrada                  │
│                                                                               │
│  Sin Governance: Caos de decisiones. Poder invisible. Conflictos.           │
│  Con Governance: Autoridad clara. Criterios públicos. Previsibilidad.      │
│                                                                               │
│  📖 Artículo recomendado: Article-20 — Governance                           │
│     (18 min read | Essential para todos)                                    │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘

[Patrón similar para Capas 2-6]

┌─ CAPA 2: OPERATING MODEL ─────────────────────────────────────────────────────┐
│ • Propósito: Especificar cómo funciona el trabajo...
│ • Pregunta: ¿Cómo se organiza el trabajo según gobernanza?
│ • Principios: Estructura habilita, no restringe...
│ • 📖 Article-21 (recomendado)
└───────────────────────────────────────────────────────────────────────────────┘

┌─ CAPA 3: ORGANIZATIONAL MEMORY ───────────────────────────────────────────────┐
│ • Propósito: Definir qué la organización debe recordar...
│ • Pregunta: ¿Cuál es la memoria colectiva?
│ • Principios: Memoria intencional, no casual...
│ • 📖 Article-22 (recomendado)
└───────────────────────────────────────────────────────────────────────────────┘

[... Capas 4, 5, 6]

────────────────────────────────────────────────────────────────────────────────────

SECTION 6: RECORRIDOS DE LECTURA
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  ¿CÓMO QUIERES APRENDER?                                                       │
│  ════════════════════════════════════════════════════════════════════════════   │
│                                                                                 │
│  CAMINO 1: EJECUTIVO (90-120 min)                                              │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ Article-20 Governance           (18 min)                                │  │
│  │ Article-21 Operating Model      (22 min)                                │  │
│  │ Article-26 Framework (síntesis) (27 min)                                │  │
│  │                                                                          │  │
│  │ Resultado: Entiendes las bases y cómo se integran. Listo para tomar    │  │
│  │ decisiones.                                                             │  │
│  │                                                                          │  │
│  │ [Comenzar con Article-20 →]                                            │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  CAMINO 2: ARQUITECTO (180-240 min)                                            │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ Leer todas las capas (20-26) en orden                                   │  │
│  │ Entender interdependencias completas                                    │  │
│  │ Ir a /articulos para profundizar en temas específicos                   │  │
│  │                                                                          │  │
│  │ [Ver ruta completa →]                                                  │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  CAMINO 3: INVESTIGADOR (360+ min)                                             │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │ Leer capas 20-26                                                        │  │
│  │ + Explorar contexto histórico (articles 1-19)                           │  │
│  │ + Definir aplicación a tu contexto                                      │  │
│  │                                                                          │  │
│  │ [Ver ruta completa →]                                                  │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  ¿TIENES POCO TIEMPO?                                                          │
│  ├─ 10 min?  → Leer esta sección + Sección 4 (mapa)                           │
│  ├─ 30 min?  → Leer todo MENOS "Deepdive"                                     │
│  ├─ 1 hora?  → Leer todo + primeros 3 artículos (20, 21, 26)                 │
│  └─ 2+ horas? → Camino completo                                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 7: ARTÍCULOS POR CAPA (Tabla interactiva visual)
────────────────────────────────────────────────────────────────────────────────────

CAPA 1: GOVERNANCE
┌─────────────────────────────────────────────────────────────┐
│ Article-20: Governance and Distributed Authority [18 min]   │
│ Status: OBLIGATORIO                                         │
│ Why: Define los principios sobre los que se construye todo │
│ CTA: Leer →                                                 │
└─────────────────────────────────────────────────────────────┘

CAPA 2: OPERATING MODEL
┌─────────────────────────────────────────────────────────────┐
│ Article-21: Operating Model for AI [22 min]                │
│ Status: OBLIGATORIO                                         │
│ Why: Especifica cómo funciona el día a día                  │
│ CTA: Leer →                                                 │
└─────────────────────────────────────────────────────────────┘

[... Capas 3-6]

CONTEXTO HISTÓRICO
┌─────────────────────────────────────────────────────────────┐
│ Articles 1-19: Cómo llegamos a esta arquitectura            │
│ Status: RECOMENDADO (no obligatorio)                        │
│ Why: Proporciona perspectiva. Explica el "por qué".        │
│ Total: ~10 horas lectura                                    │
└─────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 8: FAQ
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  PREGUNTAS FRECUENTES                                                           │
│  ════════════════════════════════════════════════════════════════════════════   │
│                                                                                 │
│  P: ¿Debo leer todos los artículos?                                             │
│  ▼ R: Depende tu rol. CTO: 20, 21, 26. Arquitecto: todas capas 1-6.            │
│                                                                                 │
│  P: ¿En qué orden?                                                              │
│  ▼ R: Orden de capas (20→21→22→23→24→25→26). NO saltes. Dependen unas de otras.│
│                                                                                 │
│  P: ¿Es solo para IA?                                                           │
│  ▼ R: Para organizaciones que operan IA. Pero principios aplican más amplio.   │
│                                                                                 │
│  P: ¿Puedo implementar solo una capa?                                           │
│  ▼ R: No recomendado. Governance sin Memory = frágil. Memory sin Agents = inútil│
│                                                                                 │
│  [Ver más FAQ →]                                                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

SECTION 9: CALL TO ACTION EDITORIAL (No venta)
────────────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│  ¿CUÁL ES TU SIGUIENTE PASO?                                                   │
│  ════════════════════════════════════════════════════════════════════════════   │
│                                                                                 │
│  [BOTÓN] Quiero entender Governance                                             │
│  Comenzar Article-20 (18 min)                                                   │
│                                                                                 │
│  [BOTÓN] Quiero aprender el Framework completo                                 │
│  Ver Camino Arquitecto (6-7 artículos)                                          │
│                                                                                 │
│  [BOTÓN] Quiero explorar por tema                                               │
│  Ir a /articulos                                                                │
│                                                                                 │
│  [BOTÓN] Quiero mantenerme actualizado                                          │
│  Suscribir a newsletter → [email input]                                         │
│                                                                                 │
│  ────────────────────────────────────────────────────────────────────           │
│                                                                                 │
│  Nota: Esta página es conceptual. No es marketing. Es arquitectura.             │
│  Tómate el tiempo que necesitas. No hay prisa.                                  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────

FOOTER
────────────────────────────────────────────────────────────────────────────────────

├─ Links: Home | Artículos | Framework | About | Newsletter
├─ Copyright © 2026 Archwise
├─ Last updated: 2026-06-04
└─ Questions? → [Link a /about o contact]

════════════════════════════════════════════════════════════════════════════════════
```

---

## 5. MODELO CONCEPTUAL (Diagrama lógico)

### Relaciones y flujos

```
╔════════════════════════════════════════════════════════════════════════════════╗
║                    ARCHWISE: MODELO CONCEPTUAL COMPLETO                        ║
╚════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────────┐
│ FUNDACIÓN: GOVERNANCE (Capa 1)                                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Necesidad organizacional: "¿Cómo decidimos sobre IA?"                        │
│ • Stakeholders: Board, CTO, Legal, Compliance                                  │
│ • Contexto externo: Regulaciones, riesgos, mercado                             │
│                                                                                 │
│ Proceso:                                                                        │
│ • Define qué decisiones son críticas                                           │
│ • Define quién decide (autoridad distribuida)                                  │
│ • Define criterios públicos (transparencia)                                    │
│ • Define procesos de colaboración (no aislamiento)                             │
│                                                                                 │
│ Salida:                                                                         │
│ • Policy framework (qué está permitido)                                        │
│ • Decision criteria (cómo se evalúa)                                           │
│ • Authority matrix (quién decide qué)                                          │
│ • Escalation paths (qué pasa si hay conflicto)                                 │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ Decisiones predecibles                                                       │
│ ✓ Poder explícito (no oculto)                                                  │
│ ✓ Accountability distribuida                                                   │
│ ✓ Reducción de conflictos no-resueltos                                         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    ▼
                            DEL GOVERNANCE EMERGE:
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 2: OPERATING MODEL (Cómo se trabaja)                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Policy framework de Governance                                               │
│ • Capabilities disponibles (qué puede hacerse técnicamente)                    │
│ • Restricciones (qué NO puede hacerse)                                         │
│ • Objetivos organizacionales                                                   │
│                                                                                 │
│ Proceso:                                                                        │
│ • Define qué roles existen (Teams, personas, agentes)                          │
│ • Define qué tareas hace cada rol                                              │
│ • Define workflows (cómo se integra el trabajo)                                │
│ • Define responsabilidades (quién responde ante qué)                           │
│ • Define comunicaciones (cómo se coordinan)                                    │
│                                                                                 │
│ Salida:                                                                         │
│ • Organization structure (teams)                                               │
│ • Role definitions (qué hace cada uno)                                         │
│ • Workflow diagrams (cómo se conecta el trabajo)                               │
│ • Responsibility matrix (quién es responsable)                                 │
│ • Communication protocols (cómo hablan)                                        │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ Claridad de roles (nadie confundido)                                         │
│ ✓ Workflows eficientes (no silos)                                              │
│ ✓ Responsabilidad clara (no excusas)                                           │
│ ✓ Coordinación óptima (no fricción)                                            │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    ▼
                      OPERATING MODEL DEFINE QUÉ SE RECUERDA:
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 3: ORGANIZATIONAL MEMORY (Qué se recuerda)                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Operating model define qué necesita la organización saber                    │
│ • Workflows definen qué información fluye                                      │
│ • Gobernanza define qué es sensible / privado / público                        │
│                                                                                 │
│ Proceso:                                                                        │
│ • Define qué la organización DEBE recordar (decisiones, contexto, historiales) │
│ • Define qué debe ser accesible (políticas de acceso)                          │
│ • Define qué debe ser seguro (encriptación, backup)                            │
│ • Define ciclo de vida (cuándo archivar, cuándo borrar)                        │
│ • Define dueños de datos (quién es responsable de qué)                         │
│                                                                                 │
│ Salida:                                                                         │
│ • Data taxonomy (qué datos existen)                                            │
│ • Data ownership (quién las posee)                                             │
│ • Access policies (quién puede acceder)                                        │
│ • Retention policies (cuánto tiempo guardar)                                   │
│ • Security requirements (protección)                                           │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ La organización recuerda lo importante (sin información fragmentada)         │
│ ✓ Acceso controlado (seguridad)                                                │
│ ✓ Dueños de datos claros (accountability)                                      │
│ ✓ Historiales íntegros (governance audit trail)                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    ▼
                  MEMORY DEFINE CÓMO SE ACCESA / ESTRUCTURA:
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 4: MEMORY ARCHITECTURE (Cómo está estructurada)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Data taxonomy de Organizational Memory                                       │
│ • Access patterns (quién necesita acceder, con qué frecuencia)                │
│ • Technical constraints (qué sistemas disponibles)                             │
│                                                                                 │
│ Proceso:                                                                        │
│ • Diseña schemas (cómo se estructura cada tipo de dato)                        │
│ • Diseña índices (cómo se busca rápidamente)                                   │
│ • Diseña versionado (cómo se mantiene historiales)                             │
│ • Diseña caché (cómo se acelera acceso)                                        │
│ • Diseña replicación (cómo se asegura disponibilidad)                          │
│                                                                                 │
│ Salida:                                                                         │
│ • Data schemas (estructura)                                                    │
│ • Index strategies (búsqueda)                                                  │
│ • Version control (historiales)                                                │
│ • Caching layers (performance)                                                 │
│ • Replication model (availability)                                             │
│                                                                                 │
│ Technical consideration:                                                        │
│ • NO es diseño de bases de datos (eso viene después)                           │
│ • ES: Cómo conceptualmente la memoria se estructura para ser útil              │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ Acceso rápido a información crítica (agentes no esperan)                     │
│ ✓ Información consistente (no conflictiva)                                     │
│ ✓ Historiales completos (auditoría + aprendizaje)                              │
│ ✓ Escalabilidad (funciona con millones de registros)                           │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    ▼
                      MEMORY ARCHITECTURE HABILITA CONTEXTO:
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 5: CONTEXT SYSTEMS (Cómo se distribuye contexto)                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Memory Architecture disponible                                               │
│ • Agent needs (qué información necesitan los agentes)                          │
│ • Operating model workflows (dónde operan los agentes)                         │
│                                                                                 │
│ Proceso:                                                                        │
│ • Define qué contexto es crítico para cada situación                           │
│ • Define cómo se selecciona contexto (qué es "relevante")                      │
│ • Define cómo se entrega contexto (cuándo, a quién, cómo)                      │
│ • Define límites de contexto (demasiada info = parálisis)                      │
│ • Define fricción de acceso (balancear privacidad vs necesidad)                │
│                                                                                 │
│ Salida:                                                                         │
│ • Context taxonomies (qué tipos de contexto existen)                           │
│ • Retrieval strategies (cómo se encuentra contexto relevante)                  │
│ • Delivery mechanisms (cómo se entrega)                                        │
│ • Context windows (cuánta información por situación)                           │
│ • Filtering rules (qué se excluye por privacidad/seguridad)                    │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ Agentes tienen contexto correcto (sin overwhelm)                             │
│ ✓ Privacidad respetada (no acceso a datos no autorizados)                      │
│ ✓ Latencia baja (agentes no esperan)                                           │
│ ✓ Confiabilidad (contexto correcto, no "alucinaciones")                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    ▼
                    CONTEXTO SYSTEMS HABILITA AGENTS EFECTIVOS:
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 6: ENTERPRISE AGENT ARCHITECTURE (Cómo actúan)                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Entrada:                                                                        │
│ • Context Systems disponibles                                                  │
│ • Operating Model define qué agentes necesitan hacer                           │
│ • Governance define qué agentes pueden hacer                                   │
│                                                                                 │
│ Proceso:                                                                        │
│ • Define qué agentes existen (cómo se dividen las responsabilidades)           │
│ • Define qué cada agente hace (su responsabilidad)                             │
│ • Define cómo los agentes colaboran (qué información comparten)                │
│ • Define decisiones de agentes vs humanos (qué es automático)                  │
│ • Define escalation paths (cuándo pedir ayuda humana)                          │
│                                                                                 │
│ Salida:                                                                         │
│ • Agent taxonomy (qué agentes existen)                                         │
│ • Agent capabilities (qué puede hacer cada uno)                                │
│ • Agent collaboration model (cómo trabajan juntos)                             │
│ • Human-in-the-loop policies (cuándo decide humano)                            │
│ • Escalation flows (cuándo y cómo se escala)                                   │
│                                                                                 │
│ Resultado esperado:                                                             │
│ ✓ Trabajo distribuido (agentes trabajan en paralelo)                           │
│ ✓ Autonomía controlada (agentes son útiles pero seguros)                       │
│ ✓ Colaboración efectiva (no competencia entre agentes)                         │
│ ✓ Intervención humana posible (no "AI out of control")                         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘


╔════════════════════════════════════════════════════════════════════════════════╗
║ INTEGRACIÓN FINAL: CÓMO TRABAJAN JUNTAS LAS 6 CAPAS                           ║
╚════════════════════════════════════════════════════════════════════════════════╝

FLUJO DE ARRIBA A ABAJO (Cómo se construye):

Governance ← responde "¿Qué decisiones decidimos?"
   ↓ habilita
Operating Model ← responde "¿Cómo se hace el trabajo?"
   ↓ habilita
Organizational Memory ← responde "¿Qué recuerda la org?"
   ↓ habilita
Memory Architecture ← responde "¿Cómo se estructura memoria?"
   ↓ habilita
Context Systems ← responde "¿Cómo se distribuye información?"
   ↓ habilita
Enterprise Agent Architecture ← responde "¿Cómo actúan los agentes?"

FLUJO DE ABAJO A ARRIBA (Cómo se ejecuta):

Agents actúan necesitando contexto
   ↑ piden a
Context Systems que recuperan de
   ↑ Memory Architecture que accede a
   ↑ Organizational Memory cuyas políticas define
   ↑ Operating Model cuyas responsabilidades define
   ↑ Governance

CICLOS DE FEEDBACK:

Agents actúan
   → histórial va a Memory
   → Memory Architecture indexa
   → Context Systems usa para futuras decisiones
   → Ciclo se repite, mejorando cada iteración

Si hay error:
   → escalation a Operating Model
   → Operating Model evalúa si hay cambio en Governance necesario
   → Si sí, Governance se actualiza
   → Ciclo de aprendizaje completo

PROPIEDADES EMERGENTES:

Con esta arquitectura:
✓ La organización aprende (feedback loops)
✓ Las decisiones son consistentes (governance común)
✓ El trabajo escala (operating model distribuye)
✓ Nada se pierde (memory es persistente)
✓ La información fluye sin fricciones (context systems)
✓ Los agentes son efectivos (contexto correcto + límites claros)
```

---

## 6. MAPEO DE ARTÍCULOS

### Tabla de artículos por capa

```
╔════════════════════════════════════════════════════════════════════════════════╗
║ MAPEO COMPLETO: ARTÍCULOS MAPEADOS A CAPAS DEL FRAMEWORK                      ║
╚════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 1: GOVERNANCE — "¿Quién decide?"                                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-20: Enterprise Governance and Distributed Authority                 │
│   └─ Read time: 18-20 min                                                       │
│   └─ URL: /articulos/governance-autoridad-distribuida                          │
│   └─ Content: Principios de governance, cómo se distribuye poder,              │
│               criterios públicos, decision frameworks                           │
│   └─ Why obligatory: Foundation. TODO lo demás depende de governance.          │
│   └─ Dependency: None (es la base)                                             │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS (contexto histórico):                                    │
│ (Lectura recomendada, no obligatoria)                                          │
│   └─ Articles 1-10: [Contexto que llevó a entender governance]                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 2: OPERATING MODEL — "¿Cómo se organiza el trabajo?"                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-21: Operating Model for AI-Driven Organizations                     │
│   └─ Read time: 22-24 min                                                       │
│   └─ URL: /articulos/operating-model-ia                                        │
│   └─ Content: Cómo se estructura el trabajo, roles, workflows,                 │
│               responsabilidades, coordinación                                   │
│   └─ Why obligatory: Define cómo funciona día a día. Requiere governance       │
│                       para establecer limits.                                   │
│   └─ Dependency: Requires Article-20 (governance first)                        │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS (contexto):                                              │
│   └─ Articles 11-15: [Cómo se llegó a este operating model]                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 3: ORGANIZATIONAL MEMORY — "¿Qué se recuerda?"                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-22: Organizational Memory and Information as Strategy                │
│   └─ Read time: 25-27 min (estimated, based on corpus)                        │
│   └─ URL: /articulos/memoria-organizacional-estrategia                         │
│   └─ Content: Qué debe recordar la organización, políticas de                  │
│               acceso, propiedad de datos, ciclo de vida                         │
│   └─ Why obligatory: Define qué información existe. TODAS las capas            │
│                       siguientes dependen de memory.                            │
│   └─ Dependency: Requires Article-20 + 21 (what to govern + how)              │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS:                                                         │
│   └─ Articles 16-17: [Cómo la memoria se convirtió estrategia]                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 4: MEMORY ARCHITECTURE — "¿Cómo se estructura?"                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-23: Memory Architecture for Context-Aware Systems                    │
│   └─ Read time: 26-28 min (estimated)                                          │
│   └─ URL: /articulos/arquitectura-memoria-sistemas-contexto                    │
│   └─ Content: Schemas, indexing, versioning, caching,                          │
│               replicación. Cómo se accede a memoria de forma eficiente         │
│   └─ Why obligatory: Define cómo se estructura datos para ser útiles.          │
│                       Requiere entender governance + memory policies.           │
│   └─ Dependency: Requires Article-22 (memory strategy first)                   │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS:                                                         │
│   └─ [Technical deep-dives, si existen]                                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 5: CONTEXT SYSTEMS — "¿Cómo se distribuye contexto?"                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-24: Context Systems and Information Flow in Distributed Agents       │
│   └─ Read time: 24-26 min (estimated)                                          │
│   └─ URL: /articulos/sistemas-contexto-flujo-informacion                      │
│   └─ Content: Cómo se selecciona contexto, cómo se entrega, límites,           │
│               relevancia, filtrado por seguridad/privacidad                     │
│   └─ Why obligatory: Define cómo la información fluye A los agentes.           │
│                       Critical para agent efectividad.                          │
│   └─ Dependency: Requires Article-23 (memory architecture available)           │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS:                                                         │
│   └─ [Estudios de caso si existen]                                             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 6: ENTERPRISE AGENT ARCHITECTURE — "¿Cómo actúan?"                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-25: Enterprise Agent Architecture and Organizational Autonomy        │
│   └─ Read time: 16 min (current spec)                                          │
│   └─ URL: /articulos/arquitectura-agentes-autonomia                            │
│   └─ Content: Qué agentes existen, sus responsabilidades,                      │
│               cómo colaboran, escalation paths, human-in-loop decisions         │
│   └─ Why obligatory: Define cómo los agentes operan en el sistema.             │
│                       Es el último layer antes de ejecución.                    │
│   └─ Dependency: Requires Article-24 (context available to agents)             │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS:                                                         │
│   └─ [Patrones de agent specific si existen]                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CAPA 6B (SÍNTESIS): FRAMEWORK ARCHWISE — "¿Cómo trabajan JUNTAS?"              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ARTÍCULOS OBLIGATORIOS:                                                         │
│                                                                                 │
│ ✓ Article-26: Framework Archwise - Integration and System Coherence            │
│   └─ Read time: 27 min                                                          │
│   └─ URL: /articulos/framework-archwise-integracion                            │
│   └─ Content: Cómo las 6 capas se integran. Flujos de arriba a abajo,         │
│               flujos de abajo a arriba, feedback loops, propiedades emergentes │
│   └─ Why obligatory: CIERRA el círculo. Sin Article-26, capas se ven           │
│                       separadas. Article-26 las integra.                       │
│   └─ Dependency: Requires ALL capas 1-6 (Articles 20-25)                       │
│                                                                                 │
│ ARTÍCULOS RELACIONADOS:                                                         │
│   └─ [Future case studies, aplicaciones verticales si existen]                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CONTEXTO HISTÓRICO (ARTÍCULOS 1-19) — "Cómo llegamos aquí"                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ STATUS: RECOMENDADO (no obligatorio)                                            │
│                                                                                 │
│ PROPÓSITO:                                                                      │
│ Proporcionar perspectiva sobre cómo Archwise se desarrolló.                    │
│ Responde: "¿Por qué pensamos así?"                                             │
│ Dirigido a: Investigadores, arquitectos curiosos, implementadores             │
│                                                                                 │
│ CONTENIDO ESTIMADO:                                                             │
│ • Articles 1-10: Contexto sobre problemas de escala IA + exploración inicial  │
│ • Articles 11-15: Evolución hacia governance, memory, operativo               │
│ • Articles 16-19: Unificación en un framework coherente                       │
│                                                                                 │
│ LECTURA TOTAL: ~10 horas                                                       │
│                                                                                 │
│ RECOMENDACIÓN: Leer DESPUÉS de entender las 6 capas (20-26).                   │
│ Proporciona continuidad y contextualiza cada decisión.                         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘


╔════════════════════════════════════════════════════════════════════════════════╗
║ MATRIZ DE DEPENDENCIA: QUÉ REQUIERE QUÉ                                       ║
╚════════════════════════════════════════════════════════════════════════════════╝

Article-20 (Governance)
   NO REQUIERE NADA

Article-21 (Operating Model)
   REQUIERE: Article-20
   RAZÓN: Operating Model se construye dentro de límites de Governance

Article-22 (Organizational Memory)
   REQUIERE: Article-20, Article-21
   RAZÓN: Qué recordar se decide bajo Governance. Cómo se organiza bajo Operating Model

Article-23 (Memory Architecture)
   REQUIERE: Article-22
   RAZÓN: La arquitectura se construye para implementar la estrategia de memoria

Article-24 (Context Systems)
   REQUIERE: Article-23
   RAZÓN: Context Systems accesa Memory Architecture

Article-25 (Enterprise Agent Architecture)
   REQUIERE: Article-24
   RAZÓN: Agentes operan con contexto de Context Systems

Article-26 (Framework Archwise)
   REQUIERE: Article-20, Article-21, Article-22, Article-23, Article-24, Article-25
   RAZÓN: Síntesis. Integra todas las capas.

LECTURA MÍNIMA VIABLE (Ejecutivo):
   Article-20 (Governance)
   Article-21 (Operating Model)
   Article-26 (Integration)
   TOTAL: ~60-65 minutos
   RESULTADO: Entiendes conceptos principales + cómo se integran

LECTURA COMPLETA (Arquitecto):
   Article-20 → 21 → 22 → 23 → 24 → 25 → 26
   TOTAL: ~155-175 minutos = 2.5-3 horas
   RESULTADO: Entiendes todo. Puedes implementar decisiones arquitectónicas.

LECTURA CON CONTEXTO (Investigador):
   Articles 1-26
   TOTAL: ~550+ minutos = 9+ horas
   RESULTADO: Completa perspectiva histórica + conceptual + síntesis.

```

---

## 7. NAVEGACIÓN

### Desde distintos puntos del sitio

```
╔════════════════════════════════════════════════════════════════════════════════╗
║ NAVEGACIÓN: CÓMO LLEGAN LOS USUARIOS A /FRAMEWORK                             ║
╚════════════════════════════════════════════════════════════════════════════════╝

ENTRADA 1: DESDE HOME
────────────────────────────────────────────────────────────────────────────────

Home page (archwise.org)
   ↓
   [Primary CTA] "Learn the Framework"
   OR
   [Secondary CTA] "Understand Archwise Architecture"
   ↓
   /framework

Patrón: Usuario llega a Home queriendo entender "¿Qué es esto?"
Resultado esperado: Va a /framework para educarse sin fricción.

Visual en Home:
┌──────────────────────────────────────┐
│ LEARN THE ARCHWISE FRAMEWORK         │
│                                      │
│ Understand how enterprises operate   │
│ IA as integrated systems.            │
│                                      │
│ [Explore Framework →]                │
│ [Browse Articles →]                  │
│ [Subscribe to Updates →]             │
└──────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────

ENTRADA 2: DESDE /ARTICULOS (Article listing)
────────────────────────────────────────────────────────────────────────────────

/articulos (page with 26 articles listed)
   ↓
   [Sidebar CTA] "New to Archwise?"
   ↓
   [Link] "Start with Framework Overview"
   ↓
   /framework

Patrón: Usuario browse artículos, se abruma por cantidad, ve CTA que lo orienta.
Resultado esperado: Entiende qué leer primero (framework antes de articles).

Visual en /articulos:
┌──────────────────────────────────────┐
│ NEW TO ARCHWISE?                     │
│                                      │
│ Don't know where to start?           │
│ We recommend starting with:          │
│                                      │
│ → The Framework Overview             │
│ → Read 26 articles in order          │
│ → Executive path (30 min)            │
│                                      │
│ [Go to Framework →]                  │
└──────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────

ENTRADA 3: DESDE UN ARTÍCULO INDIVIDUAL
────────────────────────────────────────────────────────────────────────────────

/articulos/governance-autoridad-distribuida (Article-20)
   ↓
   [Article Header] "Part of the Archwise Framework"
   ↓
   [Link] "View full framework map"
   ↓
   /framework

O desde cualquier artículo:

[Article Footer]
┌──────────────────────────────────────┐
│ PART OF THE ARCHWISE FRAMEWORK       │
│ This article is Capa 1: Governance   │
│                                      │
│ → View all 6 layers                  │
│ → Read framework overview            │
│ → Suggested next reading:            │
│   Article-21 (Operating Model)       │
└──────────────────────────────────────┘

Patrón: Usuario lee un artículo, quiere entender contexto completo.
Resultado esperado: Va a /framework para ver dónde está lo que leyó.

────────────────────────────────────────────────────────────────────────────────

ENTRADA 4: DESDE NEWSLETTER
────────────────────────────────────────────────────────────────────────────────

Newsletter email (about new article, update, etc.)
   ↓
   [Email CTA] "Learn the full framework"
   ↓
   /framework

O:
Newsletter signup form (en /framework)
   ↓
   User suscribe
   ↓
   Confirmation email con link a /framework

Patrón: Email marketing drive traffic to framework.
Resultado esperado: Nuevos suscriptores entienden valor completo.

────────────────────────────────────────────────────────────────────────────────

ENTRADA 5: DESDE /ABOUT (About page)
────────────────────────────────────────────────────────────────────────────────

/about (who we are, our thesis)
   ↓
   [CTA] "See the Framework we developed"
   ↓
   /framework

Patrón: User quiere entender Archwise como organización.
Resultado esperado: Ve cómo el framework concretiza la tesis.

────────────────────────────────────────────────────────────────────────────────

ENTRADA 6: DESDE REFERENCIAS EXTERNAS
────────────────────────────────────────────────────────────────────────────────

External site (LinkedIn, Medium, etc.)
   ↓
   [External link] "archwise.org/framework"
   ↓
   /framework

Patrón: Referencia externa comparte la URL directamente.
Resultado esperado: Nuevo lector desembarca en landing page con contexto claro.

────────────────────────────────────────────────────

DESDE /FRAMEWORK: A DÓNDE VAN LOS USUARIOS
────────────────────────────────────────────────────

Dentro de /framework, CTA secundarias:

[Sección 5] Para cada capa:
   "Read Article-20 →" (link a artículo específico)

[Sección 6] Botones de recorrido:
   "Start Executive Path" → Article-20
   "Start Complete Framework" → Article-20 with map
   "Browse all articles" → /articulos

[Sección 9] CTA editorial:
   "Explore articles by topic" → /articulos with filters
   "Subscribe to updates" → Newsletter form
   "About us" → /about

────────────────────────────────────────────────────

NAVEGACIÓN BREADCRUMB
────────────────────────────────────────────────────

/framework:
Home > Framework

/articulos/governance-autoridad-distribuida:
Home > Articles > Governance

/about:
Home > About
(pero con link to framework from here)

────────────────────────────────────────────────────

NAVIGATION BAR (Header)
────────────────────────────────────────────────────

[Standard header - all pages]

Archwise logo → Home

Nav options:
   • Home
   • Framework ← DESTACADO como sección principal
   • Articles
   • About
   • Newsletter (CTA)

[Alternativa: si Framework es tan importante, podrías ponerla ANTES de Articles]

    • Home
    • Framework ← First, before articles
    • Articles
    • About
    • Newsletter

────────────────────────────────────────────────────

FLUJO COMPLETO (USER JOURNEY)
────────────────────────────────────────────────────

USUARIO NUEVO:

Home
  ↓ (intriga)
/framework (main content)
  ↓ (quiero aprender)
Article-20 (Governance)
  ↓ (quiero entender más)
Article-21 (Operating Model)
  ↓
... continues through Article-26
  ↓
/articulos (explora temas específicos)
  ↓
Newsletter (suscripción)

USUARIO TÉCNICO:

Referencia externa
  → /framework
  ↓
Article-23 (Memory Architecture)
  ↓
Article-24 (Context Systems)
  ↓
Article-25 (Agent Architecture)
  ↓
/articulos (busca implementación)

USUARIO EJECUTIVO:

Home
  ↓
/framework
  ↓ (executive path)
Article-20 + 21 + 26
  ↓
Newsletter

╔════════════════════════════════════════════════════════════════════════════════╗
║ CONCLUSIÓN: NAVEGACIÓN                                                        ║
╚════════════════════════════════════════════════════════════════════════════════╝

Principios:

1. /framework es PUNTO DE ENTRADA → no es página profunda
2. Home → /framework es el camino natural
3. Desde /framework hay múltiples salidas claras
4. Cada artículo vincula de vuelta a /framework para contexto
5. No hay "trampa" — usuario siempre sabe dónde está
```

---

## 8. ESCALABILIDAD FUTURA

### Cómo evoluciona cuando crece el corpus

```
╔════════════════════════════════════════════════════════════════════════════════╗
║ ESCALABILIDAD: CÓMO EVOLUCIONA /FRAMEWORK CON MÁS ARTÍCULOS                   ║
╚════════════════════════════════════════════════════════════════════════════════╝

ESCENARIO 1: HOY (26 artículos)
────────────────────────────────────────────────────────────────────────────────

Estructura:
• 6 capas principales (Articles 20-26)
• 19 artículos contexto (Articles 1-19)
• /framework = landing page + mapa + guía de lectura

Complejidad: Baja
Mantenimiento: Bajo
Cambio de estructura: NO necesario

Página es "sostenible" tal como está.

────────────────────────────────────────────────────────────────────────────────

ESCENARIO 2: 30 ARTÍCULOS
────────────────────────────────────────────────────────────────────────────────

Nuevo contexto:
• Los 26 anteriores intactos
• 4 nuevos artículos, ¿dónde van?

Decisiones:
1. ¿Son profundizaciones en capas existentes? (Ej: Article-23B: Advanced Memory Arch)
2. ¿Son casos de uso específicos? (Ej: Finance, Healthcare)
3. ¿Son implementaciones técnicas? (Ej: PostgreSQL schema for Memory)

Opción A: Artículos como profundizaciones
────────────────────────────────────────────

Si Articles 27-30 son "Deep dives" en capas existentes:

/framework cambio:

[Sección 5: Explicación por capa]

DE:
CAPA 4: MEMORY ARCHITECTURE
└─ Article-23 (obligatorio)

A:
CAPA 4: MEMORY ARCHITECTURE
├─ Article-23 (Required reading)
│  └─ [Link to Article-23]
└─ Advanced topics:
   ├─ Article-27: PostgreSQL Schemas for Memory (Optional technical deep dive)
   ├─ Article-28: Optimization strategies (Optional)
   └─ Article-29: Distributed memory systems (Optional)

[Sección 7: Artículos por capa]

CAPA 4: MEMORY ARCHITECTURE
├─ Article-23: Memory Architecture [OBLIGATORIO]
│  └─ Conceptual
└─ Advanced/Technical:
   ├─ Article-27: PostgreSQL Schemas
   │  └─ Tipo: OPCIONAL TÉCNICO
   │  └─ Requiere: Article-23
   └─ Article-28: Optimization
      └─ Tipo: OPCIONAL TÉCNICO
      └─ Requiere: Article-23 + Article-27

[Sección 6: Recorridos de lectura]

AGREGAR:
CAMINO 4: TÉCNICO PROFUNDO (300-360 min)
├─ Camino Arquitecto (Articles 20-26)
├─ + Deep dives técnicos (Articles 27-30)
└─ Resultado: Estás listo para implementar

Impacto en /framework:
✓ Estructura IGUAL (no cambios de layout)
✓ Solo agregar subsecciones en secciones 5, 6, 7
✓ Mantener complejidad bajo control

────────────────────────────────────────────────────────────────────────────────

Opción B: Artículos como casos de uso verticales
────────────────────────────────────────────────

Si Articles 27-30 son "Use cases" (Finance, Healthcare, etc.):

/framework cambio:

[NUEVA SECCIÓN 10: Vertical use cases]

┌──────────────────────────────────────────────────────────────┐
│ ARCHWISE IN PRACTICE: VERTICAL USE CASES                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ The framework applies across industries. See how:           │
│                                                              │
│ • Finance: Article-27 (Risk governance, memory of trades)   │
│ • Healthcare: Article-28 (Patient privacy, context systems) │
│ • Manufacturing: Article-29 (Operations, agent autonomy)    │
│ • Retail: Article-30 (Customer context, decision flows)    │
│                                                              │
│ ¿Para qué sirven?                                           │
│ • Ver framework adaptarse a contextos reales               │
│ • Entender temas como privacy, compliance desde el inicio  │
│ • Validar que el framework es general, no solo teórico     │
│                                                              │
│ ¿Cuándo leerlos?                                            │
│ • DESPUÉS de leer capas 1-6                                │
│ • Cuando trabajes en una industria específica               │
│ • Para inspiration / case study learning                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Impacto en /framework:
✓ Solo agregar nueva sección al final
✓ NO cambia estructura existente
✓ Estructura escalable

────────────────────────────────────────────────────────────────────────────────

ESCENARIO 3: 50 ARTÍCULOS
────────────────────────────────────────────────────────────────────────────────

Nuevo contexto:
• 26 base intactos
• 20 nuevos: mix de deepdives, casos de uso, implementaciones, patterns

Problema emergente:
"¿Cómo alguien sabe dónde está cada artículo entre 50?"

Soluciones:

1. SUBCATEGORIZACIÓN
────────────────

Agregar a /framework filtros/organización:

[NUEVA SECCIÓN 11: Article taxonomy]

┌──────────────────────────────────────────────────────────────┐
│ ALL ARTICLES BY CATEGORY                                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ FOUNDATIONAL (Capas 1-6):                                   │
│ ├─ Governance (Articles 20, 27-28)                         │
│ ├─ Operating Model (Articles 21, 29-30)                    │
│ ├─ Organizational Memory (Articles 22, 31-32)              │
│ ├─ Memory Architecture (Articles 23, 33-35)                │
│ ├─ Context Systems (Articles 24, 36-37)                    │
│ └─ Enterprise Agents (Articles 25, 38-39)                  │
│ └─ Integration (Article-26)                                │
│                                                              │
│ TECHNICAL DEEP DIVES:                                       │
│ ├─ Schema design (Articles 27, 28)                         │
│ ├─ Performance optimization (Articles 29, 30)              │
│ └─ Distributed systems (Article 31)                         │
│                                                              │
│ USE CASES / VERTICALS:                                      │
│ ├─ Finance (Article 32)                                     │
│ ├─ Healthcare (Article 33)                                  │
│ ├─ Manufacturing (Article 34)                               │
│ └─ Retail (Article 35)                                      │
│                                                              │
│ IMPLEMENTATION PATTERNS:                                    │
│ ├─ Scalability patterns (Article 36)                        │
│ ├─ Security patterns (Article 37)                           │
│ └─ Migration patterns (Article 38)                          │
│                                                              │
│ HISTORICAL CONTEXT:                                         │
│ └─ Articles 1-19 (origin story)                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Impacto en /framework:
✓ Cambio estructura más significativo
✓ Pero sigue siendo escalable
✓ Secciones 1-9 mantenidas (core content)
✓ Secciones 10+ = categorización

2. BÚSQUEDA Y FILTROS
────────────────────

Agregar capacidad de búsqueda a /framework:

[Search box on /framework]

"Search 50+ articles"
• By keyword
• By layer
• By difficulty
• By reading time
• By vertical

3. RECOMENDADOR PERSONALIZADO
─────────────────────────────

Based on user profile (cargado vía form):

"I am a: [CTO | Architect | Engineer | Executive]"
"I care about: [Governance | Performance | Security | Implementation]"
"Time available: [10 min | 30 min | 2 hours | Full deep dive]"

↓

Archwise recommends:
"Based on your profile, read these 7 articles in this order"

────────────────────────────────────────────────────────────────────────────────

ESCENARIO 4: 100+ ARTÍCULOS
────────────────────────────────────────────────────────────────────────────────

En este punto, /framework necesita evolucionar A:

OPCIÓN A: /framework se convierte en "Hub"
────────────────────────────────────────

/framework NO es una página.
Es un sección con subsecciones:

/framework/
├─ /framework/overview (landingpage actual)
├─ /framework/foundation (capas 1-6)
├─ /framework/deep-dives (detalles técnicos)
├─ /framework/use-cases (industrias específicas)
├─ /framework/patterns (implementation patterns)
├─ /framework/roadmap (qué viene)
└─ /framework/faq (preguntas)

Impacto:
✓ Escalable indefinidamente
✓ Mantiene /framework como centro neurálgico
✓ Permite crecer sin destruir navegación
✗ Requiere más mantenimiento

OPCIÓN B: /framework se mantiene como es + /academy
─────────────────────────────────────────────────────

/framework = síntesis permanente (Articles 20-26)

NEW: /academy = centro de aprendizaje
├─ /academy/paths (learning paths)
├─ /academy/patterns (implementation)
├─ /academy/use-cases (verticals)
├─ /academy/glossary (términos)
└─ /academy/faq (preguntas)

Impacto:
✓ /framework stays simple y evergreen
✓ Nueva sección para crecimiento
✗ Fragmenta la experiencia

────────────────────────────────────────────────────────────────────────────────

RECOMENDACIÓN DE ESCALABILIDAD
────────────────────────────────────────────────────────────────────────────────

AT 26-30 artículos:
✓ /framework tal como está
✓ Agregar subsecciones en secciones 5-7

AT 30-50 artículos:
✓ Agregar sección 11: Article taxonomy
✓ Agregar search+filters
✓ Mantener /framework como página única

AT 50+ artículos:
✓ /framework se convierte en /framework/overview (hub page)
✓ Crear /framework/foundation, /deep-dives, etc.
✓ O alternativa: mantener /framework simple + crear /academy

PRINCIPIO GUÍA:

**Jamás** sacrifiques claridad por cantidad.

Cuando /framework se vuelve confusa = crear estructura hierarchical nueva.

NO dejes que /framework sea "página que lo tiene TODO". Eso la mata.

```

---

## 9. RIESGOS Y MITIGATION

### Análisis de riesgos potenciales

```
╔════════════════════════════════════════════════════════════════════════════════╗
║ RIESGOS IDENTIFICADOS Y ESTRATEGIAS DE MITIGACIÓN                              ║
╚════════════════════════════════════════════════════════════════════════════════╝

RIESGO 1: COMPLEJIDAD CONCEPTUAL
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Visitante lee /framework y se abruma.
"6 capas, dependencias, flujos... ¿qué hago ahora?"

Causa raíz:
Mucha información. Múltiples conexiones. Difícil de "procesar".

Impacto esperado:
Bounce rate alto. Abandono sin acción Clara.

Mitigation Strategy:

1. SEGMENTAR CONTENIDO POR NIVEL
   ├─ Sección 1-4: Todos(executives, architects, engineers)
   ├─ Sección 5-7: Arquitectos principalmente
   └─ Sección 8-9: Específico por uso case

2. PROGRESSIVE DISCLOSURE
   ├─ Mostrar primero "las 6 capas en 1 minuto"
   ├─ Luego: "¿Quieres ir más profundo?"
   ├─ Secciones "collapsible" para reducir overwhelm visual
   └─ Detalles ocultos hasta que usuario especíticamente los busca

3. VISUAL HERESIES
   ├─ Mapa visual (sección 4) = 90% del valor
   ├─ ASCII en doc → diagrama interactivo real
   ├─ Color coding (capas diferentes colores)
   ├─ Animaciones mostrando flujos
   └─ Interactivo: "click on layer X to expand"

4. CLEAR PATHWAYS
   ├─ Sección 6: Caminos específicos por rol
   ├─ "If you're a CTO: START HERE"
   ├─ "If you're an Engineer: START HERE"
   └─ Reducir "choice paralysis"

5. STORYTELLING
   └─ Presentar framework como narrativa, no like lista
      "Primero necesitas Governance, porque..."
      → Causa/efecto, no solo lista


Indicadores de riesgo:
⚠️ Si bounce rate en /framework > 70% → complejidad problema
⚠️ Si promedio tiempo en página < 2 minutos → overwhelm
⚠️ Si 90% de usuarios no continúan a artículos → falta clarity


────────────────────────────────────────────────────────────────────────────────

RIESGO 2: DUPLICACIÓN CON ARTÍCULOS
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Sección 5 de /framework explica governance.
Article-20 también explica governance.
¿No es repetición?

Causa:
Intentar ser comprehensivo en /framework + artículos también comprehensive.

Impacto esperado:
Siente como waste para lector.
"¿Cuál leer? ¿Por qué hay dos versiones?"

Mitigation Strategy:

1. PROPÓSITO DIFERENTE
   /framework: "QUÉ es governance + POR QUÉ importa"
   Article-20: "CÓMO se implementa governance + DETALLES profundos"

2. NIVEL DE DETALLE
   /framework: 200-300 palabras por capa
   Article-20: 3000-5000 palabras + ejemplos + estudios de caso

3. ORIENTACIÓN DIFERENTE
   /framework: "Entender arquitectura conceptual"
   Article-20: "Implementar governance decisions"

4. CLARIDAD EXPLÍCITA
   En /framework Sección 5:
   "This section introduces governance. Not a replacement for Article-20.
    Think of this as 'why' and Article-20 as 'how'."

5. LINKING STRATEGY
   ├─ /framework no replika toda la información
   ├─ /framework presenta arquitectura
   ├─ Links a artículos para detalles
   └─ Artículos "completan" el framework

Indicadores de riesgo:
⚠️ Si usuarios dicen "this is repetitive" → duplicación real
⚠️ Si salida de /framework a artículos es baja → falta de motivation
⚠️ Si bounce rate HIGH en /framework pero LOW en Articles → confusion


────────────────────────────────────────────────────────────────────────────────

RIESGO 3: MANTENIMIENTO DIFÍCIL
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Publicamos Article-27 (nuevo, importante).
¿Dónde va en /framework?
¿Hay que actualizar todas las secciones?
Total: 3 horas trabajo.

Causa:
/framework está "hardcoded". Cambiar estructura = cambiar múltiples secciones.

Impacto esperado:
Dilatación. Tardanza en actualizar framework cuando tenemos nuevo artículo.
Framework se vuelve desactualizado.

Mitigation Strategy:

1. PLANTILLA CLARA
   Documenta cómo agrega nuevos artículos:
   ├─ Si es profundización en capa X → agregar a sección 5
   ├─ Si es capa nueva → agregar fila en mapeo
   ├─ Si es vertical/use-case → agregar sección nueva
   └─ "Este documento" incluye plantilla


2. VERSIONADO
   /framework/v1 = estructura actual (26 articulos)
   /framework/v2 = estructura cuando 30 artículos (si necesario)
   
   Permite cambio structure sin break existing


3. SEPARACIÓN DE CONCERNS
   ├─ Sección 1-4: NUNCA cambian (core value)
   ├─ Sección 5-7: Cambios cuando hay nuevos artículos
   ├─ Sección 8-9: Cambios cuando hay preguntas nuevas
   └─ Documentar esto

4. AUTOMATED CHECKS
   ├─ Verificar que artículos listados en /framework realmente existen
   ├─ Verificar que links no están rotos
   ├─ Verificar que reading times están actualizados
   └─ Test automation



Indicadores de riesgo:
⚠️ Si cada nuevo artículo requiere >1 hora para actualizar /framework → procesar ineficiente
⚠️ Si enlaces a artículos están rotos → no hay QA
⚠️ Si /framework no actualiza en días del nuevo artículo publicado → abandonment

────────────────────────────────────────────────────────────────────────────────

RIESGO 4: PROBLEMAS DE SEO
────────────────────────────────────────────────────────────────────────────────

Síntoma:
/framework no rankea en Google para keywords que debería.
"Enterprise governance", "AI architecture", etc.

Causa:
Página conceptual sin orientación SEO.
Sin estructura de datos.
Tal vez sin keywords.

Impacto esperado:
Traffic orgánico bajo.
Solo engagement vía referencia/linkin.
No descubrimiento orgánico.

Mitigation Strategy:

1. ON-PAGE SEO
   ├─ Title: "Archwise Framework: Enterprise AI Operating Model"
   ├─ Meta description: Incluir keywords
   ├─ H1-H6: estructura jerárquica clara
   ├─ Keywords: "governance", "memory", "agents", "AI architecture"
   └─ Internal linking: 6 capas → 6 artículos = authority building


2. SCHEMA MARKUP
   ├─ Article schema (BreadcrumbList)
   ├─ LearningResource schema (para framework general)
   ├─ FAQPage schema (para FAQ)
   └─ OrganizationSchema (para Archwise)


3. BACKLINK STRATEGY
   ├─ Articles (1-26) linking A /framework (aumenta authority)
   ├─ About page linking a /framework (es centro conceptual)
   ├─ Newsletter mention (signal a Search engines)
   └─ External partnerships (si aplica)


4. CONTENT OPTIMIZATION
   ├─ Largo adecuado (3000+ palabras total)
   ├─ Keyword distribution natural
   ├─ FAQ section (bonus para featured snippets)
   ├─ Multimedia (diagrams, videos si se agrega)
   └─ Fresh content status (actualizar regularmente)

Indicadores de riesgo:
⚠️ Si /framework no rankea para "archwise framework" → SEO problema
⚠️ Si organic traffic a /framework es <10% total → visibility issue
⚠️ Si CTR en resultados de búsqueda es <2% → meta description problem


────────────────────────────────────────────────────────────────────────────────

RIESGO 5: EXPERIENCIA DE USUARIO CONFUSA
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Usuarios no saben si /framework es lugar para "aprender" vs "buscar artículos".
Interfaz no clara si es:
├─ Landing page
├─ Hub de navegación
├─ Página educativa
└─ Algo más

Causa:
Múltiples propósitos pueden confundir UX.

Impacto esperado:
Alta friction. Usuarios directo a /articulos. /framework subutilizado.

Mitigation Strategy:

1. PROPÓSITO EXPLÍCITO
   Hero section:
   "This page explains the Archwise Framework conceptually.
    If you want to read individual articles: [go to /articles]
    If you want to understand the integrated system: [scroll down]"

2. CLEAR SECTIONS
   Cada sección empieza con:
   "The next section explains X. Expected time: Y minutes."
   └─ Manage expectations


3. NAVIGATION CLARITY
   Sidebar o mini-nav:
   ├─ [1. Hero] 
   ├─ [2. Problem]
   ├─ [3. Solution]
   ├─ [4. Visual Map]
   ├─ [5. Deep dive]
   ├─ [6. Reading paths]
   ├─ [7. Articles]
   ├─ [8. FAQ]
   └─ [9. Next steps]

   Permite "Sé dónde estoy" + "Sé a dónde puedo ir"

4. VISUAL HIERARCHY
   ├─ Secciones with Distinct visual style
   ├─ Color per section
   ├─ Size per section
   └─ "This feels like different part" psychology

5. PROGRESS INDICATOR
   Mostrar usuario:
   ├─ "You're X% through framework"
   ├─ "Estimated time to finish: Y min"
   └─ "Continue reading or jump to X"

Indicadores de riesgo:
⚠️ Si usuarios bounce de /framework a /articulos sin exploring → UX issue
⚠️ Si time on page fluctúa wildly → navigation confusing
⚠️ Si users report "didn't know what this page was for" → propósito unclear


────────────────────────────────────────────────────────────────────────────────

RIESGO 6: DESCONEXIÓN CON PRODUCTO/IMPLEMENTACIÓN
────────────────────────────────────────────────────────────────────────────────

Síntoma:
/framework explica arquitectura conceptual.
Pero: "¿Cómo implemento esto?"
Articles son conceptuales, no techniques.

Causa:
Falta de "bridge" entre conceptual y técnico.

Impacto esperado:
Usuarios: "Entiendo framework, pero... ¿ahora qué?"
Friction en movimiento de "aprender" a "implementar".

Mitigation Strategy:

1. GUIA DE IMPLEMENTACIÓN
   Crear (DESPUÉS de /framework):
   /implementation-guide
   ├─ Paso 1: Establecer Governance (cómo hacerlo)
   ├─ Paso 2: Operar bajo límites
   ├─ etc.
   └─ Links back al framework conceptual


2. CASE STUDIES
   Agregar (DESPUÉS de /framework):
   /case-studies
   ├─ Cómo Empresa X implementó
   ├─ Decisiones arquitectónicas
   ├─ Resultados
   └─ Lecciones aprendidas


3. RESPONSABILIDAD CLARA
   En /framework sección 9 (CTA):
   "This framework is conceptual. For implementation:
    → See Implementation Guides
    → See Case Studies
    → Read technical articles"


Indicadores de riesgo:
⚠️ Si usuarios ask "pero how do I implement?" → gap real
⚠️ Si no hay path claro de "conceptual" a "técnico" → bridge needed
⚠️ Si /framework es donde engagement muere → implementación es siguiente necesidad


────────────────────────────────────────────────────────────────────────────────

RIESGO 7: LAS 6 CAPAS PARECEN ARBITRARIAS
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Usuario lee framework.
Pregunta: "¿Por qué estas 6 capas exactas? ¿Si combinamos Governance y Operating Model?"
"¿Si omitimos Memory, qué pasa?"
"¿Hay otras capas no mencionadas?"

Causa:
Framework es resultado de pensamiento/experiencia.
Pero la justificación de "por qué 6" no está suficientemente clara.

Impacto esperado:
Framework parece dogmático.
Usuarios: "Esto es arbitrario, no principios-based".

Mitigation Strategy:

1. JUSTIFICACIÓN EXPLÍCITA
   Sección 2 o 3:
   "Why these 6 layers exactly?
    
    Each layer is defined by a KEY QUESTION:
    1. Governance: WHO DECIDES?
    2. Operating Model: HOW DO WE WORK?
    3. Organizational Memory: WHAT DO WE REMEMBER?
    4. Memory Architecture: HOW IS IT STRUCTURED?
    5. Context Systems: HOW IS INFO DELIVERED?
    6. Enterprise Agents: HOW DO THEY ACT?
    
    Each question cannot be answered without the previous layer.
    Each question creates necessary layer for next."

2. DEPENDENCY PROOF (Sección 5)
   Mostrar:
   "You cannot answer 'how do agents act' (Layer 6)
    without answering 'how is info delivered' (Layer 5)
    without answering 'how is memory structured' (Layer 4)
    ... without governance (Layer 1)"

3. EVIDENCE FROM EXPERIENCE
   En Articles 1-19 o referentes:
   "We arrived at 6 layers by studying 50+ enterprise IA implementations.
    These 6 emerged as necessary and sufficient."

4. COUNTEREXAMPLES
   FAQ:
   "Q: Can we skip Layer 3 (Memory)?
    A: No. Here's why. [example: agent without organizational memory = isolated]"

Indicadores de riesgo:
⚠️ Si usuarios cuestionan "por qué 6" → justificación insuficiente
⚠️ Si framework parece "moda" vs principios → credibilidad issue
⚠️ Si alternativas capas mencionadas = gaps en comunicación

────────────────────────────────────────────────────────────────────────────────

RIESGO 8: AGOTAMIENTO DE LA TESIS
────────────────────────────────────────────────────────────────────────────────

Síntoma:
Con 26 artículos, la tesis está "completa".
¿Qué hay después?
¿New articles serán adiciones or evolución?

Causa:
Framework es cerrado (6 capas). Difícil agregar más sin cambiar estructura.

Impacto esperado:
Site feels "static" después de Article-27.
Content calendar uncertainty.

Mitigation Strategy (largo plazo):

1. ACEPTA FRAMEWORK COMO COMPLETO
   Articles 27+ son:
   ├─ Deepdives en capas existentes
   ├─ Vertical use cases
   ├─ Implementación technica
   ├─ Case studies
   └─ Evolución, no expansión

   /framework NO cambia. Sigue siendo Article 20-26.

2. ESTRATEGIA DE CONTENIDO FUTURA
   Documentar "qué viene después de las 6 capas"
   ├─ Fase 2: Implementación práctico
   ├─ Fase 3: Casos de uso industria
   ├─ Fase 4: Madurez operacional
   └─ Etc.

Indicadores de riesgo:
⚠️ Si editoriales preocupación "framework is complete" → urgencia comunicar strategy
⚠️ Si traffic pico en Article-26, luego drop → content strategy issue

────────────────────────────────────────────────────────────────────────────────

RESUMEN DE RIESGOS Y MITIGACIÓN PRIORIDAD
────────────────────────────────────────────────────────────────────────────────

CRÍTICOS (Fix antes de launch):
1. Complejidad conceptual (mitigation: Progressive disclosure + visual map)
2. UX confusa (mitigation: Clear sections + explicit purpose)

ALTOS (Fix en semana 1 post-launch):
3. Duplicación contenido (mitigation: Role clarification between /framework y articles)
4. Mantenimiento difícil (mitigation: Template + versionado)
5. SEO débil (mitigation: Schema + keywords + internal linking)

MEDIOS (Monitor y fix según necesidad):
6. Desconexión producto (mitigation: Future implementation guides)
7. Capas parecen arbitrarias (mitigation: Justificación explícita)

BAJOS (Largo plazo):
8. Agotamiento tesis (mitigation: Content strategy documento)

```

---

## 10. RECOMENDACIÓN FINAL

### Respuesta a preguntas estratégicas

```
╔════════════════════════════════════════════════════════════════════════════════╗
║ RECOMENDACIÓN FINAL: ESTRATEGIA PARA /FRAMEWORK                               ║
╚════════════════════════════════════════════════════════════════════════════════╝

PREGUNTA 1: ¿DEBE SER UNA PÁGINA SIMPLE?
──────────────────────────────────────────────────────────────────────────────

Recomendación: NO

Justificación:
• El framework tiene 6 capas integradas
• Solo texto = pierde 80% del valor conceptual
• La complejidad es NECESARIA para entender
• Pero no debe sentirse confusa

ENTONCES: Simple en ESTRUCTURA, compleja en CONTENIDO

Propuesta:
├─ Secciones 1-4: Simple (Hero, Problema, Solución, Mapa)
│  └─ Después de esto, lector está "al corriente"
│
├─ Secciones 5-7: Más detallado (capas, ejemplos, mapeo)
│  └─ Para quien quiere profundizar
│
└─ Secciones 8-9: Interactivo/personalizado
   └─ FAQ y CTA según papel

IMPLICACIONES:
✓ Usuarios casuales: "Entiendo en 5 minutos"
✓ Usuarios serios: "Tengo detail que necesito"
✓ No hay confusión de "para quién" es esto

────────────────────────────────────────────────────────────────────────────────

PREGUNTA 2: ¿DEBE SER UNA PÁGINA VISUAL?
──────────────────────────────────────────────────────────────────────────────

Recomendación: SÍ, pero con cuidado

Justificación:
• El framework ES visual (6 capas, flujos, interdependencias)
• Texto solo = 30% de retención
• Diagram/visual = 70%+ (según cognitive science research)
• Pero visual sin texto = confuso (sin contexto)

ENTONCES: Visual + Texto, iterativo

Propuesta:
├─ Sección 4 (Mapa visual): ASCII hoy, SVG/interactive mañana
│  └─ Mostrar 6 capas con relaciones
│  └─ Hover para explicaciones
│  └─ Click para ir a artículos
│
├─ Secciones 5: Explicación POR CAPA con pequeno icono/color
│  └─ No full diagram, solo iconografía
│  └─ Mantener lectura rápida
│
└─ CTA: Animaciones sutiles
   └─ Show de flujos de arriba-abajo y abajo-arriba

IMPLICACIONES:
✓ Visual + Texto = complementarios
✓ No abruma (bien diseñado)
✓ Cognición mejorada (texto + visual)
✗ Requiere diseño + dev bien hecho

PRIORIDAD DE IMPLEMENTACIÓN:
1. Lanzar con wireframe ASCII (ya especificado)
2. Iteración 1: Replace con SVG static
3. Iteración 2: Add interactividad (click/hover)

────────────────────────────────────────────────────────────────────────────────

PREGUNTA 3: ¿DEBE CONVERTIRSE EN LA PÁGINA MÁS IMPORTANTE?
──────────────────────────────────────────────────────────────────────────────

Recomendación: NO, pero casi.

Justificación:
• Home SIEMPRE es home (brand, first impression)
• /framework es SEGUNDO más importante

ENTONCES: /framework como "gateway to knowledge"

Rankings de importancia:
1. Home (first impression, brand, orientation)
2. /framework (conceptual center, onboarding to thesis)
3. /articulos (exploration, browsing, search)
4. Individual articles (depth)
5. /about (credibility)
6. Newsletter (follow-up)

IMPLICACIONES:
✓ /framework en navigation prominence (#2 after Home)
✓ Home links prominently to /framework
✓ Articles link back to /framework for context
✓ But NOT "the most important" — that's Home

DECISION EN NAVEGACIÓN:

Header nav options:
   Home | Framework | Articles | About | Newsletter

O (alternativa):
   Home | Framework | Articles | About
   (Newsletter como CTA floating button)

RECOMENDACIÓN: Opción 1 (Framework BEFORE Articles en menu)


────────────────────────────────────────────────────────────────────────────────

CONCLUSIÓN ESTRATÉGICA
──────────────────────────────────────────────────────────────────────────────

/framework DEBE SER:

┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. SIMPLE EN PROPÓSITO (Explicar framework, nada más)                       │
│ 2. COMPLEJO EN CONTENIDO (6 capas, dependencias, flujos)                    │
│ 3. VISUAL EN PRESENTACIÓN (diagrams + texto, no solo uno)                   │
│ 4. CLARA EN ARQUITECTURA (secciones progresivas, no todo a la vez)          │
│ 5. LINKED EN CONTEXTO (desde home, a artículos, desde artículos)           │
│ 6. SECUNDARIA EN IMPORTANCIA (después de home, antes de articulos)          │
│ 7. PERMANENTE EN ESTRUCTURA (Articles 20-26, no cambia radicalmente)        │
│ 8. CRECIBLE EN CONTENIDO (capas 1-6 fijas, pero sub-layers pueden crecer)  │
│                                                                             │
│ ✓ Si todo esto está en lugar: /framework es exitoso                         │
│ ✓ ROI esperado: 40-50% de visitors a /framework van a artículos             │
│ ✓ Engagement esperado: Average time on /framework: 5-8 minutes              │
│ ✓ Conversion esperado: 20-30% van a newsletter from /framework              │
└─────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────

DECISIÓN FINAL: ¿PROCEDER CON IMPLEMENTACIÓN?
──────────────────────────────────────────────────────────────────────────────

RECOMENDACIÓN: SÍ, crear /framework

FASE 1 (Semana 1-2):
├─ Diseño visual (wireframe → mockup)
├─ Contenido (estructura + copy)
└─ Implementación Angular (componentes, routing)

FASE 2 (Semana 3-4):
├─ QA (links, reads times, edge cases)
├─ SEO (schema, meta, keywords)
├─ Inter-linking (home, articles, etc.)
└─ Deploy

FASE 3 (Post-launch):
├─ Monitor analytics
├─ Recopilar user feedback
├─ Iteraciones visuales si necesario
└─ Plan para escalabilidad (cuando 30, 50, 100 artículos)

DEPENDENCIES:
✓ Confirm Articles 20-26 están finalizados
✓ Add /framework a information architecture doc
✓ Comunicar a equipo: new section ≠ new work for articles

TIMELINE TOTAL: 3 semanas (fase 1-2) + continua (fase 3)

════════════════════════════════════════════════════════════════════════════════

```

---

## RESUMEN EJECUTIVO

**Propuesta:** Crear `/framework` como **página estratégica central** que explique el Framework Archwise de forma conceptual e integrada.

**Objetivo:** Resolver el problema de "nuevo visitante llega a 26 artículos sin saber por dónde empezar".

**Solución:** Página con 9 secciones que presentan:
1. Hero + Value Proposition
2. El Problema que resuelve
3. Las 6 Capas en breve
4. Mapa Visual ASCII
5. Explicación detallada por capa
6. Recorridos de lectura (ejecutivo, arquitecto, investigador)
7. Mapeo de artículos
8. FAQ
9. CTA Editorial

**Características clave:**
- Simple en estructura, profunda en contenido
- Visual + texto complementarios
- 3 caminos de lectura según rol
- Escalable cuando corpus crece (30, 50, 100 artículos)
- No es marketing, es educación pura
- Vinculado bidireccional con artículos

**Valor estratégico:**
- Aumenta claridad sobre "qué es Archwise"
- Mejora onboarding de nuevos lectores
- Permite crecimiento sostenible del corpus
- Posiciona framework como núcleo estratégico

**Recomendación:** Implementar como **segunda sección principal** del sitio (después de Home, antes de Artículos).

---

**Documento completado:** docs/framework-page-v1-spec.md ✓
