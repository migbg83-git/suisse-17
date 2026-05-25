---
title: Qué documentación necesita realmente un LLM
slug: documentacion-necesita-llm
description: No toda la documentación aporta valor. Qué información merece ser capturada y cuál puede inferirse.
cluster: Documentation
date: 2026-05-21
readingTime: 11
featured: true
---
# Qué documentación necesita realmente un LLM

Un equipo de doce personas decide que va a mejorar sus resultados con IA. Crean un canal en Teams: "AI context docs." En las siguientes dos semanas producen cuarenta páginas de documentación: cómo funciona Angular signals, cómo se configura HttpClient con interceptors, patrones de inyección de dependencias en .NET, qué es un middleware, cómo funcionan los variable groups en Azure DevOps.

Lo meten todo en un context file. Cuarenta páginas. Tres mil palabras.

Los resultados con IA no mejoran.

La IA sigue generando servicios con el naming incorrecto. Sigue poniendo archivos en carpetas que no corresponden. Sigue ignorando que el equipo usa facade services y generando servicios planos. Sigue proponiendo imports cruzados entre dominios que no deberían comunicarse directamente.

Lo que ese equipo documentó, el modelo ya lo sabía. Angular signals está en la documentación oficial que el modelo procesó durante su entrenamiento. HttpClient está en cien mil tutoriales. El patrón de middleware en .NET está en cada curso de Pluralsight transcrito y cada respuesta de Stack Overflow indexada.

Lo que el equipo no documentó — y lo que habría cambiado todo — eran cinco líneas: por qué usan facade services, cuál es su convención de naming, qué dominios no pueden importar de qué otros dominios, y por qué no cachean tokens en el servicio de autenticación.

Cinco líneas. No cuarenta páginas.

El problema nunca fue cantidad de documentación. Fue dirección.

---

## El criterio que falta

Hay una pregunta que resuelve el 90% de las dudas sobre qué documentar para un LLM:

**¿Existe esta información en internet?**

Si la respuesta es sí — en documentación oficial, en tutoriales, en repos públicos, en Stack Overflow — el modelo probablemente ya la conoce. Documentarla es redundante. Estás ocupando contexto con información que el modelo tiene de serie.

Si la respuesta es no — si esa información solo existe en tu equipo, en tus decisiones, en tu historia organizativa — entonces el modelo la necesita de ti. Porque no hay otra forma de obtenerla.

Es un criterio simple pero sus implicaciones son profundas. Cambia completamente lo que vale la pena documentar.

No documentes Angular. Documenta tu forma de usar Angular.

No documentes .NET. Documenta por qué vuestro equipo usa .NET de esa manera.

No documentes qué es un pipeline de Azure DevOps. Documenta por qué el vuestro está estructurado así y no de otra forma.

El modelo sabe qué es un interceptor. No sabe que en tu proyecto los interceptors siguen un patrón específico con retry logic custom porque el gateway de APIM tiene un timeout de 30 segundos que fuerza esa decisión.

El modelo sabe qué es clean architecture. No sabe que en tu monorepo la separación entre dominios existe por una razón de negocio específica — que el dominio de pagos no puede acoplarse al de usuarios porque regulación financiera exige que sean desplegables de forma independiente.

El modelo sabe cómo funciona Nginx. No sabe que vuestro reverse proxy tiene una configuración particular para los microfrontends porque hubo un problema de CORS en producción que tardasteis dos días en resolver y la solución fue una cabecera custom en un location block específico.

Todo eso es información exclusiva. Solo existe en tu equipo. Y es exactamente lo que el modelo necesita para pasar de generar código genérico a generar código que funcione en tu proyecto.

---

## Lo que el LLM ya sabe

Creo que muchos equipos enterprise subestiman lo que los modelos de lenguaje ya entienden. No lo digo como opinion — lo digo como observación repetida en proyectos reales.

Los LLMs han sido entrenados con millones de repositorios públicos. Han procesado la documentación oficial completa de Angular, React, Vue, .NET, Spring, Node. Han visto miles de implementaciones de cada patrón. Han leído Stack Overflow entero. Han procesado cada tutorial, cada curso transcrito, cada blog post técnico con suficiente visibilidad.

