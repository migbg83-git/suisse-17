# Assets — Article 25: Agentic AI en la empresa

**Artículo:** content/enterprise-ai/article-25/article.md  
**Estado:** READY FOR PUBLICATION  
**Título final:** Agentic AI en la empresa: por qué los agentes fallan y cómo construir la infraestructura para que funcionen  
**Slug final:** agentic-ai-enterprise-governance-memoria-arquitectura

---

## Criterios editoriales aplicados

- Solo assets explicativos (ninguno decorativo).
- Sin stock photos.
- Sin ilustraciones genéricas de IA.
- Consistencia con artículos 20-24 (estilo arquitectónico, foco enterprise, claridad operativa).
- Evitar duplicación directa de diagramas existentes:
  - No repetir el framework general de governance (article-20).
  - No repetir el pipeline Strategy -> Governance -> Operating Model -> Execution (article-21).
  - No repetir el maturity model genérico de Organizational Memory (article-22).
  - No repetir el enfoque de Memory Architecture por capas como tema central (article-23).
  - No repetir el diagrama base Organizational Memory -> Memory Architecture -> Context Systems (article-24).

---

## ESSENTIAL

### Asset E1
- **nombre:** Enterprise Agent Architecture Runtime Map
- **objetivo:** Mostrar, en una sola vista operativa, como se coordinan las cinco capas en el instante exacto de una decision del agente.
- **tipo:** Diagrama de arquitectura de decision en tiempo real (layered runtime map).
- **ubicacion sugerida:** Inicio de la seccion "Enterprise Agent Architecture: el sistema que hace posible al agente".
- **prioridad:** alta
- **descripcion detallada:**
  - Visual central del articulo.
  - Composicion con cinco capas horizontales activas: Governance, Operating Model, Memory, Memory Architecture, Context Systems.
  - En el centro, un nodo "Decision Trigger" (evento de decision).
  - Cada capa responde una pregunta concreta (las cinco preguntas del articulo) y emite una salida verificable:
    - Governance -> autorizacion / limite / decision right
    - Operating Model -> owner activo / supervision asignada / SLA
    - Memory -> politicas + excepciones + historico relevante
    - Memory Architecture -> contexto estructurado y versionado
    - Context Systems -> entrega contextual en tiempo de decision
  - Salida final: "Agent Action" o "Escalate".
  - Debe incluir leyenda de estados (OK, Missing, Stale, Conflict) para dejar claro que la arquitectura es verificable, no conceptual.

### Asset E2
- **nombre:** Failure Modes Diagnostic Matrix (6x3)
- **objetivo:** Convertir los seis fallos del Acto 2 en una matriz accionable para diagnostico rapido.
- **tipo:** Matriz diagnostica (tabla visual) con mapeo causa raiz e impacto.
- **ubicacion sugerida:** Cierre de la seccion "Por que fallan los agentes: seis patrones reales".
- **prioridad:** alta
- **descripcion detallada:**
  - Filas: los 6 failure modes del articulo.
  - Columnas:
    - Sintoma observable temprano.
    - Capa faltante o incompleta (de las cinco capas).
    - Impacto si no se corrige.
  - Debe incluir codificacion de color por capa para lectura ejecutiva en 20 segundos.
  - Incluye dos micro-columnas auxiliares opcionales: "severidad" y "detectabilidad".
  - Objetivo editorial: que el lector pueda ubicarse inmediatamente en "que me esta fallando" sin releer toda la seccion.

### Asset E3
- **nombre:** Five Layers Readiness Heatmap
- **objetivo:** Hacer tangible la evaluacion de preparacion antes de desplegar un agente.
- **tipo:** Heatmap de madurez por capa (scorecard visual por dimension).
- **ubicacion sugerida:** Transicion entre "El agente como punto de convergencia" y "Como saber si estas preparado".
- **prioridad:** alta
- **descripcion detallada:**
  - Eje X: cinco capas (Governance, Operating Model, Memory, Memory Architecture, Context Systems).
  - Eje Y: criterios minimos de readiness (ownership, trazabilidad, latencia de contexto, vigencia de politicas, escalacion operativa, supervision).
  - Celdas en escala 0-3 (rojo, ambar, verde, verde oscuro).
  - Regla visual explicita de gating:
    - Cualquier rojo en Governance u Operating Model => No-Go.
    - Dos o mas ambar en total => Deploy condicionado.
    - Todo verde/verde oscuro => Go.
  - Este asset debe ser util para workshop de liderazgo, no solo para lectura.

### Asset E4
- **nombre:** Agent Decision Flow with Escalation Gates
- **objetivo:** Explicar el flujo de decision del agente incluyendo puntos de escalacion y validacion humana.
- **tipo:** Diagrama de flujo secuencial (decision flowchart con gateways).
- **ubicacion sugerida:** Seccion "El agente como punto de convergencia", justo antes del ejemplo de credito.
- **prioridad:** alta
- **descripcion detallada:**
  - Flujo sugerido:
    - Trigger de decision
    - Recuperacion de contexto
    - Verificacion de limites y decision rights
    - Chequeo de riesgo/ambiguedad
    - Si riesgo alto o conflicto -> escalacion
    - Si dentro de umbral -> ejecucion
    - Registro de trazabilidad
    - Retroalimentacion a memoria
  - Debe diferenciar claramente dos rutas: "Autonomous Path" y "Escalated Path".
  - Incluir SLA de escalacion (ejemplo: T+30 min) como variable visible para operacionalidad real.

