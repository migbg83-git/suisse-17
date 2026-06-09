# Site Alignment Audit: Home + Articles + Framework

Fecha: 2026-06-09  
Scope: Auditoría estratégica de narrativa, UX e información arquitectónica  
Perspectiva: Visitante nuevo (CTO, Enterprise Architect, Head of Engineering)

---

## 1. NARRATIVE CONSISTENCY

### ¿Qué parece ser Archwise al entrar en Home?

Home presenta Archwise como **una publicación editorial** para arquitectos y líderes técnicos. El título "Arquitectura. Criterio. IA." y el subtítulo "Una publicación para arquitectos y líderes técnicos..." posicionan el sitio como un medio de pensamiento, no como un framework operativo. La sección "Ensayos destacados" refuerza la percepción de blog técnico de alta calidad.

### ¿Qué parece ser Archwise al entrar en Framework?

Framework presenta Archwise como **un framework arquitectónico con tesis propia**. El título "La IA empresarial falla por arquitectura, no por modelos" abre con un problema concreto. Las 6 capas, métricas y rutas recomendadas comunican un sistema estructurado de decisiones. Aquí Archwise parece una herramienta de trabajo, no una publicación.

### ¿Qué parece ser Archwise al entrar en Articles?

Articles presenta Archwise como **un índice editorial curado con lógica de framework**. La sección "Empieza aquí" sugiere estructura guiada. "Últimos publicados" sugiere blog. "Mapa del framework" sugiere sistema. Es una página híbrida que intenta satisfacer tres identidades simultáneamente.

### Diagnóstico de identidad

**Existen dos identidades en conflicto:**

| Identidad A | Identidad B |
|---|---|
| Publicación editorial de pensamiento | Framework arquitectónico operativo |
| "Una publicación para arquitectos..." | "Framework de 6 capas para construir capacidades IA" |
| Ensayos destacados, newsletter, manifesto | Capas, dependencias, rutas, orden causal |

Home comunica Identidad A.  
Framework comunica Identidad B.  
Articles intenta comunicar ambas.

**Resultado:** El visitante que entra por Home y luego llega a Framework experimenta un salto de identidad. El que entra por Framework y luego va a Home experimenta una rebaja de ambición.

---

## 2. USER JOURNEY

### Perfil A: CTO que llega desde Google

**Búsqueda probable:** "ai governance framework enterprise" o "scaling AI architecture"

**10 segundos (entra en Home):**
- Lee "Arquitectura. Criterio. IA."
- Piensa: "Es un blog técnico. ¿Tiene algo para mí?"
- Ve ensayos destacados. No ve framework.
- Duda: "¿Es otro blog de opinión?"

**1 minuto:**
- Si descubre el nav y va a Framework: "Ah, esto es más serio. Tiene estructura."
- Si se queda en Home: solo ve artículos y un manifesto. Puede irse.

**5 minutos:**
- Si llegó a Framework: Entiende la tesis, ve las capas, puede construir ruta.
- Si no llegó a Framework: Leyó 1-2 artículos. Le pareció interesante pero no entiende la diferencia frente a otros blogs.

**Punto de abandono:** Home no comunica que existe un framework estructurado. Si el CTO no hace click en "Framework" del nav, nunca descubre la propuesta de valor diferenciadora.

---

### Perfil B: Enterprise Architect que llega desde LinkedIn

**Punto de entrada probable:** Artículo compartido (e.g. "AI Governance Framework")

**10 segundos (entra en artículo):**
- Lee el artículo. Contenido sólido.
- Ve footer o sidebar. ¿Hay más estructura?

**1 minuto:**
- Va a Articles. Ve "Empieza aquí" y "Mapa del framework".
- Piensa: "Esto tiene secuencia. Parece organizado."

**5 minutos:**
- Llega a Framework. Ve las 6 capas y el Navigator.
- Entiende que Archwise es más que artículos.
- Puede seleccionar ruta por rol.