¿Qué significa esto en la práctica?

**Frameworks y lenguajes:** El modelo entiende lifecycle hooks, dependency injection, routing, state management, reactive patterns, testing strategies — en cada framework mainstream. No necesitas explicarle qué es un `WritableSignal` en Angular o cómo funciona un `IServiceCollection` en .NET. Lo sabe. Probablemente mejor que la mayoría de developers junior de tu equipo, porque ha visto más implementaciones diversas que cualquier persona individual.

**Patrones de diseño:** SOLID, DDD, CQRS, Event Sourcing, microservices, repository pattern, mediator, facade, strategy — los patrones comunes están incorporados como conocimiento base. El modelo sabe qué es un facade service. Lo que no sabe es por qué TÚ elegiste facade services en vez de otra opción.

**APIs y librerías públicas:** Si una librería tiene más de quinientas estrellas en GitHub, el modelo la conoce. APIs de Azure, AWS, GCP — procesadas extensivamente. Nginx, Redis, Docker, Kubernetes — conoce las configuraciones estándar, los flags, las opciones. No necesitas copiar documentación oficial en tu context file. Es redundancia pura.

**Best practices genéricas:** Todo lo que aparece en los primeros resultados de "best practices [technology]" en Google ya forma parte del conocimiento base del modelo. Error handling patterns comunes, security headers, CORS configs, CI/CD pipelines estándar, Dockerfile best practices.

Hay un test práctico: Haz una pregunta genérica sobre tu stack al modelo sin darle ningún contexto de tu proyecto. Si la respuesta es correcta — y en frameworks maduros lo será en el 90% de los casos — no necesitas documentar eso. El modelo ya lo tiene.

Lo que esto implica es incómodo pero necesario: si tus cuarenta páginas de documentación repiten cosas que el modelo ya sabe, no solo son inútiles — son activamente dañinas. Ocupan espacio en la context window. Compiten con la información que sí importaría. El modelo no distingue entre tus treinta páginas de tutorial Angular redundante y tus cinco líneas de convenciones críticas. Procesa todo con el mismo peso. Y si las cinco líneas importantes se diluyen entre treinta páginas de ruido, el resultado se degrada.

Menos documentación correcta supera a más documentación genérica. Siempre.

---

## Lo que el LLM no puede inferir

Ahora, la otra cara. Si el modelo ya sabe todo lo genérico — ¿qué es lo que no sabe y nunca podrá saber sin tu ayuda?

Hay seis categorías de información que son exclusivas de tu organización. No existen en ningún dataset de entrenamiento. No se pueden deducir del código. No están en ningún tutorial. Solo tu equipo las conoce. Y son exactamente lo que separa un output que pasa code review de uno que se borra inmediatamente.

### 1. Decisiones arquitectónicas

El por qué detrás de tu estructura. No el qué — el por qué.

El modelo puede ver en tu codebase que usas facade services. Puede ver que tu monorepo tiene una estructura de dominios. Puede ver que no usas NgRx global. Lo que no puede ver es por qué.

¿Por qué facade services? Porque con doce microfrontends necesitáis una interfaz pública estable entre dominios, y los domain services cambian con demasiada frecuencia para ser consumidos directamente por otros equipos.

¿Por qué SignalStore local y no NgRx global? Porque evaluasteis NgRx en 2023 y el overhead de boilerplate no se justificaba para el tamaño de vuestros features. El estado es local a cada microfrontend por diseño.

¿Por qué vertical slices en el dominio de pagos pero layers en el dominio de usuarios? Porque pagos tiene requisitos de compliance que exigen trazabilidad por operación, y vertical slices facilitan el audit trail.

Sin el por qué, la IA propone alternativas que el equipo ya evaluó y rechazó. Sugiere NgRx "como mejora." Sugiere inyección directa de domain services "para simplificar." Soluciones que ya descartasteis hace un año por razones concretas que solo existen en la memoria de quien tomó la decisión.

Una línea documentando la razón evita meses de sugerencias irrelevantes.

### 2. Restricciones de negocio

