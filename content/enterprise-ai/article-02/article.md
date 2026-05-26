---
title: La deuda técnica que la IA está empezando a revelar
slug: deuda-tecnica-ia-revela
description: La IA no crea deuda técnica, la hace visible. Cómo los sistemas de IA funcionan como un audit involuntario de la calidad del conocimiento explícito en proyectos enterprise.
cluster: Technical Debt
date: 2026-02-10
readingTime: 15
featured: true
tags:
  - technical debt
  - AI
  - documentation
  - enterprise
  - knowledge management
series: Context Engineering Essentials
---

# La deuda técnica que la IA está empezando a revelar

La reunión de retro dura veinte minutos. En algún momento, alguien dice la frase: "Es que Copilot no sirve para un proyecto como el nuestro." Cabezas asintiendo. El tech lead añade que probaron Cursor y "tampoco entiende nuestras convenciones." El engineering manager toma nota: *AI tools — revisar inversión Q3*. Nadie pregunta por qué. El diagnóstico queda establecido: la IA no funciona para enterprise.

He escuchado esta conversación — con variaciones menores — en cinco proyectos enterprise diferentes en el último año. Angular con microfrontends. .NET con APIM. Monorepos Azure DevOps con pipelines custom. En cada caso, el veredicto era el mismo: la herramienta no funciona.

En ninguno de los cinco el problema era la herramienta.

---

## Lo que la IA no puede compensar

Hay algo que observo repetidamente en proyectos enterprise con más de dos años de vida y equipos de más de diez personas: un porcentaje enorme de la información necesaria para trabajar en ese proyecto no está escrita en ningún sitio.

Las convenciones de naming. Las razones detrás de decisiones arquitectónicas. Los patrones que se usan y los que se descartaron. La separación de responsabilidades entre módulos. Las reglas de error handling. El uso específico de middleware. Cómo y por qué se estructuran los pipelines como se estructuran.

Nada de eso está documentado. Todo eso existe — pero existe en las cabezas de personas concretas. En la memoria institucional. En los code reviews pasados. En la tradición oral del equipo.

Los humanos compensan. Preguntan. Observan. Absorben por ósmosis. Un senior que lleva tres años en el proyecto sabe, sin consultar ningún documento, que no se toca la configuración del reverse proxy de producción porque hace dieciocho meses hubo un incident que tardaron cuatro horas en resolver. Un developer nuevo lo aprende en su tercera semana, cuando alguien se lo menciona de pasada en un PR review.

La IA no pregunta. La IA no absorbe. La IA no tiene tres semanas ni capital social para hacer preguntas tontas.

**Lo que la IA recibe es lo que está escrito. Y lo que no está escrito no existe para ella.**

Cuando dices "Copilot no entiende nuestro proyecto", lo que estás diciendo sin saberlo es: "nuestro proyecto tiene información crítica que no existe de forma explícita en ningún sitio." La IA no ha creado ese vacío. Lo ha hecho imposible de ignorar.

---

## El espejo

Me resulta útil pensar en la IA como un espejo.

La calidad del output de cualquier AI tool es un reflejo directo de la calidad del contexto explícito de tu proyecto. Si le pides que genere un interceptor Angular siguiendo tus convenciones y produce un interceptor genérico de tutorial, no es que la herramienta sea mala. Es que tus convenciones no están en ningún sitio donde ella pueda leerlas.

El output mediocre no es un fallo. Es un diagnóstico.

Antes de la IA, el coste de tener información implícita era difuso. Se manifestaba como onboarding lento — tres o cuatro semanas hasta que alguien nuevo "pillaba" las convenciones. Inconsistencias graduales entre lo que escribían los seniors y lo que escribían las incorporaciones recientes. Frustración sorda que nadie nombraba porque "siempre había sido así." Bus factor altísimo que solo preocupaba cuando alguien dejaba el equipo.

Costes reales, pero invisibles. Distribuidos. Normalizados.

Ahora los costes son inmediatos. Pides algo a la IA. El resultado es inutilizable. Tiempo perdido. Frustración concreta. Y lo que es más importante: visible para todo el equipo. Ya no es un coste difuso que se puede ignorar — es un output que no pasa code review, hoy, delante de todos.

La IA no creó el problema. Quitó la posibilidad de no verlo.

---

## Cinco tipos de deuda que la IA revela

