# Framework UI Specification

Fecha: 2026-06-06
Estado: Especificacion UI cerrada lista para implementacion Angular
Base obligatoria: framework-discovery, framework-architecture, framework-content, framework-v2-simplification, framework-archwise-v1-proposal
Alcance: especificacion de interfaz y arquitectura tecnica (sin implementacion)

---

## 0) Alcance y restricciones

Esta especificacion traduce arquitectura aprobada a UI ejecutable.

Incluye:
- UX goals,
- arquitectura visual,
- wireframe conceptual,
- componentes UI,
- interacciones,
- responsive,
- integracion Angular,
- SEO y accesibilidad,
- riesgos UX,
- criterios de aceptacion.

No incluye:
- Angular code,
- HTML definitivo,
- CSS,
- wireframes graficos,
- cambios conceptuales en framework.

Invariante de producto:
- /framework mantiene 6 bloques aprobados y funcion de orientacion conceptual + navegacion causal.

---

## 1) Objetivos de UX

## 1.1 Comprension por ventana temporal

En 30 segundos, visitante debe entender:
- que /framework no es indice editorial,
- que el valor esta en orden causal de capacidades,
- que puede elegir una entrada rapida (capa o navigator).

En 3 minutos, visitante debe entender:
- las 6 capas del framework,
- donde esta su brecha probable,
- que existe una ruta guiada por perfil/intencion.

En 10 minutos, visitante debe entender:
- como convertir comprension en recorrido concreto de lectura,
- como conectar capas con articulos relevantes,
- cual es su siguiente accion en el sitio (continuidad).

---

## 1.2 Acciones que debe poder realizar

Acciones primarias:
1. navegar a cualquier capa desde mapa causal,
2. expandir detalle de una capa,
3. lanzar ruta por perfil,
4. filtrar por intencion,
5. abrir articulos relacionados,
6. volver a mapa sin perder contexto.

Acciones secundarias:
1. consultar vocabulario minimo,
2. saltar a /articulos,
3. ir a manifesto,
4. activar continuidad (newsletter futura / guardar ruta).

---

## 1.3 Errores de comprension a evitar

Errores criticos:
1. confundir /framework con cronologia de /articulos,
2. interpretar capas como checklist temporal fijo,
3. creer que navigator duplica /articulos,
4. pensar que ASIS se implementa aqui,
5. no distinguir /framework de manifesto.

Mecanismos UI para prevenirlos:
- etiquetas de contexto en hero y mapa,
- notas "orden causal, no cronologico",
- separacion visual entre "orientacion" y "exploracion total",
- CTAs de continuidad explicitos.

---

## 2) Arquitectura visual global (6 bloques)

Orden visual definitivo:
1. Tesis operativa
2. Mapa causal (6 capas)
3. Capas (detalle)
4. Navigator unificado
5. Vocabulario minimo
6. Continuidad

Regla de pagina:
- una sola columna narrativa principal con subestructuras internas,
- jerarquia fuerte arriba, densidad progresiva en centro, cierre accionable al final.

---

## 2.1 Bloque 1 - Tesis operativa

Proposito visual:
- anclaje semantico inmediato.

Jerarquia:
- maxima (H1 + subtitulo + dos acciones primarias).

Densidad de contenido:
- baja (microcopy de orientacion, no detalle).

Interaccion esperada:
- click rapido a mapa o navigator.

---

## 2.2 Bloque 2 - Mapa causal de 6 capas

Proposito visual:
- representar arquitectura de sistema en una vista unica.

Jerarquia:
- alta (primer bloque de contenido estructural).

Densidad de contenido:
- media (nombres de capa + frase funcional breve por capa).

Interaccion esperada:
- click por capa para foco en bloque 3,
- estado activo visible.

---

## 2.3 Bloque 3 - Capas (detalle)

Proposito visual:
- convertir capa en decision: que habilita, que riesgo evita, que leer.

Jerarquia:
- alta sostenida (nucleo de pagina).

Densidad de contenido:
- alta controlada (estructura repetible por capa).

Interaccion esperada:
- expand/collapse por capa,
- lectura por secciones internas,
- links a articulos y navigator.

---

## 2.4 Bloque 4 - Navigator unificado

Proposito visual:
- resolver "que leer ahora" sin duplicar navegacion.

Jerarquia:
- media-alta.

Densidad de contenido:
- media (selector perfil + selector intencion + resultado).

Interaccion esperada:
- seleccion combinada perfil/intencion,
- actualizacion de reading path en tiempo real,
- CTA a articulos.

---

## 2.5 Bloque 5 - Vocabulario minimo

Proposito visual:
- reducir ambiguedad conceptual en terminos nucleares.

Jerarquia:
- media.

