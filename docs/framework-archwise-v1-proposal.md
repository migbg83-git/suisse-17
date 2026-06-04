# Framework Archwise v1 - Proposal

Fecha: 2026-06-04
Alcance: análisis, arquitectura de información y especificación funcional (sin implementación)

---

# 1. Executive Summary

¿Debe existir `/framework`?

**Sí.**

Archwise ya tiene masa crítica suficiente para evolucionar desde índice editorial a entidad conceptual explícita:
- 25 artículos publicados con continuidad temática real.
- Secuencia madura 20 -> 21 -> 22 -> 23 -> 24 -> 25 que ya funciona como columna vertebral del modelo.
- Un bloque de "Mapa del framework" ya presente en `/articulos`, señal de que el framework dejó de ser implícito.

Actualizacion 2026-06-04:
- 26 articulos publicados.
- article-26 formaliza explicitamente el Framework Archwise como sistema integrado.
- La secuencia 20 -> 26 constituye el nucleo conceptual actual de `/framework`.

El estado actual no es "blog + artículos sueltos"; es un corpus acumulativo con tesis, capas y dependencias. Una página propia `/framework` formaliza esa estructura y mejora comprensión estratégica sin sustituir `/articulos`.

Conclusión ejecutiva:
- El framework está **suficientemente estable para v1**.
- Aún evolucionará, pero eso no bloquea una primera versión editorial.
- La decisión recomendada es crear `/framework` como capa de orientación conceptual del sitio.

---

# 2. Objetivo de la página

## Problema que resuelve

Hoy el visitante encuentra artículos, pero no siempre entiende rápidamente:
- cuál es el modelo completo de Archwise,
- en qué orden tiene sentido recorrerlo,
- y cómo se conectan conceptos como Context Engineering, Governance, Memory y Context Systems.

`/framework` resolvería la brecha entre "consumo de piezas" y "comprensión del sistema".

## Para quién es

- CTOs y Heads of Engineering que quieren un marco de decisión, no solo contenido.
- Architects y Tech Leads que necesitan secuencia de madurez.
- Equipos enterprise que buscan mapa de transformación IA.
- Lectores nuevos que no saben por dónde empezar.

## Qué debe entender un visitante después de leerla

1. Qué es el Framework Archwise (no un framework técnico, sino operacional/organizativo).
2. Cuáles son sus capas y por qué ese orden importa.
3. Qué capacidades debe construir una organización en cada capa.
4. Qué artículos profundizan cada capa.
5. Cómo pasar de diagnóstico (no estamos listos) a sistema operativo IA escalable.

---

# 3. Relación con el resto del sitio

## Home

- Rol: entrada de marca y posicionamiento.
- Pregunta que responde: "¿Qué es Archwise y por qué importa?"
- No debe sustituir `/framework`; la Home presenta, no detalla modelo.

## Artículos

- Rol: exploración cronológica/editorial del corpus.
- Pregunta que responde: "¿Qué se ha publicado y qué leo ahora?"
- `/articulos` es índice; `/framework` es sistema conceptual.

## Framework

- Rol: mapa estructural y secuencia de capacidades.
- Pregunta que responde: "¿Cómo encajan todas las piezas y en qué orden?"
- Es la página de orientación estratégica del corpus.

## Manifiesto

- Rol: tesis y postura intelectual de Archwise.
- Pregunta que responde: "¿Cuál es la visión y el porqué?"
- `/framework` responde al cómo operativo; `manifesto` al porqué filosófico.

## Newsletter

- Rol: relación recurrente y distribución.
- Pregunta que responde: "¿Cómo sigo esta evolución?"
- Debe capturar interés después de comprender modelo o leer artículos.

## Regla de no solapamiento

- Home = promesa
- Manifiesto = principios
- Framework = arquitectura conceptual
- Artículos = evidencia y profundidad
- Newsletter = continuidad

---

# 4. Modelo conceptual actual

## Validación de estructura propuesta

