# Framework Discovery — Definición estratégica de /framework

> Fecha: 2026-06-06  
> Estado: Documento de decisión estratégica pre-implementación  
> Objetivo: Descubrir qué debe ser realmente `/framework` para maximizar valor del corpus 01-29

---

## Parte 1 — Qué NO debe ser /framework

### 1.1 Anti-patrones típicos

#### Anti-patrón 1: La página de "features" del framework

**Descripción:** `/framework` se convierte en un *feature list* donde cada artículo es una "característica" o "módulo".

```
Framework Archwise
├─ Governance ✓ (3 artículos)
├─ Operating Model ✓ (4 artículos)
├─ Memory ✓ (3 artículos)
└─ ...
```

**Por qué falla:**
- Los visitantes leen como catálogo, no como sistema.
- No transmite *por qué* el orden importa.
- No diferencia entre "capacidad" e "integración".
- Crea ilusión de modularidad que el framework rechaza explícitamente.

**Riesgo:** Refuerza idea equivocada de que puedes implementar capas en cualquier orden.

---

#### Anti-patrón 2: La página de roadmap/timeline

**Descripción:** `/framework` se estructura como "primero implementas Governance, luego Operating Model, ..." con implicación de timeline secuencial lineal.

**Por qué falla:**
- **Confunde Sequence Integrity con cronología lineal.**  
  Article-27 (Adoption Architecture) enseña específicamente que activación no es orden temporal, sino dependencia causal.
- Crea expectativa falsa de que resolver Governance primero desbloquea automáticamente Operating Model.
- No captura la realidad: equipos avanzan en paralelo pero con dependencias concretas de coherencia.
- Visitante sale pensando "tengo roadmap" en lugar de "sé cómo diagnosticar qué falta".

**Riesgo:** Desalínea expectativas. Los CTOs que siguen el roadmap lineal cometerán errores de Activation Debt.

---

#### Anti-patrón 3: La página de "cómo no implementar IA"

**Descripción:** `/framework` deviene lista de historias de horror: "No hagas esto, no hagas aquello..."

**Por qué falla:**
- Responsabilidad negativa sin agencia positiva.
- Visitor sale diciendo "ok, no hacer X" pero sin saber qué SÍ construir.
- Invierte la relación causal: el framework no es defensa contra errores, es *instrumento de construcción*.
- Atomiza problemas sin integrarlos en sistema.

**Riesgo:** Reduce ARCHWISE a "lista de cosas malas" en lugar de a "sistema de decisión".

---

#### Anti-patrón 4: La página tutorial/how-to

**Descripción:** `/framework` se estructura como paso-a-paso: "Primer paso: implementa Classification. Segundo paso: implementa Governance..."

**Por qué falla:**
- **Asume contexto organizativo homogéneo.** La realidad es que organizaciónes entran en framework en puntos distintos.
- CTO de empresa legacy no empieza igual que CTO en greenfield.
- Tutorial reduce framework a procedimiento, no a sistema de decisión.
- Visitor sigue pasos pero sin entender *por qué* ese orden en su contexto específico.

**Riesgo:** Frameworkse vuelve prescriptivo en lugar de diagnóstico.

---

#### Anti-patrón 5: La página de case studies

**Descripción:** `/framework` es galería de "Empresa X implementó así, Empresa Y implementó así..."

**Por qué falla:**
- Casos específicos no generalizan.
- Visitor busca aplicabilidad a su contexto, no inspiración abstracta.
- Case studies sin *transferencia de modelo* son anécdotas, no aprendizaje sistémico.
- Fragmenta coherencia del framework en "variantes por industria".

**Riesgo:** Reduce ARCHWISE a consultorería sin respuesta clara para decisión estructural.

---

#### Anti-patrón 6: La página de integración con herramientas existentes

**Descripción:** `/framework` es lista de "Framework Archwise + Datadog", "Framework Archwise + Kubernetes", "Framework Archwise + Azure"...

**Por qué falla:**
- **Confunde Framework (organización) con Tooling (implementación).**
- Visitor piensa "necesito estas herramientas" en lugar de "necesito estas capacidades".
- Crea complejidad innecesaria: el framework es agnóstico a infraestructura.
- Distrae de decisión estratégica fundamental.

**Riesgo:** Transforma concepto organizativo en problema técnico/comercial.

---

### 1.2 Errores de diseño arquitectónico

#### Error 1: Jerga sin experiencia anclada

**Descripción:** `/framework` usa términos como "Interface Integrity", "Coherence Signals", "Activation Debt" sin conectarlos a decisiónes reales que el CTO toma mañana.

**Síntoma de fallo:**
- Visitor dice "ok, entiendo los términos" pero sale sin saber qué hacer.
- La vocabulario vive en los artículos, no en el framework.
- Framework no traducee conceptos a decisiónes operativas.

**Corrección necesaria:** Cada término debe aparecer con ejemplo mínimo operativo antes de invitación a "lee más en Article-X".

---

#### Error 2: Estructura que replica artículos, no integra

**Descripción:** `/framework` es espejo de tabla de contenidos: Cap 1 = articles 11-13, Cap 2 = articles 1-8, ...

