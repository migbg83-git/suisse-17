# Article-30 Integration Audit

Fecha: 2026-06-08  
Rol: Editor-in-Chief  
Alcance: auditoría de integración editorial de Article-30 dentro de Archwise

---

## Metodología

Se auditaron los siguientes archivos:

- `src/app/pages/framework/framework.data.ts`
- `src/app/app.routes.ts`
- `src/app/core/models/article.model.ts`
- `src/app/core/services/content.service.ts`
- `src/app/pages/article-detail/article-detail.component.ts`
- `src/assets/content/articles.json`
- `src/assets/content/articles/integracion-coherencia-principio-rector-mecanismo-arquitectonico.json`
- `content/enterprise-ai/article-26/article.json`
- `content/enterprise-ai/article-27/article.json`
- `content/enterprise-ai/article-28/article.json`
- `content/enterprise-ai/article-29/article.json`
- `content/enterprise-ai/article-30/article.json`

---

## A) ¿Dónde aparece actualmente Article-30?

1. `src/assets/content/articles.json`  
   Aparece como primer registro del array (posición 0), con slug, description, excerpt y html completos. El build:content lo incorporó correctamente.

2. `src/assets/content/articles/integracion-coherencia-principio-rector-mecanismo-arquitectonico.json`  
   Archivo individual generado por build:content. Accesible mediante ContentService.getArticleBySlug().

3. Rutas Angular (`app.routes.ts`)  
   La ruta `/articulos/:slug` es genérica; acepta cualquier slug sin modificación. Article-30 queda enrutable sin cambios en código de rutas.

4. Prerender SSG  
   Incluido en 34 rutas prerenderizadas. El index.html existe bajo `dist/archwise/browser/articulos/integracion-coherencia-principio-rector-mecanismo-arquitectonico/`.

5. Sitemap `public/sitemap.xml`  
   La URL canónica aparece correctamente: `https://archwise.org/articulos/integracion-coherencia-principio-rector-mecanismo-arquitectonico`.

6. `content/enterprise-ai/article-30/article.json`  
   Contiene relatedArticles apuntando hacia Articles 26, 27, 28 y 29.

---

## B) ¿Dónde debería aparecer y no aparece?

### B1. framework.data.ts — Layer-6 articleSlugs

**Estado:** Article-30 NO está en la lista de slugs de ninguna de las 6 capas.  
**Dónde debería estar:** Layer-6 (`Context Systems y capacidad agéntica`) es la capa de cierre operativo del corpus. Article-30 es el capstone fundacional de todo el sistema de capas y debería aparecer como último elemento de Layer-6.

### B2. framework.data.ts — vocabulary (terms)

**Estado:** El glosario contiene 5 términos:
- Sequence Integrity → Article-29
- Evidence Integrity → Article-28
- Coherence Signals → Article-28
- Context Debt → Article-25
- Activation Debt → Article-27

**Lo que falta:** Los dos conceptos nucleares introducidos en Article-30 no tienen entrada:
- `System Coherence` — principio rector; no aparece como término del glosario.
- `Interface Integrity` — mecanismo arquitectónico principal; no aparece como término del glosario.

### B3. framework.data.ts — pathMappings (rutas de lectura por perfil/intento)

**Estado:** Ninguno de los 5 pathMappings incluye el slug de Article-30.  
**Lo que falta:**

| Perfil | Intento | Justificación de inclusión |
|---|---|---|
| CTO | diagnosticar | Article-30 cierra con argumento de riesgo operativo tangible por degradación inter-dominio |
| Enterprise Architect | diseñar | Article-30 es el artículo de referencia para diseño jerárquico de coherencia |
| Transformation Leader | medir | Article-30 define qué medir: coherencia vs integración, validación por Signals |
| Consultor | corregir | Article-30 es la pieza más citable del corpus para diagnóstico de fallos sistémicos |

### B4. framework.data.ts — continuityCta con contador desactualizado

**Estado:** La continuityCta `go-articles` tiene el linkLabel:  
`'Explorar los 29 artículos →'`  
**Lo que falta:** debe actualizarse a `30 artículos` para que no contradiga la realidad del corpus publicado.

### B5. relatedArticles bidireccionales en Articles 26–29

**Estado:** Los `relatedArticles` de Articles 26, 27, 28 y 29 NO incluyen el slug de Article-30.  
**Lo que falta:** Article-30 cierra la tesis comenzada en Article-26; debe aparecer como artículo relacionado en sentido ascendente desde al menos Article-26, 27 y 29.

| Artículo | Relación con Article-30 | Bidireccionalidad actual |
|---|---|---|
| Article-26 | Article-30 integra y eleva su tesis de escalabilidad | ✗ ausente |
| Article-27 | Article-30 integra Activation Debt en jerarquía completa | ✗ ausente |
| Article-28 | Article-30 reubica Evidence Integrity en la jerarquía | ✗ ausente |
| Article-29 | Article-30 nombrado explícitamente como cierre de lo que inició Article-29 | ✗ ausente |

---

## C) ¿Qué referencias internas usan numeración en lugar de conceptos o títulos?

En `article-30/article.md`, todas las referencias a artículos anteriores usan numeración (`Article-26`, `Article-27`, `Article-28`, `Article-29`, `Article-30`) en lugar de slugs o títulos completos.

