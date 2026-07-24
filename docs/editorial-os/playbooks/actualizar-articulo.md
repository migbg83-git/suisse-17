# Playbook: Actualizar Artículo

> Versión: 1.0  
> Cuándo usar: Cuando se detecta que un artículo publicado necesita una actualización

---

## Cuándo utilizarlo

Usar este playbook cuando:
- GSC muestra que una página tiene buena posición (< 10) y 0 clics consistentes durante 2+ exportaciones → revisar snippet.
- Se detecta información desactualizada en el artículo.
- Se detecta una inconsistencia en el frontmatter (fecha incorrecta, slug desalineado).
- Un nuevo artículo o concepto del corpus hace que una sección del artículo existente sea incompleta.

**No usar** para:
- Reescribir artículos por criterios estéticos.
- Añadir contenido que cambia la tesis principal del artículo.
- Cambiar slugs (requiere proceso técnico separado y redirecciones).

---

## Tipos de actualización

### Tipo A: Corrección de frontmatter (fecha, descripción)
**Impacto**: Bajo riesgo. No afecta el contenido editorial.

Pasos:
1. Identificar el campo incorrecto en el frontmatter.
2. Verificar el valor correcto con la documentación del proyecto.
3. Corregir el campo.
4. Ejecutar `npm run build:content` y verificar.
5. Registrar el cambio en el historial del OS.

### Tipo B: Mejora de meta descripción (campo `description`)
**Objetivo**: Mejorar el CTR desde SERP sin cambiar el contenido del artículo.  
**Cuándo aplicar**: Página con posición < 10, > 15 impresiones, 0 clics durante 2+ exportaciones GSC.

Pasos:
1. Leer la descripción actual.
2. Identificar por qué puede no invitar al clic: ¿es demasiado genérica? ¿No incluye el beneficio concreto? ¿Es demasiado larga?
3. Redactar una nueva descripción que:
   - Sea < 160 caracteres.
   - Incluya el concepto principal del artículo en las primeras palabras.
   - Explique el beneficio para el lector (qué va a aprender o resolver).
   - Tenga un tono coherente con el posicionamiento de Archwise (directo, sin hype).
4. Corregir el campo `description` en el frontmatter.
5. Ejecutar `npm run build:content` y verificar.
6. Registrar en el backlog del cluster: fecha de cambio, descripción anterior, descripción nueva. Monitorizar en la próxima exportación GSC.

### Tipo C: Actualización de contenido
**Impacto**: Mayor riesgo. Requiere revisión editorial.

Pasos:
1. Identificar exactamente qué sección o dato está desactualizado.
2. Documentar el cambio propuesto con justificación.
3. Revisar que el cambio no contradice la tesis del artículo.
4. Verificar que el cambio no rompe enlaces internos desde o hacia el artículo.
5. Actualizar la fecha de publicación en el frontmatter si el cambio es sustancial.
6. Ejecutar el build completo y verificar.
7. Registrar en historial.

---

## Criterios de completitud

- [ ] El tipo de actualización está identificado (A, B o C).
- [ ] El cambio está justificado con evidencia (no solo intuición).
- [ ] El build no tiene errores.
- [ ] El cambio está registrado en el historial del OS.
- [ ] Si es tipo B: el cluster correspondiente tiene nota para monitorizar en próxima GSC.

---

## Resultado esperado

Un artículo actualizado con un cambio específico y justificado, integrado en el sistema de seguimiento del OS.