**Síntoma de fallo:**
- Visitor dice "para qué va a `/framework` si puedo ir a `/articulos`?"
- No hay síntesis. Solo reorganización.
- No hay decisión de *qué relevancia tiene ahora* vs "esto es histórico".

**Corrección necesaria:** `/framework` debe responder preguntas que `/articulos` no responde: "¿Por dónde empiezo?", "¿Cuál es el mapa?", "¿En qué orden tiene sentido?"

---

#### Error 3: Ausencia de criterio de madurez

**Descripción:** `/framework` define capas pero no define "qué significa estar listo para activar cada capa".

**Síntoma de fallo:**
- CTO lee framework y no sabe si su organización está lista para Governance.
- No hay puente entre diagnóstico (Article-29) y acción (Governance, Operating Model).

**Corrección necesaria:** Cada capa debe tener puerta de entrada clara: "Estás listo si..."

---

#### Error 4: Separación artificial entre comprensión y navegación

**Descripción:** `/framework` tiene "bloque educativo" (qué es cada capa) + "bloque de navegación" (links a artículos) sin integración.

**Síntoma de fallo:**
- Estructura parece: explicación → links → siguiente explicación.
- Visitor alterna entre conceptos y articles sin hilo conductor.
- Coherencia navegacional débil.

**Corrección necesaria:** Comprensión y navegación deben ser lo mismo. Cada concepto es portada a artículos.

---

### 1.3 Riesgos de diseño editorial

#### Riesgo 1: /framework compite con Home

**Descripción:** Si `/framework` es muy atractiva, visitor va a `/framework`, no a Home.

**Síntoma de fallo:**
- Home pierde protagonismo.
- Secuencia de descubrimiento se rompe (Home → Manifesto → Articles → Newsletter).
- SEO interno se desalínea.

**Corrección necesaria:** `/framework` y Home deben ser complementarios, no competitivos.
- Home: **promesa emocional** ("Archwise cambia cómo piensas la IA").
- /framework: **mapa racional** ("Aquí está cómo").

---

#### Riesgo 2: /framework pierde valor con Article-30

**Descripción:** A medida que añades más artículos, `/framework` se vuelve obsoleta rápido si no es suficientemente abstracta.

**Síntoma de fallo:**
- Con 10 artículos nuevos, necesitas rediseñar `/framework`.
- Structure no escala bien con crecimiento del corpus.

**Corrección necesaria:** `/framework` debe ser estable en capas (no detalle). El detalle vive en artículos.

---

#### Riesgo 3: /framework sustituye /articulos

**Descripción:** Visitante llega a `/framework`, nunca va a `/articulos`.

**Síntoma de fallo:**
- `/articulos` tráfico desciende.
- Lectura profunda de corpus cae.

**Corrección necesaria:** `/framework` es **puerta**, no sustituto. Debe invitar a profundidad.

---

---

## Parte 2 — Qué debe ser /framework

### 2.1 Propósito principal

#### Definición ejecutiva

`/framework` es un **mapa de decisión estructural**, no un índice editorial.

Responde a esta pregunta nuclear que `/articulos` no responde:

> **"Si tengo capacidad X y necesito capacidad Y, ¿en qué orden importa que las construya? ¿Y qué evidencia me dice que estoy listo?"**

No es "aquí están todos los artículos agrupados por tema".

Es "aquí está la lógica causal de cómo Archwise piensa la integración, y cómo tu organización puede usarla para diagnosticar dónde está hoy y qué cierra brecha mañana".

---

### 2.2 Propósito secundario (el que diferencia /framework de /manifesto)

- **Manifesto:** "Por qué importa pensarse de esta forma" (filosófico).
- **/framework:** "Cómo pensar de esta forma" (operaciónal).

`/framework` no vende la idea. La opera.

---

### 2.3 Experiencia ideal — 3 minutos

**Lo que entiende un CTO después de 3 minutos en `/framework`:**

1. **Concepto fundacional único:**  
   El framework no es partes que puedes ensamblar en cualquier orden.  
   Es **sistema donde orden de integración determina éxito operativo**.

2. **Estructura geométrica simple:**  
   Capas visuales. Qué va primero, qué depende de qué.  
   *No un diagrama bonito, sino un mapa causal.*

3. **Pregunta que responde:**  
   Tras 3 minutos, CTO sabe qué pregunta haría: "¿Dónde estamos en este mapa?"

---

### 2.4 Experiencia ideal — 10 minutos

**Lo que entiende un CTO después de 10 minutos en `/framework`:**

1. **Qué es cada capa y por qué ese orden.**  
   No "Governance es importante". Sí "si no tienes Governance, el contexto de Operating Model se pierde".

2. **Qué artículos profundizan cada parte.**  
   Mapa → Artículos. Se entiende de qué habla cada uno.

3. **Dónde su organización podría estar hoy.**  
   Diagnóstico implícito. CTO mapea mentalmente: "Nosotros tenemos fragments de Governance, falta Operating Model, etc."

4. **Qué se necesita para avanzar.**  
   No un checklist. Sí: "capacidad X desbloquea Y porque..."

5. **Línea de profundidad clara.**  
   CTO sabe si quiere leer artículos ahora o volver al mapa después de leer uno o dos.

---

### 2.5 Vocabulario central (desde ASIS v1.1 y articles 26-29)

