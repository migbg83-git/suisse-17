# Design System — archwise.dev

## 1. Personalidad visual de la marca

Archwise comunica **autoridad tranquila**. No grita. No decora. No intenta impresionar con efectos. Impresiona con claridad, espacio y precisión tipográfica.

| Atributo | Expresión visual |
|----------|-----------------|
| Profesional | Tipografía impecable. Espaciado generoso. Cero ruido. |
| Premium | Blanco abundante. Contrastes sutiles. Detalles mínimos pero cuidados. |
| Serio | Sin emojis. Sin gradientes llamativos. Sin ilustraciones cartoon. |
| Moderno | System font stack moderno. Layout actual. Micro-interacciones sobrias. |
| Enterprise-grade | Estructura predecible. Navegación clara. No experimental. |
| No corporativo aburrido | Personalidad en el copy. Ritmo visual. Un acento de color con carácter. |

**Referencias visuales (tono, no copia):**

- Stripe: claridad estructural, tipografía como protagonista
- Linear: oscuridad elegante, densidad de información bien manejada
- Vercel: minimalismo radical, blanco como statement
- Notion: legibilidad en textos largos, ritmo vertical

**Identidad propia:** Archwise es más austero que Stripe, más cálido que Linear, más editorial que Vercel. Es una publicación técnica con estándares de diseño editorial europeo.

---

## 2. Principios de diseño

1. **Contenido primero.** Cada decisión visual sirve al texto. Si no mejora la lectura, sobra.
2. **Espacio como estructura.** El whitespace no es vacío — es arquitectura visual. Generoso siempre.
3. **Una sola cosa por pantalla.** Cada viewport tiene un foco claro. Sin competencia por atención.
4. **Consistencia sobre originalidad.** Patrones repetibles. Comportamiento predecible. Cero sorpresas.
5. **Performance es diseño.** Si un elemento visual degrada la carga, se elimina. Sin excepciones.
6. **Accesibilidad es calidad.** Contraste suficiente, focus visible, navegación por teclado. No es opcional.
7. **Progressive disclosure.** Mostrar lo esencial. El detalle aparece cuando se busca.

---

## 3. Paleta de colores

### Filosofía cromática

Monocromática con un solo acento. El color no decora — señala.

### Colores base

| Token | Valor | Uso |
|-------|-------|-----|
| `--aw-white` | `#FFFFFF` | Fondo principal |
| `--aw-gray-50` | `#F9FAFB` | Fondo alternativo (secciones, cards) |
| `--aw-gray-100` | `#F3F4F6` | Bordes suaves, separadores |
| `--aw-gray-200` | `#E5E7EB` | Bordes visibles |
| `--aw-gray-300` | `#D1D5DB` | Elementos deshabilitados |
| `--aw-gray-500` | `#6B7280` | Texto secundario (fechas, metadata) |
| `--aw-gray-700` | `#374151` | Texto body principal |
| `--aw-gray-900` | `#111827` | Títulos, headings, texto de máximo peso |
| `--aw-black` | `#0A0A0A` | Navbar. Footer. Elementos de contraste máximo. |

### Color acento

| Token | Valor | Uso |
|-------|-------|-----|
| `--aw-accent` | `#2563EB` | Links, CTAs, elementos interactivos |
| `--aw-accent-hover` | `#1D4ED8` | Hover en links y botones |
| `--aw-accent-light` | `#EFF6FF` | Fondo de CTAs secundarios, badges |

**Por qué azul sólido:** Comunica confianza, profesionalismo y seriedad sin ser frío. Es el color enterprise por excelencia pero en su variante moderna (no el azul corporativo de 2005). Un solo color de acento = máxima coherencia visual con mínimo esfuerzo de mantenimiento.

### Colores semánticos

| Token | Valor | Uso |
|-------|-------|-----|
| `--aw-success` | `#059669` | Confirmaciones (newsletter signup OK) |
| `--aw-error` | `#DC2626` | Errores de validación |

### Dark mode

No se implementa en Fase 1. Si se añade en el futuro:

- Invertir grays (900 → fondo, 50 → texto)
- Acento: mantener o subir luminosidad ligeramente
- Implementar con `prefers-color-scheme` + toggle manual

