# Framework UX Review

Fecha: 2026-06-06
Rol aplicado: Principal UX Designer + Information Architect + Product Designer
Alcance: revision UX/UI de /framework (sin cambios de codigo)

---

## 1) Resumen ejecutivo

La pagina actual comunica estructura, pero no comunica sistema.

Hoy el usuario ve:
- una pagina de bloques apilados,
- controles que parecen administrativos,
- listas de enlaces por seccion.

Deberia ver:
- un sistema causal con secuencia clara,
- una narrativa de decision,
- una ruta accionable por contexto (perfil + intencion).

Diagnostico global:
- La arquitectura conceptual esta bien.
- La expresion UX/UI se percibe como backoffice funcional.
- Falta direccion visual para convertir datos en comprension.

---

## 2) Que transmite actualmente la pagina

Percepcion dominante actual:
- "Indice tecnico con filtros" mas que "framework de decisiones".

Mensajes que hoy si se perciben:
- Hay 6 capas.
- Hay una relacion con articulos.
- Existe un navigator con perfil/intencion.

Mensajes que hoy se diluyen:
- El orden causal (no cronologico).
- El motivo por el cual cada capa habilita la siguiente.
- El valor diferencial de Archwise frente a una lista de contenidos.

---

## 3) Que deberia transmitir

Objetivo de percepcion en 20-30 segundos:
- "Esto no es un menu de articulos: es un mapa de capacidad operativa".

Objetivo de percepcion en 2-3 minutos:
- "Puedo ubicar mi situacion actual y elegir la siguiente decision".

Objetivo de percepcion en 8-10 minutos:
- "Tengo una ruta de lectura precisa para mi caso y entiendo por que ese orden".

---

## 4) Bloques con mayor friccion

### 4.1 Hero

Problema:
- correcto en contenido, debil en posicionamiento visual.

Impacto:
- no instala con fuerza la tesis "orden causal".

### 4.2 Mapa causal

Problema:
- visualmente funciona como listado clicable.

Impacto:
- no se perciben dependencias ni transiciones entre capas.

### 4.3 Capas (detalle)

Problema:
- estructura de acordeon util, pero densidad textual homogena.

Impacto:
- cuesta distinguir "que hace esta capa" vs "que debo hacer ahora".

### 4.4 Navigator

Problema:
- selectores y patron de uso parecen formulario interno.

Impacto:
- sensacion de panel de gestion, no de guia de lectura.

### 4.5 Vocabulario

Problema:
- se percibe como glosario aislado al final.

Impacto:
- no ayuda a decidir durante la navegacion; llega tarde.

### 4.6 Continuidad

Problema:
- cierre correcto pero tacticamente plano.

Impacto:
- no refuerza "siguiente paso recomendado" segun contexto previo.

---

## 5) Elementos que parecen formularios (en lugar de navegacion)

Patrones detectados:
- controles "Perfil" e "Intencion" como selects tipicos de configuracion.
- labels y composicion vertical de control-form-control.
- ausencia de narrativa entre seleccion y resultado.

Consequence UX:
- el usuario interpreta "configurar opciones" en vez de "navegar decisiones".

---

## 6) Elementos que parecen backoffice

Senales visuales actuales:
- tarjetas y bordes uniformes de baja expresividad.
- repeticion de bloques con poca jerarquia interna.
- foco en estados tecnicos (slugs no resueltos) visibles en flujo principal.

Consequence UX:
- estetica de panel interno o documento de auditoria.
- menor autoridad editorial para un marco estrategico.

---

## 7) Que partes si ayudan a comprender el Framework

Fortalezas actuales:
- la division en 6 bloques es correcta y util.
- el mapa + detalle + navigator ya forman una columna vertebral valida.
- los warnings no bloqueantes preservan robustez sin romper flujo.
- los anchors internos habilitan lectura no lineal.

Lectura:
- La base de producto es buena.
- El problema principal es semantico-visual, no estructural.

---

## 8) Diagnostico IA (arquitectura de informacion)

Problema central de IA:
- la pagina aun esta modelada por "componentes" y no por "decisiones".

Actualmente predomina:
- organizacion por modulo.

Deberia predominar:
- organizacion por pregunta del usuario:
  - donde estoy,
  - que me falta,
  - que leo ahora,
  - como continuo.

---

## 9) Principios de rediseño UX/UI (sin implementar)

1. De listado a sistema
- cada bloque debe explicar relacion causal, no solo ofrecer links.

2. De controles a decisiones
- navigator debe sentirse como "ruta guiada", no como filtro.

3. De homogeneidad a jerarquia
- variar peso visual por bloque segun aporte cognitivo.

4. De glosario aislado a soporte contextual
- vocabulario debe reforzar decisiones en curso.

5. De cierre generico a continuidad situacional
- continuidad debe sugerir siguiente accion coherente con el trayecto.

---

## 10) Riesgos UX actuales si no se corrige

Riesgo 1:
- /framework compite con /articulos en vez de complementarlo.

Riesgo 2:
- usuarios estrategicos perciben baja sofisticacion visual y abandonan temprano.

Riesgo 3:
- valor conceptual de Archwise se reduce a taxonomia de contenidos.

Riesgo 4:
- se optimiza SEO antes de resolver comprension, amplificando una experiencia confusa.

---

## 11) Criterios de exito UX para la siguiente iteracion

Metricas cualitativas esperadas:
- el usuario explica en una frase la diferencia entre /framework y /articulos.
- identifica su capa principal en menos de 30 segundos.
- comprende por que la ruta sugerida no es arbitraria.

Metricas de comportamiento esperadas:
- mayor uso de mapa -> capas -> navigator (flujo completo).
- menor rebote tras primer scroll.
- mayor clic en continuidad contextual y no solo en listado general.

---

## 12) Conclusion

La pagina actual ya tiene los componentes correctos, pero todavia no tiene la puesta en escena correcta.

El siguiente salto de calidad no requiere cambiar tesis ni arquitectura conceptual.
Requiere elevar jerarquia visual, lenguaje de interaccion y narrativa de decisiones para que el sistema se entienda antes de optimizar SEO o desplegar.