`/framework` introduces visible:

- **Sequence Integrity:** orden de integración que respeta dependencias causales.
- **Evidence Integrity:** confiabilidad de manera en que medimos progreso.
- **Coherence Signals:** alerta temprana de alíneación/tensión/ruptura entre decisiónes.
- **Context Debt:** costo de contexto no entregado en momento decisión.
- **Activation Debt:** costo de activar sin dependencias satisfechas.

**Uso en /framework:**
Estos términos no viven *en* `/framework`. Pero `/framework` *introduce* por qué importan, entonces cuando visitor lee articles, los términos tienen anclaje.

---

### 2.6 Relación con otros activos del sitio

| Asset | Rol | Pregunta que responde | Relación con /framework |
|-------|-----|----------------------|------------------------|
| **Home** | Promesa de marca | "¿Por qué debería importarme?" | Home → /framework (flujo natural) |
| **/framework** | Mapa racional del sistema | "¿Cómo encajan piezas?" | Hub de orientación |
| **/articulos** | Exploración y profundidad editorial | "¿Qué se ha escrito?" | Framework → Artículos (exploración) |
| **Manifesto** | Visión e intención | "¿Cuál es tu tesis?" | Manifesto y /framework son pilares distintos |
| **Newsletter** | Continuidad y relación | "¿Cómo sigo esto?" | Newsletter captura de ambos |

---

---

## Parte 3 — Perfiles y casos de uso

### 3.1 Perfil 1: CTO de empresa enterprise legacy

**Contexto:**
- Organización 500+ personas.
- Arquitectura distribuida y compleja, deuda técnica acumulada.
- Iniciativas IA anteriores tuvieron resultados limitados.
- Presión para escalar IA sin rehacer fundamentos.

**Qué busca en `/framework`:**
1. Diagnóstico sincero: "¿Por qué nuestras iniciativas IA fallan?"
2. Prioritización: "¿Qué hago primero dentro de limitaciones reales?"
3. Ruta de menor fricción: "¿Cómo avanzo sin paralyzing change?"

**Qué necesita encontrar:**
- Bloque de diagnóstico que resonaba con su realidad (articles 11-13 diagnóstico, article-29 evaluación).
- Explicación de por qué order importa en contexto legacy (artícle-27 sobre Activation Debt).
- Caminos parciales: "¿Puedo hacer Governance sin rehacer Operating Model?"

**Artículos de entrada (ruta Legacy CTO):**
1. Article-29: Diagnóstico de madurez operativa (3.1, Evidence Integrity).
2. Article-11 o 13: Comparación legacy vs AI-Ready.
3. Article-27: Adoption Architecture (por qué order importa en constrains legacy).
4. Article-20: AI Governance Framework (puerta concreta).
5. Deep dive Article-06 o 14: Context Engineering in Legacy (aterrizaje práctico).

**Criterio de éxito en `/framework`:**
CTO sale diciendo: "Veo dónde estamos fallando y tengo ruta clara sin revolucionar la organización."

---

### 3.2 Perfil 2: Enterprise Architect

**Contexto:**
- Responsable de decisiónes arquitectónicas de largo plazo.
- Debe interactuar con C-suite, COO, múltiples equipos.
- Necesita argumento coherente y trazable.

**Qué busca:**
1. Estructura conceptual que sea defensible y trazable.
2. Mapa de dependencias claras (para conveying a executives).
3. Criterio para elegir focus areas.

**Qué necesita encontrar:**
- Framework como *sistema* (no partes). Énfasis en Interface Integrity.
- Conexión explícita entre decisiónes arquitectónicas y outcomes operativos.
- Evidence-based progression, no hype-based roadmapping.

**Artículos de entrada (ruta Architect):**
1. Article-26: Framework Archwise (visión sistémica integrada).
2. Article-28: Measurement System (observabilidad y coherence signals).
3. Article-29: Sequence Integrity (criterio de madurez basado en evidencia).
4. Article-20: AI Governance Framework (estructura de decisión).
5. Article-27: Adoption Architecture (riesgos de activation debt).

**Criterio de éxito:**
Architect sale con vocabulario compartible a executives ("Nos falta Interface Integrity aquí porque...").

---

### 3.3 Perfil 3: Head of Engineering

**Contexto:**
- Responsable de ejecución técnica del equipo.
- Debe traducir decisiónes arquitectónicas en workflows y procesos.
- Interactúa con product, data, platform, application teams.

**Qué busca:**
1. Cómo el framework impacta day-to-day operativo del equipo.
2. Qué cambios organizativos necesito en equipo.
3. Cómo medir progreso en contexto de presiones operativas.

**Qué necesita encontrar:**
- Conexión entre capas del framework y cambios en responsabilidad/workflows de equipos.
- Practical concerns: hiring, training, tooling.
- Operationalization: de concepto a RACI/sprints/metrics.

**Artículos de entrada (ruta Head of Engineering):**
1. Article-21: AI Operating Model (cómo se organiza ejecución).
2. Article-22 y 23: Organizational Memory y Memory Architecture (infraestructura interna).
3. Article-16 y 17: AI-Augmented Teams y AI-Native Organizations (cambio cultural/operativo).
4. Article-27: Adoption Architecture (cómo secuenciar cambios sin romper delivery).

