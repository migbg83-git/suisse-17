# Articles Page — Framework Alignment Plan

**Fecha:** 2026-06-09  
**Scope:** /articulos exclusivamente. Sin Home, sin Navbar, sin Newsletter.  
**Tipo:** Arquitectura de información. Sin código. Sin CSS.

---

## 1. Diagnóstico: Por Qué /articulos Parece un Blog

### Elementos que generan percepción de blog

**A. La sección "Últimos publicados" como eje central**

Es el bloque más grande de la página. Contiene los 30 artículos completos en orden cronológico inverso. El subtítulo lo confirma explícitamente: "Cronología completa del índice editorial."

El término "cronología" es la palabra que más daño hace. Comunica que la organización del conocimiento depende del tiempo de publicación, no de la arquitectura. Un framework que proclama causalidad no puede organizar su conocimiento por fecha.

**B. El subtítulo del hero: "Índice editorial"**

```
"Índice editorial para CTOs, arquitectos y equipos que escalan IA en entornos enterprise."
```

"Índice editorial" es la autodefinición de una publicación, no de un framework. Un framework tiene un "índice de decisiones", un "mapa de capas" o un "índice arquitectónico". "Editorial" refuerza la identidad de blog aunque el contenido sea técnico.

**C. Los artículos en la lista no tienen señal de capa**

En la lista cronológica, cada artículo muestra: título, resumen, categoría, fecha, tiempo de lectura. No hay ningún indicador de "Capa X". El visitante ve 30 artículos como 30 piezas de contenido plano, sin relación estructural visible entre ellos.

**D. El mapa del framework al final con vocabulario propio**

La sección "Mapa del framework Archwise" usa 4 stages:
- Contexto y deuda de conocimiento
- Gobierno y control
- Modelo operativo
- Memoria y Context Systems

El framework en /framework tiene 6 capas con nombres distintos:
1. Diagnóstico AI-Ready
2. Contexto explícito y Knowledge Debt
3. Governance
4. AI Operating Model
5. Organizational Memory
6. Context Systems y capacidad agéntica

Estos dos vocabularios coexisten en el mismo sitio para describir la misma estructura. La desalineación confirma que /articulos fue construida como catálogo de contenido independiente del framework, no como su índice.

**E. "Empieza aquí" no arranca desde la Capa 1**

La sección introductoria incluye artículos de Capas 2 y 3 (context engineering, knowledge debt, governance). La Capa 1 (Diagnóstico AI-Ready) está casi ausente. Para alguien que viene desde el framework y busca seguir la secuencia causal, "Empieza aquí" no refleja el punto de partida arquitectónico.

### Contradicciones respecto al framework

| Elemento en /articulos | Mensaje que transmite | Mensaje del framework |
|------------------------|----------------------|-----------------------|
| "Últimos publicados" | El tiempo organiza el conocimiento | El orden causal organiza el conocimiento |
| "Cronología completa del índice editorial" | Soy una publicación con historial | Soy un mapa de decisiones interdependientes |
| 4 stages (mapa) | Hay 4 grupos temáticos | Hay 6 capas causalmente ordenadas |
| Ausencia de badge de capa en lista | Los artículos son piezas sueltas | Cada artículo pertenece a una capa específica |
| "Índice editorial" en hero | Publicación con lógica editorial | Framework con lógica arquitectónica |

---

## 2. Arquitectura Objetivo

### Qué debe percibir un visitante al entrar en /articulos

**NO:**
> Últimas publicaciones del blog sobre IA enterprise

**SÍ:**
> Índice de decisiones arquitectónicas del Framework Archwise, organizado por las 6 capas y sus dependencias

### Perfil del visitante que llega a /articulos

Hay dos tipos de entrada:

**Visitante frío (viene desde Google o Home):**  
No conoce el framework todavía. Necesita entender que los artículos son piezas de un sistema, no posts aislados. El primer mensaje que recibe debe ser ese.

**Visitante contextualizado (viene desde /framework):**  
Ya conoce las capas. Busca los artículos de una capa específica o quiere profundizar en una decisión. Necesita navegar por capa, no por fecha.

La arquitectura objetivo debe servir a los dos perfiles sin fricción.

### Principio rector

> Cada artículo es una decisión arquitectónica. Las decisiones tienen dependencias. Las dependencias tienen orden. El orden es la arquitectura.

Este principio debe ser visible —o al menos palpable— en la primera pantalla de /articulos.

---

## 3. Reestructuración Propuesta

### Jerarquía propuesta

