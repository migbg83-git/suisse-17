# Archwise Editorial Dashboard

> Última actualización: 2026-07-24  
> Próxima revisión: cuando se publique el siguiente artículo o se exporte GSC  
> Periodo de datos GSC: 2026-05-28 a 2026-07-21

---

## Cómo leer este dashboard

Este archivo es la vista ejecutiva del sistema. Responde diez preguntas fijas. Cada respuesta está etiquetada:

- `HECHO` — dato verificable, directo de corpus o GSC
- `INFERENCIA` — conclusión razonada a partir de datos
- `HIPÓTESIS` — explicación posible sin confirmación
- `RECOMENDACIÓN` — acción propuesta, requiere decisión humana
- `PENDIENTE DE EVIDENCIA` — datos insuficientes para responder

---

## P1. ¿En qué estado está Archwise?

**HECHO** — Archwise tiene 31 artículos publicados (article-01 a article-31). El corpus cubre el periodo 2026-01-15 a 2026-06-11.

**HECHO** — En el periodo 2026-05-28 a 2026-07-21, Google registró **4 clics** y aproximadamente **524 impresiones** en 30+ páginas indexadas.

**HECHO** — El sitio alcanzó su pico de visibilidad el 17 de junio de 2026 (116 impresiones en un día). Desde entonces el tráfico ha descendido.

**INFERENCIA** — El sitio está en fase de indexación activa. Google lo está descubriendo y clasificando. La señal de posicionamiento es positiva (varias páginas en top 10) pero el volumen de búsqueda de los términos objetivo es todavía bajo.

**HIPÓTESIS** — El descenso de julio puede deberse a que los artículos publicados en ráfaga en mayo-junio generaron un pico de frescura que Google ya no valora como novedad. No hay señal de penalización.

---

## P2. ¿Cuáles son nuestros territorios fuertes?

**HECHO** — Por posición en GSC (datos reales):

| Territorio | Mejor posición observada | Evidencia |
|------------|--------------------------|-----------|
| Knowledge Debt | **1** para "knowledge debt" | 1 impresión — peso bajo |
| AI Operating Model | **3** para "ai operating model" | 1 impresión — peso bajo |
| AI Transformation | **3** para "ai transformation roadmap" | 1 impresión — peso bajo |
| Framework Archwise | **5.2 - 5.3** (posición media en páginas) | 7-6 impresiones — peso medio |
| Context Engineering vs PE | **6.3 - 6.5** (posición media en páginas) | 36-53 impresiones — peso alto |
| Memory Architecture | **6.6** (posición media en página) | 16 impresiones — peso medio |
| Prompt Engineering | **6.3** (posición media en página) | 53 impresiones — **mayor peso del corpus** |

**INFERENCIA** — El territorio con señal más sólida (mayor peso estadístico combinado con buena posición) es **Prompt Engineering / Context Engineering**. Dos artículos en posición 6-7 con 36-53 impresiones son la señal más confiable del corpus.

**RECOMENDACIÓN** — Ver roadmap: acciones sobre articles 14 y 15.

---

## P3. ¿Cuáles son nuestros territorios débiles?

**HECHO** — Por cobertura editorial (solo 1 artículo directo):

| Territorio | Artículos directos | Situación GSC |
|------------|--------------------|---------------|
| AI-Augmented Teams | 1 (art-16) | 42 impresiones, posición 55 |
| Agentic AI | 2 (art-25, art-31) | 4 impresiones, posición 5.5 |

**HECHO** — Artículos sin impresiones en GSC (posiblemente no indexados o sin consultas detectadas):
- `documentacion-necesita-llm` (art-03, fecha: 2026-03-05)
- `deuda-tecnica-ia-revela` (art-02, fecha: 2026-02-10)

**INFERENCIA** — AI-Augmented Teams tiene la mayor brecha entre demanda potencial (42 impresiones, posición 55 para "augmented development team") y cobertura editorial (1 artículo). Es un territorio con demanda real y presencia insuficiente.

**INFERENCIA** — Agentic AI tiene buena posición (5.5) pero volumen muy bajo (4 impresiones). Es un territorio donde Archwise podría consolidar autoridad con poco competidor en español.

---

## P4. ¿Qué clusters están creciendo?

**PENDIENTE DE EVIDENCIA** — Con solo 55 días de datos y una tendencia decreciente en julio, no es posible determinar qué clusters están "creciendo". El periodo de datos es insuficiente para observar tendencias de crecimiento por cluster.

**HECHO** — Por impresiones acumuladas (aproximación al volumen de atención de Google):

