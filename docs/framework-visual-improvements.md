# Framework Visual Improvements

Fecha: 2026-06-06
Estado: propuesta UX/UI previa a SEO y despliegue
Alcance: mejoras visuales y de experiencia para /framework (sin codigo)

---

## 1) Objetivo de diseño

Convertir /framework de "pagina de bloques" a "experiencia de orientacion causal".

Resultado esperado:
- menos percepcion de backoffice,
- mas comprension de sistema,
- navegacion mas natural hacia lectura accionable.

---

## 2) Nueva jerarquia visual propuesta

Jerarquia final recomendada:
1. Hero estrategico (tesis + promesa + accion inicial)
2. Mapa causal narrativo (no solo listado)
3. Detalle de capas orientado a decision
4. Navigator como "constructor de ruta"
5. Vocabulario contextual breve
6. Continuidad orientada por escenario

Regla de peso visual:
- Bloques 1-4 concentran la mayor energia visual y narrativa.
- Bloques 5-6 simplifican y cierran, no compiten por protagonismo.

---

## 3) Nuevo Hero

Objetivo:
- instalar de inmediato la diferencia entre framework causal y indice editorial.

Composicion propuesta:
- Headline de tesis (1 idea, 1 frase).
- Subheadline de promesa (que decision habilita esta pagina).
- Franja de "como usar esta pagina" en 3 pasos cortos.
- Dos acciones primarias:
  - Empezar por mi capa
  - Construir mi ruta

Direccion de tono:
- estrategico, claro, no academico.
- sin jerga excesiva en la primera pantalla.

Microcopy sugerida:
- "No navegues por fecha. Navega por dependencias." 
- "Ubica tu capa actual y define la siguiente decision." 

---

## 4) Nuevo Mapa Causal

Objetivo:
- hacer visible la relacion entre capas, no solo su existencia.

Modelo visual propuesto:
- 6 nodos con sentido de flujo.
- conectores visibles entre nodos (progresion causal).
- estado activo fuerte + estados relacionados (anterior/siguiente).

Comportamiento deseado:
- click en nodo activa capa + lleva a detalle + abre panel correspondiente.
- en hover/focus de nodo, mostrar mini "habilita ->" y "riesgo si falta".

Patron de lectura:
- primero sistema (flujo completo), despues nodo (detalle puntual).

---

## 5) Nuevo Navigator

Objetivo:
- dejar de parecer formulario y pasar a parecer guia de decisiones.

Arquitectura propuesta:
- Paso 1: "Quien eres" (perfil)
- Paso 2: "Que necesitas ahora" (intencion)
- Resultado: "Ruta recomendada" (reading path)

Tratamiento visual:
- controles tipo "selector de camino" (opciones con contexto), no look de panel admin.
- bloque de resultado con titulo explicativo:
  - "Ruta sugerida para [perfil] que necesita [intencion]".

Fallback UX:
- si no hay combinacion exacta, mostrar mensaje claro de degradacion:
  - "No hay ruta exacta. Te mostramos la ruta mas cercana para avanzar sin bloquearte."

Transparencia:
- mostrar por que la ruta es fallback (criterio legible, no tecnico).

---

## 6) Nuevo detalle de capas (ajuste visual)

Objetivo:
- que cada capa responda 3 preguntas en segundos.

Estructura interna de cada capa:
1. Que habilita
2. Que riesgo evita
3. Que leer ahora

Mejora clave:
- usar esta estructura fija en todas las capas para reducir carga cognitiva.

Senalizacion recomendada:
- badge de estado activo.
- indicador de dependencia (entrada/salida de capa).

---

## 7) Nuevo Vocabulario

Objetivo:
- pasar de glosario aislado a herramienta de claridad operacional.

Diseno propuesto:
- 5 terminos maximo visibles por defecto.
- cada termino con:
  - definicion corta,
  - "por que importa" en una linea,
  - enlace a articulo base.

Integracion narrativa:
- encabezado que conecte con la lectura actual:
  - "Si un termino te bloquea, resuelvelo aqui y vuelve a la ruta." 

---

## 8) Nueva Continuidad

Objetivo:
- cerrar con siguiente accion concreta, no con CTA generica.

Modelo propuesto:
- 3 caminos de continuidad claramente diferenciados:
  - Explorar todo el corpus (/articulos)
  - Volver a principios (manifesto)
  - Mantener continuidad (newsletter cuando este disponible)

Mejora principal:
- incluir texto de "cuando elegir cada camino".

Ejemplo:
- "Si ya entendiste tu capa, pasa a /articulos para profundizar." 
- "Si aun no compartes el marco con tu equipo, vuelve al manifesto." 

---

## 9) Reduccion de sensacion backoffice

Decisiones visuales recomendadas:
- menos apariencia de tabla/panel.
- mayor contraste de jerarquia entre titulos, explicacion y acciones.
- reducir lenguaje tecnico de infraestructura en zonas primarias.
- mover feedback tecnico (warnings de datos) a tono secundario no dominante.

---

## 10) Sistema de anclas y navegacion interna

Anclas a conservar:
- /framework#mapa
- /framework#capas
- /framework#navigator
- /framework#vocabulario
- /framework#continuidad

Mejora UX propuesta:
- barra de navegacion interna persistente en desktop.
- "volver arriba" contextual tras interacciones largas.
- etiqueta visible de seccion activa durante scroll.

---

## 11) Guion de experiencia recomendado

Flujo ideal de primera visita:
1. Entiendo tesis en hero.
2. Me ubico en mapa causal.
3. Entro al detalle de mi capa.
4. Ajusto perfil + intencion en navigator.
5. Obtengo ruta concreta de lectura.
6. Cierro con continuidad adecuada.

---

## 12) Criterios de calidad visual para aprobar la siguiente iteracion

Criterio 1:
- El hero explica valor diferencial sin depender de scroll.

Criterio 2:
- El mapa muestra relaciones causales, no solo nodos.

Criterio 3:
- El navigator se usa como "camino recomendado", no como formulario.

Criterio 4:
- El vocabulario reduce friccion conceptual en contexto.

Criterio 5:
- La continuidad propone decision, no solo destino.

---

## 13) Prioridad de implementación posterior (cuando toque)

Prioridad A (impacto inmediato):
- Hero + Mapa + Navigator.

Prioridad B (profundidad de comprension):
- Detalle de capas + Vocabulario.

Prioridad C (cierre y retencion):
- Continuidad contextual.

Secuencia recomendada:
- primero comprension visual,
- despues SEO,
- despues despliegue.
