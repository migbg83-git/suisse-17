# Articles Index v2 - Implementation Report

Fecha: 2026-06-03
Alcance de iteración: v2 fase parcial en /articulos
Deploy: NO ejecutado

## Cambios aplicados

Archivos modificados:
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.ts
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.html
- sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.scss

Resumen técnico:
- Se reemplazó el binding simple de listado por un view model derivado de `articles.json` cargado por `ContentService`.
- Se añadió configuración local (en el componente) para:
  - orden de la sección Empieza aquí (9 slugs),
  - micro-justificaciones por slug,
  - etapas del Mapa del framework (4 etapas).
- Se mantuvo la URL única `/articulos` y los enlaces a `/articulos/{slug}` existentes.
- No se modificó `article.json`, ni slugs, ni rutas, ni `build-content.ts`.

## Secciones implementadas

1. Hero editorial
- Título y subtítulo actualizados.
- CTAs internos a anclas:
  - `#empieza-aqui`
  - `#mapa-framework`

2. Navegación interna por anclas
- Bloque de navegación con enlaces a:
  - `#empieza-aqui`
  - `#mapa-framework`
  - `#ultimos-publicados`

3. Sección Empieza aquí
- Lista en orden fijo por slug solicitado.
- Cada ítem muestra:
  - número
  - título
  - micro-justificación
  - categoría
  - reading time
  - enlace al detalle

4. Sección Mapa del framework Archwise
- 4 etapas implementadas:
  - Contexto y deuda de conocimiento
  - Gobierno y control
  - Modelo operativo
  - Memoria y Context Systems
- Cada etapa muestra:
  - nombre
  - descripción breve
  - enlaces a artículos clave

5. Sección Últimos publicados
- Se mantiene la lista cronológica actual en la parte final.
- Se preserva formato editorial existente.
- Conteo validado: 24 artículos.

## Secciones aplazadas

- Explora por cluster
- Buscador
- Filtros
- Paginación
- Acordeones avanzados
- Nuevas rutas
- Cambios SEO estructurales

## Validación local

Comandos ejecutados:
- `npm run build`
- `npm run build`
- `npm run build`

Resultado de build:
- OK en las 3 ejecuciones.
- `build:content` genera `articles.json` con 24 artículos.
- Prerender reportado: 27 rutas.
- Sin errores de compilación.

Checks funcionales en prerender (`dist/archwise/browser/articulos/index.html`):
- `/articulos` renderiza correctamente: OK
- anclas funcionan (href + ids): OK
- enlaces de Empieza aquí: OK
- enlaces del Mapa del framework: OK
- lista cronológica mantiene 24 artículos: OK

Checks SSR/SSG/SEO base:
- sin errores SSR en build: OK
- sin errores `getPrerenderParams`: OK (no errores en logs, prerender completado)
- sitemap no roto: OK (`dist/archwise/browser/sitemap.xml` contiene `/articulos` y article-24)
- canonical de `/articulos`: OK (`https://archwise.org/articulos`)

## Riesgos pendientes

1. Warnings preexistentes de Angular diagnostics y Sass deprecation
- No bloquean build ni prerender.
- No forman parte del alcance de esta iteración.

2. Curación hardcoded en el componente
- Riesgo moderado de mantenimiento al crecer corpus.
- Mitigación futura: mover configuración editorial a artefacto dedicado (sin tocar rutas).

3. Carga visual en móvil con crecimiento futuro
- Iteración actual mantiene una sola columna y evita overflow horizontal.
- Mitigación futura: compactación progresiva de listas secundarias.

## Iteration 2: Refinamientos UX

Fecha de aplicación: 2026-06-03 post-Iteration 1

### Ajustes realizados

**Ajuste 1: Reducir "Empieza aquí" de 9 a 5 items**
- Cambio en `articles.component.ts`: reemplazo de `START_HERE_SEEDS` array
- Items finales (5 slugs):
  1. `architecture-md-vale-mas-que-prompts` → "Por qué un architecture.md vale más que cien prompts mágicos"
  2. `context-engineering-vs-prompt-engineering` → "Context Engineering vs Prompt Engineering"
  3. `por-que-fracasan-iniciativas-ia` → "Por qué fracasan la mayoría de las iniciativas de IA"
  4. `ai-governance-framework` → "AI Governance Framework"
  5. `context-systems-entregar-contexto-correcto-enterprise` → "Context Systems"
- Impacto UX: Reduce scroll inicial, enfatiza solo conceptos estratégicos.

**Ajuste 2: Reordenar secciones**
- Orden anterior: Hero > Anclas > Empieza aquí > Mapa del framework > Últimos publicados
- Orden nuevo: Hero > Anclas > Empieza aquí > Últimos publicados > Mapa del framework
- Cambio en `articles.component.html`: reorden de `@if` blocks para secciones
- Impacto UX: Los artículos nuevos (últimos publicados) no compiten con el Mapa del framework.

**Ajuste 3: Mejorar presentación visual del Mapa del framework**
- Cambio en `articles.component.scss`: nueva estructura de `.framework-stages`
- Elementos visuales añadidos:
  - Línea conectora izquierda (borde-left: 2px solid var(--aw-gray-200))
  - Puntos/hitos por etapa (::before con círculo, color accent, box-shadow)
  - Espaciado consistente (padding-left: 1.75rem para separación del borde)
  - Responsive móvil (reducción de tamaños, mantiene estructura)