Estructura propuesta por el encargo:

Contexto
↓
Governance
↓
Operating Model
↓
Memory
↓
Context Systems

La estructura es correcta como núcleo, pero para reflejar el corpus real de Archwise conviene explicitar dos capas previas/transversales:

1. **Diagnóstico AI-Ready** (entry layer)
2. **Contexto explícito y deuda de conocimiento**

Propuesta v1 ajustada:

1. Diagnóstico AI-Ready
2. Contexto explícito y Knowledge Debt
3. Governance
4. AI Operating Model
5. Organizational Memory
6. Context Systems

## Justificación del ajuste

- El corpus 11-13 demuestra que antes de diseñar governance/memory hay que diagnosticar preparación real.
- Los artículos 01-08 + 14-15 muestran que el contexto explícito no es accesorio, es prerrequisito.
- La secuencia 20-25 representa el tramo más maduro y debe mantenerse como columna principal.

## Estabilidad del framework

- **Estable para v1** en su esqueleto (capas y orden).
- **Evolutivo** en subcomponentes y prácticas (nuevas piezas, casos y patrones).
- Evaluación: estabilidad suficiente para publicar `/framework` sin esperar congelación completa.

---

# 5. Mapa de artículos

## Capa 1 - Diagnóstico AI-Ready

- 11. Por qué la mayoría de los sistemas no están preparados para IA
  - Cluster: AI-Ready Systems
  - Rol: diagnóstico de brecha estructural.
- 12. Las 7 características de una arquitectura realmente AI-Ready
  - Cluster: AI-Ready Systems
  - Rol: criterios de capacidad.
- 13. AI-Ready Systems vs Legacy Systems
  - Cluster: AI-Ready Systems
  - Rol: comparación de madurez.

## Capa 2 - Contexto explícito y Knowledge Debt

- 01. architecture.md vale más que prompts
  - Cluster: Context Engineering
  - Rol: principio fundacional.
- 03. Qué documentación necesita realmente un LLM
  - Cluster: Context Engineering
  - Rol: especificación de contexto útil.
- 06. Context Engineering para proyectos legacy
  - Cluster: Context Engineering
  - Rol: aterrizaje en sistemas reales.
- 07. Framework práctico para Context Engineering
  - Cluster: Context Engineering
  - Rol: método operativo.
- 08. Plantillas de architecture.md
  - Cluster: Context Engineering
  - Rol: acelerador práctico.
- 14. Prompt Engineering no es suficiente
  - Cluster: Context Engineering
  - Rol: límite del enfoque superficial.
- 15. Context vs Prompt Engineering
  - Cluster: Context Engineering
  - Rol: diferenciación conceptual.
- 02. Deuda técnica que la IA revela
  - Cluster: Technical Debt
  - Rol: evidencia de deuda estructural.
- 05. Technical Debt vs Knowledge Debt
  - Cluster: Technical Debt
  - Rol: formalización de deuda de conocimiento.

## Capa 3 - Governance

- 09. Architecture Review efectiva
  - Cluster: Governance
  - Rol: mecanismo de control/transferencia.
- 10. Architecture Governance
  - Cluster: Governance
  - Rol: modelo de gobernanza arquitectónica.
- 20. AI Governance Framework
  - Cluster: Governance
  - Rol: marco explícito para IA a escala.

## Capa 4 - AI Operating Model

- 21. AI Operating Model
  - Cluster: Enterprise AI
  - Rol: diseño organizativo de ejecución.
- 16. AI-Augmented Development Teams
  - Cluster: Enterprise AI
  - Rol: impacto operativo en equipos.
- 17. AI-Native Organizations
  - Cluster: Enterprise AI
  - Rol: target operating state.

## Capa 5 - Organizational Memory

- 22. Organizational Memory
  - Cluster: Enterprise AI
  - Rol: activo organizativo central.
- 23. Memory Architecture
  - Cluster: Enterprise AI
  - Rol: diseño sistémico de memoria reutilizable.

