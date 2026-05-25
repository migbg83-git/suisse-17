# Brief — Qué documentación necesita realmente un LLM

## Metadata

- **Tipo:** Artículo fundacional / opinion piece estratégico
- **Idioma:** Español
- **Extensión objetivo:** 2500-3500 palabras
- **Pilar:** AI for Enterprise Developers + Context Engineering
- **Cluster SEO:** AI Enterprise + Documentación Arquitectónica
- **Formato:** Essay argumentativo con observaciones de primera mano
- **Relación con artículos anteriores:** Artículo 01 defiende el qué (architecture.md). Artículo 02 diagnostica el por qué (deuda de conocimiento). Artículo 03 responde al cómo: qué documentar y — igual de importante — qué no documentar.

---

## Problema principal

La mayoría de equipos enterprise que intentan mejorar sus resultados con AI cometen el mismo error: documentan cosas que el LLM ya sabe y omiten lo que jamás podrá inferir.

Se escriben READMEs que explican qué hace `HttpClient`. Se documentan patrones de Angular que están en la documentación oficial. Se repiten instrucciones de instalación que el modelo conoce mejor que el propio equipo. Y mientras tanto, nadie escribe las tres decisiones arquitectónicas que explican por qué el proyecto está estructurado como está, ni las cinco convenciones que el equipo ha desarrollado internamente y que no existen en ningún tutorial.

El resultado: documentación extensa que no aporta valor al modelo, y ausencia total de la información que marcaría la diferencia.

El problema no es falta de documentación. Es documentación mal orientada. El equipo invierte tiempo documentando lo que el LLM ya entiende por entrenamiento, y no invierte un minuto en lo que solo ellos conocen.

---

## Audiencia objetivo

| Perfil | Por qué le importa |
|--------|-------------------|
| Arquitecto Software | Necesita saber qué decisiones documentar para que la IA opere dentro de los constraints reales del sistema. Quiere un criterio claro, no burocracia. |
| Tech Lead | Ha visto que la IA genera código técnicamente correcto pero contextualmente incorrecto. Necesita entender la diferencia entre lo que el modelo sabe y lo que necesita recibir. |
| Senior Developer (5-15 años) | Se pregunta qué vale la pena documentar para mejorar la IA. No quiere perder tiempo en documentación inútil pero sí invertir en la que multiplique resultados. |
| Engineering Manager | Necesita un criterio para decidir qué esfuerzo de documentación tiene ROI real en el contexto de adopción de AI, sin caer en iniciativas de "documentar todo". |

---

## Dolor principal

> "Hemos intentado mejorar los resultados de la IA documentando más, pero no notamos diferencia. Hemos creado wikis, actualizado READMEs, escrito guías. La IA sigue generando código que no se ajusta a nuestro proyecto. Empiezo a pensar que no es cuestión de cantidad sino de qué estamos documentando."

**Dolor secundario:** La frustración de invertir horas en documentación que no mejora nada — y la incertidumbre de no saber qué documentación sí haría la diferencia.

**Dolor oculto:** La sospecha de que la mayoría de la documentación del equipo no aporta valor ni a la IA ni a las personas, y que nadie tiene un criterio claro para distinguir lo útil de lo inútil.

---

## Mensaje principal

> Los LLMs ya entienden tu framework, tu lenguaje y los patrones comunes de tu stack. No necesitan que les expliques cómo funciona Angular o qué hace un middleware en .NET. Lo que necesitan — y lo que jamás podrán inferir por sí mismos — son tus decisiones, tus constraints, tus convenciones internas y tus razones. El criterio es simple: si la información existe en internet, el modelo ya la tiene. Si solo existe en tu equipo, el modelo la necesita de ti.

---

## Objeciones esperadas

| Objeción | Respuesta |
|----------|-----------|
| "El modelo no entiende nuestro framework tan bien como crees" | Los LLMs han sido entrenados con millones de repos, documentación oficial completa, y miles de tutoriales. Entienden Angular, .NET, React, etc. mejor que el 80% de developers en conceptos base. Lo que NO entienden son tus decisiones sobre cómo usas esos frameworks. |
| "Si no documentamos lo básico, los juniors no podrán usarlo" | La documentación para humanos y la documentación para LLMs tienen propósitos diferentes. Un junior necesita explicaciones pedagógicas. Un LLM necesita constraints y decisiones. No son mutuamente excluyentes pero tienen formas diferentes. |
| "Es imposible documentar todas nuestras decisiones" | No se trata de documentar todas. Se trata de documentar las 10-15 que tienen mayor impacto en los outputs de AI. La regla: si la IA lo hace mal consistentemente, es una decisión no documentada que necesita serlo. |
| "Los modelos cambian rápido, ¿no se quedará obsoleta esta documentación?" | Las decisiones de tu equipo no cambian porque cambie el modelo. Si decidiste usar facade services en vez de services planos, eso es estable. Lo que cambian son las capacidades del modelo — y cada mejora hace que el contexto explícito sea MÁS útil, no menos. |
| "Esto suena a ADRs y ya intentamos implementarlos sin éxito" | Los ADRs son una forma posible pero no la única ni necesariamente la mejor. Un bloque de cinco líneas en un architecture.md puede ser más efectivo que un ADR formal de dos páginas. El formato importa menos que la existencia de la información. |

