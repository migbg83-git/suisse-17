# Outline — Qué documentación necesita realmente un LLM

## Estructura general

| # | Sección | Palabras aprox. | Función narrativa |
|---|---------|:---------------:|-------------------|
| 1 | Gancho | 150-200 | Mostrar el error común en acción: documentar lo que el modelo ya sabe |
| 2 | Introducción | 300-400 | Establecer la tesis: el problema no es cantidad de docs, es dirección |
| 3 | Lo que el LLM ya sabe | 500-600 | Demostrar que los modelos entienden más de lo que se cree |
| 4 | Lo que el LLM no puede inferir | 600-800 | Taxonomía de las 6 categorías de información exclusiva |
| 5 | Ejemplos enterprise | 500-600 | Anclar la taxonomía en situaciones reales |
| 6 | Objeciones | 400-500 | Anticipar resistencia y clarificar matices |
| 7 | Conclusión | 300-400 | El criterio como herramienta de decisión permanente |
| 8 | CTA | 100-150 | Conectar con artículos anteriores y newsletter |

**Total estimado:** 2900-3650 palabras

---

## 1. Gancho

**Objetivo:** Capturar atención mostrando la ironía del esfuerzo mal dirigido — el equipo que documenta cien cosas inútiles para la IA y omite las tres que importan.

**Mensaje principal:** La escena de alguien escribiendo documentación exhaustiva que el LLM ya conoce mientras ignora la información que cambiaría todo.

**Ideas que deben aparecer:**
- Escena: un equipo decide "mejorar la documentación para la IA" y genera páginas explicando cómo funciona Angular signals, cómo se configura un HttpClient, qué es un middleware en .NET
- El resultado: la IA sigue generando código que no se ajusta al proyecto
- La paradoja: documentaron más, no mejor. El modelo ya sabía todo lo que escribieron.
- El giro: lo que la IA necesitaba eran tres líneas sobre por qué no usan caché en ese servicio, no tres páginas sobre cómo funciona caching

**Ejemplos posibles:**
- Un equipo que escribió una wiki de 40 páginas sobre "cómo usar Angular" para contexto de IA — inútil porque el modelo ya sabe Angular mejor que la wiki
- Alguien que copia la documentación oficial de Azure DevOps y la pega en un context file — redundante, el modelo la ha visto cien mil veces
- El contraste: esas 40 páginas no mejoraron nada, pero 5 líneas de "en este proyecto usamos facade services y no servicios planos por X razón" lo cambiaron todo

**Transición hacia sección 2:**
> De la escena concreta a la pregunta: "¿Por qué más documentación no produce mejores resultados? Porque el criterio no es cantidad — es exclusividad."

---

## 2. Introducción

**Objetivo:** Establecer la tesis central y el marco de decisión que guiará todo el artículo.

**Mensaje principal:** El problema no es documentar más. Es documentar lo correcto. Los LLMs ya entienden tu framework, tu lenguaje y los patrones comunes. Lo que necesitan — y lo que jamás podrán inferir — son tus decisiones, tus constraints, tus convenciones internas. El criterio de decisión es simple: si la información existe en internet, el modelo ya la tiene. Si solo existe en tu equipo, el modelo la necesita de ti.

**Ideas que deben aparecer:**
- Introducir el criterio de exclusividad: documentar solo lo que es exclusivo de tu organización
- Los modelos han sido entrenados con millones de repositorios, toda la documentación oficial, miles de tutoriales, Stack Overflow completo
- No compites con su conocimiento base — lo complementas con tu contexto específico
- La documentación útil para un LLM no es pedagógica (enseñar) sino informativa (declarar constraints)
- Conexión con artículos anteriores: art 01 definió el artefacto (architecture.md), art 02 diagnosticó por qué hace falta (deuda de conocimiento). Este artículo responde: ¿qué poner dentro?

**Ejemplos posibles:**
- La analogía: es como contratar a un developer senior externo que conoce Angular perfectamente pero nunca ha trabajado en tu proyecto. No necesitas explicarle qué es un signal. Necesitas explicarle por qué en este proyecto las signals se gestionan de esta forma particular.
- El modelo como el consultor que ha visto cientos de proyectos pero ninguno es el tuyo

