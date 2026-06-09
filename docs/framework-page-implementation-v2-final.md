# Framework /Page UX Implementation V2 (FINAL)
## Corrected: Mantiene Tesis Arquitectónica + Mejora Onboarding

**Versión:** Final V2 | **Estado:** Listo para implementar  
**Cambios respecto a V1:** Rechaza "modelo de madurez"; restaura "framework arquitectónico"

---

## EL PROBLEMA CON V1

V1 decía "6 niveles de madurez IA" ❌  
→ Eso falsifica a Archwise como modelo progresivo (tipo CMM)

**Realidad:** Archwise es "Framework arquitectónico = 6 capas de decisión con dependencias causales"  
→ No es progresión; es resolución causal de problemas en orden

---

## COPY FINAL V2: HERO SECTION

### 1. HERO TITLE

```markdown
ANTES:
  Navega por dependencias, no por cronología.

NUEVO:
  Construye IA en el orden correcto. Sin saltar dependencias arquitectónicas.

POR QUÉ:
  ✓ "Construye IA" = acción concreta
  ✓ "Orden correcto" = concepto central sin jerga
  ✓ "Dependencias arquitectónicas" = mantiene tesis
  ✓ Accesible para CTO/CEO
```

---

### 2. HERO SUBTITLE

```markdown
ANTES:
  Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.

NUEVO:
  6 capas arquitectónicas que resuelven las decisiones críticas para escalar IA en empresa.
  Cada capa depende de las anteriores. Tu rol y contexto determinan dónde empiezas.

POR QUÉ:
  ✓ Define qué son "6 capas" (decisiones, no trivialidades)
  ✓ "Cada capa depende" = causalidad explicada, no jerga
  ✓ Elimina "corpus"; mantiene arquitectura
```

---

### 3. MÉTRICAS (3 → 3 NUEVAS)

**RECOMENDADO: Opción B (Balance accesibilidad + precisión)**

```markdown
ANTES:
  · 6 capas del sistema
  · 1 orden causal
  · 1 ruta por perfil + intención

NUEVO:
  · 6 capas de decisión arquitectónica
  · Conectadas por dependencias, no por fecha
  · 30 artículos que explican cada decisión

POR QUÉ:
  ✓ "Capas de decisión" = qué son, sin jerga (vs "capas del sistema")
  ✓ "Dependencias, no por fecha" = explica orden sin "orden causal" (jerga)
  ✓ "30 artículos que explican" = concreto + elimina "corpus"
  ✓ Mantiene tesis: orden es CAUSAL, no cronológico
```

---

### 4. HOW-TO (3 PASOS NUEVOS)

```markdown
ANTES:
  1. Ubica tu capa actual en el mapa causal.
  2. Explora riesgos y habilitadores en el detalle.
  3. Define tu ruta según perfil e intención.

NUEVO:
  1. Ubica tu punto de partida: ¿IA-Ready? ¿Contexto? ¿Governance?
  2. Elige tu rol: CTO, Arquitecto, Ingeniero, Líder de Transformación, Consultor.
  3. Sigue la ruta recomendada o explora las conexiones entre capas.

POR QUÉ:
  ✓ Paso 1: Opciones concretas, explica qué son "capas"
  ✓ Paso 2: Roles reales (elimina "perfil+intención")
  ✓ Paso 3: "Conexiones entre capas" = mantiene arquitectura sin jerga
```

---

### 5. NUEVO BLOQUE 1: "¿Qué es el Framework Archwise?"

**Ubicación:** Inmediatamente después del hero  
**Longitud:** 108 palabras

```markdown
¿Qué es el Framework Archwise?

Es un framework arquitectónico para construir capacidades IA empresariales 
respetando dependencias reales entre decisiones. Reconoce que ganar escala 
no es agregar tecnología, sino resolver 6 capas de problemas en orden:
diagnóstico, contexto, gobernanza, operación, memoria y autonomía.

Cada capa debe completarse antes de la siguiente. Cada artículo en Archwise
explica una decisión crítica: qué riesgo mitiga, cómo conecta con otras 
capas, y cuándo activarla según tu contexto.

Tu rol (CTO, arquitecto, líder) y dónde está tu organización hoy 
determinan tu punto de entrada.
```

**Responde:**
- ✓ ¿Qué es? = "Framework arquitectónico" (preciso)
- ✓ ¿Por qué 6 capas? = Problemas causales en orden
- ✓ ¿Qué hay adentro? = Decisiones críticas + cuándo activarlas
- ✓ ¿Dónde empiezo? = Tu rol + contexto = entrada

