# Website Plan — Archwise

## Objetivo del documento

Definir la estructura completa de la web archwise.dev: sitemap, navegación, objetivos por página, estrategia de conversión y roadmap de crecimiento.

---

## Visión de la web

Una web profesional, centrada en contenido, que comunique una posición clara: arquitectura enterprise + IA aplicada, para profesionales que construyen sistemas complejos.

No es un blog genérico. No es una landing de producto. Es la casa digital de una filosofía sobre cómo la IA está cambiando los incentivos de la industria del software — y qué hacer con eso.

---

## Sitemap completo

```
archwise.dev/
├── / (Homepage)
├── /manifesto
├── /articles
│   ├── /articles/architecture-md-vale-mas-que-prompts
│   ├── /articles/deuda-tecnica-ia-revela
│   ├── /articles/documentacion-necesita-llm
│   ├── /articles/arquitectura-vuelve-ser-estrategica
│   └── /articles/[slug] (futuros artículos)
├── /newsletter
├── /about
├── /recursos (fase 2)
│   ├── /recursos/architecture-md-template
│   └── /recursos/[slug] (futuros lead magnets)
└── /legal
    ├── /legal/privacy
    └── /legal/terms
```

---

## Navegación principal

```
[Logo: Archwise]   Articles   Manifesto   Newsletter   About
```

- **4 items máximo** en navegación principal. Cada uno con propósito claro.
- Logo siempre linkea a homepage.
- No menú hamburger en desktop. Siempre visible.
- Mobile: hamburger con los mismos 4 items.

### Navegación secundaria (footer)

```
Articles | Manifesto | Newsletter | About | Privacy | Twitter/X | GitHub
```

---

## CTA principal

### CTA global (presente en toda la web)

> **Newsletter:** "Análisis semanal sobre arquitectura enterprise e IA. Sin hype. Sin marketing. Para arquitectos y tech leads que construyen sistemas complejos."

- Botón: "Suscribirme" (no "Subscribe" — la web es en español)
- Input: email only. Sin nombre. Mínima fricción.
- Posición: header sticky discreto + final de cada artículo + página dedicada.

### CTA secundario

> **Lead magnet:** Template de architecture.md descargable.
- "Un archivo de 40 líneas que cambia cómo la IA entiende tu proyecto. Descárgalo gratis."
- Requiere email. Entrega inmediata por email.

---

## Lead magnet recomendado

### Lead magnet principal: architecture.md template

**Formato:** Archivo .md descargable + guía de uso de 1 página (PDF o .md).

**Contenido:**
- Plantilla con secciones: Stack, Convenciones, Patterns usados, Patterns prohibidos, Estructura de carpetas, Decisiones clave, Boundaries entre dominios
- Ejemplo rellenado (basado en un proyecto ficticio Angular + .NET + Azure DevOps)
- 3 reglas de mantenimiento ("actualiza cuando tomes una decisión nueva")

**Por qué funciona:**
- Conecta directamente con el artículo 01 (máxima coherencia)
- Es accionable inmediatamente (baja barrera de apreciación)
- Demuestra la filosofía en la práctica (no solo la predica)
- Genera resultados rápidos → confianza → apertura a newsletter

**Entrega:** Email automático con link de descarga tras suscripción.

---

## Newsletter strategy

### Frecuencia

Semanal. Un email. Cada miércoles.

### Formato

- **Nombre:** "Archwise Weekly" (o simplemente el email de Archwise)
- **Estructura:** Un tema por email. 500-800 palabras. Insight + contexto + implicación.
- **Tono:** El mismo de los artículos. Pragmático. Directo. Sin relleno.

### Contenido tipo

| Semana | Tipo | Ejemplo |
|--------|------|---------|
| 1 | Observación | "Lo que vi esta semana en un proyecto enterprise con AI" |
| 2 | Principio | "Por qué la concisión en documentación importa más de lo que crees" |
| 3 | Ejemplo práctico | "5 líneas que cambiaron los outputs de AI en un equipo .NET" |
| 4 | Reflexión estratégica | "Cómo están cambiando las estimaciones en proyectos con AI" |

### Secuencia de bienvenida (onboarding)

