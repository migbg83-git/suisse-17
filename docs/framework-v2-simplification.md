# Framework V2 Simplification

Fecha: 2026-06-06
Estado: Propuesta ARB cerrada (simplificacion estructural de /framework)
Base analizada: framework-discovery, framework-architecture, framework-content, ASIS v1.1
Objetivo: definir la version mas simple posible de /framework que preserve tesis, 6 capas y escalabilidad editorial hasta Article-100

---

## 0) Decisión de diseño

/framework v2 debe operar como:
- capa de orientación conceptual,
- capa de navegacion causal,
- capa de activacion de lectura relevante.

No debe operar como:
- indice editorial alternativo,
- roadmap cronologico,
- tutorial de implementacion,
- página de producto.

Principio de simplificacion:
- menos bloques,
- una taxonomia primaria única,
- una sola logica de navegacion,
- reglas estrictas de aparicion de artículos.

---

## 1) Diagnóstico de complejidad (estado actual v1)

### 1.1 Complejidad estructural

Estado actual:
- 9 bloques (A-I).
- 3 bloques con funcion de navegacion parcial (C, E, F).
- 2 bloques de cierre/orientacion (H, I).

Problema:
- se multiplican entradas de navegacion con diferentes criterios (capa, perfil, grupo editorial), lo que incrementa costo de mantenimiento.

Impacto:
- mayor esfuerzo de curacion por cada articulo nuevo,
- riesgo de inconsistencia entre listas,
- mayor probabilidad de drift conceptual.

---

### 1.2 Complejidad taxonomica

Estado actual:
- conviven capa, perfil, tipo de articulo (fundacional/diagnostico/avanzado/transversal), y uso contextual.

Problema:
- no hay jerarquia taxonomica estricta; un mismo articulo puede aparecer en demasiadas rutas y grupos.

Impacto:
- redundancia editorial,
- menor claridad para el lector,
- mantenimiento manual no escalable a 50/100 artículos.

---

### 1.3 Complejidad de cobertura por capa

Estado actual:
- Capa 6 agrega 24-29 y concentra demasiada carga semantica (operación + integración + adopción + medición + evaluación).

Problema:
- capa demasiado amplia para crecimiento futuro.

Impacto:
- cualquier articulo nuevo de madurez/medicion tiende a caer en Capa 6,
- riesgo de capa "contenedor" sin frontera clara.

---

### 1.4 Complejidad de rutas por perfil

Estado actual:
- rutas por perfil y biblioteca guiada coexisten.

Problema:
- misma funcion (guiar lectura) duplicada por dos mecanismos.

Impacto:
- mantenimiento duplicado,
- posibles recomendaciones contradictorias.

---

## 2) Arquitectura simplificada propuesta (v2)

## 2.1 Arquitectura minima viable de /framework

Se propone reducir de 9 bloques a 6 bloques operativos:

1. Bloque 1 - Tesis operativa
2. Bloque 2 - Mapa causal de 6 capas
3. Bloque 3 - Capas (detalle de decisión)
4. Bloque 4 - Navigator unificado (perfil + intencion)
5. Bloque 5 - Vocabulario minimo
6. Bloque 6 - Continuidad (relacion con sitio + siguiente paso)

Resultado:
- se eliminan redundancias de navegacion,
- se mantiene claridad conceptual,
- se preserva la tesis Archwise y la orientación causal.

---

## 2.2 Bloques eliminados y fusionados

Bloques a eliminar:
- Bloque F (biblioteca guiada independiente).

Bloques a fusionar:
- Fusionar E + F -> nuevo Bloque 4 (Navigator unificado).
- Fusionar H + I -> nuevo Bloque 6 (Continuidad).

Bloques que permanecen con ajuste:
- A -> Bloque 1 (sin cambios de funcion).
- B -> Bloque 2 (sin cambios de funcion).
- C -> Bloque 3 (con reglas estrictas de aparicion).
- G -> Bloque 5 (manteniendo limite de vocabulario operativo).
- D -> se integra funcionalmente en Bloque 3 como "ciclo por capa" para evitar pieza separada demasiado abstracta.

Nota:
- el ciclo de madurez no desaparece; se incrusta en el detalle de cada capa para reducir abstraccion desconectada.