**Transición hacia sección 3:**
> "Para entender qué documentar, primero hay que aceptar algo que incomoda a muchos: los LLMs saben más de lo que crees."

---

## 3. Lo que el LLM ya sabe

**Objetivo:** Demostrar — con honestidad y matiz — que el conocimiento base de los LLMs sobre frameworks, lenguajes y patrones es sólido. Desmontar la subestimación habitual.

**Mensaje principal:** Los LLMs entienden frameworks, patrones comunes y APIs documentadas mejor de lo que el 80% de equipos enterprise cree. Documentar lo que ya saben es tiempo desperdiciado.

**Ideas que deben aparecer:**

### 3.1 Frameworks y lenguajes
- Angular, React, Vue, .NET, Spring, Node — los modelos han visto miles de repos en cada uno
- Entienden lifecycle hooks, DI, routing, state management, testing patterns
- Conocen la documentación oficial mejor que la mayoría de developers (la han procesado entera)
- No necesitas explicarles qué es un servicio Angular o cómo funciona un Controller en .NET

### 3.2 Patrones de diseño y arquitectura genérica
- SOLID, DDD, CQRS, Event Sourcing, microservices — los patrones comunes están incorporados
- Saben qué es un facade service, un repository pattern, un mediator
- Entienden clean architecture, hexagonal, vertical slices — como conceptos genéricos
- No necesitas documentar qué es clean architecture. Necesitas documentar cómo la aplicas tú.

### 3.3 APIs y librerías públicas
- Si la librería tiene más de 500 estrellas en GitHub, el modelo la conoce
- APIs de Azure, AWS, GCP — documentación procesada extensivamente
- Configuración estándar de herramientas populares (Nginx, Redis, Docker, K8s)
- Conocen los flags, las opciones, las convenciones estándar

### 3.4 Best practices genéricas
- Error handling patterns comunes, logging patterns, testing strategies
- Security headers, CORS configs, auth flows estándar
- CI/CD pipelines genéricos, Dockerfile best practices
- Todo lo que aparece en "best practices [technology]" en Google

**Lo que esto implica:** Si tu documentación repite cualquiera de estas cosas, no estás ayudando al LLM. Estás ocupando contexto con información redundante que desplaza la información que sí importaría.

**Ejemplos posibles:**
- Pedir al modelo que genere un interceptor Angular sin contexto → entiende perfectamente qué es y cómo funciona. Lo que no sabe es que EN TU proyecto los interceptors se estructuran de una forma particular.
- Pedir que genere un pipeline de Azure DevOps genérico → output correcto. Lo que no sabe es que TU equipo usa templates custom con naming específico.
- El test: si buscas tu documentación en Google y encuentras algo similar, el modelo ya lo sabe.

**Transición hacia sección 4:**
> "Entonces, si los modelos ya saben todo esto — ¿qué es lo que no saben? ¿Qué es esa información que ningún entrenamiento puede proporcionarles?"

---

## 4. Lo que el LLM no puede inferir

**Objetivo:** Construir la taxonomía central del artículo. Seis categorías de información que solo tu equipo posee y que el LLM jamás podrá obtener de sus datos de entrenamiento.

**Mensaje principal:** Hay seis tipos de información que son exclusivos de tu organización. No existen en ningún dataset. No se pueden inferir del código. Solo tu equipo los conoce — y son exactamente lo que marca la diferencia entre un output genérico e inutilizable y un output que pasa code review.

### 4.1 Decisiones arquitectónicas

**Ideas:**
- El "por qué" detrás de la estructura: por qué facade services y no services planos, por qué SignalStore y no NgRx global, por qué vertical slices en un dominio y layers en otro
- Las alternativas descartadas y por qué se descartaron
- El modelo ve el qué (el código actual) pero no el por qué (la decisión)
- Sin el por qué, la IA propone alternativas que el equipo ya evaluó y rechazó

