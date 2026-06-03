# Propuesta de evolucion para /articulos v2

Fecha: 2026-06-03
Alcance: UX, Information Architecture y propuesta editorial
Restricciones respetadas: sin cambios de codigo, sin cambios Angular, sin cambios de URLs, sin buscador, sin paginacion

## Fuentes utilizadas

- docs/AI-HANDOFF.md
- docs/project-state-2026-06-01.md
- 24 archivos content/enterprise-ai/article-XX/article.json
- docs/content-map.md como referencia historica de clusters
- taxonomia vigente observada en corpus y handoff:
  - Enterprise AI (8)
  - Context Engineering (7)
  - AI-Ready Systems (3)
  - Governance (3)
  - Technical Debt (2)
  - Architecture Strategy (1)

## 1) Estado actual de /articulos

### Fortalezas

- Simplicidad extrema: una lista cronologica limpia, legible y rapida de escanear.
- SEO solido: una URL index canonical para listado, slugs estables por articulo y sitemap operativo.
- Baja friccion de mantenimiento: cualquier nuevo articulo entra automaticamente en listado.
- Consistencia editorial: titulo, resumen, categoria, fecha y tiempo de lectura visibles.

### Debilidades

- Descubrimiento pobre cuando el corpus crece: 24 articulos ya exceden el umbral de exploracion lineal eficiente.
- El framework intelectual de Archwise no es visible en la pagina de indice.
- No hay orientacion para primer visitante (especialmente CTO): falta una ruta de entrada clara.
- La cronologia domina sobre la intencion: lo ultimo publicado no siempre es el mejor punto de inicio.
- Los clusters existen en metadatos, pero no se convierten en arquitectura de navegacion.

### Problemas UX detectados

- Problema de orientacion: no responde rapido a la pregunta por donde empiezo.
- Problema de sentido: no explica como se conectan Context Engineering, Governance, Operating Model, Organizational Memory y Context Systems.
- Problema de progresion: no hay rutas de lectura sugeridas por objetivo.
- Problema de carga cognitiva: el usuario debe construir mentalmente el mapa conceptual.

### Problemas de descubrimiento de contenido

- Articulos puente y fundacionales compiten visualmente con novedades sin jerarquia editorial.
- Categorias minoritarias (Architecture Strategy, Technical Debt) quedan enterradas en scroll.
- Se pierde la continuidad del corredor conceptual 20 -> 21 -> 22 -> 23 -> 24.

## 2) Propuesta de agrupacion del corpus

Recomendacion: mantener taxonomia oficial (sin reclasificar) y superponer una capa de navegacion editorial por clusters funcionales.

### Capa A: Taxonomia oficial (mantener)

Justificacion:
- Es la estructura vigente en produccion y ya esta en metadata.
- Evita cambios disruptivos en SEO, historico y gobernanza editorial.
- Facilita consistencia con handoff y project state.

### Capa B: Clusters editoriales para navegacion (nuevo)

1. Fundamentos de Contexto
- Incluye principalmente Context Engineering y Technical Debt (01, 02, 03, 05, 06, 07, 08, 14, 15).
- Justificacion: explica por que el contexto explicito es prerequisito operativo.

2. Brecha AI-Ready y realidad legacy
- Incluye AI-Ready Systems y piezas diagnosticas (11, 12, 13, con enlaces a 06 y 18).
- Justificacion: aterriza barreras reales de adopcion IA y conecta con transformacion.

3. Gobierno y Modelo Operativo
- Incluye Governance y nodo operativo (09, 10, 20, 21).
- Justificacion: traduce principios en decisiones, accountability y escala.

4. Memoria y Sistemas de Contexto
- Incluye Organizational Memory, Memory Architecture y Context Systems (22, 23, 24).
- Justificacion: representa el tramo mas diferencial y reciente del framework Archwise.

5. Transformacion Enterprise
- Incluye piezas de adopcion organizativa (16, 17, 18, 19, con puente 04).
- Justificacion: responde a la pregunta de implementacion real para liderazgo ejecutivo.

Nota: un articulo puede aparecer en una categoria oficial unica y en un cluster editorial transversal sin romper SEO ni URL.

## 3) Seccion Empieza aqui (onboarding CTO)

Objetivo: reducir tiempo a valor para primera visita.

Propuesta de 9 lecturas esenciales (orden recomendado):

1. 11 - Por que la mayoria de los sistemas no estan preparados para IA
- Diagnostico rapido del problema sistémico.

2. 15 - Context Engineering vs Prompt Engineering
- Alinea el marco mental correcto antes de entrar en soluciones.

3. 18 - Por que fracasan la mayoria de iniciativas de IA
- Conecta teoria con friccion organizativa real.

4. 20 - AI Governance Framework
- Introduce control, riesgo y reglas de escala.

5. 21 - AI Operating Model
- Traduce governance en modelo operativo ejecutable.

6. 22 - Organizational Memory
- Situa memoria como activo estrategico y no como archivo.

