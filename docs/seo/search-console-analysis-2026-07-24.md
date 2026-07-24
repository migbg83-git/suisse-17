# Archwise — Análisis de Search Console

> Fecha de exportación: 2026-07-24  
> Periodo cubierto: 2026-05-28 a 2026-07-21 (~55 días)  
> Fuente: `docs/seo/search-console/2026-07-24/`

---

## Advertencia metodológica

Los datos de esta exportación reflejan un sitio muy joven con historial de indexación escaso. Las métricas deben interpretarse en ese contexto:

- Total de clics en el periodo: **4**
- Total de impresiones en el periodo: **~524** *(suma de páginas, puede haber deduplicación interna)*
- CTR global: **~0.76%**
- Posición media global: variable por página

El volumen es bajo pero la señal de posicionamiento es útil. Varias páginas se están posicionando en el top 10 de Google sin haber generado clics todavía, lo que indica un problema de CTR (título, descripción o marca poco conocida) más que de relevancia temática.

**Importante**: El archivo `aparicion-en-busquedas.csv` está vacío en esta exportación. No hay datos de tipo de aparición en búsquedas (resultados de imágenes, snippets, etc.).

---

## 1. Análisis del gráfico temporal

### Datos del gráfico (Grafico.csv)

| Periodo | Observación |
|---------|-------------|
| 2026-05-28 a 2026-06-03 | Primeras impresiones (1-7 por día) |
| 2026-06-04 a 2026-06-11 | Crecimiento inicial: 7-15 impresiones/día |
| 2026-06-15 a 2026-06-17 | **Pico máximo**: 48, 37, 116 impresiones |
| 2026-06-17 | **Día de máximo alcance**: 116 impresiones, 1 clic, pos 9.8 |
| 2026-06-17 a 2026-06-30 | Descenso gradual: 52 → 2 |
| 2026-07-01 a 2026-07-21 | Estabilización en niveles bajos: 1-11 impresiones/día |

### Interpretación

El pico del 17 de junio (116 impresiones) coincide temporalmente con la publicación de los artículos 25-28 (junio 4-5) y con el posible inicio de una campaña de difusión o de newsletters. El descenso posterior puede indicar:

1. **Naturaleza del tráfico**: Si el pico fue generado por contenido nuevo que apareció momentáneamente en resultados de marca o branded, es natural que decaiga.
2. **Falta de volumen de búsqueda sostenido**: Los términos que posiciona Archwise aún tienen demanda baja. El pico puede ser tráfico de exploración, no búsqueda consolidada.
3. **No hay señal de penalización**: La caída es gradual, no abrupta. No hay indicios de acción manual ni filtro algorítmico.

**Hipótesis editorial** (no confirmada por datos): El pico del 17 de junio puede estar relacionado con la consulta "archwise" o con alguna difusión orgánica en redes o newsletter. No hay datos para confirmarlo.

---

## 2. Análisis de páginas

### Tabla completa por página