| Email | Día | Contenido |
|-------|-----|-----------|
| 1 | Día 0 | Bienvenida + entrega de lead magnet + "esto es lo que creo" (link a manifesto) |
| 2 | Día 3 | "El artículo que empezó todo" → link a artículo 01 |
| 3 | Día 7 | "El diagnóstico" → link a artículo 02 |
| 4 | Día 10 | "El criterio" → link a artículo 03 + pregunta de engagement |

### Objetivo de la newsletter

- Construir confianza semanal con contenido de alto valor
- Mantener la marca en la mente del lector entre artículos
- Crear audiencia propia (no depender de SEO/social)
- Segmentar por engagement para futuros productos

---

## Estructura de páginas

---

### Homepage (/)

**Objetivo:** Comunicar la posición en 10 segundos. Convertir visitantes en suscriptores.

**Estructura:**

```
┌─────────────────────────────────────────────┐
│  HERO                                        │
│  Headline: "Enterprise architecture          │
│  para la era de la IA"                       │
│  Subheadline: "Análisis, decisiones y        │
│  criterio para arquitectos y tech leads      │
│  que construyen sistemas complejos."         │
│  CTA: [Suscribirme a la newsletter]          │
│  CTA secundario: Leer el manifesto →         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  POSICIONAMIENTO (2-3 frases)                │
│  "Los equipos que mejor trabajan con IA      │
│  no son los que tienen mejores prompts.      │
│  Son los que tienen mejor conocimiento       │
│  explícito."                                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ARTÍCULOS FUNDACIONALES (4 cards)           │
│  Los cuatro artículos con título + 1 línea   │
│  Ordenados por narrativa lógica              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  LO QUE CREEMOS (extracto del manifesto)     │
│  3-4 principios en formato breve             │
│  Link: "Leer manifesto completo →"           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  NEWSLETTER CTA (refuerzo)                   │
│  "Cada semana. Sin hype."                    │
│  [Input email] [Suscribirme]                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER                                      │
│  Links | Social | Legal                      │
└─────────────────────────────────────────────┘
```

**Lo que NO incluye:**
- Testimonio de nadie (todavía no hay audiencia que validar)
- Precios ni productos (demasiado pronto)
- Bio extensa del autor (va en /about)
- Lista de tecnologías como badges decorativos

---

### Manifesto (/manifesto)

**Objetivo:** Comunicar la filosofía completa. Filtrar audiencia. Generar identificación ("esto es lo que yo creo") o autoexclusión limpia.

**Estructura:**

```
┌─────────────────────────────────────────────┐
│  HEADER                                      │
│  Título: "Manifiesto"                        │
│  Subtítulo: (ninguno — el texto habla solo)  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CONTENIDO                                   │
│  El manifesto.md completo, renderizado.      │
│  Sin modificaciones. Sin adornos.            │
│  Tipografía limpia. Espacio generoso.        │
│  Lectura estimada: 5 minutos.                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CTA POST-LECTURA                            │
│  "Si esto resuena contigo:"                  │
│  [Suscribirme a la newsletter]               │
│  "Lee los artículos que argumentan           │
│  cada principio:" → /articles                │
└─────────────────────────────────────────────┘
```

**Diseño:** La página más limpia de la web. Solo texto. Sin sidebars. Sin distracciones. Columna estrecha. Tipografía impecable.

---

### Articles (/articles)

**Objetivo:** Index de todo el contenido publicado. Punto de entrada para SEO. Demostración de profundidad.

**Estructura:**

```
┌─────────────────────────────────────────────┐
│  HEADER                                      │
│  Título: "Artículos"                         │
│  Subtítulo: "Análisis sobre arquitectura     │
│  enterprise e IA. Sin hype."                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SECCIÓN: Fundacionales                      │
│  Los 4 artículos core. Destacados.           │
│  Título + resumen de 1 línea + link          │
│  Etiqueta: "Serie fundacional"               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SECCIÓN: Todos los artículos                │
│  Lista cronológica (más reciente primero)    │
│  Título + fecha + cluster/tag + resumen      │
│  Sin paginación hasta 20+ artículos          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CTA                                         │
│  "No te pierdas el siguiente:"               │
│  [Newsletter signup]                         │
└─────────────────────────────────────────────┘
```

