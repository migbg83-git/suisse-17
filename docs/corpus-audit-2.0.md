# Corpus Audit 2.0 — Archwise (Articles 01-23)

Fecha: 2026-06-03  
Modo: Solo auditoria (sin cambios sobre articulos)

## 1) Scope y criterio

Fuentes auditadas:
- docs/AI-HANDOFF.md
- docs/project-state-2026-06-01.md
- content/enterprise-ai/article-*/article.json
- content/enterprise-ai/article-*/article.md

Criterio editorial usado:
- Description SEO: ideal 120-160 caracteres; aceptable hasta 170; largo por encima de 170.
- Excerpt: debe existir; ideal 140-220 caracteres.
- Reading time: debe existir y ser consistente con el peso del articulo.
- Related articles: minimo recomendado 4-5 referencias validas.
- Enlaces internos dentro de article.md: al menos 2-3 referencias contextuales en piezas framework.

## 2) Hallazgos ejecutivos

1. El corpus es conceptualmente fuerte, pero no esta homogeneizado a nivel metadata.
2. Hay una inconsistencia critica de integridad: article-06 no tiene article.json, aunque la documentacion operativa indica corpus 01-23 normalizado.
3. Hay deuda de SEO metadata en bloque (sobre todo articles 07-16): faltan excerpts y readingTime en varios nodos.
4. Internal linking esta bien en relatedArticles del core reciente (17-23), pero casi inexistente en enlaces editoriales dentro del cuerpo de los articulos (solo article-23 enlaza explicitamente a otros articulos).
5. La cadena conceptual principal esta bien definida en docs, pero no esta completamente reforzada por la red interna de enlaces en todo el corpus.

## 3) Matriz editorial 01-23

Leyenda:
- D=description, E=excerpt, RT=readingTime
- OK: presente y razonable
- LONG: presente pero larga para SEO
- MISS: ausente

| ID | Titulo (resumen) | Slug | Categoria | D | E | RT | Quality |
|---|---|---|---|---|---|---|---|
| 01 | Por que un architecture.md... | architecture-md-vale-mas-que-prompts | Context Engineering | OK (124) | OK (176) | OK (12) | A |
| 02 | La deuda tecnica que la IA... | deuda-tecnica-ia-revela | Technical Debt | LONG (172) | OK (148) | OK (15) | A |
| 03 | Que documentacion necesita... | documentacion-necesita-llm | Context Engineering | LONG (176) | OK (167) | OK (14) | A |
| 04 | La arquitectura vuelve a ser... | arquitectura-vuelve-ser-estrategica | Architecture Strategy | LONG (174) | OK (147) | OK (16) | A |
| 05 | Technical Debt vs Knowledge Debt... | technical-debt-vs-knowledge-debt-ia | Technical Debt | LONG (240) | OK (149) | OK (8) | B |
| 06 | Context Engineering para legacy | N/A (sin article.json) | N/A | MISS | MISS | MISS | C |
| 07 | Framework practico Context Engineering | framework-context-engineering-enterprise | Context Engineering | LONG (172) | MISS | MISS | B |
| 08 | Plantillas architecture.md enterprise | plantillas-ejemplos-architecture-md-enterprise | Context Engineering | MISS | MISS | MISS | C |
| 09 | Architecture Review efectiva... | architecture-review-efectiva-ia | Governance | MISS | MISS | MISS | C |
| 10 | Architecture Governance... | architecture-governance-contexto-compartido | Governance | MISS | MISS | MISS | C |
| 11 | Por que la mayoria de sistemas... | por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia | AI-Ready Systems | MISS | MISS | MISS | B |
| 12 | 7 caracteristicas arquitectura AI-Ready | las-7-caracteristicas-arquitectura-ai-ready | AI-Ready Systems | LONG (200) | MISS | MISS | B |
| 13 | AI-Ready vs Legacy Systems | ai-ready-systems-vs-legacy-systems | AI-Ready Systems | LONG (199) | MISS | MISS | B |
| 14 | Prompt Engineering no es suficiente | por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia | Context Engineering | LONG (237) | MISS | MISS | B |
| 15 | Context vs Prompt Engineering | context-engineering-vs-prompt-engineering | Context Engineering | LONG (247) | MISS | MISS | B |
| 16 | AI-Augmented Development Teams | ai-augmented-development-teams | Enterprise AI | LONG (240) | MISS | MISS | B |
| 17 | AI-Native Organizations | ai-native-organizations | Enterprise AI | LONG (243) | MISS | OK (16) | A |
| 18 | Por que fracasan iniciativas IA | por-que-fracasan-iniciativas-ia | Enterprise AI | LONG (220) | MISS | OK (18) | A |
| 19 | Enterprise AI Transformation Roadmap | enterprise-ai-transformation-roadmap | Enterprise AI | LONG (237) | MISS | OK (15) | A |
| 20 | AI Governance Framework | ai-governance-framework | Governance | OK (161) | MISS | OK (15) | A |
| 21 | AI Operating Model | ai-operating-model-enterprise | Enterprise AI | LONG (243) | LONG (201) | OK (18) | A |
| 22 | Organizational Memory | organizational-memory-activo-ai-native | Enterprise AI | LONG (318) | LONG (204) | OK (20) | A |
| 23 | Memory Architecture | memory-architecture-contexto-reutilizable-enterprise | Enterprise AI | OK (130) | LONG (327) | OK (23) | A |

