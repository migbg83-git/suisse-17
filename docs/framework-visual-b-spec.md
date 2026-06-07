# Framework Visual B — Especificación cerrada de Sprint

Fecha: 2026-06-07
Estado: especificación cerrada lista para ejecutar
Base: framework-ux-review-b, framework-visual-design-spec, framework-ui-spec
Restricción: sin Angular, sin HTML, sin CSS — solo especificación de cambios visuales

---

## 0. Principio de diseño del Sprint

Máxima mejora perceptual con el mínimo número de cambios.

Palanca principal: reencuadre de lenguaje visual y editorial (headings, copy de controles, jerarquía de CTAs) antes de tocar estructura de layout.

Regla de ejecución:
- los Quick Wins van primero, independientemente de prioridad declarada.
- ningún cambio puede alterar la arquitectura de 6 bloques ni la funcionalidad existente.
- el test de éxito es cualitativo: el visitante percibe decisión, no formulario.

---

## 1. Mapa causal

### MC-1 · Conector de flujo inter-fila en tablet

**Problema actual:**
El conector horizontal de flujo (la línea y flecha entre nodos) se desactiva completamente en el breakpoint tablet (3+3). Las dos filas de tres nodos quedan visualmente desconectadas: el visitante percibe dos grupos de tarjetas, no una secuencia de seis pasos.

**Objetivo visual:**
Introducir un conector explícito y direccional entre el último nodo de la fila 1 (capa 3) y el primer nodo de la fila 2 (capa 4). La transición de fila debe comunicar "el flujo continúa" en lugar de "nuevo bloque empieza".

**Impacto esperado:**
Elimina la percepción de dos grupos. El mapa se lee como una trayectoria continua 1→6 en todos los breakpoints.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### MC-2 · Conectores entre nodos: peso visual insuficiente