| Página (slug) | Clics | Impresiones | CTR | Posición | Cluster | Nota |
|---------------|-------|-------------|-----|----------|---------|------|
| `/` (homepage) | 2 | 64 | 3.12% | 10.5 | Marca | Mejor CTR absoluto |
| `ai-ready-systems-vs-legacy-systems` | 1 | 49 | 2.04% | 35.4 | AI-Ready | Clic con posición muy baja |
| `arquitectura-equipos-virtuales-ia-enterprise` | 1 | 26 | 3.85% | 8.8 | Agentic AI / AOM | Mejor artículo por clics |
| `integracion-coherencia-principio-rector...` | 0 | 59 | 0% | 24.0 | Framework / Coherencia | Mayor impresiones sin clic |
| `por-que-el-prompt-engineering-no-es-suficiente...` | 0 | 53 | 0% | 6.3 | Prompt Eng | **Quick win: pos 6.3** |
| `ai-augmented-development-teams` | 0 | 42 | 0% | 55.5 | AI-Aug Teams | Alta demanda, posición baja |
| `context-engineering-vs-prompt-engineering` | 0 | 36 | 0% | 6.5 | Context Eng / PE | **Quick win: pos 6.5** |
| `arquitectura-vuelve-ser-estrategica` | 0 | 26 | 0% | 15.1 | Context Eng | Posición 15, cerca de p2 |
| `/about` | 0 | 25 | 0% | 10.9 | Marca | Sin artículo |
| `technical-debt-vs-knowledge-debt-ia` | 0 | 22 | 0% | 8.6 | Knowledge Debt | Pos 1 para "knowledge debt" |
| `architecture-review-efectiva-ia` | 0 | 18 | 0% | 8.1 | Context Eng / Gov | Buena posición |
| `memory-architecture-contexto-reutilizable...` | 0 | 16 | 0% | 6.6 | Org Memory | Excelente posición |
| `ai-native-organizations` | 0 | 16 | 0% | 28.2 | AI-Native | Posición media-baja |
| `por-que-la-mayoria-de-los-sistemas-no-estan...` | 0 | 15 | 0% | 7.6 | AI-Ready | Buena posición |
| `/framework` | 0 | 15 | 0% | 10.1 | Framework | Hub del framework |
| `/newsletter` | 0 | 14 | 0% | 9.6 | Marca | Aparece en GSC |
| `context-engineering-legacy-ia-falla` | 0 | 14 | 0% | 26.7 | Context Eng | Posición media-baja |
| `ai-governance-framework` | 0 | 11 | 0% | 7.3 | AI Governance | Cerca del top 10 |
| `por-que-fracasan-iniciativas-ia` | 0 | 10 | 0% | 7.8 | AI-Native | Buena posición |
| `/articulos` | 0 | 8 | 0% | 10.9 | Marca | Índice de artículos |
| `enterprise-ai-transformation-roadmap` | 0 | 8 | 0% | 14.9 | AI-Native | Cerca p2 |
| `framework-archwise-integracion-capacidades...` | 0 | 7 | 0% | 5.3 | Framework | **Excelente posición** |
| `ai-operating-model-enterprise` | 0 | 6 | 0% | 5.2 | AI Oper Model | **Excelente posición** |
| `plantillas-ejemplos-architecture-md...` | 0 | 5 | 0% | 5.8 | Context Eng | Excelente posición |
| `framework-context-engineering-enterprise` | 0 | 5 | 0% | 6.4 | Context Eng | Buena posición |
| `organizational-memory-activo-ai-native` | 0 | 5 | 0% | 7.0 | Org Memory | Buena posición |
| `/manifesto` | 0 | 5 | 0% | 8.4 | Marca | — |
| `architecture-governance-contexto-compartido` | 0 | 5 | 0% | 9.0 | AI Governance | Cerca del top 10 |
| `agentic-ai-enterprise-governance-memoria...` | 0 | 4 | 0% | 5.5 | Agentic AI | **Excelente posición** |
| `context-systems-entregar-contexto-correcto...` | 0 | 4 | 0% | 7.3 | Context Systems | Buena posición |
| `integridad-secuencia-evaluar-madurez...` | 0 | 4 | 0% | 9.5 | Madurez | Cerca del top 10 |
| `architecture-md-vale-mas-que-prompts` | 0 | 3 | 0% | 4.7 | Context Eng | **Posición muy alta** |
| `las-7-caracteristicas-arquitectura-ai-ready` | 0 | 2 | 0% | 7.0 | AI-Ready | — |
| `measurement-system-integracion-madurez...` | 0 | 2 | 0% | 9.5 | Madurez | — |

**Páginas del corpus no detectadas en GSC**: `documentacion-necesita-llm` (art-03), `deuda-tecnica-ia-revela` (art-02).

### Observación crítica

Hay **8 páginas con posición media < 7** que tienen **0 clics**:
- `framework-archwise...` (pos 5.3)
- `ai-operating-model...` (pos 5.2)
- `plantillas-ejemplos...` (pos 5.8)
- `agentic-ai-enterprise...` (pos 5.5)
- `por-que-el-prompt-engineering...` (pos 6.3)
- `context-engineering-vs-prompt-engineering` (pos 6.5)
- `memory-architecture...` (pos 6.6)
- `framework-context-engineering...` (pos 6.4)