**Ocurrencias:**
- Línea 14: `Article-26 dejó claro que...` (4 menciones numeradas en esa misma línea)
- Línea 26: `Article-30 debe cerrar`
- Línea 52: `transición conceptual que Article-30 necesita completar`
- Línea 153: `Article-30 debe dejar este punto sin ambigüedad`
- Línea 206: `por qué Article-30 no trata de agregar complejidad`
- Línea 230: `Article-30 cumple una doble función`
- Línea 236: `Si Article-30 fuera solo cierre`
- Línea 244: `Esa es la tesis terminal de Article-30`
- Línea 246: `Por eso Article-30 es capstone y puente a la vez`

**Evaluación:**  
El uso de numeración en el texto editorial es un patrón que no rompe funcionalidad (los números no generan links en el HTML renderizado), pero limita la capacidad de los lectores de navegar directamente al artículo citado y reduce rastreabilidad para lectores no lineales. En el corpus, los artículos previos usan el mismo patrón numérico, por lo que no constituye una anomalía aislada de Article-30.

---

## D) ¿Qué cambios son necesarios para integrar correctamente Article-30 como capstone fundacional?

### Cambio D1 — framework.data.ts: añadir slug en Layer-6
```
Archivo: framework.data.ts
Sección: layers[5].articleSlugs (Layer-6)
Acción: añadir al final del array:
  'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
```

### Cambio D2 — framework.data.ts: añadir 2 términos al glosario (vocabulary)
```
Archivo: framework.data.ts
Sección: terms[]
Acción: añadir dos entradas:
  {
    id: 'system-coherence',
    term: 'System Coherence',
    definition: 'Principio rector que define el estado de alineación global que el sistema debe sostener entre decisiones, contexto, evidencia y ejecución.',
    articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
  },
  {
    id: 'interface-integrity',
    term: 'Interface Integrity',
    definition: 'Propiedad arquitectónica que preserva semántica, causalidad, trazabilidad y temporalidad cuando contexto, decisiones y evidencia cruzan interfaces entre capas, sistemas y actores.',
    articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
  }
```

### Cambio D3 — framework.data.ts: actualizar 4 pathMappings
```
Archivo: framework.data.ts
Sección: pathMappings[]
Acción: añadir slug en los pathMappings correspondientes a:
  - cto / diagnosticar
  - enterprise-architect / disenar
  - transformation-leader / medir
  - consultor / corregir
```

### Cambio D4 — framework.data.ts: actualizar continuityCta counter
```
Archivo: framework.data.ts
Línea 232: linkLabel: 'Explorar los 29 artículos →'
Cambio:    linkLabel: 'Explorar los 30 artículos →'
```

### Cambio D5 — article-29/article.json: añadir relatedArticle
```
Archivo: content/enterprise-ai/article-29/article.json
Sección: relatedArticles[]
Acción: añadir 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
Justificación: Article-29 es la pieza inmediatamente anterior al capstone; 
la relación es la más directa y explícita del corpus.
```

### Cambio D6 — article-26/article.json: añadir relatedArticle
```
Archivo: content/enterprise-ai/article-26/article.json
Sección: relatedArticles[]
Acción: añadir 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
Justificación: Article-26 inicia la tesis de integración; Article-30 la eleva.
```

---

## E) Impacto de cada cambio

| # | Cambio | Impacto operativo | Riesgo | Prioridad |
|---|---|---|---|---|
| D1 | Layer-6 slug | Article-30 aparece en la página /framework bajo su capa lógica | Ninguno | Alta |
| D2 | 2 términos glosario | System Coherence e Interface Integrity quedan vinculados desde /framework | Ninguno | Alta |
| D3 | 4 pathMappings | Rutas de lectura para CTO, Architect, Leader y Consultor incluyen el capstone | Ninguno | Alta |
| D4 | Counter continuityCta | Elimina la contradicción visible "29 artículos" en footer de /framework | Ninguno | Media |
| D5 | Article-29 relatedArticles | Lectores de Article-29 tienen acceso directo al cierre | Ninguno | Alta |
| D6 | Article-26 relatedArticles | Lectores de Article-26 pueden seguir la tesis hasta su cierre | Ninguno | Media |

---

## Resumen ejecutivo

### Estado actual de integración

| Punto de integración | Estado |
|---|---|
| articles.json (corpus) | ✓ presente |
| Ruta Angular /articulos/:slug | ✓ funcional (genérica) |
| Prerender SSG | ✓ generado |
| Sitemap | ✓ incluido |
| article.json con relatedArticles hacia 26-29 | ✓ correcto |
| framework.data.ts Layer-6 | ✗ ausente |
| framework.data.ts vocabulary | ✗ System Coherence e Interface Integrity ausentes |
| framework.data.ts pathMappings | ✗ ausente en todos los perfiles |
| framework.data.ts continuityCta counter | ✗ desactualizado (29 → 30) |
| relatedArticles en Article-29 | ✗ no apunta hacia Article-30 |
| relatedArticles en Article-26 | ✗ no apunta hacia Article-30 |

### Veredicto de integración

Article-30 está correctamente publicado pero **editorialmente incompleto** dentro del framework.

Existe en el corpus como artículo individual, pero no está conectado como capstone fundacional en ninguno de los puntos de navegación estructurada: Layer-6, glosario, rutas de lectura por perfil/intento o navegación inversa desde artículos predecesores.

Los 6 cambios listados en sección D son todos en un único archivo de datos (`framework.data.ts`) más dos archivos de contenido (`article-29/article.json`, `article-26/article.json`), sin impacto en rutas Angular, componentes o artículo publicado.
