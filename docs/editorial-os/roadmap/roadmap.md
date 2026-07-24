# Archwise — Roadmap Editorial y SEO

> Versión: 1.0  
> Fecha base: 2026-07-24  
> Próxima revisión: cuando se ejecute una acción del horizonte "Ahora", o mensualmente

---

## Cómo leer este roadmap

Cada acción incluye:
- **Tipo**: Técnica / Enlazado / Meta / Contenido / Seguimiento
- **Evidencia**: clasificación de la evidencia que justifica la acción
- **Dependencia**: qué debe estar listo antes de ejecutar esta acción
- **Impacto esperado**: qué resultado se anticipa (con su nivel de confianza)

Niveles de evidencia:
- `HECHO` — dato directo verificado
- `INFERENCIA` — conclusión razonada
- `HIPÓTESIS` — posible, no confirmado

---

## Horizonte 1 — Ahora (acciones con evidencia sólida)

Estas acciones tienen evidencia suficiente para ejecutarlas sin esperar más datos.

---

### NOW-01 — Revisar meta descripción de article-14
**Tipo**: Meta  
**Cluster**: Prompt Engineering  
**Evidencia**: `HECHO` — 53 impresiones, posición 6.3, 0 clics. Mayor señal de CTR desperdiciado del corpus.  
**Dependencia**: Ninguna.  
**Acción concreta**: Revisar y mejorar el campo `description` del frontmatter de `content/enterprise-ai/article-14/article.md`. La nueva descripción debe: ser < 160 caracteres, incluir el concepto principal en las primeras palabras, expresar el beneficio para el lector.  
**Impacto esperado**: Si la descripción actual es el factor limitante del CTR (hipótesis probable con pos 6.3), una mejora podría generar 2-5 clics adicionales por mes. Confianza: media.  
**Playbook**: `playbooks/actualizar-articulo.md` (Tipo B)

---

### NOW-02 — Revisar meta descripción de article-15
**Tipo**: Meta  
**Cluster**: Context Engineering / Prompt Engineering  
**Evidencia**: `HECHO` — 36 impresiones, posición 6.5, 0 clics. Segunda señal de CTR desperdiciado.  
**Dependencia**: Ninguna.  
**Acción concreta**: Revisar y mejorar el campo `description` del frontmatter de `content/enterprise-ai/article-15/article.md`.  
**Impacto esperado**: Similar a NOW-01. Confianza: media.  
**Playbook**: `playbooks/actualizar-articulo.md` (Tipo B)

---

### NOW-03 — Corregir fecha de article-12
**Tipo**: Técnica  
**Cluster**: AI-Ready Systems  
**Evidencia**: `HECHO` — El campo `date` contiene "2024-06-07". Todos los demás artículos del cluster tienen fechas 2026.  
**Dependencia**: Confirmar con el equipo editorial cuál es la fecha correcta.  
**Acción concreta**: Una vez confirmada la fecha, corregir el campo `date` en el frontmatter de `content/enterprise-ai/article-12/article.md`.  
**Impacto esperado**: Consistencia del corpus y corrección de posible señal de frescura negativa. Confianza: alta en el problema, media en el impacto SEO.  
**Playbook**: `playbooks/actualizar-articulo.md` (Tipo A)

---

### NOW-04 — Verificar indexación de article-02 y article-03
**Tipo**: Técnica  
**Cluster**: Knowledge Debt / Context Engineering  
**Evidencia**: `HECHO` — Ninguno de los dos aparece en el informe de páginas de GSC.  
**Dependencia**: Acceso a Google Search Console (URL Inspection).  
**Acción concreta**: Usar la herramienta "Inspección de URL" en GSC para verificar el estado de:
- `https://archwise.org/articulos/deuda-tecnica-ia-revela`
- `https://archwise.org/articulos/documentacion-necesita-llm`

Si están desindexadas: solicitar indexación desde GSC.  
**Impacto esperado**: Si están desindexadas y se reindexan, comenzarán a aparecer en futuros informes GSC. Confianza en la acción: alta. Impacto en tráfico: incierto (depende del volumen de búsqueda de sus términos).  
**Playbook**: No hay playbook específico. Acción directa en GSC.

---

## Horizonte 2 — Próximo mes (acciones con evidencia parcial)

Estas acciones tienen evidencia suficiente para planificarlas, pero se ejecutarán después de completar el Horizonte 1 o de obtener confirmación de la próxima exportación GSC.

---

### M1-01 — Añadir enlazado desde art-21 hacia art-16
**Tipo**: Enlazado  
**Cluster**: AI Operating Model → AI-Augmented Teams  
**Evidencia**: `INFERENCIA` — Art-16 tiene 42 impresiones en posición 55. Más autoridad entrante puede mejorar su posición.  
**Dependencia**: Ninguna técnica. Requiere leer art-21 para encontrar el punto de inserción natural.  
**Impacto esperado**: Mejora gradual de la posición de art-16 con más exportaciones GSC. Confianza: baja (muchas variables).  
**Playbook**: `playbooks/enlazado-interno.md`

---

### M1-02 — Monitorizar posición de art-30 en exportación de agosto
**Tipo**: Seguimiento  
**Cluster**: Integración y Coherencia  
**Evidencia**: `HECHO` — Art-30 tiene 59 impresiones (mayor del corpus) con posición 24. La consulta "respuesta arquitectónica coherente" tiene 53 impresiones en posición 26.  
**Dependencia**: Exportación GSC de agosto.  
**Acción concreta**: En la próxima exportación, verificar si art-30 ha subido hacia posición < 15. Si ha subido: evaluar mejora de snippet. Si ha bajado: analizar causas.  
**Impacto esperado**: Si la posición sube a < 15, el artículo podría comenzar a generar clics. Confianza: baja (posición 24 es muy variable).  
**Playbook**: `playbooks/revision-search-console.md`

