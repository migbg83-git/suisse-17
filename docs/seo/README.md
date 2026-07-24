# docs/seo — Documentación SEO y Editorial de Archwise

> Creado: 2026-07-24  
> Responsable: Análisis editorial y SEO  
> Próxima revisión recomendada: siguiente exportación de Search Console

---

## Estructura del directorio

```
docs/seo/
├── README.md                                    ← este archivo
├── archwise-content-inventory.md               ← Fase 1: Inventario de corpus
├── archwise-cluster-map.md                     ← Fase 2: Modelo de clusters
├── search-console-analysis-2026-07-24.md       ← Fase 3: Análisis de Search Console
├── archwise-seo-backlog.md                     ← Fases 4-5: Matriz estratégica y backlog
└── search-console/
    └── 2026-07-24/
        ├── consultas.csv
        ├── paginas.csv
        ├── grafico.csv
        ├── paises.csv
        ├── dispositivos.csv
        └── aparicion-en-busquedas.csv
```

---

## Qué contiene cada documento

### `archwise-content-inventory.md`
Inventario completo de los 31 artículos publicados (article-01 a article-31) con:
- Título, slug efectivo (del frontmatter), fecha de publicación.
- Tesis principal y descripción editorial.
- Cluster principal y clusters secundarios.
- Intención del artículo (diagnóstico, definición, comparación, diseño, implementación, governance, operación, medición).
- Conceptos estratégicos tratados.
- Artículos referenciados en el cuerpo del texto (cuando detectables).
- Posible artículo pilar al que pertenece.
- Registro de inconsistencias encontradas.

**Fuente de verdad**: frontmatter `slug:` de cada `article.md` en `content/enterprise-ai/`.

---

### `archwise-cluster-map.md`
Mapa de los 12 clusters editoriales del corpus, mapeados sobre las 6 capas del Framework Archwise:

1. AI-Ready Systems y Modernización de Legacy
2. Context Engineering
3. Prompt Engineering
4. Knowledge Debt
5. Organizational Memory y Memory Architecture
6. AI Governance
7. AI Operating Model
8. AI-Augmented Teams
9. AI-Native Organizations
10. Agentic AI
11. Integración, Coherencia y Madurez Operativa
12. Framework Archwise

Para cada cluster incluye: definición, artículo pilar, artículos de apoyo, grado de cobertura, solapamientos, huecos editoriales, calidad del enlazado interno y consultas de Search Console relacionadas.

---

### `search-console-analysis-2026-07-24.md`
Análisis completo de los datos exportados de Google Search Console el 2026-07-24, cubriendo el periodo 2026-05-28 a 2026-07-21 (~55 días). Incluye:
- Análisis del gráfico temporal de impresiones y clics.
- Tabla completa de páginas con posición, clics, CTR e interpretación.
- Análisis detallado de cada consulta relevante.
- Análisis geográfico y por dispositivo.
- Síntesis de señales positivas y de alerta.
- Clasificación SEO de cada consulta (marca, oportunidad validada, quick win, señal temprana, ruido).
- Acciones recomendadas por página.

**Importante**: Los datos de `aparicion-en-busquedas.csv` están vacíos en esta exportación.

---

### `archwise-seo-backlog.md`
Backlog editorial y SEO dividido en cuatro secciones:

**A. Correcciones sobre contenido existente** — 5 ítems (corrección de fecha, mejoras de meta descripción, verificación de indexación).  
**B. Mejoras de enlazado interno** — 5 ítems (enlaces entre clusters, secciones de "continúa leyendo").  
**C. Posibles artículos nuevos** — 6 propuestas con título provisional, búsqueda que responde, cluster, artículo pilar que refuerza, artículos enlazantes y motivo estratégico.  
**D. Temas que no deberían abordarse todavía** — 5 territorios con justificación y condición de revisión.

---

## Fecha de los datos y periodo cubierto

| Elemento | Detalle |
|----------|---------|
| Exportación de Search Console | 2026-07-24 |
| Inicio del periodo de datos | 2026-05-28 |
| Fin del periodo de datos | ~2026-07-21 |
| Duración del periodo | ~55 días |
| Primera impresión registrada | 2026-05-30 (1 impresión) |
| Pico de impresiones | 2026-06-17 (116 impresiones) |

---

## Metodología empleada

### Inventario del corpus
1. Se listaron todos los archivos `article.md` en `content/enterprise-ai/article-XX/`.
2. Se leyó el frontmatter completo de cada artículo.
3. Se leyeron los primeros párrafos de cada artículo para confirmar la tesis principal.
4. El **slug efectivo** se extrae del campo `slug:` del frontmatter, no del nombre de carpeta ni de la URL del sitio.
5. Los **clusters** se asignan comparando el campo `cluster:` del frontmatter con la arquitectura de capas documentada en `docs/framework-architecture.md`.