**Criterio de éxito:**
Head sale sabiendo "cómo le explicaré esto a mis lead engineers mañana".

---

### 3.4 Perfil 4: Responsable de Transformación (CTO, Chief of Staff del CEO)

**Contexto:**
- Vista 360 de organización.
- Debe conectar estrategia, arquitectura, operaciónes, cultura.
- Horizonte multiaño.

**Qué busca:**
1. Modelo conceptual que integra todo: governance, operating model, People, tooling, decisión.
2. Cómo evitar transformación fallida / cambio superficial.
3. Indicadores tempranos de si la transformación está yendo bien.

**Qué necesita encontrar:**
- Framework como sistema completo, no silos.
- Vínculos entre capas que explica por qué "tener Governance pero falta Memory" es problema.
- Indicators de coherence signals, context debt, activation debt que señalan riesgo transversal.

**Artículos de entrada (ruta Responsable de Transformación):**
1. Article-26: Framework Archwise integral.
2. Article-27: Adoption Architecture (cómo activar sin fracaso de deuda).
3. Article-28: Measurement System (cómo observar salud sistémica).
4. Article-29: Sequence Integrity (diagnóstico de madurez real vs declarada).
5. Article-18: "Por qué fracasan iniciativas de IA" (anticuerpos contra errores sistémicos).

**Criterio de éxito:**
Responsable sale con framework de governance para la transformación, no solo iniciativa técnica.

---

### 3.5 Perfil 5: Consultor/Partner externo

**Contexto:**
- Advising multiple clientes.
- Necesita framework trazable e replicable.
- Debe traducir para clientes en contextos muy distintos.

**Qué busca:**
1. Toolkit que aplica transversalmente.
2. Lenguaje común con clientes.
3. Puntos de mejora evidentes y mensurables.

**Qué necesita encontrar:**
- Framework como **diagnóstico system** (no receta única).
- Vocabulario transferible (Sequence Integrity, Evidence Integrity).
- Puntos de intervención claros: "Tu organización sufre falta de Context Debt management porque..."

**Artículos de entrada (ruta Consultor):**
1. Article-04: "La arquitectura vuelve a ser estratégica" (posicionamiento de rol).
2. Article-29: Sequence Integrity (framework de diagnosis).
3. Article-28: Measurement System (cómo medir antes y después).
4. Article-20: AI Governance Framework (estructura de decisión).
5. Article-26: Framework Archwise (síntesis para cliente).

**Criterio de éxito:**
Consultor sale con lenguaje común para diagnosticar cliente y propuesta de mejora fundamentada.

---

---

## Parte 4 — Arquitectura conceptual de /framework

### 4.1 Estructura propuesta (sin HTML)

```
/framework

[BLOQUE 1: INTRODUCCIÓN]
├─ H1: Framework Archwise
├─ Subtítulo: De contexto explícito a sistemas AI-native
├─ Problema que resuelve (párrafo)
├─ Para quién aplica (párrafo)
└─ Cómo leer esta página (párrafo orientador)

[BLOQUE 2: MAPA VISUAL DE CAPAS]
├─ Representación de orden: 1 → 2 → 3 → 4 → 5 → 6
├─ Nombres de capas (vista resumida)
├─ Conexiones causales implícitas
└─ Nota: "Orden causal, no cronología lineal"

[BLOQUE 3: CAPAS EXPANDIDAS (capa por capa)]
├─ CAPA 1: Diagnóstico AI-Ready
│  ├─ Qué es (párrafo de 2-3 líneas)
│  ├─ Por qué importa ahora
│  ├─ Si no tienes esto... (riesgo anclado)
│  ├─ Artículos clave (links con títulos y reading time)
│  └─ Pregunta de diagnóstico: "¿Sabes responder..."
│
├─ CAPA 2: Contexto explícito y Knowledge Debt
│  ├─ Idem estructura superior
│
├─ CAPA 3: Governance
│  ├─ Idem estructura superior
│
├─ CAPA 4: AI Operating Model
│  ├─ Idem estructura superior
│
├─ CAPA 5: Organizational Memory
│  ├─ Idem estructura superior
│
└─ CAPA 6: Context Systems & Enterprise Agents
   ├─ Idem estructura superior

[BLOQUE 4: CICLO DE MADUREZ (síntesis)]
├─ De diagnóstico a sistema operativo (párrafo)
├─ Indicadores de progreso (sin metrics, conceptual)
├─ No es checklist, es coherencia
└─ Lecturas clave para este bloque (3-4 articles)

[BLOQUE 5: RUTAS DE LECTURA POR ROL]
├─ Ruta CTO (5 articles)
├─ Ruta Architect (5 articles)
├─ Ruta Head of Engineering (5 articles)
├─ Ruta Responsable de Transformación (5 articles)
└─ Ruta Consultor (5 articles)

[BLOQUE 6: RELACIÓN CON RESTO DEL SITIO]
├─ Home (qué hace Home que no hace /framework)
├─ /articulos (qué hace /articulos que /framework no hace)
├─ Manifesto (qué hace Manifesto que /framework no hace)
└─ CTAs: "Ir a /articulos", "Leer Manifesto", "Suscribirse"

[BLOQUE 7: VOCABULARIO (glossary mínimo)]
├─ Sequence Integrity (enlace a Article-29)
├─ Evidence Integrity (enlace a Article-28)
├─ Coherence Signals (enlace a Article-28)
├─ Context Debt (enlace a Articles 24-27-29)
└─ Activation Debt (enlace a Article-27)
```