```
[1] Hero
[2] Ruta de entrada recomendada (Empieza aquí)
[3] Por capa del framework (las 6 capas reales)
[4] Índice completo (todos los artículos, sin "cronología")
```

### Detalle de cada sección

---

#### [1] Hero

**Título actual:**
> Artículos

**Problema:** Genérico. No comunica nada sobre el framework.

**Título propuesto:**
> Decisiones arquitectónicas

**Subtítulo propuesto:**
> Cada artículo explica una decisión crítica del Framework Archwise. Las decisiones tienen dependencias. Navega por capa, no por fecha.

**Propósito:** El visitante frío entiende desde el primer segundo que está ante un índice de framework, no ante un blog.

---

#### [2] Ruta de entrada — "Empieza aquí"

Mantener esta sección. Es el mejor recurso para visitantes fríos que no saben por dónde empezar.

**Renombrar no es necesario.** "Empieza aquí" es claro y funcional.

**Ajuste necesario:** Los 5 artículos seleccionados deberían incluir al menos uno de Capa 1 (Diagnóstico AI-Ready) para que la ruta de entrada refleje el punto de partida del framework.

**Copy del subtítulo actual:**
> "Ruta esencial para comprender el framework Archwise antes de profundizar por temas."

**Propuesta:**
> "Ruta de entrada al framework. Empieza por aquí si es tu primera vez en Archwise."

**Sin cambio de artículos salvo el ajuste de Capa 1 indicado.**

---

#### [3] Por capa del framework — "Capas del Framework"

**Esta es la sección nueva central.** Sustituye al "Mapa del framework Archwise" actual.

**Nombre de sección:**
> Capas del Framework Archwise

**Subtítulo:**
> Las 6 capas organizan las decisiones por dependencia, no por fecha. Una capa no funciona sin las anteriores.

**Estructura de cada capa:**

```
CAPA 1 · Diagnóstico AI-Ready
Evalúa preparación real antes de activar nuevas capacidades.
→ [artículo 1]
→ [artículo 2]
→ [artículo 3]
→ [artículo 4]
         [Ver esta capa en el Framework →]

CAPA 2 · Contexto explícito y Knowledge Debt
Establece contexto operativo y reduce deuda de conocimiento.
→ [artículo 1]
...

... hasta Capa 6
```

**CTA por capa:**
> Ver esta capa en el Framework →

Enlaza a `/framework#layer-X`. Conecta directamente con el componente de detalle de capa ya existente en /framework.

**Nota:** Este es el mapa que ya existe parcialmente como "framework stages", pero con 4 grupos desalineados. La propuesta lo reemplaza por los datos reales de `FRAMEWORK_PAGE_DATA.layers` ya definidos en `framework.data.ts`.

---

#### [4] Índice completo — todos los artículos

**Nombre actual:** "Últimos publicados"  
**Problema:** "Últimos" implica cronología. "Publicados" implica blog.

**Nombre propuesto:**
> Índice completo

**Subtítulo propuesto:**
> Todos los artículos del framework. Ordenados por fecha de publicación.

La diferencia es sutil pero importante: la fecha pasa de ser el principio organizador a ser simplemente uno de los metadatos disponibles. El visitante entiende que el orden cronológico es un modo de visualización, no la arquitectura del conocimiento.

**Badge de capa:** Ver sección 5.

**Anchor nav actual:**
> Empieza aquí / Últimos publicados / Mapa del framework

**Anchor nav propuesto:**
> Empieza aquí / Capas del Framework / Índice completo

---

### Resumen del Orden de Secciones

| Posición | Sección actual | Sección propuesta |
|----------|---------------|-------------------|
| 1 | Hero "Artículos" | Hero "Decisiones arquitectónicas" |
| 2 | Anchor nav | Anchor nav (updated) |
| 3 | Empieza aquí | Empieza aquí (ajuste menor) |
| 4 | Últimos publicados | **Capas del Framework** (nueva posición y contenido) |
| 5 | Mapa del framework | Índice completo (rebautizado) |

El cambio de orden más importante: **"Por capa" aparece antes del índice cronológico**, no al final. El visitante contextualizado (viene de /framework) llega a la sección más útil sin scroll.

---

## 4. Alineación con las 6 Capas Reales

### Estado actual del mapa en /articulos

El mapa actual usa `FRAMEWORK_STAGES` definido directamente en `articles.component.ts` con 4 stages y nombres propios:

```
"Contexto y deuda de conocimiento"     → 4 artículos
"Gobierno y control"                    → 3 artículos
"Modelo operativo"                      → 2 artículos
"Memoria y Context Systems"             → 3 artículos
                                         Total: 12 artículos de 30
```