---

## Ideas clave del artículo

1. **Lo que el LLM ya sabe.** Frameworks, lenguajes, patrones comunes, APIs públicas, best practices genéricas, documentación oficial. Todo lo que está en internet con suficiente frecuencia ya forma parte de su conocimiento. Documentar esto para el modelo es redundante.

2. **Lo que el LLM jamás podrá inferir.** Decisiones arquitectónicas internas, constraints de negocio, convenciones propias del equipo, boundaries entre dominios, razones históricas, excepciones organizativas. Nada de esto existe en los datos de entrenamiento porque es específico de tu proyecto.

3. **El criterio de documentación.** Pregunta: "¿Podría alguien de fuera del equipo, leyendo solo el código y la documentación pública, saber esto?" Si la respuesta es no → necesita estar documentado para la IA. Si la respuesta es sí → el modelo ya lo tiene.

4. **La asimetría del esfuerzo mal dirigido.** Equipos que escriben cientos de líneas explicando cómo funciona HttpClient pero no escriben tres líneas sobre por qué usan un patrón de retry custom en vez del estándar. El esfuerzo invertido en documentar lo obvio es esfuerzo robado a documentar lo crítico.

5. **Las seis categorías de información que solo tú tienes.** Decisiones arquitectónicas (por qué), restricciones de negocio (qué no se puede hacer), convenciones internas (cómo se hace aquí), límites entre dominios (quién es responsable de qué), razones históricas (por qué no se hizo de otra forma), excepciones organizativas (por qué algo rompe la regla general).

6. **El modelo entiende código mejor de lo que crees.** Puede leer e interpretar un codebase completo. Infiere patrones, estructuras, dependencias. No necesita que le narres lo que el código ya dice. Necesita que le cuentes lo que el código NO dice — las decisiones invisibles detrás de la implementación visible.

7. **Documentación como interfaz, no como narrativa.** El LLM no necesita prosa explicativa. Necesita constraints claros, reglas explícitas, decisiones concisas. 40 líneas estructuradas superan a 400 líneas de narrativa vaga. La concisión es una virtud, no una limitación.

8. **El anti-patrón de la wiki enterprise.** Confluences de 200 páginas que nadie lee y la IA tampoco puede procesar eficientemente. La documentación útil para LLMs es breve, estructurada, actualizable y vive cerca del código — no en un sistema externo separado.

---

## CTA futuro

**Primario:** Suscripción a newsletter.

> "Cada semana publico análisis prácticos sobre cómo los equipos enterprise pueden trabajar mejor con IA. Sin hype. Sin promesas mágicas. Para arquitectos y tech leads que construyen sistemas complejos."

**Secundario:** Link a artículo 01.

> "Si quieres ver la estructura concreta de un archivo que cubre las seis categorías que la IA necesita, lee 'Por qué un architecture.md vale más que cien prompts mágicos'."

**Terciario:** Link a artículo 02.

> "Si tu equipo se queja de que la IA no funciona y quieres diagnosticar la causa raíz, lee 'La deuda técnica que la IA está empezando a revelar'."

**Futuro:** Checklist de "qué documentar para tu LLM" — una herramienta de una página que ayude a equipos a identificar las 15 decisiones más importantes para documentar.

---

## Keywords principales

| Keyword | Intención | Volumen estimado |
|---------|-----------|:----------------:|
| documentación para llm | Informacional | Medio-Creciente |
| qué documentar para ia | Informacional | Medio |
| context engineering enterprise | Informacional | Creciente |
| ai documentation best practices | Informacional | Medio |
| architecture decision records ai | Informacional | Bajo-Medio |

---

## Keywords secundarias

