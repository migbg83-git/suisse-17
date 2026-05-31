
# Project State Report — Enterprise AI Cluster
Fecha: 2026-05-31

## Resumen ejecutivo

Este informe refleja el estado real y actualizado del clúster Enterprise AI, basado exclusivamente en los archivos article.md y article.json (cuando existen) para los artículos 06–20. No se han utilizado resúmenes secundarios ni content-map.md. El objetivo es proporcionar una visión factual y accionable para continuidad editorial, técnica y de onboarding AI.

---

## Tabla de estado por artículo

| Artículo | Título | Categoría oficial | Estado article.md | Estado article.json | Observaciones |
|----------|--------|-------------------|------------------|--------------------|--------------|
| 06 | Context Engineering para proyectos legacy: por qué la IA falla en sistemas enterprise reales | Context Engineering | Presente | **Faltante** | Requiere normalización futura |
| 07 | Framework práctico para Context Engineering | Context Engineering | Presente | Presente | OK |
| 08 | Plantillas y ejemplos reales de architecture.md | Context Engineering | Presente | Presente | OK |
| 09 | Cómo hacer una Architecture Review efectiva en la era de la IA | Governance | Presente | Presente | OK |
| 10 | Architecture Governance en la era de la IA | Governance | Presente | Presente | OK |
| 11 | ¿Por qué la mayoría de los sistemas no están preparados para trabajar con IA? | AI-Ready Systems | Presente | Presente | OK |
| 12 | Las 7 características de una arquitectura realmente AI-Ready | AI-Ready Systems | Presente | Presente | OK |
| 13 | AI-Ready Systems vs Legacy Systems | AI-Ready Systems | Presente | Presente | OK |
| 14 | Por qué el Prompt Engineering no es suficiente para construir sistemas con IA | Context Engineering | Presente | Presente | OK |
| 15 | Context Engineering vs Prompt Engineering | Context Engineering | Presente | Presente | OK |
| 16 | AI-Augmented Development Teams | Enterprise AI | Presente | Presente | OK |
| 17 | AI-Native Organizations | Enterprise AI | Presente | Presente | OK |
| 18 | Por qué fracasan la mayoría de las iniciativas de IA en las empresas | Enterprise AI | Presente | Presente | OK |
| 19 | Enterprise AI Transformation Roadmap | Enterprise AI | Presente | Presente | OK |
| 20 | AI Governance Framework | Governance | Presente | Presente | Último artículo completado |

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

## Próximos pasos

1. Cerrar validación de categorías en /articulos.
2. Mantener documentación actualizada.
3. Crear article-21 siguiendo workflow oficial.

---

## Verificación final

- article-20 (AI Governance Framework) es el último artículo completado.
- El siguiente artículo a desarrollar es article-21.
- article-13 ya no figura como siguiente pendiente.
- article-06 está documentado: article.md presente, article.json faltante, requiere normalización futura.

_Informe generado automáticamente a partir de los archivos fuente reales del proyecto._
