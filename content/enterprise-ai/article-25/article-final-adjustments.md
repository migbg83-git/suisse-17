# Article-25: Final Adjustments Log

**Artículo:** Agentic AI en la empresa  
**Estado:** APROBADO CON CAMBIOS MENORES → Cambios aplicados  
**Referencia:** review.md (clasificación: APPROVED WITH MINOR CHANGES)

---

## Título y Slug — Decisión Final

### Título
**Adoptado:** "Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen"

**Descartado:** "Agentic AI en la empresa: cómo diseñar sistemas de agentes con contexto, governance y memoria para entornos empresariales reales"

**Justificación:** El título adoptado prioriza el framing de problema ("por qué fallan") antes de la solución. Es más accionable, captura intención de búsqueda primaria, y genera mayor urgencia de lectura. El título descartado era técnicamente correcto pero excesivamente descriptivo y menos diferenciador.

### Slug
**Adoptado:** `agentic-ai-enterprise-governance-memoria-arquitectura`

**Descartado:** `agentic-ai-enterprise-diseno-sistemas-contexto-governance-memoria`

**Justificación:** El slug adoptado es más limpio (5 keywords fuertes), sin palabras de relleno ("diseno-sistemas"), y optimizado para rastreo semántico. "arquitectura" añade dimensión de intención que "contexto" no aporta de forma diferenciada.

---

## Cambios Aplicados

### Cambios Obligatorios (5)

**C1 — Corrección léxica: "reflex" → "reacción"**  
- Línea ~151  
- Antes: `la reflex inmediata es:`  
- Después: `la reacción inmediata es:`  
- Motivo: "Reflex" es anglicismo innecesario; "reacción" es el término correcto en español.

**C2 — Corrección de datos: "Quinientas" → "Cientos"**  
- Línea ~100 (escenario agente regulatorio)  
- Antes: `Quinientas decisiones bajo regla obsoleta.`  
- Después: `Cientos de decisiones bajo regla obsoleta.`  
- Motivo: "Quinientas" es un número específico sin base factual. "Cientos" mantiene la gravedad sin precisión arbitraria.

**C3 — Corrección gramatical: plural → singular**  
- Línea ~230 (referencia interna a AI Governance Framework)  
- Antes: `Los artículos sobre [AI Governance Framework]... establecieron que`  
- Después: `El artículo sobre [AI Governance Framework]... estableció que`  
- Motivo: La referencia enlaza a un único artículo. El plural era incorrecto.

**C4 — Corrección terminológica: "event-driven" → "orientado a eventos"**  
- Línea ~261 (descripción de capa de contexto dinámico)  
- Antes: `Esta capa funciona de forma event-driven:`  
- Después: `Esta capa funciona de forma orientada a eventos:`  
- Motivo: Coherencia con política editorial de minimizar anglicismos técnicos cuando existe equivalente natural en español.

**C5 — Corrección terminológica: "flags" → "marcas"**  
- Línea ~310 (escenario de agente de segmentación de clientes)  
- Antes: `El cliente no tiene flags de exclusión.`  
- Después: `El cliente no tiene marcas de exclusión.`  
- Motivo: "Flags" es anglicismo evitable. "Marcas de exclusión" es el término correcto en contexto de segmentación.

### Cambios Opcionales Aplicados (2)

**O1 — Enriquecimiento: escena del agente en cascada**  
- Línea ~110 (Fallo 6: Cascada sin supervisión)  
- Antes: Descripción abstracta con "agente A", "agente B", "agente C"  
- Después: Escena concreta con agente de inventario, agente de pricing, agente de rutas  
- Motivo: La escena abstracta era correcta pero fría. La versión con roles reales (inventario, pricing, rutas) ancla el fallo en un contexto empresarial reconocible, aumentando la credibilidad del patrón.

**O2 — Eliminación: frase meta-narrativa**  
- Línea ~271 (sección "El agente como punto de convergencia")  
- Eliminada: `Aquí está la idea que este artículo ha intentado comunicar desde el principio.`  
- Motivo: La frase introduce distancia narrativa innecesaria. El párrafo que sigue ("El agente no es una capa adicional.") es más efectivo como apertura directa de la conclusión. La meta-referencia al artículo debilita la autoridad del cierre.

### Cambios Opcionales Descartados (0)

Todos los cambios opcionales evaluados fueron finalmente aplicados. No hay cambios descartados.

---

## Estado Final del Artículo

- **Título:** Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen  
- **Slug:** `agentic-ai-enterprise-governance-memoria-arquitectura`  
- **Palabras:** ~5,600  
- **Lectura estimada:** 15-16 min  
- **Clasificación editorial:** APROBADO — listo para pipeline de publicación  
- **Pendiente:** assets.md → article.json → build → deploy
