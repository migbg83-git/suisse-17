# Homepage Mockup — archwise.dev

## Filosofía visual

Homepage como **entrada calma y autoritaria**. No gritar. No impresionar con efectos. Comunicar posición clara en 10 segundos. Filtrar audiencia: arquitectos y tech leads enterprise que valoran criterio sobre velocidad.

**Composición general:** Vertical scroll narrativo. Secciones claramente delimitadas. Ritmo visual slow → cada sección tiene espacio para respirar. No competencia visual — una idea por viewport.

**Paleta:** Monocromática (grays) + acento azul (`#2563EB`) solo donde se requiere acción. Fondos alternantes blanco/gray-50 para separar secciones sin usar líneas.

---

## 1. Navbar (Sticky)

### Dimensiones
- **Altura:** 64px fija
- **Fondo:** Blanco puro (`#FFFFFF`)
- **Border-bottom:** 1px `#F3F4F6` (gray-100) — sutil pero visible

### Contenedor interno
- **Max-width:** Bootstrap container (responsive: 540px/720px/960px/1140px según breakpoint)
- **Padding horizontal:** 24px en mobile, automático en desktop (container)
- **Display:** Flexbox horizontal
- **Justify-content:** `space-between` (logo izquierda, nav derecha)
- **Align-items:** `center` (centrado vertical)

### Logo (izquierda)
- **Texto:** "Archwise"
- **Font-size:** 16px (1rem)
- **Font-weight:** 700 (bold)
- **Color:** `#111827` (gray-900)
- **Sin icono.** Solo texto.
- **Hover:** Sin cambio de color (siempre gray-900)

### Navegación (derecha)
- **Display:** Flex horizontal
- **Gap:** 32px (2rem) entre links
- **Links:** "Articles" | "Manifesto" | "Newsletter" | "About"
- **Font-size:** 15px (0.9375rem)
- **Font-weight:** 400 (regular)
- **Color default:** `#374151` (gray-700)
- **Color hover:** `#111827` (gray-900)
- **Color activo:** `#111827` + font-weight 500 (medium)
- **Sin underline** en ningún estado

### Mobile (< 768px)
- **Hamburger button (derecha):**
  - 3 líneas horizontales, 24px wide × 2px height
  - Color `#111827`
  - Gap 4px entre líneas
- **Menu desplegable:**
  - Fondo blanco, full-width
  - Links apilados verticalmente
  - Padding 16px por item
  - Border-bottom 1px `#F3F4F6` entre items
  - Transición slide-down 200ms ease

### Comportamiento scroll
- **Always sticky** (position: sticky; top: 0)
- **Z-index:** 1000
- Opcional: shadow sutil `0 1px 3px rgba(0,0,0,0.04)` al hacer scroll > 20px

### Intención psicológica
**Presencia sin protagonismo.** El navbar establece estructura, pero no compite con contenido. Logo simple sin ilustración — la marca es la voz, no un símbolo. Navegación minimal — 4 links, no más. La claridad sobre la creatividad.

---

## 2. Hero Section

### Dimensiones
- **Padding-top:** 128px desktop (8rem) / 80px mobile (5rem)
- **Padding-bottom:** 96px desktop (6rem) / 64px mobile (4rem)
- **Fondo:** Blanco puro (`#FFFFFF`)
- **Container:** max-width 960px (listados)

### Alineación
- **Desktop:** Centrado (text-align: center)
- **Mobile:** Left-aligned (text-align: left)

### Headline (H1)
- **Texto:** "Enterprise architecture para la era de la IA"
- **Font-size:** 45px desktop (2.5rem) / 32px mobile (2rem)
- **Font-weight:** 700 (bold)
- **Line-height:** 1.2 (54px desktop / 38px mobile)
- **Color:** `#111827` (gray-900)
- **Max-width:** 600px
- **Margin-bottom:** 24px (1.5rem)
- **Centrado horizontalmente** en desktop

### Subheadline
- **Texto:** "Análisis, decisiones y criterio para arquitectos y tech leads que construyen sistemas complejos."
- **Font-size:** 18px (1.125rem)
- **Font-weight:** 400 (regular)
- **Line-height:** 1.6 (29px)
- **Color:** `#6B7280` (gray-500) — menos énfasis que headline
- **Max-width:** 540px
- **Margin-bottom:** 40px (2.5rem)
- **Centrado horizontalmente** en desktop

