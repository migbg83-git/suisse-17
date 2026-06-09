# Framework Clarity Phase 1 Report

Fecha: 2026-06-09  
Proyecto: Archwise  
Página auditada: /framework  
Objetivo de fase: que un CTO, Enterprise Architect o Head of Engineering pueda responder en <60s: "¿Qué es Archwise y para qué sirve?"

## 1. Auditoría de comprensión (P0/P1/P2)

### P0 (crítico: bloquea comprensión en primera visita)

1. Definición ambigua de "qué es Archwise" en Hero e introducción.
   Síntoma: se entiende que hay 6 capas, pero no queda explícito rápido si es framework, herramienta o plataforma.

2. Falta de respuesta explícita a "qué obtiene el usuario".
   Síntoma: no se aterrizaba claramente el output inmediato (secuencia de decisiones priorizadas).

3. Inicio poco guiado para perfiles nuevos vs perfiles ejecutivos.
   Síntoma: no quedaba inequívoco el siguiente paso para visitante nuevo ni para CTO.

4. Mapa y Constructor explicaban mecanismo, pero no resultado.
   Síntoma: el usuario podía interpretarlos como navegación editorial y no como soporte de decisión.

### P1 (alto: degrada velocidad de entendimiento)

1. Frontera conceptual entre framework/metodología aún puede requerir ejemplos concretos por caso.
2. Vocabulario avanzado sigue teniendo alta abstracción para primera visita (aunque no bloquea entrada).
3. El puente "ruta recomendada -> decisión operativa semanal" aún puede reforzarse con un formato más decisional.

### P2 (medio: optimización incremental)

1. Uniformar wording de outputs por rol (CTO/EA/HoE) en todos los módulos.
2. Añadir ejemplos mínimos de aplicación por industria/dominio.
3. Consolidar glosario avanzado con ejemplos de anti-patrones.

---

## 2. Cambios P0 aplicados (automáticos)

Se aplicaron exclusivamente cambios de claridad conceptual/copy. No hubo cambios visuales, de color, animación ni arquitectura técnica.

### 2.1 Hero de Framework

Archivo: sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.html

Cambios:

1. Se agregó definición explícita:
   "Archwise es un framework de decisiones arquitectónicas..."
2. Se aclaró explícitamente qué no es:
   "No se instala, no es plataforma, no sustituye herramientas actuales."
3. Se explicitó para qué sirve:
   decidir qué va primero para escalar IA con control de riesgo, trazabilidad y coherencia.
4. Se explicitó qué obtiene el usuario:
   "una secuencia clara de decisiones para empezar hoy".
5. CTAs renombradas a pasos:
   "Paso 1: ver las capas" y "Paso 2: generar ruta recomendada".
6. Se reescribió "Cómo empezar" en lenguaje de bloqueo real y salida accionable.

### 2.2 Sección inicial (Qué es / Cómo navegar)

Archivo: sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html

Cambios:

1. Reescritura simplificada de "¿Qué es Archwise?" para primera visita.
2. Diferenciación explícita:
   framework vs herramienta vs plataforma vs metodología.
3. Se añadió output explícito:
   "secuencia causal de decisiones para priorizar qué hacer primero".
4. Se añadió secuencia de uso para primera visita:
   Mapa -> Capas -> Constructor de ruta.
5. Se añadió recomendación directa por perfil:
   visitante nuevo vs CTO.

### 2.3 Mapa de capas

Archivo: sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-map/framework-layer-map.component.html

Cambios:

1. Se explicitó para qué sirve el mapa:
   identificar dónde empezar y qué riesgo aparece al saltar dependencias.
2. Se agregó instrucción de siguiente paso:
   después del mapa, ir a "Qué habilita cada capa" para convertir lectura en decisión.

### 2.4 Constructor de ruta

Archivo: sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-navigator/framework-navigator.component.html

Cambios:

1. Se explicitó qué está haciendo:
   perfil + objetivo para generar secuencia en orden causal.
