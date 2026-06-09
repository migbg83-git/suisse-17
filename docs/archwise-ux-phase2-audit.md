# Archwise UX Phase 2 Audit — Comprensión, Arquitectura de Información y Conversión

**Fecha:** 2026-06-09  
**Tipo:** Auditoría UX. Sin código. Sin implementación.  
**Premisa de análisis:** El visitante objetivo es un CTO, Enterprise Architect o Head of Engineering que llegó por referencia o búsqueda orgánica. Tiene 15 segundos para decidir si esto le importa.

---

## 1. Comprensión en 15 Segundos

### ¿Qué ve un CTO en los primeros 15 segundos?

**Secuencia real de lectura:**

1. Navbar: Logo + "Archwise" + Framework / Artículos / Manifesto / Newsletter / About
2. H1: "La IA empresarial falla por arquitectura, no por modelos."
3. Subtítulo: "Archwise es un framework arquitectónico de 6 capas..."
4. Frase foundational: "Los problemas de IA empresarial rara vez son problemas de modelos. Son problemas de arquitectura."
5. CTAs: "Explorar Framework" / "Ver artículos"

### Diagnóstico de Comprensión

| Pregunta | Respuesta en 15s | Fricción |
|----------|-----------------|----------|
| ¿Qué es Archwise? | Sí — "framework de 6 capas" | Baja |
| ¿Qué problema resuelve? | Parcialmente — "IA falla por arquitectura" | Media |
| ¿Por qué existe? | No | Alta |
| ¿Qué debo hacer después? | Parcialmente — dos CTAs, ninguno diferenciado | Media |

### Fricción Principal: El H1 diagnostica pero no promete

"La IA empresarial falla por arquitectura, no por modelos." es una tesis, no una promesa de valor.  
Un CTO entiende el diagnóstico, pero no sabe qué consigue si sigue leyendo.

**Pregunta sin respuesta:** ¿Qué pasa si uso Archwise? ¿Cuál es el resultado esperado?

El subtítulo responde parcialmente ("construir en el orden correcto", "escalar sin deuda estructural") pero llega tarde en la jerarquía visual y su densidad semántica es alta para 5 segundos de lectura.

### Fricción Secundaria: La frase fundacional duplica el H1

"Los problemas de IA empresarial rara vez son problemas de modelos. Son problemas de arquitectura."

Esta frase dice exactamente lo mismo que el H1 con otras palabras. No añade información nueva. Consume espacio y dilata el tiempo hasta los CTAs.

### Fricción Terciaria: CTAs sin jerarquía real

"Explorar Framework" (primario) y "Ver artículos" (secundario) están en la misma pantalla, pero no hay tensión entre ellos.  
El usuario no sabe si el framework es un documento, una herramienta, un mapa o un curso.  
La palabra "Explorar" no indica suficientemente bien qué va a encontrar al otro lado.

---

## 2. Home → Framework: ¿Conduce correctamente?

### Flujo actual

```
Hero (tesis) → Framework Preview (métricas) → Artículos destacados → Lo que creemos → Newsletter
```

### Problemas de Flujo

**A. El Framework Preview no explica capas, explica cantidades**

Las 3 métricas actuales son:
- 6 capas arquitectónicas
- 30 decisiones críticas
- 1 orden causal de activación

Esto transmite escala pero no arquitectura. Un CTO entiende que hay 6 capas, pero no sabe qué resuelve cada una ni por qué el orden importa.

**Gap concreto:** El preview no nombra ninguna capa. "Diagnóstico AI-Ready", "Contexto explícito", "Governance" son conceptos específicos que aumentan credibilidad. Usar solo el número 6 es opaco.

**B. Los artículos aparecen antes de "Lo que creemos"**

El orden actual es:
1. Hero (tesis del framework)
2. Framework Preview (métricas)
3. Artículos (evidencia)
4. Lo que creemos (fundamentos filosóficos)

El problema: "Lo que creemos" contiene los principios que dan sentido al framework. Pero llega después de los artículos. Un visitante nuevo que no entiende todavía el framework se encuentra con artículos técnicos antes de tener el marco conceptual.

**Orden más efectivo para un visitante frío:**
1. Hero (tesis)
2. Lo que creemos / principios (por qué el framework existe)
3. Framework Preview con nombres de capas
4. Artículos como evidencia

**C. "Lo que creemos" conduce al Manifesto, no al Framework**

El CTA de esa sección es "Leer manifesto completo →". Después de leer los 3 principios, el siguiente paso empuja al Manifesto, no al Framework. Esto fragmenta el flujo deseado.

**D. Newsletter al final compite con el objetivo principal**

