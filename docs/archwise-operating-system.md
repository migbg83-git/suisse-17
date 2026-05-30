# Archwise Operating System

## Visión del proyecto
Archwise es una plataforma de referencia para arquitectos de software y CTOs que buscan transformar organizaciones hacia sistemas realmente preparados para IA, priorizando contexto, arquitectura, governance y conocimiento sobre el hype tecnológico.

## ¿Qué es Archwise?
Archwise es un sistema editorial, técnico y de conocimiento que documenta, publica y comparte prácticas reales de arquitectura empresarial, context engineering y AI Readiness, con foco en lecciones aprendidas y casos reales.

## Objetivos
- Publicar contenido de alto valor para arquitectos y CTOs
- Documentar frameworks y patrones de context engineering
- Demostrar cómo preparar sistemas para IA más allá del hype
- Compartir casos reales, trade-offs y anti-patrones

## Nichos
- Enterprise AI
- Context Engineering
- AI-Ready Systems
- Architecture Governance
- Knowledge Debt

## Estrategia editorial
- Clusters temáticos (Context Engineering, AI-Ready Systems, etc.)
- Flujo editorial estructurado (brief → notes → outline → article → review → assets → publicación)
- Publicación iterativa y revisión continua

## Estado actual
- Infraestructura: Angular SSR/SSG, Vercel, dominio propio, sitemap, robots.txt, Search Console, Analytics, Open Graph, favicons
- Dominio: archwise.org
- Vercel: despliegue automático
- Angular SSR/SSG: completado
- Sitemap: generado y verificado
- Robots.txt: generado
- Search Console: conectado
- Analytics: conectado
- Open Graph: implementado
- Favicons: implementados

### Completado
- Infraestructura técnica y editorial
- Clusters Context Engineering y AI-Ready Systems (en progreso)

## Flujo editorial oficial
1. **brief.md**: definición de objetivo, público y ángulo del artículo
2. **notes.md**: ideas, referencias, ejemplos y casos reales
3. **outline.md**: estructura y secciones principales
4. **article.md**: redacción completa con frontmatter YAML válido
5. **review.md**: revisión técnica y editorial, checklist de calidad
6. **assets.md**: prompts, imágenes, recursos visuales y Open Graph
7. **article.json**: metadatos para indexación y SEO
8. **publicación**: build, verificación y despliegue

## Clusters publicados
### Context Engineering
- **06 Architecture.md vs Prompts**
  - Estado: Publicado
  - Resumen: Por qué la documentación viva supera a los prompts para IA
  - Lecciones: YAML válido, importancia de architecture.md
- **07 Framework práctico para Context Engineering**
  - Estado: Publicado
  - Resumen: Framework paso a paso para estructurar contexto
  - Lecciones: Validación de campos, estructura clara
- **08 Plantillas y ejemplos reales de architecture.md**
  - Estado: Publicado
  - Resumen: Ejemplos reales y plantillas para architecture.md
  - Lecciones: Casos reales, plantillas reutilizables
- **09 Architecture Reviews**
  - Estado: Publicado
  - Resumen: Cómo hacer revisiones arquitectónicas efectivas
  - Lecciones: Checklist, governance, feedback
- **10 Architecture Governance**
  - Estado: Publicado
  - Resumen: Modelos de governance para arquitectura empresarial
  - Lecciones: Trade-offs, governance adaptativo

### AI-Ready Systems
- **11 Por qué la mayoría de los sistemas no están preparados para trabajar con IA**
  - Estado: Publicado
  - Resumen: La IA expone problemas de contexto, arquitectura y governance
  - Lecciones: YAML debe estar en la primera línea, sin saltos previos
- **12 Las 7 características de una arquitectura realmente AI-Ready**
  - Estado: En redacción
  - Resumen: Checklist de requisitos para ser AI-Ready
  - Lecciones: Validar slug y description, evitar duplicados

## Problemas encontrados y diagnóstico
- **description ausente**: error en build, no se indexa
- **slug ausente**: error en build, no se indexa
- **title fuera del frontmatter**: gray-matter no lo reconoce
- **YAML inválido**: parser devuelve objeto vacío
- **article.md corrupto**: duplicados, delimitadores incorrectos
- **artículos que no aparecen en /articulos**: revisar logs y metadatos

### Cómo diagnosticarlos y resolverlos
- Revisar logs de build: buscar "Missing required field"
- Validar que el archivo comience exactamente con `---`
- Usar `console.log(JSON.stringify(fileContent.slice(0,20)))` para verificar el inicio
- Eliminar cualquier carácter antes del primer `---`
- Validar YAML con linters externos si es necesario

## Procedimiento de publicación
1. Completar **assets.md** y **article.json**
2. Ejecutar `npm run build:content`
3. Ejecutar `npm run build:ssg`
4. Verificar `/articulos` y la página individual
5. Verificar `sitemap.xml`
6. Verificar en Search Console

## Próximos pasos
- Publicar article-11 (completado)
- Publicar article-12 (en progreso)
- Abrir article-13
  - Título previsto: **AI-Ready Systems vs Legacy Systems: qué impide realmente adoptar IA**

## Principios editoriales
- Sin hype IA ni marketing
- Basado en experiencia real
- Dirigido a CTOs y arquitectos
- Casos reales y trade-offs
- Context Engineering y Governance como ejes
- Gestión de Knowledge Debt

---

Este documento es la referencia viva para continuar el proyecto Archwise desde cualquier chat o IA, asegurando continuidad, calidad y visión estratégica.