---

## 4. Tipografía

### System font stack

```scss
$font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                   "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", 
                   "Segoe UI Emoji";

$font-family-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", 
                   Consolas, "Courier New", monospace;
```

**Por qué system fonts:**

- Zero latencia de carga (0ms FOUT)
- Familiares para el lector en cada OS
- Renderizan con hints nativos (máxima legibilidad)
- Un request menos = performance pura

### Escala tipográfica

Base: 18px en desktop, 16px en mobile. Ratio: ~1.25 (Major Third).

| Elemento | Desktop | Mobile | Weight | Line-height |
|----------|:-------:|:------:|:------:|:-----------:|
| H1 (título de página) | 2.5rem (45px) | 2rem (32px) | 700 | 1.2 |
| H2 (sección) | 1.75rem (31px) | 1.5rem (24px) | 700 | 1.3 |
| H3 (subsección) | 1.375rem (25px) | 1.25rem (20px) | 600 | 1.4 |
| H4 | 1.125rem (20px) | 1.125rem (18px) | 600 | 1.4 |
| Body | 1.125rem (18px) | 1rem (16px) | 400 | 1.7 |
| Body small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.6 |
| Caption/meta | 0.8125rem (13px) | 0.8125rem (13px) | 400 | 1.5 |
| Code inline | 0.9em | 0.9em | 400 | inherit |
| Code block | 0.875rem (14px) | 0.8125rem (13px) | 400 | 1.6 |

### Reglas tipográficas

- **Máximo 70-75 caracteres por línea** en body text (lectura larga óptima)
- **Párrafos:** margin-bottom de 1.5rem entre párrafos
- **Headings:** margin-top 3rem, margin-bottom 1rem (espacio antes > espacio después)
- **Negrita:** usar sparingly — solo para conceptos clave, no para énfasis casual
- **Cursiva:** para términos en otro idioma o primera mención de un concepto
- **Links en texto:** underline visible. Color acento. No underline-on-hover (siempre visible)
- **Listas:** spacing entre items de 0.5rem. Indent moderado.

---

## 5. Layout general

### Grid system

Bootstrap 5 grid. Container con max-width personalizado según contexto:

| Contexto | Max-width | Justificación |
|----------|:---------:|---------------|
| Lectura (artículos, manifesto) | 720px | Óptimo para 70 chars/línea en body 18px |
| Listados (article index, home) | 960px | Espacio para cards + breathing room |
| Full-width (header, footer, hero) | 100% | Edge-to-edge cuando corresponde |

### Vertical rhythm

- Secciones principales separadas por `6rem` (96px) en desktop, `4rem` en mobile
- Subsecciones por `3rem` (48px)
- Elementos dentro de sección por `1.5rem` (24px)

### Layout general de página

```
┌─────────────────────────────────────────────┐
│  NAVBAR (sticky, fondo sólido)               │  64px height
├─────────────────────────────────────────────┤
│                                              │
│                                              │
│           CONTENIDO PRINCIPAL                │  min-height: calc(100vh - 64px - footer)
│           (centrado, max-width según tipo)   │
│                                              │
│                                              │
├─────────────────────────────────────────────┤
│  FOOTER                                      │  Fondo oscuro (--aw-black)
└─────────────────────────────────────────────┘
```

---

## 6. Navbar

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│  [Archwise]          Articles   Manifesto   Newsletter   About │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Altura | 64px |
| Fondo | `--aw-white` con border-bottom 1px `--aw-gray-100` |
| Posición | Sticky top |
| Logo | "Archwise" en texto. Font-weight 700. Color `--aw-gray-900`. Sin icono. |
| Links | Font-size 0.9375rem (15px). Weight 400. Color `--aw-gray-700`. |
| Link hover | Color `--aw-gray-900`. Sin underline. |
| Link activo | Color `--aw-gray-900`. Font-weight 500. |
| Padding horizontal | Container Bootstrap (responsive) |
| Shadow on scroll | Sutil: `0 1px 3px rgba(0,0,0,0.04)` al hacer scroll |
| Z-index | 1000 |

### Mobile (< 768px)