Densidad de contenido:
- media-baja (cards breves, definicion + enlace).

Interaccion esperada:
- hover/focus para pista contextual,
- click a articulo base del termino.

---

## 2.6 Bloque 6 - Continuidad

Proposito visual:
- cerrar flujo con siguiente paso claro.

Jerarquia:
- media.

Densidad de contenido:
- baja.

Interaccion esperada:
- elegir continuidad: /articulos, manifesto, newsletter futura.

---

## 3) Wireframe conceptual (sin HTML)

## 3.1 Desktop (>=1200)

Orden visual:
- Hero/Tesis full width.
- Mapa causal full width con 6 nodos horizontales o en grid 3x2.
- Capas detalle en acordeon vertical (6 paneles).
- Navigator en bloque destacado con controles en una fila.
- Vocabulario en grid de cards.
- Continuidad en bloque final con CTAs paralelos.

Tamano relativo aproximado:
- Bloque 1: 12-15% altura total de pagina.
- Bloque 2: 12-15%.
- Bloque 3: 35-40%.
- Bloque 4: 15-18%.
- Bloque 5: 10-12%.
- Bloque 6: 8-10%.

Prioridades visuales:
1. Tesis
2. Mapa
3. Capas
4. Navigator
5. Continuidad
6. Vocabulario

Flujo de scroll:
- top-down lineal,
- anclas internas para saltar entre bloques,
- retorno rapido a mapa desde cada capa.

---

## 3.2 Mobile (<=767)

Orden visual:
- Tesis compacta.
- Mapa causal en lista secuencial de 6 items.
- Capas en acordeon (una abierta por defecto).
- Navigator en dos pasos (perfil luego intencion).
- Vocabulario como carrusel/stack.
- Continuidad con CTAs apiladas.

Tamano relativo:
- Bloque 1 y 2 mas cortos,
- Bloque 3 dominante,
- Navigator compacto con estado persistente.

Prioridades:
- minimizar desplazamiento redundante,
- maximizar claridad de accion por pantalla.

Flujo de scroll:
- secuencial,
- con back-to-map sticky opcional,
- enlaces profundos a capa especifica.

---

## 3.3 Tablet (768-1199)

Comportamiento intermedio:
- mapa en 2 columnas x 3 filas,
- capas en acordeon con preview,
- navigator en layout 2 columnas (controles + resultado).

---

## 4) Componentes UI

## 4.1 Hero

Responsabilidad:
- comunicar tesis operativa y entrada rapida.

Inputs:
- title,
- subtitle,
- primaryCta,
- secondaryCta.

Outputs:
- ctaPrimaryClick,
- ctaSecondaryClick.

Comportamiento:
- render estable,
- sin estados complejos,
- foco accesible a CTA.

---

## 4.2 Layer Cards (mapa causal)

Responsabilidad:
- representar las 6 capas en formato navegable.

Inputs:
- layers[] (id, name, shortDescription, order, anchor).

Outputs:
- layerSelected(layerId).

Comportamiento:
- estado activo/inactivo,
- highlight de seleccion,
- scroll al detalle de capa.

---

## 4.3 Capas Detail Panels

Responsabilidad:
- mostrar detalle de decision por capa.

Inputs:
- layerDetail (que resuelve, que habilita, riesgos, readinessQuestion, relatedArticles[]).

Outputs:
- articleClick(slug),
- goNavigator(layerId),
- panelExpand(layerId).

Comportamiento:
- acordeon (single-open por defecto en mobile, multi-open opcional desktop),
- preserva estado abierto al navegar dentro de pagina.

---

## 4.4 Navigator

Responsabilidad:
- generar reading path por perfil + intencion sin duplicar navegacion.

Inputs:
- profiles[],
- intents[],
- mapping(profile, intent) -> articles[].

Outputs:
- profileChanged,
- intentChanged,
- pathArticleClick(slug).

Comportamiento:
- fallback si combinacion no definida (usa ruta por perfil),
- muestra maximo 5 articulos por ruta,
- marca articulo ancla vs satelite.

---

## 4.5 Vocabulary Cards

Responsabilidad:
- definir terminos nucleares en formato breve.

Inputs:
- terms[] (term, definition, linkedArticleSlug).

Outputs:
- termArticleClick(slug).

Comportamiento:
- estados hover/focus,
- tooltip opcional breve,
- navegacion a articulo base.

---

## 4.6 CTA Blocks (Continuidad)

Responsabilidad:
- activar siguiente paso claro fuera de /framework.

Inputs:
- ctas[] (label, destination, context).

Outputs:
- ctaNavigate(destination).

Comportamiento:
- presentar 3-4 opciones max,
- prioridad visual: /articulos -> manifesto -> newsletter.

