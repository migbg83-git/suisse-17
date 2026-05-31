# Archwise AI Handoff

## 1. Project Overview

Archwise es una plataforma editorial y técnica para arquitectos de software y CTOs que buscan transformar organizaciones hacia sistemas realmente preparados para IA. El objetivo es documentar, publicar y compartir prácticas reales de arquitectura empresarial, context engineering y AI Readiness, priorizando contexto, arquitectura, governance y conocimiento sobre el hype tecnológico. La audiencia principal son arquitectos, CTOs, tech leads y equipos técnicos de empresas medianas y grandes. Archwise se posiciona como referencia práctica y operativa, con contenido basado en experiencia real, frameworks accionables y casos reales. La propuesta de valor es ofrecer guías, frameworks y recursos que permitan a equipos técnicos evolucionar hacia sistemas AI-Ready, con foco en calidad, continuidad y autoridad.

---

## 2. Current Status

- **Infraestructura:** Angular SSG/SSR, Vercel, dominio propio (archwise.org)
- **Despliegue:** Automático en Vercel
- **Angular:** Completado (SSR/SSG)
- **SSG:** Completado
- **SEO:** Implementado (Open Graph, metadatos, sitemap, robots.txt)
- **Analytics:** Google Analytics conectado
- **Search Console:** Conectado y verificado
- **Sitemap:** Generado y funcional
- **Vercel:** Deploy automático

**Completado:** Infraestructura técnica, clusters iniciales, publicación iterativa

**Pendiente/Bloqueos:**
- Expansión de clusters y artículos
- Mejoras en automatización editorial
- Revisión continua de metadatos y taxonomía

---

## 3. Editorial Workflow

1. **brief.md**: Definición de objetivo, público y ángulo del artículo
2. **notes.md**: Ideas, referencias, ejemplos y casos reales
3. **outline.md**: Estructura y secciones principales
4. **article.md**: Redacción completa con frontmatter YAML válido (title, slug, description, date)
5. **review.md**: Revisión técnica y editorial, checklist de calidad
6. **assets.md**: Prompts, imágenes, recursos visuales y Open Graph
7. **article.json**: Metadatos para indexación y SEO (category, author, tags, etc.)
8. **publication**: build, verificación y despliegue

Cada fase debe ser validada antes de pasar a la siguiente. El objetivo es asegurar calidad, coherencia y continuidad editorial.

---

## 4. Content Architecture

- **Clusters:** Agrupaciones temáticas (ej: Context Engineering, AI-Ready Systems)
- **Categorías (taxonomía cerrada):**
  - Context Engineering: Prácticas y frameworks para estructurar y transferir contexto en equipos y sistemas.
  - Governance: Modelos y herramientas para gobierno arquitectónico y organizacional.
  - AI-Ready Systems: Capacidades y requisitos para que sistemas y organizaciones sean realmente preparados para IA.
  - Enterprise AI: Estrategias y casos de uso de IA en entornos empresariales.
  - Architecture Strategy: Enfoques y decisiones estratégicas de arquitectura.
  - Technical Debt: Gestión de deuda técnica y de conocimiento.

Usar la categoría que mejor represente el foco principal del artículo. No usar categorías secundarias salvo decisión editorial explícita.

---

## 5. Published Articles