### CTAs
- **Layout:** Flexbox horizontal, gap 24px (1.5rem)
- **Centrado horizontalmente** en desktop
- **Mobile:** Stack vertical, align-items flex-start

#### CTA Primario (botón)
- **Texto:** "Suscribirme a la newsletter"
- **Padding:** 12px 24px
- **Background:** `#2563EB` (accent)
- **Color texto:** `#FFFFFF` (white)
- **Font-size:** 16px (1rem)
- **Font-weight:** 500 (medium)
- **Border-radius:** 6px
- **Sin shadow**
- **Hover:** Background `#1D4ED8` (accent-hover)
- **Transición:** 150ms ease background-color

#### CTA Secundario (link)
- **Texto:** "Leer el manifesto →"
- **Font-size:** 16px (1rem)
- **Font-weight:** 500 (medium)
- **Color:** `#2563EB` (accent)
- **Sin underline** (excepción a la regla de links)
- **Hover:** Color `#1D4ED8`
- **Flecha →** como texto Unicode, no icono

### Intención psicológica
**Claridad inmediata.** El headline comunica QUÉ en 3 segundos. El subheadline comunica PARA QUIÉN en 5 segundos. Sin florituras. Sin vaguedades. "Enterprise architecture" + "arquitectos y tech leads" + "sistemas complejos" = filtro explícito. Si no eres la audiencia, te autoexcluyes. Si lo eres, reconoces el lenguaje.

**CTA primario visible pero no agresivo.** Azul sólido atrae el ojo, pero no grita. Botón de tamaño humano, no gigante. Copy directo: "Suscribirme a la newsletter" — no "Get Started" ni vaguedades.

---

## 3. Quote Section (Posicionamiento)

### Dimensiones
- **Padding-top:** 80px (5rem)
- **Padding-bottom:** 80px (5rem)
- **Fondo:** `#F9FAFB` (gray-50) — separación visual sutil del hero
- **Container:** max-width 720px (lectura)

### Blockquote
- **Texto:** "Los equipos que mejor trabajan con IA no son los que tienen mejores prompts. Son los que tienen mejor conocimiento explícito."
- **Font-size:** 22px desktop (1.375rem) / 18px mobile (1.125rem)
- **Font-weight:** 500 (medium) — ni bold ni regular
- **Line-height:** 1.5 (33px desktop / 27px mobile)
- **Color:** `#111827` (gray-900) — peso visual alto
- **Text-align:** center en desktop, left en mobile
- **Sin comillas decorativas** — el formato blockquote es suficiente
- **Sin borde lateral** — no es una cita externa, es posicionamiento propio
- **Margin:** 0 (sin margin adicional, el padding de sección es suficiente)

### Intención psicológica
**Statement de posición.** No es un slogan. Es la tesis en una frase. "Mejor conocimiento explícito" vs "mejores prompts" establece inmediatamente qué valor Archwise NO comparte (la industria de prompts) y qué SÍ defiende (contexto estructurado).

**Fondo gray-50:** Separación visual sin agregar línea. El cambio de fondo comunica "nueva sección" sin ruido. La quote merece su propio espacio — no compite con hero ni con cards.

**Tamaño 22px:** Más grande que body (18px), más pequeño que H2 (28px). Es una frase importante pero no es un título. El weight 500 (medium) añade gravitas sin ser gritón.

---

## 4. Articles Section (Fundacionales)

### Dimensiones
- **Padding-top:** 96px (6rem)
- **Padding-bottom:** 96px (6rem)
- **Fondo:** Blanco puro (`#FFFFFF`) — volver al canvas principal
- **Container:** max-width 960px (listados)

### Section Title
- **Texto:** "Artículos fundacionales"
- **Font-size:** 28px desktop (1.75rem) / 24px mobile (1.5rem)
- **Font-weight:** 700 (bold)
- **Line-height:** 1.3
- **Color:** `#111827` (gray-900)
- **Text-align:** center en desktop, left en mobile
- **Margin-bottom:** 48px (3rem)

### Grid Layout
- **Display:** CSS Grid
- **Desktop:** 2 columnas, gap 32px (2rem)
- **Mobile:** 1 columna, gap 24px (1.5rem)
- **4 cards totales** (artículos fundacionales)

### Article Card (componente repetible)

