# Playbook: Enlazado Interno

> Versión: 1.0  
> Cuándo usar: Cuando el roadmap o el backlog de un cluster indica que hay oportunidades de enlazado interno

---

## Cuándo utilizarlo

Usar este playbook cuando:
- El backlog de un cluster tiene ítems de tipo "Enlazado" pendientes.
- Se acaba de publicar un artículo nuevo y hay que añadir enlaces desde artículos existentes.
- La revisión de GSC muestra que una página con buena posición no está recibiendo autoridad interna suficiente.

**No usar** para añadir enlaces arbitrarios. Cada enlace debe tener una justificación editorial y de usuario.

---

## Principios del enlazado interno en Archwise

1. **El enlace debe ayudar al lector, no solo al SEO.** Un enlace que interrumpe la lectura o lleva a contenido irrelevante para el contexto es peor que no enlazar.
2. **Dirección natural del enlace**: de artículos de capas avanzadas hacia artículos de capas base (el lector que llega por un concepto avanzado puede querer la base). Y viceversa: de artículos base hacia los siguientes pasos lógicos.
3. **El texto ancla debe ser descriptivo**, no genérico ("ver este artículo" es un enlace débil; "el framework de Context Engineering" es un enlace útil).
4. **No forzar más de 2-3 enlaces por artículo** si no son naturales. El exceso de enlaces internos diluye la señal.

---

## Pasos

### 1. Identificar el par de artículos
- **Artículo origen**: el que va a enlazar.
- **Artículo destino**: el que va a recibir el enlace.
- Verificar que la conexión temática es genuina: ¿por qué un lector del artículo origen querría leer el artículo destino?

### 2. Verificar que el enlace no existe ya
- Leer el artículo origen.
- Buscar si ya hay una referencia al artículo destino (puede ser por título, por concepto o por slug).
- Si ya existe: registrar como "ya enlazado" en el backlog del cluster y marcar como completado.

### 3. Identificar el punto de inserción
- Leer el artículo origen buscando el párrafo donde el concepto del artículo destino es más relevante.
- El enlace debe ir en ese punto, no en una nota al pie genérica.
- Si no hay un punto natural de inserción: el enlace no es genuino. No añadir.

### 4. Redactar el texto ancla
- El texto ancla debe describir el concepto o el artículo destino, no ser genérico.
- Correcto: "el concepto de Knowledge Debt", "el Framework Archwise", "los niveles de madurez de equipos AI-Augmented".
- Incorrecto: "ver más aquí", "este artículo", "haz clic aquí".

### 5. Ejecutar el cambio
- El cambio se realiza en `content/enterprise-ai/article-XX/article.md`.
- Usar el formato de enlace del sistema de contenido (Markdown estándar o el formato que usa el build pipeline).
- Verificar que el slug de destino es correcto consultando `docs/editorial-os/clusters/[cluster].md`.

### 6. Verificar el build
- Ejecutar `npm run build:content` para verificar que el enlace no genera errores.
- Verificar en el preview local que el enlace funciona y lleva a la URL correcta.

### 7. Documentar el cambio
- Marcar el ítem del backlog del cluster como completado.
- Registrar en `docs/editorial-os/history/YYYY-MM-DD-enlazado.md`: qué artículo origen, qué artículo destino, qué texto ancla, fecha.

---

## Criterios de completitud

- [ ] El par artículo origen / destino está identificado con justificación editorial.
- [ ] El punto de inserción es natural en el texto.
- [ ] El texto ancla es descriptivo.
- [ ] El cambio está ejecutado y el build no tiene errores.
- [ ] El ítem del backlog del cluster está marcado como completado.
- [ ] El cambio está registrado en el historial.

---

## Resultado esperado

Un enlace que ayuda al lector a continuar su recorrido por el corpus de forma natural y que transfiere autoridad de página de forma lógica y razonada.