**Cada artículo individual (/articles/[slug]):**

```
┌─────────────────────────────────────────────┐
│  Título del artículo                         │
│  Fecha + Lectura estimada                    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Contenido completo del artículo             │
│  Formato: columna estrecha, tipografía       │
│  limpia, código con syntax highlighting      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CTA post-artículo                           │
│  Newsletter signup + artículos relacionados  │
│  "Si esto fue útil, cada semana publico      │
│  análisis similares."                        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Artículos relacionados (2-3 cards)          │
│  De la misma serie o cluster                 │
└─────────────────────────────────────────────┘
```

---

### About (/about)

**Objetivo:** Humanizar la marca. Establecer credibilidad. Explicar por qué esta persona puede hablar de estos temas.

**Estructura:**

```
┌─────────────────────────────────────────────┐
│  HEADER                                      │
│  Foto (profesional, no corporate headshot)   │
│  Nombre                                      │
│  Una línea: "Arquitecto software.            │
│  Consultor enterprise. Angular, .NET,        │
│  Azure DevOps."                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  NARRATIVA (3-4 párrafos)                    │
│  - Qué hago (arquitectura enterprise)        │
│  - Con qué trabajo (Angular, .NET, Azure,    │
│    APIM, microfrontends)                     │
│  - Por qué escribo esto (observaciones      │
│    de proyectos reales)                      │
│  - Qué creo (link a manifesto)              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  EXPERIENCIA (formato breve, no CV)          │
│  Stack: Angular, .NET, Azure DevOps,         │
│  APIM, Nginx, Microfrontends                 │
│  Contexto: Consultoría enterprise,           │
│  equipos distribuidos, proyectos multi-año   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CTA                                         │
│  "Si trabajas en enterprise y esto resuena:" │
│  [Newsletter] | [Twitter/X] | [LinkedIn]     │
└─────────────────────────────────────────────┘
```

**Lo que NO incluye:**
- CV completo ni timeline de carrera
- Lista de empresas donde ha trabajado
- Badges de certificaciones
- Lenguaje en tercera persona

---

### Newsletter (/newsletter)

**Objetivo:** Página dedicada para conversión directa. Para links desde social, firmas de email, etc.

**Estructura:**

```
┌─────────────────────────────────────────────┐
│  Headline: "Arquitectura enterprise + IA.    │
│  Cada semana. Sin hype."                     │
│                                              │
│  3 bullets de qué esperar:                   │
│  - Observaciones de proyectos reales         │
│  - Decisiones arquitectónicas explicadas     │
│  - Cómo la IA cambia los incentivos          │
│    de la industria                           │
│                                              │
│  [Input email] [Suscribirme]                 │
│                                              │
│  Social proof futuro: "X suscriptores"       │
│  (añadir cuando haya masa crítica: >500)     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SAMPLE: "Esto es lo que recibes"            │
│  Preview de un email pasado o extracto       │
│  (añadir tras 4+ emails enviados)            │
└─────────────────────────────────────────────┘
```

---

## Roadmap de crecimiento

### Fase 1: Fundación (Mes 1-2)

**Objetivo:** Lanzar la web con contenido fundacional. Establecer presencia.

| Acción | Prioridad | Estado |
|--------|:---------:|--------|
| Dominio archwise.dev | Crítica | Pendiente |
| Web con homepage, manifesto, articles, about, newsletter | Crítica | Pendiente |
| 4 artículos fundacionales publicados | Crítica | Contenido listo |
| Newsletter configurada (ConvertKit/Buttondown) | Crítica | Pendiente |
| Lead magnet: architecture.md template | Alta | Pendiente |
| Secuencia de bienvenida (4 emails) | Alta | Pendiente |
| Twitter/X profile activo | Media | Pendiente |
| SEO técnico: meta tags, OG, sitemap.xml, robots.txt | Alta | Pendiente |

**Meta:** Web live + primeros 50 suscriptores.

---

### Fase 2: Contenido (Mes 2-4)

**Objetivo:** Publicar contenido consistente. Empezar a posicionar en SEO. Crecer newsletter.

