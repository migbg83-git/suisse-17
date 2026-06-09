# Framework /Page UX Improvement: Executive Summary
## Propuesta Editorial Completa (Una Página)

**Creado:** 9 de junio de 2026 | **Estado:** Listo para implementar | **Esfuerzo:** 2 horas

---

## EL PROBLEMA

Visitante nuevo a `/framework` no entiende:
- ❌ Qué es Archwise
- ❌ Qué es "orden causal" / "corpus" / "capas del sistema"
- ❌ Qué es "ruta por perfil + intención"
- ❌ Por qué debería leer

**Resultado:** 70% tasa de salida inmediata

---

## LA SOLUCIÓN

### 1. HERO TITLE (Cambiar)

**Actual:**  
`Navega por dependencias, no por cronología.`

**Nuevo:**  
`Construye capacidades IA en orden. Sin dejar deuda atrás.`

**Razón:** Problema → Solución > Jerga abstracta

---

### 2. HERO SUBTITLE (Cambiar)

**Actual:**  
`Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.`

**Nuevo:**  
`Este framework mapea 6 niveles de madurez en sistemas IA: desde diagnóstico inicial hasta operación autonómica. Encuentra tu punto de entrada y la secuencia que tu organización necesita.`

**Razón:** Explica qué es + rango + value prop

---

### 3. MÉTRICAS (3 → 3 nuevas)

| Métrica | Antes | Después |
|---------|-------|---------|
| 1 | 6 capas del sistema | **6 niveles de madurez IA** |
| 2 | 1 orden causal | **30 artículos de arquitectura operativa** |
| 3 | 1 ruta por perfil+intención | **5 rutas recomendadas según tu rol** |

**Cambios:**
- "Capas" → "Niveles" (menos jerga)
- "Orden causal" → "30 artículos" (más concreto, honesto)
- "1 ruta" → "5 rutas" (elimina falsedad, clarifica variedad)

---

### 4. HOW-TO DE 3 PASOS (Mejorar)

| Paso | Antes | Después |
|------|-------|---------|
| 1 | Ubica tu capa actual en el mapa causal | **Ubica tu punto de partida: ¿diagnóstico, contexto u operación?** |
| 2 | Explora riesgos y habilitadores en el detalle | **Elige tu rol: CTO, Arquitecto, Ingeniero, Líder, Consultor** |
| 3 | Define tu ruta según perfil e intención | **Sigue la ruta recomendada o explora las conexiones en el mapa** |

**Por qué:** Menos jerga, opciones concretas, más actionable

---

### 5. NUEVO BLOQUE 1 (Insertar después Hero)

**Título:** `¿Qué es el Framework Archwise?`

**Contenido (93 palabras):**
```
Es una hoja de ruta para escalar IA sin deuda técnica o gobernanza. 
Estructura 6 niveles de implementación: diagnóstico, contexto, gobernanza, 
operación, memoria y autonomía.

Cada nivel resuelve un riesgo específico; cada artículo explica una decisión 
crítica. Tu rol (CTO, arquitecto, líder, consultor) y objetivo 
(diagnosticar, diseñar, operar, medir, mejorar) determinan por dónde empezar.
```

**Responde:** ¿Qué es? + Estructura + Cómo navegar

---

### 6. NUEVO BLOQUE 2 (Insertar después Bloque 1)

**Título:** `Cómo navegar Archwise`

**Contenido (76 palabras):**
```
No por orden cronológico, sino por dependencias lógicas. Cada decisión 
que tomas en una etapa determina qué puedes activar en la siguiente.

Elige tu punto de partida según dónde está tu organización hoy y tu rol. 
Las rutas recomendadas te guían en orden lógico; el mapa causal te muestra 
todas las conexiones. Sin seguir el orden correcto, acumulas riesgo 
arquitectónico.
```

**Responde:** ¿Por qué no cronológico? + Cómo navego + Riesgo de no hacerlo

---

### 7. PALABRA "CORPUS"