---

## 2.3 Definicion funcional de cada bloque v2

### Bloque 1 - Tesis operativa

Funcion:
- alínear en 45-60 segundos.

Pregunta que responde:
- por que existe /framework.

Salida:
- ir a mapa de 6 capas.

---

### Bloque 2 - Mapa causal de 6 capas

Funcion:
- ofrecer modelo mental unico y estable.

Pregunta que responde:
- como se conectan las capacidades.

Salida:
- entrar a capa especifica.

---

### Bloque 3 - Capas (detalle de decisión)

Funcion:
- convertir cada capa en unidad de diagnóstico y accion de lectura.

Pregunta que responde:
- que me falta y que riesgo acumulo.

Salida:
- artículos de capa,
- salto a Navigator (perfil/intencion).

---

### Bloque 4 - Navigator unificado (perfil + intencion)

Funcion:
- ruta de lectura única sin duplicar mecanismos.

Pregunta que responde:
- que leer ahora segun quien soy y que necesito.

Salida:
- secuencia de artículos priorizada.

---

### Bloque 5 - Vocabulario minimo

Funcion:
- evitar ambiguedad conceptual y sostener coherencia con 26-29 y ASIS.

Pregunta que responde:
- que significa cada termino en decisión operativa.

Salida:
- articulo base por termino,
- retorno a capa relacionada.

---

### Bloque 6 - Continuidad

Funcion:
- cerrar navegacion con siguiente paso sin duplicar cierres.

Pregunta que responde:
- donde continuo en el ecosistema.

Salida:
- /articulos,
- manifesto,
- ruta guardada,
- newsletter futura.

---

## 3) Taxonomia editorial definitiva

## 3.1 Taxonomia principal (obligatoria)

Taxonomia primaria única: CAPA.

Toda pieza del corpus usada en /framework debe tener:
- 1 capa primaria (obligatoria),
- 0 o 1 capa secundaria (opcional solo si la contribucion es realmente dual).

Capas (se mantienen 6):
1. Diagnóstico AI-Ready
2. Contexto explícito y Knowledge Debt
3. Governance
4. AI Operating Model
5. Organizational Memory
6. Context Systems y capacidad agéntica

Regla de estabilidad:
- no crear nuevas capas hasta superar Article-100.

---

## 3.2 Taxonomias secundarias (controladas)

Secundaria A: INTENCION DE LECTURA
- diagnosticar
- disenar
- operar
- medir
- corregir

Secundaria B: PERFIL
- CTO
- Enterprise Architect
- Head of Engineering
- Transformation Leader
- Consultor

Secundaria C: NIVEL DE PROFUNDIDAD
- base
- intermedio
- avanzado

Importante:
- las taxonomias secundarias no generan bloques independientes; alimentan el Navigator unificado.

---

## 3.3 Reglas de aparicion para evitar exceso de listas

Regla 1:
- un articulo no puede aparecer en mas de 3 contextos visibles simultaneos en /framework:
  - 1 por capa (obligatorio),
  - 1 por perfil (opcional),
  - 1 por intencion (opcional).

Regla 2:
- si un articulo ya aparece en capa + perfil, no se repite en listado general visible; se referencia por enlace secundario.

Regla 3:
- maximo 3 artículos visibles por capa en primera vista.
- artículos adicionales via "ver mas".

Regla 4:
- maximo 5 artículos por ruta de perfil (invariante).

Regla 5:
- priorizar artículos "ancla" estables y rotar satélites.

---

## 4) Coherencia con Articles 26-29 y ASIS v1.1

## 4.1 Coherencia con 26-29

Invariantes:
- 26: framework como sistema integrado.
- 27: secuencia causal y Activation Debt.
- 28: observabilidad sistémica (Coherence Signals, Evidence Integrity).
- 29: evaluación de madurez por Sequence Integrity con evidencia.

Aplicacion en v2:
- estos cuatro artículos son "spine set" y deben estar siempre presentes en al menos un nodo de capa y uno de navigator.

---

## 4.2 Coherencia con ASIS v1.1

Permitido en /framework v2:
- Sequence Integrity,
- Evidence Integrity,
- Coherence Signals,
- Interface Integrity en modo explicativo.