## Capa 6 - Context Systems

- 24. Context Systems
  - Cluster: Enterprise AI
  - Rol: entrega contextual en tiempo de decisión.
- 25. Agentic AI en la empresa
  - Cluster: Enterprise AI
  - Rol: Enterprise Agent Architecture como síntesis operacional de las cinco capas previas.
- 26. Framework Archwise
  - Cluster: Enterprise AI
  - Rol: sintesis sistémica que integra governance, operating model, memoria, context systems y agentes como una sola capacidad organizativa.
- 19. Enterprise AI Transformation Roadmap
  - Cluster: Enterprise AI
  - Rol: puente de evolución entre capas.
- 18. Por qué fracasan iniciativas IA
  - Cluster: Enterprise AI
  - Rol: antipatrones y fallos por omisión de capacidades.

## Artículo de soporte transversal

- 04. La arquitectura vuelve a ser estratégica
  - Cluster: Architecture Strategy
  - Rol: metacapa de decisión arquitectónica transversal.

---

# 6. Wireframe funcional

Sin código. Estructura propuesta para `/framework`:

```text
+-------------------------------------------------------------+
| H1: Framework Archwise                                      |
| Subtítulo: De contexto explícito a sistemas AI-native       |
| CTA secundario: Ver artículos del framework                 |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
| Bloque 1: Qué es este framework                             |
| - Problema que resuelve                                     |
| - Para quién aplica                                         |
| - Cómo usar esta página                                     |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
| Bloque 2: Mapa de capas (overview)                          |
| [1 Diagnóstico AI-Ready] -> [2 Contexto] -> [3 Governance] |
| -> [4 Operating Model] -> [5 Memory] -> [6 Context Systems] |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
| Bloque 3: Capas detalladas                                  |
|                                                             |
| Capa 1: Diagnóstico AI-Ready                                |
| - objetivo de la capa                                       |
| - decisiones que habilita                                   |
| - artículos clave (links)                                   |
|                                                             |
| Capa 2: Contexto explícito y Knowledge Debt                 |
| - objetivo / decisiones / artículos clave                   |
|                                                             |
| Capa 3: Governance                                           |
| ...                                                         |
|                                                             |
| Capa 4: Operating Model                                     |
| ...                                                         |
|                                                             |
| Capa 5: Organizational Memory                               |
| ...                                                         |
|                                                             |
| Capa 6: Context Systems                                     |
| ...                                                         |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
| Bloque 4: Cómo empezar (rutas de lectura)                   |
| - Ruta CTO (5 lecturas)                                     |
| - Ruta Architect (5 lecturas)                               |
| - Ruta Tech Lead (5 lecturas)                               |
+-------------------------------------------------------------+

+-------------------------------------------------------------+
| Bloque 5: Relación con Articles / Manifesto / Newsletter    |
| - Ir a /articulos                                            |
| - Leer manifiesto                                             |
| - Suscribirse                                                 |
+-------------------------------------------------------------+
```

---

# 7. Navegación

## Secuencia fundacional actual (nucleo del Framework Archwise)

20. Governance  
21. Operating Model  
22. Organizational Memory  
23. Memory Architecture  
24. Context Systems  
25. Enterprise Agent Architecture  
26. Framework Archwise

Esta secuencia constituye hoy el nucleo conceptual operativo del Framework Archwise: pasa de capacidades aisladas a sistema integrado y sirve como base directa para la pagina `/framework`.

## Desde Home

- Entrada primaria en navbar: `Framework`.
- Entrada secundaria en Home body: bloque "Cómo pensamos" con enlace a `/framework`.

## Desde Artículos

- En `/articulos`: mantener "Mapa del framework" como resumen y añadir enlace textual "Ver framework completo".
- Sin sustituir la función editorial de `/articulos`.

## Desde cada artículo

- En la cabecera o footer del artículo: "Este artículo pertenece a la capa X del Framework Archwise" con enlace a `/framework#capa-x`.
- Permite contexto inmediato sin romper lectura.