Cuando hablo de lo que la IA está haciendo visible, no me refiero solo a deuda técnica en el sentido clásico. Hay al menos cinco tipos de deuda que se manifiestan cuando introduces herramientas de IA en un proyecto enterprise maduro. Están ordenados de más reconocible a más invisible — y los más dañinos son los que nunca se nombran.

### 1. Deuda técnica clásica

La que todos conocen. Código legacy. Abstracciones que se rompieron hace dos años y nadie arregló. Tres estilos diferentes de hacer lo mismo según la época en que se escribió.

¿Cómo la revela la IA? Si tu codebase tiene servicios Angular escritos con RxJS en 2021, con NgRx en 2023, y con signals en 2025, la IA genera un cuarto estilo que es un híbrido inconsistente de los tres — porque estadísticamente, ningún patrón domina. El modelo no sabe cuál es "el bueno", porque ninguno lo es de forma clara. La inconsistencia acumulada en el código produce inconsistencia amplificada en el output.

Antes: la inconsistencia era incómoda pero tolerable. Ahora: la inconsistencia se multiplica en cada interacción con AI.

### 2. Deuda de conocimiento

Esta es la que considero más dañina y la que menos se nombra.

Deuda de conocimiento es la diferencia entre lo que el código hace y por qué se hizo así. El código es visible. Las razones detrás del código son invisibles. Y la IA solo puede operar con lo visible.

Ejemplo concreto: un servicio .NET que gestiona autenticación con APIM no usa caché de tokens. Un developer nuevo — o una IA — lo mira y piensa "optimización obvia: añadir caché." Pero hay un motivo por el que no se usa caché. Hace dos años hubo un bug crítico con coherencia de datos cuando un token revocado seguía activo en caché durante la ventana de TTL. El equipo dedicó tres días a un postmortem y decidió explícitamente no cachear tokens en ese servicio.

¿Dónde está documentada esa decisión? En la cabeza del senior que lo vivió. En un hilo de Slack archivado que nadie buscará. En ningún sitio que la IA pueda leer.

La IA sugiere alegremente agregar caché. El developer junior implementa la sugerencia. El bug vuelve. Y entonces alguien dice: "Esto ya pasó. ¿Nadie lo recordaba?"

La deuda de conocimiento es esto: razones, constraints, contexto de negocio, lecciones aprendidas — todo lo que explica el por qué — que existe solo de forma tácita. Cada persona que deja el equipo se lleva una porción. Y ahora, cada interacción con IA expone exactamente cuánto de ese conocimiento nunca se hizo explícito.

### 3. Deuda de documentación

No hablo solo de ausencia de documentación. Hablo de algo peor: documentación que miente.

El README que dice "state management con Redux" cuando el equipo migró a SignalStore hace ocho meses. La wiki de Confluence que describe la arquitectura de la v1 que dejó de existir en 2024. El diagrama de C4 que muestra servicios que se fusionaron hace un año.

Una IA puede leer documentación. Si esa documentación está desactualizada, la IA la sigue fielmente. No tiene capacidad de dudar. No piensa "esto huele a desactualizado". Lee y actúa.

He visto un caso donde la IA generaba consistentemente código con un patrón obsoleto. El equipo culpaba al modelo. Tardaron dos semanas en descubrir que un README que nadie leía — pero que estaba en el contexto del IDE — describía convenciones de hace un año. La IA lo leía religiosamente. Era su fuente de verdad. Y esa fuente mentía.

Documentación desactualizada no es documentación neutral. Es documentación activamente dañina — y con IA en el workflow, dañina de formas concretas y repetibles.

### 4. Arquitecturas implícitas

En todo proyecto enterprise maduro hay una arquitectura real y una arquitectura documentada. Cuando hay suerte, se parecen. La mayoría de las veces, solo existe la real — y vive en la práctica cotidiana del equipo.

La separación entre `libs/shared/ui` y `libs/shared/utils` en un monorepo Nx. ¿Cuándo algo va en UI y cuándo en utils? Hay una lógica. Todos la respetan. Nadie la ha escrito.

El routing entre microfrontends y cómo se resuelve en el Nginx del entorno de staging versus producción. ¿Cuál es la regla? La gente que configuró los `location` blocks lo sabe. Los demás aplican por imitación.

Los boundaries entre dominios en un backend .NET: qué servicio puede llamar a cuál, qué datos cruzan boundaries y cuáles no. ¿Existe un diagrama? No. ¿Existe una regla? Sí — en las cabezas de quienes diseñaron la separación original.