Reglas que no vienen de la tecnología sino del negocio. El modelo genera soluciones técnicamente perfectas que violan constraints que ni siquiera son técnicos.

"No podemos usar CDN externas porque regulación bancaria prohíbe que datos de clientes pasen por nodos fuera de la EU." La IA deja de sugerir Cloudflare como optimización de assets.

"El servicio de notificaciones no puede hacer más de 100 requests por minuto al provider de SMS porque nuestro contrato con el vendor tiene ese límite." La IA deja de proponer batch sends masivos.

"No podemos cambiar el formato de respuesta de la API de partners porque hay tres integradores externos que dependen de ese formato hasta renovación de contrato en 2027." La IA deja de sugerir "mejorar" el response schema.

Cada una de estas restricciones es invisible en el código. No se puede inferir leyendo la implementación. Un developer nuevo las descubriría en su tercera semana cuando alguien le dice "eso no se puede hacer por X." La IA no tiene esa tercera semana. Necesita la restricción documentada.

### 3. Convenciones internas

Todo lo que se aprende por code review y tradición oral.

Tu naming pattern específico: `{Feature}{Tipo}Service` — no `{Tipo}Service`. Tu estructura de carpetas: `libs/{domain}/{feature}/services/` — no `src/services/`. Tu patrón de error handling: wrappear HTTP calls con `handleApiError()` del shared — no try/catch manuales. Tu estilo de testing: describe por método público, mocks con ng-mocks, assertions con helper custom.

Nada de esto está en un `.eslintrc` que lo fuerce. No hay un linter que lo detecte. Existe solo en la práctica del equipo. Se corrige en code reviews. Se transmite de senior a junior en pair programming. Se absorbe por repetición.

El modelo sigue las convenciones más comunes de internet. Las de tu equipo son invisibles para él. Y por eso genera servicios que se llaman `NotificationService` en vez de `UserNotificationFacadeService`, que van en `src/services/` en vez de `libs/notifications/user/services/`, y que usan try/catch en vez de tu wrapper custom.

Cinco líneas de convenciones documentadas. Eso es lo que separa "la IA no entiende nuestro proyecto" de "outputs que pasan code review."

### 4. Límites entre dominios

Qué módulo es responsable de qué. Qué imports están permitidos. Qué datos cruzan boundaries y cuáles no.

En un monorepo Nx con microfrontends, estas reglas son críticas. `libs/domain-payments` no puede importar de `libs/domain-users`. La comunicación entre dominios es a través de `shared/contracts`. Los componentes de `shared/ui` no pueden tener lógica de negocio. Lo que está en `feature/` es privado a ese dominio.

Todos los del equipo saben esto. Nadie lo ha escrito. Y la IA viola estos boundaries en cada segundo output porque no tiene forma de conocer reglas que no están escritas ni enforced por tooling.

Cada violación que la IA comete es un señalador de que ese boundary existe solo en las cabezas del equipo. Es información que debería ser explícita no solo para la IA — para cualquier persona nueva.

### 5. Razones históricas

Por qué algo se hizo de una forma que parece subóptima. Los bugs que condicionan decisiones actuales. Las migraciones incompletas. Los workarounds que no se pueden eliminar.

El servicio de auth no cachea tokens. Parece ineficiente. Un developer nuevo — o una IA — lo ve y piensa "optimización obvia." Pero hay un incident de 2024 donde un token revocado permanecía activo en caché y causó acceso no autorizado durante cuatro horas. Postmortem. Decisión explícita: never cache auth tokens en este servicio.

¿Dónde está eso documentado? En ningún sitio. En la cabeza del senior que vivió el incident y en un hilo de Slack archivado.

La IA sugiere cachear. Alguien implementa la sugerencia. El bug vuelve. Y entonces: "Esto ya pasó una vez. ¿Nadie se acordaba?"

Una línea. "Auth tokens: no cache. Referencia: incident #347 (2024), token revocado activo en caché." Una línea que evita repetir un problema de producción.

### 6. Excepciones organizativas

Reglas que aplican a todo menos a un caso concreto — y por qué.