Esto indica que Google ya considera el contenido relevante, pero los usuarios no hacen clic. Las causas más probables son:
1. Bajo volumen de búsqueda de los términos exactos que activan la impresión.
2. Títulos o descripciones que no generan suficiente incentivo de clic en SERP.
3. Competidores con mayor autoridad de dominio y marca más conocida.

---

## 3. Análisis de consultas

### Tabla completa de consultas

| Consulta | Clics | Impresiones | CTR | Posición | Cluster | Clasificación |
|----------|-------|-------------|-----|----------|---------|---------------|
| archwise | 1 | 39 | 2.56% | 8.8 | Marca | **Marca** |
| respuesta arquitectónica coherente | 0 | 53 | 0% | 26.0 | Framework / Coherencia | Señal temprana |
| augmented development team | 0 | 27 | 0% | 75.8 | AI-Aug Teams | Señal temprana |
| alteria vs manifest ai | 0 | 21 | 0% | 63.1 | — | Consulta irrelevante |
| space wise arquitectura | 0 | 7 | 0% | 47.3 | — | Consulta irrelevante (probable error tipográfico: "archwise") |
| arquitectura estrategica | 0 | 5 | 0% | 50.8 | AI-Ready / Context Eng | Señal temprana |
| prompt thinking | 0 | 2 | 0% | 10 | Prompt Eng | Señal temprana |
| modernización de sistemas legacy con ia | 0 | 2 | 0% | 37.5 | AI-Ready / Legacy | Señal temprana |
| ai native organization | 0 | 2 | 0% | 69.5 | AI-Native | Señal temprana |
| ai-augmented development team | 0 | 2 | 0% | 71 | AI-Aug Teams | Señal temprana |
| ai-native organization | 0 | 2 | 0% | 73.5 | AI-Native | Señal temprana |
| knowledge debt | 0 | 1 | 0% | **1** | Knowledge Debt | **Oportunidad validada** |
| ai operating model | 0 | 1 | 0% | **3** | AI Oper Model | **Quick win potencial** |
| ai transformation roadmap | 0 | 1 | 0% | **3** | AI-Native | **Quick win potencial** |
| no ai sistema | 0 | 1 | 0% | 7 | AI-Ready | Señal temprana (ruido) |
| legacy ia | 0 | 1 | 0% | 8 | AI-Ready / Legacy | Señal temprana |
| por qué fracasan empresas escalando sistemas de ti | 0 | 1 | 0% | 11 | AI-Native | Señal temprana |
| technical debts | 0 | 1 | 0% | 11 | Knowledge Debt | Señal temprana |
| memory infrastructure | 0 | 1 | 0% | 12 | Org Memory | Señal temprana |
| ai native | 0 | 1 | 0% | 34 | AI-Native | Señal temprana |
| creación de activos ai-ready | 0 | 1 | 0% | 35 | AI-Ready | Señal temprana |
| context engineering | 0 | 1 | 0% | 41 | Context Eng | Señal temprana |
| brickwise | 0 | 1 | 0% | 47 | — | Consulta irrelevante |
| modernización legacy con ia | 0 | 1 | 0% | 47 | AI-Ready / Legacy | Señal temprana |
| hoja de ruta de transformación con ia | 0 | 1 | 0% | 78 | AI-Native | Señal temprana |

---

## 4. Análisis por consulta relevante

### "archwise" — Marca
- **Clics**: 1 | **Impresiones**: 39 | **CTR**: 2.56% | **Posición**: 8.8
- **Página asociada**: homepage (inferido)
- **Clasificación**: Marca
- **Nota**: La búsqueda de marca tiene un CTR bajo (2.56%) para ser branded, lo que sugiere que el resultado de búsqueda para "archwise" no es claramente distinguible o que la homepage no está en la posición 1 para su propio nombre. Una búsqueda branded en posición 1 debería tener CTR del 20-40%. Posición 8.8 es baja para branded.
- **Acción recomendada**: Reforzar señales de marca (menciones externas, enlaces). Verificar que la homepage tenga el nombre "Archwise" como primera referencia visible en título y meta descripción.