| Cluster | Impresiones estimadas (suma de páginas asociadas) |
|---------|--------------------------------------------------|
| Prompt Engineering / Context Eng | ~89 (art-14 + art-15) |
| AI-Ready Systems | ~91 (art-13 + homepage parcial) |
| Framework / Coherencia | ~66 (art-30 + art-26) |
| AI-Augmented Teams | ~42 (art-16) |
| Context Engineering (otras páginas) | ~63 (arts 01, 06, 07, 08, 09) |

**HIPÓTESIS** — El cluster de Prompt Engineering / Context Engineering tiene la mayor concentración de señal SEO porque estos términos tienen más volumen de búsqueda en español que los términos más especializados del Framework Archwise.

---

## P5. ¿Qué páginas necesitan atención?

**HECHO + RECOMENDACIÓN** — Páginas con posición < 7 y 0 clics (alta prioridad potencial, confirmado por evidencia media-alta):

| Página | Posición | Impresiones | Acción potencial |
|--------|----------|-------------|------------------|
| `por-que-el-prompt-engineering-no-es-suficiente...` | 6.3 | 53 | Revisar snippet en SERP |
| `context-engineering-vs-prompt-engineering` | 6.5 | 36 | Revisar snippet en SERP |
| `memory-architecture-contexto-reutilizable...` | 6.6 | 16 | Reforzar enlazado interno |
| `framework-context-engineering-enterprise` | 6.4 | 5 | Peso bajo — no actuar todavía |
| `framework-archwise-integracion-capacidades...` | 5.3 | 7 | Peso bajo — reforzar enlazado |
| `ai-operating-model-enterprise` | 5.2 | 6 | Peso bajo — reforzar enlazado |
| `plantillas-ejemplos-architecture-md...` | 5.8 | 5 | Peso bajo — no actuar todavía |
| `agentic-ai-enterprise-governance...` | 5.5 | 4 | Peso muy bajo — monitorizar |
| `architecture-md-vale-mas-que-prompts` | 4.7 | 3 | Peso muy bajo — monitorizar |

**IMPORTANTE**: Las páginas con menos de 10 impresiones tienen evidencia insuficiente para tomar decisiones. Solo `art-14` (53 imp) y `art-15` (36 imp) tienen evidencia suficiente para actuar.

---

## P6. ¿Cuáles son las cinco acciones prioritarias?

Las acciones están ordenadas por la combinación de impacto potencial × evidencia disponible. Ver detalles en `roadmap/roadmap.md`.

| # | Acción | Tipo | Evidencia | Prioridad |
|---|--------|------|-----------|-----------|
| 1 | Revisar el campo `description` de art-14 (`por-que-el-prompt-engineering...`) | Meta descripción | 53 impresiones, pos 6.3, 0 clics — **SÓLIDA** | Alta |
| 2 | Revisar el campo `description` de art-15 (`context-engineering-vs-prompt-engineering`) | Meta descripción | 36 impresiones, pos 6.5, 0 clics — **SÓLIDA** | Alta |
| 3 | Verificar indexación de art-02 y art-03 en Google Search Console (URL Inspection) | Técnica | Ausentes del informe GSC — **PARCIAL** | Media |
| 4 | Corregir fecha de art-12 (campo `date: "2024-06-07"` → probablemente 2026) | Editorial | Inconsistencia directa en frontmatter — **SÓLIDA** | Media |
| 5 | Añadir enlazado interno desde art-20 y art-21 hacia art-14 y art-15 | Enlazado | INFERENCIA — no hay datos directos de pérdida de autoridad | Media-baja |

---

## P7. ¿Qué artículos están actuando como pilares?

**HECHO** — Por impresiones y presencia en GSC:

| Artículo | Cluster | Impresiones | Posición | Rol real observado |
|----------|---------|-------------|----------|--------------------|
| art-14 | Prompt Eng | 53 | 6.3 | **Puerta de entrada real para búsquedas de PE** |
| art-30 | Framework / Coherencia | 59 | 24.0 | **Más visto del corpus pero posición baja** |
| art-13 | AI-Ready | 49 | 35.4 | Visto pero posición muy baja |
| art-15 | Context Eng / PE | 36 | 6.5 | **Puerta de entrada para Context Eng vs PE** |
| art-16 | AI-Aug Teams | 42 | 55.5 | Impresiones altas pero posición muy baja |

**HECHO** — Por diseño editorial (artículo pilar declarado en corpus):