#### Contenedor
- **Padding:** 24px (1.5rem) — espacio interno generoso
- **Border:** 1px solid `#F3F4F6` (gray-100) — borde sutil
- **Border-radius:** 8px — esquinas suaves
- **Background:** `#FFFFFF` (white) — sin cambio de fondo
- **Transition:** border-color 150ms ease
- **Hover:** Border-color `#E5E7EB` (gray-200) — cambio sutil

#### Cluster Tag
- **Texto:** "Context Engineering" / "Architecture + AI" / "Documentation" / "Strategy"
- **Font-size:** 12px (0.75rem)
- **Text-transform:** uppercase
- **Letter-spacing:** 0.05em (tracking ligero)
- **Color:** `#6B7280` (gray-500)
- **Font-weight:** 400 (regular)
- **Margin-bottom:** 12px (0.75rem)
- **Display:** inline-block

#### Title (H3)
- **Font-size:** 20px desktop (1.25rem) / 18px mobile (1.125rem)
- **Font-weight:** 600 (semibold)
- **Line-height:** 1.3 (26px desktop / 23px mobile)
- **Color:** `#111827` (gray-900)
- **Margin-bottom:** 12px (0.75rem)
- **Hover:** Color `#2563EB` (accent) — indica clickeabilidad
- **Transition:** color 150ms ease

#### Description
- **Font-size:** 15px (0.9375rem)
- **Font-weight:** 400 (regular)
- **Line-height:** 1.6 (24px)
- **Color:** `#6B7280` (gray-500)
- **Margin-bottom:** 12px (0.75rem)

#### Meta
- **Texto:** "15 mayo 2026 · 12 min"
- **Font-size:** 13px (0.8125rem)
- **Font-weight:** 400 (regular)
- **Color:** `#6B7280` (gray-500)
- **Margin:** 0

#### Interactividad
- **Toda la card es clickeable** (link wrapper)
- **Cursor:** pointer en toda el área
- **Focus:** Outline 2px `#2563EB` con offset 2px (accesibilidad)

### Orden de artículos
1. "Por qué un architecture.md vale más que cien prompts mágicos" (Context Engineering)
2. "La deuda técnica que la IA está empezando a revelar" (Architecture + AI)
3. "Qué documentación necesita realmente un LLM" (Documentation)
4. "La arquitectura vuelve a ser estratégica" (Strategy)

### Intención psicológica
**Proof of depth.** El visitante acaba de leer la tesis (quote section). Ahora ve que hay argumentación real detrás. 4 artículos, no 1. Serie "fundacional" — implica sistema, no posts aislados.

**Cards tipográficas puras:** Sin thumbnails, sin ilustraciones. El título es el gancho. Esto comunica: "el valor está en el contenido, no en la presentación". Es anti-clickbait por diseño.

**Cluster tags visibles:** "Context Engineering", "Architecture + AI". Señalan territorio temático SIN etiquetas SEO spam. Son descriptores útiles, no decoración.

**Border sutil + hover:** La card no tiene shadow (demasiado trendy). Border 1px gray-100 es minimal pero define límite. Hover cambia border a gray-200 — feedback visual sin distracción.

---

## 5. Manifesto Teaser Section

### Dimensiones
- **Padding-top:** 96px (6rem)
- **Padding-bottom:** 96px (6rem)
- **Fondo:** Blanco puro (`#FFFFFF`) — mantener canvas continuo
- **Container:** max-width 720px (lectura) — más estrecho que articles

### Section Title
- **Texto:** "Lo que creemos"
- **Font-size:** 28px desktop (1.75rem) / 24px mobile (1.5rem)
- **Font-weight:** 700 (bold)
- **Line-height:** 1.3
- **Color:** `#111827` (gray-900)
- **Text-align:** center en desktop, left en mobile
- **Margin-bottom:** 32px (2rem) — menos que en articles section (el contenido aquí es más denso)

### Principles List

#### Contenedor
- **List-style:** none (sin bullets)
- **Padding:** 0
- **Margin-bottom:** 40px (2.5rem)

#### List Items (3 principios)
- **Padding:** 16px 0 (1rem) — spacing vertical entre items
- **Font-size:** 16px desktop (1rem) / 16px mobile
- **Line-height:** 1.6 (26px)
- **Color body:** `#374151` (gray-700)

##### Estructura de cada item:
```
→ **Contexto sobre prompts.** La calidad del contexto que la IA recibe es órdenes de magnitud más importante que la formulación de la pregunta.
```

