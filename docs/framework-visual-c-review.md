# Framework Visual C Review

Fecha: 2026-06-07
Alcance: Auditoria critica de la version actual de /framework
Metodo: Revision de implementacion real (copy, estructura de bloques, jerarquia visual, lenguaje de interfaz)
Modo: Design Review Board (SaaS B2B premium)

---

## Parte 1 - Diagnostico

### 1) Que elementos siguen pareciendo documentacion

- La pagina se lee como un "indice estructurado" mas que como un producto. La secuencia Hero -> Mapa -> Capas -> Navigator -> Vocabulario -> Continuidad recuerda un whitepaper navegable, no una experiencia premium de decision.
- Varios titulos son funcionales y descriptivos, pero no editoriales: "Mapa causal de 6 capas", "Constructor de ruta", "Lenguaje del framework", "Continuidad".
- El bloque "Como usar esta pagina" en Hero tiene tono de manual de instrucciones. Funciona para onboarding, pero reduce percepcion de sofisticacion.
- En Vocabulario, el CTA "Ver articulo base" sigue sonando a estructura de datos interna, no a promesa de aprendizaje.
- En Capas, "Ver detalle / Ocultar detalle" es copy de UI administrativa, no copy de decision.

### 2) Que elementos siguen pareciendo backoffice

- El patron visual dominante es tarjeta + borde gris + fondo blanco. Esa repeticion crea una estetica de panel de gestion.
- El sistema de chips, cards y bloques usa casi siempre el mismo tratamiento (bordes finos, radios medios, azul-gris neutro). Falta contraste de roles visuales.
- Persisten mensajes y conceptos con tono de sistema: "ruta exacta", "opcion mas proxima", "resueltos", "base".
- La navegacion ancla superior (pildoras) transmite utilitario de secciones internas, no narrativa de producto.

### 3) Que elementos no transmiten todavia "Framework Archwise"

- No existe una firma visual propietaria inmediata. Si se oculta el logo/nombre, la captura puede confundirse con una plantilla enterprise generica.
- La identidad cromatica navy esta mejor alineada que antes, pero el lenguaje visual global sigue demasiado estandar (cards, bordes suaves, azules previsibles).
- El mapa causal mejora en conectores, pero todavia no domina el escenario como pieza iconica diferencial.
- El tono verbal no esta completamente a la altura de autoridad intelectual: hay microcopy con semantica tecnica y varias tildes ausentes que erosionan credibilidad premium.

### 4) Donde se pierde atencion del usuario

- Tras el Hero, la atencion se fragmenta por exceso de bloques con peso similar. No hay una "columna vertebral" perceptual fuerte.
- En Capas, al expandir, la experiencia deriva rapido a lista de articulos con metadatos. El usuario pasa de "sistema" a "catalogo".
- Vocabulario compite por espacio y foco sin conectar claramente con la decision activa del usuario.
- Continuidad aparece como cierre administrativo (3 tarjetas homogeneas) en lugar de cierre estrategico guiado.

### 5) Bloques con demasiado peso visual

- Hero: concentra demasiadas funciones simultaneas (tesis, metricas, CTAs, instrucciones). Es potente, pero le quita protagonismo al mapa.
- Navigator: el shell y el resultado tienen suficiente jerarquia para competir casi al nivel del mapa.
- Anchor nav: para su valor real, consume demasiada atencion temprana.

### 6) Bloques con demasiado poco peso visual

- Mapa causal: deberia ser el "activo central", pero visualmente entra como un bloque mas de la pila.
- Capas (detalle): mucho contenido util, poca narrativa causal visible en primer escaneo.
- Continuidad: insuficiente jerarquia para definir un siguiente paso claro.

---

## Parte 2 - Mapa causal

### Protagonismo actual

- El mapa no parece el centro del framework; parece un bloque importante dentro de varios bloques equivalentes.
- El usuario percibe una pagina modular, no un sistema cuyo nucleo es el mapa.

### Jerarquia visual

- El titulo y subtitulo son correctos, pero no hay un gesto visual de "main stage".
- Los nodos tienen buen orden y estados, pero el conjunto no separa de forma contundente contexto vs foco principal.

### Legibilidad

- Desktop: correcta. La direccion causal se entiende mejor tras Sprint B.
- Tablet: mejora aceptable, pero al desaparecer la linea continua y dividir en dos filas se debilita la lectura de trayectoria unica.
- Mobile: la flecha vertical existe, pero el flujo sigue pareciendo una lista de cards antes que una cadena causal.

### Percepcion de sistema

- El usuario experto entiende la logica, pero la interfaz aun no "impone" esa logica a primera vista.
- La capa activa destaca, pero la narrativa de dependencias no domina en lectura pasiva (especialmente fuera de hover/focus).

### Respuesta directa

- Parece realmente el centro del framework?: No, aun no.
- O parece un bloque mas?: Si, todavia parece un bloque mas dentro de una pagina de secciones.

### Mejoras concretas (sin implementar)

- Crear una jerarquia de escena para el mapa: que sea el bloque visualmente mas dominante de toda la pagina despues del H1.
- Reducir competencia inmediata del Hero y del anchor nav en el primer viewport.
- Convertir el mapa en referencia persistente de navegacion (estado de progreso visible, no solo seleccion puntual).
- Reforzar continuidad causal en tablet/mobile con transiciones mas explicitas entre filas/segmentos.
- Hacer que el estado activo tenga un tratamiento inequivamente "in control" frente al resto (no solo borde y fondo).

---

## Parte 3 - Capas

### Analisis de "Que habilita cada capa"

- Parece documentacion?: Si, en gran medida.
- Parece storytelling?: Parcialmente, pero debil.
- Parece un sistema de decision?: Solo cuando el usuario ya esta motivado a explorar; no en lectura rapida.