**Ejemplo:** "Usamos facade services porque con 12 microfrontends necesitamos una interfaz pública estable entre dominios." → Esta línea evita que la IA sugiera inyectar domain services directamente.

### 4.2 Restricciones de negocio

**Ideas:**
- Reglas que no vienen de la tecnología sino del negocio: SLAs, regulaciones, contratos con terceros
- Limitaciones de infra que no son técnicas sino presupuestarias o contractuales
- Qué no se puede hacer — y por qué lo impide el negocio, no la tecnología
- El modelo genera soluciones técnicamente perfectas que violan constraints de negocio invisibles

**Ejemplo:** "No podemos usar CDN externas por compliance (datos bancarios no pueden pasar por nodos fuera de EU)." → La IA deja de sugerir Cloudflare como optimización.

### 4.3 Convenciones internas

**Ideas:**
- Naming patterns específicos del equipo
- Estructura de carpetas custom
- Patrones de error handling propios
- Estilo de testing particular
- Todo lo que se aprende por code review y tradición oral

**Ejemplo:** "Error handling: siempre wrappear HTTP calls con `handleApiError()` del shared/utils. No try/catch manuales." → La IA genera código con el patrón correcto desde el primer output.

### 4.4 Límites entre dominios

**Ideas:**
- Qué módulo es responsable de qué
- Qué imports están permitidos y cuáles son violaciones de boundary
- Cómo fluyen los datos entre dominios
- Qué se comparte y qué es privado a un dominio
- Boundaries que existen en la práctica pero no están enforced por tooling

**Ejemplo:** "libs/domain-a no puede importar de libs/domain-b. La comunicación es a través de shared/contracts." → La IA deja de generar imports directos entre dominios.

### 4.5 Razones históricas

**Ideas:**
- Por qué algo se hizo de una forma "rara" que parece subóptima
- Bugs previos que condicionan decisiones actuales
- Migraciones incompletas que explican estados intermedios
- Workarounds que no se pueden eliminar por razones de compatibilidad

**Ejemplo:** "El servicio de auth no usa caché de tokens. Razón: incident #347 (2024) — token revocado activo en caché causó acceso no autorizado durante 4h. Decisión: never cache auth tokens." → La IA deja de sugerir "optimización obvia" de cachear.

### 4.6 Excepciones organizativas

**Ideas:**
- Reglas que aplican a todo menos a un caso específico — y por qué
- Equipos que siguen convenciones diferentes por razones válidas
- Servicios legacy que no se pueden migrar
- Acuerdos con terceros que obligan a hacer las cosas de otra forma

**Ejemplo:** "Todos los servicios usan .NET 8 excepto payment-gateway que sigue en .NET 6 por certificación PCI-DSS pendiente de renovación (hasta Q2 2027)." → La IA no sugiere migrar payment-gateway ni genera código que asuma .NET 8.

**Transición hacia sección 5:**
> "Estas seis categorías no son teóricas. En cada proyecto enterprise donde he trabajado, puedo señalar exactamente dónde la ausencia de esta información produjo outputs de AI inútiles."

---

## 5. Ejemplos enterprise reales

**Objetivo:** Anclar la taxonomía en experiencias reconocibles. Demostrar el antes/después con situaciones concretas de proyectos enterprise.

**Mensaje principal:** En cada caso, no se necesitó más documentación — se necesitó la documentación correcta. Unas pocas líneas de la información exclusiva del equipo cambiaron radicalmente los outputs.

**Ideas que deben aparecer:**
- Patrón repetido: documentación extensa + resultados mediocres → documentación mínima pero correcta + resultados que pasan code review
- Contraste entre esfuerzo (poco) y resultado (alto) cuando se documenta lo correcto
- La documentación útil para LLMs es breve, declarativa y específica — no narrativa

**Ejemplos posibles (elegir 2-3):**

### Ejemplo A: El equipo que documentó Angular y no mejoró nada
- Equipo escribe 30 páginas de "guía Angular" para contexto de AI
- Incluye: lifecycle hooks, DI patterns, cómo crear components
- La IA sigue generando código que no se ajusta al proyecto
- Solución: eliminan las 30 páginas. Escriben 20 líneas: facade pattern, naming conventions, carpeta structure, prohibited patterns
- Resultado: outputs que pasan code review en primer intento