| Acción | Prioridad |
|--------|:---------:|
| 1 artículo nuevo por semana (clusters Angular + Context Engineering primero) | Crítica |
| 1 newsletter semanal | Crítica |
| Twitter/X: 3-5 posts por semana (insights breves, links a artículos) | Alta |
| LinkedIn: 1-2 posts por semana (versión más larga, tono corporate) | Media |
| Segundo lead magnet: "AI readiness checklist" | Media |
| Página /recursos con downloads | Media |
| Internal linking entre artículos (SEO cluster strategy) | Alta |

**Meta:** 10+ artículos publicados. 200+ suscriptores. Primeras posiciones SEO en keywords de baja competencia.

---

### Fase 3: Autoridad (Mes 4-8)

**Objetivo:** Consolidar posicionamiento. Empezar monetización temprana. Comunidad.

| Acción | Prioridad |
|--------|:---------:|
| 30+ artículos publicados (cubrir clusters 1, 2 y parcialmente 3) | Crítica |
| Newsletter con 500+ suscriptores | Alta |
| Primer producto digital: eBook "Context Engineering Playbook" ($29-49) | Alta |
| Guest posts en blogs de nicho (Angular, .NET communities) | Media |
| Pillar pages para cada cluster SEO | Alta |
| Página /recursos expandida con lead magnets por cluster | Media |
| Sponsorship outreach para newsletter (si >1000 subs) | Baja |

**Meta:** 500+ suscriptores. Primeros ingresos. Posicionamiento SEO en 2-3 clusters.

---

### Fase 4: Escalada (Mes 8-12)

**Objetivo:** Diversificar monetización. Consolidar como referencia del nicho.

| Acción | Prioridad |
|--------|:---------:|
| Segundo producto: Starter kit ($99-199) | Alta |
| Posible curso online ($200-400) | Media |
| Consulting page activa (/consulting) | Media |
| 1000+ suscriptores newsletter | Alta |
| Posicionamiento SEO en keywords de media competencia | Alta |
| Explorar partnerships con DevRels / conferencias | Baja |
| Community (Discord o similar) — solo si hay demanda orgánica | Baja |

**Meta:** 1000+ suscriptores. Múltiples productos. Ingresos recurrentes validados.

---

## Principios de diseño (no visual, conceptual)

1. **Content-first.** La web existe para que el contenido se lea bien. No para impresionar con diseño.
2. **Velocidad.** Carga < 2 segundos. SSG. Sin JavaScript innecesario.
3. **Legibilidad.** Columna estrecha. Tipografía grande. Espacio generoso. Contraste alto.
4. **Sin distracciones.** No popups. No banners intrusivos. No chat widgets. Un CTA claro por página.
5. **Mobile-first.** La mayoría del tráfico de newsletter será mobile.
6. **Enterprise-grade credibilidad.** Limpio. Profesional. No "indie hacker vibes." No emojis en la UI.
7. **Mínimo mantenimiento.** Angular SSG. Markdown como fuente de contenido. Sin CMS externo.

---

## Stack técnico recomendado

| Componente | Recomendación | Razón |
|------------|---------------|-------|
| Framework | Angular SSG (Analog o custom) | Coherencia con expertise + dogfooding |
| Hosting | Cloudflare Pages o Vercel | Gratis, rápido, CDN global |
| Newsletter | Buttondown o ConvertKit | Simple, API, automations |
| Analytics | Plausible o Fathom | Privacy-first, lightweight |
| Dominio | archwise.dev | Registrar con Cloudflare |
| Email delivery | Resend o Buttondown nativo | Transaccional + marketing |
| Lead magnets | Archivos .md/.pdf en repo | Sin sistema separado |

---

## Métricas de éxito por fase

| Fase | Métrica primaria | Métrica secundaria |
|------|------------------|-------------------|
| 1 | Web live + 4 artículos publicados | 50 suscriptores newsletter |
| 2 | 1 artículo/semana consistente | 200 suscriptores + primeras posiciones SEO |
| 3 | Primer producto vendido | 500 suscriptores + ingresos >$500/mes |
| 4 | Ingresos recurrentes validados | 1000 suscriptores + múltiples productos |

---

*Última actualización: Mayo 2026*