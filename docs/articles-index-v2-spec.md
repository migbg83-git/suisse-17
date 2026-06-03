# Especificacion funcional: /articulos v2

Fecha: 2026-06-03
Estado: Propuesta funcional (sin implementacion)
Ambito: UX, IA, estructura de pagina y requisitos funcionales
Restricciones: sin buscador, sin paginacion, sin cambios de URL, sin romper SEO

## 0. Objetivo funcional

Convertir /articulos de listado cronologico plano a indice editorial guiado que:
- mantenga simplicidad operativa,
- mejore descubrimiento de contenido,
- explicite el framework intelectual de Archwise,
- preserve comportamiento SEO actual.

## 1. Estructura exacta de la pagina

Orden obligatorio de secciones en /articulos v2:

1. Hero editorial
2. Navegacion interna por anclas
3. Seccion Empieza aqui
4. Seccion Mapa del framework Archwise
5. Seccion Explora por cluster
6. Seccion Ultimos publicados (cronologico)
7. Footer editorial de orientacion

### 1.1 Anclas internas requeridas

- #empieza-aqui
- #mapa-framework
- #explora-clusters
- #ultimos-publicados

### 1.2 Comportamiento global esperado

- Todo en una sola URL: /articulos
- Sin filtros avanzados, sin buscador, sin paginacion
- Cada enlace de articulo apunta a /articulos/{slug} existente
- Render server-side/static igual que actual (indexable)

## 2. Definicion funcional por seccion

## 2.1 Seccion Hero editorial

- Titulo: Articulos
- Subtitulo: Indice editorial para CTOs, arquitectos y equipos que escalan IA en entornos enterprise.
- Proposito:
  - explicar que no es un blog cronologico, sino un corpus conectado,
  - ofrecer dos puertas de entrada inmediatas.
- Contenido mostrado:
  - H1
  - texto introductorio de 1-2 lineas
  - CTA 1: Empieza aqui
  - CTA 2: Ver mapa del framework

## 2.2 Seccion Navegacion interna por anclas

- Titulo: Navega por objetivo
- Subtitulo: Elige ruta rapida o exploracion completa.
- Proposito:
  - reducir scroll ciego,
  - mejorar orientacion desde el primer viewport.
- Contenido mostrado:
  - enlaces a #empieza-aqui, #mapa-framework, #explora-clusters, #ultimos-publicados

## 2.3 Seccion Empieza aqui

- Titulo: Empieza aqui
- Subtitulo: Ruta esencial para entender el framework Archwise en menos de 10 lecturas.
- Proposito:
  - minimizar tiempo a valor para primera visita,
  - responder por donde empezar.
- Contenido mostrado:
  - lista ordenada de 9 articulos curados
  - para cada item:
    - posicion (1..9)
    - titulo
    - micro-justificacion (1 linea)
    - categoria
    - reading time
    - enlace al detalle

Orden funcional recomendado:
1) por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia
2) context-engineering-vs-prompt-engineering
3) por-que-fracasan-iniciativas-ia
4) ai-governance-framework
5) ai-operating-model-enterprise
6) organizational-memory-activo-ai-native
7) memory-architecture-contexto-reutilizable-enterprise
8) context-systems-entregar-contexto-correcto-enterprise
9) enterprise-ai-transformation-roadmap

## 2.4 Seccion Mapa del framework Archwise

- Titulo: Mapa del framework
- Subtitulo: De contexto explicito a decisiones consistentes a escala.
- Proposito:
  - hacer visible la arquitectura intelectual del corpus,
  - mostrar secuencia recomendada de comprension.
- Contenido mostrado:
  - 4 etapas conceptuales con 2-4 articulos por etapa:
    - Etapa 1: Contexto y deuda de conocimiento
    - Etapa 2: Gobierno y control
    - Etapa 3: Modelo operativo
    - Etapa 4: Memoria y Context Systems
  - cada etapa incluye:
    - nombre de etapa
    - objetivo breve
    - enlaces a articulos clave

## 2.5 Seccion Explora por cluster

- Titulo: Explora por cluster
- Subtitulo: Rutas tematicas para profundizar segun prioridad.
- Proposito:
  - mejorar discovery sin complejidad de buscador,
  - permitir exploracion no lineal.
- Contenido mostrado:
  - 5 bloques de cluster editorial:
    1. Fundamentos de Contexto
    2. Brecha AI-Ready y realidad legacy
    3. Gobierno y Modelo Operativo
    4. Memoria y Sistemas de Contexto
    5. Transformacion Enterprise
  - cada bloque incluye:
    - nombre de cluster
    - objetivo del cluster
    - numero de articulos
    - 3 articulos destacados
    - enlace interno para ver todos los articulos del cluster (expansion en misma pagina)

## 2.6 Seccion Ultimos publicados

