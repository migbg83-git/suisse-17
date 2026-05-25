# Outline — La deuda técnica que la IA está empezando a revelar

## Estructura general

| # | Sección | Palabras aprox. | Función narrativa |
|---|---------|:---------------:|-------------------|
| 1 | Gancho | 150-200 | Crear tensión inmediata con una escena reconocible |
| 2 | Introducción | 300-400 | Plantear la tesis: la IA no falla, revela |
| 3 | Desarrollo: las cinco deudas | 1000-1200 | Argumentación principal con taxonomía clara |
| 4 | Ejemplos reales | 500-600 | Demostrar con situaciones concretas de primera mano |
| 5 | Objeciones | 400-500 | Anticipar resistencia y desarmarla |
| 6 | Conclusión | 300-400 | Reencuadrar el diagnóstico como oportunidad |
| 7 | CTA | 100-150 | Conectar con newsletter y artículo 01 |

**Total estimado:** 2800-3450 palabras

---

## 1. Gancho

**Objetivo:** Capturar atención en 10 segundos con una escena que todo arquitecto/tech lead enterprise ha vivido.

**Mensaje principal:** La experiencia universal de pedirle algo a la IA sobre tu proyecto y recibir una respuesta genérica e inutilizable — y la frustración que genera.

**Ideas que deben aparecer:**
- Escena: alguien pide a Copilot/Cursor que genere un servicio que siga las convenciones del proyecto → output genérico que no respeta nada
- La reacción inmediata: "esta herramienta no sirve para enterprise"
- El giro: ¿y si el problema no es la herramienta?

**Ejemplos posibles:**
- Un tech lead pide generar un interceptor Angular siguiendo el patrón del proyecto → la IA genera un interceptor genérico de tutorial
- Pedir a la IA que escriba un pipeline de Azure DevOps como los existentes → output que no usa las templates ni variables del equipo
- Solicitar un componente que siga la arquitectura del monorepo → ignora completamente la estructura de shared modules

**Transición hacia sección 2:**
> De la frustración concreta ("esto no funciona") a la pregunta diagnóstica ("¿por qué no funciona?"). Pasar de culpar a la herramienta a examinar las condiciones.

---

## 2. Introducción

**Objetivo:** Establecer la tesis central y el marco analítico del artículo. Reencuadrar el problema.

**Mensaje principal:** La IA no está creando nuevos problemas. Está haciendo visibles problemas que existían pero permanecían ocultos porque los humanos los compensaban con conocimiento tácito. El diagnóstico correcto no es "la IA no funciona" sino "nuestro proyecto tiene deudas que la IA no puede compensar como lo hacían las personas".

**Ideas que deben aparecer:**
- La metáfora del espejo: la IA refleja la calidad del contexto que recibe
- Los humanos compensan silenciosamente (memoria institucional, tradición oral, intuición de senior)
- La IA no puede compensar → el vacío se hace visible por primera vez
- Antes: costes difusos (onboarding lento, inconsistencias graduales). Ahora: costes inmediatos y medibles (output inutilizable)
- Introducir el concepto: "deuda de conocimiento" como extensión de deuda técnica

**Ejemplos posibles:**
- El senior que sabe de memoria qué configuraciones no tocar y por qué → la IA no tiene esa memoria
- El equipo donde "pregúntale a Marcos" es la documentación oficial de tres subsistemas
- La diferencia entre lo que un nuevo empleado descubre en 2 meses por ósmosis vs lo que la IA nunca podrá absorber sin contexto explícito

**Transición hacia sección 3:**
> "Si la IA es un espejo, ¿qué refleja exactamente? Hay al menos cinco tipos de deuda que se hacen visibles cuando introduces herramientas de IA en un proyecto enterprise."

---

## 3. Desarrollo: Las cinco deudas que la IA revela

**Objetivo:** Construir la argumentación central con una taxonomía clara, ordenada de más conocida a más invisible.

**Mensaje principal:** No es solo "deuda técnica" en el sentido clásico. Hay al menos cinco tipos de deuda, y las más dañinas para la adopción de IA son las que nunca se nombran.

### 3.1 Deuda técnica clásica

**Ideas:**
- Código legacy, abstracciones rotas, inconsistencias acumuladas
- La IA amplifica la inconsistencia: si hay 3 patrones diferentes para lo mismo, ¿cuál sigue?
- Manifiestación en AI: genera código que mezcla patrones o sigue el patrón más viejo (más repetido en el codebase)

**Ejemplo:** Un proyecto Angular con servicios escritos en tres estilos diferentes según la época → Copilot genera un cuarto estilo que es un híbrido de los tres.

### 3.2 Deuda de conocimiento

**Ideas:**
- Decisiones arquitectónicas que existen solo en la cabeza de personas
- El "por qué" detrás de las decisiones: constraints de negocio, limitaciones de infra, decisiones históricas
- La IA genera soluciones técnicamente válidas pero contextualmente incorrectas
- Concepto clave: la diferencia entre "qué hace el código" (visible) y "por qué se hizo así" (invisible)