**Punto de abandono:** Si el artículo no tiene un CTA claro hacia Framework, puede quedarse en modo lectura individual y no descubrir la estructura.

---

### Perfil C: Head of Engineering que llega desde artículo compartido

**10 segundos:**
- Aterriza directamente en un artículo técnico.
- Lo lee como pieza individual. Contenido bueno.

**1 minuto:**
- Ve "Artículos relacionados" o navega al índice.
- Encuentra la lista cronológica. Piensa: "Hay muchos artículos."
- No ve inmediatamente por qué el orden importa.

**5 minutos:**
- Si descubre Framework: "Esto tiene sentido operativo."
- Si no: "Es un blog prolífico sobre IA enterprise."

**Punto de abandono:** La transición de "leer un artículo" a "entender que es un framework" depende de que encuentre el link correcto. No hay puente fuerte artículo → framework.

---

### Resumen de journeys

| Problema | Impacto |
|---|---|
| Home no comunica que existe un framework | CTOs que entran por Home pueden irse sin descubrir la propuesta de valor |
| No hay puente artículo → framework | Lectores de artículos individuales no descubren la estructura |
| Articles tiene doble personalidad (blog + framework) | Confunde más que orienta |

---

## 3. ARTICLES PAGE REVIEW

### ¿Tiene sentido una lista cronológica simple?

**Parcialmente.** Para lectores recurrentes que quieren ver lo nuevo, sí. Pero como modo primario de navegación, contradice la tesis de Archwise. Si el orden importa y no es cronológico, la vista por defecto no debería ser cronológica.

### ¿Contradice la tesis de navegación causal?

**Sí.** El título de la sección es "Últimos publicados" con subtítulo "Cronología completa del índice editorial." Eso dice explícitamente que la navegación es por fecha. Framework dice explícitamente que NO se navega por fecha. Hay contradicción directa.

### ¿Necesita filtros?

**No hoy.** Con 30 artículos y 6 capas, un filtro por capa sería útil pero no imprescindible. Si crece a 50+, sí será necesario.

### ¿Necesita agrupación por capas?

**Sí.** La sección "Mapa del framework" al final ya lo hace parcialmente, pero está al final de la página. Debería ser más prominente o ser la vista por defecto.

### ¿Necesita agrupación por temas?

**No.** Las capas ya cumplen esa función. Agregar otra taxonomía genera complejidad sin beneficio claro.

### ¿Necesita paginación hoy?

**No.** 30 artículos caben en una sola página sin degradar rendimiento ni UX.

### ¿Debe mantenerse el bloque Framework al final?

**Sí, pero debería subir de posición.** Actualmente "Mapa del framework" está al final. Para un visitante nuevo, debería estar antes de la lista cronológica, no después. La estructura causal debería presentarse como modo principal; la cronología como modo secundario.

### ¿Cómo debería reformularse?

**Propuesta de orden:**
1. Hero (sin cambios)
2. "Empieza aquí" (sin cambios, ya funciona bien)
3. "Mapa del framework" (subir de última a segunda posición)
4. "Todos los artículos" (renombrar "Últimos publicados" a algo sin implicación cronológica, o mantener como vista secundaria)

---

## 4. HOME REVIEW

### ¿Comunica claramente qué es Archwise?

**No.** "Arquitectura. Criterio. IA." es estético pero no informativo. No dice qué es Archwise, qué resuelve ni por qué es diferente. Un CTO que lee eso no sabe si es un blog, un producto, una consultora o un framework.

### ¿Comunica el problema que resuelve?

**No directamente.** La quote "Los equipos que mejor trabajan con IA no son los que tienen mejores prompts. Son los que tienen mejor conocimiento explícito." apunta al problema pero no lo enmarca como fallo arquitectónico sistémico.

### ¿Comunica que existe un Framework?

**No.** En ningún punto de Home se menciona que Archwise tiene un framework de 6 capas, rutas recomendadas o dependencias causales. El Framework solo es descubrible via nav.