- **Flecha →:** Color `#2563EB` (accent) — marca visual
- **Título en negrita:** "Contexto sobre prompts." — font-weight 600 (semibold), color `#111827` (gray-900)
- **Explicación:** Texto regular, color `#374151` (gray-700)

##### Principios a mostrar:
1. **Contexto sobre prompts.** La calidad del contexto que la IA recibe es órdenes de magnitud más importante que la formulación de la pregunta.
2. **Decisiones sobre ejecución.** El valor se concentra en decidir qué construir y cómo estructurarlo — no en el acto de escribirlo.
3. **Criterio sobre velocidad.** La velocidad sin criterio produce deuda a velocidad de máquina.

### CTA Link
- **Texto:** "Leer manifesto completo →"
- **Font-size:** 16px (1rem)
- **Font-weight:** 500 (medium)
- **Color:** `#2563EB` (accent)
- **Sin underline**
- **Hover:** Color `#1D4ED8`
- **Display:** block (ocupa línea completa)
- **Text-align:** left (no centrado)

### Intención psicológica
**Filtro filosófico.** Hero comunica QUÉ. Cards demuestran CÓMO. Esta sección comunica POR QUÉ. Los 3 principios son afirmaciones directas, no argumentos largos. Si el lector resuena con estas frases, es audiencia. Si las rechaza, se autoexcluye.

**Formato lista sin bullets:** No es decorativo. El → azul marca que cada línea es una dirección de pensamiento. La negrita en la frase-título hace scanning rápido posible. Puedes leer solo los títulos y captar la filosofía.

**Link al manifesto discreto:** No es botón grande. Es link normal. Comunica: "si quieres profundizar, aquí está todo". No forzado. La gente que llegó hasta aquí ya está filtrada.

---

## 6. Newsletter CTA Section

### Dimensiones
- **Padding-top:** 80px (5rem)
- **Padding-bottom:** 80px (5rem)
- **Fondo:** `#F9FAFB` (gray-50) — separación visual (como quote section)
- **Container:** max-width 720px (lectura)

### CTA Title
- **Texto:** "Cada semana. Sin hype."
- **Font-size:** 28px desktop (1.75rem) / 24px mobile (1.5rem)
- **Font-weight:** 700 (bold)
- **Line-height:** 1.3
- **Color:** `#111827` (gray-900)
- **Text-align:** center en desktop, left en mobile
- **Margin-bottom:** 32px (2rem)

### Form

#### Layout
- **Display:** Flex horizontal en desktop, vertical en mobile
- **Gap:** 16px (1rem)
- **Max-width:** 500px
- **Centrado horizontalmente** en desktop, left-aligned en mobile

#### Email Input
- **Flex:** 1 (ocupa espacio disponible)
- **Padding:** 12px 16px
- **Border:** 1px solid `#E5E7EB` (gray-200)
- **Border-radius:** 6px
- **Font-size:** 16px (1rem)
- **Font-family:** Inherit (system fonts)
- **Placeholder:** "tu@email.com" — lowercase, informal
- **Color texto:** `#111827` (gray-900)
- **Color placeholder:** `#9CA3AF` (gray-400)

##### Focus state:
- **Border-color:** `#2563EB` (accent)
- **Box-shadow:** `0 0 0 3px #EFF6FF` (accent-light) — ring effect
- **Outline:** none (manejado por shadow)

#### Submit Button
- **Texto:** "Suscribirme"
- **Padding:** 12px 24px
- **Background:** `#2563EB` (accent)
- **Color texto:** `#FFFFFF` (white)
- **Font-size:** 16px (1rem)
- **Font-weight:** 500 (medium)
- **Border:** none
- **Border-radius:** 6px
- **Cursor:** pointer
- **Hover:** Background `#1D4ED8`
- **Transition:** 150ms ease background-color
- **Mobile:** Width 100% (full-width button)

### Intención psicológica
**Refuerzo final.** El visitante leyó hero, vio artículos, entendió filosofía. Esta es la última oportunidad de conversión antes del footer. No es agresiva — fondo gray-50 suave, copy minimal ("Cada semana. Sin hype.").

**Copy anti-marketing:** "Sin hype" es statement de diferenciación. La audiencia enterprise está cansada de marketing inflado. Esta frase es filtro y promesa: no recibirás spam ni exageración.