**Ejemplo:** Un servicio que no usa caché porque hubo un bug crítico hace 2 años con coherencia de datos — nadie lo documentó, el senior lo sabe de memoria. La IA sugiere agregar caché "como optimización obvia".

### 3.3 Deuda de documentación

**Ideas:**
- No solo ausencia de docs: docs desactualizadas que son peor que nada
- READMEs del día 1 que nadie actualiza
- Wikis de Confluence que describen una v1 que ya no existe
- La IA puede leer docs → si las docs mienten, la IA miente

**Ejemplo:** Un README que dice "usamos Redux para state management" cuando el equipo migró a signals hace 8 meses. La IA genera código con Redux porque leyó la documentación oficial del proyecto.

### 3.4 Arquitecturas implícitas

**Ideas:**
- La arquitectura real vs la arquitectura documentada (si existe)
- Decisiones de routing, responsabilidades de módulos, boundaries entre features — todo vive en la práctica, no en ningún diagrama
- La IA no puede inferir boundaries que no están escritos en ningún sitio

**Ejemplo:** La separación entre "shared/ui" y "shared/utils" sigue una lógica que nadie ha escrito pero todos respetan — la IA mete helpers de UI en utils porque no hay nada que le diga la diferencia.

### 3.5 Convenciones no documentadas

**Ideas:**
- Naming conventions, patterns de error handling, estilos de testing
- "Aquí lo hacemos así" — pero no hay un ADR ni un .eslintrc que lo fuerce
- Lo que se aprende en code review de forma oral nunca llega a la IA
- La IA sigue convenciones genéricas de internet, no las de tu equipo

**Ejemplo:** El equipo tiene un patrón específico para error handling en HTTP calls con un custom ErrorHandler. La IA genera try/catch genéricos porque la convención solo existe en reviews pasados y en la memoria del equipo.

**Transición hacia sección 4:**
> "Esto no es teoría. Lo he visto repetirse en cada proyecto enterprise donde un equipo me dice 'la IA no funciona para nosotros'."

---

## 4. Ejemplos reales

**Objetivo:** Anclar la taxonomía abstracta en experiencias concretas y reconocibles. Generar el "esto me pasa a mí" en el lector.

**Mensaje principal:** El patrón se repite siempre: lo que parece un fallo de la IA es un señalador directo de una deuda específica que el equipo ha normalizado.

**Ideas que deben aparecer:**
- Patrón repetido en múltiples proyectos: diagnóstico era siempre "la IA no sirve para enterprise" → diagnóstico real era deuda de contexto
- Cada output mediocre de AI es información diagnóstica: te dice exactamente qué le falta a tu proyecto
- La IA como "audit involuntario" — funciona como un nuevo empleado infinitamente literal que expone todo lo no documentado

**Ejemplos posibles (elegir 2-3):**
- **El monorepo Angular:** Equipo de 15 personas, microfrontends, shared libraries. Copilot genera código que viola boundaries entre dominios porque no hay un documento que explique la separación. Los humanos lo saben por convención. Output de AI: señalador directo de que la arquitectura de módulos es implícita.
- **El pipeline de Azure DevOps:** Templates custom, variables por entorno, stages condicionales. La IA genera YAML genérico porque el "cómo hacemos pipelines aquí" no está en ningún sitio accesible. El team lead dice "la IA no entiende nuestro CI/CD" — corrección: no hay nada que explique vuestro CI/CD.
- **La API .NET con APIM:** Patrón de versionado, convención de naming de endpoints, uso de middleware custom. La IA genera controllers que no siguen ninguna de las 12 convenciones del equipo porque no están escritas — se transmiten por code review.
- **El onboarding que revela lo mismo:** Un nuevo desarrollo tarda 3-4 semanas en "pillar las convenciones". Nadie lo ve como problema porque "siempre ha sido así". La IA tiene exactamente el mismo problema pero sin paciencia ni 4 semanas de capital social para preguntar.

**Transición hacia sección 5:**
> "Si tu reacción a esto es 'sí, pero...' — probablemente estás a punto de usar uno de los argumentos que escucho más frecuentemente. Hablemos de ellos."

---

## 5. Objeciones

**Objetivo:** Anticipar la resistencia del lector, validar sus preocupaciones y desmontar los argumentos con empatía y lógica.

**Mensaje principal:** Cada objeción es legítima en su origen pero incorrecta en su conclusión. El problema existe y vale la pena nombrarlo, aunque sea incómodo.

**Ideas que deben aparecer:**

### Objeción 1: "La IA es limitada, no es culpa nuestra"
- Validar: sí, las herramientas tienen limitaciones reales
- Pero: si funciona bien en proyectos nuevos o bien documentados y mal en el tuyo, la variable diferencial es tu proyecto
- No es culpa/mérito: es condición. Las herramientas funcionan mejor con contexto explícito. Punto.

