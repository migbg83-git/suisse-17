# Notes — Technical Debt vs Knowledge Debt

---

## Observaciones reales y tensiones organizacionales

- En proyectos Angular enterprise con microfrontends, la deuda técnica suele ser visible (dependencias, refactors, tech stack legacy), pero la deuda de conocimiento (por qué se eligió Nx, convenciones de comunicación entre microfrontends, reglas de ownership) solo emerge cuando alguien nuevo se incorpora o cuando la IA genera código que no encaja.
- Azure DevOps pipelines: la documentación cubre el "cómo" (YAML, triggers), pero rara vez el "por qué" de las decisiones (por qué se usan plantillas, por qué ciertos stages son manuales). La IA puede automatizar pipelines, pero sin contexto, amplifica errores de diseño.
- APIM: la configuración técnica es fácil de versionar, pero las políticas de seguridad, rate limiting y excepciones suelen vivir en la cabeza de un arquitecto senior. Cuando ese conocimiento no está explícito, la IA replica configuraciones inseguras o inconsistentes.
- Onboarding: los nuevos desarrolladores pueden aprender el stack en días, pero entender las reglas no escritas (qué no tocar, convenciones de naming, dependencias prohibidas) lleva semanas o meses. La IA no tiene ese periodo de adaptación: falla en el primer intento.
- Tribal knowledge: equipos con baja rotación tienden a acumular deuda de conocimiento invisible. Cuando la IA entra en juego, la brecha se hace explícita: outputs mediocres, errores repetidos, frustración con la herramienta.
- Sistemas legacy: la deuda técnica es evidente (código obsoleto, falta de tests), pero la deuda de conocimiento es crítica: nadie recuerda por qué existen ciertos módulos, qué dependencias son realmente necesarias, qué procesos no pueden cambiarse sin romper el negocio.

---

## Patrones recurrentes y anti-patterns

- **Patrón:** Documentar el "qué" y el "cómo", pero nunca el "por qué". La IA puede replicar acciones, pero no decisiones.
- **Anti-pattern:** Refactors masivos sin mapear dependencias cognitivas. El código mejora, pero el conocimiento se pierde.
- **Patrón:** Onboarding basado en shadowing y tradición oral. Funciona para humanos, es invisible para IA.
- **Anti-pattern:** Confiar en la memoria institucional para decisiones críticas. Cuando el equipo cambia, la IA y los nuevos fallan igual.
- **Patrón:** Documentación generada automáticamente (Swagger, YAML, etc.) sin contexto de negocio. Útil para integración, inútil para decisiones arquitectónicas.

---

## Frases/anchors editoriales y metáforas

- "La deuda técnica se paga con refactors; la deuda de conocimiento se paga con incidentes."
- "La IA es un espejo: amplifica lo que está explícito y expone lo que falta."
- "El onboarding humano es ósmosis; el onboarding de la IA es parsing."
- "Lo que no está escrito no existe para la IA."
- "La memoria institucional es un asset invisible hasta que se convierte en liability."
- "Refactorizar sin documentar es como pintar una casa con cimientos de arena."
- "La IA no pregunta, solo ejecuta."

---

## Ideas de arquitectura y futuros artículos

- Framework para auditar deuda de conocimiento: checklist de preguntas que la IA no puede responder con la documentación actual.
- Estrategias para convertir tribal knowledge en documentación viva.
- Cómo diseñar pipelines de Azure DevOps que sean autoexplicativos para humanos y máquinas.
- Patrones de documentación para microfrontends: decisiones de boundaries, ownership, comunicación.
- El rol de los Architecture Decision Records (ADR) en la era AI.
- Cómo la deuda de conocimiento afecta la resiliencia organizacional ante incidentes y rotación.
- "Knowledge Graphs" internos como solución a la deuda de conocimiento.
- Métricas para visibilizar la deuda de conocimiento: onboarding time, incidentes por falta de contexto, errores repetidos por IA.

---

## Ejemplos enterprise

- Proyecto con 12 microfrontends: la IA genera código correcto pero rompe convenciones de comunicación porque no están documentadas.
- Migración de pipelines en Azure DevOps: la IA automatiza el 80%, pero el 20% crítico depende de reglas tácitas no escritas.
- APIM: la IA replica políticas estándar, pero omite excepciones de negocio que solo conoce el arquitecto.
- Onboarding de un developer senior: aprende el stack en 3 días, pero tarda 3 semanas en entender las reglas no escritas.
- Incidente real: un cambio "menor" en un módulo legacy rompe un proceso crítico porque nadie documentó la dependencia oculta.