### Diagnostico

- El patron acordeon + lista de articulos privilegia inventario sobre narrativa.
- Falta framing causal persistente dentro de cada capa expandida (que habilita, que bloquea, que riesgo evita).
- El copy de accion ("Ver detalle") no comunica valor esperado.
- El salto a lista de links reintroduce sensacion de "repositorio".

### Como convertirlo en experiencia mas editorial (sin HTML)

- Reencuadrar cada capa como "decision brief" y no como "detalle de seccion".
- Estructurar el contenido expandido en una microhistoria estable:
  1. Decisiones que habilita esta capa
  2. Riesgo de omision
  3. Evidencia/lecturas recomendadas
- Cambiar el tono de accion de "ver/ocultar" a "explorar/cerrar" con promesa de resultado.
- Reducir protagonismo de metadatos de catalogo y aumentar protagonismo de contexto estrategico.
- Introducir lenguaje de continuidad inter-capas (origen, puente, siguiente salto) para sostener narrativa sistemica.

---

## Parte 4 - Identidad visual

### Evaluacion por componente visual

- Colores:
  - Mejor coherencia navy respecto a iteraciones previas.
  - Problema: la paleta no se traduce aun en un sistema de firma visual distintivo.
- Tarjetas:
  - Exceso de tarjetas de borde fino similares entre bloques.
  - Resultado: lenguaje de UI enterprise generica.
- Conectores:
  - Mejoraron; hoy son legibles.
  - Aun no construyen una iconografia causal propietaria reconocible.
- Badges:
  - Numeraciones y etiquetas funcionan, pero sin un codigo de marca unico.
- Iconografia:
  - Practicamente ausente como sistema.
- Lenguaje visual:
  - Limpio y ordenado, pero intercambiable con muchos frameworks B2B.

### Pregunta clave

Que hace que alguien pueda reconocer una captura de Archwise?

- Respuesta honesta: muy poco, todavia.
- Hoy la captura comunica "solido y correcto", pero no "inequivocamente Archwise".

### Mecanismos de identidad visual propios (sin implementar)

- Definir un motivo visual exclusivo de causalidad (patron de flujo, traza o topologia) reutilizable en Hero, Mapa y Capas.
- Crear una escala de "estados sistemicos" propia (diagnostico, dependencia, riesgo, activacion) con codigos visuales consistentes.
- Establecer un lenguaje tipografico con mayor caracter editorial para headings clave (sin comprometer legibilidad B2B).
- Diseñar una gramatica de conectores y badges unica, no basada en convenciones UI genericas.
- Introducir una firma de cierre en Continuidad que convierta el final en "proxima decision" y no en "lista de destinos".

---

## Parte 5 - Priorizacion

### P1 - Mayor impacto visual con menor esfuerzo

1. Rebalancear jerarquia para que el mapa sea el centro perceptual
- Impacto esperado: Alto
- Esfuerzo: Bajo-Medio
- Riesgo: Bajo

2. Reescribir microcopy con tono editorial premium (sin cambiar logica)
- Impacto esperado: Alto (autoridad intelectual y percepcion de producto)
- Esfuerzo: Bajo
- Riesgo: Bajo

3. Reducir estetica de backoffice en patrones repetidos de card/borde
- Impacto esperado: Alto
- Esfuerzo: Bajo-Medio
- Riesgo: Bajo

4. Reencuadrar Capas como decision brief en vez de detalle documental
- Impacto esperado: Alto
- Esfuerzo: Medio
- Riesgo: Bajo-Medio

### P2 - Impacto medio

1. Definir sistema de identidad visual causal propietario
- Impacto esperado: Medio-Alto
- Esfuerzo: Medio
- Riesgo: Medio

2. Integrar Vocabulario con estado/capa activa para relevancia contextual
- Impacto esperado: Medio
- Esfuerzo: Medio
- Riesgo: Medio

3. Rediseñar Continuidad con jerarquia clara de siguiente paso
- Impacto esperado: Medio
- Esfuerzo: Medio
- Riesgo: Bajo

### P3 - Cambios opcionales

1. Refinamientos de motion y transiciones narrativas entre bloques
- Impacto esperado: Medio-Bajo
- Esfuerzo: Medio
- Riesgo: Bajo

2. Mejoras cosmeticas secundarias de espaciado y ritmo tipografico fino
- Impacto esperado: Bajo
- Esfuerzo: Bajo
- Riesgo: Bajo

3. Variaciones visuales por breakpoint para reforzar protagonismo del mapa
- Impacto esperado: Bajo-Medio
- Esfuerzo: Medio
- Riesgo: Medio

---

## Parte 6 - Recomendacion final

La prioridad correcta es:

B) Corregir corpus y tildes

Justificacion:

- La principal fuga de autoridad intelectual no es tecnica ni funcional; es linguistica y editorial.
- En un producto B2B premium, errores de tildes y microcopy de tono "sistema" reducen confianza ejecutiva de inmediato.
- El costo de corregir corpus/tildes es bajo y el impacto en percepcion de calidad es inmediato y transversal (incluye /framework y el resto del ecosistema).
- Seguir refinando visualmente /framework (A) sigue siendo importante, pero hacerlo antes de cerrar calidad editorial deja valor en la mesa y mantiene una senal de producto incompleto.
- Volver a produccion editorial (C) antes de corregir base linguistica amplifica deuda de percepcion en nuevas piezas.

Decision Board:
1. Primero B (higiene editorial y tildes)
2. Luego A (Sprint Visual C enfocado a protagonismo del mapa e identidad propia)
3. Despues C (Article-30 con estandar premium ya estabilizado)