### Modelo de clusters
1. Se parte de los clusters documentados en `docs/framework-architecture.md` (6 capas causales).
2. Se contrasta con el contenido real de los artículos, identificando artículos que cruzan múltiples clusters.
3. Se añaden los territorios mencionados en el brief de análisis que no tienen un mapeo directo en las 6 capas (Prompt Engineering, Knowledge Debt, AI-Native Organizations, AI-Augmented Teams).

### Análisis de Search Console
1. Se leyeron los 6 archivos CSV exportados: consultas, páginas, gráfico, países, dispositivos, aparición en búsquedas.
2. Se mapeó cada URL de GSC al artículo correspondiente usando el slug del frontmatter.
3. Las consultas se clasificaron siguiendo criterios explícitos: no se asumió que toda impresión es una oportunidad.
4. Se evaluó la coherencia de cada consulta con el posicionamiento estratégico de Archwise antes de recomendar acción.

### Matriz estratégica y backlog
1. Se priorizaron las acciones combinando: posición en GSC, impresiones, 0 clics con posición < 10 como señal de "quick win en CTR", y huecos editoriales del mapa de clusters.
2. Las propuestas de artículos nuevos se basan en huecos reales del corpus, no en hipótesis de volumen de búsqueda.

---

## Limitaciones de la muestra

| Limitación | Impacto |
|------------|---------|
| Solo 55 días de datos | Las posiciones pueden fluctuar significativamente con más tiempo |
| Solo 4 clics totales | Las métricas de CTR no son estadísticamente significativas |
| `aparicion-en-busquedas.csv` vacío | No se puede analizar tipos de aparición en SERP |
| Datos de Google Search Console (no de Bing, etc.) | Solo refleja el tráfico orgánico de Google |
| Volumen de búsqueda no disponible | No hay datos de volumen de búsqueda mensual de las consultas |
| Impresiones deduplicadas no verificadas | La suma de impresiones por página puede diferir del total por deduplicación interna de GSC |
| Articles 02 y 03 sin impresiones GSC | Puede haber artículos publicados que GSC no está asociando con consultas |
| Posición media con pocos datos | Una posición "1" para "knowledge debt" con 1 sola impresión puede ser anecdótica |

---

## Cómo repetir el análisis en la siguiente exportación

### Paso 1: Exportar datos de Search Console
1. Acceder a [Google Search Console](https://search.google.com/search-console/) para la propiedad `archwise.org`.
2. En el panel **Resultados de búsqueda**, seleccionar el rango de fechas deseado.
3. Exportar las siguientes vistas a CSV:
   - **Consultas principales** → `consultas.csv`
   - **Páginas principales** → `paginas.csv`
   - **Gráfico** (vista de evolución temporal) → `grafico.csv`
   - **Países** → `paises.csv`
   - **Dispositivos** → `dispositivos.csv`
   - **Aparición en búsquedas** → `aparicion-en-busquedas.csv`
4. Guardar los archivos en `docs/seo/search-console/YYYY-MM-DD/` (fecha de exportación).

### Paso 2: Actualizar el inventario de corpus
1. Comprobar si hay nuevos artículos en `content/enterprise-ai/` desde la última exportación.
2. Para cada artículo nuevo, añadir una entrada en `archwise-content-inventory.md` siguiendo el formato existente.
3. Verificar si algún artículo existente ha cambiado slug, título o descripción.

### Paso 3: Actualizar el mapa de clusters
1. Verificar si los artículos nuevos pertenecen a clusters existentes o crean un cluster nuevo.
2. Actualizar la tabla de cobertura de cada cluster afectado.
3. Revisar si los huecos editoriales identificados han sido cubiertos.

### Paso 4: Crear el nuevo análisis de Search Console
1. Copiar la plantilla de `search-console-analysis-2026-07-24.md`.
2. Actualizar todos los datos con los de la nueva exportación.
3. Comparar posiciones con la exportación anterior: ¿qué páginas han subido, bajado o mantenido?
4. Comparar las consultas: ¿han aparecido nuevas? ¿Las señales tempranas se han convertido en quick wins?

### Paso 5: Actualizar el backlog
1. Marcar como completados los ítems del backlog que se hayan ejecutado.
2. Añadir nuevas propuestas basadas en los huecos detectados en la nueva exportación.
3. Revaluar prioridades según los nuevos datos.

### Paso 6: Actualizar este README
1. Actualizar la tabla de "Fecha de los datos y periodo cubierto".
2. Registrar si hay nuevos archivos en el directorio `docs/seo/`.

---

## Notas de contexto del proyecto

- **Estado del sitio (2026-07-24)**: 31 artículos publicados, 1 en preparación (article-32: brief aprobado).
- **Tecnología**: Angular SSG/SSR v21.2.0, deploy en Vercel.
- **Audiencia objetivo**: CTOs, arquitectos de software, tech leads y equipos de transformación digital.
- **Idioma del corpus**: Español (castellano).
- **Mercados principales observados en GSC**: España, México, Argentina, Colombia, Perú.
- **Mercado con más impresiones**: EE.UU. (200 impresiones, 0 clics).