"Todos los servicios usan .NET 8 excepto payment-gateway que permanece en .NET 6 hasta Q2 2027 por certificación PCI-DSS pendiente." La IA deja de sugerir migrar ese servicio y deja de generar código que asuma .NET 8 en ese contexto.

"Todos los dominios siguen clean architecture excepto legacy-reporting que es vertical slices porque se migró parcialmente de un monolito y no se completó por deprioritización de negocio." La IA no intenta "arreglar" la inconsistencia.

"Todos los pipelines usan el template estándar excepto el de mobile-bff que tiene stages adicionales por requisitos de firma de Apple." La IA genera YAML correcto para cada contexto.

Cada excepción tiene una razón. Si la razón no está documentada, la IA — y los nuevos empleados — intentarán "normalizar" la excepción. Lo cual a veces rompe cosas de formas costosas.

---

## El contraste en acción

Quiero hacer tangible la diferencia entre documentar lo que el modelo ya sabe y documentar lo que solo tu equipo conoce. Tres situaciones que he visto repetirse.

**El equipo que documentó Angular y no mejoró nada.**

Un equipo escribe una guía de treinta páginas para dar contexto a la IA. Lifecycle hooks. Cómo funciona DI. Cómo crear components con standalone API. Routing con lazy loading. Testing con TestBed.

Todo eso lo sabe el modelo. Mejor que la guía, de hecho, porque el modelo ha visto más variantes y más ejemplos.

Los outputs de AI siguen siendo mediocres. No porque el modelo no entienda Angular — porque no entiende ESTE proyecto Angular.

Solución: eliminan las treinta páginas. Escriben veinte líneas:

- Patrón: facade services como interfaz pública. Domain services internos.
- Naming: `{Feature}{Tipo}Service`
- Estado: signals, no BehaviorSubject.
- Ubicación: `libs/{domain}/{feature}/services/`
- Prohibido: subscribe() manual. Servicios >300 líneas. Imports entre dominios.
- Testing: describe por método, ng-mocks, assertions con `expectSignal()` helper.

Los outputs empiezan a pasar code review. No porque el modelo haya mejorado. Porque ahora tiene la información que le faltaba — la información exclusiva del equipo.

Veinte líneas reemplazaron treinta páginas. Y funcionaron mejor.

**La API .NET donde cinco líneas cambiaron todo.**

Wiki de Confluence de quince páginas. "Cómo se desarrollan APIs en nuestro equipo." Incluye: qué es un Controller, cómo funciona el routing en ASP.NET, qué es middleware, cómo se configura Entity Framework. El modelo conoce cada palabra de ese contenido.

Los controllers generados por la IA son técnicamente correctos según las prácticas estándar de .NET. Pero no siguen las ocho convenciones del equipo. Naming de endpoints diferente. Middleware en orden diferente. Format de error responses diferente. Rate limiting por API key en vez de por usuario.

Solución: cinco líneas.

- Versionado: `/api/v{n}/{resource}`
- Naming: verbos en inglés, singular para GET item, plural para GET collection
- Error format: siempre `ProblemDetails` con correlationId del middleware
- Rate limiting: por API key (no por user), header `X-Api-Key`
- Orden middleware: Correlation → Auth → RateLimit → Validation → Handler

Controllers generados listos para PR. Cinco líneas. No quince páginas.

**El pipeline que solo existía en una cabeza.**

Pipeline de Azure DevOps. Templates custom reutilizables. Variables por entorno en variable groups con naming específico. Stages condicionales. Deployment gates con approval manual para producción. Un sistema sofisticado construido durante año y medio por el DevOps lead.

La IA genera YAML genérico de Azure DevOps — correcto según documentación oficial, inútil para este equipo. No usa los templates. No referencia los variable groups. No sigue la estructura de stages.

El equipo dice "la IA no entiende Azure DevOps avanzado." Corrección: la IA entiende Azure DevOps perfectamente. Lo que no entiende es vuestro setup, porque vive exclusivamente en la cabeza de una persona.

Solución: diez líneas.

