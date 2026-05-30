# Material bruto — notes.md

## Organizaciones que estaban preparadas para IA
- En una fintech, la arquitectura basada en microservicios y documentación viva permitió integrar modelos de IA en distintos puntos del negocio en cuestión de semanas. El onboarding de nuevos equipos era rápido gracias a playbooks técnicos y un architecture.md actualizado.
- Una empresa SaaS con cultura de Architecture Reviews periódicas logró que la IA sugiriera mejoras arquitectónicas y detectara deuda técnica antes de que se convirtiera en un problema crítico.

## Organizaciones que no estaban preparadas
- En una telco, la arquitectura monolítica y la falta de separación de dominios impidió la integración de IA para personalización de servicios. Los intentos de modernización chocaron con dependencias ocultas y documentación desactualizada.
- En una empresa de salud, la ausencia de onboarding técnico y la dependencia de expertos aislados provocó que la IA generara recomendaciones erróneas y riesgos regulatorios.

## Casos donde la arquitectura facilitó la adopción de IA
- En una empresa de logística, la existencia de APIs bien documentadas y un bus de eventos permitió conectar sistemas legacy con nuevos módulos de IA sin interrumpir operaciones.
- En una startup, la arquitectura modular y la práctica de Context Engineering facilitaron que la IA entendiera excepciones y reglas de negocio específicas, evitando anti-patrones frecuentes.

## Casos donde la arquitectura bloqueó la adopción de IA
- En una aseguradora, la falta de interoperabilidad entre sistemas y la inexistencia de un modelo de datos común bloqueó la automatización inteligente de procesos clave.
- En una empresa pública, la arquitectura orientada solo a cumplimiento normativo dificultó la experimentación y el aprendizaje con IA, generando resistencia interna.

## Casos relacionados con architecture.md
- En una empresa SaaS, el architecture.md era el punto de partida para cualquier integración de IA, permitiendo validar restricciones y acelerar el onboarding.
- En una consultora, el architecture.md era un documento ceremonial, lo que llevó a la IA a cometer errores repetidos y a depender de expertos para resolver ambigüedades.

## Casos relacionados con Context Engineering
- En una fintech, la adopción de Context Engineering permitió a la IA identificar excepciones y patrones de negocio, mejorando la calidad de las recomendaciones.
- En una empresa industrial, la ausencia de prácticas de Context Engineering llevó a la IA a replicar errores históricos y a no captar restricciones críticas.

## Casos relacionados con Architecture Reviews
- En una empresa de energía, las Architecture Reviews periódicas permitieron anticipar conflictos de integración antes de desplegar IA, evitando incidentes en producción.
- En una empresa de retail, la falta de revisiones sistemáticas provocó que la IA heredara deuda técnica y errores de versiones anteriores.

## Casos relacionados con Governance
- En una multinacional, el governance adaptativo facilitó la transferencia de contexto y la integración de IA en procesos críticos.
- En una empresa de banca, el governance burocrático bloqueó la adopción de IA por falta de acceso a restricciones y aprendizajes clave.

## Casos relacionados con onboarding
- En una startup, el onboarding técnico incluía sesiones de transferencia de conocimiento y documentación viva, lo que permitió a la IA integrarse rápidamente en nuevos flujos de trabajo.
- En una empresa pública, la ausencia de onboarding estructurado provocó que la IA repitiera errores y dependiera de expertos para tareas básicas.

## Casos relacionados con knowledge debt
- En una consultora, la rotación alta de personal dejó a la IA sin acceso a reglas de negocio críticas, que solo existían en la memoria de expertos que ya no estaban.
- En una empresa de logística, la deuda de conocimiento acumulada durante años bloqueó la automatización inteligente y generó resistencia a la modernización.

## Características observables de organizaciones AI-Ready
- Documentación viva y architecture.md actualizado.
- Arquitectura modular, APIs bien definidas y separación de dominios.
- Prácticas de Context Engineering y revisiones arquitectónicas regulares.
- Onboarding técnico estructurado y cultura de transferencia de conocimiento.
- Governance adaptativo y orientado a la colaboración.

## Características observables de organizaciones NO AI-Ready
- Arquitectura monolítica, dependencias ocultas y documentación desactualizada.
- Falta de onboarding técnico y dependencia de expertos únicos.
- Governance burocrático y resistencia al cambio.
- Deuda de conocimiento acumulada y silos de información.

## Trade-offs reales
- Invertir en modularidad y documentación viva requiere tiempo y recursos, pero reduce errores y acelera la integración de IA.
- Mantener sistemas legacy puede garantizar continuidad operativa, pero bloquea la innovación y la escalabilidad.
- Un governance adaptativo puede parecer más lento, pero previene errores costosos y facilita la evolución continua.

## Anti-patrones frecuentes
- Implementar IA como parche sin preparar la arquitectura ni el contexto.
- Mantener documentación solo para auditoría.
- Permitir silos de conocimiento y falta de transferencia entre equipos.
- Onboarding de IA sin framework ni contexto diferencial.
- Integrar IA sin validar calidad de datos ni restricciones regulatorias.