| Nº | Título | Categoría oficial | Estado article.md | Estado article.json | Slug |
|----|--------|-------------------|------------------|--------------------|------|
| 06 | Context Engineering para proyectos legacy: por qué la IA falla en sistemas enterprise reales | Context Engineering | Presente | **Faltante** | context-engineering-legacy-ia-falla |
| 07 | Framework práctico para Context Engineering | Context Engineering | Presente | Presente | framework-context-engineering-enterprise |
| 08 | Plantillas y ejemplos reales de architecture.md | Context Engineering | Presente | Presente | plantillas-ejemplos-architecture-md-enterprise |
| 09 | Cómo hacer una Architecture Review efectiva en la era de la IA | Governance | Presente | Presente | architecture-review-efectiva-ia |
| 10 | Architecture Governance en la era de la IA | Governance | Presente | Presente | architecture-governance-contexto-compartido |
| 11 | ¿Por qué la mayoría de los sistemas no están preparados para trabajar con IA? | AI-Ready Systems | Presente | Presente | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia |
| 12 | Las 7 características de una arquitectura realmente AI-Ready | AI-Ready Systems | Presente | Presente | las-7-caracteristicas-arquitectura-ai-ready |
| 13 | AI-Ready Systems vs Legacy Systems | AI-Ready Systems | Presente | Presente | ai-ready-systems-vs-legacy-systems |
| 14 | Por qué el Prompt Engineering no es suficiente para construir sistemas con IA | Context Engineering | Presente | Presente | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia |
| 15 | Context Engineering vs Prompt Engineering | Context Engineering | Presente | Presente | context-engineering-vs-prompt-engineering |
| 16 | AI-Augmented Development Teams | Enterprise AI | Presente | Presente | ai-augmented-development-teams |
| 17 | AI-Native Organizations | Enterprise AI | Presente | Presente | ai-native-organizations |
| 18 | Por qué fracasan la mayoría de las iniciativas de IA en las empresas | Enterprise AI | Presente | Presente | por-que-fracasan-iniciativas-ia |
| 19 | Enterprise AI Transformation Roadmap | Enterprise AI | Presente | Presente | enterprise-ai-transformation-roadmap |
| 20 | AI Governance Framework | Governance | Presente | Presente | ai-governance-framework |

---

## Estado editorial y próximos pasos

- **Último artículo completado:** article-20 (AI Governance Framework)
- **Siguiente artículo a desarrollar:** article-21
- article-13 ya no figura como siguiente pendiente
- article-06 está documentado: article.md presente, article.json faltante, requiere normalización futura

---

## Asignación de categorías oficiales

- article-07 → Context Engineering
- article-08 → Context Engineering
- article-09 → Governance
- article-10 → Governance
- article-11 → AI-Ready Systems
- article-12 → AI-Ready Systems
- article-13 → AI-Ready Systems
- article-14 → Context Engineering
- article-15 → Context Engineering
- article-16 → Enterprise AI
- article-17 → Enterprise AI
- article-18 → Enterprise AI
- article-19 → Enterprise AI
- article-20 → Governance

---

## Arquitectura editorial

- **article.md**: Contenido principal. Debe incluir frontmatter mínimo: title, slug, description, date.
- **article.json**: Fuente de metadatos editoriales (category, author, tags, readingTime).
- **articles.json**: Generado automáticamente por build-content.ts. Nunca editar manualmente.

---

## Incidencia reciente y lección aprendida

- **Problema:** Categorías visibles vacías en /articulos.
- **Causa:** build-content.ts no estaba utilizando correctamente category desde article.json.
- **Solución:** article.json pasa a ser la fuente principal de metadatos editoriales. build-content.ts debe priorizar category desde article.json.

---

## Prioridades actuales

1. Cerrar validación de categorías en /articulos.
2. Mantener documentación actualizada.
3. Crear article-21 siguiendo workflow oficial.

---

## Instrucciones para IA y humanos

- Lee este documento completo antes de trabajar en Archwise.
- No modifiques article.md ni article.json sin seguir el workflow editorial.
- No edites articles.json manualmente: siempre usa build-content.ts.
- Para crear un artículo, sigue el flujo: brief.md → notes.md → outline.md → article.md → review.md → assets.md → article.json → publication.
- Valida siempre frontmatter mínimo en article.md (title, slug, description, date).
- Usa article.json para todos los metadatos editoriales y de SEO.
- Ejecuta `npm run build:content` y `npm run build:ssg` antes de publicar.
- Verifica que el artículo aparece en /articulos y en sitemap.xml.
- Documenta cualquier incidencia o decisión relevante en AI-HANDOFF.md.
- Si tienes dudas, revisa los ejemplos y la documentación existente antes de preguntar o modificar.

