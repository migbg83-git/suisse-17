---
title: Material bruto — Plantillas y ejemplos reales de architecture.md para proyectos enterprise
slug: notes-plantillas-ejemplos-architecture-md-enterprise
---

# Experiencias reales de proyectos enterprise
- Proyecto fintech: la existencia de un architecture.md permitió a un equipo remoto en LATAM entender en 2 días las restricciones regulatorias y patrones prohibidos, evitando errores legales costosos.
- Multinacional retail: tras una fusión, el único documento que permitió integrar dos plataformas fue un architecture.md actualizado con decisiones históricas y convenciones de integración.
- SaaS B2B: la ausencia de architecture.md provocó que dos equipos implementaran dos sistemas de autenticación incompatibles, generando meses de retrabajo.

# Casos donde un architecture.md fue útil
- Onboarding de developers en menos de una semana gracias a ejemplos claros de estructura de carpetas y naming.
- Integración de IA: Copilot y ChatGPT generaban código alineado con las convenciones del equipo tras alimentar el contexto con el architecture.md.
- Auditoría externa: el architecture.md permitió demostrar cumplimiento de requisitos de seguridad y trazabilidad.

# Casos donde la ausencia de documentación generó problemas
- Refactorizaciones que rompieron dependencias críticas por desconocer reglas de dominio.
- Nuevos miembros que tardaron meses en ser productivos por falta de contexto explícito.
- Repetición de errores históricos por no documentar decisiones pasadas.

# Ejemplos de contexto diferencial
- "En este monorepo, los microfrontends de facturación y pagos no pueden compartir dependencias directas por motivos regulatorios."
- "Todos los servicios de notificaciones deben implementar la interfaz INotificable y registrar logs en el sistema central."
- "No se permite el uso de ORM X en el dominio de pagos por problemas de rendimiento detectados en 2023."

# Ejemplos de decisiones arquitectónicas relevantes
- Migración de monolito a microservicios: justificación, riesgos asumidos, patrones descartados.
- Elección de CQRS solo en dominios críticos, documentando por qué no se aplica globalmente.
- Uso de signals en Angular en vez de BehaviorSubject, con explicación de la decisión.

# Ejemplos de convenciones de equipo
- Naming: todos los servicios terminan en "FacadeService".
- Estructura de carpetas por dominio, nunca por tipo técnico.
- Prohibición de imports cruzados entre dominios salvo excepciones documentadas.

# Ejemplos de onboarding técnico
- Primer día: lectura guiada del architecture.md y walkthrough de decisiones clave.
- Checklist de preguntas frecuentes respondidas en el documento.
- Ejercicio práctico: crear un PR siguiendo las convenciones documentadas.

# Ejemplos de knowledge debt
- Dependencia de un único arquitecto para entender la configuración de Nginx.
- Falta de registro de por qué se descartó una tecnología, repitiendo evaluaciones cada año.
- Cambios en pipelines CI/CD que rompen despliegues por no documentar scripts críticos.

# Ejemplos relacionados con IA y Context Engineering
- IA generando código incorrecto hasta que se le proporciona el architecture.md como contexto.
- Prompt engineering ineficaz cuando el contexto diferencial no está documentado.
- Mejora radical en la calidad de sugerencias de Copilot tras añadir convenciones explícitas.

# Secciones habituales de un architecture.md
- Stack tecnológico y versiones
- Convenciones de naming y estructura
- Patrones permitidos y prohibidos
- Decisiones históricas y justificación
- Matriz de dependencias entre dominios
- Reglas de despliegue y automatización
- Restricciones regulatorias o de seguridad
- Ejemplos de código y anti-patrones
- Contactos o responsables de cada área

# Errores frecuentes
- Documentar solo lo obvio (stack, frameworks) y no lo diferencial.
- No actualizar el architecture.md tras cambios críticos.
- Hacer el documento demasiado extenso y poco práctico.
- No incluir ejemplos reales ni anti-patrones.
- No vincular el architecture.md a los pipelines de CI/CD.

# Objeciones habituales de los equipos
- "No tenemos tiempo para documentar."
- "Todo el mundo ya sabe cómo funciona."
- "La documentación se queda obsoleta."
- "La IA debería poder deducirlo."
- "Es demasiado burocrático."

# Comparaciones entre documentación útil y documentación inútil
- Útil: "No se permite el uso de ORM X en pagos por incidentes de 2023." Inútil: "Usamos Node.js y Angular."
- Útil: "Los microfrontends de facturación y pagos no pueden compartir dependencias." Inútil: "Tenemos varios microfrontends."
- Útil: "Todos los servicios de notificaciones deben implementar INotificable." Inútil: "Tenemos un sistema de notificaciones."
