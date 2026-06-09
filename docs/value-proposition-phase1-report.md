# Value Proposition Phase 1 Report

Fecha: 2026-06-09  
Proyecto: Archwise  
Fase: Value Proposition P0  
Estado final: VALUE PROPOSITION P0 COMPLETE

## Objetivo de fase

Implementar el P0 definido en `docs/value-proposition-audit.md` para que un CTO, Enterprise Architect o Head of Engineering comprenda en menos de 60 segundos:

1. Qué valor obtiene.
2. Qué riesgo evita.
3. Qué decisión mejora.
4. Qué resultado empresarial consigue.

---

## Problemas detectados (base P0)

1. La comprensión de "qué es Archwise" había mejorado, pero faltaba claridad de "por qué me importa ahora".
2. Home y Framework comunicaban tesis arquitectónica, pero no aterrizaban de forma inmediata valor por rol.
3. No existía un bloque explícito problema-riesgo-entrada-resultado para autodiagnóstico rápido.
4. El valor diferencial frente a marcos IA genéricos no estaba repetido en bloques de alta visibilidad de decisión.

---

## Cambios P0 implementados

Se implementó únicamente el enfoque P0 definido en `docs/value-proposition-audit.md`.

No se tocó:

1. Navegación.
2. Artículos.
3. Arquitectura técnica.
4. Diseño visual de fondo (solo ajustes mínimos de estructura CSS).

### A) Home (`/`)

#### 1. Nueva sección: "Problemas que Archwise ayuda a resolver"

Ubicación aplicada:

1. Debajo del Hero (filtro de relevancia temprana), tal como define el audit.

Contenido aplicado:

1. Título y subtítulo exactos del enfoque P0.
2. Mensaje diferencial canónico:
   "Otros marcos te dicen qué capacidades IA existen..."
3. 5 problemas P0 con estructura:
   1. Problema observado
   2. Riesgo
   3. Entrada recomendada
   4. Resultado esperado
4. CTA de sección a `#mapa` en Framework:
   "Ver por dónde empezar según tu problema"

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/home/home.component.html`

#### 2. Nueva sección: "En 15 minutos te llevas"

Ubicación aplicada:

1. Después de "Framework Archwise" y antes de "Decisiones arquitectónicas destacadas", tal como define el audit.

Contenido aplicado:

1. Título y subtítulo exactos del enfoque P0.
2. 3 tarjetas por rol:
   1. CTO
   2. Enterprise Architect
   3. Head of Engineering
3. En cada tarjeta:
   1. Valor
   2. Riesgo
   3. Decisión
   4. Resultado
4. CTA de sección a `#navigator` en Framework:
   "Generar mi ruta inicial"

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/home/home.component.html`

#### 3. Ajustes mínimos de CSS (solo estructura)

Aplicado:

1. Layout grid responsive para tarjetas/listados.
2. Tipografía y espaciado para legibilidad del nuevo contenido.
3. Reutilización de tokens y estilo existente.

No aplicado:

1. Cambios de color de marca.
2. Rediseño visual.
3. Animaciones.

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/home/home.component.scss`

---

### B) Framework (`/framework`)

#### 1. Nueva sección: "En 15 minutos te llevas"

Ubicación aplicada:

1. Debajo de "¿Qué es Archwise?" y antes de "Cómo navegar", tal como define el audit.

Contenido aplicado:

1. Título y subtítulo exactos del enfoque P0.
2. 3 tarjetas por rol (CTO, EA, HoE) con:
   1. Valor
   2. Riesgo
   3. Decisión
   4. Resultado
3. CTA de sección a `#navigator`:
   "Generar mi ruta inicial"

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html`

#### 2. Nueva sección: "Problemas que Archwise ayuda a resolver"

Ubicación aplicada:

1. Después de "Cómo navegar" y antes de "Mapa", tal como define el audit.

Contenido aplicado:

1. Título y subtítulo exactos del enfoque P0.
2. Mensaje diferencial canónico repetido.
3. 5 problemas P0 con estructura:
   1. Riesgo
   2. Entrada
   3. Resultado
4. CTA de sección a `#mapa`:
   "Ver por dónde empezar según tu problema"

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.html`

#### 3. Ajustes mínimos de CSS (solo estructura)

Aplicado:

1. Grid responsive y tarjetas para bloques de valor/problemas.
2. Espaciado y legibilidad consistentes con estilo actual.

No aplicado:

1. Cambios de navegación.
2. Cambios de paleta o identidad visual.
3. Cambios de arquitectura.

Archivo:

1. `sites/enterprise-ai/archwise/src/app/pages/framework/framework.component.scss`

---

## Validación técnica (requerida)

Comandos ejecutados:

1. `npm run build`
2. `npm run build`
3. `npm run build`
4. `npm run build`

Resultado:

1. 4/4 builds exitosos.
2. 34 rutas prerenderizadas en cada ejecución.
3. Sin errores nuevos de compilación.
4. Warnings observados: preexistentes (Angular diagnostics + Sass deprecations), no introducidos por esta fase.

---

## Impacto esperado en comprensión de valor

### Para CTO

1. Entiende en menos tiempo el valor: priorización causal de iniciativas IA.
2. Identifica riesgo evitado: escalado sin control y deuda estructural.
3. Clarifica decisión: acelerar/pausar/secuenciar por dependencia.
4. Visualiza resultado: mayor predictibilidad y menor exposición.

### Para Enterprise Architect

1. Entiende valor: coherencia y trazabilidad intercapas.
2. Identifica riesgo evitado: fragmentación arquitectónica.
3. Clarifica decisión: dependencia mínima antes de escalar.
4. Visualiza resultado: consistencia sistémica y menos fallos aislados.

### Para Head of Engineering

1. Entiende valor: secuencia operativa ejecutable.
2. Identifica riesgo evitado: degradación sistémica por velocidad.
3. Clarifica decisión: qué ejecutar ahora y qué guardrails activar.
4. Visualiza resultado: confiabilidad de entrega IA.

### Diferenciación frente a otros frameworks IA

1. Mensaje diferencial integrado en Home y Framework, no solo en documento de soporte.
2. Posicionamiento reforzado como sistema de secuenciación causal de decisiones bajo riesgo.

---

## Riesgos pendientes

1. P0 mejora comprensión inicial, pero no incluye todavía filtros dinámicos por perfil en sección de problemas (P1).
2. No incorpora aún mini-evidencias "antes/después" por caso de uso (P1).
3. No se instrumentó analítica de interacción por perfil/problema en esta fase (P2).

---

## Resultado final

Clasificación final: **VALUE PROPOSITION P0 COMPLETE**
