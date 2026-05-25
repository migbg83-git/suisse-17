# Notes — architecture.md vs prompts

Cuaderno personal. Ideas sin filtrar.

---

## Observaciones de proyectos reales

En un proyecto Angular con 12 microfrontends y un equipo de 15 personas, las convenciones de naming de servicios eran tan específicas que ningún LLM del mundo las iba a adivinar. UserNotificationFacadeService, no NotificationService. Y eso no estaba escrito en ningún sitio — vivía en la cabeza. Tres developers nuevos tardaron semanas en aprender eso por ósmosis.

Cuando configuramos APIM en un proyecto enterprise, las policies de rate limiting, CORS y transformación eran customizadas para cada backend. No hay documentación pública que cubra "nuestro" caso. Sin un archivo que explique qué policies usamos y por qué, la IA genera XML de policies genéricas que nunca pasarían un review.

He visto equipos dedicar sprints enteros a "mejorar la productividad con AI" comprando licencias de Copilot y Cursor — sin invertir ni una hora en documentar sus convenciones. Es como comprar un GPS de última generación y no darle la dirección.

En Azure DevOps, nuestras pipelines usan templates reutilizables con una convención específica de naming para stages, variables y environments. Pedirle a una IA que genere una pipeline sin describir esa convención produce YAML que no pasa validación. Siempre.

---

## Analogías que funcionan

**El GPS sin dirección.** Un LLM con buen prompt pero sin contexto es un GPS de última generación al que no le has dado la dirección. Puede calcular rutas increíbles — pero no sabe adónde vas.

**El constructor al que no le das los planos.** Le dices "construye un muro aquí" pero no le dices que hay una tubería detrás, que el suelo tiene 5 grados de inclinación, y que el cliente quiere ladrillo visto. Va a construir un muro genérico. Perfecto técnicamente. Inútil en tu contexto.

**El médico sin historial.** Puedes describir tus síntomas con una precisión brillante (buen prompt). Pero si el médico no tiene tu historial, probabilidades genéticas, alergias y medicación actual (contexto), su diagnóstico será genérico. "Tome paracetamol." No es que sea mal médico. Es que no tiene información.

**La Wikipedia vs. tu wiki interna.** Los LLMs saben todo lo que hay en internet. Pero no saben nada de lo que hay en tu Confluence, tu wiki interna, tus ADRs, tus diagramas de Miro. Ahí vive el contexto que marca la diferencia.

**El nuevo del equipo el primer día.** Un LLM sin architecture.md se comporta exactamente como un developer junior en su primer día: tiene skills técnicos genéricos, pero no conoce las reglas no escritas del proyecto. La diferencia es que el junior pregunta. El LLM no — inventa.

---

## Frases potentes (sin pulir)

- "Lo que no está escrito no existe para la IA."
- "Coleccionar prompts es optimizar la pregunta. Escribir un architecture.md es optimizar la respuesta."
- "La industria te vendió que el skill era preguntar bien. El skill real es dar buen contexto."
- "Un prompt resuelve un problema. Un architecture.md resuelve una categoría de problemas."
- "El mejor prompt que puedas escribir nunca va a superar la ausencia de contexto."
- "En enterprise, el conocimiento implícito es deuda técnica invisible."
- "Todo el mundo tiene acceso a los mismos modelos. El diferencial ya no es el modelo. Es el input."
- "Context Engineering no es documentar por documentar. Es documentar para multiplicar."
- "Si tu equipo necesita explicar cosas verbalmente cada vez que alguien nuevo entra, ya tienes un problema. La IA solo lo hace visible."
- "¿Quieres que la IA genere código como lo haría un senior de tu equipo? Dale el contexto que tiene un senior de tu equipo."
- "Prompt engineering es retail. Context engineering es wholesale."

---

## Críticas al hype del prompt engineering

La industria ha creado un mercado de "prompt packs" y "mega prompts" que asume de forma implícita que el input del proyecto ya está resuelto. Nunca lo está en enterprise.

Los influencers que venden "100 prompts para developers" usan proyectos nuevos de 3 archivos. Intenta eso en un monorepo con 200 módulos y convenciones de 5 años.

"Prompt engineering" como disciplina tiene utilidad real — pero se ha sobreestimado hasta niveles absurdos. El 80% del resultado de un LLM depende del contexto, no del prompt. El prompt es el 20% final de refinamiento.

La obsesión con prompts es una señal de que la persona no ha trabajado en enterprise real. En enterprise, los problemas no son "cómo le pregunto" — son "qué información necesita tener antes de responder".

Los cursos de "prompt engineering for developers" enseñan a optimizar el 20% que menos importa y ignoran el 80% que más importa.

El término "prompt engineering" en sí es engañoso. No estás diseñando prompts. Estás diseñando sistemas de información que alimentan a un modelo. El prompt es la última capa — la punta del iceberg.

---

## Reflexiones sobre context engineering

Context Engineering es un término nuevo para algo que los buenos arquitectos siempre han hecho: hacer explícito lo implícito. La diferencia es que ahora tiene impacto inmediato y medible (la calidad del output de AI).