2. Se explicitó qué resultado produce:
   ruta inicial accionable para decidir qué resolver primero.
3. Se agregó instrucción en resultado:
   usar la ruta como orden de trabajo inicial para reducir riesgo antes de escalar.

### 2.5 Navegación general / siguiente paso

Archivo: sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts

Cambios:

1. CTA "Soy nuevo en Archwise":
   link y descripción reescritos para entrada de primera visita.
2. CTA "CTO/EA/HoE":
   link y descripción reescritos para priorización ejecutiva de decisiones.
3. Se reforzó el framing de "siguiente paso recomendado" en ambos casos.

---

## 3. Build completo (requerido)

Comando ejecutado 3 veces:

1. npm run build
2. npm run build
3. npm run build

Resultado:

1. 3/3 builds exitosos.
2. Prerendered 34 static routes en las 3 ejecuciones.
3. Sin errores nuevos de compilación.
4. Warnings observados: preexistentes (Angular diagnostics y Sass deprecations), no introducidos por esta fase.

Tiempos observados:

1. Build 1: ~27.8s
2. Build 2: ~15.3s
3. Build 3: ~12.9s

---

## 4. Impacto esperado en comprensión

### Pregunta objetivo
"¿Qué es Archwise y para qué sirve?"

### Antes

1. Se entendía la existencia de 6 capas.
2. Persistía confusión sobre la naturaleza exacta (framework vs plataforma/herramienta).
3. Salida esperada y punto de inicio no quedaban explícitos para todos los perfiles.

### Después (esperado)

1. Definición y delimitación explícitas en primera pantalla.
2. Respuesta directa a "qué obtiene el usuario" en términos de decisión.
3. Flujo de entrada claro para visitante nuevo y para CTO.
4. Mapa y Constructor pasan de "navegación" a "instrumentos de priorización" en el copy.

Estimación de mejora:

1. Comprensión de naturaleza del producto en <60s: alta probabilidad.
2. Reducción de la pregunta "¿hay que instalar algo?": significativa.
3. Reducción de ambigüedad "metodología vs herramienta vs plataforma": significativa.

---

## 5. Resultado final de fase

Estado: PHASE 1 COMPLETE (P0 aplicado)

Objetivo de fase:

1. Auditoría P0/P1/P2: completada.
2. Aplicación automática de todos los cambios P0: completada.
3. Triple build: completado con éxito.
4. Reporte de fase: completado.

No se realizaron:

1. Cambios de CSS visual no imprescindibles.
2. Cambios de color.
3. Animaciones.
4. Cambios de arquitectura técnica.

---

## 6. Riesgos pendientes

1. Algunos términos avanzados siguen siendo densos para visitantes no técnicos (P1).
2. La página explica mejor "qué es" y "para qué sirve", pero aún puede reforzar "qué hacer esta semana" por rol con ejemplos concretos.
3. Parte del valor sigue distribuido en varias secciones; todavía hay dependencia de recorrido completo para capturar todo el contexto.

---

## 7. Próximas recomendaciones P1

1. Añadir en /framework una micro-sección "En 15 minutos te llevas" con 3 outputs medibles.
2. Incorporar una tabla breve por rol (CTO/EA/HoE): problema típico -> primera decisión -> capa de entrada.
3. Añadir ejemplos concretos de decisión por capa (1 ejemplo por capa, 1 línea cada uno).
4. Reforzar en el resultado del Constructor una síntesis "Primera decisión recomendada" y "Riesgo evitado".
5. Simplificar 2-3 términos del vocabulario avanzado con una versión corta orientada a operación.

---

## 8. Archivos modificados en esta fase

1. sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-hero/framework-hero.component.html
2. sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html
3. sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-layer-map/framework-layer-map.component.html
4. sites/enterprise-ai/archwise/src/app/pages/framework/components/framework-navigator/framework-navigator.component.html
5. sites/enterprise-ai/archwise/src/app/pages/framework/framework.data.ts
