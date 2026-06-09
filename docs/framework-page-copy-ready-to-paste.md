# Framework /Page CTA V2: Copy Exacto Ready-to-Paste
## Documento de referencia rápida para implementación

**Creado:** 9 de junio de 2026 | **Estado:** Listo para copiar-pegar directamente

---

## 1. COPY PARA framework-hero.component.html

### Cambio 1: Título Principal (línea ~5)

**Copiar:**
```
Construye IA en el orden correcto. Sin saltar dependencias arquitectónicas.
```

---

### Cambio 2: Métricas (línea ~9-11)

**Reemplazar estos 3 `<li>`:**

Métrica 1:
```
6
capas de decisión arquitectónica
```

Métrica 2:
```
Conectadas
por dependencias, no por fecha
```

Métrica 3:
```
30
artículos que explican cada decisión
```

---

### Cambio 3: How-to Heading (línea ~20)

**Cambiar de:**
```
Cómo usar esta página
```

**A:**
```
Cómo empezar
```

---

### Cambio 4: How-to Steps (línea ~21-23)

**Reemplazar estos 3 `<li>`:**

Paso 1:
```
Ubica tu punto de partida: ¿IA-Ready? ¿Contexto? ¿Governance?
```

Paso 2:
```
Elige tu rol: CTO, Arquitecto, Ingeniero, Líder de Transformación, Consultor.
```

Paso 3:
```
Sigue la ruta recomendada o explora las conexiones entre capas.
```

---

## 2. COPY PARA framework.data.ts

### Cambio 1: Subtitle (línea ~5)

**Reemplazar:**
```typescript
subtitle: 'Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.',
```

**Con:**
```typescript
subtitle: '6 capas arquitectónicas que resuelven las decisiones críticas para escalar IA en empresa. Cada capa depende de las anteriores. Tu rol y contexto determinan dónde empiezas.',
```

---

## 3. COPY PARA framework.component.html (INSERTAR después línea ~8)

**Insertar estas 2 secciones después `</aw-framework-hero>`:**

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

## RESUMEN DE CAMBIOS

| Archivo | Cambios | Línea | Tipo |
|---------|---------|-------|------|
| `framework-hero.component.html` | 4 (título + métricas + how-to) | ~5, ~9-11, ~20-23 | String replace |
| `framework.data.ts` | 1 (subtitle) | ~5 | String replace |
| `framework.component.html` | 1 (2 secciones nuevas) | Después ~8 | Insert |

**Total:** 3 archivos, 6 cambios específicos

---

## VALIDACIÓN RÁPIDA (AFTER IMPLEMENTACIÓN)

### Test 1: ¿El título menciona "dependencias"?
Esperar: "Construye IA en el orden correcto. Sin saltar dependencias arquitectónicas."

### Test 2: ¿La métrica 1 dice "capas de decisión arquitectónica"?
Esperar: "6 capas de decisión arquitectónica"

### Test 3: ¿La Métrica 2 explica que NO es cronología?
Esperar: "Conectadas por dependencias, no por fecha"

### Test 4: ¿Bloque 1 dice "framework arquitectónico"?
Esperar: "Es un framework arquitectónico para construir capacidades..."

### Test 5: ¿Bloque 2 dice "causalidad"?
Esperar: "El orden importa. No es flexibilidad; es causalidad."

---

## ROLLBACK (Si es necesario)

Cada cambio es reversible:

1. **framework-hero.component.html:** Revertir 4 strings a versiones originales
2. **framework.data.ts:** Revertir 1 string a versión original
3. **framework.component.html:** Eliminar 2 secciones insertadas

**Tiempo:** 5 minutos

---

## ARCHIVOS DE REFERENCIA ADICIONAL

Si necesitas más contexto:

1. **Propuesta completa V2:** `framework-page-ux-proposal-v2-corrected.md`
2. **Guía de implementación:** `framework-page-implementation-v2-final.md`
3. **Comparación V1 vs V2:** `framework-page-v1-vs-v2-comparison-final.md`

---

## STATUS

✅ Copy exacto listo para implementación  
✅ Sin ambigüedades  
✅ Fiel a tesis Archwise (framework arquitectónico)  
✅ Improves accesibilidad para visitante nuevo

**Next Step:** Copiar-pegar en archivos + build + deploy

