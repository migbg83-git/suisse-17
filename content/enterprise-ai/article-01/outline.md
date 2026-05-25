# Outline — Por qué un architecture.md vale más que cien prompts mágicos

---

## Estructura general

| Sección | Palabras aprox. | Función |
|---------|:---------------:|---------|
| 1. Introducción + Gancho | 300-400 | Capturar atención. Establecer tensión. |
| 2. El problema real | 400-500 | Diagnosticar. Empatizar. Reencuadrar. |
| 3. La tesis: contexto > prompts | 400-500 | Argumentar. Convencer. |
| 4. Ejemplo práctico | 400-500 | Demostrar. Hacer tangible. |
| 5. Objeciones y matices | 300-400 | Anticipar resistencia. Ganar credibilidad. |
| 6. Conclusión | 200-300 | Sintetizar. Elevar la idea. |
| 7. CTA | 100-150 | Convertir atención en acción. |
| **Total** | **2100-2750** | |

---

## Sección 1: Introducción + Gancho

### Objetivo

Capturar la atención en las primeras 3 líneas. Generar la sensación de "esto me pasa a mí" antes de que el lector decida si sigue leyendo.

### Mensaje principal

"Probablemente estás invirtiendo energía en el lugar equivocado cuando trabajas con IA."

### Ideas que deben aparecer

- Apertura con una escena reconocible: alguien pidiendo a un LLM que genere código, recibiendo un resultado genérico que no respeta convenciones del proyecto, y reescribiendo el 80%.
- Contraste inmediato: en otro equipo (o en otro momento), la misma petición produce un resultado casi perfecto. ¿La diferencia? No fue el prompt.
- Afirmación contrarian temprana: "El problema no es cómo preguntas. Es qué sabe la IA sobre tu proyecto antes de que preguntes."
- Establecer la tesis sin desarrollarla aún: "Un solo archivo de contexto bien estructurado cambia más que cualquier técnica de prompting."

### Ejemplos posibles

- Escena: "Son las 10 de la mañana. Llevas 15 minutos refinando un prompt para que Copilot genere un servicio que siga tus convenciones. El resultado sigue sin importar inyección de dependencias como tu equipo lo hace. Borras. Reescribes el prompt. Tercer intento."
- O versión más directa: dato/estadística abierta → "La mayoría de equipos enterprise que usan AI tools reportan que reescriben más del 60% del código generado."

### Transición a sección 2

De la escena concreta a la pregunta diagnóstica: "¿Por qué pasa esto? ¿Por qué la IA funciona tan bien en demos y tan mal en tu proyecto real?"

---

## Sección 2: El problema real

### Objetivo

Diagnosticar por qué la IA genera resultados mediocres en proyectos enterprise reales. Reencuadrar el problema: no es la herramienta ni tus skills — es la ausencia de contexto estructurado.

### Mensaje principal

"La IA no tiene acceso a lo que tu equipo sabe de forma implícita. Las convenciones que nadie escribió, las decisiones que se tomaron en una reunión hace dos años, los patterns que 'todo el mundo conoce'. La IA no puede usar lo que no existe de forma explícita."

### Ideas que deben aparecer

1. **Contexto implícito vs. explícito.** En un equipo de 5+ personas, hay decenas de decisiones arquitectónicas que viven en las cabezas de la gente. La IA opera exclusivamente con contexto explícito — archivos, docs, código visible. Lo que no está escrito, NO EXISTE para ella.

2. **El espejismo del prompt perfecto.** La industria ha creado un mercado de "prompt libraries", "prompt engineering courses", "mega prompts". Pero todos asumen que el contexto del proyecto ya está disponible. En enterprise, rara vez lo está.

3. **Por qué funciona bien en demos.** Las demos usan proyectos nuevos, sin historia, sin decisiones previas, sin convenciones acumuladas. Ahí la IA brilla porque no necesita contexto específico. En tu proyecto de 3 años con 200K líneas de código, la situación es radicalmente diferente.

4. **La asimetría.** Un prompt mejora UN resultado UNA vez. Contexto documentado mejora TODOS los resultados TODAS las veces.