### ¿Comunica la diferencia frente a un blog tradicional?

**No.** Home presenta exactamente la misma estructura que un blog de calidad: ensayos, manifesto, newsletter. No hay ningún elemento que diga "esto no es un blog, es un framework arquitectónico."

### ¿Qué elementos sobran?

- **Newsletter CTA como sección completa:** Ocupa espacio sin aportar diferenciación. Podría ser inline o footer.

### ¿Qué elementos faltan?

| Elemento ausente | Impacto |
|---|---|
| Mención del Framework | Visitante no descubre la propuesta de valor principal |
| Problema empresarial explícito | No hay urgencia ni relevancia inmediata |
| Puente Home → Framework | No hay CTA que lleve al framework |
| Diferenciador vs blog | Visitante asume que es un blog más |

---

## 5. FRAMEWORK REVIEW (integración)

### ¿Framework ya está suficientemente claro?

**Sí, internamente.** El Hero, los bloques "Qué es" y "Cómo navegar", el mapa de capas, el navigator y la continuidad forman una experiencia coherente y completa. Framework funciona bien cuando el usuario llega a él.

### ¿Qué dependencias tiene con Home?

**Home debe conducir a Framework.** Actualmente no lo hace. Framework es autodescubierto por quien navega el menú. Debería haber un puente explícito en Home que diga: "Archwise es un framework. Explóralo."

### ¿Qué dependencias tiene con Articles?

**Articles debe reforzar la lógica causal, no contradecirla.** Actualmente la vista cronológica como modo primario contradice la tesis. El "Mapa del framework" al final de Articles refuerza la conexión pero está en posición débil.

### ¿Qué cambios deberían hacerse fuera de Framework antes de volver a tocar Framework?

1. **Home necesita comunicar que Archwise es un framework**, no solo una publicación.
2. **Articles necesita priorizar navegación causal** sobre cronología.
3. **Los artículos individuales necesitan un puente** ("Este artículo pertenece a Capa X del Framework Archwise").

---

## 6. INFORMATION ARCHITECTURE

### Roles de cada página

| Página | Rol estratégico |
|---|---|
| **Home** | Puerta de entrada. Debe comunicar qué es Archwise, qué problema resuelve, y dirigir al Framework como experiencia principal. |
| **Framework** | Motor de navegación principal. Estructura, capas, rutas, decisiones. Es donde el visitante entiende el sistema completo. |
| **Articles** | Biblioteca de contenido. Modo de acceso secundario por búsqueda, tema o cronología. Refuerza Framework, no lo sustituye. |
| **Manifesto** | Filosofía fundacional. Para lectores que quieren entender los principios detrás del framework. Apoyo, no entrada. |
| **Newsletter** | Canal de retención. Para lectores que ya entienden Archwise y quieren continuidad. No es entrada ni descubrimiento. |

### Flujo recomendado

```
                    ┌──────────────┐
    Google/LinkedIn │   ARTÍCULO   │ (entrada lateral)
                    └──────┬───────┘
                           │ CTA: "Este artículo pertenece a Capa X"
                           ▼
┌────────┐        ┌──────────────┐        ┌──────────────┐
│  HOME  │───────▶│  FRAMEWORK   │◀───────│  ARTICLES    │
└────────┘        └──────┬───────┘        └──────────────┘
  Explica            Motor de                 Biblioteca
  + Dirige           navegación               de apoyo
                           │
                           ▼
                    ┌──────────────┐
                    │  MANIFESTO   │
                    └──────────────┘
                      Filosofía
```

**Principio:** Todo camino debe llegar a Framework en máximo 2 clicks.

---

## 7. PRIORITIZED ROADMAP

### P0 — Cambios imprescindibles