**Form minimal:** Solo email, no nombre. Fricción mínima. El placeholder "tu@email.com" (lowercase) es menos formal que "your@email.com" — tono cálido dentro de profesionalismo.

**Focus ring azul:** Feedback visual claro de accesibilidad. El ring `#EFF6FF` (accent-light) es suficientemente visible sin ser agresivo.

---

## 7. Footer

### Dimensiones
- **Padding-top:** 64px (4rem)
- **Padding-bottom:** 64px (4rem)
- **Fondo:** `#111827` (gray-900) — contraste radical vs body blanco
- **Texto base:** `#D1D5DB` (gray-300)
- **Texto headings:** `#FFFFFF` (white)

### Layout
- **Container:** max-width 1200px (igual que navbar)
- **Padding horizontal:** 24px

### Sección superior

#### Brand
- **Texto:** "Archwise" (H3)
- **Font-size:** 18px (1.125rem)
- **Font-weight:** 700 (bold)
- **Color:** `#FFFFFF` (white)
- **Margin-bottom:** 8px (0.5rem)

#### Tagline
- **Texto:** "Enterprise architecture para la era de la IA."
- **Font-size:** 14px (0.875rem)
- **Font-weight:** 400 (regular)
- **Color:** `#D1D5DB` (gray-300)
- **Margin-bottom:** 32px (2rem)

#### Navigation Links
- **Display:** Flex horizontal, gap 24px (1.5rem)
- **Wrap:** Wrap en mobile
- **Margin-bottom:** 32px (2rem)

##### Link style:
- **Font-size:** 14px (0.875rem)
- **Color:** `#D1D5DB` (gray-300)
- **Hover:** Color `#FFFFFF` (white)
- **Transition:** 150ms ease color
- **Sin underline**

##### Links: "Artículos" | "Manifesto" | "Newsletter" | "About"

### Divider
- **Height:** 1px
- **Background:** `#374151` (gray-700) — más claro que fondo pero no blanco
- **Margin:** 32px 0 (2rem top/bottom)

### Sección inferior

#### Layout
- **Display:** Flex horizontal en desktop, vertical en mobile
- **Justify-content:** space-between en desktop
- **Gap:** 16px en mobile

#### Copyright & Legal
- **Font-size:** 13px (0.8125rem)
- **Color:** `#D1D5DB` (gray-300)
- **Display:** Flex horizontal, gap 16px

##### Texto: "© 2026 Archwise"
##### Link: "Privacy" — color `#D1D5DB`, hover `#FFFFFF`

#### Social Links
- **Font-size:** 13px (0.8125rem)
- **Color:** `#D1D5DB` (gray-300)
- **Display:** Flex horizontal, gap 8px
- **Align-items:** center

##### Links: "RSS" · "Twitter/X" · "GitHub"
##### Separador "·" en gray-500

### Intención psicológica
**Cierre con gravitas.** El fondo oscuro comunica "final de página" sin ambigüedad. El contraste radical (gray-900 vs blanco del body) marca transición. No es un footer decorativo — contiene información útil (links principales repetidos, social, legal).

**Tagline repetido:** "Enterprise architecture para la era de la IA." Se repite en footer como recordatorio. Si alguien scrollea hasta abajo sin leer, ve la propuesta de valor una última vez.

**Social links discretos:** RSS, Twitter/X, GitHub. Sin iconos gigantes, sin decoración. Texto simple. Esto comunica: "estamos en esos lugares si nos quieres seguir, pero no es el foco". El foco es newsletter (CTA en sección anterior).

---

## Jerarquía Visual — Resumen

### Tamaños de texto (desktop → mobile)
1. **H1 Homepage:** 45px → 32px
2. **H2 Section Titles:** 28px → 24px
3. **Quote destacado:** 22px → 18px
4. **H3 Card Titles:** 20px → 18px
5. **Body regular:** 18px → 16px (en cards 16px constante)
6. **Small text (meta, footer):** 14-13px → 13px

### Jerarquía de color
1. **Máximo peso:** `#111827` (gray-900) — H1, H2, H3, textos críticos
2. **Peso medio:** `#374151` (gray-700) — Body text
3. **Peso bajo:** `#6B7280` (gray-500) — Metadata, tags, descripciones
4. **Acento (acción):** `#2563EB` (blue) — CTAs, links importantes
5. **Footer:** `#FFFFFF` (white) headings + `#D1D5DB` (gray-300) body sobre fondo oscuro