### Ejemplos posibles

- Un equipo que usa inyección de dependencias con un patrón custom (no el default del framework). Sin documentar eso, cada output de AI usa el patrón default. El developer corrige manualmente cada vez.
- Un proyecto Angular con estructura de carpetas específica (feature modules con subfolders por tipo). Sin documentación de esa convención, la IA genera archivos en ubicaciones incorrectas. Siempre.

### Transición a sección 3

"Si el problema es la falta de contexto explícito, la solución no es escribir mejores prompts. Es proporcionar mejor contexto. Y hay una forma concreta de hacerlo."

---

## Sección 3: La tesis — Contexto > Prompts

### Objetivo

Presentar la solución de forma clara y argumentada. Definir qué es un architecture.md, qué contiene, y por qué transforma la relación con las AI tools.

### Mensaje principal

"Un archivo architecture.md que describe tus decisiones, convenciones y estructura es el multiplicador más potente que puedes darle a cualquier AI tool. No importa si usas Copilot, Cursor, Claude o ChatGPT — todos mejoran radicalmente con contexto de calidad."

### Ideas que deben aparecer

1. **Definición de architecture.md.** No es documentación genérica. Es un archivo diseñado específicamente para que los LLMs entiendan tu proyecto. Contiene: stack tecnológico, convenciones de naming, estructura de carpetas, patterns usados (y prohibidos), decisiones clave con su razón.

2. **Por qué funciona.** Los LLMs generan basándose en patrones estadísticos + contexto proporcionado. Si el contexto dice "en este proyecto usamos X patrón", el output sigue ese patrón. Sin esa información, usa el patrón estadísticamente más común — que probablemente no es el tuyo.

3. **La analogía del GPS.** Un prompt sin contexto es como decirle a un taxista "llévame a la oficina" sin darle la dirección. Un prompt con architecture.md es como darle la dirección, decirle qué carreteras evitar, y qué entrada usar. Misma petición, resultado radicalmente diferente.

4. **Efecto compuesto.** Escribir un architecture.md es inversión de horas. Pero ese archivo mejora miles de interacciones futuras. Es la definición de leverage.

5. **Más allá de architecture.md.** Mencionar brevemente que esto es parte de un sistema mayor: ADRs, convenciones, reglas de AI, documentación de decisiones. Pero architecture.md es el primer 80/20 — el máximo impacto con mínimo esfuerzo.

### Ejemplos posibles

- Fragmento de un architecture.md realista (3-5 líneas): stack, convención de naming, pattern de inyección, estructura de carpetas.
- Antes: "Crea un servicio de autenticación" → output genérico.
- Después (con architecture.md en contexto): mismo prompt → output que respeta convenciones, naming, estructura y patterns del proyecto.

### Transición a sección 4

"Esto suena bien en teoría. Veamos qué pasa en la práctica."

---

## Sección 4: Ejemplo práctico

### Objetivo

Demostrar la tesis con un caso concreto y tangible. El lector debe poder visualizar exactamente la diferencia que hace un architecture.md. Este es el momento de "mostrar, no contar".

### Mensaje principal

"La diferencia entre pedir algo a un LLM sin contexto y pedirlo con un architecture.md bien estructurado es la diferencia entre código que borras y código que commiteas."

### Ideas que deben aparecer

1. **Setup del ejemplo.** Proyecto Angular enterprise. Equipo de 8 personas. Convenciones propias de naming, estructura feature-based, servicios con patrón facade, uso de signals, tests con estructura específica.

2. **Petición SIN architecture.md.** Mostrar el prompt: "Genera un servicio Angular para gestionar el estado de notificaciones del usuario." Mostrar el output: servicio genérico con BehaviorSubject, estructura default, tests con estructura estándar. Funcional pero no sigue ninguna convención del equipo.

3. **Fragmento del architecture.md.** Mostrar las 10-15 líneas relevantes: patrón de servicios, naming, inyección, estructura de carpetas, testing approach.