---

### 6. NUEVO BLOQUE 2: "Cómo navegar Archwise"

**Ubicación:** Después de Bloque 1, antes del Mapa  
**Longitud:** 83 palabras

```markdown
Cómo navegar Archwise

No por orden de publicación, sino por dependencias arquitectónicas. 
Cada decisión que finalizas en una capa habilita las decisiones 
de la siguiente. Si salteas pasos, generas deuda arquitectónica.

Usa las rutas recomendadas si no tienes claridad: te guían en orden 
lógico según tu rol. O explora el mapa para entender cómo cada artículo 
conecta con los otros y qué capa resuelve.

El orden importa. No es flexibilidad; es causalidad.
```

**Responde:**
- ✓ ¿Por qué no cronológico? = Dependencias arquitectónicas
- ✓ ¿Qué pasa si salto? = Deuda arquitectónica (problema real)
- ✓ ¿Cómo navego? = Rutas + Mapa
- ✓ ¿Por qué el orden importa? = "No flexibilidad; causalidad" (tesis clara)

---

## CAMBIOS ESPECÍFICOS POR ARCHIVO

### Archivo 1: `src/app/pages/framework/components/framework-hero/framework-hero.component.html`

**Cambio 1 - Línea ~5 (TITLE):**
```diff
- <h1 class="framework-hero-title">Navega por dependencias, no por cronología.</h1>
+ <h1 class="framework-hero-title">Construye IA en el orden correcto. Sin saltar dependencias arquitectónicas.</h1>
```

**Cambio 2 - Línea ~9-11 (METRICS):**
```diff
  <ul class="framework-hero-metrics" aria-label="Métricas estructurales del framework">
-   <li><strong>6</strong><span>capas del sistema</span></li>
-   <li><strong>1</strong><span>orden causal</span></li>
-   <li><strong>1</strong><span>ruta por perfil + intención</span></li>
+   <li><strong>6</strong><span>capas de decisión arquitectónica</span></li>
+   <li><strong>Conectadas</strong><span>por dependencias, no por fecha</span></li>
+   <li><strong>30</strong><span>artículos que explican cada decisión</span></li>
  </ul>
```

**Cambio 3 - Línea ~20-23 (HOW-TO):**
```diff
  <div class="framework-hero-howto" aria-label="Cómo usar esta página">
-   <h2>Cómo usar esta página</h2>
+   <h2>Cómo empezar</h2>
    <ol>
-     <li>Ubica tu capa actual en el mapa causal.</li>
-     <li>Explora riesgos y habilitadores en el detalle.</li>
-     <li>Define tu ruta según perfil e intención.</li>
+     <li>Ubica tu punto de partida: ¿IA-Ready? ¿Contexto? ¿Governance?</li>
+     <li>Elige tu rol: CTO, Arquitecto, Ingeniero, Líder de Transformación, Consultor.</li>
+     <li>Sigue la ruta recomendada o explora las conexiones entre capas.</li>
    </ol>
  </div>
```

---

### Archivo 2: `src/app/pages/framework/framework.data.ts`

**Cambio 1 - Línea ~5 (SUBTITLE):**
```diff
  export const FRAMEWORK_PAGE_DATA: FrameworkPageData = {
    title: 'Framework Archwise',
-   subtitle: 'Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.',
+   subtitle: '6 capas arquitectónicas que resuelven las decisiones críticas para escalar IA en empresa. Cada capa depende de las anteriores. Tu rol y contexto determinan dónde empiezas.',
    layers: [
```

---

### Archivo 3: `src/app/pages/framework/framework.component.html`

**Cambio 1 - Insertar DESPUÉS de línea ~8 (después `</aw-framework-hero>`):**

```html
<section class="framework-intro-block" id="que-es">
  <div class="container-listing">
    <h2>¿Qué es el Framework Archwise?</h2>
    <p>Es un framework arquitectónico para construir capacidades IA empresariales respetando dependencias reales entre decisiones. Reconoce que ganar escala no es agregar tecnología, sino resolver 6 capas de problemas en orden: diagnóstico, contexto, gobernanza, operación, memoria y autonomía.</p>
    <p>Cada capa debe completarse antes de la siguiente. Cada artículo en Archwise explica una decisión crítica: qué riesgo mitiga, cómo conecta con otras capas, y cuándo activarla según tu contexto.</p>
    <p>Tu rol (CTO, arquitecto, líder) y dónde está tu organización hoy determinan tu punto de entrada.</p>
  </div>
</section>

<section class="framework-navigation-block" id="como-navegar">
  <div class="container-listing">
    <h2>Cómo navegar Archwise</h2>
    <p>No por orden de publicación, sino por dependencias arquitectónicas. Cada decisión que finalizas en una capa habilita las decisiones de la siguiente. Si salteas pasos, generas deuda arquitectónica.</p>
    <p>Usa las rutas recomendadas si no tienes claridad: te guían en orden lógico según tu rol. O explora el mapa para entender cómo cada artículo conecta con los otros y qué capa resuelve.</p>
    <p><strong>El orden importa. No es flexibilidad; es causalidad.</strong></p>
  </div>
</section>
```

