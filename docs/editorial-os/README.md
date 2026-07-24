# Archwise Editorial Operating System

> Versión: 1.0  
> Creado: 2026-07-24  
> Naturaleza: Sistema permanente de gestión editorial y SEO

---

## Qué es esto

El Editorial OS de Archwise es el sistema de referencia para tomar decisiones sobre crecimiento editorial y autoridad temática.

No es un informe puntual. Es un sistema vivo.

No está centrado en artículos. Está centrado en **conceptos, clusters y autoridad temática**.

Cada artículo es una pieza del sistema. El sistema es lo que importa.

---

## Arquitectura del sistema

```
docs/editorial-os/
│
├── README.md                        ← Este archivo. Arquitectura y guía de uso.
│
├── dashboard.md                     ← Vista ejecutiva del estado del sistema.
│                                      Se actualiza con cada exportación GSC o publicación.
│
├── clusters/                        ← Un documento por cluster temático.
│   ├── README.md                    ← Índice y guía de lectura de clusters.
│   ├── ai-ready-systems.md
│   ├── context-engineering.md
│   ├── prompt-engineering.md
│   ├── knowledge-debt.md
│   ├── organizational-memory.md
│   ├── ai-governance.md
│   ├── ai-operating-model.md
│   ├── ai-augmented-teams.md
│   ├── ai-native-organizations.md
│   ├── agentic-ai.md
│   ├── integracion-coherencia.md
│   └── framework-archwise.md
│
├── seo/                             ← Señales y datos de Search Console.
│   ├── current-signals.md           ← Señales activas (reemplazable mensualmente).
│   └── history/                     ← Snapshots de cada exportación GSC.
│       └── 2026-07-24.md
│
├── roadmap/                         ← Qué hacer y en qué orden.
│   └── roadmap.md
│
├── playbooks/                       ← Procedimientos reutilizables.
│   ├── nuevo-articulo.md
│   ├── actualizar-articulo.md
│   ├── revision-search-console.md
│   ├── revision-cluster.md
│   ├── enlazado-interno.md
│   └── publicacion-linkedin.md
│
├── history/                         ← Registro de decisiones editoriales pasadas.
│   └── 2026-07-24-baseline.md
│
└── templates/                       ← Plantillas para nuevos documentos.
    ├── cluster-template.md
    ├── article-brief-template.md
    └── seo-snapshot-template.md
```

---

## Por qué existe cada componente

### `dashboard.md`
La primera pantalla del sistema. Responde a las diez preguntas clave del estado editorial en un solo archivo. Se actualiza mensualmente o tras cada publicación significativa. Es el único archivo que cualquier persona del equipo necesita leer para entender dónde está Archwise.

### `clusters/`
La unidad de trabajo principal del sistema. Cada cluster es un territorio temático que Archwise quiere poseer. Los artículos son subproductos de los clusters, no al revés. Este directorio reemplaza el modelo de "gestión por artículo".

### `seo/`
Señales de Google separadas del análisis editorial. El archivo `current-signals.md` siempre contiene los datos más recientes. Las exportaciones anteriores se archivan en `history/` para comparación.

### `roadmap/`
Decisiones priorizadas y ordenadas por horizonte temporal. No es un backlog plano: es un sistema de decisiones con contexto causal. Se revisa trimestralmente.

### `playbooks/`
Procedimientos operativos reutilizables. Cada playbook responde a "¿qué hago cuando...?". Se crean una vez y se actualizan solo cuando el proceso cambia. Eliminan la necesidad de preguntar cómo actuar en situaciones repetibles.

### `history/`
Registro de decisiones editoriales pasadas. No es un diario: es una memoria de decisiones con su contexto y razonamiento. Sirve para no repetir errores y para entender por qué el sistema está como está.

### `templates/`
Plantillas estandarizadas para crear nuevos clusters, briefs de artículos y snapshots de SEO. Garantizan consistencia cuando el sistema crece.

---

## Reglas del sistema

### Sobre los datos
- Todo dato se etiqueta como: `HECHO`, `INFERENCIA`, `HIPÓTESIS` o `RECOMENDACIÓN`.
- Una recomendación basada en 1 impresión no tiene el mismo peso que una basada en 100 impresiones.
- Cuando no hay datos suficientes: **PENDIENTE DE EVIDENCIA**.

### Sobre los artículos
- Los artículos no se modifican desde este sistema.
- Los slugs, títulos y metadescripciones son inmutables desde aquí.
- Las propuestas de cambio se registran en el roadmap como RECOMENDACIÓN, no como acción inmediata.

### Sobre la actualización
- `dashboard.md` → mensual o tras cada publicación nueva.
- `clusters/*.md` → cuando se publique un artículo nuevo que afecte al cluster.
- `seo/current-signals.md` → cada exportación de GSC.
- `roadmap/roadmap.md` → trimestral o cuando se ejecuten acciones del roadmap actual.
- `playbooks/` → solo cuando cambie el proceso.
- `templates/` → prácticamente estable.
- `history/` → acumulativo, nunca se borra.

---

## Documentos anteriores y su estado

Los documentos generados en el análisis inicial de 2026-07-24 tienen el siguiente estado:

| Documento | Ubicación | Estado en el OS |
|-----------|-----------|-----------------|
| `archwise-content-inventory.md` | `docs/seo/` | **Archivado** → el inventario vive ahora en los clusters |
| `archwise-cluster-map.md` | `docs/seo/` | **Integrado** → reemplazado por `clusters/*.md` |
| `search-console-analysis-2026-07-24.md` | `docs/seo/` | **Archivado** → snapshot en `seo/history/2026-07-24.md` |
| `archwise-seo-backlog.md` | `docs/seo/` | **Integrado** → distribuido en `roadmap/` y `clusters/` |
| `docs/seo/README.md` | `docs/seo/` | **Mantener** → documentación de la exportación original |