### Asset E5
- **nombre:** Deployment Readiness Audit Board (4 preguntas)
- **objetivo:** Traducir la auditoria de preparacion del articulo en tablero de decision ejecutiva Go/No-Go.
- **tipo:** Scorecard ejecutivo (board de auditoria).
- **ubicacion sugerida:** Apertura de la seccion "Como saber si estas preparado".
- **prioridad:** alta
- **descripcion detallada:**
  - Cuatro bloques, uno por pregunta clave del articulo:
    - Governance explicita
    - Ownership claro
    - Memoria estructurada y recuperable
    - Supervision real-time y escalacion operativa
  - Cada bloque debe mostrar:
    - Estado actual (Yes/Partial/No)
    - Evidencia requerida
    - Riesgo de desplegar sin cerrar gap
  - Franja final con regla editorial-operativa:
    - 0 No -> Go
    - 1 No -> Risk Review obligatorio
    - >=2 No -> Stop Deployment

---

## RECOMMENDED

### Asset R1
- **nombre:** Cascade Failure Propagation and Containment
- **objetivo:** Hacer visible como un fallo local se vuelve sistémico y donde poner contenciones.
- **tipo:** Diagrama de propagacion multi-agente con puntos de contencion.
- **ubicacion sugerida:** Dentro de "El agente en cascada", despues del ejemplo inventario-pricing-rutas.
- **prioridad:** media
- **descripcion detallada:**
  - Secuencia de tres agentes conectados (inventario -> pricing -> rutas).
  - Mostrar dos escenarios en paralelo:
    - Sin contencion: error se amplifica.
    - Con contencion: validacion intermedia + circuit breaker + rollback controlado.
  - Debe cerrar con metrica comparativa simple: "impact scope" y "recovery time".
  - Diferenciador respecto a article-21: aqui no se explica operating model general, sino dinamica de fallo en cadena para agentes en produccion.

### Asset R2
- **nombre:** Agent Ownership Map (5 responsabilidades)
- **objetivo:** Precisar ownership operativo del agente para evitar el "agente huerfano".
- **tipo:** Mapa RACI simplificado / ownership canvas.
- **ubicacion sugerida:** Final de "Que necesita un agente empresarial" en el bloque de ownership explicito.
- **prioridad:** media
- **descripcion detallada:**
  - Cinco roles obligatorios del articulo:
    - Producto
    - Integracion tecnica
    - Operacion
    - Governance
    - Conocimiento
  - Para cada rol: decision critica bajo su responsabilidad + KPI operativo asociado.
  - Debe incluir alerta visual de riesgo cuando algun rol esta "unassigned".
  - Formato compacto para que pueda reutilizarse como checklist de implementacion en equipos.

---

## OPTIONAL

### Asset O1
- **nombre:** Two Trajectories Cost Curve (Anticipar vs Reaccionar)
- **objetivo:** Reforzar la tesis economica del articulo sobre coste total de infraestructura vs coste de incidentes.
- **tipo:** Grafico comparativo de curvas de costo en el tiempo.
- **ubicacion sugerida:** Seccion "Dos trayectorias posibles".
- **prioridad:** baja
- **descripcion detallada:**
  - Eje X: tiempo (pre-deploy a 12 meses).
  - Eje Y: costo total (infraestructura + incidentes + friccion interequipos).
  - Curva A (anticipar): mayor inversion inicial, menor costo acumulado.
  - Curva B (reaccionar): menor inversion inicial, crecimiento acelerado por incidentes.
  - Debe incluir dos hitos: "primer incidente mayor" y "comite de crisis recurrente".

### Asset O2
- **nombre:** Incident-to-Learning Loop
- **objetivo:** Mostrar como convertir incidentes del agente en aprendizaje institucional acumulativo.
- **tipo:** Loop operativo (closed-loop improvement diagram).
- **ubicacion sugerida:** Tramo final de "Los agentes como espejos organizativos".
- **prioridad:** baja
- **descripcion detallada:**
  - Ciclo: incidente detectado -> analisis causa raiz por capa -> ajuste de politica/ownership/contexto -> validacion -> despliegue -> monitoreo.
  - Cada vuelta del loop debe producir un output explicito en memoria organizativa.
  - Mensaje clave: el valor no esta en "resolver el incidente" sino en "evitar su repeticion estructural".

---

## Resumen de produccion

- **Total assets propuestos:** 9
- **ESSENTIAL:** 5
- **RECOMMENDED:** 2
- **OPTIONAL:** 2

## Orden sugerido de ejecucion

1. E1 Enterprise Agent Architecture Runtime Map
2. E2 Failure Modes Diagnostic Matrix
3. E4 Agent Decision Flow with Escalation Gates
4. E5 Deployment Readiness Audit Board
5. E3 Five Layers Readiness Heatmap
6. R1 Cascade Failure Propagation and Containment
7. R2 Agent Ownership Map
8. O1 Two Trajectories Cost Curve
9. O2 Incident-to-Learning Loop

---

## Nota de alcance

Este documento define solo assets visuales para el articulo 25. No incluye generacion de article.json ni continuacion del workflow de publicacion.