---

### "respuesta arquitectónica coherente" — Consulta informacional
- **Clics**: 0 | **Impresiones**: 53 | **CTR**: 0% | **Posición**: 26
- **Página asociada probable**: `integracion-coherencia-principio-rector-mecanismo-arquitectonico` (article-30)
- **Clasificación**: Señal temprana — consulta de nicho relevante al territorio de Archwise, pero con posición 26 (página 3).
- **Nota**: Esta consulta es la de mayor volumen de impresiones de todo el dataset (excluyendo "archwise" para páginas). Indica que hay usuarios buscando conceptos de coherencia arquitectónica que aterrizan en article-30. La posición 26 es demasiado baja para generar clics.
- **Acción recomendada**: No actuar todavía. Esperar consolidación de posición. Si en la próxima exportación la posición sube a < 15, entonces reforzar el título y descripción de article-30.

---

### "knowledge debt" — Término técnico de nicho
- **Clics**: 0 | **Impresiones**: 1 | **CTR**: 0% | **Posición**: **1**
- **Página asociada probable**: `technical-debt-vs-knowledge-debt-ia` (article-05)
- **Clasificación**: **Oportunidad validada** — Posición 1 para este término. Solo 1 impresión en el periodo, lo que indica volumen de búsqueda muy bajo.
- **Nota**: Este es un término que Archwise puede "poseer" con poca competencia editorial. La posición 1 sugiere que Google ya ha asignado a Archwise autoridad en este tema. El problema es el volumen, no la relevancia.
- **Acción recomendada**: Mantener y reforzar. Crear contenido de apoyo que amplíe el cluster de Knowledge Debt. Proteger la posición con más artículos relacionados bien enlazados.

---

### "ai operating model" — Término enterprise
- **Clics**: 0 | **Impresiones**: 1 | **CTR**: 0% | **Posición**: **3**
- **Página asociada probable**: `ai-operating-model-enterprise` (article-21)
- **Clasificación**: Quick win potencial — El término tiene volumen de búsqueda mayor que la impresión sugiere (solo 1 impresión puede ser por rango temporal o variación del algoritmo).
- **Nota**: "AI operating model" es un término con potencial de búsqueda real en audiencias enterprise. La posición 3 es excepcional para un sitio joven.
- **Acción recomendada**: Reforzar contenido existente. Mejorar la meta descripción de article-21 para aumentar CTR cuando se generen más impresiones. Construir más enlaces internos hacia este artículo.

---

### "ai transformation roadmap" — Término enterprise
- **Clics**: 0 | **Impresiones**: 1 | **CTR**: 0% | **Posición**: **3**
- **Página asociada probable**: `enterprise-ai-transformation-roadmap` (article-19)
- **Clasificación**: Quick win potencial
- **Nota**: Similar a "ai operating model". Posición 3 con 1 sola impresión. Puede fluctuar significativamente con más datos.
- **Acción recomendada**: Reforzar enlazado interno hacia article-19. No actuar sobre el contenido hasta confirmar la posición con más impresiones.

---

### "augmented development team" — Término de equipos
- **Clics**: 0 | **Impresiones**: 27 | **CTR**: 0% | **Posición**: 75.8
- **Página asociada probable**: `ai-augmented-development-teams` (article-16)
- **Clasificación**: Señal temprana — La consulta tiene impresiones notables pero posición muy baja (página 7-8).
- **Nota**: Hay demanda real para este término. La posición 75 indica que el artículo no está optimizado para esta búsqueda, o que hay competidores mucho más fuertes.
- **Acción recomendada**: No actuar todavía sobre el contenido. Reforzar enlaces internos hacia article-16 para subir autoridad. En la próxima iteración, revisar si hay oportunidad de mejorar el título y descripción.

---