La IA no tiene acceso a nada de esto. Genera código que viola boundaries silenciosamente. Mezcla responsabilidades entre módulos. Pone archivos en carpetas incorrectas. No porque sea mala herramienta — porque no hay nada que defina los límites de forma legible.

Cada violación de boundary que la IA comete es un señalador de que esa boundary no existe de forma explícita. Es incómodo. Pero es información.

### 5. Convenciones no documentadas

"Aquí lo hacemos así."

Naming patterns específicos. El formato exacto de los mensajes de commit. El patrón de error handling con un custom `ErrorHandler` que envuelve las HTTP calls de una forma particular. El estilo de testing: describe por método público, mocks con ng-mocks, assertions con un helper custom.

Nada de esto está en un `.eslintrc`. No hay un ADR que lo formalice. No hay un linter que lo fuerce. Se aprende por code review. Se corrige con comentarios en PRs. Se transmite de senior a junior en sesiones de pair programming.

La IA sigue las convenciones más comunes de internet. Las de tu equipo son invisibles para ella.

He visto equipos donde el patrón de error handling tardaba dos sprints en ser comprendido por una incorporación nueva. Dos sprints de correcciones en PRs, de "aquí hacemos esto diferente", de "mira cómo lo hace este otro servicio". Si un humano necesita dos sprints para absorber una convención tácita, ¿cómo esperas que la IA la adivine sin ningún input?

---

## Lo que he visto en proyectos reales

Esto no es teoría. Lo he visto repetirse en múltiples proyectos con un patrón tan consistente que ya es predecible.

**El monorepo Angular con microfrontends.** Equipo de quince personas. Seis microfrontends, shared libraries, un design system interno. La queja: "Copilot no respeta la separación entre dominios." Diagnóstico real: la separación entre dominios nunca se documentó. Existía por convención y se transmitía en los primeros PRs de cada nuevo developer. La IA generaba imports cruzados entre dominios porque no había nada — ni un archivo, ni un comentario, ni una regla de lint — que dijera que esos imports no podían existir.

Cuando el equipo escribió un documento de diez líneas describiendo los boundaries entre dominios, los outputs de AI mejoraron inmediatamente. No porque la herramienta hubiera cambiado. Porque la información existía por primera vez de forma legible.

**Los pipelines de Azure DevOps.** Templates custom reutilizables. Variables por entorno en variable groups específicos. Stages condicionales según el branch. Un sistema sofisticado construido durante año y medio por el DevOps lead. La IA generaba YAML genérico que no usaba los templates, no referenciaba los variable groups, no seguía la estructura de stages del equipo. El diagnóstico del equipo: "La IA no entiende Azure DevOps avanzado." Corrección: no hay nada que explique cómo funciona vuestro setup de pipelines. El DevOps lead lo lleva todo en la cabeza. Si mañana deja el equipo, no solo la IA estará perdida — el equipo entero lo estará.

**La API .NET con APIM.** Patrón de versionado de endpoints. Convención de naming de controllers. Middleware custom para correlación de requests. Políticas de APIM con fragmentos compartidos. Doce convenciones que no estaban escritas sino que se transmitían por code review. La IA generaba controllers técnicamente correctos pero que no seguían ninguna de las doce reglas. El equipo corregía manualmente — igual que corregía a cada nueva incorporación durante sus primeras semanas. Exactamente el mismo tipo de correcciones. Exactamente los mismos errores. La IA estaba experimentando el onboarding fallido que el equipo había normalizado.

El patrón es siempre el mismo: lo que parece un fallo de la IA es un señalador directo de información que no existe de forma explícita. Y lo revelador es que en cada caso, los humanos del equipo compensaban esa ausencia — silenciosamente, inconscientemente, a un coste que nadie medía porque estaba distribuido entre onboarding lentos, correcciones en PRs y reuniones de alineación.

---

## La IA como nuevo empleado infinitamente literal

Hay una analogía que me resulta útil. La IA funciona como un nuevo empleado con dos características extremas: es infinitamente literal e infinitamente incansable.

Un developer nuevo llega al equipo y durante sus primeras semanas comete errores que revelan las convenciones tácitas: usa el naming incorrecto, pone archivos en la carpeta equivocada, usa un patrón obsoleto. El equipo corrige en PRs. El developer absorbe. En un mes, ya "lo pilla."