### Objeción 2: "Siempre hemos funcionado así y no era problema"
- Validar: funcionabais. No era gratuito pero era tolerable.
- Pero: el coste estaba distribuido e invisible (onboarding, inconsistencias, bus factor)
- Ahora: la IA hace ese coste inmediato y visible. No creó el problema — quitó la compensación.

### Objeción 3: "Esto es solo una excusa para pedir tiempo de documentación"
- Validar: hay un historial de iniciativas de documentación que no llevan a nada
- Pero: no estamos hablando de documentar todo. Estamos hablando de hacer explícito lo que es necesario para que las herramientas (y las personas nuevas) funcionen.
- Es inversión con ROI medible, no burocracia.

### Objeción 4: "No tenemos tiempo para resolver esta deuda"
- Validar: time-to-market es real
- Pero: no se trata de resolverlo todo. Se trata de identificar el 20% de deuda que causa el 80% de problemas con AI y abordarlo incrementalmente.
- El coste de NO resolverlo ahora es: adopción fallida de AI → desventaja competitiva creciente.

**Transición hacia sección 6:**
> "Hay una lectura pesimista de todo esto: 'tenemos un problema más'. Pero hay otra lectura, y es la que importa."

---

## 6. Conclusión

**Objetivo:** Transformar el diagnóstico (potencialmente abrumador) en una oportunidad accionable. Elevar de "tienes un problema" a "ahora tienes un nombre para el problema y eso es poder".

**Mensaje principal:** La IA está haciendo un audit involuntario de tu proyecto. Puedes ignorar los resultados o puedes usarlos. Nombrar el problema es el primer paso para resolverlo. Y resolverlo no solo mejora la IA — mejora todo lo demás.

**Ideas que deben aparecer:**
- Reframe: cada output mediocre de AI es un diagnóstico gratuito. Te dice exactamente dónde están las deudas.
- La oportunidad doble: resolver la deuda mejora la IA Y mejora onboarding, consistencia, bus factor, calidad
- No es "resolver todo y luego usar IA". Es "usar IA como diagnostic tool Y resolver incrementalmente"
- El concepto de "AI-readiness" como métrica de salud del proyecto (no solo de adopción de herramientas)
- La ventaja de actuar ahora: los equipos que diagnostiquen y resuelvan primero tendrán ventaja compuesta
- Callback al artículo 01: architecture.md como primer paso concreto para empezar a saldar la deuda

**Ejemplos posibles:**
- El equipo que empezó documentando solo las 5 decisiones más críticas y vio mejora inmediata en outputs de AI
- La analogía: es como hacer un análisis de sangre — los números no crearon el problema, pero ahora que los ves, puedes actuar

**Transición hacia CTA:**
> Del insight a la acción: si resuena, hay más. Si quieres empezar, hay un primer paso concreto.

---

## 7. CTA

**Objetivo:** Convertir resonancia intelectual en acción concreta. Doble CTA: seguir leyendo (artículo 01) o seguir recibiendo (newsletter).

**Mensaje principal:** Esto es solo el diagnóstico. Hay más por explorar — tanto la solución concreta como el análisis continuo.

**Ideas que deben aparecer:**

### CTA primario — Newsletter
- Hook: "Cada semana analizo cómo los equipos enterprise pueden trabajar mejor con IA — diagnosticando problemas reales, no vendiendo soluciones mágicas."
- Propuesta de valor: análisis, no hype
- Si el artículo resonó → la newsletter profundiza cada semana

### CTA secundario — Artículo 01
- "Si quieres ver el primer paso concreto para empezar a saldar esta deuda: cómo un solo archivo de arquitectura cambia todo."
- Link a "Por qué un architecture.md vale más que cien prompts mágicos"
- Posicionar como: diagnóstico (art 02) → solución (art 01)

### CTA terciario — Futuro
- Mención sutil de recurso futuro: "Estoy desarrollando un template de AI readiness audit para equipos enterprise. Si te interesa, la newsletter es donde lo compartiré primero."

---

## Notas de tono y estilo

- **Voz:** Analítica, empática, directa. Diagnosticar sin culpar.
- **Perspectiva:** Primera persona con experiencia consultiva. "He visto esto en X proyectos."
- **Ritmo:** Párrafos cortos. Listas cuando ayudan. Headers claros.
- **Evitar:** Tono evangelista de IA. Tono acusatorio hacia equipos. Vendor marketing. Soluciones silver-bullet.
- **Buscar:** El "sí, esto me pasa" del lector. La sensación de que alguien nombra algo que sentías pero no habías articulado.
- **Densidad:** Cada párrafo debe aportar un insight o un ejemplo. Sin relleno.
- **Conexión con art 01:** Complementario, no repetitivo. Art 02 = el por qué. Art 01 = el qué hacer.

---

*Última actualización: Mayo 2025*