- Hamburger icon (3 líneas, no X hasta abierto)
- Menu desplegable full-width, fondo blanco
- Links apilados verticalmente, padding 16px por item
- Transición: slide-down suave (200ms ease)
- No overlay oscuro — el menú empuja contenido o es overlay blanco limpio

---

## 7. Footer

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  Archwise                                                    │
│  Enterprise architecture para la era de la IA.               │
│                                                              │
│  Artículos    Manifesto    Newsletter    About               │
│                                                              │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│  © 2026 Archwise            RSS · Twitter/X · GitHub         │
│  Privacy                                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Fondo | `--aw-gray-900` (casi negro, no negro puro) |
| Texto | `--aw-gray-300` para body, `--aw-white` para headings |
| Links | `--aw-gray-300`, hover: `--aw-white` |
| Padding | 4rem top/bottom (64px) |
| Border-top | Ninguno (el contraste de fondo es suficiente) |
| Separador interno | 1px `--aw-gray-700` entre sección de nav y copyright |

---

## 8. Homepage

### Estructura visual

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    HERO SECTION                               │
│                                                              │
│     Enterprise architecture                                  │
│     para la era de la IA.                     ← H1, 700     │
│                                                              │
│     Análisis, decisiones y criterio para                     │
│     arquitectos y tech leads que construyen                  │
│     sistemas complejos.                       ← body, 500   │
│                                                              │
│     [Suscribirme a la newsletter]             ← CTA primary │
│      Leer el manifesto →                      ← link        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     POSICIONAMIENTO (quote/highlight)                        │
│                                                              │
│     "Los equipos que mejor trabajan con IA                   │
│     no son los que tienen mejores prompts.                   │
│     Son los que tienen mejor conocimiento explícito."        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     ARTÍCULOS FUNDACIONALES                                  │
│                                                              │
│     ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│     │ Card 1  │ │ Card 2  │ │ Card 3  │ │ Card 4  │       │
│     │         │ │         │ │         │ │         │       │
│     └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     LO QUE CREEMOS (3 principios)                            │
│                                                              │
│     → Contexto sobre prompts.                                │
│     → Decisiones sobre ejecución.                            │
│     → Criterio sobre velocidad.                              │
│                                                              │
│     Leer manifesto completo →                                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     NEWSLETTER CTA                                           │
│                                                              │
│     Cada semana. Sin hype.                                   │
│     [email_______________] [Suscribirme]                     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones Hero

| Propiedad | Valor |
|-----------|-------|
| Padding top | 8rem desktop, 5rem mobile |
| Padding bottom | 6rem desktop, 4rem mobile |
| Fondo | `--aw-white` (limpio, sin gradiente) |
| H1 | Max-width 600px. Centrado o left-aligned. |
| Subtítulo | Max-width 540px. Color `--aw-gray-500`. |
| Alineación | Centrada en desktop. Left en mobile. |

### Sección de posicionamiento

- Fondo: `--aw-gray-50`
- Quote en font-size más grande (1.375rem), weight 500, color `--aw-gray-900`
- Sin comillas decorativas. El formato blockquote es suficiente.
- Padding vertical generoso (5rem)

---

## 9. Página de artículo

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     ← Volver a artículos                     (breadcrumb)    │
│                                                              │
│     TÍTULO DEL ARTÍCULO                       ← H1          │
│                                                              │
│     15 mayo 2026 · 12 min lectura             ← meta        │
│                                                              │
│  ─────────────────────────────────────────                   │
│                                                              │
│     Contenido del artículo...                                │
│     ...                                                      │
│     ... (max-width 720px, centrado)                          │
│     ...                                                      │
│                                                              │
│  ─────────────────────────────────────────                   │
│                                                              │
│     CTA NEWSLETTER                                           │
│     "Si esto fue útil, cada semana publico                   │
│     análisis similares."                                     │
│     [email_______________] [Suscribirme]                     │
│                                                              │
│  ─────────────────────────────────────────                   │
│                                                              │
│     ARTÍCULOS RELACIONADOS (2-3 cards)                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones de lectura