### Ejemplo B: La API .NET donde 5 líneas reemplazaron una wiki
- Wiki de Confluence de 15 páginas describiendo "cómo se hacen APIs en .NET" (genérico)
- La IA genera controllers correctos pero que no siguen las 8 convenciones del equipo
- Solución: un bloque de 5 líneas — versionado /v{n}/, naming de endpoints, middleware order, su custom error response format, rate limiting por API key
- Resultado: controllers generados listos para PR

### Ejemplo C: El pipeline que nadie podía explicar
- Pipeline de Azure DevOps con templates custom, variables por entorno, conditions complejas
- Nadie excepto el DevOps lead entendía la estructura completa
- LA IA generaba YAML genérico que no usaba templates ni variable groups del equipo
- Solución: 10 líneas describiendo: template hierarchy, naming de variable groups, stage conditions, deployment gates
- Resultado: la IA genera YAML consistente con el setup existente. Bonus: un junior pudo entender el pipeline por primera vez.

**Transición hacia sección 6:**
> "Si la reacción a esto es 'pero no puede ser tan simple' — es legítimo tener dudas. Vamos a abordar las más comunes."

---

## 6. Objeciones

**Objetivo:** Anticipar resistencia con empatía y desmontar con lógica. Abordar matices reales sin simplificar.

**Mensaje principal:** El criterio es sólido pero no absoluto. Hay grises y limitaciones. Lo importante es que la dirección sea correcta, no que sea perfecta.

**Ideas que deben aparecer:**

### Objeción 1: "Los modelos no entienden mi framework tan bien como dices"
- Validar: hay limitaciones reales — APIs muy recientes (<6 meses), librerías poco populares, configuraciones muy específicas de infra
- Pero: para Angular, .NET, React, Vue, Azure, AWS — el conocimiento base es sólido
- Test práctico: pregúntale algo genérico sobre tu framework sin contexto. Si la respuesta es correcta, no necesitas documentar eso.
- El 80% de las veces que un equipo dice "no entiende nuestro framework", el problema real es que no entiende sus convenciones SOBRE el framework

### Objeción 2: "Más documentación nunca puede ser mala"
- Sí puede. Las context windows son finitas. Cada línea de información redundante desplaza una línea de información exclusiva.
- Documentación genérica compite por espacio con documentación útil
- El modelo procesa todo con el mismo peso — no sabe que tus 30 páginas de "cómo funciona Angular" son redundantes y que las 5 líneas de convenciones son lo crítico
- Menos documentación correcta > más documentación genérica

### Objeción 3: "Esto no reemplaza la documentación para humanos"
- Correcto. No la reemplaza — la complementa.
- Documentación para humanos: pedagógica, narrativa, explicativa, contextual
- Documentación para LLMs: declarativa, concisa, estructurada, orientada a constraints
- Pueden coexistir. Pero la documentación para LLMs tiene un formato óptimo diferente.
- A veces coinciden — a veces no. Un ADR es útil para ambos. Una guía paso a paso de onboarding solo para humanos.

### Objeción 4: "Esto cambiará cuando los modelos sean más potentes"
- Validar: los modelos mejorarán en comprensión de código, de codebase completos, de inferir patrones
- Pero: las decisiones, constraints de negocio y razones históricas no están EN el código. No importa lo bueno que sea el modelo leyendo código — si la razón vive en un hilo de Slack archivado, el modelo no la tiene.
- Lo que mejorará: menos necesidad de documentar lo técnico-genérico. Lo que no mejorará: necesidad de declarar lo organizativo-específico.

**Transición hacia sección 7:**
> "Si aceptas la premisa — que el criterio no es cantidad sino exclusividad — la conclusión tiene implicaciones que van más allá de la IA."

---

## 7. Conclusión

**Objetivo:** Elevar el criterio de "cómo documentar para AI" a un principio más amplio sobre gestión de conocimiento en organizaciones. Cerrar con visión de futuro.