- Templates: `templates/build-{platform}.yml`, `templates/deploy-{env}.yml`
- Variable groups: `vars-{service}-{environment}` (ej: `vars-api-production`)
- Stages: Build → Test → Deploy-Dev → Deploy-Staging → Deploy-Prod
- Conditions: Deploy-Prod solo en main, requiere approval de @devops-leads
- Secrets: siempre de Key Vault, nunca inline. Referencia: `$(KeyVault-{service})`

La IA genera YAML consistente con el setup. Pero lo revelador fue el efecto secundario: un developer junior leyó esas diez líneas y entendió la estructura del pipeline por primera vez. Llevaba seis meses en el equipo y nunca había entendido la lógica completa — porque nadie se la había explicado fuera de un "mira cómo está hecho este otro."

Esas diez líneas no solo ayudaron a la IA. Ayudaron al equipo.

---

## Documentación como infraestructura

Hay algo que quiero explicitar porque creo que es el cambio de mentalidad más importante de este artículo.

La documentación de la que hablo no es burocracia. No es el acto de documentar por cumplir un proceso. No son esas wikis de Confluence que nadie lee y que se desactualizan en dos semanas. No es lo que un gestor de calidad pide para cumplir una ISO.

Es infraestructura.

Del mismo modo que un equipo tiene infraestructura de CI/CD, infraestructura de monitoring, infraestructura de testing — el conocimiento explícito del equipo es infraestructura operativa. Es lo que permite que las herramientas funcionen, que las personas nuevas sean productivas, y que las decisiones pasadas no se repitan.

Piénsalo así: nadie cuestiona que necesitas pipelines de CI/CD. Nadie dice "es burocracia tener tests automatizados." Son infraestructura que permite que el equipo opere. El conocimiento explícito — documentado de forma concisa, mantenible, ubicada junto al código — es exactamente eso. Infraestructura que permite que el equipo opere. Que la IA opere. Que cualquier persona nueva opere.

Y como toda infraestructura, tiene mantenimiento. Las decisiones cambian. Las convenciones evolucionan. Las excepciones se resuelven. Un architecture.md no es un documento estático que se escribe una vez y se archiva. Es un artefacto vivo que refleja el estado actual del conocimiento del equipo. Se actualiza cuando se toma una decisión nueva. Se corrige cuando algo cambia. Se versiona como se versiona el código.

El coste de mantener esto es mínimo — si la documentación es concisa. Veinte líneas se actualizan en cinco minutos. Cuarenta páginas no se actualizan nunca. El formato importa: breve, estructurado, declarativo, y ubicado donde se consulta (junto al código, no en un sistema externo que nadie abre).

---

## La ventaja que no se puede copiar

Todo esto tiene una implicación estratégica que va más allá de productividad individual.

En un futuro muy próximo, todos los equipos tendrán acceso a los mismos modelos. Las mismas herramientas. Las mismas capacidades de contexto. Los mismos agentes. La tecnología será commodity.

Lo que no será commodity es el conocimiento explícito de cada organización. Las decisiones documentadas. Las convenciones formalizadas. Las razones históricas registradas. Los boundaries definidos.

La calidad del contexto organizacional es una ventaja competitiva que no se puede copiar. No es un modelo mejor — es tu información, tu historia, tus decisiones, hechas explícitas de forma consumible por herramientas y personas.

Los equipos que mejor trabajarán con IA no serán los que tengan mejores prompts. No serán los que usen la herramienta más cara. No serán los que hayan hecho más cursos de "AI para developers."

Serán los que tengan mejor conocimiento explícito.

Los que hayan transformado conocimiento tácito — en cabezas de personas, en hilos de Slack, en tradición oral — en conocimiento explícito: documentado, versionado, mantenido, consumible tanto por herramientas como por personas.

Esa transformación es la que produce ventaja compuesta. Cada decisión documentada mejora cada interacción futura con IA. Cada convención hecha explícita reduce fricciones con cada herramienta nueva. Cada razón histórica registrada evita repetir errores con cada persona nueva — sea humana o sea un modelo.