---

### 4.2 Principios de arquitectura

#### Principio 1: Cada bloque tiene función clara

| Bloque | Función | Output esperado |
|--------|---------|-----------------|
| Introducción | Alínear expectativa | "Voy a entender lógica causal" |
| Mapa Visual | Anclaje visual/causal | "Veo orden. Veo por qué." |
| Capas Expandidas | Comprensión profunda | "Entiendo cada capa y cómo encaja" |
| Ciclo de Madurez | Síntesis | "No es silos. Es sistema." |
| Rutas de Lectura | Navegación activada | "Sé dónde empezar según mi rol" |
| Relación con Sitio | Orientación meta | "Sé diferencia de cada asset" |
| Vocabulario | Referencia | "Sé dónde profundizar un término" |

---

#### Principio 2: Cada elemento sirve transversalmente

- Introducción no es solo para first-time visitors. Es anclaje conceptual que repeats para que no se pierdan.
- Mapa Visual es visto en sección Capas (cada capa señala su posición en mapa).
- Rutas de Lectura se activan dependiendo del rol del visitor (puede volver después).

---

#### Principio 3: Profundidad escalada

**1-bloque (Mapa Visual):** "Aquí está la estructura."  
**2-3 bloques (Introducción + Mapa):** "Aquí está la lógica."  
**4 bloques (+ Capas):** "Aquí está cómo cada parte encaja."  
**5 bloques (+ Ciclo):** "Aquí está cómo todo es un sistema."  
**6-7 bloques (+ Navegación+ Vocab):** "Aquí está cómo ir más profundo."

Visitor escala según atención, contexto, rol.

---

#### Principio 4: Ausencia de jerarquía falsa

No hay "capa más importante". Cada capa habilita el sistema. Framework es anti-jerarquía (refuerza Article-26).

---

### 4.3 Contenido por sección (sin redacción final)

#### Sección: INTRODUCCIÓN

```
Elementos:
- H1 (muy corto, memorizable)
- Subtítulo (maxo 10 palabras, problema + promesa)
- Párrafo 1: Problema que resuelve (3-4 líneas)
  "Las organizaciónes confunden actividad en IA (pilotos, despliegues) 
   con integración real. Framework Archwise responde: ¿Cómo avanzar 
   si tu orden de integración respeta dependencias causales?"
- Párrafo 2: Para quién (3-4 líneas)
  "CTOs, Architects, Heads of Engineering, 
   Responsables de Transformación y Consultores que necesitan 
   framework coherente, no receta única."
- Párrafo 3: Cómo leer (2-3 líneas)
  "Esta página es mapa. Los artículos son profundidad. 
   Elige tu rol más adelante y te mostramos por dónde empezar."
```

#### Sección: MAPA VISUAL DE CAPAS

```
Elementos:
- Representación causal (no cronología):
  1 → 2 → 3 → 4 → 5 → 6
  (Con nota: "Dependen uno del otro, no siguen timeline")
  
- Visual simple (sin diseño, sin Adobe):
  ┌──────────────────────────────────────────┐
  │          DIAGNOSIS AI-READY              │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────▼───────────────────────────┐
  │   CONTEXTO EXPLÍCITO & KNOWLEDGE DEBT    │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────▼───────────────────────────┐
  │          GOVERNANCE                      │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────▼───────────────────────────┐
  │      AI OPERATING MODEL                  │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────▼───────────────────────────┐
  │       ORGANIZATIONAL MEMORY              │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────▼───────────────────────────┐
  │        CONTEXT SYSTEMS & AGENTS          │
  └──────────────────────────────────────────┘
  
- Nota conceptual junto al mapa:
  "Cada capa prepara interfaz para la siguiente.
   Si saltas capas, construyes sobre deuda."
```

#### Sección: CAPAS EXPANDIDAS (patrón por capa)

```
CAPA N: [NOMBRE]

=== ESENCIA (1 párrafo) ===
Qué es esta capa en términos causales.

=== POR QUÉ ESTA CAPA AQUÍ (1 párrafo) ===
Qué habilita para la siguiente capa.
Qué sucede si la saltas (riesgo).

=== SI NO TIENES ESTO... (1 párrafo) ===
Síntomas diagnosticables de falta.
Costo operativo específico.

=== ARTÍCULOS CLAVE ===
- [Artículo X: Título] (Reading time: N min)
  Proposición de valor de por qué leerlo dentro de esta capa.
- [Artículo Y: Título] (Reading time: M min)
  Idem.

=== PREGUNTA DE DIAGNÓSTICO ===
Una pregunta que visitor puede auto-responder.
Si sí → avanza.
Si no → profundiza en artículos.

Ejemplo (Governance):
"¿Puedes decir que tus decisiónes sobre IA 
 en distintos equipos responden a criterio único 
 y trazable, o varían por presión/contexto local?"
```

---

#### Sección: CICLO DE MADUREZ