## Principio de navegación

- `/framework` no reemplaza descubrimiento cronológico.
- `/framework` añade descubrimiento estructural.

---

# 8. Evolución futura

## Con 30 artículos

- Mantener 6 capas.
- Añadir subtemas por capa (2-4 subnodos máximos).
- Añadir "artículos recomendados" por rol (CTO/Architect/Lead).

## Con 50 artículos

- Introducir páginas satélite por capa:
  - `/framework/contexto`
  - `/framework/governance`
  - etc.
- `/framework` pasa a ser hub principal + resumen ejecutivo.

## Con 100 artículos

- Taxonomía dual:
  - por capa del framework
  - por etapa de madurez organizativa
- Añadir matriz "capacidad vs madurez" y rutas de adopción.
- Posible versión interactiva (sin perder versión editorial estática base).

Regla de escalado:
- Primero claridad conceptual.
- Después granularidad.
- Nunca complejidad visual por encima de legibilidad editorial.

---

# 9. Riesgos

## Complejidad

Riesgo:
- Convertir `/framework` en un mapa excesivamente técnico.

Mitigación:
- Mantener v1 como guía editorial de decisión, no documentación enciclopédica.

## Mantenimiento

Riesgo:
- El framework quede desactualizado al publicarse nuevos artículos.

Mitigación:
- Regla editorial: cada nuevo artículo debe mapear capa del framework en su cierre de workflow.

## Duplicación de contenido

Riesgo:
- Repetir en `/framework` lo ya dicho en `/articulos` o en artículos individuales.

Mitigación:
- `/framework` resume y conecta; no sustituye ni replica artículos.

## Impacto editorial

Riesgo:
- El equipo priorice forma (página framework) frente a producción de contenido.

Mitigación:
- V1 ligera en esfuerzo, con copy breve y enlaces a activos existentes.

## Riesgo estratégico

Riesgo:
- Publicar un framework demasiado pronto y tener que rediseñarlo cada 2 semanas.

Mitigación:
- Definir v1 como "modelo en evolución" con versión semántica (v1.0, v1.1).

---

# 10. Recomendación final

Clasificación solicitada:

**B) Crear `/framework` en los próximos 30 días.**

## Justificación

Por qué no A (no crear todavía):
- El corpus ya superó umbral de masa crítica (25 artículos + secuencia madura 20-25).
- El framework ya existe de facto en `/articulos` y en la tesis editorial.

Por qué no C (crear inmediatamente):
- Conviene cerrar primero especificación IA + narrativa de capas y alinearla con la recomendación de article-25.
- Una ventana de 30 días permite diseñar v1 con precisión y evitar iteración reactiva.

Por qué B es óptima:
- Equilibra oportunidad estratégica y calidad editorial.
- Permite lanzar una versión sobria, estable y mantenible.
- Formaliza la transición de "colección de artículos" a "framework editorial propio" sin romper arquitectura actual.

## Decisión propuesta

- Aprobar diseño funcional de `/framework` (v1) ahora.
- Planificar implementación en siguiente ciclo (<= 30 días).
- Mantener el bloque actual de `/articulos` como teaser/hub secundario hasta que `/framework` exista.

---

## Criterio de éxito de la decisión

La decisión será correcta si, tras lanzar `/framework`, se observa:
- mejor comprensión del modelo Archwise en lectores nuevos,
- aumento de navegación cruzada entre capas y artículos,
- reducción de dependencia del orden cronológico para entender el corpus,
- mayor claridad comercial/editorial sobre qué ofrece Archwise como sistema.

---

## Nota estratégica post article-25

Article-25 completa explícitamente la secuencia estructural del framework:

- 20 Governance
- 21 Operating Model
- 22 Organizational Memory
- 23 Memory Architecture
- 24 Context Systems
- 25 Enterprise Agent Architecture / Agentic AI

Esta secuencia constituye actualmente la columna vertebral conceptual del Framework Archwise.