El objetivo de la Home es convertir a un visitante en un explorador del framework. La newsletter al final crea una conversión alternativa que puede sustituir al objetivo principal para visitantes que no llegan hasta el CTA del hero.

**¿Qué sobra?** La newsletter en la Home no sobra, pero debería ser el último recurso, no una opción equivalente.

**¿Qué falta?** Una capa de nombres. La Home en ningún punto menciona "Diagnóstico AI-Ready", "Context Debt", "Governance", "Organizational Memory". Son conceptos que generan credibilidad específica.

---

## 3. Auditoría del Hero

### Copy actual

**H1:** "La IA empresarial falla por arquitectura, no por modelos."  
**Subtítulo:** "Archwise es un framework arquitectónico de 6 capas para construir capacidades IA en el orden correcto. Conecta decisiones, dependencias y gobernanza para escalar sin deuda estructural."  
**Foundational:** "Los problemas de IA empresarial rara vez son problemas de modelos. Son problemas de arquitectura."

### Evaluación

| Criterio | Puntuación | Análisis |
|----------|-----------|---------|
| Claridad | 7/10 | El H1 es claro como diagnóstico, opaco como propuesta |
| Autoridad | 8/10 | "Arquitectura no modelos" es una postura intelectualmente fuerte |
| Diferenciación | 8/10 | Nadie más dice esto con esta precisión |
| Memorabilidad | 7/10 | El H1 es memorable, el subtítulo no |
| Acción | 5/10 | Los CTAs no se benefician del H1 |

### Problema Concreto: El H1 es una acusación, no una promesa

El H1 actual diagnostica el mercado. Es un buen gancho de apertura. Pero no hay ningún punto en el Hero donde se diga explícitamente qué ofrece Archwise como respuesta a ese diagnóstico.

El subtítulo lo intenta pero con demasiada densidad: "construir capacidades IA en el orden correcto. Conecta decisiones, dependencias y gobernanza para escalar sin deuda estructural." Son tres conceptos distintos en una sola frase de 22 palabras.

### Frase foundational: eliminar o reposicionar

"Los problemas de IA empresarial rara vez son problemas de modelos. Son problemas de arquitectura."

Esta frase repite la tesis del H1 y ocupa espacio entre el subtítulo y los CTAs. No añade señal nueva. O se elimina o se reemplaza por la promesa de resultado específica que falta.

### CTA "Explorar Framework": ambiguo

"Explorar" no comunica destino. Alternativas más concretas:
- "Ver el Framework de 6 capas"
- "Entender el orden causal"
- "Acceder al Framework"

El CTA secundario "Ver artículos" compite directamente con el primario sin jerarquía real de valor.

---

## 4. Framework Preview: ¿Explica el Framework?

### Estado actual

```
H2: Framework Archwise
[ 6 ] capas arquitectónicas
[ 30 ] decisiones críticas
[ 1 ] orden causal de activación
CTA: Ver mapa completo →
```

### Diagnóstico

**Las métricas transmiten escala, no arquitectura.**

El número 6 no dice nada a alguien que no conoce Archwise. El número 30 tampoco. Solo el "1 orden causal" tiene valor diferencial porque implica que hay una secuencia correcta, no arbitraria.

**Lo que falta: nombres de capa.**

Las 6 capas tienen nombres específicos que generan credibilidad:
1. Diagnóstico AI-Ready
2. Contexto explícito y Knowledge Debt
3. Governance
4. AI Operating Model
5. Organizational Memory
6. Context Systems y capacidad agéntica

Ninguno aparece en el Preview. Un visitante nuevo que lee "6 capas arquitectónicas" no sabe si esas capas son técnicas, organizativas, filosóficas o metodológicas.

**CTA "Ver mapa completo →" es correcto pero insuficiente.**

El CTA conduce al /framework, que es lo correcto. Pero el copy "mapa completo" es ambiguo. ¿Mapa de qué? ¿Un mapa visual, un índice, una herramienta?

### Propuesta de mejora conceptual

El preview debería mostrar al menos los nombres de las 6 capas en secuencia, con el mensaje explícito de que el orden importa. Algo como:

```
Capa 1 → Diagnóstico AI-Ready
Capa 2 → Contexto explícito
Capa 3 → Governance
...
El orden no es optativo. Es causal.
```

Esto transforma el preview de "tenemos 6 cosas" a "el orden de estas 6 cosas determina si tu IA funciona".

---

## 5. Header Global

### Estado actual

```
[Logo A] Archwise    |    Framework  Artículos  Manifesto  Newsletter  About
```

### Evaluación

**Jerarquía del menú: no refleja la jerarquía del sitio.**

La página más importante de Archwise es /framework. Aparece en primera posición del menú, lo cual es correcto. Pero no tiene ningún tratamiento visual que la distinga del resto.

