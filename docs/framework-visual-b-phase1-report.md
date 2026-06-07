# Framework Visual B — Phase 1 Report

Fecha: 2026-06-07
Estado: READY FOR VISUAL B PHASE 2
Alcance ejecutado: Sprint Visual B — Fase 1 (Quick Wins lingüísticos + CA-5)

---

## 1. Cambios aplicados

### CA-1 — Renombrado heading de sección Capas
- Archivo: `framework-layer-detail.component.html`
- Antes: `Capas (detalle)`
- Después: `Qué habilita cada capa`
- Efecto: eliminado lenguaje de especificación técnica. El heading ahora responde a una pregunta de decisión.

### CA-5 — Eliminación de warnings técnicos en flujo primario
- Archivos: `framework-layer-detail.component.html`, `framework-reading-path.component.html`
- Eliminados:
  - Bloque `@if (unresolvedCount > 0)` con mensaje "Se detectaron N slug(s) sin resolver..." en cabecera de sección.
  - Bloque `@if (layer.unresolvedSlugs.length > 0)` con "Slugs no resueltos en esta capa: ..." por cada capa expandida.
  - Bloque `@if (unresolvedSlugs.length > 0)` con "Slugs no resueltos en ruta: ..." en el reading path.
- Los `console.warn` en el TypeScript se mantienen intactos para depuración en desarrollo.
- Efecto: el flujo de lectura estratégica queda libre de señales de estado interno.

### VO-1 — Renombrado heading de Vocabulario
- Archivo: `framework-vocabulary.component.html`
- Antes: `Vocabulario minimo`
- Después: `Lenguaje del framework`
- Efecto: el bloque deja de percibirse como glosario documental y se posiciona como clave de lectura del sistema.

### CO-2 — CTAs de Continuidad descriptivos
- Archivos: `framework.types.ts`, `framework.data.ts`, `framework-continuity.component.html`
- Añadido campo `linkLabel?: string` al tipo `FrameworkContinuityCta`.
- Valores añadidos en data:
  - `go-articles` → `linkLabel: 'Explorar los 29 artículos →'`
  - `go-manifesto` → `linkLabel: 'Leer el Manifesto →'`
  - `newsletter-soon` → `linkLabel: 'Unirme cuando esté disponible'`
- Template actualizado: botones y enlaces usan `cta.linkLabel || cta.label` en lugar de texto fijo `"Ir"`.
- Efecto: conversión desde continuidad con copy accionable. Elimina el CTA más genérico de la página.

### NV-1 — Heading de resultado de ruta como decisión tomada
- Archivo: `framework-navigator.component.html`
- Antes: `Ruta recomendada para esta combinacion` + párrafo de contexto separado.
- Después: `Tu ruta: [Perfil] → [Intención]` (dinámico, interpolado).
- Párrafo `.framework-route-context` eliminado (información incorporada en el heading).
- Regla CSS `.framework-route-context` eliminada del SCSS (CSS muerto).
- Efecto: momento visual de "decisión tomada". El Navigator se percibe como asesor, no como buscador con parámetros.

### NV-3 — Fallback: tono informativo en lugar de advertencia
- Archivos: `framework-navigator.component.html`, `framework-navigator.component.scss`
- Copy antes: `"Fallback activo. No existe una ruta exacta para esta combinacion. Se muestra la opcion mas cercana para avanzar sin bloquearte."`
- Copy después: `"No existe una ruta exacta para esta combinación. Mostramos la opción más próxima para que puedas avanzar."`
- Paleta antes: amber (#fff8ea fondo, #f0d7a3 borde, #7d5a14 texto).
- Paleta después: azul-gris informativo (#f4f7fb fondo, #c5d5e8 borde, #2c4a68 texto).
- Efecto: el fallback se percibe como orientación del sistema, no como estado de error.

---

## 2. Archivos modificados

| Archivo | Cambio(s) |
|---------|-----------|
| `framework-layer-detail.component.html` | CA-1, CA-5 |
| `framework-reading-path.component.html` | CA-5 |
| `framework-vocabulary.component.html` | VO-1 |
| `framework.types.ts` | CO-2 |
| `framework.data.ts` | CO-2 |
| `framework-continuity.component.html` | CO-2 |
| `framework-navigator.component.html` | NV-1, NV-3 |
| `framework-navigator.component.scss` | NV-1 (CSS muerto), NV-3 |

Total: 8 archivos.

---

## 3. Builds

| Build | Prerender | Exitcode | Nuevos errores |
|-------|-----------|----------|----------------|
| 1 | 33 rutas | 0 | Ninguno |
| 2 | 33 rutas | 0 | Ninguno |
| 3 | 33 rutas | 0 | Ninguno |

Warnings en los tres builds: preexistentes (NG8107 optional chain, NG8113 unused import, Sass @import deprecation, bundle budget). Ninguno introducido por Fase 1.

---

## 4. Validación de rutas

- `/framework` — 33 rutas prerenderizadas incluyen framework. Bundle `framework-component` presente en chunk `chunk-2MTDSVDU.js` (39.72 kB, -0.87 kB respecto a build previo por eliminación de CSS muerto y warnings HTML).
- `/articulos` — chunk sin modificaciones, build limpio.
- `/manifesto` — chunk sin modificaciones, build limpio.

---

## 5. Issues encontrados

Ninguno. Todos los cambios son de copy/template/SCSS mínimo. No se introdujeron nuevos errores de compilación ni regresiones de tipo.

Nota: Los warnings preexistentes (NG8107, budget exceeded por 1 kB) son anteriores a esta fase y están fuera del alcance de Sprint Visual B.

---

## 6. Cambios NO ejecutados en Fase 1

Los siguientes cambios de la spec están correctamente fuera de Fase 1:
- MC-1, MC-2 (conectores de mapa) — Fase 2
- MC-3, MC-4 (microcopy y diferenciación de nodos) — Fase 2
- NV-2 (grid de intenciones) — Fase 2
- NV-4 (color reading path) — Fase 2
- NV-5 (separador de progreso) — Fase 2
- CA-2 (doble borde), CA-3 (copy toggle), CA-4 (framing causal) — Fase 2/3
- VO-2, VO-3, VO-4 — Fase 2/3
- CO-1, CO-3, CO-4 — Fase 2/3

---

## 7. Estado final

READY FOR VISUAL B PHASE 2