La IA comete exactamente los mismos errores. Pero no aprende entre interacciones (no de forma permanente, al menos). Y a diferencia del nuevo empleado, no tiene la discreción de preguntar a un senior en un mensaje privado — su output es visible inmediatamente.

Lo que la IA expone es exactamente lo que un nuevo empleado descubriría si fuera extremadamente literal y no tuviera vergüenza de equivocarse en público. Cada error de la IA corresponde a una pieza de conocimiento tácito que el equipo nunca formalizó.

Y aquí está el insight incómodo: si tu equipo tarda cuatro semanas en hacer onboarding completo de un developer competente, tienes cuatro semanas de convenciones que no existen de forma explícita. Esas cuatro semanas son deuda de conocimiento pura. La IA simplemente te lo dice en la cara en vez de absorberlo en silencio.

---

## "Sí, pero..."

Si tu reacción a todo esto es alguna variación de "sí, pero en nuestro caso es diferente" — probablemente estás a punto de usar uno de los argumentos que escucho más frecuentemente. Son objeciones legítimas en su origen pero incorrectas en su conclusión.

**"La herramienta es limitada, no es culpa de nuestro proyecto."**

Sí. Las herramientas tienen limitaciones reales. Ventanas de contexto finitas, alucinaciones, desconocimiento de APIs recientes. Todo legítimo. Pero si la misma herramienta funciona de forma aceptable en un proyecto nuevo o bien documentado y produce basura en el tuyo, la variable diferencial no es la herramienta — es el estado de tu proyecto. Ambas cosas pueden ser ciertas simultáneamente: la IA tiene limitaciones Y tu proyecto tiene deuda de conocimiento. No es una u otra.

**"Siempre hemos funcionado así y no era un problema."**

Funcionabais. Pero no era gratis. El coste se manifestaba como: onboarding de tres a cuatro semanas en vez de una. Respuestas repetidas a las mismas preguntas en Slack. Inconsistencias graduales entre lo que escribía cada sub-equipo. Bus factor que nadie mencionaba pero todos temían cuando el senior hablaba de cambiar de trabajo. Eso no era ausencia de problema — era un problema distribuido e invisible. La IA no lo creó. Le quitó la invisibilidad.

**"Esto solo es una excusa para pedir tiempo de documentación."**

Entiendo la fatiga. La industria tiene un historial largo de iniciativas de documentación que producen wikis abandonadas de doscientas páginas que nadie consulta. Esto no es eso. No estoy hablando de documentar todo. Estoy hablando de hacer explícitas las diez o quince cosas que un senior de tu equipo tiene en la cabeza y que todo el equipo necesita — incluida la IA — para funcionar correctamente. Son veinte líneas. Cuarenta como mucho. Es inversión con ROI medible en días, no en meses.

**"No tenemos tiempo para resolver esta deuda."**

No es "resolverlo todo." Es diagnosticar qué deuda causa el 80% de los problemas con AI y abordar ese 20% primero. Si la IA genera consistently servicios con el patrón incorrecto, documentar el patrón correcto en cinco líneas resuelve el 80% del problema con una inversión de quince minutos. No estamos hablando de meses de refactoring. Estamos hablando de hacer explícito lo crítico.

Y hay un coste de no hacerlo: adopción fallida de AI hoy se traduce en desventaja competitiva mañana. Los equipos que resuelven esto ahora están acumulando ventaja compuesta cada semana.

---

## El audit involuntario

Quiero proponer un reframe que cambia la perspectiva de esto de "tenemos un problema" a "tenemos información."

Cada output mediocre de una AI tool es un diagnóstico gratuito. Te está diciendo, de forma concreta y señalable, exactamente qué le falta a tu proyecto para ser operable de forma eficiente — tanto por herramientas como por personas nuevas.

La IA genera un servicio con naming incorrecto → señalador de que tu convención de naming es implícita.
La IA viola un boundary entre módulos → señalador de que tus boundaries no están definidos de forma legible.
La IA sugiere un patrón que descartasteis → señalador de que la decisión de descartarlo no está registrada.
La IA genera un pipeline que no funciona → señalador de que vuestro setup de CI/CD vive en la cabeza de una persona.

Puedes seguir culpando a la herramienta. O puedes usar cada error como un scanner que te dice dónde están tus deudas más costosas.