```
Elementos:

Párrafo introductorio:
"De diagnóstico a integración: así el framework evoluciona desde 
 punto de partida a sistema operativo completo."

Estructura conceptual (no visual):
1. Diagnóstico (Articles 11-13, 29): ¿Dónde estamos?
2. Foundation (Articles 1-10): Contexto y governance base
3. Integration (Articles 20-25): Capas del sistema
4. Measurement (Article-28): ¿Cómo sabemos que funciona?
5. Adaptation (Article-27 + operación continua): ¿Cómo corregimos?

Nota crítica:
"No es checklist lineal. Es ciclo. Diagnosis informa Foundation.
 Foundation informa Integration. Integration debe revisitarse.
 Measurement busca signals tempranas de Activation Debt.
 Adaptation es continuo, no final."

Lecturas de síntesis:
- Article-26: Framework integrado (visión sistémica)
- Article-27: Adoption Architecture (cómo secuenciar sin saltar)
- Article-28: Measurement System (cómo medir coherencia)
- Article-29: Sequence Integrity (cómo evaluar madurez real)
```

#### Sección: RUTAS DE LECTURA POR ROL

```
Estructura (para cada rol):

RUTA [ROL]:

Nombre del rol
Contexto (1-2 líneas)
Objetivo en /framework (1-2 líneas)

Secuencia (5 artículos, en orden):
1. [Article-X] — Por qué empezar aquí
2. [Article-Y] — Siguiente paso y conexión con anterior
3. [Article-Z] — Síntesis o profundización
4. [Article-W] — Operacionalización o aplicación
5. [Article-V] — Cierre o perspectiva

Nota final: "¿Necesitas volver a empezar? Ir al Mapa. 
            ¿Quieres explorar más? Ir a /articulos."
```

---

### 4.4 Orden de redacción sugerido

1. **Sección Mapa Visual** (primera porque es anclaje).
2. **Sección Introducción** (segunda, porque contextualiza el mapa).
3. **Sección Ciclo de Madurez** (tercera, porque es síntesis).
4. **Sección Capas Expandidas** (cuarta, porque es profundidad sobre el mapa).
5. **Sección Rutas de Lectura** (quinta, porque activa navegación).
6. **Sección Relación con Sitio** (sexta, para contexto meta).
7. **Sección Vocabulario** (séptima, para referencia).

---

---

## Parte 5 — Criterios de éxito

### 5.1 Criterio 1: COMPRENSIÓN

**Métrica:** Visitor entiende concepto fundacional después de leer Introducción + Mapa.

**Cómo saber:**
- Puede responder: **"¿Por qué order importa en framework Archwise?"**
- Respuesta esperada: **"Porque cada capa prepara interfaz para la siguiente. Si saltas, construyes sobre deuda."**
- No: "Porque es cronología". Eso es fracaso.

**Validación:**
- Heat map de permanencia: Visitor se queda en Introducción + Mapa mínimo 90 segundos.
- Scroll progresivo: No salta directo al final, explora estructura.

---

### 5.2 Criterio 2: NAVEGACIÓN

**Métrica:** Visitor encuentra ruta clara hacia artículos sin ambigüedad.

**Cómo saber:**
- Elige rol en Rutas de Lectura, recibe 5 artículos ordenados.
- Sigue primer artículo y hace click correctamente.
- No hay "¿A dónde voy ahora?" sin opción.

**Validación:**
- Click through rate de Rutas de Lectura > 70%.
- Visitor navega de /framework a artículo en < 3 clics.

---

### 5.3 Criterio 3: DISCOVERIMIENTO

**Métrica:** Visitor que NO sabía del framework lo descubre naturalmente desde acceso alternativo (Home, /articulos, Newsletter).

**Cómo saber:**
- Links a `/framework` en Home, /articulos header, footer del sitio.
- Referrer tracking: visitor llega del sitio, no de búsqueda externa.
- CTR de "Ir a /framework" es > 25% en contextos relevantes.

**Validación:**
- 40%+ del tráfico a `/framework` viene de interior del sitio, no búsqueda.

---

### 5.4 Criterio 4: PROFUNDIDAD (Depth of Engagement)

**Métrica:** Visitor que entra a `/framework` lee artículos conectados después.

**Cómo saber:**
- Visitor cliquea en artículo desde /framework.
- Lee artículo completo (80%+ de scroll).
- Cliquea en relatedArticle desde artículo.
- Vuelve a /framework o navega a siguiente artículo en ruta.

**Validación:**
- Visitor que sale de /framework lee promedio 2-3 artículos en sesión.
- Conversion a "lector comprometido" (3+ artículos/mes) > 35%.

---

### 5.5 Criterio 5: CONVERSIÓN FUTURA

**Métrica:** Visitor entiende valor suficiente como para volver o compartir.

**Cómo saber:**
- Suscripciones a newsletter desde /framework o artículos conectados > 15% de visitors.
- Return visitor (vuelve a /framework o artículos) en 7 días > 20%.
- Social shares de artículos descubiertos desde /framework > baseline.

**Validación:**
- Newsletter signup funnel desde /framework claramente instrumentado.
- Return visitor tracking por source (direct, referrer, search).

---

### 5.6 Criterio 6: PERTINENCIA POR ROL