**5 ítems de navegación: ¿todos necesarios?**

| Ítem | Rol en Archwise | Prioridad |
|------|----------------|-----------|
| Framework | Producto principal | Crítica |
| Artículos | Evidencia del framework | Alta |
| Manifesto | Fundamento filosófico | Media |
| Newsletter | Conversión de retención | Baja |
| About | Contexto de autoría | Baja |

Newsletter y About añaden ruido para un visitante nuevo. En mobile son especialmente prescindibles en el navbar porque ocupan espacio sin añadir claridad.

**Problema de señal:** El visitante que llega por primera vez no sabe qué es "Framework" hasta que hace clic. El navbar no da ninguna pista contextual de por qué Framework es el elemento más importante.

**¿Debería "Framework" ser un botón/CTA y no un link?**

Sí. Diferenciar "Framework" como CTA principal en el navbar (tratamiento visual distinto, no solo subrayado activo) comunicaría inmediatamente que ese es el destino principal.

**Branding:**

"Archwise" como texto con logo pequeño es correcto. No hay nada que añadir aquí salvo asegurar que la carga del logo no sea asíncrona en SSR (actualmente usa favicon PNG, que puede flashear).

---

## 6. Página /articulos

### Estado actual

```
Hero: "Artículos"
Anchor nav: Empieza aquí / Últimos publicados / Mapa del framework
Sección "Empieza aquí" (5 artículos curados)
Sección "Últimos publicados" (todos los artículos, cronológico)
Sección "Mapa del framework" (4 stages, artículos agrupados)
```

### Diagnóstico

**A. "Últimos publicados" con orden cronológico contradice la tesis**

La tesis principal de Archwise es que el orden de las capas es causal, no temporal. Pero la sección "Últimos publicados" organiza los artículos por fecha.

Esto es una contradicción directa visible en la misma página. El visitante llega por la Home que dice "el orden importa" y encuentra los artículos ordenados por fecha.

La sección debería llamarse "Todos los artículos" o "Índice completo" y su subtítulo no debería decir "Cronología completa del índice editorial", que confirma el modo blog.

**B. El "Mapa del framework" está al final de una página larga**