### "alteria vs manifest ai" — Consulta irrelevante
- **Clics**: 0 | **Impresiones**: 21 | **CTR**: 0% | **Posición**: 63.1
- **Página asociada**: desconocida (probablemente homepage o artículo de contexto empresarial)
- **Clasificación**: Consulta irrelevante / ruido
- **Nota**: Esta consulta compara dos empresas que Archwise no menciona. Google está asociando Archwise con contenido sobre empresas de arquitectura de software/IA por semántica contextual. No hay acción SEO posible ni recomendable.
- **Acción recomendada**: No actuar.

---

### "space wise arquitectura" — Posible error tipográfico
- **Clics**: 0 | **Impresiones**: 7 | **CTR**: 0% | **Posición**: 47.3
- **Clasificación**: Consulta irrelevante — Probable error tipográfico de "archwise arquitectura".
- **Acción recomendada**: No actuar.

---

### "prompt thinking" — Término conceptual
- **Clics**: 0 | **Impresiones**: 2 | **CTR**: 0% | **Posición**: 10
- **Página asociada**: probablemente `arquitectura-equipos-virtuales-ia-enterprise` (article-31, que usa el concepto "Prompt Thinking vs System Thinking")
- **Clasificación**: Señal temprana — Posición 10, en el límite del top 10.
- **Nota**: Si article-31 está generando esta consulta, significa que el concepto "Prompt Thinking" está siendo indexado. Tiene potencial.
- **Acción recomendada**: No actuar todavía. Monitorizar en la próxima exportación.

---

### "context engineering" — Término central del corpus
- **Clics**: 0 | **Impresiones**: 1 | **CTR**: 0% | **Posición**: 41
- **Clasificación**: Señal temprana — Posición 41 para el término central del corpus es preocupante.
- **Nota**: Este término debería ser uno de los de mayor performance de Archwise. La posición 41 indica que, para "context engineering" como término genérico, Archwise compite con muchos recursos anglófonos y plataformas con mayor autoridad de dominio. La búsqueda "context engineering" en inglés tiene mucho más volumen que en español.
- **Acción recomendada**: Reforzar el cluster de Context Engineering. Article-15 (`context-engineering-vs-prompt-engineering`) en posición 6.5 podría ser la puerta de entrada más realista.

---

## 5. Análisis geográfico

### Tabla de países

| País | Clics | Impresiones | CTR | Posición |
|------|-------|-------------|-----|----------|
| España | 2 | 118 | 1.69% | 18.1 |
| México | 1 | 27 | 3.70% | 14.7 |
| Ecuador | 1 | 11 | 9.09% | 4.0 |
| **Estados Unidos** | **0** | **200** | **0%** | **18.7** |
| Chile | 0 | 40 | 0% | 44.3 |
| Argentina | 0 | 23 | 0% | 7.2 |
| Perú | 0 | 21 | 0% | 6.1 |
| Colombia | 0 | 14 | 0% | 6.6 |
| Países Bajos | 0 | 9 | 0% | 1.9 |
| Canadá | 0 | 8 | 0% | 16.4 |

### Observaciones críticas

1. **Estados Unidos: 200 impresiones, 0 clics, posición 18.7**: El mercado con más impresiones no genera ningún clic. Esto puede indicar:
   - El contenido en español no atrae a usuarios de búsqueda en inglés desde EE.UU.
   - O bien los hispanohablantes en EE.UU. que buscan en español encuentran el contenido pero no hacen clic.
   - La posición 18.7 (página 2) dificulta el clic. En EE.UU. el CTR para posición 18 es típicamente < 1%.
   
2. **Ecuador: 9.09% CTR, posición 4**: El mayor CTR del dataset. 1 clic de 11 impresiones desde posición 4 es un comportamiento normal.

3. **Argentina: posición 7.2 con 0 clics**: Buen posicionamiento pero 0 conversiones. Misma causa que el patrón general: bajo volumen por página y sin clic.

4. **Perú y Colombia: posiciones 6.1 y 6.6**: Señal positiva de relevancia en mercados latinoamericanos clave.

5. **Países Bajos: posición 1.9**: Probablemente resultado de búsquedas de marca o búsquedas muy específicas. Con solo 9 impresiones no es estadísticamente significativo.

---

## 6. Análisis de dispositivos

