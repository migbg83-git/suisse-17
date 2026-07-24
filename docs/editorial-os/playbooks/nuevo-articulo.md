# Playbook: Nuevo Artículo

> Versión: 1.0  
> Cuándo usar: Cuando se va a publicar un artículo nuevo en Archwise

---

## Cuándo utilizarlo

Usar este playbook **antes** de publicar cualquier artículo nuevo. Garantiza que el artículo queda integrado en el sistema editorial, no solo añadido al repositorio.

---

## Pasos

### 1. Verificar que existe un brief aprobado
- El brief debe estar en `content/enterprise-ai/article-XX/brief.md`.
- El brief debe incluir: tesis, cluster principal, artículo pilar que refuerza, artículos desde los que debería recibir enlaces.
- Si no existe brief: detener. Crear brief primero.

### 2. Identificar el cluster al que pertenece
- Consultar `docs/editorial-os/clusters/README.md` para el índice de clusters.
- Abrir el documento del cluster correspondiente.
- Verificar que el artículo nuevo cubre un hueco del cluster o refuerza el pilar.
- Si no cubre ningún hueco identificado: documentar por qué se publica igualmente.

### 3. Verificar el frontmatter antes de publicar
Comprobar que el frontmatter de `article.md` incluye:
- `title:` — título final
- `slug:` — slug definitivo y único
- `description:` — meta descripción (< 160 caracteres, orientada al lector, no al autor)
- `date:` — fecha en formato `YYYY-MM-DD`
- `cluster:` — cluster principal

Si alguno falta: completar antes de publicar.

### 4. Añadir el artículo al inventario del cluster
- Abrir `docs/editorial-os/clusters/[cluster-correspondiente].md`.
- Añadir el artículo a la tabla de "Artículos secundarios" (o actualizar "Artículo pilar" si corresponde).
- Actualizar el estado de cobertura si el artículo cubre un hueco.

### 5. Identificar y documentar los enlaces internos necesarios
- Identificar qué artículos existentes deberían enlazar hacia el nuevo artículo.
- Identificar hacia qué artículos existentes debería enlazar el nuevo artículo.
- Registrar estas oportunidades en el backlog del cluster.
- **Nota**: Los enlaces se añaden en una fase de editorial separada, no en este playbook.

### 6. Actualizar el dashboard
- Abrir `docs/editorial-os/dashboard.md`.
- Actualizar P1 (estado del sistema): número total de artículos publicados.
- Verificar P7 (pilares): ¿el nuevo artículo cambia algún pilar?
- Verificar P8 (huérfanos): ¿el nuevo artículo resuelve algún huérfano o crea uno nuevo?

### 7. Actualizar el roadmap
- Abrir `docs/editorial-os/roadmap/roadmap.md`.
- Mover el artículo del horizonte "Próximo mes" o "Trimestre" al estado "publicado".
- Verificar si su publicación desbloquea otras acciones del roadmap.

---

## Criterios de completitud

El playbook se considera completado cuando:
- [ ] El frontmatter está verificado y completo.
- [ ] El artículo está registrado en el documento del cluster correspondiente.
- [ ] Los enlaces internos necesarios están documentados en el backlog del cluster.
- [ ] El dashboard está actualizado.
- [ ] El roadmap está actualizado.

---

## Resultado esperado

Un artículo que no solo existe en el repositorio, sino que está integrado en el sistema editorial: el equipo sabe qué lugar ocupa, qué enlaces necesita y cómo se relaciona con el cluster al que pertenece.