| Keyword | Relación |
|---------|----------|
| llm context window enterprise | Capacidad técnica del modelo |
| documentar decisiones arquitectura | Acción principal propuesta |
| ai no entiende mi proyecto | Dolor del lector |
| copilot enterprise documentación | Herramienta concreta |
| knowledge management ai | Concepto macro |
| architecture.md | Conexión con artículo 01 |
| deuda de conocimiento | Conexión con artículo 02 |
| implicit knowledge software | Concepto clave |
| what llms know vs don't know | Tesis central en inglés |

---

## Diferenciadores vs contenido existente

| Lo que existe | Lo que hacemos diferente |
|---------------|------------------------|
| "How to write documentation for AI" (guías genéricas de prompting) | No hablamos de cómo escribir prompts. Hablamos de qué información necesita el modelo ANTES de cualquier prompt. Es un nivel de abstracción superior. |
| "AI documentation tools" (marketing de productos) | No vendemos herramientas. Establecemos un criterio de decisión: qué documentar y qué no. |
| "Architecture Decision Records" (artículos sobre ADRs) | Los ADRs son UNA forma posible. Nuestro enfoque es más amplio: cualquier formato que haga explícito lo que solo el equipo sabe. El foco es el contenido, no el formato. |
| "LLM context engineering" (técnicos, orientados a tokens) | No hablamos de tokens ni de ventanas de contexto. Hablamos de la naturaleza de la información que falta — desde perspectiva de arquitecto, no de ML engineer. |
| "Documentation best practices" (genéricos) | No es "documenta más". Es "documenta diferente". Desafiamos la idea de que más documentación = mejor. A veces, mejor documentación = menos pero correcta. |

**Ángulo único:** Nadie está articulando con claridad la distinción entre "lo que el LLM ya sabe" y "lo que solo tu equipo sabe". Todos asumen que más = mejor. Nosotros defendemos que el criterio es la exclusividad de la información, no su volumen.

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|:------------:|:-------:|-----------|
| Que suene a "no documentes nada básico" y los equipos dejen de documentar | Media | Alto | Dejar claro que la documentación para humanos sigue siendo necesaria. Hablamos específicamente de qué necesita la IA — que es complementario, no sustitutivo. |
| Que se perciba como demasiado abstracto sin actionables | Media | Medio | Incluir ejemplos concretos de "esto sí / esto no" con Stack real (Angular, .NET, Azure DevOps). |
| Que sobreestime las capacidades del LLM y el lector desconfíe | Baja | Alto | Ser honesto sobre limitaciones reales (alucinaciones, APIs muy recientes, contextos largos) mientras se defiende que el conocimiento base de frameworks es sólido. |
| Superposición excesiva con artículo 01 | Media | Medio | Art 01 = el artefacto (architecture.md). Art 03 = el criterio de decisión (qué poner y qué no poner en cualquier documentación para AI). Diferente ángulo, mismo universo. |
| Que el lector piense "esto ya lo sé" si es alguien que ya usa context engineering bien | Baja | Bajo | Profundizar en la taxonomía de las 6 categorías y dar ejemplos no obvios. El valor no está en la idea general sino en la claridad del framework de decisión. |
| Que se malinterprete como "la IA lo sabe todo, solo dale constraints" | Media | Medio | Ser explícito sobre los límites: APIs muy recientes, libraries poco populares, configuraciones específicas de infra. El modelo tiene lagunas — pero no donde la gente cree. |

---

## Relación con artículos anteriores

| Artículo 01 | Artículo 02 | Artículo 03 |
|-------------|-------------|-------------|
| El artefacto: architecture.md | El diagnóstico: deuda de conocimiento | El criterio: qué documentar |
| "Esto es lo que necesitas crear" | "Por esto es necesario" | "Esto es lo que debe contener (y lo que no)" |
| Foco: contexto > prompts | Foco: la IA revela deuda | Foco: documentación dirigida vs genérica |
| Tono: propositivo | Tono: analítico/diagnóstico | Tono: estratégico/prescriptivo |

Progresión narrativa de los tres artículos: **artefacto → diagnóstico → criterio**. Juntos construyen un framework completo: qué crear, por qué crearlo, y qué poner dentro.

---

## Títulos alternativos para testing

1. Qué documentación necesita realmente un LLM
2. Lo que tu LLM ya sabe (y lo que jamás podrá inferir)
3. Deja de documentar lo obvio: qué necesita realmente la IA de tu proyecto
4. El 90% de tu documentación no le sirve a la IA
5. La documentación que falta: qué sabe un LLM y qué solo tú sabes

**Recomendación:** Opción 1 como principal. Directo, preciso, genera curiosidad sobre "realmente" (implica que hay una respuesta contraintuitiva). Alternativa fuerte: opción 2 (más gancho emocional con la dualidad sabe/no puede inferir).

---

*Última actualización: Mayo 2026*