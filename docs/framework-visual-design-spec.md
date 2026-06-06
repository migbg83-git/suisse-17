# Framework Visual Design Spec

Fecha: 2026-06-06
Estado: especificacion visual final previa a implementacion UI
Ambito: página /framework

---

## 0) Marco de esta especificacion

Este documento define únicamente como debe verse /framework.

Congelado y no modificable:
- arquitectura conceptual,
- 6 capas,
- contenido y artículos,
- ASIS,
- taxonomia,
- rutas y alcance funcional.

Este documento no incluye:
- Angular,
- HTML,
- CSS,
- codigo,
- wireframes graficos.

---

## 1) Principios visuales

### 1.1 Sensacion que debe transmitir la página

La página debe transmitir:
- autoridad arquitectónica,
- claridad causal,
- direccion de accion,
- confianza ejecutiva.

No debe transmitir:
- panel administrativo,
- formulario de configuracion,
- indice editorial plano.

### 1.2 Que debe percibir cada perfil en 30 segundos

CTO:
- "Este framework me ayuda a decidir prioridades de capacidad, no solo lectura".
- "Puedo ubicar riesgo y siguiente movimiento sin recorrer todo el sitio".

Enterprise Architect:
- "Las capas expresan dependencias de sistema y no bloques aislados".
- "Existe trazabilidad entre diagnóstico, governance, operación y medición".

Responsable de transformacion:
- "Puedo convertir esta vista en hoja de ruta conversable con negocio y equipos".
- "La página me da una secuencia para activar cambio sin improvisar".

### 1.3 Por que hoy parece backoffice

Causas visuales actuales:
- densidad homogenea entre bloques,
- controles de seleccion con apariencia de formulario,
- repeticion de tarjetas con el mismo peso,
- foco visible en señales tecnicas dentro del flujo primario,
- falta de conectores visuales entre capas.

Efecto:
- se percibe administracion de contenido, no navegacion de sistema.

### 1.4 Como corregir esa percepcion

Principios de correccion:
1. Jerarquia fuerte arriba, densidad progresiva en centro, cierre prescriptivo al final.
2. Del lenguaje de filtro al lenguaje de ruta.
3. De tarjetas repetidas a estados visuales diferenciados por rol cognitivo.
4. De nodos sueltos a sistema conectado.
5. De CTA generica a proximo paso contextual.

---

## 2) Hero definitivo

### 2.1 Estructura visual

Composicion obligatoria del hero:
1. Headline de tesis.
2. Subheadline de promesa operativa.
3. Banda de uso rapido (3 pasos breves).
4. Microbloque de métricas visibles.
5. CTAs primarias.

### 2.2 Orden de lectura

Orden visual exacto:
1. Headline.
2. Subheadline.
3. Métricas visibles.
4. CTAs.
5. Banda "como usar esta página".

### 2.3 Headline y subheadline (línea editorial)

Headline: una sola idea nuclear.
- Debe afirmar que el valor es navegar por dependencias.

Subheadline: una sola promesa.
- Debe explicar que /framework orienta decisión, no cronología.

Regla:
- sin lenguaje tecnico interno,
- sin jergas de implementacion,
- sin referencias a stack.

### 2.4 Métricas visibles del hero

Metas de métricas visibles (informativas, no analíticas):
- 6 capas del sistema,
- 1 orden causal,
- 1 ruta por perfil + intencion.

Proposito:
- reforzar estructura mental antes del primer scroll.

### 2.5 CTAs del hero

CTA primaria A:
- Empezar por capas.

CTA primaria B:
- Construir ruta recomendada.

Regla de jerarquia:
- CTA A domina visualmente.
- CTA B acompana como alternativa.

### 2.6 Jerarquia visual exacta del hero

Primero debe llamar la atencion:
- headline.

Despues debe verse:
- promesa del subheadline.

Despues:
- metrica estructural de 6 capas.

Despues:
- CTA primaria A.

Ultimo:
- ayuda de uso en 3 pasos.

---

## 3) Mapa causal definitivo

### 3.1 Layout recomendado

Desktop:
- flujo horizontal con 6 nodos conectados.

Tablet:
- flujo en dos filas conectadas (3 + 3) con continuidad visual explicita.

Movil:
- flujo vertical de 6 nodos con conectores direccionales entre nodos consecutivos.

### 3.2 Orientación

Orientación primaria:
- horizontal en desktop para comunicar sistema.

Orientación secundaria:
- vertical en movil para preservar legibilidad y secuencia.

### 3.3 Representacion de dependencias

Cada nodo debe mostrar:
- nombre de capa,
- funcion breve,
- relacion de habilitacion con capa siguiente.

Conectores obligatorios:
- visibles y legibles,
- no decorativos,
- con sentido de progreso causal.