- Titulo: Ultimos publicados
- Subtitulo: Cronologia completa del indice editorial.
- Proposito:
  - conservar experiencia actual para usuario recurrente,
  - mantener señal de frescura editorial.
- Contenido mostrado:
  - lista cronologica descendente de todos los articulos
  - cada item mantiene formato actual:
    - titulo
    - summary
    - categoria
    - fecha
    - reading time

## 2.7 Footer editorial de orientacion

- Titulo: No aplica (bloque de cierre)
- Subtitulo: Si es tu primera visita, empieza por la ruta curada.
- Proposito:
  - reforzar onboarding al final de scroll,
  - recuperar usuarios que llegaron directo al bloque cronologico.
- Contenido mostrado:
  - texto breve
  - enlace a #empieza-aqui

## 3. Wireframe ASCII completo

```text
+----------------------------------------------------------------------------------+
| /articulos                                                                        |
+----------------------------------------------------------------------------------+
| H1: Articulos                                                                     |
| Subtitulo: Indice editorial para CTOs y arquitectos enterprise                   |
| [Empieza aqui]   [Ver mapa del framework]                                         |
+----------------------------------------------------------------------------------+
| Navega por objetivo                                                               |
| -> Empieza aqui | Mapa del framework | Explora por cluster | Ultimos publicados  |
+----------------------------------------------------------------------------------+
| #empieza-aqui                                                                    |
| EMPieza aqui                                                                      |
| Ruta esencial (9 lecturas)                                                        |
|----------------------------------------------------------------------------------|
| 1. [Articulo 11]  | razon breve | categoria | 35 min                              |
| 2. [Articulo 15]  | razon breve | categoria | 12 min                              |
| 3. [Articulo 18]  | razon breve | categoria | 18 min                              |
| 4. [Articulo 20]  | razon breve | categoria | 15 min                              |
| 5. [Articulo 21]  | razon breve | categoria | 18 min                              |
| 6. [Articulo 22]  | razon breve | categoria | 20 min                              |
| 7. [Articulo 23]  | razon breve | categoria | 23 min                              |
| 8. [Articulo 24]  | razon breve | categoria | 13 min                              |
| 9. [Articulo 19]  | razon breve | categoria | 15 min                              |
+----------------------------------------------------------------------------------+
| #mapa-framework                                                                   |
| MAPA DEL FRAMEWORK                                                                |
| Etapa 1: Contexto y deuda de conocimiento   -> [01] [02] [03] [15]               |
| Etapa 2: Gobierno y control               -> [09] [10] [20]                       |
| Etapa 3: Modelo operativo                 -> [21] [17]                             |
| Etapa 4: Memoria y Context Systems        -> [22] [23] [24]                        |
+----------------------------------------------------------------------------------+
| #explora-clusters                                                                 |
| EXPLORA POR CLUSTER                                                               |
| [Fundamentos de Contexto]         (N articulos) [Ver todos]                       |
| [Brecha AI-Ready y legacy]        (N articulos) [Ver todos]                       |
| [Gobierno y Modelo Operativo]     (N articulos) [Ver todos]                       |
| [Memoria y Sistemas de Contexto]  (N articulos) [Ver todos]                       |
| [Transformacion Enterprise]        (N articulos) [Ver todos]                       |
+----------------------------------------------------------------------------------+
| #ultimos-publicados                                                               |
| ULTIMOS PUBLICADOS (lista cronologica completa)                                   |
|----------------------------------------------------------------------------------|
| [Titulo articulo A]                                                                |
| summary...                                                                         |
| categoria · fecha · reading time                                                   |
|----------------------------------------------------------------------------------|
| [Titulo articulo B] ...                                                            |
| ...                                                                                |
+----------------------------------------------------------------------------------+
| Cierre editorial: "Si es tu primera visita, empieza por la ruta curada"          |
| [Volver a Empieza aqui]                                                           |
+----------------------------------------------------------------------------------+
```

## 4. Componentes Angular necesarios (nivel funcional)

Nota: listado de componentes a crear/adaptar cuando se implemente; esta especificacion no incluye codigo.

### 4.1 Reutilizar

- ArticlesPageContainer (actual ArticlesComponent)
- EditorialArticleList (bloque cronologico actual)
- ArticleMetaRow (categoria, fecha, readingTime)

### 4.2 Nuevos componentes propuestos

- ArticlesHeroSection
- ArticlesAnchorNav
- ArticlesStartHereSection
- FrameworkMapSection
- ClusterExplorerSection
- ClusterCard
- ClusterArticleList
- ArticlesFooterGuidance

### 4.3 Servicios/ayudantes funcionales propuestos

- ArticlesIndexViewModelBuilder
  - agrega datos para secciones y ordenes
- ClusterResolverService
  - asigna articulos a clusters editoriales (transversal)
- StartHereResolverService
  - devuelve la ruta curada y su orden

## 5. Datos necesarios procedentes de article.json