---

## 4.7 Reading Paths

Responsabilidad:
- representar secuencia de lectura recomendada.

Inputs:
- pathItems[] (order, slug, title, reason, readingTime, typeAnchorOrSatellite).

Outputs:
- pathItemClick(slug).

Comportamiento:
- lista ordenada,
- razones cortas visibles,
- opcion "ver ruta completa".

---

## 4.8 Related Articles

Responsabilidad:
- reutilizar patrones de cards/listas para links editoriales.

Inputs:
- articles[] de ContentService.

Outputs:
- relatedArticleClick(slug).

Comportamiento:
- mostrar titulo, categoria, readingTime,
- evitar duplicados visibles en el mismo viewport.

---

## 5) Interacciones

## 5.1 Hover

Aplicable en desktop para:
- Layer Cards,
- Vocabulary Cards,
- Reading Path items,
- CTA blocks.

Objetivo:
- reforzar affordance de navegacion,
- no revelar contenido critico solo en hover.

---

## 5.2 Click

Casos obligatorios:
- click capa en mapa -> scroll/focus a panel de capa,
- click articulo -> route /articulos/:slug,
- click perfil/intencion -> recalcular ruta,
- click CTA continuidad -> navegar a destino.

---

## 5.3 Expand/Collapse

En Bloque 3:
- panel por capa expandible.

Reglas:
- mobile: una capa abierta por defecto,
- desktop: permitir mantener varias abiertas,
- preservar estado durante scroll dentro de pagina.

---

## 5.4 Navegacion por capa