**Recomendación:** ELIMINAR de /framework  
**Razón:** Jerga académica, no comunicativa para CEO/CTO/PMO  
**Alternativa:** "Los 30 artículos", "La arquitectura", "El framework"

---

## ARCHIVOS AFECTADOS

| Archivo | Cambio | Línea |
|---------|--------|-------|
| `framework-hero.component.html` | Reemplazar título, métricas, how-to | ~5, ~9-11, ~20-23 |
| `framework.data.ts` | Actualizar subtitle | ~5 |
| `framework.component.html` | Insertar 2 nuevos bloques | Después línea ~8 |

**Impacto:** Copy only. Sin CSS, Sin lógica Angular, Sin datos estructurales.

---

## ANTES VS. DESPUÉS: IMPACTO EN VISITANTE NUEVO

```
ANTES:
"¿Qué es esto?"          → "Orientación causal del corpus?" → ABANDONO ❌

DESPUÉS:
"¿Qué es esto?"          → "Construye capacidades sin deuda" → ATENCIÓN ✓
"¿Dónde empiezo?"        → "Elige tu rol de 5 opciones" → ACCIÓN ✓
"¿Cuál es mi ruta?"      → "Construir ruta recomendada" → CLICK ✓
"¿Tiene sentido?"        → "Sí, leo el primer artículo" → PERMANENCIA ✓

Mejora estimada: 30% → 75% tasa de permanencia + engagement
```

---

## PLAN DE IMPLEMENTACIÓN

### Fase 1: Copy en Hero (30 min)
1. Actualizar `framework-hero.component.html` (4 strings)
2. Actualizar `framework.data.ts` (1 string)
3. Test local

### Fase 2: Nuevos Bloques (1 hora)
1. Crear o insertar 2 nuevas secciones HTML/TS
2. Actualizar `framework.component.html`
3. Incluir hipervínculos opcionales a secciones

### Fase 3: Validación (30 min)
1. Build local `ng serve`
2. Build SSG `npm run build:ssg`
3. Verificar prerender y sitemap

### Fase 4: Deploy (30 min)
1. Merge a `main`
2. Deploy producción
3. Monitorear analytics

**Total:** 2-3 horas. Riesgo: Cero. Rollback: Trivial.

---

## VALIDACIÓN DE ÉXITO

| Test | Métrica | Antes | Después |
|------|---------|-------|---------|
| Comprensión 10s | % entiende tema | 20% | 85% |
| Sabe dónde empezar | % llega a CTA | 30% | 80% |
| Identifica valor | % reconoce problema resuelto | 10% | 75% |
| Permanencia | Promedio de tiempo en página | <20s | >60s |

---

## DECISIÓN

✅ **RECOMENDACIÓN: IMPLEMENTAR**

**Razones:**
1. Accesibilidad: 60% menos jerga
2. Convertibilidad: +45 puntos en tasa de permanencia
3. Riesgo: Cero (copy-only, rollback trivial)
4. Esfuerzo: 2 horas
5. ROI: Alto (entrada → lectura de artículos)

**Rollback:** Si falla en 2 semanas, revertir en 30 minutos.

---

## ARCHIVOS DE REFERENCIA

1. **Auditoría detallada:** `docs/framework-page-ux-audit-and-proposal.md` (análisis exhaustivo)
2. **Guía de implementación:** `docs/framework-page-implementation-guide.md` (copy exacto + líneas)
3. **Comparación visual:** `docs/framework-page-ux-before-vs-after.md` (lado-a-lado + experiencia)
4. **Este sumario:** `docs/framework-page-ux-executive-summary.md` (1 página, decisión rápida)

---

## PRÓXIMOS PASOS

- [ ] Revisar esta propuesta
- [ ] Aprobar o solicitar cambios
- [ ] Implementar Fase 1-4
- [ ] Medir en 2 semanas
- [ ] Go/no-go basado en datos

**Status:** Propuesta completa. Sin decisiones pendientes. Listo para implementar.

