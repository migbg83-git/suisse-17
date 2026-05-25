# Suisse-17 - Architecture

## Objetivo

Construir una plataforma común capaz de soportar múltiples marcas, dominios y nichos reutilizando la máxima cantidad posible de tecnología.

---

# Principios

- simplicidad
- bajo coste
- SEO first
- contenido first
- automatización
- reutilización

---

# Arquitectura general

                    Suisse-17

                         │

         ┌───────────────┼───────────────┐

         │               │               │

 Enterprise AI      Tennis Flow    Switzerland IT

         │               │               │

         └───────────────┼───────────────┘

                         │

                 Shared Platform

---

# Repositorio

suisse-17/

    docs/
    prompts/
    content/
    apps/
    shared/
    tools/

---

# Content Layer

content/

    enterprise-ai/
    tennis-flow/
    switzerland-it/

El contenido se almacenará en Markdown.

Cada artículo deberá incluir:

- title
- slug
- description
- keywords
- tags
- author
- createdDate
- updatedDate

---

# Presentation Layer

Tecnología principal:

- Angular
- SSG
- Bootstrap

Responsabilidades:

- renderizado
- SEO
- navegación
- componentes

---

# Shared Components

shared/

    seo/
    ui/
    analytics/
    markdown/
    schema/

Objetivo:

Evitar duplicación entre proyectos.

---

# SEO Layer

Responsabilidades:

- meta tags
- Open Graph
- Twitter Cards
- sitemap
- robots
- canonical
- JSON-LD

---

# Analytics Layer

Herramientas previstas:

- Google Analytics
- Search Console

Métricas:

- impresiones
- clics
- CTR
- páginas indexadas

---

# Build Pipeline

Markdown

    ↓

Angular

    ↓

SSG

    ↓

HTML Estático

    ↓

Deploy

---

# Deployment

Objetivo:

Hosting económico y mantenimiento mínimo.

Estrategia:

- dominio independiente por proyecto
- build independiente por proyecto
- despliegue independiente

---

# IA Layer

Herramientas principales:

- Claude Sonnet
- Claude Opus
- ChatGPT

Responsabilidades:

- investigación
- generación de borradores
- automatización
- revisión
- documentación

---

# Escalabilidad

La incorporación de un nuevo nicho debe requerir:

- nuevo contenido
- nueva marca

Pero NO:

- nueva arquitectura
- nuevo framework
- nuevo sistema de despliegue

---

# Regla fundamental

La complejidad debe crecer más lentamente que el número de activos.

Cada nuevo proyecto debe reutilizar la plataforma existente.