| Artículo | Cluster | Pilar declarado | Rendimiento GSC |
|----------|---------|-----------------|-----------------|
| art-13 | AI-Ready | Sí | Bajo (pos 35) |
| art-07 | Context Eng | Sí | Bajo (pos 6.4, 5 imp) |
| art-20 | AI Governance | Sí | Parcial (pos 7.3, 11 imp) |
| art-21 | AI Oper Model | Sí | Débil (pos 5.2, 6 imp) |
| art-22 | Org Memory | Sí | Débil (pos 7.0, 5 imp) |
| art-25 | Agentic AI | Sí | Muy débil (pos 5.5, 4 imp) |
| art-26 | Framework | Sí | Débil (pos 5.3, 7 imp) |

**INFERENCIA** — Existe una brecha entre los pilares editoriales diseñados (arts 20-26) y los artículos que realmente Google está valorando más (arts 14, 15, 30). Los pilares de capas avanzadas tienen excelente posición pero volumen de búsqueda muy bajo.

---

## P8. ¿Qué artículos están huérfanos?

Se considera "huérfano" un artículo que: (a) no aparece en GSC con impresiones, o (b) no recibe enlaces internos de otros artículos del corpus.

**HECHO** — Sin impresiones en GSC (posiblemente no indexados):
- art-02: `deuda-tecnica-ia-revela`
- art-03: `documentacion-necesita-llm`

**INFERENCIA** — Artículos con pocas impresiones (< 3) y sin contexto de enlazado documentado:
- art-01: `architecture-md-vale-mas-que-prompts` (3 imp, pos 4.7 — posición alta pero sin tracción)
- art-12: `las-7-caracteristicas-arquitectura-ai-ready` (2 imp)
- art-28: `measurement-system-integracion-madurez-operativa` (2 imp)

**HIPÓTESIS** — Art-01, art-02 y art-03 son los artículos más antiguos (enero-marzo 2026). Es posible que hayan perdido visibilidad relativa al acumularse más contenido nuevo. También pueden tener bajo volumen de búsqueda para sus términos específicos.

---

## P9. ¿Qué consultas nuevas están apareciendo?

**HECHO** — Consultas observadas por primera vez en la exportación de 2026-07-24 (primera exportación del sistema, todas son "nuevas"):

Consultas con señal relevante (más de 1 impresión o posición < 15):

| Consulta | Impresiones | Posición | Valoración |
|----------|-------------|----------|------------|
| respuesta arquitectónica coherente | 53 | 26.0 | Señal notable — HIPÓTESIS: asociada a art-30 |
| augmented development team | 27 | 75.8 | Demanda real — posición muy baja |
| archwise (marca) | 39 | 8.8 | Marca en posición baja |
| prompt thinking | 2 | 10.0 | Interesante — HIPÓTESIS: de art-31 |

**NOTA**: Al ser la primera exportación, no hay consultas "nuevas" en el sentido comparativo. En la próxima exportación, se compararán las consultas con esta lista para identificar apariciones reales.

---

## P10. ¿Cuál debería ser el siguiente movimiento?

**RECOMENDACIÓN** (basada en evidencia sólida):

> El movimiento de mayor impacto potencial con evidencia suficiente es revisar el snippet de SERP de los artículos 14 y 15. Ambos tienen posición media < 7, impresiones significativas (36-53) y 0 clics. La causa probable no es la relevancia del contenido (Google ya lo considera relevante) sino que el título o la descripción no invitan al clic en la página de resultados.
>
> Esto requiere revisar los campos `title` y `description` del frontmatter de esos dos artículos, que es la única acción disponible sin modificar el contenido editorial.

**RECOMENDACIÓN** (basada en evidencia parcial):

> Verificar en Google Search Console (URL Inspection) el estado de indexación de art-02 y art-03. Si están desindexados o deindexados, es una pérdida de autoridad recuperable.

**PENDIENTE DE EVIDENCIA**:

> No es posible determinar si la caída de julio es una tendencia o una fluctuación. Se necesita al menos una exportación más (agosto 2026) para confirmar.

---

## Métricas de referencia (base 2026-07-24)

Estos son los valores base para comparar en futuras exportaciones:

| Métrica | Valor base |
|---------|------------|
| Total artículos publicados | 31 |
| Total clics (periodo GSC) | 4 |
| Total impresiones (periodo GSC) | ~524 |
| Posición media global | ~18 (alta dispersión) |
| Páginas en top 10 | 8 |
| Páginas en top 5 | 6 |
| Consultas detectadas | 25 |
| Consultas con 0 clics | 24 |
| Países con impresiones | 34 |
| Fecha del pico de impresiones | 2026-06-17 (116 en un día) |