**Métrica:** Visitor que sigue ruta por su rol sale con comprensión específica a su rol.

**Cómo saber:**
- CTO que hace ruta "CTO" lee articles 29, 11/13, 27, 20, 6/14.
- Architect que hace ruta "Architect" lee articles 26, 28, 29, 20, 27.
- Diferenciación clara por rol.

**Validación:**
- Rutas clickthrough per role > 60%.
- Articles en "ruta" tienen engagement 20-30% mejor que baseline para ese role.

---

### 5.7 Criterio NEGATIVO (lo que NO debería pasar)

**Anti-métrica 1:** Visitor confunde `/framework` con tutorial/how-to.
- Síntoma: "¿Cuál es el primer paso que debo hacer?"
- Fracaso: `/framework` se vuelve prescriptivo.

**Anti-métrica 2:** `/framework` sustituye `/articulos`.
- Síntoma: Tráfico a `/articulos` cae > 20% post-lanzamiento `/framework`.
- Fracaso: `/framework` canibalizó artículos.

**Anti-métrica 3:** Bounce rate de `/framework` > 50%.
- Síntoma: Visitor entra, no entiende, sale.
- Fracaso: Claridad insuficiente.

**Anti-métrica 4:** Visitor llega a `/framework`, no entiende qué hacer después.
- Síntoma: Tiempo en página > 5 minutos pero 0 clicks.
- Fracaso: Navegación no es clara.

---

---

## Parte 6 — Riesgos

### 6.1 Riesgo 1: /framework sustituye /articulos (cannibalización)

**Probabilidad:** Media-Alta.  
**Impacto:** Alto (reduce lectura profunda del corpus).

**Síntomas de alerta:**
- Tráfico a `/articulos` cae > 15% en primer mes post-lanzamiento.
- Visitor llega a `/framework` y hace click directo a primer artículo, sin explorar mapa.
- Engagement medio por artículo baja.

**Causa raíz probable:**
- `/framework` demasiado atractiva / `/articulos` queda invisibilizada.
- O `/framework` ya incluye contenido que debería estar solo en artículos.

**Mitigación:**
- Clear differentiation en `/framework`: "Esta es orientación. La profundidad está aquí → /articulos".
- No duplicar contenido entre `/framework` y artículos.
- Reforzar `/articulos` como "exploración completa del corpus".

---

### 6.2 Riesgo 2: /framework se vuelve prescriptiva/tutorial

**Probabilidad:** Media.  
**Impacto:** Medio (reduce utilidad para casos no estándar).

**Síntomas de alerta:**
- Visitor sale pensando "mi roadmap es 1 → 2 → 3 → ... en esa orden".
- CTOs de empresas greenfield se sienten "out of scope" porque framework presume legacy.
- Interpretación: "debes hacer Governance antes de Operating Model".

**Causa raíz probable:**
- Wireframe de capas demasiado "lineal" en presentación visual.
- Falta énfasis en "causalidad, no cronología".
- Rutas de lectura son demasiado específicas sin espacios para desviación.

**Mitigación:**
- Énfasis repetido: "Causal, no temporal". En Introducción, Mapa, Ciclo.
- No presentar capas como "hitos en timeline".
- Añadir contexto: "Tu punto de entrada depende de dónde estés hoy".

---

### 6.3 Riesgo 3: /framework es demasiado abstracta, sin aplicabilidad

**Probabilidad:** Media.  
**Impacto:** Alto (visitor no sabe qué hacer con info).

**Síntomas de alerta:**
- Visitor lee `/framework`, entiende conceptos, pero sale sin saber qué artículo leer.
- "¿En qué se diferencia esto de /manifesto?"
- Engagement con artículos es bajo (visitor no ve conexión).

**Causa raíz probable:**
- Falta anclaje operativo en cada capa (solo teoría).
- Preguntas de diagnóstico son demasiado vagas.
- Rutas de lectura no tienen "por qué empezar aquí" claro.

**Mitigación:**
- Cada capa tiene "pregunta de diagnóstico" operativa (no abstracta).
- Cada ruta de lectura tiene argumento de "por qué empezar en article X".
- Ejemplos mínimos en cada capa: "Si no tienes esto → pasa esto".

---

### 6.4 Riesgo 4: /framework obsoleta rápido (no escala con corpus)

**Probabilidad:** Alta.  
**Impacto:** Medio (requiere mantenimiento frecuente).

**Síntomas de alerta:**
- Article-30 publicado. ¿Dónde va en `/framework`?
- Article-35 publicado. ¿Cómo se reorganiza `/framework`?
- Usuario confundido: "¿Dónde están los artículos nuevos?"

**Causa raíz probable:**
- Capas están definidas sobre artículos específicos, no conceptos.
- No hay "estructura que escale" con nuevos artículos.

**Mitigación:**
- Capas están definidas sobre **conceptos**, no artículos.
- Artículos son ejemplos de cada capa, no definición.
- Diseña `/framework` para que sea estable con 50+ artículos.

---

### 6.5 Riesgo 5: /framework y Home compiten (confusión de roles)

**Probabilidad:** Media.  
**Impacto:** Medio (reduce coherencia del sitio).