4. **Petición CON architecture.md.** Mismo prompt exacto. Mostrar el output: servicio que sigue el patrón facade, usa signals, está en la carpeta correcta, naming correcto, tests con la estructura del equipo. Listo para commit.

5. **El punto clave.** El prompt fue IDÉNTICO en ambos casos. La única diferencia fue el contexto. Esto invalida la idea de que "el secreto está en el prompt".

### Ejemplos posibles

- Servicio Angular (facade pattern, signals, specific folder structure)
- O: pipeline de Azure DevOps (convenciones de stages, naming de variables, templates reutilizables)
- O: API endpoint .NET (naming, error handling pattern, response wrapping)

**Decisión:** Usar Angular por ser más visual y más alineado con la audiencia enterprise-frontend. Pero mencionar que aplica igual a .NET, DevOps, o cualquier otro contexto.

### Transición a sección 5

"A este punto, probablemente tienes una de estas objeciones en la cabeza..."

---

## Sección 5: Objeciones y matices

### Objetivo

Anticipar la resistencia del lector. Demostrar que se ha pensado en las limitaciones. Ganar credibilidad mostrando matices en vez de absolutismo.

### Mensaje principal

"No digo que los prompts no importan. Digo que tienen un techo sin contexto. Y no digo que necesitas documentar todo — solo lo que importa."

### Ideas que deben aparecer

1. **"Pero un buen prompt SÍ importa."**
   - Respuesta: Sí. Un prompt bien escrito sobre un buen contexto es lo ideal. Pero la prioridad es clara: primero contexto, después prompt. No al revés. Un prompt excelente sobre contexto vacío tiene un techo mucho más bajo que un prompt mediocre sobre contexto rico.

2. **"Documentar lleva demasiado tiempo."**
   - Respuesta: Un architecture.md básico se escribe en 1-2 horas. Esa inversión se recupera en la primera semana de uso con AI. Además, esa documentación sirve triple: AI tools, onboarding de nuevos miembros, y referencia para decisiones futuras.

3. **"¿Y cuando el proyecto cambia?"**
   - Respuesta: architecture.md es un living document. Se actualiza cuando cambian decisiones fundamentales (no cada commit). Las decisiones arquitectónicas cambian con poca frecuencia — es su naturaleza. El mantenimiento es mínimo.

4. **"Los modelos mejorarán y esto no hará falta."**
   - Respuesta: Los modelos mejorarán en inferencia general. Pero nunca podrán adivinar que TU equipo decidió usar el patrón X en vez del Y por razones específicas de TU contexto. El contexto explícito siempre ganará al inferido.

5. **Matiz importante: no es uno u otro.**
   - "Prompting" y "context engineering" no son enemigos. Son capas. Contexto es la base. Prompt es la capa superior. Pero sin base, la capa superior se desmorona.

### Ejemplos posibles

- Cálculo rápido de ROI: 2h de documentación × 10 interacciones/día × 5 minutos ahorrados = ROI en <1 semana.
- Mención de que las herramientas ya facilitan esto: Cursor rules, Copilot instructions, Claude project knowledge.

### Transición a sección 6

"Si llegas hasta aquí, la pregunta ya no es SI crear un architecture.md. Es CUÁNDO."

---

## Sección 6: Conclusión

### Objetivo

Sintetizar la tesis. Elevar la idea de "archivo de documentación" a "ventaja competitiva de equipo". Dejar al lector con una reflexión memorable.

### Mensaje principal

"En un mundo donde todos tienen acceso a los mismos modelos de IA, la ventaja competitiva no está en quién escribe mejores prompts. Está en quién proporciona mejor contexto. Y el contexto se construye una vez y multiplica para siempre."

### Ideas que deben aparecer

1. **Recapitulación de la tesis en 2-3 líneas.** No repetir — sintetizar a su esencia más pura.

2. **Elevación del concepto.** architecture.md no es solo un archivo. Es una filosofía: hacer explícito lo implícito, optimizar el input en vez del prompt, tratar la documentación como infraestructura (no como burocracia).