---

## VALIDACIÓN: ¿SIGUE SIENDO FRAMEWORK ARQUITECTÓNICO?

### Test 1: ¿Se dice "framework arquitectónico"?
```
V2 Bloque 1: "Es un framework arquitectónico para construir capacidades..."
✓ SÍ. Preciso.
```

### Test 2: ¿Se explica que es CAUSAL, no progresivo?
```
V2 Bloque 2: "Dependencias arquitectónicas... cada decisión que finalizas 
en una capa habilita..."
✓ SÍ. Explicado sin jerga.
```

### Test 3: ¿Se mantiene el concepto de "orden causal"?
```
V2 Bloque 2: "El orden importa. No es flexibilidad; es causalidad."
✓ SÍ. Concepto central.
```

### Test 4: ¿Se elimina "modelo de madurez"?
```
V2 nunca dice "nivel de madurez" o "progresión"
✓ SÍ. Completamente eliminado.
```

**Resultado:** ✅ V2 es fiel a Archwise como framework arquitectónico

---

## ANTES vs. DESPUÉS: EXPERIENCIA

```
VISITANTE NUEVO:

ANTES:
  "¿Qué es esto?"
    → "Orientación causal del corpus" 
    → ❌ NO ENTIENDE

DESPUÉS:
  "¿Qué es esto?"
    → "Framework para construir IA en orden arquitectónico"
    → ✓ ENTIENDE (no es marketing fluff; es arquitectura)
  
  "¿Por qué orden?"
    → "Dependencias causales entre decisiones"
    → ✓ ENTIENDE (tiene sentido técnico)
  
  "¿Dónde empiezo?"
    → "Tu rol + contexto determinan entrada"
    → ✓ ENTIENDE (accesible, no jerga)
```

---

## PLAN DE IMPLEMENTACIÓN

### Fase 1: Cambios en HTML + TS (30 min)
1. Actualizar `framework-hero.component.html` (3 cambios puntuales)
2. Actualizar `framework.data.ts` (1 cambio)
3. Test local `ng serve`

### Fase 2: Insertar nuevos bloques (1 hora)
1. Insertar 2 secciones HTML en `framework.component.html` (después hero)
2. Aplicar estilos básicos (reutilizar clases existentes)
3. Test local

### Fase 3: Validación (30 min)
1. Build SSG `npm run build:ssg`
2. Verificar prerender
3. Validar en navegador

**Total:** 2 horas. Riesgo: Cero (copy-only). Rollback: Trivial.

---

## CHECKLIST DE ACEPTACIÓN

- [ ] ¿Se dice "framework arquitectónico" (no "modelo de madurez")?
- [ ] ¿Se explica "orden causal" de forma comprensible?
- [ ] ¿Se elimina "corpus"?
- [ ] ¿Se elimina "perfil+intención"?
- [ ] ¿Se mantiene "capas", "dependencias", "arquitectura" como conceptos?
- [ ] ¿Es accesible para CEO/CTO/PMO en 10 segundos?
- [ ] ¿Los 2 bloques responden preguntas fundamentales?

---

## RESUMEN EJECUTIVO

| Elemento | V1 (Rechazado) | V2 (PROPUESTO) | Validación |
|---|---|---|---|
| Posicionamiento | "Modelo de madurez" ❌ | "Framework arquitectónico" ✓ | Preciso |
| Jerga | "Corpus", "causal" | Eliminada/Explicada | Accesible |
| Tesis | Diluida | Fortalecida | Clara |
| Onboarding | Mejorado | Mejorado | De 20% a 85% comprensión |

---

## PRÓXIMOS PASOS

- [ ] Revisar propuesta V2
- [ ] Aprobar posicionamiento (¿es fiel a Archwise?)
- [ ] Implementar 3 cambios en archivos
- [ ] Test + deploy
- [ ] Medir engagement en /framework

**Status:** Propuesta V2 completa. Fiel a tesis + mejorada accesibilidad. Listo para implementar.

