# Article Detail Experience Audit & Redesign

Fecha: 2026-06-09  
Scope: Experiencia de lectura de artículos individuales en Archwise  
Perspectiva: Visitante que aterriza desde Google en un artículo específico

---

## 1. CURRENT EXPERIENCE AUDIT

### Componentes actuales del article-detail

| Elemento | Estado | Observación |
|---|---|---|
| Breadcrumb | Presente | `Artículos / {Category}` — No menciona Framework ni capa |
| Category label | Presente | Categoría editorial (e.g. "Governance") — No vinculada a capa del framework |
| Título | Presente | Correcto |
| Summary/Lead | Presente | Correcto |
| Meta (autor, fecha, tiempo) | Presente | Correcto |
| Contenido HTML | Presente | Correcto |
| Tags | Presente | Muestra tags al final del contenido |
| Newsletter CTA | Presente | Después del contenido, antes de related |
| Related Articles | Presente | "Seguir leyendo" + grid de artículos relacionados |
| Mención a Framework | **AUSENTE** | No existe ningún elemento que vincule el artículo al framework |
| Mención a Capa | **AUSENTE** | No existe badge, label ni referencia a la capa del framework |
| Navegación secuencial | **AUSENTE** | No hay "anterior/siguiente" |
| CTA a Framework | **AUSENTE** | No hay link directo a /framework |

### ¿Qué ve un usuario que aterriza desde Google?

1. Un artículo técnico de alta calidad.
2. Un breadcrumb que dice "Artículos / Governance" (u otra categoría).
3. Autor, fecha, tiempo de lectura.
4. Contenido largo y bien estructurado.
5. Tags genéricos.
6. Newsletter CTA.
7. 3-5 artículos relacionados bajo "Seguir leyendo".

**Lo que NO ve:**
- Que existe un Framework Archwise.
- En qué capa del framework está este artículo.
- Qué decisión arquitectónica explica este artículo.
- Qué artículos de la misma capa debería leer.
- Qué dependencias causales tiene este artículo.
- Por qué el orden importa.
- Un camino claro hacia /framework.

**Conclusión:** El artículo se consume como pieza aislada de un blog técnico. No hay ningún indicador de que pertenece a un sistema estructurado de decisiones.

---

## 2. FRAMEWORK VISIBILITY

### ¿El lector entiende que existe Archwise?

**Mejorable.** El nombre "Archwise" aparece en el nav del sitio y potencialmente en el footer, pero no hay refuerzo dentro del artículo. Un lector que llegó por Google y lee en focus mode puede no registrar el nombre.

### ¿El lector entiende que existe un Framework?

**Deficiente.** No hay ningún elemento dentro del artículo que mencione, vincule o sugiera la existencia de un framework de 6 capas.

### ¿El lector entiende en qué capa está?

**Deficiente.** El artículo tiene una "categoría" editorial (e.g. "Governance", "Context Engineering") pero esta categoría no se mapea visualmente a una capa del framework. No hay número de capa, no hay nombre de capa, no hay contexto de posición.

### ¿El lector entiende qué relación tiene con otros artículos?

**Mejorable.** Los "artículos relacionados" al final sugieren continuidad temática, pero el framing es "Seguir leyendo" — típico de blog. No dice "Otras decisiones en esta capa" ni "Decisiones que dependen de esta".

### Clasificación general

| Dimensión | Clasificación |
|---|---|
| Existencia de Archwise | Mejorable |
| Existencia de Framework | Deficiente |
| Posición en capa | Deficiente |
| Relación con otros artículos | Mejorable |

---

## 3. LAYER VISIBILITY — Diseño propuesto

### Concepto

Un badge o bloque compacto que identifique la capa del framework a la que pertenece el artículo. Debe aparecer antes del contenido, después del hero/meta.

### Formato propuesto

```
┌─────────────────────────────────────────────────────┐
│  FRAMEWORK ARCHWISE · CAPA 3                        │
│  Governance                                         │
│  Alínea criterio, trazabilidad y reglas de decisión │
│                                                     │
│  [Ver esta capa en el framework →]                  │
└─────────────────────────────────────────────────────┘
```

### Ubicación

Inmediatamente después de la meta del artículo (autor/fecha/tiempo) y antes del contenido HTML. Visualmente separado pero no intrusivo.

### Copy

```
Framework Archwise · Capa {N}
{Nombre de la capa}
{shortDescription de la capa}
[Ver esta capa en el framework →]
```

### Impacto esperado

- El lector entiende inmediatamente que el artículo pertenece a un sistema.
- La capa le da contexto de "dónde estoy" dentro de la estructura.
- El CTA ofrece una salida natural hacia /framework sin interrumpir la lectura.
- Para tráfico orgánico: convierte un lector de artículo individual en explorador del framework.

### Variante mínima (quick win)

Si el bloque completo requiere mapeo slug→capa, una variante mínima sería un texto inline bajo el breadcrumb:

```
Este artículo pertenece a Capa 3: Governance del Framework Archwise.
```

---

## 4. CONTINUITY SYSTEM

### Principio