La sección más valiosa para un visitante nuevo que viene del framework (/articulos#mapa-framework) está después de 30+ artículos cronológicos. Para llegar a ella hay que hacer scroll por toda la lista o usar el anchor nav.

Para alguien que viene de /framework buscando los artículos de una capa específica, el flujo actual es frustrante.

**C. Los 4 stages del mapa no coinciden con las 6 capas del framework**

El mapa en /articulos usa 4 stages:
- Contexto y deuda de conocimiento
- Gobierno y control
- Modelo operativo
- Memoria y Context Systems

El framework en /framework tiene 6 capas con nombres distintos. Esta desalineación crea confusión: el visitante aprende un vocabulario en /framework y encuentra otro vocabulario en /articulos.

**D. ¿Necesita filtros, búsqueda o paginación?**

Con 30 artículos no es urgente. Pero si se alinea el mapa a las 6 capas reales del framework, filtrar por capa se vuelve posible y útil sin necesidad de sistema de búsqueda.

**E. ¿Debe seguir mostrando el mapa del framework al final?**

Sí, pero debería estar primero (antes de la lista cronológica) y debería usar exactamente las 6 capas del framework, no 4 stages con nombres distintos.

---

## 7. Framework → Artículos: Gaps de Conexión

### Estado actual en /framework

- Layer Map: muestra las capas con nombres
- Layer Detail: expandable con artículos por capa
- Navigator: rutas por perfil + intención
- Continuity: CTAs de retorno

### Estado actual en /articulos

- "Empieza aquí": 5 artículos curados
- "Últimos publicados": todos en cronológico
- "Mapa": 4 stages desalineados con las capas

### Gaps identificados

**Gap 1: Desde /framework no se puede ir directamente a "todos los artículos de la Capa X"**

En /framework, al expandir una capa se ven los artículos de esa capa. Pero no hay un enlace "Ver todos los artículos de esta capa" que conduzca a /articulos filtrado por capa. Cada artículo es un link individual, no hay una vista de capa completa.

**Gap 2: Desde /articulos no se puede filtrar por las 6 capas del framework**

El mapa de /articulos usa 4 stages distintos a las capas del framework. No hay ningún filtro por capa real.

**Gap 3: Los artículos no tienen indicación de su posición en la secuencia causal**

En la lista de /articulos, no hay ningún indicador de "Capa X" junto al título. El lector ve artículos en cronológico sin señal de su lugar en el framework.

(Nota: en el Article Detail sí existe el badge de capa. Pero en la lista de /articulos ese badge no existe.)

**Gap 4: El Navigator del Framework no está accesible desde /articulos**

El Navigator (perfil + intención → ruta de artículos recomendada) es la herramienta más valiosa del Framework para un visitante que sabe qué quiere. Pero solo existe en /framework. Si alguien está en /articulos mirando la lista, no encuentra el Navigator.

**Gap 5: "Empieza aquí" tiene 5 artículos que no necesariamente son los de Capa 1**

Los artículos seleccionados para "Empieza aquí" están curados manualmente y no reflejan la Capa 1 del framework (Diagnóstico AI-Ready). La Capa 1 incluye artículos sobre sistemas preparados vs. legacy, 7 características AI-ready, etc. El "Empieza aquí" tiene artículos de Capa 2 y Capa 3. Esto puede ser intencional (son artículos más accesibles) pero crea una inconsistencia semántica.

---

## 8. Priorización

### Tabla de Mejoras

| Mejora | Impacto | Complejidad | Prioridad |
|--------|---------|-------------|-----------|
| Reordenar secciones Home: mover "Lo que creemos" antes de artículos | Alto | Muy baja | **P0** |
| Eliminar frase foundational del Hero (duplica H1) | Alto | Muy baja | **P0** |
| Añadir badge de capa en lista de /articulos | Alto | Baja | **P0** |
| Alinear "Mapa del framework" en /articulos con las 6 capas reales | Alto | Media | **P0** |
| Mover "Mapa del framework" antes de "Últimos publicados" en /articulos | Alto | Muy baja | **P0** |
| Renombrar "Últimos publicados" + cambiar subtítulo (eliminar "cronología editorial") | Alto | Muy baja | **P0** |
| Añadir nombres de las 6 capas en el Framework Preview de Home | Alto | Baja | **P1** |
| Diferenciar visualmente "Framework" en navbar como destino principal | Medio | Baja | **P1** |
| Cambiar CTA hero "Explorar Framework" a copy más específico | Medio | Muy baja | **P1** |
| Cambiar CTA "Lo que creemos" de Manifesto a Framework | Medio | Muy baja | **P1** |
| Añadir enlace "Ver artículos de esta capa" desde Layer Detail del Framework | Medio | Baja | **P1** |
| Eliminar Newsletter y About del navbar (reducir a 3 ítems en mobile) | Medio | Muy baja | **P2** |
| Añadir indicador de posición causal en cada artículo de la lista | Medio | Media | **P2** |
| Alinear "Empieza aquí" con artículos de Capa 1 real | Bajo | Media | **P2** |
| Añadir acceso al Navigator desde /articulos | Bajo | Alta | **P3** |
| Filtro por capa en /articulos | Bajo | Alta | **P3** |

### Razonamiento de P0

Los P0 son todos cambios de copy, reordenación o renombrado. Ninguno requiere nueva lógica. Su impacto es alto porque afectan la comprensión en el primer scroll y la coherencia del vocabulario entre páginas.

Los P1 son mejoras que refuerzan la arquitectura de información sin infraestructura nueva.

Los P2 y P3 requieren lógica adicional o rediseño de componentes y su ROI es menor en este momento.

---

## Resumen Ejecutivo

### Los 5 problemas más graves en orden de impacto

**1. La Home no muestra los nombres de las capas del framework.**  
Métricas sin nombres son opacas. El Framework Preview dice "6 capas" pero no dice cuáles. Esto elimina la credibilidad específica que genera confianza en un CTO.

**2. /articulos organiza el conocimiento en modo blog cuando el framework exige modo arquitectónico.**  
"Últimos publicados" con orden cronológico y subtítulo "cronología editorial" contradicen directamente la tesis del sitio.

**3. Los artículos en la lista de /articulos no muestran a qué capa pertenecen.**  
El badge de capa existe en el Article Detail pero no en la lista. Un visitante que navega /articulos ve títulos sin contexto de framework.

**4. El mapa del framework en /articulos usa 4 stages desalineados con las 6 capas reales.**  
Dos vocabularios para el mismo concepto destruyen la coherencia intelectual que Archwise necesita para ser percibido como framework, no como publicación.

**5. La frase foundacional del Hero duplica el H1 y retrasa los CTAs.**  
Copy redundante antes de los CTAs reduce la tasa de acción sin añadir comprensión.

---

## Notas de Auditoría

Esta auditoría se basa en lectura directa del código de los componentes. No incluye datos de comportamiento real de usuarios. Las prioridades reflejan coherencia semántica y arquitectura de información, no métricas de conversión.

Todos los P0 son reversibles, de bajo riesgo y ejecutables en menos de 30 minutos cada uno.