7. 23 - Memory Architecture
- Define como estructurar conocimiento reutilizable.

8. 24 - Context Systems
- Cierra el salto de memoria a decision en tiempo real.

9. 19 - Enterprise AI Transformation Roadmap
- Convierte todo el marco en secuencia de transformacion.

Resultado esperado de esta seccion:
- El usuario entiende el framework completo en menos de 10 clics.
- Disminuye rebote de usuarios nuevos que llegan a un indice plano.

## 4) Wireframe conceptual para /articulos v2

Principio rector: lista cronologica como bloque, no como unica experiencia.

### Estructura de pagina (de arriba abajo)

1. Hero editorial breve
- Titulo: Articulos
- Subtitulo orientado a CTO/arquitectura enterprise
- 2 CTAs de navegacion interna:
  - Empieza aqui
  - Ver mapa del framework

2. Modulo Empieza aqui
- Lista curada de 5-10 articulos esenciales (propuesta: 9)
- Cada item con:
  - posicion en ruta
  - titulo
  - micro-razon de 1 linea
  - reading time

3. Modulo Mapa del framework Archwise
- Visualizacion conceptual en 4 etapas:
  - Contexto
  - Gobierno
  - Operacion
  - Memoria y Context Systems
- Cada etapa enlaza a 2-4 articulos clave.
- Mensaje explicito: no es un blog, es un corpus acumulativo.

4. Modulo Explora por cluster
- 5 bloques editoriales propuestos.
- Cada bloque muestra:
  - nombre del cluster
  - objetivo del cluster
  - articulos principales
  - enlace a ver todos los de ese cluster dentro de la misma pagina

5. Modulo Ultimos publicados (lista cronologica)
- Mantener la lista actual como seccion final.
- Preserva expectativa de usuario recurrente y valor SEO de frescura.

6. Footer editorial de orientacion
- Mini texto: si vienes por primera vez, empieza por la ruta curada.

### Jerarquia visual recomendada

- Nivel 1: Empieza aqui y Mapa del framework.
- Nivel 2: Explora por cluster.
- Nivel 3: Ultimos publicados (cronologico).

### Navegacion recomendada

- Navegacion interna por anclas en la misma URL /articulos.
- Sin buscador y sin paginacion.
- Sin cambio de slugs ni rutas existentes.
- Cada tarjeta sigue llevando al detalle actual del articulo.

## 5) Roadmap por fases

### Fase 1 - Reordenacion editorial de bajo riesgo

Objetivo:
- Introducir Empieza aqui y mantener lista cronologica.

Incluye:
- Curacion manual de 9 articulos esenciales.
- Microcopy de orientacion para primer visitante.

Complejidad estimada: Baja
Riesgo SEO: Muy bajo
Dependencias: Ninguna de backend

### Fase 2 - Capa de IA de contenido (sin buscador)

Objetivo:
- Hacer visible estructura intelectual con mapa y clusters.

Incluye:
- Mapa del framework en 4 etapas.
- Bloques por cluster editorial (transversales).
- Ajuste de textos de contexto para discovery.

Complejidad estimada: Media
Riesgo SEO: Bajo
Dependencias: alineacion editorial de naming de clusters

### Fase 3 - Optimizacion continua de discovery

Objetivo:
- Afinar rutas de lectura y rendimiento de navegacion.

Incluye:
- Revisión trimestral de ruta Empieza aqui.
- Ajustes por crecimiento de corpus (sin paginacion).
- Medicion de engagement por bloque (scroll depth, CTR interno, tiempo de recorrido).

Complejidad estimada: Media
Riesgo SEO: Bajo
Dependencias: analitica y gobernanza editorial

## 6) Recomendacion final

### Conviene mantener lista cronologica?

Si, pero como modulo secundario.
No debe ser la capa principal de descubrimiento en un corpus de 24+ piezas.

### Conviene agrupar?

Si. Manteniendo categorias oficiales y agregando clusters editoriales transversales.
Esta combinacion mantiene simplicidad y mejora orientacion.

### Conviene mostrar un mapa del framework?

Si, es clave.
El diferencial de Archwise no es solo publicar articulos, sino explicar un sistema conceptual acumulativo.

### Mejor experiencia para un CTO que llega por primera vez

Experiencia recomendada:
1. Diagnostico rapido del problema.
2. Ruta curada de lectura en 8-10 pasos maximo.
3. Mapa conceptual visible para entender como encajan piezas.
4. Navegacion por clusters para profundizar segun prioridad.
5. Lista cronologica disponible al final para seguimiento continuo.

En sintesis:
- Mantener simplicidad: si.
- Mantener SEO y URLs: si.
- Evitar buscador y paginacion: si.
- Hacer visible framework intelectual: imprescindible.

Propuesta final de IA para /articulos v2:
- Home editorial guiado (Empieza aqui + Mapa)
- Exploracion tematica por clusters
- Cronologia como bloque de continuidad
