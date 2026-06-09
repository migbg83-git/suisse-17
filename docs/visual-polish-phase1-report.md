# Visual Polish Phase 1 — Implementation Report

**Fecha:** 2026-06-09  
**Objetivo:** Elevar percepción visual de Archwise sin cambiar arquitectura funcional.

---

## Auditoría Visual Inicial

**Estado previo:**
- Navbar básico (solo texto "Archwise", sin logo visible)
- Hero plano sin gradientes
- Framework Preview con métricas simples
- Botones funcionales pero sin refinamiento
- Sin microinteracciones hover
- Espaciado correcto pero sin jerarquía visual premium

**Assets disponibles:**
- Favicon 32x32 con logo "A" azul (`/assets/icons/favicon-32x32.png`)
- Sin librería de iconos instalada
- Bootstrap 5 ya disponible
- Variables CSS bien definidas (blue accent #2563EB, escala de grises)

---

## Cambios Aplicados

### 1. Navbar Premium

**HTML:**
- Añadido logo/favicon visible junto a "Archwise"
- Estructura flex con gap refinado

**CSS:**
- Background blur (`backdrop-filter: blur(8px)`) + transparencia sutil
- Box-shadow ligera para profundidad
- Underline animado en hover (transición cubic-bezier suave)
- Estado activo con subrayado permanente
- Logo 24×24px con transición de opacidad

**Resultado:**
- Navbar más premium y reconocible
- Header sticky con efecto glassmorphism sutil
- Navegación con feedback hover claro

---

### 2. Hero con Gradiente Sutil

**Antes:**
```scss
background-color: var(--aw-white);
```

**Después:**
```scss
background: linear-gradient(180deg, rgba(37, 99, 235, 0.02) 0%, rgba(255, 255, 255, 1) 50%);
```

**Resultado:**
- Gradiente azul casi imperceptible (2% opacidad) que añade aire sin ser agresivo
- Mantiene sobriedad arquitectónica
- Compatible con SSR

---

### 3. Framework Preview Cards Premium

**Métricas con cards:**
- Fondo blanco con borde sutil
- Border-radius 12px
- Box-shadow layered (0 2px 8px rgba(0,0,0,0.04))
- Hover: `translateY(-2px)` + shadow más profunda
- Padding interno refinado (1.5rem 2rem)
- Min-width 200px para consistencia

**Números con gradiente:**
```scss
background: linear-gradient(135deg, var(--aw-accent) 0%, #1e40af 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Resultado:**
- Números destacan con gradiente azul (accent → dark blue)
- Cards elevables al hover
- Layout responsive: columnas en desktop, rows en mobile

---

### 4. Botón Primary Refinado

**Mejoras:**
- Box-shadow inicial: `0 1px 3px rgba(37, 99, 235, 0.12)`
- Hover shadow: `0 4px 12px rgba(37, 99, 235, 0.2)`
- Transform hover: `translateY(-1px)`
- Active state: `translateY(0)` + shadow reducida
- Transición all 150ms cubic-bezier

**Resultado:**
- Botones más táctiles
- Feedback hover claro sin ser agresivo
- Sombras colored (blue-tinted) en vez de grises genéricos

---

### 5. Background Gradient Framework Preview

**Antes:** `background-color: var(--aw-gray-50)`

**Después:**
```scss
background: linear-gradient(180deg, var(--aw-gray-50) 0%, rgba(255, 255, 255, 1) 100%);
```

**Resultado:**
- Transición suave de gris claro a blanco
- Sección destaca sin cortes bruscos
- Consistente con hero

---

### 6. Link Framework Preview Mejorado

**Elementos:**
- Padding 0.5rem 1rem
- Border-radius 6px
- Hover: background accent-light + color accent-hover
- Feedback visual claro sin subrayado

---

## Archivos Modificados

```
EDIT  src/app/layout/navbar/navbar.component.html
      → Añadido <img> logo + clase brand-text

EDIT  src/app/layout/navbar/navbar.component.scss
      → Backdrop-filter blur
      → Logo styles
      → Underline animado en nav links
      → Brand hover opacity

EDIT  src/app/pages/home/home.component.scss
      → Hero gradiente sutil
      → Framework Preview cards premium
      → Métricas con box-shadow + hover
      → Números con gradiente
      → Link hover con background

EDIT  src/styles.scss
      → .btn-primary con box-shadow refinado
      → Transform hover/active states
      → Transiciones cubic-bezier
```

---

## Decisiones Visuales

| Elemento | Decisión | Razón |
|----------|----------|-------|
| Logo en navbar | Favicon 32×32 escalado a 24×24 | Ya existía, evita crear SVG nuevo |
| Backdrop blur | 8px con transparency 98% | Sutil, no afecta legibilidad |
| Gradientes | Azul 2% opacidad | Premium sin ser marketing |
| Box-shadows | Layered con color tint | Más refinado que sombras grises |
| Hover transforms | translateY(-1px a -2px) | Microinteracción táctil |
| Border-radius | 12px en cards grandes | Moderniza sin ser excesivo |
| Número gradiente | Text-fill-color transparent | Destaca sin color plano |
| Transiciones | cubic-bezier(0.4,0,0.2,1) | Aceleración natural |

---

## Validaciones

### Triple Build

| Pass | Artículos | Rutas | Bundle | Resultado |
|------|-----------|-------|--------|-----------|
| 1 | 30 | 34 | 522.04 KB | ✅ Éxito |
| 2 | 30 | 34 | 522.04 KB | ✅ Éxito |
| 3 | 30 | 34 | 522.04 KB | ✅ Éxito |

### Checklist Funcional

- [x] Home renderiza correctamente
- [x] Framework renderiza correctamente
- [x] Article Detail renderiza correctamente
- [x] Header funciona en desktop
- [x] Header funciona en mobile (hamburger sin cambios)
- [x] Logo visible en navbar
- [x] Gradientes sutiles aplicados
- [x] Cards métricas con hover
- [x] Botones con shadow refinado
- [x] Sin errores nuevos de compilación
- [x] Sin errores de runtime
- [x] SSR/SSG funciona (34 rutas prerenderizadas)

---

## Cambios NO Aplicados

| Propuesta | Razón |
|-----------|-------|
| Instalar librería de iconos | Sin aprobación para nuevas dependencias |
| Animaciones complejas | Mantener sobriedad arquitectónica |
| Colores agresivos | Preservar identidad premium/sobria |
| Rediseño de ArticleCard | Fuera de scope Phase 1 |
| Footer visual overhaul | Footer actual funcional, bajo ROI |
| Nuevos componentes | No necesario, mejoras CSS suficientes |

---

## Riesgos Pendientes

| Riesgo | Severidad | Mitigación propuesta |
|--------|-----------|----------------------|
| Backdrop-filter no compatible en navegadores antiguos | Baja | Ya tiene fallback (background rgba) |
| Text-fill-color no soportado en IE | Nula | IE no es target (Angular 21 no lo soporta) |
| Gradientes pueden verse diferentes en pantallas low-DPI | Baja | Opacidades muy sutiles (2%), impacto mínimo |
| Transform hover puede causar layout shift | Muy baja | Solo translateY, sin cambio de width/height |

---

## Resultado Visual Esperado

### Home
- Hero con aire azul sutil arriba
- Framework Preview con cards 3D elevables
- Números de métricas con gradiente azul premium
- Botón "Explorar Framework" con sombra blue-tinted

### Header Global
- Logo "A" visible en azul junto a "Archwise"
- Navbar con glassmorphism sutil (blur + shadow)
- Links con underline animado al hover
- Estado activo con subrayado permanente

### Botones Generales
- Primary con shadow elevado al hover
- Microinteracción translateY(-1px)
- Active state con feedback táctil

---

## Próximas Mejoras (No Implementadas)

**Phase 2 sugerencias:**
- ArticleCard hover refinado
- Framework layer cards con mejor jerarquía
- Footer con logo pequeño
- Breadcrumbs más premium
- Tags con pills redondeados
- Code blocks con mejor syntax highlight theme

**Requieren aprobación:**
- Librería de iconos (heroicons, lucide, etc)
- Custom illustrations para hero
- Dark mode toggle

---

## Conclusión

**Impacto:** Las mejoras aplicadas elevan la percepción visual de Archwise sin alterar funcionalidad ni romper la identidad sobria/arquitectónica. Los cambios son conservadores, seguros y compatibles con SSR/SSG.

**Bundle impact:** +0.9 KB inicial (+0.17%), +230 bytes home component.

**Validación:** Triple build exitoso, 30 artículos, 34 rutas, sin errores nuevos.