Un architecture.md no solo sirve para la IA. Sirve para:
- Onboarding de nuevos miembros
- Decisiones de arquitectura futuras
- Revisión en 6 meses ("¿por qué hicimos esto?")
- Discusiones técnicas con stakeholders
- Code reviews más consistentes

La IA simplemente ha hecho VISIBLE un problema que siempre existió: la falta de documentación explícita. Antes el coste era "la gente tarda más en entender". Ahora el coste es "la IA genera basura que hay que reescribir". Mismo problema, diferente manifestación.

Context Engineering incluye pero no se limita a:
- architecture.md (decisiones y convenciones)
- ADRs (razones detrás de decisiones)
- .cursorrules / copilot-instructions.md (reglas para AI tools)
- README actualizado (entry point)
- Convenciones de naming documentadas
- Estructura de proyecto documentada

El orden importa: architecture.md primero. Es el 80/20. Lo demás viene después.

---

## Ejemplos concretos de documentación útil

### Fragmento de architecture.md (Angular enterprise)

```
## Stack
- Angular 18 (standalone components, signals)
- Nx monorepo
- Module Federation para microfrontends
- NgRx SignalStore para estado local
- Servicios Facade como interfaz entre componentes y estado

## Convenciones
- Servicios: {Feature}{Tipo}Service (ej: UserNotificationFacadeService)
- Componentes: {Feature}{Tipo}Component (ej: UserProfileEditComponent)
- Carpeta por feature: libs/{domain}/{feature}/
- Tests: .spec.ts junto al archivo, describe basado en método público
- No usar herencia en servicios. Composición siempre.
- No usar BehaviorSubject. Usar signals.

## Patterns prohibidos
- No subscribe() manual. Usar async pipe o toSignal()
- No servicios god (>300 líneas) — dividir en facade + domain services
- No imports relativos entre libs. Siempre path aliases.
```

Con eso, un LLM genera servicios que parecen escritos por alguien del equipo.

### Fragmento de architecture.md (.NET API)

```
## Stack
- .NET 8, Minimal APIs
- Vertical Slice Architecture (no Clean Architecture)
- MediatR para commands/queries
- FluentValidation para validación
- Result pattern (no exceptions para flujo de negocio)

## Convenciones
- Un archivo por endpoint: Features/{Feature}/{Action}.cs
- Cada feature folder contiene: Endpoint, Handler, Request, Response, Validator
- Naming: {Action}{Entity}Endpoint (ej: CreateInvoiceEndpoint)
- Error responses: ProblemDetails RFC 7807 siempre
- No repositories genéricos. DbContext directo en handlers.

## Patterns prohibidos
- No servicios genéricos CRUD. Cada endpoint es explícito.
- No AutoMapper. Mapping manual en handlers.
- No IRepository<T>. DbContext inyectado directamente.
```

### Fragmento de pipeline conventions (Azure DevOps)

```
## Pipeline conventions
- Template principal: templates/build-and-deploy.yml
- Stages: build → test → deploy-dev → deploy-staging → deploy-prod
- Variables: Azure Key Vault linked, prefix por entorno (DEV_, STG_, PROD_)
- Naming: pipeline-{app}-{tipo}.yml (ej: pipeline-web-app-ci.yml)
- Triggers: CI en main/develop. CD manual en producción.
- Approvals: pre-deployment approval obligatorio en staging y prod.
```

---

## Errores comunes que observo

1. **El equipo prueba AI, funciona mal, culpa a la herramienta.** No es la herramienta. Es la falta de contexto. Pero es más fácil decir "Copilot no sirve" que invertir 2 horas en escribir convenciones.

2. **"Ya tenemos documentación"** — sí, un Confluence de 200 páginas desactualizado que nadie lee. Eso no es contexto útil para AI. Un architecture.md de 50 líneas actualizado vale más.

3. **El architect que documenta decisiones pero no convenciones.** Los ADRs están bien, pero si no documentas naming, estructura y patterns concretos, la IA no puede generar código consistente.

4. **Copy-paste de prompts entre proyectos.** Un "mega prompt" que funcionó en el proyecto A no funciona en el proyecto B porque el contexto es diferente. Pero la gente no entiende por qué.

5. **Invertir en AI tooling sin invertir en AI-readiness del código.** Es como comprar un Tesla y no tener cargador en casa. El coche es increíble. El cargador es tu architecture.md.

6. **Confundir "documentación" con "documentación consumible por AI".** Un diagrama en Miro no es contexto para un LLM. Un PDF de 50 páginas tampoco. Un archivo .md en la raíz del repo SÍ lo es.

---

## Objeciones que he escuchado (literalmente)

"No tenemos tiempo de documentar." → Pero sí tienen tiempo de corregir el código que genera la IA. Irónicamente, el tiempo que "ahorran" no documentando lo gastan corrigiendo outputs.

"Si los modelos mejoran esto no hará falta." → Llevan 3 años diciendo esto. Los modelos HAN mejorado enormemente. Pero siguen sin poder adivinar que tu equipo usa facade services o que tu pipeline tiene stages custom. Los modelos mejoran en generalización. Tu proyecto no es general.