**Problemas:**
1. Solo cubre 12 de los 30 artículos (40%).
2. Los nombres no coinciden con los de `/framework`.
3. No existe la Capa 1 (Diagnóstico AI-Ready).
4. Las capas 4 y 5 están fusionadas en "Modelo operativo".
5. Las capas 5 y 6 están fusionadas en "Memoria y Context Systems".

### Las 6 capas reales en `framework.data.ts`

| Capa | Nombre | Artículos en framework.data.ts |
|------|--------|-------------------------------|
| 1 | Diagnóstico AI-Ready | 4 |
| 2 | Contexto explícito y Knowledge Debt | 9 |
| 3 | Governance | 4 |
| 4 | AI Operating Model | 4 |
| 5 | Organizational Memory | 2 |
| 6 | Context Systems y capacidad agéntica | 7 |
| **Total** | | **30** |

Los 30 artículos están distribuidos exactamente. La fuente de verdad ya existe en `framework.data.ts`.

### Qué stages deben desaparecer

Los 4 stages de `FRAMEWORK_STAGES` en `articles.component.ts` deben ser reemplazados en su totalidad por las 6 capas de `FRAMEWORK_PAGE_DATA.layers`.

**No coexistir:** Los stages actuales no deben mantenerse ni como alternativa ni como subnivel. Un solo vocabulario, una sola estructura.

### Cómo mostrar artículos por capa

La sección "Capas del Framework" debería mostrar para cada capa:
- Indicador de número de capa ("CAPA 1")
- Nombre de la capa
- Descripción corta (ya existe en `shortDescription`)
- Lista de artículos de esa capa (título + tiempo de lectura)
- CTA: "Ver esta capa en el Framework →" → `/framework#layer-X`

La fuente de datos completa ya existe: `FRAMEWORK_PAGE_DATA.layers[n].articleSlugs` contiene los slugs. Los artículos se resuelven cruzando con el array de artículos cargado del `ContentService`. Es la misma lógica que ya existe en la sección de mapa actual.

**Expansión o colapso:** Dado que hay 30 artículos en 6 capas, mostrar todos expandidos puede generar scroll excesivo. Considerar mostrar por defecto los títulos de las capas + 2-3 artículos por capa con un "Ver todos los artículos de esta capa" por capa.

---

## 5. Badge de Capa en la Lista

### Dónde aparece

En la sección "Índice completo" (actual "Últimos publicados"), cada artículo de la lista debe mostrar su capa junto a la categoría en la línea de metadatos.

### Formato propuesto

```
[título del artículo]
[resumen]
CAPA 2 · Context · 12 jun 2025 · 8 min
```

Alternativamente, si se quiere mayor prominencia:

```
CAPA 2 · CONTEXTO EXPLÍCITO
[título del artículo]
[resumen]
Context · 12 jun 2025 · 8 min
```

### Copy del badge

El badge debe seguir el mismo formato que el ya implementado en el Article Detail:

```
CAPA X · [nombre de capa]
```

Ejemplo real:
```
CAPA 3 · GOVERNANCE
CAPA 1 · DIAGNÓSTICO AI-READY
CAPA 6 · CONTEXT SYSTEMS
```

### Artículos sin capa asignada

Si un artículo no aparece en `framework.data.ts`, el badge simplemente no se muestra. No es un error, es un artículo que todavía no ha sido asignado a capa. La lógica `getLayerForArticle(slug)` ya implementada en `layer-mapping.ts` puede reutilizarse directamente.

### En la sección "Capas del Framework"

Dentro de la sección por capas, el badge no es necesario porque el contexto de capa ya es el encabezado de la sección. El badge tiene sentido en la lista flat, no en la vista agrupada por capa.

---

## 6. Relación Framework ↔ Artículos

### Estado actual de la conexión

**Desde /framework hacia /articulos:**
- El Layer Detail de cada capa lista los artículos y enlaza al Article Detail directamente.
- No existe un enlace "Ver todos los artículos de esta capa en el índice".
- El Navigator genera una ruta de artículos recomendados pero también enlaza directamente al Article Detail.

**Desde /articulos hacia /framework:**
- La sección "Mapa del framework" tiene 4 stages pero no enlaza a las capas correspondientes en /framework.
- No existe un CTA global "Explorar el Framework completo" al principio de la página.

### Conexiones propuestas

#### Framework → Artículos

**Desde el Layer Detail de cada capa:**  
Añadir al final de la lista de artículos de cada capa un enlace:
> Ver todos los artículos de esta capa →

Enlaza a `/articulos#capa-X` (o el anchor que corresponda a la sección de capa en /articulos).

