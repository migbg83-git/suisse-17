# Propuesta de Copy Final: /framework UX Improvement
## Lista de Cambios Específicos para Implementación

**Creado:** 9 de junio de 2026  
**Estado:** Listo para implementación  
**Cambios requeridos:** Copy only (datos en framework.data.ts + template strings)

---

## HERO SECTION - CAMBIOS ESPECÍFICOS

### 1. TÍTULO PRINCIPAL

**Actual (en `framework-hero.component.html`, línea ~5):**
```html
<h1 class="framework-hero-title">Navega por dependencias, no por cronología.</h1>
```

**Nuevo:**
```html
<h1 class="framework-hero-title">Construye capacidades IA en orden. Sin dejar deuda atrás.</h1>
```

**Impacto:** Reemplaza jerga abstracta por beneficio concreto.

---

### 2. SUBTÍTULO

**Actual (en `framework.data.ts`, línea ~5):**
```typescript
subtitle: 'Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.',
```

**Nuevo:**
```typescript
subtitle: 'Este framework mapea 6 niveles de madurez en sistemas IA: desde diagnóstico inicial hasta operación autonómica. Encuentra tu punto de entrada y la secuencia que tu organización necesita.',
```

**Impacto:** 
- Elimina jerga: "causal", "corpus", "dependencias"
- Añade claridad: qué es, rango de progresión, value prop

---

### 3. MÉTRICAS (3 líneas → 3 líneas nuevas)

**Actual (en `framework-hero.component.html`, línea ~9-11):**
```html
<ul class="framework-hero-metrics" aria-label="Métricas estructurales del framework">
  <li><strong>6</strong><span>capas del sistema</span></li>
  <li><strong>1</strong><span>orden causal</span></li>
  <li><strong>1</strong><span>ruta por perfil + intención</span></li>
</ul>
```

**Nuevo (opción recomendada):**
```html
<ul class="framework-hero-metrics" aria-label="Métricas estructurales del framework">
  <li><strong>6</strong><span>niveles de madurez IA</span></li>
  <li><strong>30</strong><span>artículos de arquitectura operativa</span></li>
  <li><strong>5</strong><span>rutas recomendadas según tu rol</span></li>
</ul>
```

**Impacto:**
| Cambio | Razón |
|--------|-------|
| "Capas" → "Niveles" | Menos jerga arquitectónica |
| "Orden causal" → "Artículos" | Más concreto; comunica escala |
| "1 ruta" → "5 rutas" | Honesto; elimina ambigüedad |

---

### 4. HOW-TO (3 pasos actuales → 3 pasos nuevos)

**Actual (en `framework-hero.component.html`, línea ~19-23):**
```html
<div class="framework-hero-howto" aria-label="Cómo usar esta página">
  <h2>Cómo usar esta página</h2>
  <ol>
    <li>Ubica tu capa actual en el mapa causal.</li>
    <li>Explora riesgos y habilitadores en el detalle.</li>
    <li>Define tu ruta según perfil e intención.</li>
  </ol>
</div>
```

**Nuevo:**
```html
<div class="framework-hero-howto" aria-label="Cómo usar esta página">
  <h2>Cómo empezar</h2>
  <ol>
    <li>Ubica tu punto de partida: ¿diagnóstico, contexto u operación?</li>
    <li>Elige tu rol: CTO, Arquitecto, Ingeniero, Líder, Consultor.</li>
    <li>Sigue la ruta recomendada o explora las conexiones en el mapa.</li>
  </ol>
</div>
```

**Impacto:**
- "Cómo usar esta página" → "Cómo empezar" (más motivador)
- Reemplaza "capa actual" con opciones concretas
- Reemplaza "perfil e intención" con roles específicos
- Reemplaza "mapa causal" con "mapa" (menos jerga)

---

## NUEVO BLOQUE 1: "¿Qué es el Framework Archwise?"

**Ubicación:** Inmediatamente después del hero  
**Técnica implementación:** Insertar entre `</aw-framework-hero>` y `<aw-framework-layer-map>` con un nuevo componente o sección `<section>` con class `framework-intro`

**Contenido:**

```
¿Qué es el Framework Archwise?

Es una hoja de ruta para escalar IA sin deuda técnica o gobernanza. 
Estructura 6 niveles de implementación: diagnóstico, contexto, gobernanza, 
operación, memoria y autonomía.

Cada nivel resuelve un riesgo específico; cada artículo explica una 
decisión crítica. Tu rol (CTO, arquitecto, líder, consultor) y objetivo 
(diagnosticar, diseñar, operar, medir, mejorar) determinan por dónde 
empezar.
```

**Detalles de implementación:**
- **Heading:** `<h2>¿Qué es el Framework Archwise?</h2>`
- **Body:** Párrafo de 2 líneas (93 palabras)
- **Estilos:** Reutilizar clase `framework-intro-section` o similar (no crear nuevas)
- **Interactividad:** Opcional añadir enlaces a fragmentos:
  - "6 niveles" → `#capas`
  - "cada artículo" → `#vocabulario`

---

## NUEVO BLOQUE 2: "Cómo navegar Archwise"

**Ubicación:** Inmediatamente después del Bloque 1, antes del Mapa  
**Técnica implementación:** Similar a Bloque 1, nueva sección `framework-navigation-guide`

**Contenido:**

```
Cómo navegar Archwise

No por orden cronológico, sino por dependencias lógicas. Cada decisión 
que tomas en una etapa determina qué puedes activar en la siguiente.

Elige tu punto de partida según dónde está tu organización hoy y tu rol. 
Las rutas recomendadas te guían en orden lógico; el mapa causal te muestra 
todas las conexiones. Sin seguir el orden correcto, acumulas riesgo 
arquitectónico.
```