### Spacing vertical (secciones)
- **Hero:** 128px top / 96px bottom (desktop)
- **Quote:** 80px top/bottom
- **Articles:** 96px top/bottom
- **Manifesto teaser:** 96px top/bottom
- **Newsletter CTA:** 80px top/bottom
- **Footer:** 64px top/bottom

**Móvil:** Reducir 30-40% (Hero 80px top, secciones 64px, footer 64px mantener)

### Contenedores
- **Container lectura:** 720px (Quote, Manifesto teaser, Newsletter)
- **Container listado:** 960px (Hero, Articles)
- **Container full:** 1200px (Navbar, Footer)

---

## Composición — Intención de página completa

La homepage es un **embudo narrativo vertical:**

1. **Navbar:** Orientación. "Dónde estoy".
2. **Hero:** Propuesta de valor. "Qué es esto".
3. **Quote:** Tesis central. "Qué creen".
4. **Articles:** Proof. "Tienen contenido real".
5. **Manifesto teaser:** Filosofía. "Por qué existe".
6. **Newsletter CTA:** Conversión. "Quédate conectado".
7. **Footer:** Cierre. "Información de soporte".

**Ritmo visual:** Alterner blanco/gray-50. Hero (blanco) → Quote (gray-50) → Articles (blanco) → Manifesto teaser (blanco) → Newsletter (gray-50) → Footer (oscuro). El cambio de fondo marca secciones sin necesitar separadores visuales.

**Focus único por sección:** Una idea clara por viewport. No competencia. Hero habla de propuesta, Quote de tesis, Articles de contenido. Cada sección tiene un job único.

**Call-to-action estratégicos:**
- Hero: CTA primario (newsletter) + secundario (manifesto)
- Manifesto teaser: Link discreto al manifesto completo
- Newsletter CTA: Refuerzo final antes de footer
- Total: 3 oportunidades de conversión, ninguna agresiva

**Tipografía como protagonista:** Sin imágenes, sin ilustraciones, sin decoraciones. El peso visual viene de:
- Tamaños de texto bien calibrados
- Line-heights generosos (1.6-1.7 en body)
- Spacing vertical amplio (96px entre secciones)
- Contraste de color sutil pero claro

**Accesibilidad built-in:**
- Focus rings visibles (outline 2px blue)
- Contraste WCAG AA en todos los pares de color
- Touch targets mínimo 44px (botones tienen padding suficiente)
- Headings jerárquicos (H1 → H2 → H3)
- Navegación por teclado posible (navbar focusable, cards focusables)

---

## Implementación — Checklist para desarrollador

### HTML/Semántica
- `<header>` para navbar con `<nav aria-label="Principal">`
- `<main>` contiene todas las secciones
- `<section>` para cada bloque (Hero, Quote, Articles, etc)
- `<article>` para cada card de artículo
- `<footer>` con nav secundaria
- Headings en orden: H1 (hero) → H2 (section titles) → H3 (card titles)

### CSS/Layout
- System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`)
- CSS variables para colores (`--aw-white`, `--aw-gray-900`, `--aw-accent`, etc)
- Bootstrap 5 grid o CSS Grid para articles (2 columnas desktop, 1 móvil)
- Flexbox para navbar, footer, forms
- Sticky navbar (`position: sticky; top: 0; z-index: 1000`)
- Border-radius 6px en botones, 8px en cards
- Transitions 150ms ease en hovers

### Responsive
- Breakpoint principal: 768px
- Desktop: text-align center en hero/quote, 2 columnas en articles
- Mobile: text-align left, 1 columna, form vertical
- Navbar mobile: hamburger menu, links vertical stack

### Interactividad
- Hover en cards: border-color change (gray-100 → gray-200)
- Hover en links: color change (gray-700 → gray-900)
- Hover en botones: background change (accent → accent-hover)
- Focus visible: outline 2px accent con offset 2px
- Form input focus: border accent + ring shadow
- Toda la card clickeable (link wrapper)

### Performance
- Sin imágenes en above-the-fold (carga instantánea)
- System fonts (0ms FOUT)
- CSS inline crítico o pequeño bundle
- Prerender/SSG (HTML estático)

---

*Este mockup está listo para implementación pixel-perfect. Cada medida, color y spacing está especificado. Úsalo como blueprint exacto.*