**Síntomas de alerta:**
- Visitor llega a Home, se pregunta "¿debo ir a Home o a /framework?"
- Bounce rate en Home sube (porque visitor se va a `/framework`).
- Home tráfico relativo desciende.

**Causa raíz probable:**
- Home y `/framework` tienen propósito similar / CTA similar.
- No hay clear differentiation visual/narrativa.

**Mitigación:**
- Home: **Promesa emocional** ("Archwise cambia cómo piensas IA").
- /framework: **Mapa racional** ("Aquí está cómo pensamos").
- Home → /framework es flujo natural; no competencia.

---

### 6.6 Riesgo 6: /framework, Manifesto y /articulos son confusos en rol

**Probabilidad:** Baja (si definiciones son claras).  
**Impacto:** Medio (visitor confundido, navega mal).

**Síntomas de alerta:**
- "¿Qué es diferencia entre /framework y Manifesto?"
- Visitor no sabe cuál leer primero.
- Engagement bajo con múltiples assets.

**Causa raíz probable:**
- Propósito de cada asset no es diferenciado.
- No hay clara CTA de uno a otro.

**Mitigación:**
- Bloque en `/framework`: "Relación con resto del sitio" (explícito).
- Cada asset tiene "rol en el sitio" claro.
- CTAs naturales: Home → /framework o Manifesto → /framework.

---

### 6.7 Riesgo 7: Rutas por Rol son demasiado prescriptivas

**Probabilidad:** Baja.  
**Impacto:** Bajo-Medio (excluye gente fuera de rol definido).

**Síntomas de alerta:**
- Visitor busca rol, no lo encuentra exactamente. Se va.
- "¿Qué ruta hago si soy [rol no listado]?"
- Engagement desciende.

**Causa raíz probable:**
- 5 roles definidos, pero existen 20 perfiles reales.
- Usuario no se identifica con rol más cercano.

**Mitigación:**
- Describe roles con palabras amplias ("Responsable de decisiónes arquitectónicas"), no títulos exactos.
- Añade nota: "¿Tu rol no está? Elige el más cercano o combina rutas."
- Mantén rutas flexibles.

---

### 6.8 Riesgo 8: /framework ve mucho tráfico inicial, engagement cae luego

**Probabilidad:** Media.  
**Impacto:** Medio (vanity metrics vs real value).

**Síntomas de alerta:**
- Primer mes: 5K visitors a `/framework`.
- Mes 2: 2K visitors, bounce rate 60%.
- Return visitor rate baja.

**Causa raíz probable:**
- Launch hype decae.
- O fundamentalmente /framework no tiene replayabilidad.

**Mitigación:**
- Diseña `/framework` para ser **referenciable** (visitor vuelve a chequear).
- Trata como "North Star asset", no "launch artifact".
- Newsletter integrada para repetir engagement.

---

---

## Parte 7 — Próximas acciones previas a implementación

### Acción 1: Validación de rutas por rol (con 5+ CTOs reales)

**Tarea:** Presentar `/framework` skeleton + propuestas de rutas de lectura.  
**Objetivo:** Confirmar que rutas resonad, no son vagas.  
**Output:** Feedback de "¿qué artículo debería venir aquí?" por rol.

---

### Acción 2: Definición de "Pregunta de diagnóstico" por capa

**Tarea:** Decidir exactamente qué pregunta hace visitor evalúe si está listo para cada capa.  
**Objetivo:** Ser operativas, no vagas.  
**Output:** 6 preguntas, una por capa.

---

### Acción 3: Producción de contenido mínimo

**Tarea:** Redactar secciones Introducción, Mapa, Ciclo, Rutas (no Capas Expandidas aún).  
**Objetivo:** Versión alpha de `/framework`.  
**Output:** Markdown listo para review.

---

### Acción 4: Integración en Navigation (sitio)

**Tarea:** Decidir dónde aparece link a `/framework` en Home, navbar, /articulos.  
**Objetivo:** `/framework` es accesible, no escondida.  
**Output:** Mapa de links/CTAs.

---

### Acción 5: Instrumentación de métricas

**Tarea:** Definir eventos a trackear en `/framework` y artículos.  
**Objetivo:** Tener baseline de éxito vs fracaso.  
**Output:** GA4 events, heat maps, funnel config.

---

---

## Conclusión

`/framework` no es página bonita. Es **respuesta operativa** a pregunta que el corpus plantea:

> **"Si tengo fragmentos de IA diseminados en organización, ¿cómo sé que estoy construyendo sistema vs agregando deuda?"**

Resuelve esa pregunta con:
1. **Estructura clara:** Mapa causal, no cronología.
2. **Diagnóstico:** Pregunta operativa por capa.
3. **Navegación:** Rutas diferenciadas por rol.
4. **Profundidad:** Links a artículos que profundizan, no repiten.
5. **Transferencia:** Vocabulario y conceptos transferibles.

`/framework` NO es:
- Índice de artículos reorganizado.
- Roadmap lineal.
- Tutorial prescriptivo.
- Competidor con /articulos.
- Documento sin mantenimiento.

Si logra esto, `/framework` multiplica valor del corpus actual sin reemplazarlo.

---

**Documento completado:** 2026-06-06  
**Próximo paso:** Leer este documento + calificación estratégica de implementación vs otros candidatos.