| Cambio | Impacto | Dificultad | Riesgo |
|---|---|---|---|
| **Home: Añadir bloque Framework** — Una sección que explique que Archwise es un framework de 6 capas con CTA a /framework. | Alto. Resuelve el problema principal: visitantes no descubren Framework. | Baja. Solo copy + un bloque HTML. | Bajo. |
| **Home: Reescribir Hero** — De "publicación" a "framework arquitectónico que resuelve un problema". | Alto. Alinea identidad Home ↔ Framework. | Baja. Solo copy. | Medio. Cambiar posicionamiento es decisión editorial fuerte. |
| **Articles: Subir "Mapa del framework"** — Mover de última posición a segunda (después de "Empieza aquí"). | Medio. Refuerza lógica causal como modo primario. | Baja. Solo reordenar secciones. | Bajo. |

### P1 — Cambios importantes

| Cambio | Impacto | Dificultad | Riesgo |
|---|---|---|---|
| **Articles: Renombrar "Últimos publicados"** — Cambiar a "Todos los artículos" o "Índice completo" para no enfatizar cronología. | Medio. Elimina contradicción con tesis. | Mínima. Un string. | Bajo. |
| **Artículos individuales: Añadir badge de capa** — "Este artículo pertenece a Capa 3: Governance del Framework Archwise." | Alto. Crea puente artículo → framework para tráfico orgánico. | Media. Requiere mapeo slug→capa y componente badge. | Bajo. |
| **Home: Reducir Newsletter CTA** — De sección completa a inline footer. | Bajo-medio. Libera espacio para contenido más estratégico. | Baja. | Bajo. |
| **Home: Eliminar o reformular "Ensayos destacados"** — Renombrar a "Decisiones críticas" o integrar con mención al framework. | Medio. Deja de parecer blog. | Baja. Copy. | Bajo. |

### P2 — Cambios opcionales

| Cambio | Impacto | Dificultad | Riesgo |
|---|---|---|---|
| **Articles: Añadir filtro por capa** — Dropdown o tabs que filtra artículos por capa del framework. | Medio (más útil a 50+ artículos). | Media. Lógica de filtro en componente. | Bajo. |
| **Framework continuidad: Añadir link a Manifesto** — Como recurso secundario de profundización filosófica. | Bajo. Completeness. | Mínima. | Bajo. |
| **SEO: Alinear meta descriptions** — Home dice "publicación", debería decir "framework". | Bajo-medio. Consistencia de identidad en SERPs. | Mínima. | Bajo. |

---

## FINAL RECOMMENDATION

### Recomendación única y priorizada para la siguiente fase

**Reescribir Home para que comunique que Archwise es un framework arquitectónico, no una publicación editorial.**

Home es la puerta de entrada principal y actualmente:
- No menciona el framework.
- No explica el problema que resuelve.
- No diferencia Archwise de un blog técnico.
- No conduce al visitante hacia Framework.

El cambio mínimo de máximo impacto es:

1. Reescribir el Hero de Home para abrir con el problema empresarial ("La IA falla por arquitectura") en lugar de con una etiqueta genérica ("Arquitectura. Criterio. IA.").
2. Añadir un bloque debajo del Hero que explique brevemente el framework y dirija a /framework.
3. Reformular "Ensayos destacados" para que se lea como "decisiones críticas" dentro de un sistema, no como artículos sueltos de un blog.

**Esto resuelve:**
- La desconexión narrativa entre Home y Framework.
- El problema de que visitantes nuevos no descubren la propuesta de valor.
- La percepción de "blog técnico" que debilita la autoridad del framework.

**Esto NO requiere:**
- Cambios en Angular.
- Nuevos componentes.
- Modificaciones en Framework (ya funciona).
- Cambios en lógica de datos.

**Métricas esperadas de mejora:**
- Aumento de CTR Home → Framework.
- Reducción de bounce rate en Home.
- Aumento de session depth (más páginas por sesión).
- Reducción del tiempo medio a primera interacción con Framework.

**Siguiente paso concreto:** Implementar P0 (reescritura de Home) como siguiente sprint editorial.