Es como un análisis de sangre. Los números no crean las enfermedades. Pero una vez que los ves, puedes actuar. Ignorar los resultados no los cambia — solo te quita la posibilidad de actuar a tiempo.

Y lo poderoso de este reframe es que resolver la deuda que la IA señala no solo mejora la IA. Mejora todo lo demás:

- Onboarding más rápido (los nuevos leen lo mismo que la IA)
- Menos inconsistencias (las convenciones están explícitas, no en la memoria de alguien)
- Menor bus factor (el conocimiento sobrevive a las personas)
- Mejor calidad de código (estándares definidos y verificables)
- Discusiones de arquitectura más productivas (hay una base común documentada)

La IA es la excusa, no el objetivo. El objetivo real es transformar conocimiento tácito en explícito. La IA simplemente le ha puesto un coste inmediato y visible a no hacerlo.

---

## Nombrar el problema

Hay poder en nombrar las cosas.

"Deuda técnica" fue un concepto que transformó cómo hablamos de código imperfecto. Antes de que Ward Cunningham le diera nombre, las empresas simplemente acumulaban código problemático sin lenguaje para discutirlo o justificar su remediación. Nombrar "deuda técnica" dio a los equipos una herramienta retórica para negociar tiempo de mejora.

Creo que necesitamos el mismo tipo de nombramiento para lo que está pasando ahora. "Deuda de conocimiento" — la brecha entre lo que un proyecto necesita para ser operable y lo que está documentado de forma explícita. No es deuda técnica (el código puede ser bueno). No es deuda de documentación genérica (puede haber docs). Es específicamente la ausencia de conocimiento operativo crítico en forma explícita.

Una vez que puedes decir "tenemos deuda de conocimiento" en una conversación con tu equipo, con tu manager, con stakeholders — puedes empezar a abordarla. Sin nombre, el problema es difuso. Con nombre, se convierte en algo diagnosticable, priorizable y remediable.

Y la IA te está dando las métricas gratis. Cada output que no pasa code review por razones de contexto es un dato más sobre el tamaño de tu deuda de conocimiento.

---

## El primer paso no es un refactoring

Si has llegado hasta aquí y esto describe lo que estás viendo en tu proyecto, la tentación es pensar en grandes iniciativas. "Necesitamos un sprint de documentación." "Hay que crear una wiki completa." "Deberíamos hacer una sesión de knowledge transfer."

No.

El primer paso es un archivo. Un solo archivo que capture las cinco, diez, quince decisiones más importantes que viven en las cabezas de tu equipo. Lo que un senior diría a un developer nuevo en su primer día completo — comprimido, estructurado, legible tanto por humanos como por LLMs.

No necesita ser perfecto. No necesita cubrir todo. Necesita existir.

He escrito sobre esto en detalle en otro artículo — cómo un architecture.md vale más que cien prompts mágicos para mejorar los resultados de AI en proyectos enterprise. Es el primer paso concreto: transformar cuarenta líneas de conocimiento tácito en contexto explícito.

Pero más allá del archivo, el cambio de mentalidad importa más que el artefacto. El cambio es este: dejar de tratar la adopción de IA como un problema de herramientas y empezar a tratarlo como un problema de información. No necesitas herramientas mejores. Necesitas hacer explícito lo que es implícito.

Los equipos que están haciendo esto hoy — no en seis meses, hoy — están construyendo una ventaja compuesta. Cada semana que pasa con conocimiento explícito es una semana de mejores outputs de AI, onboarding más rápido, menos inconsistencias. Y esa ventaja se acumula.

La IA no va a esperar a que tu equipo decida que esto es importante. Pero la buena noticia es que el primer paso es pequeño, el ROI es inmediato, y el coste de no empezar crece cada semana.

La deuda que la IA está revelando siempre estuvo ahí.

Ahora la puedes ver.

Qué hagas con eso depende de ti.

---

## Siguiente paso

Si este artículo describe algo que reconoces en tu equipo, cada semana publico análisis sobre cómo los equipos enterprise pueden trabajar mejor con IA. Sin hype. Sin promesas. Diagnosticando problemas reales y proponiendo soluciones concretas para arquitectos y tech leads que construyen sistemas complejos.

Si quieres empezar hoy: lee cómo un architecture.md cambia los resultados de AI en enterprise. Es el primer paso práctico para saldar la deuda que acabamos de diagnosticar.

---

*Publicado: Mayo 2026*