Notas clave de consistencia:
- article-06 aparece en la tabla canonica de docs, pero no tiene article.json real en content.
- References invalidas en relatedArticles detectadas en article-02 y article-05: context-engineering-legacy-ia-falla (slug no resuelto en corpus actual).

## 4) Internal Linking Audit

### 4.1 Related articles

Fortalezas:
- Bloque 17-23 tiene relatedArticles definidos (5 por articulo).
- Nodos muy conectados por related incoming: article-21, article-20, article-15, article-18.

Debilidades:
- Sin relatedArticles salientes: article-06, article-07, article-08, article-09, article-10.
- Nodos huerfanos por incoming related = 0: article-08, article-09, article-10, article-23 y article-06.
- article-23 esta bien enlazado hacia fuera, pero aun no recibe enlaces de retorno (normal por recencia, pero conviene corregirlo pronto).
- Hay 2 referencias related invalidas (article-02 y article-05).

### 4.2 Enlaces internos en article.md

- Solo article-23 contiene enlaces internos explicitos a otros slugs de /articulos.
- Resultado: 22 de 23 articulos sin enlaces internos editoriales en cuerpo.
- Implicacion: la navegacion semantica depende casi por completo del modulo relatedArticles, no del discurso editorial.

## 5) Framework Alignment

Cadena conceptual definida en docs:
Context Engineering -> Knowledge Debt -> Organizational Memory -> AI Governance -> AI Operating Model -> Memory Architecture -> AI-Native Organizations

### 5.1 Articulos bien alineados al framework principal

- Base contexto: 01, 03, 07, 14, 15
- Deuda/conocimiento: 02, 05
- Core governance-operating-memory: 20, 21, 22, 23
- Target organizativo: 17
- Soporte de escala: 18, 19

### 5.2 Articulos aislados o con alineacion debil

- 06: sin metadata estructurada (aislamiento tecnico/editorial).
- 08: util como pieza tactica, pero aislada en red de enlaces.
- 09 y 10: piezas puente de governance con baja conectividad real (sin outgoing related y sin enlaces editoriales).
- 11, 12, 13: cluster AI-Ready con cobertura conceptual buena, pero metadata incompleta y sin linking editorial en cuerpo.

### 5.3 Donde reforzar la cadena conceptual

1. Reinyectar article-23 como destino desde 17, 19, 20, 21 y 22 (bidireccionalidad).
2. Conectar 08, 09 y 10 con 20 y 21 para cerrar el tramo Governance operativo.
3. Cerrar continuidad 05 -> 22 -> 23 (de Knowledge Debt a Memory Architecture).
4. Reforzar 11-13 con enlaces contextuales hacia 15, 20 y 21 para pasar de AI-Ready diagnostico a operating model.

## 6) Content Quality Classification (A/B/C)

### A (11 articulos)
01, 02, 03, 04, 17, 18, 19, 20, 21, 22, 23

Motivo:
- Alta madurez conceptual.
- Buena presencia de metadata critica (aunque varias descriptions son largas y algunos excerpts son extensos).
- Integracion razonable en related graph (especialmente 17-22).

### B (8 articulos)
05, 07, 11, 12, 13, 14, 15, 16

Motivo:
- Buen contenido base, pero con deuda metadata relevante (faltan excerpt y/o readingTime) y poca integracion editorial dentro del cuerpo.

### C (4 articulos)
06, 08, 09, 10

Motivo:
- Deficiencias estructurales altas (metadata ausente o incompleta + linking debil).
- Riesgo de desalineacion respecto al framework principal y SEO interno.

## 7) Prioridades

## Alta prioridad

1. Integridad de corpus: resolver article-06 sin article.json.
2. Corregir relatedArticles invalidos en article-02 y article-05.
3. Completar metadata minima faltante en bloque 08-16 (description/excerpt/readingTime segun caso).
4. Reducir descriptions y excerpts excesivamente largos en piezas clave (especialmente 22 y 23 excerpt).
5. Eliminar huerfanos de red (08, 09, 10, 23) mediante incoming links planificados.

## Media prioridad

1. Extender estrategia de internal linking en cuerpo de articulo fuera de article-23.
2. Rebalancear conectividad de piezas puente (09, 10, 16) hacia 20-21-23.
3. Normalizar estilo editorial de titulos entre bloques (consistencia de longitud y promesa SEO).

## Baja prioridad

1. Ajustes finos de categoria historica (04 y 05), solo si hay decision editorial estrategica.
2. Optimizacion secundaria de readingTime para precision por longitud real.

## 8) Recomendacion final

Pregunta 1: Conviene optimizar el corpus existente antes de article-24?
- Si, conviene una optimizacion corta previa (sprint de higiene) antes de publicar article-24.
- No hace falta una reescritura completa; hace falta cerrar deuda estructural y de linking.

Pregunta 2: El corpus esta suficientemente maduro para seguir creciendo?
- Parcialmente si: la base conceptual y el core 17-23 estan maduros.
- Operativamente no al 100%: hay deuda metadata y conectividad en 06-16 que puede reducir impacto SEO y coherencia de framework si se sigue creciendo sin corregir.

Decision recomendada:
- Ejecutar primero un mini-ciclo de optimizacion de corpus (Alta prioridad), luego iniciar article-24 con la red conceptual ya reforzada.