- Impacto UX: Sugiere secuencia educativa en lugar de lista.

### Validación post-Ajustes

Builds ejecutados:
- Build 1: ✅ OK (compilación exitosa)
- Build 2: ✅ OK (compilación exitosa)
- Build 3: ✅ OK (compilación exitosa)

Prerender verificado (`dist/archwise/browser/articulos/index.html`):
- Empieza aquí: ✅ 5 items mostrados (reducido de 9)
- Secciones en orden correcto: ✅ Últimos publicados ahora antes de Mapa
- Visual del Mapa: ✅ Conectores CSS aplicados, puntos de hito visibles
- Anclas: ✅ Funcionan correctamente con nuevo orden
- Enlaces: ✅ Todos los 24 artículos + referencias del Mapa activos
- SEO: ✅ Canonical intacto, sitemap correcto

Responsive verificado:
- Desktop: ✅ Layout grid 2rem + 1fr en items
- Móvil (< 768px): ✅ 1 columna, reducción consistente de tamaños

### Impacto resumido

- UX Flow: Más enfocado en CTAs principales, menos ruido
- Hierarchy: Últimos publicados como zona editorial principal
- Visual: Framework percibido como educativo-secuencial
- Performance: Mismo peso de build, sin regresiones

## Iteration 3: Header navigation cleanup

Fecha de aplicación: 2026-06-03

### Problema detectado

- Duplicidad de navegación interna en la parte superior de `/articulos`.
- Los accesos `Empieza aquí` y `Ver mapa del framework` aparecían en dos lugares:
  - Hero (como CTAs)
  - Bloque `Navega por objetivo`
- Impacto UX: ruido visual y sensación de redundancia.

### Cambio aplicado

- Se eliminaron los CTAs del Hero en `articles.component.html`:
  - `Empieza aquí`
  - `Ver mapa del framework`
- El Hero queda únicamente con:
  - H1 `Artículos`
  - subtítulo actual
- Se mantuvo `Navega por objetivo` como única navegación interna visible, conservando:
  - `Empieza aquí`
  - `Últimos publicados`
  - `Mapa del framework`
- Limpieza de estilos no usados en `articles.component.scss`:
  - `.hero-actions`
  - `.hero-link`

Restricciones respetadas:
- Sin nuevas rutas
- Sin mover el Mapa del framework fuera de `/articulos`
- Sin cambios SEO
- Sin cambios sitemap
- Sin cambios en `article.json`
- Sin cambios en contenido editorial

### Validación

Comando ejecutado:
- `npm run build`

Resultado:
- Build: ✅ OK
- SSR/SSG: ✅ sin errores de compilación
- Warnings: solo preexistentes (Sass deprecation + budget de `article-detail.component.scss`)

Checks funcionales:
- `/articulos` renderiza correctamente: ✅
- Hero sin CTAs duplicados: ✅
- `Navega por objetivo` sigue visible y funcionando: ✅
- anclas (`#empieza-aqui`, `#ultimos-publicados`, `#mapa-framework`): ✅
- lista de artículos sin cambios: ✅
- Mapa del framework al final de la página: ✅

### Estado final

READY FOR DEPLOY

## Iteration 4: Navigation visual refinement

Fecha de aplicación: 2026-06-03

### Problema detectado

- La navegación `Navega por objetivo` funcionaba correctamente, pero visualmente se percibía como texto normal.
- Faltaba jerarquía visual para comunicar que era un bloque de navegación editorial.

### Cambio aplicado

- Refinamiento visual del bloque existente sin cambiar layout ni estructura:
  - Conversión visual a `tabs` editoriales sobrias.
  - Mayor contraste y peso tipográfico en `Navega por objetivo`.
  - Separación clara entre opciones con bordes sutiles y espaciado.
  - Estado activo inicial en `Empieza aquí` (`is-active`, `aria-current="true"`).
- Cambios implementados en:
  - `sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.html`
  - `sites/enterprise-ai/archwise/src/app/pages/articles/articles.component.scss`

### Restricciones respetadas

- Sin cambios de layout.
- Sin secciones nuevas.
- Sin cambios de SEO.
- Sin cambios de rutas.
- Sin cambios de contenido editorial.
- Sin cambios en `article.json`.
- Sin colores nuevos, sin gradientes, sin sombras, sin iconografía.

### Validación

Comando ejecutado:
- `npm run build`

Resultado:
- Build: ✅ OK
- SSR/SSG: ✅ sin errores de compilación
- Responsive: ✅ correcto (ajustes de tipografía/espaciado en móvil)
- Funcionalidad: ✅ sin cambios (anclas, orden de secciones, contenido)
- SEO/sitemap: ✅ sin cambios

Resultado esperado UX:
- Navegación más legible y reconocible como bloque de navegación.
- Jerarquía editorial más clara en la cabecera de `/articulos`.

### Estado final

READY FOR DEPLOY

## Estado final

READY FOR DEPLOY ✅

Todos los refinamientos de Iteration 2 validados sin romper funcionalidad, rutas, o SEO.
