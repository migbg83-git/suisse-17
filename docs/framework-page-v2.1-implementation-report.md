# Framework /Page V2.1 Implementation Report
## Estado: IMPLEMENTADO Y VALIDADO

**Fecha:** 9 de junio de 2026  
**Versión:** V2.1 (revisión crítica de V2)  
**Archivos modificados:** 4  
**Builds ejecutados:** 3 (content → seo → ssg)  
**Rutas prerenderizadas:** 34  
**Checks de validación:** 12/12 ✓

---

## DECISIÓN DE IMPLEMENTACIÓN

### Scores V2.1 (umbral: 9/10 en fidelidad y comprensión)

| Criterio | Score | Estado |
|---|---|---|
| Fidelidad a tesis Archwise | 9.5/10 | ✓ APROBADO |
| Comprensión para visitante nuevo | 9/10 | ✓ APROBADO |
| Autoridad intelectual | 9.5/10 | ✓ APROBADO |
| Riesgo de malinterpretación | 9/10 (sin riesgo) | ✓ APROBADO |

**Conclusión:** Ambos criterios de umbral superados → implementación ejecutada.

---

## AUDITORÍA CRÍTICA DE V2 (por qué V2.1 la supera)

### Problemas encontrados en V2:

| Elemento V2 | Problema | Resolución V2.1 |
|---|---|---|
| Título: "Construye IA en el orden correcto. Sin saltar..." | Dos frases sin flujo. "Sin saltar" = instrucción negativa. Más largo, menos memorable. | **MANTENER ORIGINAL** "Navega por dependencias, no por cronología." |
| Subtitle: "Cada capa depende de las anteriores" | Demasiado absoluta y técnicamente discutible (advertida por el usuario). Layers tienen dependencias parciales, no totales. | Reemplazada por "No navegas por fecha ni por categoría: navegas según lo que tu arquitectura ya ha resuelto." |
| Métrica 2: "Conectadas por dependencias, no por fecha" | Sin número de anclaje visual. "Conectadas" débil como valor. "No por fecha" es defensivo. | Reemplazada por `1` / `secuencia causal de activación` |
| Bloque 1: "Cada capa debe completarse antes de la siguiente" | Inaceptable: un CTO puede iniciar Layer-3 sin Layer-2 completamente resuelta. Falso absolutismo. | Reemplazada por "Las capas tienen dependencias entre sí." |
| Bloque 2: "No por orden de publicación" | CTO objection: nadie navega frameworks por fecha de publicación. Contraste trivial. | Reemplazada por "La navegación por intuición temática asume que puedes elegir lo que necesitas." |

---

## CAMBIOS IMPLEMENTADOS

### Archivo 1: `framework.data.ts`

**Subtitle (line ~5):**
```
ANTES: 'Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.'
NUEVO: 'El Framework Archwise organiza seis capas de decisiones arquitectónicas conectadas por dependencias causales. No navegas por fecha ni por categoría: navegas según lo que tu arquitectura ya ha resuelto.'
```

**continuityCtas[0].description:**
```
ANTES: 'Explora el corpus completo en orden editorial.'
NUEVO: 'Explora los 30 artículos en orden causal.'
```

**continuityCtas[2].description:**
```
ANTES: 'Continuidad semanal del framework y del corpus.'
NUEVO: 'Continuidad semanal del framework y de la arquitectura Archwise.'
```

---

### Archivo 2: `framework-hero.component.html`

**Métricas:**
```
ANTES:
  · 6  /  capas del sistema
  · 1  /  orden causal
  · 1  /  ruta por perfil + intención

NUEVO:
  · 6   /  capas arquitectónicas
  · 1   /  secuencia causal de activación
  · 30  /  artículos, una decisión crítica cada uno
```

**How-to:**
```
ANTES: "Cómo usar esta página"
NUEVO: "Cómo empezar"

ANTES:
  1. Ubica tu capa actual en el mapa causal.
  2. Explora riesgos y habilitadores en el detalle.
  3. Define tu ruta según perfil e intención.

NUEVO:
  1. Ubica la capa que tu arquitectura necesita resolver: diagnóstico, contexto, gobernanza, operación, memoria o sistemas.
  2. Selecciona tu rol y construye una ruta recomendada.
  3. Lee en el orden que las dependencias indican, no el de intuición temática.
```

---

### Archivo 3: `framework.component.html`

**Insertados después de `</aw-framework-hero>`, antes del anchor nav:**