No permitido en /framework v2:
- scoring formal,
- ITE operativo,
- onboarding de producto ASIS,
- evaluación certificable.

Regla:
- /framework prepara comprension compatible con ASIS, no implementa ASIS.

---

## 5) Politica de escalabilidad editorial (Article-30 -> Article-100)

## 5.1 Modelo de crecimiento

Escala 30-49:
- mantener 6 capas fijas,
- mantener Navigator unico,
- actualizar satélites por perfil cada 5 artículos nuevos.

Escala 50-79:
- activar subetiquetas dentro de cada capa (sin crear nuevas capas),
- revisar rutas por perfil cada 10 artículos.

Escala 80-100:
- congelar anclas,
- rotar satélites por intencion,
- auditar equilibrio de aparicion trimestralmente.

---

## 5.2 Politica de anclas y satélites

Anclas (estables):
- artículos nucleares del marco (especialmente 20, 21, 22, 24, 26, 27, 28, 29).

Satélites (rotables):
- artículos que enriquecen una capa/perfil/intencion sin definir la columna vertebral.

Regla:
- cambios frecuentes solo en satélites.
- cambios en anclas solo por decisión ARB.

---

## 5.3 Gobernanza editorial minima

Checklist por cada articulo nuevo:
1. asignar capa primaria,
2. asignar intencion principal,
3. evaluar inclusion en 0-1 perfil,
4. validar regla de aparicion maxima (<=3 contextos visibles),
5. decidir si entra como satélite o reemplaza satélite existente.

Objetivo:
- crecimiento incremental sin rediseño estructural.

---

## 6) Riesgos y trade-offs de la simplificacion

### Riesgo 1 - Menor riqueza narrativa por reducir bloques

Trade-off:
- menos piezas explicativas separadas.

Mitigacion:
- reforzar calidad del Bloque 3 (capas) y Bloque 4 (navigator).

---

### Riesgo 2 - Navigator unico puede parecer mas "mecanico"

Trade-off:
- estructura mas estricta, menor libertad editorial ad hoc.

Mitigacion:
- permitir variacion en satélites y notas por perfil.

---

### Riesgo 3 - Capa 6 sigue siendo amplia

Trade-off:
- se preservan 6 capas por mandato.

Mitigacion:
- usar subetiquetas internas para separar operación contextual vs madurez/medicion sin crear nueva capa.

---

### Riesgo 4 - Menos listas visibles puede parecer menor discoverability

Trade-off:
- se reduce exhibicion para ganar claridad.

Mitigacion:
- mantener salida clara a /articulos completo y navegacion por intencion.

---

### Riesgo 5 - Dependencia de gobernanza editorial disciplinada

Trade-off:
- el modelo simple falla si no se aplica la politica de anclas/satelites.

Mitigacion:
- auditoria mensual de taxonomia y apariciones.

---

## 7) Recomendacion final (ARB)

Recomendacion:
- adoptar /framework v2 simplificado con 6 bloques operativos, taxonomia principal única por capa y Navigator unificado.

Por que esta es la version mas simple posible:
- conserva tesis Archwise,
- conserva las 6 capas,
- conserva coherencia con 26-29 y ASIS v1.1,
- elimina duplicacion de navegacion,
- reduce mantenimiento manual,
- escala sin rediseño de arquitectura hasta Article-100.

Decisión operativa sugerida:
1. congelar arquitectura v2 (6 bloques),
2. implementar reglas de taxonomia y aparicion,
3. activar politica anclas/satelites,
4. revisar cada 10 artículos (no por sesion).

Criterio de exito:
- cada nuevo articulo se integra en < 15 minutos editoriales,
- no se requieren cambios estructurales de /framework hasta al menos Article-100,
- no aumenta la redundancia de listados visibles.

---

## 8) Definicion de cierre

Este documento se considera cerrado cuando:
- queda aceptada la reduccion de 9 a 6 bloques,
- queda aceptada la taxonomia principal única,
- quedan aceptadas reglas de aparicion maxima,
- queda aceptada la politica de escalabilidad 30-100.

Estado actual:
- Propuesta ARB lista para aprobacion.