3. **Forward-looking.** Los equipos que hoy invierten en contexto estructurado tendrán ventaja compuesta durante años. Cada nuevo modelo de AI que aparezca beneficiará más a quien tiene mejor contexto.

4. **Cierre memorable.** Frase final que encapsule todo el artículo. Algo que pueda ser citado/compartido.

### Ejemplos posibles

- Cierre: "El mejor prompt que puedes escribir es el que nunca necesitaste porque tu architecture.md ya contenía la respuesta."
- O: "Deja de optimizar cómo preguntas. Empieza a optimizar qué sabe la IA antes de que preguntes."
- O: "Un prompt mágico resuelve un problema. Un architecture.md resuelve una categoría entera de problemas."

### Transición a CTA

Sin transición explícita. La conclusión genera el impulso emocional. El CTA aparece naturalmente después.

---

## Sección 7: CTA

### Objetivo

Convertir la atención y la convicción del lector en una acción concreta: suscripción a newsletter o descarga de lead magnet.

### Mensaje principal

"Si esto te pareció útil, hay más. Cada semana. Sin hype."

### Ideas que deben aparecer

1. **CTA primario: Newsletter.**
   - Tono: generoso, directo, sin presión.
   - Promesa clara: qué recibe, con qué frecuencia.
   - "Cada semana publico análisis prácticos sobre arquitectura enterprise e IA aplicada. Pragmático. Sin hype. Para seniors que construyen sistemas reales."

2. **CTA secundario: Lead magnet.**
   - "He creado un template de architecture.md que puedes adaptar a tu proyecto en 30 minutos. Incluye secciones para stack, convenciones, decisions y reglas para AI tools."
   - Formato: descarga directa a cambio de email.

3. **NO incluir:**
   - Múltiples CTAs compitiendo entre sí.
   - Tono agresivo o urgente.
   - Promesas exageradas.
   - Links a productos aún inexistentes.

### Formato visual

```
---

## Siguiente paso

[Formulario simple: email + botón]

Texto: "Recibe análisis semanales sobre arquitectura enterprise e IA aplicada. 
Sin spam. Sin hype. Cancelar cuando quieras."

---

O si prefieres algo concreto ahora:

[Descarga el template de architecture.md]
→ Adaptable a cualquier stack en 30 minutos.
```

---

## Notas de producción

### Tono general

- Directo y seguro, no arrogante.
- Primera persona ocasional para transmitir experiencia ("en proyectos donde he trabajado...").
- Pragmático: cada afirmación respaldada con lógica o ejemplo.
- Anti-hype: nunca prometer "10x productivity" ni resultados mágicos.
- Profesional pero no académico: lenguaje enterprise sin ser corporativo.

### Elementos de formato

- Subtítulos claros para scanning rápido.
- Una cita/callout destacado por sección (para social sharing).
- Bloques de código en la sección de ejemplo práctico.
- Sin bullets excesivos en el cuerpo argumentativo (usar párrafos).
- Negritas para ideas clave (máximo 1-2 por párrafo).

### Citas extraíbles (para redes)

Cada sección debe contener al menos una frase "tweetable":
- S1: "El problema no es cómo preguntas. Es qué sabe la IA sobre tu proyecto antes de que preguntes."
- S2: "Lo que no está escrito, no existe para la IA."
- S3: "Un architecture.md bien escrito vale más que cien prompts mágicos."
- S4: "El prompt fue idéntico. La única diferencia fue el contexto."
- S5: "Primero contexto, después prompt. No al revés."
- S6: "En un mundo donde todos tienen acceso a los mismos modelos, la ventaja está en quién proporciona mejor contexto."

### Lo que NO debe contener el artículo

- Tutorial paso a paso de cómo crear el archivo (eso es otro artículo).
- Comparación de herramientas (Cursor vs Copilot vs Claude).
- Jerga excesivamente técnica que excluya a la audiencia media.
- Absolutismos ("nunca uses prompts", "los prompts son inútiles").
- Referencias a herramientas con fecha de caducidad corta.
- Mención de la marca/proyecto — el artículo debe funcionar por sí solo.

---

*Última actualización: Mayo 2026*
