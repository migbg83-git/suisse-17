# Notes — Context Engineering para proyectos legacy

---

## Observaciones y escenas reales

- Proyecto Angular enterprise con monorepo de 7 años: la documentación cubre solo el onboarding técnico, pero nadie ha escrito por qué ciertos microfrontends nunca deben compartir estado. La IA genera código que rompe límites invisibles y dispara incidentes en producción.
- Azure DevOps pipelines heredados: el pipeline principal tiene 1200 líneas de YAML, con triggers y condiciones que solo entiende el "gurú" del equipo. Cuando la IA intenta modificar el pipeline, elimina pasos críticos porque no están documentados ni comentados.
- APIM con políticas legacy: la configuración de rate limiting y excepciones vive en la cabeza de un arquitecto que ya no está. La IA replica la política estándar, pero omite excepciones de negocio que solo existen en emails antiguos.
- Nginx como proxy interno: reglas de routing y rewrites que nadie se atreve a tocar. La IA sugiere cambios que parecen correctos, pero rompen integraciones legacy porque hay dependencias ocultas con sistemas externos.
- Onboarding de un developer senior: aprende el stack en una semana, pero tarda un mes en entender las reglas no escritas sobre ownership de módulos y convenciones de naming.
- Microfrontends: la IA puede generar nuevos módulos, pero no respeta los boundaries definidos por acuerdos verbales en retros de hace años.
- Proxies internos: reglas de acceso y bypass que solo conoce el equipo de infraestructura. La IA automatiza configuraciones, pero deja expuestos endpoints críticos.
- Pipelines legacy: scripts Bash y PowerShell encadenados, sin comentarios ni documentación. La IA puede traducirlos a YAML, pero pierde lógica de negocio implícita.
- Sistemas híbridos: parte del stack está en la nube, parte on-premise. La IA no entiende las restricciones de red, firewalls, ni las razones históricas de ciertas decisiones.

---

## Tensiones organizacionales y fricción

- Fricción constante entre equipos de desarrollo y operaciones: los primeros quieren automatizar, los segundos temen perder control sobre reglas tácitas.
- Contradicción: la organización invierte en IA esperando velocidad, pero la falta de contexto explícito genera más errores y retrabajo.
- Anti-pattern: migrar a IA sin auditar el conocimiento tácito. Resultado: outputs mediocres, frustración, blame a la herramienta.
- Tensión: los equipos senior "saben" cómo funciona el sistema, pero no pueden transferir ese conocimiento a la IA ni a nuevos miembros.
- Fricción: cada intento de modernización revela dependencias ocultas y reglas invisibles que nadie se atreve a documentar por miedo a romper algo.
- Consecuencia: incidentes en producción, ciclos de blame, parálisis ante cambios estructurales.

---

## Frases/anchors editoriales y metáforas

- "En sistemas legacy, la documentación es arqueología: cada línea es una pista, pero el mapa está incompleto."
- "La IA no tropieza con el código, tropieza con las reglas invisibles."
- "El onboarding en sistemas legacy es un rito de paso, no un proceso."
- "Migrar a IA sin mapear el conocimiento tácito es como automatizar una ciudad sin plano: los atajos matan."
- "La memoria institucional es un asset hasta que se convierte en trampa."
- "En legacy, cada decisión no documentada es una mina esperando a explotar."
- "La IA amplifica la deuda de conocimiento: lo que no está escrito, no existe."

---

## Ideas y líneas de exploración

- ¿Cómo auditar reglas invisibles antes de introducir IA?
- Estrategias para convertir acuerdos verbales en documentación viva.
- Patrones para mapear dependencias ocultas en pipelines y proxies.
- El rol de los Architecture Decision Records en sistemas legacy.
- Métricas para visibilizar la fricción: incidentes post-IA, tiempo de onboarding, errores repetidos.
- Ejemplos de cómo la IA puede servir como "detector de grietas" en el conocimiento organizacional.
- Cómo diseñar procesos de onboarding que prioricen el “por qué” y no solo el “cómo”.
- Casos de éxito y fracaso en la modernización de monorepos legacy con IA.