"Es que mi proyecto es muy complejo para documentar." → No necesitas documentar todo. 30 líneas con tus 5 convenciones principales y tus 3 patterns prohibidos ya marcan una diferencia brutal. El 80/20.

"Eso lo sabe todo el equipo ya." → ¿Y cuándo entra alguien nuevo? ¿Y cuando la IA necesita saberlo? El conocimiento que "todo el mundo sabe" es invisible hasta que necesitas que un no-humano lo use.

"Nuestro código ya es limpio y auto-documentado." → El código muestra QUÉ y CÓMO. No muestra POR QUÉ ni QUÉ OTRAS OPCIONES se descartaron. La IA necesita el por qué para no sugerir las opciones descartadas una y otra vez.

---

## Contraargumentos que debo incluir (honestidad intelectual)

Los prompts SÍ importan cuando:
- Necesitas un formato de output específico
- Estás pidiendo algo fuera del dominio del proyecto (investigación, brainstorming)
- Refinando un resultado que ya está al 80%
- Trabajando con código genérico sin contexto de proyecto (scripts, utils)

No todo se soluciona con architecture.md:
- El contexto en context window tiene límites (tokens)
- Documentación desactualizada es peor que no tener documentación
- Un equipo que no mantiene la documentación no va a beneficiarse
- Para proyectos personales pequeños el esfuerzo puede no justificarse

El artículo NO debe decir:
- "Los prompts son inútiles" → Falso y arrogante
- "Solo necesitas architecture.md" → Simplista
- "Esto resuelve todos los problemas con AI" → Hype que quiero evitar

Posición real: Contexto > Prompts en importancia relativa. No uno u otro. Prioridad.

---

## El argumento económico (para convencer a management)

Si un developer interactúa con AI 20 veces al día.
Si cada interacción sin contexto requiere 3 minutos extra de corrección.
20 × 3 = 60 minutos perdidos al día por developer.
Equipo de 8: 8 horas perdidas al día.
Mes laboral (22 días): 176 horas.
A €80/hora average: €14.080/mes en productividad perdida.

Un architecture.md se escribe en 2-4 horas y reduce esas correcciones en un 50-70%.

ROI: primera semana.

Esto NO lo voy a incluir literalmente — pero la idea de "inversión mínima, retorno masivo" debe estar implícita.

---

## La perspectiva del reverse proxy / infraestructura

Algo que nadie menciona: la IA es especialmente mala con configuración de infraestructura sin contexto.

Un Nginx config para reverse proxy de microfrontends Angular NO es genérico. Tiene:
- Locations específicos por microfrontend
- Headers de seguridad custom
- Proxy_pass a servicios internos con naming específico
- Caching rules por tipo de asset
- Fallback routes para SPA

Sin documentar esas convenciones, pedirle a un LLM "genera un nginx config para nuestro proyecto" produce nginx.conf de tutorial, no de producción.

Lo mismo con APIM policies. Son XML con lógica custom. Inbound, backend, outbound sections con transformaciones específicas de tu API. No existe documentación pública de TU caso. Solo tu architecture.md puede proporcionar ese contexto.

---

## Lo que realmente ha cambiado con AI

Antes de AI, la falta de documentación tenía costes "suaves":
- Onboarding más lento
- Decisiones inconsistentes
- Conocimiento perdido cuando alguien se va

Con AI, la falta de documentación tiene costes "duros" y medibles:
- Output de AI inutilizable
- Tiempo perdido corrigiendo
- Frustración ("esto no funciona")
- Falta de adopción ("Copilot no sirve para nuestro proyecto")

La IA no ha creado un problema nuevo. Ha hecho visible un problema invisible.

---

## Posibles cierres del artículo (brainstorming)

- "El próximo prompt que escribas va a ser exactamente igual de bueno que siempre. Pero si antes escribes un architecture.md, el resultado va a ser radicalmente diferente."
- "La era del prompt engineering está terminando. La era del context engineering está empezando. Y empieza con un archivo."
- "Cien prompts mágicos optimizan cien preguntas. Un architecture.md optimiza todas las respuestas."
- "La ventaja competitiva de tu equipo con AI no está en qué modelo usáis. Está en qué contexto le dais."
- "El mejor prompt del mundo no puede compensar un proyecto sin contexto. Pero un buen contexto hace innecesario el prompt perfecto."

---

## Lo que NO quiero que sea este artículo

- No quiero sonar como alguien que odia prompt engineering. Quiero reposicionar, no atacar.
- No quiero que sea un tutorial de "cómo escribir architecture.md". Eso es otro artículo.
- No quiero dar la lista completa de qué incluir en el archivo. Solo lo suficiente para que se entienda el concepto.
- No quiero parecer vendedor de nada. Es un artículo de opinión fundada, no un pitch.
- No quiero usar la palabra "revolutionary" ni "game-changer" ni nada de ese lenguaje hype.
- No quiero citar estudios vagos ni estadísticas inventadas. Si no tengo el dato exacto, uso la lógica.

---

*Notas vivas. Se van añadiendo hasta el momento de la escritura.*