**Mensaje principal:** El criterio de "documenta solo lo que es exclusivo de tu organización" no solo mejora la IA. Es un filtro que te dice exactamente dónde está tu valor diferencial como equipo. Y es el primer paso práctico para saldar la deuda de conocimiento que la IA ha revelado.

**Ideas que deben aparecer:**
- El criterio como herramienta permanente: ante cualquier duda de "¿debería documentar esto?", la pregunta es "¿esta información existe solo en nuestro equipo?"
- Documentar lo exclusivo es, por definición, documentar tu ventaja competitiva como organización
- Conexión con artículo 02: la deuda de conocimiento se compone exactamente de estas 6 categorías no documentadas
- Conexión con artículo 01: un architecture.md bien hecho aplica exactamente este criterio — solo contiene lo exclusivo
- El efecto cascada: esta documentación mejora la IA, mejora el onboarding, reduce bus factor, facilita decisiones futuras
- No es un esfuerzo de una vez — es un hábito: cada vez que tomas una decisión, pregunta "¿dónde queda documentado?"
- Los equipos que internalizan este criterio están construyendo ventaja compuesta

**Ejemplos posibles:**
- El equipo que adoptó la regla "si la IA lo hace mal dos veces, documentamos eso" — y en un mes tenían 15 decisiones documentadas que transformaron sus resultados
- La analogía: el criterio es como un filter para separar señal de ruido. Gran parte de la documentación enterprise es ruido que ni humanos ni IA necesitan.

**Transición hacia CTA:**
> Del criterio a la acción: ya sabes qué documentar. Ahora, empezar.

---

## 8. CTA

**Objetivo:** Convertir la claridad del criterio en acción concreta. Triple CTA: leer más (artículos anteriores), suscribirse (newsletter), empezar (primer paso práctico).

**Mensaje principal:** El criterio está claro. Los artículos anteriores te dan el artefacto concreto y el diagnóstico. Ahora: actuar.

**Ideas que deben aparecer:**

### CTA primario — Newsletter
- "Cada semana publico análisis prácticos sobre cómo los equipos enterprise pueden trabajar mejor con IA. Sin hype. Sin promesas. Para arquitectos y tech leads que construyen sistemas complejos."
- Si el criterio resonó → la newsletter profundiza cada semana con nuevos ángulos

### CTA secundario — Artículo 01
- "Si quieres ver la estructura concreta del archivo que aplica este criterio, lee 'Por qué un architecture.md vale más que cien prompts mágicos'."
- Posicionar como: ahora que sabes QUÉ documentar, ve CÓMO se estructura el artefacto.

### CTA terciario — Artículo 02
- "Si antes de documentar quieres diagnosticar dónde están las deudas más costosas de tu proyecto, lee 'La deuda técnica que la IA está empezando a revelar'."
- Para quien necesita el paso previo al criterio.

### Futuro
- "Estoy desarrollando una checklist de 'qué documentar para tu LLM' — una herramienta de una página para identificar las 15 decisiones críticas de tu proyecto."
- Newsletter como canal de distribución.

---

## Notas de tono y estilo

- **Voz:** Estratégica, directa, prescriptiva. Dar un criterio claro y defenderlo.
- **Perspectiva:** Arquitecto con experiencia consultiva que ha visto el mismo error repetirse.
- **Ritmo:** Contrastes claros (esto sí / esto no). Listas cuando ayudan. Ejemplos breves y concretos.
- **Evitar:** Tono tutorial ("paso 1, paso 2"). Jerga de ML engineering. Marketing de herramientas. Evangelismo de IA.
- **Buscar:** El momento "ah, por eso no funcionaba" del lector. La sensación de que ahora tiene un criterio claro para actuar.
- **Densidad:** Cada ejemplo debe demostrar el contraste entre documentación inútil y documentación que marca la diferencia.
- **Relación con artículos anteriores:** Complementario. Art 03 asume que el lector acepta la premisa (contexto > prompts, la IA revela deuda) y va al "vale, ¿qué hago concretamente?"

---

*Última actualización: Mayo 2026*