# Framework UX Review — Sprint Visual B

Fecha: 2026-06-06  
Alcance: auditoría UX profesional sobre la versión actual observada de /framework  
Restricción aplicada: sin implementación (sin Angular, sin HTML, sin CSS)

---

## 1. Resumen ejecutivo

Diagnóstico global actual: 6.5/10.

La página ya supera el estado de "documentación cruda" del Sprint previo, pero sigue quedándose en una lectura de "interfaz de sistema interno" por tres razones:
- predominio de patrones de panel (tarjetas homogéneas + controles tipo selector),
- densidad informativa alta sin jerarquía de énfasis suficiente,
- cierre de continuidad correcto en arquitectura, pero débil en impulso de acción.

Objetivo Sprint Visual B: llevar percepción global a 8.5/10 mediante dirección visual editorial (propiedad intelectual), no mediante nueva funcionalidad.

---

## 2. Evaluación de la versión actual

### 2.1 Percepción visual general

Estado actual: 6.5/10.

Fortalezas:
- Existe una narrativa de bloques coherente (Hero -> Mapa -> Capas -> Navigator -> Vocabulario -> Continuidad).
- Se perciben intenciones de sistema causal (nodos, conectores, estados activos).

Debilidades:
- Mucha caja de borde y patrones repetitivos de card generan tono administrativo.
- Falta contraste de "bloques estratégicos" vs "bloques utilitarios".
- El lenguaje visual se mantiene en semántica de producto funcional, no de framework intelectual premium.

### 2.2 Claridad del mapa causal

Estado actual: 7.2/10.

Fortalezas:
- Secuencia 1..6 clara.
- Estado activo y nodos relacionados visibles.
- Microcopy de habilitación/riesgo aporta valor causal.

Debilidades:
- En desktop se percibe más "seis tarjetas alineadas" que "flujo causal continuo".
- En tablet (3+3) la continuidad narrativa se reduce al no explicitar puente entre filas.
- El sistema de conectores compite poco frente al peso visual de las tarjetas.

### 2.3 Comprensión de las capas

Estado actual: 6.8/10.

Fortalezas:
- El acordeón permite foco progresivo.
- El contenido de capa es operativo y enlaza con artículos reales.

Debilidades:
- Cada capa se percibe como unidad aislada (tarjeta expansible), no como tramo de trayectoria.
- El patrón "ver detalle" es funcional, pero no comunica urgencia de decisión ni siguiente paso.
- "Warnings" de slugs en flujo principal elevan sensación técnica.

### 2.4 Calidad del constructor de ruta

Estado actual: 7.0/10.

Fortalezas:
- Flujo Paso 1 / Paso 2 explícito.
- Resultado con ruta recomendada bien estructurado.
- Fallback transparente (evita bloqueo de usuario).

Debilidades:
- La mecánica se siente "formulario de parametrización" más que "asesor de decisión".
- Chips de perfil/intención tienen densidad alta de texto y peso visual parecido entre estados.
- Falta momento visual de "decisión tomada" cuando aparece la ruta.

### 2.5 Densidad de información

Estado actual: 6.4/10.

Hallazgo principal:
- Se presenta mucho contenido útil en poco espacio, pero con poca modulación de ritmo visual.

Efecto:
- La página demanda más esfuerzo cognitivo del necesario para una primera lectura estratégica.

### 2.6 Escaneabilidad

Estado actual: 6.9/10.

Fortalezas:
- Anchors secundarios útiles.
- Subtítulos y etiquetas de paso ayudan a orientarse.

Debilidades:
- Repetición de patrones de card reduce "puntos de anclaje memorables".
- Los bloques bajos (vocabulario, continuidad) se leen como apéndices y no como parte de una narrativa única.

### 2.7 Jerarquía visual

Estado actual: 6.3/10.

Hallazgo principal:
- Hero y Navigator tienen intención de jerarquía, pero el resto mantiene una presión visual muy homogénea.

Consecuencia:
- El usuario identifica secciones, pero no percibe una "curva de importancia" clara.

### 2.8 Conversión hacia artículos

Estado actual: 7.4/10.

Fortalezas:
- Enlaces abundantes y contextualizados en capas y rutas.
- Reading path favorece clic por secuencia.

Riesgo:
- Exceso de enlaces utilitarios sin priorización visual por "siguiente mejor lectura".

### 2.9 Conversión hacia manifesto

Estado actual: 5.9/10.

Hallazgo principal:
- La opción existe, pero compite en igualdad visual con otras salidas.

Consecuencia:
- Bajo empuje hacia narrativa de tesis cuando el usuario necesita marco conceptual antes de profundidad.

### 2.10 Conversión futura hacia newsletter

Estado actual: 5.4/10.

Hallazgo principal:
- "Próximamente" está resuelto funcionalmente, pero sin valor percibido de continuidad.

Consecuencia:
- El usuario no visualiza beneficio futuro concreto de suscribirse.