Campos requeridos por articulo:
- title
- slug
- description
- excerpt (si existe)
- category
- tags
- readingTime
- author
- date
- relatedArticles
- featured
- published
- canonicalUrl (para controles SEO internos)

Campos derivados necesarios en runtime (sin tocar URL):
- category.slug / category.name (ya normalizado por build-content)
- isNewReaderEssential (boolean derivado de lista curada)
- frameworkStage (etapa 1-4, derivada por regla editorial)
- clusterIds (1..n por articulo para clusters transversales)
- highlightReason (micro-justificacion en Empieza aqui)

## 6. Cambios minimos necesarios para soportar la nueva experiencia

1. Mantener fuente de verdad de contenido como hoy:
- content/enterprise-ai/article-XX/article.md y article.json
- build-content genera assets/content/articles.json

2. Introducir configuracion editorial adicional (minima):
- archivo de configuracion de indice, por ejemplo:
  - orden de Empieza aqui
  - definicion de etapas del framework
  - definicion de clusters y slugs incluidos

3. Mantener listado cronologico actual intacto como seccion final.

4. Mantener rutas y slugs existentes sin cambios.

5. Mantener metadata SEO de /articulos, ajustando copy si procede pero sin cambiar canonical ni estructura de URL.

6. Reutilizar article model actual; agregar solo view model de pagina para no acoplar la taxonomia oficial con los clusters editoriales.

## 7. Riesgos SEO

1. Dilucion de relevancia semantica en /articulos por exceso de bloques
- Mitigacion: mantener H1 unico y jerarquia clara H2/H3.

2. Duplicidad de enlaces internos en una sola pagina
- Mitigacion: limitar repeticion de un mismo slug en modulos superiores.

3. Desalineacion entre canonical y dominio historico en article.json antiguos
- Observacion: existen canonicals legacy (ej. archwise.ai) en parte del corpus.
- Mitigacion: auditoria progresiva de canonicalUrl por lote.

4. Aumento de peso HTML en /articulos
- Mitigacion: mantener bloques compactos, priorizar top 3 por cluster y expansion controlada.

5. Riesgo de anchor links mal renderizados en SSR/SSG
- Mitigacion: validar HTML prerenderizado y navegacion intra-pagina post-build.

## 8. Riesgos de mantenimiento

1. Curacion manual de Empieza aqui puede quedar desactualizada
- Mitigacion: revision editorial mensual o por cada 5 articulos nuevos.

2. Clusters transversales pueden divergir de taxonomia oficial
- Mitigacion: gobernanza explicita: taxonomia oficial no se modifica automaticamente.

3. Carga operativa extra para equipo editorial
- Mitigacion: plantilla de decision simple por articulo nuevo:
  - entra/no entra en Empieza aqui
  - etapa framework
  - cluster(es)

4. Inconsistencia de metadatos legacy (tags vacios en parte del corpus)
- Mitigacion: usar reglas fallback por categoria y relatedArticles.

## 9. Estrategia de escalado (50, 100, 200 articulos)

## 9.1 Escenario 50 articulos

Objetivo:
- mantener descubrimiento rapido sin perder simplicidad.

Estrategia:
- Empieza aqui se mantiene en 9-12 items maximo.
- Clusters muestran top 4 y boton ver todos dentro del bloque.
- Cronologico muestra ultimos 30 por defecto y resto bajo expansion progresiva en la misma pagina.

## 9.2 Escenario 100 articulos

Objetivo:
- evitar pagina inabarcable sin activar paginacion clasica.

Estrategia:
- reforzar navegacion por mapa + clusters como via principal.
- cronologico segmentado por ano con acordeones expandibles.
- introducir modulo "Rutas recomendadas por objetivo" (CTO, Tech Lead, Governance).

## 9.3 Escenario 200 articulos

Objetivo:
- preservar orientacion y rendimiento cognitivo.

Estrategia:
- /articulos opera como hub de navegacion (no como dump completo visible de golpe).
- cronologico por decadas editoriales o periodos (ej. 2026 H1, 2026 H2).
- mantener sin buscador, pero con jerarquia fuerte:
  - rutas de inicio
  - mapa framework
  - clusters
  - archivo cronologico plegable

Regla comun en 50/100/200:
- nunca romper slugs ni estructura de URL existente,
- discovery por curacion y arquitectura de informacion, no por complejidad funcional.

## 10. Recomendacion final

Recomendacion ejecutiva:
- mantener la lista cronologica, pero relegada a bloque final;
- convertir /articulos en una pagina orientada por intencion con 3 capas:
  1) onboarding (Empieza aqui),
  2) comprension (Mapa del framework),
  3) exploracion (Clusters),
  4) continuidad (Cronologico).

Resultado esperado:
- mejor experiencia para CTO de primera visita,
- mayor profundidad de navegacion interna,
- mantenimiento razonable,
- continuidad SEO sin cambios de URL ni arquitectura de indexacion.