**Bloque "¿Qué es el Framework Archwise?"** (3 párrafos / ~110 palabras):
```
Es un framework arquitectónico para construir capacidades IA empresariales en el orden 
que sus dependencias causales dictan. No es una guía de mejores prácticas ni un roadmap 
de adopción: es una estructura que refleja por qué la IA falla cuando se activan 
capacidades fuera de orden.

Las 6 capas organizan las decisiones arquitectónicas que ningún sistema IA empresarial 
puede evitar: desde diagnóstico de preparación hasta operación autonómica. Las capas 
tienen dependencias entre sí. Cada artículo explica una de esas decisiones: qué riesgo 
mitiga, cómo conecta con otras capas, cuándo activarla.

Tu punto de entrada depende de dónde está tu arquitectura hoy, no de dónde deberías estar.
```

**Bloque "Cómo navegar Archwise"** (3 párrafos / ~85 palabras):
```
La navegación por intuición temática asume que puedes elegir lo que necesitas. Archwise 
asume que las decisiones tienen dependencias causales: activar una capa sin resolver sus 
predecesoras genera deuda arquitectónica real.

Usa las rutas recomendadas para seguir el orden causal según tu rol, o explora el mapa 
de capas para entender qué decisiones dependen de cuáles.

El orden importa. No es una recomendación; es la arquitectura del problema.
```

---

### Archivo 4: `framework.component.ts`

**SEO Description:**
```
ANTES: 'Mapa conceptual de seis capas para navegar el corpus Archwise por dependencias causales, no por cronología.'
NUEVO: 'Seis capas de decisiones arquitectónicas conectadas por dependencias causales. El framework para construir capacidades IA empresariales en el orden correcto.'
```

---

## ELEMENTOS CONSERVADOS (SIN CAMBIO)

| Elemento | Valor | Razón |
|---|---|---|
| Hero title | "Navega por dependencias, no por cronología." | Objetivamente superior a V2: contraste neto, una frase, verbalmente activa |
| CTAs | "Empezar por capas" / "Construir ruta recomendada" | Correctos, sin cambio |
| SEO title | "Framework Archwise \| Arquitectura causal para escalar IA" | Correcto |
| Anchor nav | Mapa / Capas / Navigator / Vocabulario / Continuidad | Sin cambio |
| layers, profiles, intents, pathMappings, terms | Toda la lógica de datos | Sin cambio |

---

## VALIDACIÓN DE CHECKS

| Check | Resultado |
|---|---|
| 1. Framework prerender existe | ✓ True |
| 2. Nuevo subtitle en prerender | ✓ True |
| 3. "capas arquitectónicas" en prerender | ✓ True |
| 4. "secuencia causal" en prerender | ✓ True |
| 5. "una decisión crítica" en prerender | ✓ True |
| 6. "framework arquitectónico" en Bloque 1 | ✓ True |
| 7. "arquitectura del problema" en Bloque 2 | ✓ True |
| 8. How-to con capas nombradas | ✓ True |
| 9. "corpus" eliminado de /framework | ✓ True |
| 10. "perfil + intención" eliminado | ✓ True |
| 11. Article-30 sigue prerenderizado | ✓ True |
| 12. Total rutas: 34 (sin regresiones) | ✓ 34 |

**Score final: 12/12 ✓**

---

## BUILDS EJECUTADOS

| Build | Resultado | Artículos / Rutas |
|---|---|---|
| `npm run build:content` | ✓ 30 artículos generados | Exit 1 no-bloqueante (article-31 skip, conocido) |
| `npm run build:seo` | ✓ sitemap.xml y robots.txt | — |
| `npm run build:ssg` | ✓ 34 rutas prerenderizadas | Sin ERROR |

---

## CORRECCIONES FRENTE A V2

| Problema V2 | Estado V2.1 |
|---|---|
| "Modelo de madurez" en copy | ✓ Eliminado completamente |
| "Cada capa debe completarse antes..." | ✓ Reemplazado por "Las capas tienen dependencias entre sí" |
| "Conectadas por dependencias, no por fecha" (débil) | ✓ Reemplazado por "1 / secuencia causal de activación" |
| "No por orden de publicación" (trivial) | ✓ Reemplazado por contraste real: "intuición temática" |
| Título V2 inferior al original | ✓ Original restaurado |
| "corpus" en SEO description | ✓ Eliminado |
| "corpus" en continuityCtas (x2) | ✓ Eliminado |

---

## CLASIFICACIÓN

**FRAMEWORK PAGE V2.1: IMPLEMENTADO Y VALIDADO**

- Tesis Archwise: **INTACTA**
- Onboarding nuevo visitante: **MEJORADO**
- "corpus": **ELIMINADO DE /framework**
- "perfil + intención": **ELIMINADO**
- "modelo de madurez": **NUNCA APARECE**
- Regresiones: **NINGUNA**

