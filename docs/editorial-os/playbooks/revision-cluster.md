# Playbook: Revisión de Cluster

> Versión: 1.0  
> Cuándo usar: Trimestral, o cuando se publica un artículo en el cluster, o tras una exportación GSC significativa

---

## Cuándo utilizarlo

Usar este playbook cuando:
1. Se ha publicado un artículo nuevo en el cluster.
2. La última exportación GSC muestra cambios notables en páginas del cluster.
3. Ha pasado un trimestre desde la última revisión de este cluster.
4. Se está considerando proponer un nuevo artículo para el cluster.

---

## Pasos

### 1. Leer el estado actual del cluster
- Abrir `docs/editorial-os/clusters/[nombre-del-cluster].md`.
- Leer la sección "Estado de cobertura".
- Leer la sección "Señales SEO".
- Leer el backlog del cluster.

### 2. Actualizar los datos de GSC
- Consultar `seo/current-signals.md` para los datos más recientes.
- Actualizar la tabla "Señales SEO" del documento del cluster con los datos nuevos.
- Añadir la fecha de actualización al inicio del documento.

### 3. Evaluar el estado de cobertura
Para cada dimensión del cluster, responder:
- ¿Ha mejorado la cobertura desde la última revisión? (artículos nuevos publicados)
- ¿Sigue siendo un hueco relevante?
- ¿La señal de GSC confirma o cuestiona la prioridad del hueco?

**Criterio de evidencia**:
- Hueco con > 20 impresiones en GSC → prioridad alta para nuevo artículo.
- Hueco sin señal GSC → prioridad baja, no actuar todavía.
- Hueco con señal de búsqueda en consultas relacionadas → evidencia parcial, registrar y monitorizar.

### 4. Evaluar el enlazado interno del cluster
- ¿Los artículos del cluster se enlazan entre sí?
- ¿El artículo pilar recibe enlaces desde artículos de capas superiores?
- ¿Los artículos secundarios enlazan hacia el pilar?

Si hay oportunidades de enlazado no ejecutadas del backlog anterior: priorizar si hay evidencia que justifique el esfuerzo.

### 5. Revisar el backlog del cluster
Para cada ítem del backlog:
- **Completado**: eliminar o mover a historial.
- **Sin cambios**: mantener con nota de "sin evidencia nueva".
- **Nueva evidencia**: actualizar el ítem con los nuevos datos y revaluar la prioridad.

### 6. Actualizar el estado del cluster
Revaluar el estado global del cluster: Fuerte / Parcial / Débil / En construcción.

Criterios:
- **Fuerte**: pilar sólido + 3+ artículos secundarios + señal GSC positiva.
- **Parcial**: pilar sólido pero huecos de cobertura importantes O señal GSC débil.
- **Débil**: < 2 artículos directos O posición media > 30 en todas las páginas.
- **En construcción**: cluster nuevo sin artículos publicados todavía.

### 7. Documentar la revisión
- Actualizar la cabecera "Última actualización" del documento del cluster.
- Crear entrada en `docs/editorial-os/history/YYYY-MM-DD-cluster-[nombre].md` con: qué cambió, qué decisiones se tomaron, qué acciones se ejecutaron.

---

## Criterios de completitud

- [ ] Datos GSC actualizados en el documento del cluster.
- [ ] Estado de cobertura revisado.
- [ ] Backlog actualizado.
- [ ] Estado global del cluster revaluado.
- [ ] Entrada en historial creada.

---

## Resultado esperado

Un documento de cluster que refleja la realidad actual: cobertura real, señales SEO actuales y un backlog limpio con solo las acciones relevantes.