El lector nunca debe terminar un artículo sin saber qué hacer a continuación. Debe haber al menos 3 opciones claras post-lectura.

### Opciones de continuidad (ordenadas por prioridad)

| Opción | Concepto | Copy ejemplo |
|---|---|---|
| **Misma capa** | Otros artículos de la misma capa del framework | "Más decisiones en Capa 3: Governance" |
| **Siguiente decisión** | Artículo que depende causalmente de este | "Decisión siguiente: {título}" |
| **Volver al framework** | CTA directo a la capa en /framework | "Ver Capa 3 completa en el Framework →" |
| **Ruta recomendada** | Si el artículo pertenece a una ruta de rol | "Esta decisión forma parte de la ruta CTO" |
| **Newsletter** | Retención (ya existe) | "Cada semana. Sin hype." |

### Diseño de la sección post-contenido

```
┌─────────────────────────────────────────────────────┐
│  SIGUIENTE DECISIÓN                                 │
│  {Título del artículo siguiente en la capa}         │
│  {Qué riesgo mitiga}                               │
│  [Leer →]                                          │
├─────────────────────────────────────────────────────┤
│  MÁS EN ESTA CAPA                                  │
│  • Artículo A                                      │
│  • Artículo B                                      │
│  • Artículo C                                      │
│  [Ver Capa completa →]                             │
├─────────────────────────────────────────────────────┤
│  [Volver al Framework Archwise →]                   │
└─────────────────────────────────────────────────────┘
```

### Reemplazo del "Seguir leyendo" actual

El bloque actual "Seguir leyendo" con related articles debería reconvertirse:
- **Si hay artículos de la misma capa:** Mostrarlos primero, con label de capa visible.
- **Si hay artículo siguiente en secuencia:** Destacarlo como "Siguiente decisión".
- **Siempre:** Incluir un CTA de vuelta a /framework.

---

## 5. FRAMEWORK REINFORCEMENT

### Mecanismos propuestos (no intrusivos)

| Mecanismo | Ubicación | Intrusividad | Impacto |
|---|---|---|---|
| Badge de capa (header) | Después de meta, antes de contenido | Baja | Alto |
| Frase inline en breadcrumb | Breadcrumb area | Mínima | Medio |
| CTA "Volver al framework" (footer del artículo) | Después de related | Baja | Medio |
| Sidebar mini "Posición en el framework" | Lateral derecho (desktop) | Media | Alto |
| Pie de artículo con secuencia visual | Después del contenido | Baja | Alto |

### Mecanismo recomendado prioritario

**Badge de capa (header) + CTA "Volver al framework" (footer).** Dos puntos de refuerzo: uno al inicio que contextualiza, otro al final que dirige. Ambos no intrusivos.

### Copy de refuerzo sugerido

Inicio del artículo:
```
Framework Archwise · Capa 3: Governance
```

Final del artículo (antes de related):
```
Este artículo explica una decisión crítica del Framework Archwise.
Explora las 6 capas completas para entender cómo conecta con el resto.
[Ver framework →]
```

---

## 6. GOOGLE LANDING SCENARIO

### Simulación: Usuario llega desde Google a "AI Governance Framework"

**5 segundos:**
- Ve título: "AI Governance Framework: cómo gobernar sistemas, equipos y agentes de IA en la empresa"
- Ve breadcrumb: "Artículos / Governance"
- Ve meta: autor, fecha, 15 min
- **Entiende:** "Es un artículo sobre governance de IA."
- **No entiende:** Que es parte de un framework de 6 capas. Que es la capa 3. Que tiene dependencias con capas anteriores.
- **Percepción:** "Es un artículo de un blog técnico."

**30 segundos:**
- Lee el lead y primer H2.
- Contenido sólido. Tono de autoridad.
- **Entiende:** "Esto es serio y bien pensado."
- **No entiende:** Que debería leer primero contexto (capa 2) antes de governance. Que existe un sistema completo.
- **Percepción:** "Buen blog. Contenido de calidad."

**Final del artículo:**
- Ve tags (genéricos).
- Ve Newsletter CTA.
- Ve "Seguir leyendo" con artículos relacionados.
- **Entiende:** "Hay más contenido en este sitio."
- **No entiende:** Que los artículos relacionados son parte de un framework causal. Que hay un orden. Que existe una ruta recomendada para su rol.
- **Percepción:** "Otro blog que me sugiere más artículos."
- **Acción probable:** Sale del sitio o lee 1 artículo más y se va.

### Qué DEBERÍA entender

| Momento | Lo que debería entender |
|---|---|
| 5 segundos | "Este artículo pertenece a Capa 3 de un framework de 6 capas." |
| 30 segundos | "Hay capas anteriores (diagnóstico, contexto) que son prerequisitos." |
| Final | "Puedo seguir dentro de esta capa, o ir al framework para ver toda la estructura." |

### Gap actual

El gap es total. Ninguno de los tres momentos comunica pertenencia a framework, capa o secuencia.

---

## 7. STRATEGIC IMPORTANCE

### ¿Es más prioritario mejorar article-detail o seguir publicando?

