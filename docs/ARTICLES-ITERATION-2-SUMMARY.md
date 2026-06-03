# Archwise /articulos - Iteration 2 Refinements
## Executive Summary

**Fecha:** 2026-06-03  
**Estado:** ✅ VALIDATED - READY FOR DEPLOY  
**Cambios:** 3 refinamientos UX sin tocar rutas, slugs ni SEO

---

## Cambios Realizados

### 1️⃣ Reducción de "Empieza aquí": 9 → 5 items
**Razón:** Los 9 items causaban scroll excesivo y diluían foco

**Items finales (5):**
- Architecture MD vale más que prompts (fundamiento Context Engineering)
- Context Engineering vs Prompt Engineering (diferencia conceptual clave)
- Por qué fracasan iniciativas IA (expectativas organizacionales)
- AI Governance Framework (reglas y control)
- Context Systems (operativo - entregar contexto correcto)

**Impacto:** Página más enfocada, ruta clara de comprensión

---

### 2️⃣ Reordenamiento de secciones
**Antes:**
```
Hero → Anclas → Empieza aquí → Mapa framework → Últimos publicados
```

**Después:**
```
Hero → Anclas → Empieza aquí → Últimos publicados → Mapa framework
```

**Razón:** Últimos publicados (zona editorial activa) no es eclipsado por Mapa educativo

**Impacto:** Editor puede destacar content nuevo sin competencia visual

---

### 3️⃣ Visual mejorada del Mapa del framework
**Elementos añadidos:**
- Línea conectora izquierda (borde visual de secuencia)
- Hitos circulares por etapa (::before con accent color)
- Espaciado consistente (padding + border-left)
- Responsive móvil (escala proporcional)

**Etapas (4):**
1. Contexto y deuda de conocimiento
2. Gobierno y control
3. Modelo operativo
4. Memoria y Context Systems

**Impacto:** Percibido como educativo-secuencial, no como lista

---

## Validación Técnica

### Builds ✅
```
npm run build → OK
npm run build → OK
npm run build → OK
```

### Prerender Verificado ✅
- `/articulos` renderiza correctamente
- 5 items en Empieza aquí
- Anclas funcionan (#empieza-aqui, #ultimos-publicados, #mapa-framework)
- 24 artículos en Últimos publicados
- 4 etapas con enlaces en Mapa del framework
- Sitemap correcto
- Canonical intacto

### Estado de Rutas y SEO ✅
- 27 rutas prerenderizadas
- `/articulos` → https://archwise.org/articulos (CANONICAL INTACTO)
- `/articulos/{slug}` → todos los 24 artículos activos
- No se modificaron slugs, routes, ni article.json

---

## Archivos Modificados

```
src/app/pages/articles/articles.component.ts
  - START_HERE_SEEDS: array de 9 → 5 items
  
src/app/pages/articles/articles.component.html
  - Reorden de secciones (Últimos ahora antes de Mapa)
  - Anclas en nuevo orden
  
src/app/pages/articles/articles.component.scss
  - Nuevo CSS para framework-stages con conectores
  - Grid layout coherente
  - Responsive mejorado
```

---

## Métrica de Cambio

| Métrica | Antes | Después | Δ |
|---------|-------|---------|---|
| Items Empieza aquí | 9 | 5 | -44% |
| Secciones | 5 | 5 | — |
| Rutas | 27 | 27 | — |
| Artículos indexados | 24 | 24 | — |
| SEO impact | ✅ | ✅ | None |

---

## Riesgos y Mitigaciones

| Riesgo | Severidad | Mitigación |
|--------|-----------|-----------|
| Hardcoding editorial | Media | Mover a config file (futura) |
| Mantenimiento al crecer corpus | Media | API de configuración (futura) |
| Mobile vertical largo | Baja | Responsive validado, 1 col |

---

## Recomendaciones Post-Deploy

1. **Monitoreo:** Observar scroll vs engagement en /articulos
2. **Analytics:** Trackear clicks en anclas (validar que funcionan UX flow)
3. **Feedback:** Recopilar datos de uso de Mapa del framework (¿educativo?)
4. **Scalability:** Planificar extracción de configuración editorial si corpus crece > 50 items

---

## Clasificación Final

### ✅ READY FOR DEPLOY

- Builds validados (3 ejecuciones exitosas)
- Prerender verificado
- SEO intacto
- No hay breaking changes
- UX coherente

---

**Next step:** Deploy a producción cuando sea apropiado.