| Elemento | Especificación |
|----------|---------------|
| Contenedor | max-width 720px, centrado |
| Body text | 18px, line-height 1.7, color `--aw-gray-700` |
| Headings (H2) | margin-top 3rem, margin-bottom 1rem |
| Headings (H3) | margin-top 2rem, margin-bottom 0.75rem |
| Párrafos | margin-bottom 1.5rem |
| Links | color `--aw-accent`, underline siempre visible |
| Code inline | fondo `--aw-gray-50`, padding 2px 6px, border-radius 3px, font mono |
| Code blocks | fondo `--aw-gray-900`, texto claro, padding 1.5rem, border-radius 8px, overflow-x scroll |
| Blockquotes | border-left 3px `--aw-gray-200`, padding-left 1.5rem, color `--aw-gray-500`, italic |
| Listas | padding-left 1.5rem, spacing 0.5rem entre items |
| Imágenes | max-width 100%, border-radius 8px, margin 2rem 0 |
| Tablas | width 100%, border-collapse, borders `--aw-gray-200`, padding 0.75rem |
| Separador (hr) | border-top 1px `--aw-gray-100`, margin 3rem 0 |

### Meta del artículo

- Fecha en formato legible: "15 mayo 2026"
- Lectura estimada: "12 min lectura"
- Color: `--aw-gray-500`
- Font-size: 0.875rem
- Sin autor visible (marca individual, se infiere)
- Sin tags/badges visibles (no aportan al lector). Tags en HTML meta para SEO.

---

## 10. Página de manifesto

### Filosofía de diseño

La página más limpia de toda la web. Solo texto. Máxima tipografía. Cero distracciones. Lectura inmersiva.

### Estructura

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│                                                              │
│              Manifiesto                        ← H1, grande  │
│                                                              │
│                                                              │
│              Texto del manifesto...                           │
│              ...                                             │
│              ... (max-width 680px)                            │
│              ...                                             │
│                                                              │
│                                                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     "Si esto resuena contigo:"                               │
│     [Suscribirme a la newsletter]                            │
│     Leer los artículos →                                     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Max-width contenido | 680px (más estrecho que artículos — más inmersivo) |
| Padding top | 6rem |
| H1 | 3rem desktop. Centrado. Weight 700. |
| Separadores (---) | Margin 4rem, border-top 1px `--aw-gray-100` |
| Secciones H2 | 1.5rem, weight 700, uppercase: NO, color `--aw-gray-900` |
| Listas "Lo que rechazamos" | Negrita en frase principal + texto normal en explicación |
| Sin sidebar | Nunca. Nada al lado. Solo el texto. |
| Sin TOC | El manifesto se lee de arriba a abajo. Sin saltar. |

---

## 11. Cards de artículos

### Card estándar (article list, homepage)