---

## 3. Qué sigue pareciendo pantalla administrativa

- Constructor de ruta por patrón de selección (chips + estado activo) con estética de panel de configuración.
- Tarjetas homogéneas con borde suave en casi todos los bloques.
- Exposición de mensajes técnicos de resolución de slugs en zonas centrales de decisión.
- Ritmo visual constante de "bloque -> borde -> texto -> link" sin momentos editoriales de alto impacto.

---

## 4. Qué sigue pareciendo documentación

- Vocabulario al final como glosario independiente (más referencia que herramienta de decisión).
- Capas presentadas como lista expansible de contenido, no como estaciones de trayectoria.
- Continuidad presentada como lista de destinos, no como recomendación contextual dinámica.

---

## 5. Bloques con peor retorno visual

Retorno visual bajo (mucho espacio, poca percepción de valor diferencial):
- Vocabulario mínimo.
- Continuidad.
- Zona media de Capas cuando hay varias abiertas.

Retorno visual medio:
- Navigator (funciona, pero aún con tono de configuración).

Retorno visual alto:
- Hero.
- Mapa causal.

---

## 6. Bloques que deberían comprimirse

- Vocabulario mínimo: reducir presencia en primera lectura y reforzar uso contextual.
- Mensajería técnica de errores/warnings: sacar del flujo primario de percepción estratégica.
- Descripción larga en chips del Navigator: compactar para facilitar comparación rápida.

---

## 7. Bloques que deberían expandirse

- Mapa causal: expandir percepción de continuidad y dirección entre capas.
- Resultado de ruta recomendada: expandir señal de "decisión de alto valor".
- Continuidad final: expandir framing estratégico de por qué ir a Artículos vs Manifesto vs Newsletter.

---

## 8. Propuesta Sprint Visual B

### P1 — Alto impacto / bajo esfuerzo

1. Rejerarquizar narrativa visible por bloque
- Objetivo: que Hero, Mapa y Resultado de ruta dominen claramente la lectura.
- Resultado esperado: subida rápida de percepción de "framework de decisión".

2. Reducir huella de lenguaje técnico en flujo principal
- Objetivo: minimizar señales de backoffice durante lectura estratégica.
- Resultado esperado: menor sensación administrativa.

3. Reposicionar Continuidad como "siguiente mejor decisión"
- Objetivo: pasar de lista de links a cierre prescriptivo.
- Resultado esperado: mejor conversión a Artículos y Manifesto.

4. Ajustar densidad de chips en Navigator
- Objetivo: priorizar comparación escaneable y estado seleccionado.
- Resultado esperado: menos fricción de formulario, más sensación de asesor guiado.

### P2 — Alto impacto / esfuerzo medio

1. Sistema visual de progresión causal más expresivo en Mapa
- Objetivo: reforzar lectura de flujo continuo, también en tablet y móvil.
- Resultado esperado: comprensión más inmediata de dependencia intercapas.

2. Reencuadre de Capas como "decisión por tramo"
- Objetivo: que cada capa exponga con más claridad habilitador, riesgo y acción siguiente.
- Resultado esperado: mayor claridad operativa y menor fatiga de lectura.

3. Integración contextual del Vocabulario
- Objetivo: transformar glosario final en soporte vivo de comprensión durante navegación.
- Resultado esperado: vocabulario percibido como herramienta, no anexo.

### P3 — Refinamientos

1. Microcopy de transición entre bloques
- Objetivo: suavizar saltos y mantener hilo narrativo.

2. Curva de espaciado y ritmo vertical
- Objetivo: reducir sensación de bloques apilados equivalentes.

3. Señales de estado más distintivas
- Objetivo: hacer más memorable qué está activo, qué está relacionado y qué es secundario.

4. Afinado de tono de continuidad newsletter
- Objetivo: elevar valor percibido del futuro canal.

---

## 9. Plan para pasar de 6.5/10 a 8.5/10

Palancas prioritarias:
- P1 completo.
- 2 iniciativas P2 (Mapa + Capas).
- 2 refinamientos P3 (ritmo vertical + microcopy de transición).

Cambio perceptual esperado:
- De "interfaz bien organizada" a "propiedad intelectual accionable".
- De "bloques de información" a "trayectoria de decisión".
- De "navegación de contenidos" a "navegación de capacidades".

Indicadores cualitativos de éxito:
- El usuario define la diferencia entre /framework y /articulos en una frase al primer scroll.
- El usuario identifica su capa y su siguiente movimiento sin leer toda la página.
- El usuario percibe el resultado del Navigator como recomendación estratégica, no como salida de formulario.

---

## 10. Conclusión

La base funcional está resuelta y el salto pendiente es de dirección visual estratégica. Sprint Visual B debe enfocarse en jerarquía, ritmo y percepción de decisión para que /framework deje definitivamente de parecer documentación técnica y opere como activo de propiedad intelectual de Archwise.
