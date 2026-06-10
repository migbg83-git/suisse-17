# Project State Report — Enterprise AI Cluster
Fecha: 2026-06-10

Actualización operativa: 2026-06-04 (post-publicación de article-27)
Actualización operativa: 2026-06-05 (post-publicación de article-28)
Actualización operativa: 2026-06-06 (post-publicación de article-29)
Actualización operativa: 2026-06-08 (post-publicación de article-30 y cierre fundacional)

---

## Executive Summary

El clúster Enterprise AI de Archwise ha alcanzado su **hito fundacional con 30 artículos publicados** y la página **/framework** operando con cobertura total (30/30). La publicación del Article-30 ("De la integración a la coherencia...") establece la jerarquía conceptual definitiva: **System Coherence** como principio rector e **Interface Integrity** como mecanismo de preservación. El sitio se encuentra en estado operativo pleno, con un pipeline de build optimizado y 34 rutas prerrenderizadas validadas.

---

## Actualizaciones Operativas Recientes

### Article-30 (Capstone Fundacional)
Fecha: 2026-06-08
Estado: PUBLISHED
- **Slug:** `integracion-coherencia-principio-rector-mecanismo-arquitectonico`
- **Conceptos clave:** System Coherence, Interface Integrity.
- **Hito:** Cierre de la etapa fundacional 01-30.
- **Integración:** Incorporado en la Capa 6 del Framework.

### Article-29
Fecha: 2026-06-06
Estado: PUBLISHED
- **Slug:** `integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas`
- **Conceptos:** Sequence Integrity, Evidence Integrity, Coherence Signals.

### Article-28
Fecha: 2026-06-05
Estado: PUBLISHED
- **Slug:** `measurement-system-integracion-madurez-operativa`
- **Conceptos:** System Health, Coherence Signals, Integration Health.

### Article-27
Fecha: 2026-06-04
Estado: PUBLISHED
- **Slug:** `arquitectura-adopcion-framework-archwise-orden-activacion`
- **Concepto:** Activation Debt.

---

## Estado Técnico

### Infraestructura

| Componente | Estado | Notas |
|------------|--------|-------|
| Angular SSG/SSR | ✅ Operativo | v21.2.0 |
| Vercel deploy | ✅ Configurado | Deploy automático sincronizado |
| SEO (OG, meta, sitemap) | ✅ Funcional | Pipeline build:seo integrado en build |
| SEO interno (Related) | ✅ Validado | Bloques visibles en HTML estático (30/30) |
| Robots.txt | ✅ Correcto | Apunta a sitemap raíz |

### Build Pipeline

| Comando | Estado | Notas |
|---------|--------|-------|
| `npm run build:content` | ✅ OK | Procesa 30 artículos |
| `npm run build:seo` | ✅ OK | Genera sitemap con 34 URLs |
| `npm run build:ssg` | ✅ OK | 34 rutas prerrenderizadas (Exit code 0) |

### Technical State (Snapshot)
- **Total rutas SSG:** 34 (/, /manifesto, /articulos, /framework + 30 artículos).
- **Related Articles:** Flujo `forkJoin` en `ArticleDetailComponent` garantiza carga en build-time.
- **Presupuesto bundle:** Ajustado a 520kB (warning) / 600kB (error) para soportar el crecimiento del JSON de contenido.
- **Sitemap:** Corregido para incluir `/framework` y todos los artículos hasta el 30.

---

## Estado Editorial

### Inventario del Corpus (01-30)

| ID | Título | Categoría | Estado |
|----|--------|-----------|--------|
| 01 | architecture.md vs prompts | Context Engineering | ✅ |
| 02 | Deuda técnica e IA | Technical Debt | ✅ |
| 03 | Documentación para LLM | Context Engineering | ✅ |
| 04 | Arquitectura Estratégica | Architecture Strategy | ✅ |
| 05 | Technical vs Knowledge Debt | Technical Debt | ✅ |
| 06 | Context Engineering Legacy | Context Engineering | ✅ |
| 07 | Framework práctico CE | Context Engineering | ✅ |
| 08 | Plantillas architecture.md | Context Engineering | ✅ |
| 09 | Architecture Review efectiva | Governance | ✅ |
| 10 | Contexto compartido | Governance | ✅ |
| 11 | Sistemas no preparados | AI-Ready Systems | ✅ |
| 12 | 7 características AI-Ready | AI-Ready Systems | ✅ |
| 13 | AI-Ready vs Legacy | AI-Ready Systems | ✅ |
| 14 | Por qué PE no es suficiente | Context Engineering | ✅ |
| 15 | CE vs PE | Context Engineering | ✅ |
| 16 | AI-Augmented Teams | Enterprise AI | ✅ |
| 17 | AI-Native Organizations | Enterprise AI | ✅ |
| 18 | Fracaso de iniciativas IA | Enterprise AI | ✅ |
| 19 | Transformation Roadmap | Enterprise AI | ✅ |
| 20 | AI Governance Framework | Governance | ✅ |
| 21 | AI Operating Model | Enterprise AI | ✅ |
| 22 | Organizational Memory | Enterprise AI | ✅ |
| 23 | Memory Architecture | Enterprise AI | ✅ |
| 24 | Context Systems | Enterprise AI | ✅ |
| 25 | Agentic AI | Enterprise AI | ✅ |
| 26 | Integración de capacidades | Enterprise AI | ✅ |
| 27 | Arquitectura de adopción | Enterprise AI | ✅ |
| 28 | Measurement System | Enterprise AI | ✅ |
| 29 | Integridad de Secuencia | Enterprise AI | ✅ |
| 30 | Capstone: Coherencia | Enterprise AI | ✅ |