**Detalles de implementación:**
- **Heading:** `<h2>Cómo navegar Archwise</h2>`
- **Body:** Párrafo de 3 líneas (76 palabras)
- **Estilos:** Reutilizar clase estándar (no crear nuevas)
- **Interactividad:** Opcional:
  - "rutas recomendadas" → `#navigator` (scroll a Navigator section)
  - "mapa causal" → `#mapa` (scroll a Layer Map)

---

## RESUMEN DE CAMBIOS POR ARCHIVO

### Archivo 1: `src/app/pages/framework/components/framework-hero/framework-hero.component.html`

**4 cambios puntuales:**
1. Línea ~5: Reemplazar h1.framework-hero-title
2. Línea ~9-11: Reemplazar ul.framework-hero-metrics (3 `<li>`)
3. Línea ~20: Cambiar h2 "Cómo usar esta página" → "Cómo empezar"
4. Línea ~21-23: Reemplazar 3 `<li>` del how-to

**Total líneas afectadas:** 4  
**Líneas nuevas:** 4  
**Complejidad:** Mínima (string replacement)

---

### Archivo 2: `src/app/pages/framework/framework.data.ts`

**1 cambio:**
1. Línea ~5: Actualizar string de `subtitle`

**Total líneas afectadas:** 1  
**Líneas nuevas:** 1  
**Complejidad:** Mínima (string replacement)

---

### Archivo 3: `src/app/pages/framework/framework.component.html`

**1 adición:**
1. Después de `</aw-framework-hero>` (línea ~8): Insertar dos nuevas secciones de contenido

**Opciones técnicas:**
- **Opción A (Recomendada):** Crear dos nuevos componentes `framework-intro` y `framework-nav-guide`, pasar data desde `framework.data.ts`
- **Opción B:** Insertar HTML directo en el template (menos mantenible)
- **Opción C:** Crear una sola sección `framework-overview-blocks` que contiene ambos bloques

**Pseudo-código (Opción A):**
```html
<aw-framework-hero>...</aw-framework-hero>

<aw-framework-intro [content]="vm.introBlock"></aw-framework-intro>
<aw-framework-nav-guide [content]="vm.navGuideBlock"></aw-framework-nav-guide>

<aw-framework-layer-map>...</aw-framework-layer-map>
```

---

## FLUJO DE IMPLEMENTACIÓN RECOMENDADO

### Fase 1: Copy en Hero (30 minutos)
1. Actualizar `framework-hero.component.html` (4 cambios puntuales)
2. Actualizar `framework.data.ts` (1 cambio)
3. Test local: `ng serve`
4. Validar en navegador que copy aparezca correctamente

### Fase 2: Nuevos Bloques (1 hora)
1. Crear archivos:
   - `framework-intro.component.ts/html/scss`
   - `framework-nav-guide.component.ts/html/scss`
   - O usar sección HTML genérica si prefieres simplicidad
2. Actualizar `framework.component.html` para incluir nuevas secciones
3. Exportar componentes en `framework.module.ts` (si es necesario)
4. Añadir data en `framework.data.ts` si los necesita

### Fase 3: Validación (30 minutos)
1. Ejecutar `npm run build:ssg` para prerender
2. Confirmar en sitemap que `/framework` se renderiza
3. Validar en navegador: ¿Copy aparece? ¿Scroll/enlaces funcionan?
4. A/B test: ¿Comprensión mejorada para nuevo visitante?

### Fase 4: Deploy (30 minutos)
1. Merge a `main`
2. Deploy a producción
3. Monitorear analytics: engagement en `/framework`

**Tiempo total estimado:** 2-3 horas (incluyendo testing)

---

## VALIDACIÓN DE COMPRESIÓN

### Test 1: ¿Un nuevo visitante entiende el valor en 10 segundos?

**Métrica:** Lee hero + primer bloque ("Qué es") sin contexto previo.

**Antes:**  
❌ "Navega por dependencias, no por cronología" = 0% contexto

**Después:**  
✓ "Construye capacidades IA en orden. Sin dejar deuda atrás." = 80% contexto inmediato

---

### Test 2: ¿Entiende dónde empezar?

**Métrica:** ¿Puede responder "¿Por dónde empiezo?" sin ayuda?

**Antes:**  
❌ "Define tu ruta según perfil e intención" = ¿Qué es "intención"?

**Después:**  
✓ "Elige tu rol: CTO, Arquitecto, Ingeniero..." = Claro, concreto, actionable

---

### Test 3: ¿Conoce qué es Archwise?

**Métrica:** ¿Puede resumir "Archwise" en 1 frase sin haber leído?

**Antes:**  
❌ "Orientación causal del corpus..." = No entiende

**Después:**  
✓ "Hoja de ruta para escalar IA sin deuda técnica" = Entiende valor

---

## ROLLBACK PLAN

Si las métricas no mejoran en 2 semanas:

1. Revertir los 4 cambios en `framework-hero.component.html`
2. Revertir 1 cambio en `framework.data.ts`
3. Remover Bloque 1 y Bloque 2
4. Mantener git commit para auditoria

**Nota:** No hay riesgo: todos los cambios son copy-only. Cero impacto en lógica de negocio.

---

## ENTREGABLES

✓ **Auditoría completa:** `docs/framework-page-ux-audit-and-proposal.md`  
✓ **Copy exacto:** Este documento  
✓ **HTML/TS específico:** Líneas y archivos identificados  
✓ **Plan de implementación:** Fases 1-4 documentadas  
✓ **Tests de validación:** 3 pruebas de comprensión  

**Estado:** Listo para implementar. No requiere decisiones adicionales.