---

### M1-03 — Monitorizar posición de "knowledge debt" en exportación de agosto
**Tipo**: Seguimiento  
**Cluster**: Knowledge Debt  
**Evidencia**: `HECHO` — 1 impresión en posición 1. Evidencia insuficiente para actuar ahora.  
**Dependencia**: Exportación GSC de agosto.  
**Acción concreta**: Verificar si el término "knowledge debt" tiene más impresiones en la siguiente exportación y si la posición se mantiene.  
**Impacto esperado**: Si se confirma posición top 3 con > 10 impresiones, considerar refuerzo del cluster KD. Confianza: muy baja con datos actuales.  
**Playbook**: `playbooks/revision-search-console.md`

---

### M1-04 — Verificar enlazado entre arts 14 y 15
**Tipo**: Enlazado  
**Cluster**: Prompt Engineering  
**Evidencia**: `INFERENCIA` — Ambos artículos son los de mayor impresión del corpus. Un lector que llega por uno debería poder llegar al otro fácilmente.  
**Dependencia**: NOW-01 y NOW-02 deben completarse primero.  
**Acción concreta**: Leer art-14 y verificar si enlaza hacia art-15. Leer art-15 y verificar si enlaza hacia art-14. Si no hay enlace: aplicar playbook de enlazado interno.  
**Playbook**: `playbooks/enlazado-interno.md`

---

## Horizonte 3 — Próximo trimestre (acciones con hipótesis)

Estas acciones tienen justificación estratégica pero dependen de confirmar hipótesis con datos futuros.

---

### Q1-01 — Proponer brief de artículo: auditoría de Knowledge Debt
**Tipo**: Contenido  
**Cluster**: Knowledge Debt  
**Evidencia**: `HIPÓTESIS` — "Knowledge debt" en posición 1 (1 impresión). Hueco editorial claro en el cluster.  
**Dependencia**: Confirmar en 2 exportaciones GSC que el término tiene demanda real.  
**Acción cuando se desbloquea**: Crear brief en `content/enterprise-ai/article-32/brief.md` o el siguiente número disponible. Seguir `playbooks/nuevo-articulo.md`.

---

### Q1-02 — Añadir enlazado desde arts 20/21 hacia arts 14/15
**Tipo**: Enlazado  
**Cluster**: AI Governance / AI Operating Model → Context Engineering  
**Evidencia**: `INFERENCIA` — Arts 20 y 21 tienen buenas posiciones. Art-14 y art-15 necesitan autoridad entrante. La conexión temática es genuina (el governance y el operating model dependen del context engineering).  
**Dependencia**: M1-04 completado. Verificar que el punto de inserción es natural.  
**Playbook**: `playbooks/enlazado-interno.md`

---

### Q1-03 — Proponer brief de artículo: AI Governance para sistemas agénticos
**Tipo**: Contenido  
**Cluster**: AI Governance / Agentic AI  
**Evidencia**: `HIPÓTESIS` — Hueco editorial claro. Sin señal GSC todavía para el término específico.  
**Dependencia**: Datos GSC de al menos 2 exportaciones adicionales.

---

### Q1-04 — Evaluar estado de la marca "archwise" en GSC
**Tipo**: Marca  
**Cluster**: Framework Archwise  
**Evidencia**: `HECHO` — "archwise" en posición 8.8 con 39 impresiones es una posición baja para búsqueda de marca propia.  
**Dependencia**: Exportación GSC de agosto para confirmar si la posición de marca ha mejorado.  
**Acción concreta**: Si en agosto la posición para "archwise" sigue > 5: investigar qué resultados aparecen antes de la homepage en esa búsqueda y evaluar si hay acciones técnicas disponibles (rich snippets, sitelinks).

---

## Horizonte 4 — Largo plazo (decisiones estratégicas)

Estas acciones requieren contexto que actualmente no existe. No tienen fecha. Se revisan una vez por trimestre.

---

### LP-01 — Artículo de entrada al Framework Archwise sin contexto previo
**Evidencia**: `HIPÓTESIS` — La página `/framework` tiene 15 impresiones. Los lectores que llegan sin haber leído el corpus pueden necesitar una entrada más accesible.  
**Condición de activación**: Cuando el tráfico orgánico supere los 200 clics/mes, los lectores nuevos serán suficientes para justificar una puerta de entrada específica.

---

### LP-02 — Evaluar expansión al mercado en inglés
**Evidencia**: `HECHO` — EE.UU. tiene 200 impresiones con 0 clics. `HIPÓTESIS` — Puede haber demanda en inglés que el contenido en español no puede capturar.  
**Condición de activación**: Cuando el tráfico orgánico en español supere los 1.000 clics/mes y exista capacidad editorial para doble idioma.

---

### LP-03 — Artículo de casos reales aplicando el Framework Archwise
**Evidencia**: `HIPÓTESIS` — Archwise carece de evidencia pública de resultados del framework. Un artículo de casos reales (anonimizados si es necesario) podría fortalecer la autoridad.  
**Condición de activación**: Cuando haya casos documentables y consenso sobre privacidad.

---

## Acciones completadas

*(Se moverán aquí cuando se ejecuten)*

| Fecha | Acción | Resultado |
|-------|--------|-----------|
| — | — | — |