---

Este documento es la referencia operativa y de continuidad para cualquier IA o humano que trabaje en Archwise. Si sigues estas instrucciones, podrás continuar el proyecto correctamente en menos de 5 minutos.

---

## 6. Current Article

- **Último artículo completado:** AI Governance Framework (article-20)
- **Artículo en curso:** Ninguno (workflow editorial actualizado)
- **Siguiente previsto:** AI-Ready Systems vs Legacy Systems (article-13)

---

## 7. Technical Architecture

- **Estructura de carpetas:**
  - `content/enterprise-ai/article-XX/` → Carpeta de cada artículo
  - `article.md` → Contenido principal (frontmatter mínimo: title, slug, description, date)
  - `article.json` → Metadatos editoriales (category, author, tags, etc.)
  - `build-content.ts` → Script que genera `articles.json` a partir de article.md y article.json
  - `articles.json` → Listado generado automáticamente para Angular/SSG
  - **Angular SSG:** Framework de generación estática y renderizado

**Reglas:**
- article.md = contenido
- article.json = metadatos editoriales
- articles.json = generado automáticamente, nunca editar a mano

---

## 8. Historical Issues

| Síntoma | Causa | Solución |
|---------|-------|----------|
| Artículo no aparece en /articulos | description o slug ausente, title fuera del frontmatter, YAML inválido, duplicados | Validar frontmatter, limpiar duplicados, revisar logs de build |
| category no visible | category ausente en article.json o mal mapeado en build-content.ts | Normalizar category en article.json y build-content.ts |
| Errores YAML | Delimitadores incorrectos, saltos de línea previos, BOM invisible | Validar YAML, eliminar caracteres invisibles, usar linters |
| Problemas de build-content.ts | No prioriza bien metadatos, no normaliza category | Corregir lógica de prioridad y normalización |
| Open Graph incorrecto | assets.md incompleto o metadatos ausentes | Completar assets.md y validar metadatos |
| Analytics/Search Console no registra | Integración incompleta o tags ausentes | Revisar integración y tags |

---

## 9. Editorial Principles

- Sin hype IA ni marketing
- Basado en experiencia real y casos prácticos
- Dirigido a CTOs, arquitectos y equipos técnicos
- Documentar trade-offs y decisiones
- Priorizar governance, context engineering y organizational memory
- Visibilizar knowledge debt y cómo reducirla

---

## 10. Current Decisions

- Marca: Archwise
- Dominio: archwise.org
- article.json es la fuente de metadatos
- frontmatter mínimo en article.md
- Taxonomía cerrada de categorías
- Workflow editorial oficial y validado

---

## 11. Next Priorities

- Publicar article-12 y article-13
- Mejorar automatización de validaciones editoriales
- Revisar y expandir clusters
- Mejorar documentación para onboarding de IA y humanos
- Mantener calidad y continuidad editorial

---

## 12. Instructions For Any Future AI

- Lee este documento completo antes de trabajar en Archwise.
- No modifiques article.md ni article.json sin seguir el workflow editorial.
- No edites articles.json manualmente: siempre usa build-content.ts.
- Para crear un artículo, sigue el flujo: brief.md → notes.md → outline.md → article.md → review.md → assets.md → article.json → publication.
- Valida siempre frontmatter mínimo en article.md (title, slug, description, date).
- Usa article.json para todos los metadatos editoriales y de SEO.
- Ejecuta `npm run build:content` y `npm run build:ssg` antes de publicar.
- Verifica que el artículo aparece en /articulos y en sitemap.xml.
- Documenta cualquier incidencia o decisión relevante en AI-HANDOFF.md.
- Si tienes dudas, revisa los ejemplos y la documentación existente antes de preguntar o modificar.

---

Este documento es la referencia operativa y de continuidad para cualquier IA o humano que trabaje en Archwise. Si sigues estas instrucciones, podrás continuar el proyecto correctamente en menos de 5 minutos.