**Mejorar article-detail es más prioritario.** Justificación:

| Dimensión | Publicar más artículos | Mejorar article-detail |
|---|---|---|
| **UX** | Más contenido sin contexto = más confusión | Cada artículo existente mejora su experiencia |
| **SEO** | Más URLs indexadas, pero bounce rate alto | Mismo tráfico pero menor bounce, mayor session depth |
| **Autoridad** | Más piezas sueltas percibidas como blog | Cada pieza refuerza percepción de framework serio |
| **Retención** | Más contenido pero sin motivo para explorar | Continuidad natural lleva a más lecturas por sesión |
| **Construcción del framework** | Más artículos que nadie sabe que son parte del framework | 30 artículos existentes se contextualizan como framework |

**Argumento decisivo:** Archwise ya tiene 30 artículos de alta calidad. El problema no es cantidad de contenido — es que el contenido no comunica que pertenece a un sistema. Mejorar article-detail multiplica el valor de los 30 artículos existentes sin producir ni uno nuevo.

### ROI comparativo

- **Publicar artículo 31:** +1 URL indexada, +1 pieza aislada percibida como blog. Impacto marginal.
- **Mejorar article-detail:** 30 artículos existentes pasan de "blog posts" a "decisiones dentro de un framework". Impacto multiplicador.

---

## FINAL RECOMMENDATION

### Top 10 mejoras ordenadas por impacto

| # | Mejora | Tipo | Prioridad | Impacto | Dificultad |
|---|---|---|---|---|---|
| 1 | **Badge de capa en header del artículo** — "Framework Archwise · Capa N: {Nombre}" | Quick win | Alta | Alto | Baja (requiere mapeo slug→capa) |
| 2 | **CTA a framework al final del artículo** — "Este artículo pertenece al Framework Archwise. Explora las 6 capas." | Quick win | Alta | Alto | Mínima |
| 3 | **Reconvertir "Seguir leyendo" en "Más decisiones en esta capa"** — Reframing editorial + priorizar artículos de misma capa | Quick win | Alta | Alto | Baja |
| 4 | **Bloque "Siguiente decisión"** — Destacar el artículo siguiente dentro de la capa | Estructural | Alta | Alto | Media (requiere orden dentro de capa) |
| 5 | **Breadcrumb extendido** — `Artículos / Framework / Capa 3: Governance / {Artículo}` | Quick win | Media | Medio | Baja |
| 6 | **Mini-mapa de posición** — Indicador visual de dónde está este artículo dentro de la capa (3/4 artículos) | Estructural | Media | Alto | Media |
| 7 | **Link a ruta recomendada** — "Esta decisión forma parte de la ruta CTO" | Estructural | Media | Medio | Media (requiere mapeo ruta→artículo) |
| 8 | **Eliminar Newsletter CTA entre contenido y related** — Moverlo al final absoluto o al sidebar | Quick win | Baja | Bajo-medio | Mínima |
| 9 | **SEO: Añadir structured data de capa** — Schema.org breadcrumb con capa del framework | Quick win | Baja | Medio (SEO) | Baja |
| 10 | **Micro-copy de dependencia** — "Para esta decisión se asume que ya has resuelto: {capa anterior}" | Estructural | Baja | Medio | Media |

### Quick wins (implementables en 1-2 horas cada uno)

1. Badge de capa en header (mapeo slug→capa desde framework.data.ts + inline display).
2. CTA a framework al final del artículo (HTML estático + routerLink).
3. Reframing de "Seguir leyendo" a "Más decisiones en esta capa" (copy change + filtro por capa).
4. Breadcrumb extendido con capa visible.
5. Mover Newsletter CTA después de related (reordenar secciones).

### Cambios estructurales (requieren lógica nueva)

1. Mapeo slug→capa accesible desde article-detail component.
2. Orden secuencial de artículos dentro de cada capa (para "Siguiente decisión").
3. Mapeo artículo→rutas recomendadas (para "Forma parte de la ruta CTO").
4. Mini-mapa visual de posición dentro de capa.

### Prioridad de implementación

| Fase | Cambios | Impacto acumulado |
|---|---|---|
| **Fase 1 (P0)** | Badge de capa + CTA framework al final + reframing de related | El artículo deja de parecer pieza aislada |
| **Fase 2 (P1)** | Breadcrumb extendido + "Siguiente decisión" + mover newsletter | Continuidad clara + framework visible |
| **Fase 3 (P2)** | Mini-mapa + link a ruta + structured data + micro-copy dependencia | Experiencia completa de framework |

### Resumen ejecutivo

El article-detail actual es una experiencia de lectura de blog de alta calidad. No es una experiencia de lectura de framework. La diferencia entre las dos es que un blog entretiene; un framework forma decisiones. Los 30 artículos de Archwise ya son excelentes individualmente — pero no comunican pertenencia a un sistema, posición en una capa, ni dependencias causales.

**La mejora de article-detail es el multiplicador de valor más alto disponible hoy para Archwise.** No requiere contenido nuevo. Multiplica el valor de todo el contenido existente.