### Distribución por Categoría

| Categoría | Artículos |
|-----------|-----------|
| Enterprise AI | 14 |
| Context Engineering | 7 |
| Governance | 3 |
| AI-Ready Systems | 3 |
| Technical Debt | 2 |
| Architecture Strategy | 1 |

---

## Framework Deployment (30/30)

La página `/framework` es el núcleo de navegación estratégica del sitio.

**Estructura de Capas:**
1. **Diagnóstico AI-Ready:** 4 artículos (11, 12, 13, 18).
2. **Contexto y Knowledge Debt:** 9 artículos (01, 03, 06, 07, 08, 14, 15, 02, 05).
3. **Governance:** 4 artículos (09, 10, 20, 04).
4. **AI Operating Model:** 4 artículos (16, 17, 21, 19).
5. **Organizational Memory:** 2 artículos (22, 23).
6. **Context Systems y Capacidad Agéntica:** 7 artículos (24, 25, 26, 27, 28, 29, 30).

**Validación Producción (2026-06-10):**
- ✅ Cobertura completa: Article-30 integrado como pieza de cierre en Capa 6.
- ✅ Navigator: Genera rutas personalizadas para los 5 perfiles definidos.
- ✅ Vocabulario: Incluye los términos core del sistema (Integridad, Coherencia, Deuda).

---

## Riesgos y Deuda Técnica Activa

| Riesgo | Severidad | Mitigación |
|--------|-----------|------------|
| Mismatches de Slugs | **Crítico** | Normalizar tildes en `framework.data.ts` (Arts 01, 03, 12). |
| Sitemap Stale en Vercel | Importante | Investigar persistencia de caché en `archwise.org/sitemap.xml`. |
| Errores en Art 11 | Importante | Ejecutar saneamiento lingüístico en el MD fuente. |
| Logs de Debug | Opcional | Limpiar `console.log` residuales de diagnósticos previos. |

---

## Decisiones Recientes (Junio 2026)

| Decisión | Contexto | Impacto |
|----------|----------|---------|
| Cierre de etapa fundacional | Finalización del corpus 01-30 | Estabilización del marco teórico core. |
| Jerarquía Coherencia > Integridad | Article-30 | Define el principio rector para todos los futuros artículos. |
| Autoría "Miguel Benito García" | Consistencia | Atribución unificada para todo el clúster fundacional. |
| Pipeline build:content | SEO Interno | Inclusión obligatoria de RelatedArticles en la serialización JSON. |

---

## Próximos Pasos

### Inmediatos (Prioridad Alta)
1. **Normalización de Slugs en UI:** Corregir las tildes en `framework.data.ts` para asegurar que la navegación desde `/framework` no devuelva 404 para artículos clave.
2. **Saneamiento lingüístico Article-11:** Corregir errores ortográficos que se propagan a los metadatos y al Navigator.
3. **Investigación de Sitemap:** Forzar regeneración o limpieza de caché en Vercel para que `/framework` aparezca en el listado raíz.

### Medio Plazo
4. **Internal Linking Fase 2:** Conectar los 11 artículos que aún no tienen relacionados explícitos en su `article.json`.
5. **Definición de Article-31:** Iniciar la etapa post-fundacional con temas de coordinación inter-departamental.

### Backlog
6. Implementación de RSS Feed.
7. Internacionalización (ES -> FR -> EN).
8. Automatización de validación de slugs entre MD y Framework Data.

---

## Recomendaciones

### Para el mantenimiento del Framework
- Cualquier cambio en los títulos o slugs de los artículos 01-30 debe replicarse inmediatamente en `framework.data.ts`.
- No añadir nuevas capas al framework sin una revisión de la arquitectura de dependencias causales.

### Para la IA Asistente
- Antes de proponer un nuevo artículo, verificar que se alinea con la tesis de **System Coherence** definida en el Article-30.
- Mantener la sobriedad técnica: evitar el hype y centrarse en la arquitectura organizativa.

---

**Snapshot generado el 2026-06-10.** Estado del proyecto: **Operativo y Fundacionalmente Completo.**