**Problema actual:**
El conector actual entre nodos es el carácter `›` a 0.75rem con color de bajo contraste (#5a87b0). Se percibe como separador tipográfico, no como indicador de dependencia causal. El visitante lo ignora en el escaneo rápido.

**Objetivo visual:**
Aumentar la legibilidad del conector. Debe leerse como dirección, no como separación. La flecha debe tener suficiente tamaño y contraste para que el visitante identifique el flujo sin interactuar. Alternativa viable: carácter `→` o `▶` a mayor tamaño, o un conector con color de acento más saturado que el nodo base.

**Impacto esperado:**
Transición de "seis tarjetas alineadas" a "flujo causal legible" en el primer escaneo visual.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### MC-3 · Microcopy de habilitación: solo visible en hover

**Problema actual:**
Las etiquetas "Habilita: X" y "Riesgo si falta: X" están a opacity:0 y solo aparecen en hover/focus. En mobile y tablet nunca se muestran. En desktop, el visitante que no interactúa nunca ve la lógica causal del nodo.

**Objetivo visual:**
Mostrar siempre la etiqueta "Habilita: [nombre de capa siguiente]" de forma visible y compacta debajo del nombre de capa. En hover añadir también el riesgo. El resultado es que el mapa transmite la dependencia causal en lectura pasiva, sin requerir interacción.

**Impacto esperado:**
El visitante entiende la cadena de dependencias antes de hacer clic. La diferencia entre el mapa Archwise y un menú de navegación se percibe de inmediato.

**Prioridad:** P2
**Esfuerzo:** 1–2h — Medium

---

### MC-4 · Diferenciación insuficiente entre nodos inactivos

**Problema actual:**
Todos los nodos inactivos tienen el mismo peso visual entre sí. No hay gradiente de relevancia que indique "las capas anteriores a la activa son contexto; las posteriores son objetivo". El nodo activo se diferencia por borde y fondo, pero no "sale del plano".

**Objetivo visual:**
Los nodos anteriores al activo deben tener ligera reducción de opacidad o saturación para indicar "ya consideradas". Los nodos posteriores deben mantener su presencia completa como "territorio por explorar". El nodo activo debe tener sombra y contraste superiores para dominar la lectura.

**Impacto esperado:**
El visitante ubica su posición en el sistema sin necesidad de leer los números. Sensación de "estoy aquí en la trayectoria".

**Prioridad:** P2
**Esfuerzo:** 1–2h — Medium

---

## 2. Constructor de ruta (Navigator)

### NV-1 · Heading del resultado: lenguaje de sistema

**Problema actual:**
El heading del resultado de ruta dice "Ruta recomendada para esta combinacion". Es lenguaje de sistema informático (combinación = parámetros de consulta). No transmite que el usuario acaba de tomar una decisión de alto valor.

**Objetivo visual:**
Reformular el heading al formato: "Tu ruta: [Perfil] → [Intención]". Ejemplo: "Tu ruta: CTO → Diagnosticar". El titular confirma la decisión tomada y encuadra el resultado como recomendación personalizada, no como output de filtro.

**Impacto esperado:**
Momento visual de "decisión tomada". El visitante percibe el Navigator como asesor de lectura, no como buscador con parámetros.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win (cambio de copy en template o en lógica de presentación)

---

### NV-2 · Grid de intenciones: 5 columnas en desktop

**Problema actual:**
Los 5 chips de intención se muestran en una sola fila de 5 columnas. Entre los breakpoints 1100–1300px los chips quedan muy comprimidos, forzando texto pequeño e ilegible. El `.framework-choice-grid.intents` con `grid-template-columns: repeat(5, minmax(0, 1fr))` es el patrón más denso de la página.

**Objetivo visual:**
Reducir a máximo 3 columnas para intenciones en desktop, con los últimos chips centrados o en segunda fila natural. Esto permite que cada chip tenga suficiente área para mostrar el label y la descripción sin comprimir.

**Impacto esperado:**
Mayor legibilidad comparativa entre intenciones. Menor fricción de selección. Los chips se perciben como opciones de decisión, no como botones comprimidos.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### NV-3 · Fallback: tono de aviso de error

**Problema actual:**
El aviso de fallback usa paleta amber/naranja (#fff8ea fondo, #7d5a14 texto, #f0d7a3 borde). Esta paleta es semánticamente un estado de advertencia o error. El fallback no es un error: es una ayuda para evitar bloqueo del visitante. El tono amber genera ansiedad innecesaria.

**Objetivo visual:**
Cambiar la paleta del fallback a tono informativo neutro: fondo azul-gris muy claro, borde azul suave, texto en gris oscuro. Además, reformular el copy: "No existe una ruta exacta para esta combinación. Mostramos la opción más próxima para que puedas avanzar." El tono es de orientación, no de advertencia.

**Impacto esperado:**
El visitante confía en la ruta mostrada. La transparencia del fallback se percibe como honestidad del sistema, no como error del producto.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### NV-4 · Reading Path: color de acento inconsistente con la página

**Problema actual:**
Los ítems de la ruta de lectura usan `#2563eb` como color de acento (número de orden circular y borde izquierdo). Este azul saturado es el azul por defecto de Tailwind/Bootstrap y está visualmente desvinculado de la paleta institutional navy de /framework (#0f3356, #1a4d7a, #14395e).

**Objetivo visual:**
Alinear el color de acento del Reading Path con la paleta sistémica de Archwise. El círculo numerado y el borde izquierdo de los ítems deben usar el mismo navy profundo que el resto de la página. La coherencia cromática refuerza la identidad visual del producto.

**Impacto esperado:**
Cohesión visual de la página completa. Elimina la sensación de que el Reading Path es un componente genérico insertado.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### NV-5 · Separador de progreso entre Paso 1 y Paso 2

**Problema actual:**
Los dos pasos del constructor son bloques consecutivos sin señal de progreso entre ellos. No hay indicador de "haz completado el paso 1, ahora selecciona el paso 2". El visitante puede no entender que debe hacer las dos selecciones para obtener una ruta útil.

**Objetivo visual:**
Introducir un indicador de progreso entre pasos: puede ser tan simple como un conector numerado (①→②) o un divisor con copy "ahora define tu objetivo". El objetivo es comunicar que el Navigator es un proceso de 2 pasos, no un formulario con selects independientes.

**Impacto esperado:**
Reducción de abandono intermedio (visitante que selecciona perfil pero no intención). Percepción de guía en lugar de configuración.

**Prioridad:** P2
**Esfuerzo:** 1–2h — Medium

---

## 3. Capas

### CA-1 · Heading de sección: "Capas (detalle)"

**Problema actual:**
"Capas (detalle)" es terminología de especificación técnica interna. El paréntesis refuerza la percepción de documentación de sistema. Es el heading de bloque que más claramente comunica "esto es un documento técnico".

**Objetivo visual:**
Renombrar a un heading con orientación editorial. Opciones válidas:
- "Sistema de seis capas"
- "Qué habilita cada capa"
- "Dependencias y decisiones"

La opción elegida debe transmitir que el bloque responde a una pregunta de decisión, no que muestra un detalle de componente.

**Impacto esperado:**
Señal inmediata de propiedad intelectual en el heading más visible del bloque central de la página.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### CA-2 · Doble borde en tarjeta de capa

**Problema actual:**
El `article.framework-layer` tiene `border: 1px solid #d9dde3` y dentro el `button.framework-layer-toggle` también tiene `border: 1px solid #d9dde3`. El resultado visual es una caja dentro de una caja con el mismo borde. Este patrón de "borde sobre borde" es la señal visual más directa de interfaz administrativa.

**Objetivo visual:**
Eliminar el borde externo del article wrapper. El toggle button es el elemento interactivo relevante y puede mantener su propio tratamiento. El bloque de capa debe percibirse como zona diferenciada, no como contenedor dentro de contenedor.

**Impacto esperado:**
Reducción notable de la densidad de "cajas" en el bloque de capas. El ritmo vertical se alivia significativamente.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### CA-3 · Copy del toggle: genérico e informativo

**Problema actual:**
El texto del toggle es "Ver detalle / Ocultar detalle". Es copy puramente funcional que no comunica qué valor tiene abrir la capa. El visitante debe abrir para descubrir si esa capa le interesa.

**Objetivo visual:**
El toggle colapsado debe mostrar el `shortDescription` de la capa directamente, sin que el visitante tenga que expandir para descubrirlo. El copy de acción cambia a "Explorar esta capa →" / "Cerrar". Así el visitante anticipa el valor antes de interactuar.

**Impacto esperado:**
Reducción de fricción de apertura. El visitante escanea las 6 descripciones antes de decidir qué expandir.

**Prioridad:** P2
**Esfuerzo:** < 1h — Quick Win (solo ajuste de template)

---

### CA-4 · Contenido expandido sin framing causal

**Problema actual:**
Al expandir una capa, el contenido es: un párrafo de shortDescription seguido de la lista de artículos. No hay estructura de decisión. El visitante ve "qué es la capa" y "qué artículos tiene", pero no "qué habilita" ni "qué riesgo evita si se salta". La UX Spec establece que cada capa debe responder en menos de 10 segundos: qué habilita, qué riesgo evita, qué leer.

**Objetivo visual:**
Añadir dos líneas de contexto causal antes de la lista de artículos:
- "Habilita: [nombre de la capa siguiente o descripción funcional]"
- "Riesgo si se salta: [consecuencia concreta]"

Esta información ya está calculada en `getDependencyLabel` / `getRiskLabel` del componente de mapa. Se trata de reutilizar los datos existentes en el panel de detalle.

**Impacto esperado:**
Cada capa expandida transmite lógica causal, no solo índice de contenidos. El bloque de capas justifica su existencia como "sistema de decisión".

**Prioridad:** P2
**Esfuerzo:** 1–2h — Medium (requiere pasar los datos al componente de detalle)

---

### CA-5 · Mensajes técnicos de slugs en flujo primario

**Problema actual:**
Los warnings de "Slugs no resueltos en esta capa: [slug-1, slug-2]" se muestran inline dentro del cuerpo expandido de cada capa. Son mensajes de estado de sistema visibles para todos los visitantes, incluyendo los perfiles estratégicos que son el público objetivo.

**Objetivo visual:**
Estos mensajes deben ser invisibles para el visitante en producción. Pueden mantenerse como warnings en consola del navegador (ya lo son) o como estado oculto solo en modo development. El flujo primario de lectura de capas debe estar libre de señales de estado técnico.

**Impacto esperado:**
Eliminación de la principal señal de backoffice que queda en el flujo de lectura estratégica.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

## 4. Vocabulario

### VO-1 · Heading "Vocabulario minimo": tono de escasez documental

**Problema actual:**
"Vocabulario minimo" comunica dos cosas negativas: (1) que el framework tiene poco que ofrecer en términos de lenguaje, y (2) que se trata de un glosario técnico de documentación. El adjetivo "mínimo" es de especificación de producto, no de propiedad intelectual.

**Objetivo visual:**
Renombrar a un heading que posicione el bloque como herramienta estratégica. Opciones válidas:
- "Lenguaje del framework"
- "Conceptos del sistema"
- "Cinco términos que cambian cómo lees el mapa"

La elección debe encuadrar el vocabulario como "clave de lectura del framework", no como glosario de referencia.

**Impacto esperado:**
El bloque deja de percibirse como apéndice y se percibe como parte activa de la narrativa.

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### VO-2 · Layout de columna única para 5 términos

**Problema actual:**
Los 5 términos se muestran en una lista vertical de tarjetas de ancho completo. Es el layout de mayor espacio vertical para la menor densidad de contenido de la página. El visitante tiene que hacer scroll considerable para recorrer los 5 términos.

**Objetivo visual:**
Grid de 2 o 3 columnas en desktop para los 5 términos. La distribución natural sería 3+2 o 2+3. En tablet, 2 columnas. En mobile, columna única.

**Impacto esperado:**
El bloque de vocabulario es más compacto. Menor peso en scroll. Mejor escaneabilidad comparativa entre los 5 conceptos.

**Prioridad:** P2
**Esfuerzo:** < 1h — Quick Win

---

### VO-3 · CTA por término: "Ver articulo base"

**Problema actual:**
El enlace de cada término dice "Ver articulo base". Es copy de sistema que hace referencia a la arquitectura de datos interna (el término tiene un "artículo base"). El visitante no entiende por qué ese artículo es relevante para ese término.

**Objetivo visual:**
Reemplazar por el título del artículo asociado, o por copy editorial breve:
- "Leer en profundidad →"
- "Ver aplicación práctica →"

Si se muestra el título del artículo, el visitante tiene contexto de qué aprenderá antes de hacer clic.

**Impacto esperado:**
Mejora de conversión hacia artículos desde vocabulario. Tono editorial coherente con el resto de la página.

**Prioridad:** P3
**Esfuerzo:** < 1h — Quick Win

---

### VO-4 · Vocabulario desconectado de la capa activa

**Problema actual:**
El vocabulario muestra los mismos 5 términos independientemente de qué capa esté activa. No hay relación visual entre "estoy viendo la capa 3 (Governance)" y "los términos que son más relevantes para esta capa son X e Y".

**Objetivo visual:**
Destacar visualmente los 1–2 términos más relevantes para la capa activa seleccionada en el mapa. Puede ser tan simple como un borde de acento o una etiqueta "Relevante para tu capa". La lógica de relación término-capa puede codificarse como dato estático (qué términos son primarios para cada capa).

**Impacto esperado:**
Vocabulario integrado en el flujo de navegación. El visitante percibe el sistema como conectado, no como secciones yuxtapuestas.

**Prioridad:** P3
**Esfuerzo:** 2–3h — Medium (requiere mapeo de relevancia término-capa y lógica de estado)

---

## 5. Continuidad

### CO-1 · Heading "Continuidad" y jerarquía plana de destinos

**Problema actual:**
"Continuidad" como heading es el más genérico de la página. Los tres CTAs (Artículos, Manifesto, Newsletter) tienen el mismo peso visual y el mismo patrón de tarjeta. El visitante no recibe orientación sobre cuál elegir según su situación después de haber recorrido el framework.

**Objetivo visual:**
Reformular heading a pregunta situacional: "¿Qué sigue para ti?" o "Tu próximo movimiento".

Establecer jerarquía visual clara entre los tres destinos:
- Artículos: destino primario, mayor peso visual (título prominente, descripción contextual, CTA activo).
- Manifesto: destino secundario, peso medio (diferenciado del primario pero no degradado).
- Newsletter: destino terciario, tratamiento de horizonte (valor futuro, no inmediato).

**Impacto esperado:**
El visitante toma una decisión de cierre consciente. La página no termina en lista de links: termina en recomendación de siguiente paso.

**Prioridad:** P1
**Esfuerzo:** 1–2h — Medium

---

### CO-2 · CTA de destino: "Ir" como texto de enlace

**Problema actual:**
El texto de enlace de cada CTA es "Ir". Es el copy de link más débil posible tanto en términos de conversión como de accesibilidad. No comunica a dónde va ni por qué vale la pena ir.

**Objetivo visual:**
Reemplazar por CTAs descriptivos que comuniquen la acción completa:
- Artículos: "Explorar los 29 artículos →"
- Manifesto: "Leer el Manifesto →"
- Newsletter: "Unirme cuando esté disponible"

**Impacto esperado:**
Mejora directa de conversión desde continuidad. Mejora de accesibilidad (lectores de pantalla leen "Ir" sin contexto).

**Prioridad:** P1
**Esfuerzo:** < 1h — Quick Win

---

### CO-3 · Ausencia de contexto situacional por destino

**Problema actual:**
La descripción de cada CTA dice qué es el destino ("Explora el corpus completo en orden editorial"), pero no cuándo el visitante debería elegir ese destino sobre los otros.

**Objetivo visual:**
Añadir una línea de contexto situacional breve como segunda línea descriptiva:
- Artículos: "Tienes tu capa o tu ruta. Ahora profundiza."
- Manifesto: "Necesitas alinear equipo o dirección en la tesis de Archwise."
- Newsletter: "Quieres mantener el framework activo sin acción inmediata."

**Impacto esperado:**
El visitante elige con criterio, no por posición en la lista. Reduce salidas aleatorias.

**Prioridad:** P2
**Esfuerzo:** < 1h — Quick Win (solo copy)

---

### CO-4 · Newsletter: botón disabled sin propuesta de valor

**Problema actual:**
Newsletter aparece como un botón deshabilitado con el mismo texto que el heading del CTA. No hay ningún elemento que comunique qué recibirá el suscriptor ni cuándo. El visitante no tiene razón para recordar volver.

**Objetivo visual:**
Reencuadrar newsletter como "horizonte de continuidad" con propuesta de valor breve. Dos opciones:
- Opción A (sin captación aún): copy editorial tipo "Archwise en tu inbox. Análisis semanal del sistema." + indicación de disponibilidad próxima sin botón disabled.
- Opción B (con captación): campo de email simple + copy de propuesta + CTA "Avisar cuando esté disponible".

La Opción A es Quick Win. La Opción B es un cambio de mayor alcance.

**Impacto esperado:**
Newsletter deja de percibirse como elemento roto o en construcción. Siembra expectativa y autoridad editorial.

**Prioridad:** P3
**Esfuerzo:** Opción A < 1h — Quick Win. Opción B 2–4h — High Impact.

---

## 6. Tabla de cambios por esfuerzo

### Quick Wins (< 1h) — ejecutar primero

| ID | Bloque | Cambio | Prioridad |
|----|--------|--------|-----------|
| MC-1 | Mapa | Conector inter-fila tablet | P1 |
| MC-2 | Mapa | Conectores entre nodos más visibles | P1 |
| NV-1 | Navigator | Heading resultado de ruta | P1 |
| NV-2 | Navigator | Grid intenciones: max 3 columnas | P1 |
| NV-3 | Navigator | Paleta fallback: neutro informativo | P1 |
| NV-4 | Navigator | Reading Path: color acento alineado | P1 |
| CA-1 | Capas | Renombrar heading de sección | P1 |
| CA-2 | Capas | Eliminar doble borde en tarjeta | P1 |
| CA-3 | Capas | Mostrar shortDescription en toggle | P2 |
| CA-5 | Capas | Ocultar warnings técnicos a visitantes | P1 |
| VO-1 | Vocabulario | Renombrar heading del bloque | P1 |
| VO-2 | Vocabulario | Grid multi-columna para los 5 términos | P2 |
| VO-3 | Vocabulario | Copy de CTA por término | P3 |
| CO-2 | Continuidad | Reemplazar "Ir" por CTAs descriptivos | P1 |
| CO-3 | Continuidad | Añadir microcopy situacional | P2 |
| CO-4 | Continuidad | Newsletter: Opción A (solo copy) | P3 |

### Medium Changes (1–3h)

| ID | Bloque | Cambio | Prioridad |
|----|--------|--------|-----------|
| MC-3 | Mapa | Microcopy de habilitación siempre visible | P2 |
| MC-4 | Mapa | Diferenciación progresiva de nodos inactivos | P2 |
| CA-4 | Capas | Añadir framing habilitador/riesgo en cuerpo | P2 |
| NV-5 | Navigator | Separador de progreso Paso 1 → Paso 2 | P2 |
| CO-1 | Continuidad | Jerarquía diferenciada de 3 destinos | P1 |

### High Impact Changes (> 3h)

| ID | Bloque | Cambio | Prioridad |
|----|--------|--------|-----------|
| VO-4 | Vocabulario | Términos destacados por capa activa | P3 |
| CO-4 | Continuidad | Newsletter: Opción B (captación de email) | P3 |

---

## 7. Secuencia de ejecución recomendada

### Fase 1 — Quick Wins lingüísticos (sin riesgo de regresión)
Ejecutar en una sola sesión:
- CA-1, VO-1, CO-2, NV-1 (renombrar headings y copy de controles)
- NV-3 (paleta fallback)
- CA-5 (ocultar warnings técnicos)

### Fase 2 — Quick Wins de layout (bajo riesgo)
- NV-2 (grid intenciones), VO-2 (grid vocabulario), CA-2 (doble borde)
- NV-4 (color reading path), MC-2 (conectores más visibles)

### Fase 3 — Quick Wins de editorial (copy puro)
- CO-3 (microcopy situacional), VO-3 (CTA por término), CA-3 (shortDescription en toggle)

### Fase 4 — Medium Changes (en orden de impacto)
1. CO-1 (jerarquía de continuidad) — mayor efecto en conversión
2. CA-4 (framing causal en capas) — mayor efecto en comprensión
3. MC-3 (microcopy habilitación siempre visible) — mayor efecto en mapa
4. MC-1 (conector inter-fila tablet) — mayor efecto en tablet
5. MC-4 (diferenciación nodos inactivos) — refinamiento de mapa
6. NV-5 (separador de progreso) — refinamiento de navigator

### Fase 5 — High Impact (opcional según recursos)
- VO-4 y CO-4 Opción B: evaluar ROI antes de ejecutar.

---

## 8. Criterio de éxito del Sprint

El Sprint Visual B se considera completo cuando:
- El visitante describe /framework como "mapa de decisión" en lugar de "documentación de framework".
- El visitante identifica su capa y su siguiente movimiento sin leer todos los bloques.
- El resultado del Navigator se percibe como recomendación estratégica, no como salida de filtro.
- Ningún mensaje técnico es visible en el flujo primario de lectura.
- Los tres destinos de continuidad se perciben jerarquizados por relevancia situacional.

Objetivo de percepción al completar las Fases 1–4: 8.5/10.