### 3.4 Comportamiento visual de nodo activo

Nodo activo debe:
- dominar contraste,
- ampliar legibilidad,
- mostrar etiqueta "capa en foco",
- activar de forma evidente el detalle asociado.

### 3.5 Comportamiento visual de nodo relacionado

Nodos relacionados (anterior y siguiente) deben:
- mantener visibilidad secundaria,
- reflejar continuidad del sistema,
- evitar efecto de aislamiento del nodo activo.

### 3.6 Tratamiento de hover/focus

En hover/focus:
- mostrar "que habilita" y "riesgo si falta" en microcopy breve,
- reforzar el conector entrante y saliente,
- no abrir contenido denso.

### 3.7 Tratamiento responsive

Reglas:
- nunca perder conectores entre capas,
- nunca convertir el mapa en lista plana de tarjetas,
- mantener estado activo claramente visible en todos los breakpoints.

Objetivo de percepcion:
- "las capas forman un sistema".

---

## 4) Capas (detalle)

### 4.1 Estructura visual de tarjeta de capa

Bloque superior de tarjeta:
- identificador de capa,
- nombre de capa,
- estado de foco,
- promesa funcional corta.

Bloque medio:
- que habilita,
- que riesgo evita.

Bloque inferior:
- que leer ahora (artículos ya existentes),
- accion de continuidad hacia navigator.

### 4.2 Jerarquia interna

Arriba:
- identidad de la capa.

Centro:
- lectura de decisión (habilita / riesgo).

Abajo:
- accion concreta (lectura recomendada).

### 4.3 Que destacar visualmente

Debe destacarse:
- la relacion causa -> efecto de la capa,
- la accion inmediata de lectura,
- el estado activo frente a capas no activas.

No debe destacarse:
- informacion tecnica secundaria en el flujo principal.

### 4.4 Regla de respuesta por capa

Cada capa debe responder en menos de 10 segundos:
1. Que habilita.
2. Que riesgo evita.
3. Que leer ahora.

Sin agregar contenido nuevo.

---

## 5) Navigator definitivo

### 5.1 Objetivo visual

El navigator debe percibirse como constructor de ruta.

No debe percibirse como formulario.

### 5.2 Componentes visuales

Secuencia visual obligatoria:
1. Selector visual de perfil (paso 1).
2. Selector visual de intencion (paso 2).
3. Panel de resultado de ruta recomendada.
4. Evidencia breve de por que esa ruta.

### 5.3 Estados

Estados minimos:
- reposo,
- seleccion en progreso,
- ruta recomendada activa,
- fallback activo,
- sin coincidencia exacta.

### 5.4 Feedback visual

Feedback obligatorio:
- transicion clara entre paso 1 y paso 2,
- confirmacion de combinacion seleccionada,
- titulo del resultado en formato contextual:
  - ruta para [perfil] con objetivo [intencion].

### 5.5 Resultado de ruta recomendada

El resultado debe verse como:
- bloque editorial guiado,
- secuencia priorizada,
- accionable inmediatamente.

No debe verse como:
- tabla de resultados,
- salida de filtro tecnico.

### 5.6 Fallback visual

Cuando no exista combinacion exacta:
- mostrar aviso explícito de fallback en tono orientativo,
- explicar que se muestra la opcion mas cercana para no bloquear avance,
- mantener confianza visual (no estado de error critico).

---

## 6) Vocabulario

### 6.1 Objetivo

El vocabulario debe ayudar a comprender el framework sin dominar la página.

### 6.2 Grid y tarjetas

Regla de composicion:
- grid compacto,
- tarjetas breves,
- lectura escaneable.

Contenido visual por tarjeta:
- termino,
- definicion corta,
- por que importa,
- referencia al articulo base existente.

### 6.3 Peso visual

Peso relativo:
- inferior al navigator,
- superior al pie de cierre secundario,
- suficiente para desbloquear ambiguedad conceptual.

### 6.4 Relacion con el resto de la página

Debe funcionar como:
- modulo de aclaracion contextual,
- no como glosario enciclopedico.

---

## 7) Continuidad

### 7.1 Objetivo de cierre

La continuidad debe cerrar la experiencia con accion concreta y contexto.

### 7.2 Jerarquia de CTAs

Orden de prioridad visual de CTAs:
1. Artículos (cuando el usuario ya entiende su capa o quiere profundidad inmediata).
2. Manifesto (cuando necesita alínear marco conceptual con terceros).
3. Newsletter (cuando busca seguimiento continuo, sin urgencia inmediata).

### 7.3 Regla de destaque por escenario

Destacar Artículos cuando:
- el flujo previo fue mapa -> capa -> navigator,
- existe intencion de profundizar ejecucion.

Destacar Manifesto cuando:
- el usuario necesita narrativa base para alínear equipo o direccion.