**Sin nueva lógica:** El enlace es estático y reutiliza el `layer.id` ya disponible.

#### Artículos → Framework

**Hero de /articulos:**  
Añadir CTA secundario en el hero:
> Explorar el Framework →

Enlaza a `/framework`. No es nuevo contenido, es un link.

**Al final de cada capa en "Capas del Framework":**  
CTA ya propuesto:
> Ver esta capa en el Framework →

**"Empieza aquí":**  
Añadir nota contextual antes de la lista:
> Estos artículos siguen el orden causal del Framework. Para entender el mapa completo: [Ver Framework →]

#### Article Detail → /articulos

Ya existe el breadcrumb `Artículos / Framework / Capa X`. El breadcrumb "Artículos" enlaza a `/articulos`. La conexión es correcta.  

No se propone ningún cambio aquí. El Article Detail ya está bien conectado.

### Resumen de flujos

```
/framework (capa expandida)
    → [Ver todos los artículos de esta capa →] → /articulos#capa-X

/articulos (hero)
    → [Explorar el Framework →] → /framework

/articulos (sección por capa)
    → [Ver esta capa en el Framework →] → /framework#layer-X

/articulos (artículo en lista)
    → clic en título → /articulos/{slug} (Article Detail)

Article Detail (breadcrumb)
    → "Artículos" → /articulos
    → "Capa X" → /framework#layer-X

Article Detail (badge de capa)
    → "Ver esta capa en el Framework →" → /framework#layer-X

Article Detail (CTA final)
    → "Explorar Framework →" → /framework
```

Este grafo de navegación no tiene ciclos muertos. Desde cualquier punto el usuario puede encontrar el framework, los artículos individuales o el índice.

---

## 7. Priorización

| Cambio | Impacto | Complejidad | Prioridad |
|--------|---------|-------------|-----------|
| Renombrar "Últimos publicados" → "Índice completo" + cambiar subtítulo | Alto | Muy baja | **P0** |
| Cambiar subtítulo del Hero: "índice editorial" → "decisiones arquitectónicas" | Alto | Muy baja | **P0** |
| Cambiar título del Hero "Artículos" → "Decisiones arquitectónicas" | Medio | Muy baja | **P0** |
| Mover "Capas del Framework" (o Mapa) antes de "Índice completo" | Alto | Muy baja | **P0** |
| Reemplazar los 4 stages del mapa por las 6 capas reales de `framework.data.ts` | Alto | Baja | **P0** |
| Añadir badge de capa en el "Índice completo" usando `getLayerForArticle()` ya implementado | Alto | Baja | **P0** |
| Añadir CTA "Explorar el Framework →" en el hero de /articulos | Medio | Muy baja | **P1** |
| Añadir CTA "Ver esta capa en el Framework →" al final de cada grupo de capa | Medio | Muy baja | **P1** |
| Ajustar anchor nav: "Últimos publicados" → "Índice completo", "Mapa del framework" → "Capas del Framework" | Medio | Muy baja | **P1** |
| Ajustar "Empieza aquí" para incluir artículo de Capa 1 | Bajo | Baja | **P2** |
| Añadir enlace "Ver todos los artículos de esta capa" desde Layer Detail en /framework | Bajo | Baja | **P2** |

### Observaciones sobre complejidad

**P0 con complejidad "Muy baja":**  
Los cambios de copy y reordenación son literalmente cambios de texto en el template HTML y en las constantes de `articles.component.ts`. No requieren nuevos servicios, nuevas rutas ni nueva lógica.

**P0 con complejidad "Baja":**  
Reemplazar los 4 stages por las 6 capas requiere sustituir `FRAMEWORK_STAGES` en `articles.component.ts` por una referencia a `FRAMEWORK_PAGE_DATA.layers`. La misma fuente de datos ya usada en `/framework`. El badge de capa reutiliza `getLayerForArticle()` ya implementado.

**Todos los P0 son ejecutables en una sola sesión sin riesgo de regresión.**

---

## Nota de Consistencia Crítica

La inconsistencia más peligrosa no es estética: es semántica.

Cuando un CTO lee en /framework "Capa 3 — Governance" y luego va a /articulos y ve "Gobierno y control", no puede conectar que es la misma capa. Esto no es un problema de diseño, es un problema de credibilidad intelectual.

Un framework cuyo vocabulario varía entre páginas no parece un framework. Parece un sitio con múltiples autores y sin estilo de guía unificado.

**La solución no requiere nueva tecnología. Requiere un único vocabulario y una única fuente de datos: `FRAMEWORK_PAGE_DATA.layers`.**
