# Cluster: Context Engineering

> Última actualización: 2026-07-24  
> Estado: **Fuerte**  
> Capa del Framework: 2 (Contexto explícito y Knowledge Debt)

---

## Definición del territorio

Context Engineering es la disciplina que define **con qué conocimiento trabaja la IA**, no cómo se le habla. Abarca la captura, estructuración y entrega de contexto diferencial: el conocimiento privado de la organización que ningún LLM ya conoce.

No es Prompt Engineering. No es documentación técnica tradicional. Es el diseño deliberado del entorno de conocimiento en el que opera la IA.

Es la disciplina fundacional de Archwise: todos los demás clusters dependen de que esta base esté bien construida.

---

## Objetivo del cluster

Poseer la respuesta a: *"¿Por qué la IA no funciona bien en mi organización?"* y redireccionar la respuesta desde "el modelo no es suficientemente bueno" hacia "el contexto que le das no es suficientemente bueno".

Construir autoridad en el término "context engineering" en español para audiencias enterprise.

---

## Artículo pilar

**Candidato primario**: **Article-07** — `framework-context-engineering-enterprise`  
*"Framework práctico para Context Engineering en equipos Enterprise"*

**Candidato alternativo por performance SEO**: **Article-15** — `context-engineering-vs-prompt-engineering`  
*"Context Engineering vs Prompt Engineering"*

`INFERENCIA` — Art-15 tiene mayor performance SEO actual (36 impresiones, pos 6.5) que art-07 (5 impresiones, pos 6.4). Sin embargo, art-07 es más completo como framework de referencia. El artículo pilar editorial es art-07; el artículo que actualmente captura más atención externa es art-15.

`RECOMENDACIÓN` — Si hay que elegir uno como pilar de enlazado (hacia el que apunten otros artículos), usar art-07. Si hay que elegir uno para optimizar el snippet de SERP, priorizar art-15.

---

## Artículos secundarios

| # | Artículo | Slug | Rol |
|---|----------|------|-----|
| Art-01 | Por qué un architecture.md vale más que cien prompts | `architecture-md-vale-mas-que-prompts` | Entrada conceptual — el contexto más importante que el prompt |
| Art-03 | Qué documentación necesita realmente un LLM | `documentacion-necesita-llm` | Qué documentar (y qué no) |
| Art-06 | Context Engineering para proyectos legacy | `context-engineering-legacy-ia-falla` | Contexto en entornos legacy |
| Art-07 | Framework práctico para Context Engineering | `framework-context-engineering-enterprise` | **Framework operativo** |
| Art-08 | Plantillas y ejemplos de architecture.md | `plantillas-ejemplos-architecture-md-enterprise` | Implementación práctica |
| Art-09 | Architecture Review efectiva en la era de la IA | `architecture-review-efectiva-ia` | Governance de contexto |
| Art-15 | Context Engineering vs Prompt Engineering | `context-engineering-vs-prompt-engineering` | Comparativa y diferenciación |

---

## Estado de cobertura

| Dimensión | Cobertura |
|-----------|-----------|
| Concepto y definición | ✅ Fuerte — arts 01, 03, 15 |
| Framework operativo | ✅ Fuerte — art-07 |
| Implementación práctica | ✅ Fuerte — art-08 |
| Context Engineering en legacy | ✅ Fuerte — art-06 |
| Governance de contexto | ✅ Bueno — art-09 |
| Comparativa con Prompt Engineering | ✅ Fuerte — art-15 |
| Context Engineering en equipos distribuidos | ❌ Sin cobertura |
| Métricas de calidad del contexto | ❌ Sin cobertura |

---

## Señales SEO

`HECHO` — GSC 2026-07-24:

| Página | Impresiones | Posición | Clics | Confianza |
|--------|-------------|----------|-------|-----------|
| `context-engineering-vs-prompt-engineering` | 36 | 6.5 | 0 | **Alta** |
| `architecture-review-efectiva-ia` | 18 | 8.1 | 0 | Media |
| `context-engineering-legacy-ia-falla` | 14 | 26.7 | 0 | Media |
| `framework-context-engineering-enterprise` | 5 | 6.4 | 0 | Baja |
| `plantillas-ejemplos-architecture-md...` | 5 | 5.8 | 0 | Baja |
| `architecture-md-vale-mas-que-prompts` | 3 | 4.7 | 0 | Muy baja |
| `documentacion-necesita-llm` | 0 | — | 0 | **Sin indexación detectada** |

`HECHO` — Consultas GSC:

| Consulta | Impresiones | Posición | Valoración |
|----------|-------------|----------|------------|
| context engineering | 1 | 41 | Señal muy débil — peso muy bajo |

`INFERENCIA` — El cluster tiene buena presencia técnica en Google (múltiples páginas en posición 6-9) pero el volumen de búsqueda específico en español para "context engineering" es bajo. El mayor volumen llega a través de la comparativa con Prompt Engineering (art-15).

`HIPÓTESIS` — Art-01 (`architecture-md-vale-mas-que-prompts`) tiene posición 4.7 pero solo 3 impresiones. Es posible que esté posicionado para búsquedas muy específicas con volumen casi nulo, o que su posición sea fluctuante con pocos datos.

`HECHO` — Art-03 (`documentacion-necesita-llm`) no aparece en GSC. `HIPÓTESIS` — Puede estar desindexado, sin tráfico detectable, o el periodo de datos no lo captura.

---

## Enlazado interno

`HECHO` — Art-15 menciona arts 06, 07 y 13 en su texto.

`HECHO` — Art-22 referencia art-03 como fuente de un concepto clave.

`INFERENCIA` — El enlazado entrante hacia los artículos de Context Engineering desde las capas superiores del framework (arts 20-26) es probablemente escaso, lo que limita la autoridad interna que fluye hacia este cluster.

**Oportunidades de enlazado** (sin modificar contenido de artículos existentes — requiere revisión editorial):
- Art-20 (AI Governance) → art-07 (el governance requiere context engineering previo)
- Art-21 (AI Operating Model) → art-07 y art-15
- Art-26 (Framework) → art-15 (el framework se apoya en Context Engineering)

---

## Backlog del cluster

| ID | Acción | Tipo | Evidencia | Prioridad |
|----|--------|------|-----------|-----------|
| CE-01 | Verificar indexación de art-03 en GSC URL Inspection | Técnica | HECHO — sin impresiones | Alta |
| CE-02 | Revisar descripción de art-15 para mejorar CTR desde posición 6.5 | Meta | 36 impresiones, 0 clics — evidencia **sólida** | Alta |
| CE-03 | Confirmar si art-01 está indexado correctamente (solo 3 impresiones con pos 4.7) | Técnica | HIPÓTESIS — datos ambiguos | Media |
| CE-04 | Propuesta futura: artículo sobre Context Engineering en equipos distribuidos | Contenido | Hueco editorial — sin señal GSC todavía | Baja |