```
┌─────────────────────────────────────────────┐
│                                              │
│  Cluster tag (small, gray)                   │
│                                              │
│  Título del artículo                         │  ← H3, weight 600
│                                              │
│  Una línea de descripción que resume          │  ← body, gray-500
│  el contenido del artículo.                  │
│                                              │
│  15 mayo 2026 · 12 min                       │  ← caption, gray-400
│                                              │
└─────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Fondo | `--aw-white` |
| Border | 1px `--aw-gray-100` |
| Border-radius | 8px |
| Padding | 1.5rem (24px) |
| Hover | Border-color `--aw-gray-200`. No shadow. No scale. |
| Transición hover | 150ms ease border-color |
| Título | color `--aw-gray-900`, hover: `--aw-accent` |
| Cluster tag | font-size 0.75rem, uppercase, letter-spacing 0.05em, color `--aw-gray-500` |
| Link | Toda la card es clickeable (link wrapping) |
| Imagen | Ninguna. Las cards son puramente tipográficas. |

### Layout de cards

- Homepage (fundacionales): 2 columnas en desktop, 1 en mobile
- Article index: lista vertical (1 columna) — cada card full-width del contenedor
- Artículos relacionados (post-article): 2 o 3 cards en fila, 1 en mobile

---

## 12. Botones y CTAs

### Botón primario

| Propiedad | Valor |
|-----------|-------|
| Fondo | `--aw-accent` (#2563EB) |
| Texto | `--aw-white`, weight 500 |
| Padding | 12px 24px |
| Border-radius | 6px |
| Font-size | 1rem (16px) |
| Hover | `--aw-accent-hover` (#1D4ED8) |
| Active | Ligeramente más oscuro |
| Transición | 150ms ease background-color |
| Shadow | Ninguna |
| Uppercase | No |
| Min-width | Ninguno (se adapta al contenido) |

### Botón secundario (outline)

| Propiedad | Valor |
|-----------|-------|
| Fondo | Transparente |
| Border | 1px `--aw-gray-200` |
| Texto | `--aw-gray-700`, weight 500 |
| Hover | Fondo `--aw-gray-50`, border `--aw-gray-300` |
| Resto | Mismo que primario |

### Link como CTA

```
Leer el manifesto →
```

- Color `--aw-accent`
- Font-weight 500
- Sin underline (excepción a la regla de links en body text — aquí es un CTA, no un link inline)
- Flecha (→) como texto, no como icono
- Hover: color `--aw-accent-hover`

### Newsletter CTA (inline en artículos y footer de página)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  Texto de contexto (1-2 líneas)                              │
│                                                              │
│  [email___________________________] [Suscribirme]            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

| Propiedad | Valor |
|-----------|-------|
| Contenedor | Fondo `--aw-gray-50`, padding 2rem, border-radius 8px |
| Input email | Border 1px `--aw-gray-200`, padding 12px 16px, border-radius 6px, width flexible |
| Input focus | Border-color `--aw-accent`, outline ring 2px `--aw-accent-light` |
| Botón | Botón primario estándar |
| Layout | Flex row en desktop (input + botón en línea), stack en mobile |
| Texto CTA | font-size 1.125rem, weight 600, color `--aw-gray-900` |

---

## 13. Diseño responsive

### Breakpoints

Usar los breakpoints por defecto de Bootstrap 5:

| Nombre | Breakpoint | Uso |
|--------|:----------:|-----|
| xs | < 576px | Móviles portrait |
| sm | ≥ 576px | Móviles landscape |
| md | ≥ 768px | Tablets |
| lg | ≥ 992px | Desktop |
| xl | ≥ 1200px | Desktop ancho |

### Comportamiento por breakpoint

| Elemento | Mobile (< 768px) | Desktop (≥ 768px) |
|----------|-------------------|-------------------|
| Navbar | Hamburger menu | Links inline |
| Hero H1 | 2rem, left-aligned | 2.5rem, centrado |
| Body font | 16px | 18px |
| Contenedor lectura | 100% - 32px padding | max-width 720px centered |
| Cards layout | 1 columna stack | 2 columnas (home) / 1 col list (index) |
| Newsletter CTA | Input + botón stacked | Input + botón inline |
| Footer | Stack vertical, centrado | Flex horizontal |
| Spacing sections | 4rem | 6rem |
| Code blocks | Scroll horizontal, font 13px | font 14px |

### Principios mobile

- **No hay versión "reducida"** — el contenido es el mismo, solo cambia el layout
- **Touch targets mínimo 44px** en elementos interactivos
- **Sin hover-dependent information** — todo accesible sin hover
- **Images máximo 100% width** — nunca overflow horizontal
- **Padding laterales: 16px mínimo** en mobile

---

## 14. Accesibilidad

### Nivel objetivo

WCAG 2.1 AA como mínimo.

### Contraste

| Par de colores | Ratio | Status |
|----------------|:-----:|:------:|
| `--aw-gray-900` sobre `--aw-white` | 17.4:1 | AAA |
| `--aw-gray-700` sobre `--aw-white` | 9.5:1 | AAA |
| `--aw-gray-500` sobre `--aw-white` | 5.0:1 | AA |
| `--aw-accent` sobre `--aw-white` | 4.6:1 | AA |
| `--aw-white` sobre `--aw-gray-900` | 17.4:1 | AAA |
| `--aw-white` sobre `--aw-black` | 19.3:1 | AAA |

### Focus indicators

- Outline: 2px solid `--aw-accent` con offset 2px
- Visible en todos los elementos interactivos
- No eliminar outline nativo sin reemplazo
- Focus-visible para mostrar solo en navegación por teclado

### Semántica HTML

| Elemento | Tag |
|----------|-----|
| Navbar | `<nav aria-label="Principal">` |
| Contenido principal | `<main>` |
| Artículo | `<article>` |
| Footer | `<footer>` |
| Secciones de página | `<section aria-labelledby="heading-id">` |
| Listas de artículos | `<ul>` / `<ol>` |
| Headings | Jerarquía estricta H1 → H2 → H3 (sin saltar niveles) |

### Navegación por teclado

- Tab order lógico (flujo natural del DOM, sin tabindex positivos)
- Skip-to-content link como primer elemento focusable
- Menú mobile operable con Enter/Space y Escape para cerrar
- Forms con labels asociados (`for`/`id`)

### Otros

- `lang="es"` en `<html>`
- Alt text en todas las imágenes (o `alt=""` si decorativas)
- `aria-current="page"` en link de navegación activo
- Reduced motion: respetar `prefers-reduced-motion` (desactivar transiciones)
- No auto-play de nada. No carruseles. No movimiento no solicitado.

---

## 15. Componentes Angular reutilizables previstos

### Componentes de layout

| Componente | Selector | Responsabilidad |
|------------|----------|-----------------|
| LayoutComponent | `<aw-layout>` | Shell: navbar + router-outlet + footer |
| NavbarComponent | `<aw-navbar>` | Navegación principal + mobile menu |
| FooterComponent | `<aw-footer>` | Footer con links, social, copyright |

### Componentes de contenido

| Componente | Selector | Responsabilidad |
|------------|----------|-----------------|
| ArticleCardComponent | `<aw-article-card>` | Card de artículo reutilizable. Input: Article model. |
| ArticleListComponent | `<aw-article-list>` | Lista/grid de cards. Input: Article[]. |
| ArticleBodyComponent | `<aw-article-body>` | Renderiza HTML de artículo con estilos de prosa. |
| NewsletterCtaComponent | `<aw-newsletter-cta>` | Formulario de suscripción. Input: variante (inline/full). |
| SeoHeadComponent | — (service) | Servicio que gestiona meta tags, OG, JSON-LD por ruta. |

### Componentes de página

| Componente | Ruta | Contenido |
|------------|------|-----------|
| HomePageComponent | `/` | Hero + quote + cards fundacionales + principios + newsletter CTA |
| ArticlesPageComponent | `/articles` | Index de artículos con sección "Fundacionales" + lista completa |
| ArticleDetailPageComponent | `/articles/:slug` | Meta + body + CTA + relacionados |
| ManifestoPageComponent | `/manifesto` | Texto del manifesto + CTA |
| NewsletterPageComponent | `/newsletter` | Página dedicada de conversión |
| AboutPageComponent | `/about` | Bio + stack + CTA |
| LegalPageComponent | `/legal/:slug` | Privacy/Terms |

### Estrategia de componentes

| Principio | Aplicación |
|-----------|-----------|
| Standalone components | Todos. No NgModules. Angular 21 standalone por defecto. |
| Inputs tipados | `input()` signals para todas las props. No decorators legacy. |
| OnPush | Todos los componentes con ChangeDetection.OnPush. |
| Lazy loading | Cada página es una ruta lazy-loaded. |
| Shared styles | Bootstrap utilities + variables SCSS globales. Sin CSS-in-JS. |
| Servicios inyectables | `providedIn: 'root'` para ContentService, SeoService, NewsletterService. |
| No state management | Sin NgRx. Sin signals store. Los datos son estáticos, no hay estado dinámico. |
| No component library | Sin Material, sin PrimeNG. Solo Bootstrap + componentes propios mínimos. |

---

## Resumen de identidad visual

```
Archwise = Espacio + Tipografía + Contenido

Nada más. Nada menos.
```

| Sí | No |
|----|----|
| Blanco generoso | Fondos de color llamativos |
| Tipografía como protagonista | Iconos decorativos |
| Un solo color acento | Paleta multicolor |
| Bordes sutiles | Shadows pesados |
| Transiciones de 150ms | Animaciones de entrada |
| System fonts | Webfonts pesadas |
| Cards tipográficas | Cards con thumbnails |
| Copy potente | Textos genéricos |

---

*Última actualización: Mayo 2026*