Entrada:
- mapa causal,
- anchor URLs (/framework#capa-3 etc.).

Salida:
- detalle de capa,
- articulos asociados,
- salto a navigator.

---

## 5.5 Navegacion por perfil

Entrada:
- selector perfil en Navigator.

Salida:
- reading path base del perfil.

Regla:
- perfil siempre activo (default CTO o ultimo perfil elegido).

---

## 5.6 Navegacion por intencion

Entrada:
- selector intencion (diagnosticar, disenar, operar, medir, corregir).

Salida:
- refinamiento del path del perfil.

Regla:
- si combinacion no existe: fallback a ruta base de perfil.

---

## 6) Arquitectura responsive

## 6.1 Desktop

Caracteristicas:
- mayor densidad controlada,
- comparacion visual de capas,
- navigator en una sola vista.

Cambios clave:
- grid para mapa y vocabulario,
- detalle de capas con mas contexto visible.

---

## 6.2 Tablet

Caracteristicas:
- equilibrio entre lectura vertical y bloques condensados.

Cambios clave:
- mapa en 2 columnas,
- navigator dividido en controles + resultado.

---

## 6.3 Mobile

Caracteristicas:
- flujo secuencial,
- bajo ruido visual,
- accion inmediata.

Cambios clave:
- acordeones,
- controles por pasos,
- CTAs apiladas,
- prioridad de interaccion touch.

---

## 7) Integracion Angular (sin implementacion)

## 7.1 Rutas

Ruta nueva propuesta:
- /framework

Archivo impactado en implementacion:
- app.routes.ts (agregar lazy route a FrameworkPageComponent).

Ruta interna por anclas:
- /framework#tesis
- /framework#mapa
- /framework#capas
- /framework#navigator
- /framework#vocabulario
- /framework#continuidad

---

## 7.2 Estructura de carpetas propuesta

src/app/pages/framework/
- framework.component.ts
- framework.component.html
- framework.component.scss
- framework.types.ts
- framework.data.ts

src/app/pages/framework/components/
- framework-hero/
- framework-layer-map/
- framework-layer-detail/
- framework-navigator/
- framework-vocabulary/
- framework-continuity/
- framework-reading-path/

src/app/core/models/
- framework.model.ts

src/app/core/services/
- framework.service.ts (opcional si data separada de content service)

---

## 7.3 Reutilizacion de componentes existentes

Reutilizables detectados:
- ArticleCardComponent
- NewsletterCtaComponent
- SeoService
- ContentService

Criterio de reutilizacion:
- reutilizar cuando el contrato actual cubra necesidad,
- crear componente especifico cuando la semantica de /framework requiera interaccion propia (mapa, navigator).

---

## 7.4 Modelos TypeScript necesarios (propuesta)

FrameworkLayer
- id
- order
- name
- shortDescription
- whatItSolves
- whatItEnables
- riskIfMissing
- readinessQuestion
- articleSlugs[]

FrameworkProfile
- id
- label
- description

FrameworkIntent
- id
- label
- description

FrameworkReadingPathItem
- order
- slug
- reason
- isAnchor

FrameworkTerm
- id
- term
- definition
- articleSlug

FrameworkNavigationState
- activeLayerId
- activeProfileId
- activeIntentId
- expandedLayers[]

---

## 7.5 Data flow propuesto

Fuente primaria:
- ContentService.getArticles() para metadata real de articulos.

Fuente de mapeo /framework:
- framework.data.ts (slugs, capas, perfiles, intenciones, vocabulario).

Transformacion:
- mapear slugs -> Article desde ContentService,
- descartar enlaces no resueltos con warning en consola,
- fallback graceful cuando falte articulo.

---

## 8) SEO y accesibilidad

## 8.1 SEO on-page

Estructura minima:
- 1 H1 unico: Framework Archwise
- H2 por bloque (6)
- H3 para subestructuras (capas, rutas, terminos)

Meta SEO:
- title orientado a arquitectura causal,
- description orientada a orientacion conceptual,
- canonical /framework,
- OpenGraph y Twitter via SeoService.

Enlazado interno:
- links a /articulos y /articulos/:slug,
- links a /manifesto,
- anclas internas por bloque/capa.

---

## 8.2 Semantica

Elementos semanticos esperados (sin HTML final):
- main,
- section por bloque,
- nav para navigator y anclas,
- article/ul para listas de lectura,
- button para acciones de UI que no navegan.

---

## 8.3 Accesibilidad (A11y)

Obligatorio:
- navegacion por teclado completa,
- foco visible,
- aria-expanded en accordions,
- aria-current en capa/ruta activa,
- labels claras para perfiles/intenciones,
- contraste compatible AA,
- orden logico de tabulacion,
- heading hierarchy consistente.

No permitido:
- informacion critica solo en hover,
- controles sin nombre accesible,
- saltos de heading que rompan jerarquia.

---

## 9) Riesgos de UX y mitigaciones

### Riesgo 1 - Sobrecarga visual

Sintoma:
- demasiados bloques de texto continuo.

Mitigacion:
- chunking por componentes,
- resumen primero, detalle bajo demanda,
- maximo 3 articulos visibles por contexto antes de "ver mas".

---

### Riesgo 2 - Exceso de navegacion

Sintoma:
- usuario salta entre mapa, capas y navigator sin decidir.

Mitigacion:
- CTA principal unica por bloque,
- estado persistente de seleccion,
- breadcrumbs internos ligeros.

---

### Riesgo 3 - Confusion entre capas

Sintoma:
- capa 6 absorbe demasiados temas.

Mitigacion:
- subtitulos internos en capa 6 (operar / medir-corregir),
- readiness question explicita por capa.

---

### Riesgo 4 - Confusion con /articulos

Sintoma:
- /framework percibido como indice alternativo.

Mitigacion:
- copy explicita "orientacion, no catalogo",
- salida clara a /articulos completo,
- no renderizar listados masivos en /framework.

---

### Riesgo 5 - Confusion con Manifesto

Sintoma:
- usuario no distingue tesis filosofica vs marco operativo.

Mitigacion:
- bloque continuidad con diferenciacion funcional,
- CTA a manifesto con contexto "por que" frente a "como".

---

## 10) Criterios de aceptacion (listo para implementacion)

La pagina /framework se considera lista para implementacion cuando:

1. Cumple arquitectura de 6 bloques aprobada sin agregar bloques nuevos.
2. Cada bloque tiene componente UI asignado y contrato de datos definido.
3. Existe flujo completo de navegacion capa -> detalle -> ruta -> articulo.
4. Navigator combina perfil + intencion con fallback definido.
5. No hay duplicacion de navegacion equivalente (sin biblioteca separada paralela).
6. Rutas Angular y anclas internas estan especificadas.
7. Modelos TypeScript requeridos estan definidos a nivel de contrato.
8. SEO base (title, meta, canonical, H1/H2) esta especificado.
9. A11y minima (teclado, foco, aria, jerarquia headings) esta especificada.
10. Riesgos UX criticos tienen mitigacion de diseno definida.
11. Es posible implementar sin reinterpretar arquitectura conceptual aprobada.

Definicion de done para handoff tecnico:
- este documento + framework-content constituyen insumo suficiente para implementar /framework en Angular sin abrir decisiones de arquitectura.

---

## 11) Handoff tecnico

Input para implementacion posterior:
- framework-ui-spec.md (este documento)
- framework-content.md (contenido por bloque)
- framework-v2-simplification.md (reglas de simplificacion y taxonomia)

Orden recomendado de ejecucion tecnica (futura, fuera de este alcance):
1. routing y shell de page,
2. data contracts,
3. componentes de mapa/capas/navigator,
4. SEO + a11y,
5. QA de navegacion y enlaces.

Estado actual:
- especificacion UI cerrada.