Y esa ventaja se acumula. Cada semana que pasa con conocimiento explícito es una semana de mejores outputs, onboarding más rápido, menos errores repetidos. Los equipos que empiezan hoy llevan ventaja mañana. Y la ventaja se amplifica con cada mejora tecnológica — porque cada modelo nuevo extrae más valor de un contexto rico.

---

## El valor que trasciende a la IA

Hay algo que quiero decir claramente porque es importante: el valor real de hacer explícito el conocimiento de tu equipo no es ayudar a la IA.

La IA es el catalizador. Es la razón por la que ahora hay urgencia. Pero los beneficios son mucho más amplios.

**Onboarding.** Una persona nueva que lee veinte líneas de decisiones clave y convenciones del equipo empieza a producir código alineado desde la primera semana — en vez de necesitar cuatro semanas de ósmosis y correcciones en PRs. He visto reducirse el tiempo de onboarding a la mitad con un archivo de una página.

**Bus factor.** Si las cinco decisiones más críticas del proyecto viven en la cabeza de un senior y ese senior se va — se va con él una porción del proyecto que es irrecuperable. Esas mismas cinco decisiones documentadas sobreviven a las personas. El conocimiento pertenece al equipo, no a individuos.

**Consistencia.** Convenciones explícitas producen código consistente automáticamente. No por lint rules — por claridad. Cuando todo el mundo sabe cuál es el patrón correcto (porque está escrito, no porque lo aprendió por repetición), las inconsistencias desaparecen sin esfuerzo de enforcement.

**Decisiones futuras.** Saber por qué se tomó una decisión permite evaluarla cuando el contexto cambia. "Elegimos X por Y razón en Z contexto." Si Z ya no aplica, puedes reconsiderar X con información. Sin el por qué documentado, cambiar decisiones es navegar a ciegas — y el equipo tiende a no tocar nada "por si acaso."

La IA ha puesto un coste inmediato y visible a la falta de conocimiento explícito. Es el incentivo nuevo. Pero la inversión beneficia todo lo demás simultáneamente. Documentas para la IA y de paso mejoras onboarding, reduces bus factor, aumentas consistencia y facilitas evolución arquitectónica.

Es una inversión con múltiples retornos. La IA es solo el más visible y urgente.

---

## El criterio en una frase

Si necesitas una regla simple para decidir qué documentar:

**Si puedes encontrar esa información en Google, el modelo ya la tiene. Si solo existe en tu equipo, el modelo la necesita de ti.**

Cuando dudes: pregunta "¿podría alguien de fuera del equipo, leyendo solo el código y documentación pública, saber esto?" Si no — documentar. Si sí — no perder el tiempo.

No es "documenta todo." No es "documenta nada." Es: documenta lo exclusivo. Lo que solo tu organización conoce. Lo que no existe en ningún dataset de entrenamiento. Lo que hace que tu proyecto sea tu proyecto y no un tutorial genérico.

Y empieza por lo que la IA falla consistentemente. Cada output mediocre es un señalador de información que debería ser explícita y no lo es. Si la IA genera servicios con el naming incorrecto — documenta tu naming. Si viola boundaries entre módulos — documenta los boundaries. Si sugiere patrones que descartasteis — documenta la razón por la que se descartaron.

La IA te está diciendo exactamente qué documentar. Solo necesitas escuchar.

---

## Siguiente paso

Si esta serie de artículos está resonando con lo que observas en tu equipo, cada semana publico análisis prácticos sobre cómo los equipos enterprise pueden trabajar mejor con IA. Sin hype. Sin marketing. Diagnósticos reales y soluciones concretas para arquitectos y tech leads que construyen sistemas complejos.

Si quieres ver la estructura concreta del archivo que aplica este criterio — qué secciones incluir, qué formato funciona, cómo se mantiene — lee "Por qué un architecture.md vale más que cien prompts mágicos."

Si antes de documentar quieres diagnosticar dónde están las deudas más costosas de tu proyecto, lee "La deuda técnica que la IA está empezando a revelar."

Ahora sabes qué documentar. Ahora sabes qué no documentar. El criterio es simple. La ventaja de aplicarlo es compuesta. Y el primer paso es pequeño — veinte líneas que solo tu equipo conoce.

---

*Publicado: Mayo 2026*