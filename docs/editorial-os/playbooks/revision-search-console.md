# Playbook: Revisión de Search Console

> Versión: 1.0  
> Cuándo usar: Cada vez que se exporta un nuevo conjunto de datos de Google Search Console

---

## Cuándo utilizarlo

Usar este playbook cuando se descarga una nueva exportación de GSC. La frecuencia recomendada es mensual.

**No usar** para análisis puntuales sin exportación nueva. Si solo se quiere revisar el estado actual, consultar `seo/current-signals.md`.

---

## Pasos

### 1. Guardar la exportación
- Crear carpeta `docs/seo/search-console/YYYY-MM-DD/` con la fecha de exportación.
- Copiar los 6 archivos CSV: `consultas.csv`, `paginas.csv`, `grafico.csv`, `paises.csv`, `dispositivos.csv`, `aparicion-en-busquedas.csv`.
- Verificar que ningún archivo está vacío o truncado.

### 2. Comparar con la exportación anterior
Abrir `docs/editorial-os/seo/current-signals.md` (datos de la exportación anterior) y comparar:

| Qué comparar | Pregunta |
|--------------|----------|
| Impresiones totales | ¿Han subido, bajado o se mantienen? |
| Clics totales | ¿Ha mejorado el CTR global? |
| Posición media por página | ¿Qué páginas han subido o bajado? |
| Consultas nuevas | ¿Aparecen términos que antes no estaban? |
| Consultas desaparecidas | ¿Hay términos que ya no generan impresiones? |
| Países | ¿Ha cambiado la distribución geográfica? |

### 3. Actualizar `seo/current-signals.md`
- Copiar el contenido anterior a `seo/history/YYYY-MM-DD.md` (fecha de la exportación anterior).
- Reescribir `seo/current-signals.md` con los datos nuevos.
- Mantener el mismo formato de tablas para facilitar comparación futura.

### 4. Clasificar cada consulta nueva
Para cada consulta que aparece por primera vez, aplicar la siguiente clasificación:

| Clasificación | Criterio |
|---------------|----------|
| **Marca** | El término incluye "archwise" o variantes |
| **Oportunidad validada** | Posición < 5 con más de 20 impresiones |
| **Quick win** | Posición < 15 con más de 10 impresiones y 0 clics |
| **Señal temprana** | 1-10 impresiones, posición variable |
| **Ruido** | Términos sin relación con el posicionamiento de Archwise |

**Regla crítica**: Una consulta con 1-2 impresiones no es evidencia suficiente para ninguna decisión. Registrarla como "señal temprana" y esperar la siguiente exportación.

### 5. Evaluar páginas con cambios notables
Identificar:
- **Páginas que subieron > 5 posiciones**: ¿por qué? ¿Hay un enlace nuevo o indexación reciente?
- **Páginas que bajaron > 5 posiciones**: ¿competencia nueva? ¿Pérdida de autoridad?
- **Páginas que ganaron impresiones significativas**: oportunidad de mejorar CTR.
- **Páginas que desaparecieron**: posible desindexación, verificar con URL Inspection.

### 6. Actualizar los clusters afectados
Para cada cluster con cambios notables en sus páginas:
- Abrir el documento de cluster correspondiente en `clusters/`.
- Actualizar la tabla "Señales SEO" con los nuevos datos.
- Revisar si los ítems del backlog del cluster siguen siendo relevantes.
- Añadir nuevos ítems de backlog si la nueva exportación revela oportunidades.

### 7. Actualizar el dashboard
- Abrir `docs/editorial-os/dashboard.md`.
- Actualizar la cabecera: "Última actualización" y "Periodo de datos GSC".
- Actualizar las métricas de referencia (P10, tabla de métricas base).
- Revisar todas las respuestas P1-P10 y corregir las que ya no sean precisas.

### 8. Revisar el roadmap
- Abrir `docs/editorial-os/roadmap/roadmap.md`.
- Verificar si las acciones del horizonte "Ahora" han producido resultados visibles en GSC.
- Mover acciones completadas al historial.
- Reordenar prioridades si la nueva exportación cambia el panorama.

### 9. Crear entrada en el historial
- Crear `docs/editorial-os/history/YYYY-MM-DD-gsc-review.md`.
- Registrar: fecha de revisión, exportación analizada, cambios más relevantes detectados, decisiones tomadas.

---

## Criterios de completitud

- [ ] Archivos CSV guardados en la carpeta de fecha correcta.
- [ ] `seo/current-signals.md` actualizado con datos nuevos.
- [ ] Exportación anterior archivada en `seo/history/`.
- [ ] Clusters afectados actualizados.
- [ ] Dashboard actualizado.
- [ ] Roadmap revisado.
- [ ] Entrada en historial creada.

---

## Resultado esperado

Un sistema actualizado que refleja la realidad actual de Archwise en Google, con decisiones revisadas y acciones priorizadas correctamente según los nuevos datos.

---

## Advertencias

- **No confundir fluctuación con tendencia**: una posición que sube 10 puntos en una sola exportación puede ser una fluctuación normal. Se necesitan al menos 2-3 exportaciones consecutivas para confirmar una tendencia.
- **No actuar sobre consultas con < 5 impresiones**: el ruido estadístico a ese nivel es muy alto.
- **No interpretar 0 clics como señal negativa**: páginas en posición 6-10 pueden tener 0 clics simplemente porque el volumen de búsqueda es bajo, no porque el contenido sea irrelevante.