| Dispositivo | Clics | Impresiones | CTR | Posición |
|-------------|-------|-------------|-----|----------|
| Ordenador | 3 | 443 | 0.68% | 17.1 |
| Móviles | 1 | 76 | 1.32% | 20.2 |
| Tablet | 0 | 5 | 0% | 32.6 |

**Observación**: El tráfico es mayoritariamente de ordenador (84% de impresiones), coherente con el perfil de audiencia enterprise (CTOs, architects, tech leads trabajando desde escritorio). El CTR desde móviles (1.32%) es mayor que desde ordenador (0.68%), posiblemente porque las búsquedas móviles son más de marca.

---

## 7. Aparición en búsquedas

El archivo `aparicion-en-busquedas.csv` contiene solo los encabezados (sin datos). Search Console no registró datos de tipos de aparición en búsquedas para este periodo. Posibles causas:
- El sitio aún no tiene rich snippets, featured snippets u otras apariencias especiales.
- El rango de datos exportado no incluye este dimensión.

---

## 8. Síntesis de señales

### Señales positivas

| Señal | Evidencia |
|-------|-----------|
| Google reconoce el sitio | 30+ páginas indexadas con impresiones |
| Posicionamiento técnico sólido | 8 páginas en posición < 7 con 0 clics (el problema no es la relevancia) |
| Posición 1 para "knowledge debt" | Territorio de nicho potencialmente sin competencia |
| Posición 3 para "ai operating model" | Término enterprise con valor real |
| Posición 3 para "ai transformation roadmap" | Término enterprise con valor real |
| Cobertura geográfica amplia | 30+ países con alguna impresión |

### Señales de alerta

| Señal | Evidencia |
|-------|-----------|
| Solo 4 clics en 55 días | CTR global muy bajo |
| Tráfico decreciente en julio | Pico junio 17, descenso progresivo |
| 200 impresiones desde EE.UU. con 0 clics | El principal mercado no convierte |
| Marca "archwise" en posición 8.8 | Muy baja para branded |
| "Context engineering" en posición 41 | Término clave con posición lejana |
| Articles 02 y 03 sin impresiones GSC | Posible problema de indexación |

---

## 9. Clasificación SEO de consultas

| Clasificación | Consultas |
|---------------|-----------|
| **Marca** | archwise |
| **Oportunidad validada** | knowledge debt |
| **Quick win** | ai operating model, ai transformation roadmap, prompt thinking *(posición < 15, confirmar con más datos)* |
| **Señal temprana** | respuesta arquitectónica coherente, augmented development team, arquitectura estrategica, modernización de sistemas legacy con ia, ai native organization, legacy ia, technical debts, memory infrastructure, context engineering |
| **Consulta irrelevante o ruido** | alteria vs manifest ai, space wise arquitectura, brickwise, no ai sistema |

---

## 10. Acciones recomendadas por página

| Página | Acción recomendada | Justificación |
|--------|-------------------|---------------|
| `por-que-el-prompt-engineering-no-es-suficiente...` | Mejorar título y descripción | Posición 6.3 con 0 clics: el snippet no invita al clic |
| `context-engineering-vs-prompt-engineering` | Mejorar título y descripción | Posición 6.5 con 0 clics: misma causa |
| `ai-operating-model-enterprise` | Reforzar enlazado interno | Posición 5.2 con 0 clics |
| `framework-archwise-integracion-capacidades...` | Reforzar enlazado interno | Posición 5.3 con 0 clics |
| `memory-architecture-contexto-reutilizable...` | Mantener | Posición 6.6, tendencia positiva |
| `technical-debt-vs-knowledge-debt-ia` | Reforzar enlazado interno | Posición 1 para "knowledge debt" |
| `ai-augmented-development-teams` | No actuar todavía | Posición 55: necesita más autoridad antes de optimizar |
| `ai-ready-systems-vs-legacy-systems` | No actuar | 1 clic con posición 35: el clic fue aleatorio |
| Homepage | Reforzar señales de marca | CTR 3.12% desde posición 10.5: bajo para branded |
| `integracion-coherencia-principio-rector...` | No actuar todavía | Posición 24 con 59 impresiones: esperar consolidación |
