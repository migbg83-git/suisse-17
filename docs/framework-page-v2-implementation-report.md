# Framework Page V2 Implementation Report

Fecha: 2026-06-09  
Scope: /framework only (editorial + UX copy)

## 1) Cambios realizados

### Hero (problema primero)
- Title actualizado a: "La IA empresarial falla por arquitectura, no por modelos."
- Subtítulo actualizado para explicar qué es Archwise y por qué existe.
- Frase fundacional añadida en Hero:
  - "Los problemas de IA empresarial rara vez son problemas de modelos. Son problemas de arquitectura."
- Métricas actualizadas a:
  - 6 capas arquitectónicas conectadas
  - 1 orden causal de decisiones
  - 30 decisiones críticas explicadas
- "Navega por dependencias, no por cronología." se mantiene como soporte visible.

### Bloques insertados
- Bloque nuevo: "¿Qué es Archwise?"
- Bloque nuevo: "Cómo navegar Archwise"
- Copy reescrito con ejemplos de situaciones reales (agentes, copilots, automatización, escalado, governance, memoria).

### Reordenación de secciones
- Continuidad movida antes de Vocabulario para orientar el siguiente paso antes de términos avanzados.

### Continuidad reorganizada
- Heading cambiado a: "Elige tu siguiente paso"
- CTAs reescritos a orientación de decisión:
  - Soy nuevo en Archwise
  - Soy CTO / Enterprise Architect / Head of Engineering
  - Ya conozco el framework

### Vocabulario avanzado (colapsado)
- Implementado colapso inicial con details/summary:
  - Summary: "Ver vocabulario avanzado"
- Sin cambios de lógica global ni de datos estructurales.

## 2) Archivos modificados

- sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.html
- sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts
- sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html
- sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-continuity/framework-continuity.component.html
- sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-vocabulary/framework-vocabulary.component.html

## 3) Cambios NO realizados (restricciones respetadas)

- No se alteraron las 6 capas.
- No se alteraron pathMappings.
- No se alteraron rutas recomendadas ni su lógica.
- No se alteró lógica Angular de negocio.
- No se tocaron artículos ni otras páginas.
- No hubo deploy.

## 4) Validaciones ejecutadas

### Builds solicitados (x3)
- npm run build (1)
- npm run build (2)
- npm run build (3)

Resultado consolidado en las 3 ejecuciones:
- build:content -> Generated: articles.json (30 articles)
- build:seo -> sitemap.xml and robots.txt generated
- build:ssg -> Prerendered 34 static routes
- Sin errores bloqueantes (solo warnings previos no relacionados con /framework)

### Checks funcionales
- /framework renderiza correctamente: True
- 30 artículos presentes en articles.json: True
- 34 rutas prerenderizadas: True
- Slugs no resueltos en build log: False
- Mensajes "Artículo base no resuelto" en /framework prerender: False

### Checks de copy V2 aplicado
- Hero title nuevo presente: True
- Frase fundacional presente: True
- Bloque "¿Qué es Archwise?" presente: True
- Bloque "Cómo navegar Archwise" presente: True
- Heading continuidad nuevo presente: True
- Vocabulario colapsado (details/summary) presente: True

## 5) Capturas lógicas de antes/después

### Antes
- Hero centrado en navegación abstracta sin problema empresarial explícito.
- Sin frase fundacional visible en zona alta.
- Continuidad con tono de footer (Artículos/Manifesto/Newsletter).
- Vocabulario avanzado visible de forma inmediata.

### Después
- Hero abre con problema empresarial y tesis arquitectónica explícita.
- Frase fundacional visible arriba.
- "Qué es" y "Cómo navegar" explican propósito y uso por situaciones reales.
- Continuidad orienta decisión de siguiente paso por tipo de lector.
- Vocabulario avanzado inicia colapsado.

## 6) Posibles mejoras futuras (sin aplicar en esta implementación)

- Medir CTR por CTA de Continuidad para validar nueva orientación.
- Añadir telemetría de expansión de "Ver vocabulario avanzado".
- Ajustar microcopy por segmento (CTO vs Enterprise Architect vs Head of Engineering) según datos de uso.
- Evaluar sticky anchor corto para saltar entre "Qué es", "Cómo navegar" y "Ruta recomendada".

## 7) Estado final

Implementación V2 completada y validada en /framework, cumpliendo restricciones técnicas y editoriales solicitadas.
