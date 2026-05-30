# Material bruto — notes.md

## Architecture Reviews que aportaron valor real
- En una fintech, una Architecture Review trimestral permitió detectar dependencias ocultas entre módulos de pagos y prevención de fraude, evitando un incidente de seguridad antes de la auditoría externa.
- En una telco, la revisión arquitectónica previa a la migración a microservicios identificó que el modelo de datos heredado no soportaba la escalabilidad requerida, lo que llevó a rediseñar el core antes de invertir en infraestructura.
- En una startup SaaS, la review de arquitectura permitió alinear criterios de naming y estructura de carpetas, acelerando el onboarding de nuevos developers y reduciendo errores en PRs.

## Architecture Reviews inútiles o burocráticas
- En una multinacional, la review se limitó a validar un checklist de compliance sin analizar dependencias reales ni riesgos técnicos; los problemas surgieron meses después en producción.
- En un banco, la Architecture Review fue un trámite para justificar la compra de una herramienta, sin involucrar al equipo técnico ni revisar decisiones históricas.

## Casos donde se detectó knowledge debt
- En un ecommerce, la review reveló que solo dos personas conocían las reglas de negocio críticas; la falta de documentación provocó errores tras la rotación del equipo.
- En una consultora, la Architecture Review evidenció que los motivos de ciertas decisiones técnicas no estaban documentados en el architecture.md, generando retrabajo y discusiones recurrentes.

## Casos donde la review llegó demasiado tarde
- En una empresa de logística, la Architecture Review se realizó tras el despliegue de una nueva plataforma; ya se habían cometido errores de integración que costaron semanas de retrabajo.
- En un proyecto de microfrontends, la revisión se hizo después de que varios equipos implementaran patrones incompatibles, obligando a refactorizar módulos completos.

## Casos donde la review evitó errores costosos
- En una aseguradora, la revisión arquitectónica previa a la integración de IA detectó que los datos sensibles no estaban correctamente segregados, evitando una posible brecha de cumplimiento GDPR.
- En una empresa de salud, la review identificó que el pipeline de CI/CD permitía merges sin validar el architecture.md, corrigiendo el proceso antes de un incidente en producción.

## Casos relacionados con microfrontends
- En un marketplace, la review permitió definir una matriz de dependencias clara entre microfrontends, evitando imports cruzados y acelerando la integración de nuevos dominios.
- En una empresa retail, la falta de review provocó que dos equipos implementaran lógicas de autenticación incompatibles en microfrontends distintos.

## Casos relacionados con DevOps
- En una fintech, la Architecture Review integró la validación automática del architecture.md en el pipeline de CI/CD, reduciendo errores humanos y acelerando releases.
- En una empresa de energía, la ausencia de revisión arquitectónica llevó a pipelines fragmentados y a la duplicación de scripts de despliegue.

## Casos relacionados con onboarding
- En una startup, la review de arquitectura sirvió como base para el onboarding técnico, permitiendo que nuevos developers fueran productivos en menos de una semana.
- En una consultora, la falta de revisión y documentación provocó que el onboarding dependiera de sesiones orales y mentoring informal, ralentizando la integración.

## Casos relacionados con architecture.md
- En una empresa SaaS, la review permitió actualizar el architecture.md con decisiones históricas y anti-patrones detectados, convirtiéndolo en una herramienta viva.
- En una telco, la ausencia de architecture.md actualizado dificultó la integración de equipos tras una fusión.

## Casos relacionados con IA y Context Engineering
- En un equipo enterprise, la review permitió adaptar el architecture.md para que la IA (Copilot) generara código alineado con las convenciones del equipo.
- En una startup, la falta de contexto explícito en la documentación llevó a que la IA propusiera soluciones incompatibles con las restricciones regulatorias.

## Preguntas que una buena Architecture Review debería responder
- ¿Qué decisiones arquitectónicas recientes han cambiado el contexto del sistema?
- ¿Dónde existe deuda de conocimiento crítica?
- ¿Qué dependencias o integraciones presentan mayor riesgo?
- ¿El architecture.md refleja la realidad actual del sistema?
- ¿La documentación es suficiente para que humanos y máquinas operen sin errores?
- ¿Qué anti-patrones se han detectado y cómo se están mitigando?
- ¿El pipeline de CI/CD valida las reglas arquitectónicas?
- ¿Qué aprendizajes recientes deben incorporarse a la documentación?

## Anti-patrones frecuentes
- Revisiones centradas solo en compliance o checklist.
- Falta de participación de los equipos técnicos.
- No actualizar el architecture.md tras la review.
- Ignorar dependencias entre dominios o microfrontends.
- Realizar la review demasiado tarde en el ciclo de vida.
- No documentar decisiones ni excepciones.

## Objeciones habituales
- "No tenemos tiempo para una review completa."
- "Ya cumplimos con el checklist de auditoría."
- "La arquitectura no ha cambiado, no hace falta revisar."
- "La IA ya nos ayuda, no necesitamos revisar la documentación."
- "El architecture.md es solo para onboarding, no para el día a día."

## Indicadores de éxito
- Reducción de incidentes y retrabajo tras la review.
- Onboarding más rápido y autónomo.
- architecture.md actualizado y consultado regularmente.
- Menos dependencias ocultas y errores de integración.
- Validación automática de reglas arquitectónicas en CI/CD.
- Mayor alineación entre humanos y sistemas inteligentes.
