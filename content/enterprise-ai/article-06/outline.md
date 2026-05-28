# Outline — Context Engineering para proyectos legacy: por qué la IA falla en sistemas enterprise reales

## Narrativa
- El artículo abre con una escena real: un equipo intenta usar IA para automatizar tareas en un monorepo legacy. El resultado es frustrante: la IA genera código que no encaja, rompe convenciones, omite reglas invisibles.
- Se construye la tensión entre la promesa de la IA y la realidad de sistemas con años de evolución y conocimiento tácito.
- Se exploran ejemplos técnicos: microfrontends, pipelines en Azure DevOps, APIM, onboarding, tribal knowledge.
- Se plantea un marco para auditar y transformar el conocimiento tácito en explícito.
- El cierre conecta con la necesidad de context engineering como base para cualquier modernización AI-ready.

## Flow cognitivo
1. **Introducción (H1):**
   - Escena enterprise real: IA en un monorepo legacy.
   - Fricción inmediata: outputs mediocres, reglas invisibles.
2. **Por qué la IA falla en sistemas legacy (H2):**
   - El conocimiento tácito como cuello de botella.
   - Ejemplos: microfrontends, dependencias cruzadas, pipelines con lógica oculta.
3. **Tensiones organizacionales (H2):**
   - Onboarding lento, frustración con la IA, incidentes por reglas no documentadas.
   - Contradicciones: equipos senior que "saben" pero no pueden transferir conocimiento a la IA.
4. **Patrones y anti-patrones (H2):**
   - Documentación parcial, tribal knowledge, decisiones arquitectónicas sin registro.
   - Anti-patrón: migrar a IA sin auditar el contexto.
5. **Marco de transformación (H2):**
   - Cómo identificar y explicitar reglas invisibles.
   - Herramientas: architecture decision records, documentación viva, knowledge graphs.
6. **Cierre estratégico (H2):**
   - La ventaja competitiva no es la IA, sino la capacidad de hacer explícito el conocimiento en sistemas complejos.
   - Llamada a la acción: context engineering como disciplina central.

## Escenas enterprise reales
- Monorepos con años de evolución y convenciones no escritas.
- Pipelines en Azure DevOps que solo entiende el "gurú" del equipo.
- Microfrontends con reglas de comunicación tácitas.
- APIM con políticas heredadas y excepciones invisibles.
- Onboarding donde la IA y los nuevos fallan igual.

## Estructura H1/H2/H3
- H1: Context Engineering para proyectos legacy: por qué la IA falla en sistemas enterprise reales
  - H2: Por qué la IA falla en sistemas legacy
  - H2: Tensiones organizacionales
  - H2: Patrones y anti-patrones
  - H2: Marco de transformación
  - H2: Cierre estratégico

## Ejemplos técnicos reales
- IA generando pipelines que ignoran triggers críticos.
- Microfrontends con dependencias cruzadas no documentadas.
- APIM replicando políticas estándar pero omitiendo excepciones de negocio.
- Onboarding donde la IA no puede aprender lo que no está escrito.