Destacar Newsletter cuando:
- el usuario quiere mantener continuidad sin accion inmediata.

---

## 8) Sistema visual global

### 8.1 Espaciado

Reglas:
- espaciado amplio entre bloques mayores,
- espaciado medio entre subbloques,
- espaciado compacto dentro de elementos de decisión.

Objetivo:
- separar contexto, decisión y accion sin ruido.

### 8.2 Densidad visual

Regla de densidad por zona:
- baja densidad en hero,
- densidad media en mapa,
- densidad media-alta en capas y navigator,
- densidad media-baja en vocabulario y continuidad.

### 8.3 Anchura recomendada

Regla:
- columna principal contenida para lectura estratégica,
- bloques de sistema (hero/mapa) con mayor respiracion horizontal,
- detalle y navigator con anchura enfocada en legibilidad.

### 8.4 Ritmo vertical

Ritmo recomendado:
- impacto (hero),
- modelo (mapa),
- profundidad (capas),
- decisión (navigator),
- aclaracion (vocabulario),
- accion (continuidad).

### 8.5 Jerarquias tipograficas H1/H2/H3

H1:
- tesis única de página.

H2:
- titulos de bloque principal.

H3:
- entidades internas (capa, termino, resultado de ruta).

Regla:
- evitar que H3 compita con H2.

### 8.6 Uso de iconografia

Iconografia permitida:
- funcional y semantica (capa, riesgo, ruta, continuidad).

Iconografia prohibida:
- decorativa sin significado de decisión.

### 8.7 Uso de colores

Reglas:
- color primario para foco y accion,
- color secundario para estructura y navegacion,
- color de advertencia solo para estados no bloqueantes,
- contraste alto en nodo activo y CTA primaria.

### 8.8 Uso de conectores visuales

Conectores obligatorios en:
- mapa causal,
- transicion narrativa hacia detalle de capa.

Conectores no recomendados en:
- vocabulario y continuidad, donde prima claridad de cierre.

---

## 9) Responsive

### 9.1 Desktop

Prioridad:
- lectura de sistema completo en un solo recorrido vertical.

Claves:
- mapa horizontal conectado,
- navigator con pasos claramente diferenciados,
- detalle de capas con expansion controlada.

### 9.2 Tablet

Prioridad:
- preservar sistema con menor ancho sin perder conexiones.

Claves:
- mapa en 2 filas conectadas,
- navegacion interna visible,
- continuidad simplificada en tarjetas claras.

### 9.3 Movil

Prioridad:
- secuencia lineal clara y accionable.

Claves:
- mapa vertical con conectores,
- detalle por capas con foco en una capa a la vez,
- navigator en flujo paso a paso,
- CTAs apiladas por prioridad.

### 9.4 Diferencias relevantes entre breakpoints

Desktop:
- privilegia vista de sistema.

Tablet:
- equilibra sistema y legibilidad.

Movil:
- privilegia progresion y completitud de tarea.

---

## 10) Priorizacion de implementacion

### Prioridad A (impacto visual real inmediato)
- Hero definitivo.
- Mapa causal definitivo.
- Navigator definitivo.

Razon:
- son los tres bloques que determinan si /framework se percibe como sistema o como backoffice.

### Prioridad B (comprension profunda)
- Capas (detalle) con estructura de decisión.
- Vocabulario contextual.

Razon:
- consolidan entendimiento y reducen ambiguedad tras la primera lectura.

### Prioridad C (cierre y retencion)
- Continuidad contextual por escenario.
- Ajustes de ritmo final y microjerarquias de cierre.

Razon:
- maximizan conversion de comprension en siguiente accion.

---

## 11) Criterios de aprobacion visual

/framework puede considerarse aprobado cuando se cumplan simultaneamente estos criterios:

1. Ya no parece backoffice
- El navigator no se percibe como formulario.
- El mapa no se percibe como lista de bloques.
- La página no se percibe como panel de gestion.

2. Si parece el Framework Archwise
- La idea de sistema causal se entiende en la primera pantalla + mapa.
- Cada capa comunica habilitacion, riesgo y lectura recomendada con claridad.
- La ruta recomendada se percibe como decisión guiada y no como filtro.

3. Coherencia de cierre
- El usuario entiende por que continuar en Artículos, Manifesto o Newsletter.
- La continuidad no compite con la tesis, la ejecuta.

4. Coherencia transversal
- Misma narrativa en desktop, tablet y movil.
- Misma jerarquia de decisiónes en todos los breakpoints.

---

## 12) Cierre

Esta es la especificacion visual final previa a implementacion real.

El siguiente paso, fuera de este documento, es ejecutar mejoras de interfaz respetando exactamente estas reglas, sin modificar arquitectura conceptual, contenido, capas, ASIS, taxonomia ni rutas.



