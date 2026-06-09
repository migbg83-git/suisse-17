# Framework Comprehension Audit

Fecha: 2026-06-09  
Alcance: Página Framework de Archwise  
Criterio: Claridad conceptual y comprensión. Sin análisis de CSS ni diseño visual.

## Resumen Ejecutivo

La página comunica con fuerza la tesis principal en los primeros segundos: Archwise es un framework de 6 capas con orden causal para evitar deuda estructural en IA empresarial. Ese mensaje base sí se entiende.

La principal fricción de comprensión no está en el qué, sino en el cómo usarlo para tomar decisiones ejecutivas inmediatas. El visitante entiende que existe un sistema, pero no siempre entiende rápido:

1. Cuál es el output concreto que obtiene al terminar la página.
2. Qué decisión de negocio puede tomar hoy con menor riesgo.
3. Cómo se conectan entre sí Mapa, Capas, Navigator, Continuidad y Vocabulario en un flujo único.
4. Qué significa en práctica operacional términos de alta abstracción (Sequence Integrity, Interface Integrity, etc.) sin ejemplos mínimos.

Riesgo principal: abandono por densidad conceptual y ambigüedad de siguiente paso para perfiles senior con poco tiempo.

---

## 1) Perfil: CTO (primera visita)

### Qué entiende en los primeros 30 segundos

1. La tesis central: el fallo en IA empresarial es arquitectónico, no de modelos.
2. Existe una estructura de 6 capas con dependencias causales.
3. Hay una promesa de control de riesgo y escalado sin deuda estructural.
4. Puede iniciar por capas o por una ruta recomendada.

### Qué no entiende

1. Qué resultado ejecutivo tangible obtiene en 15-20 minutos de lectura (por ejemplo: priorización de 3 decisiones, secuencia de implementación trimestral, o diagnóstico de riesgo).
2. Qué criterio operativo distingue cada capa cuando los límites entre Governance, Operating Model y Context Systems pueden percibirse solapados.
3. Si el framework es diagnóstico, priorización, ejecución o auditoría; hoy parece todo a la vez.
4. Qué significa exactamente "ruta recomendada" en términos de decisiones accionables y no solo de lectura.

### Preguntas abiertas

1. ¿Qué KPI o señal de negocio mejora primero al aplicar este enfoque?
2. ¿Cuál es el orden mínimo viable para una empresa que ya tiene copilots en producción?
3. ¿Qué se considera "deuda estructural" medible en este contexto?
4. ¿Qué tiempo/coste organizativo implica moverse de capa a capa?

### Punto potencial de abandono

1. Después del bloque "Cómo navegar Archwise" si no aparece un deliverable explícito tipo "si estás en X situación, toma Y decisión esta semana".
2. En "Constructor de ruta" si percibe que está configurando una lista de lectura y no un mecanismo de decisión ejecutiva.

---

## 2) Perfil: Enterprise Architect

### Qué entiende en los primeros 30 segundos

1. Archwise propone causalidad entre capas y trazabilidad de decisiones.
2. El mapa de 6 capas ordena dependencias arquitectónicas.
3. El vocabulario sugiere un marco de integridad sistémica (sequence, evidence, coherence, interface).
4. Hay intención de enlazar decisiones con evidencia y riesgos.

### Qué no entiende

1. La semántica exacta de frontera entre capas (qué entra/sale de cada capa como artefacto verificable).
2. Qué regla formal determina que una dependencia está "satisfecha" para avanzar.
3. Cómo se evalúa la integridad intercapas sin un método o checklist explícito en esta misma página.
4. Si "Navigator" representa patrón de arquitectura o solo curación editorial por perfil/intención.

### Preguntas abiertas

1. ¿Cuál es el metamodelo de la capa (inputs, constraints, outputs, handoff criteria)?
2. ¿Qué anti-patterns concretos invalidan la secuencia?
3. ¿Cómo se resuelven conflictos entre governance y velocidad operativa?
4. ¿Existe una cadencia de revisión arquitectónica recomendada asociada al framework?

### Punto potencial de abandono

1. En la transición de "Mapa" a "Qué habilita cada capa" si no encuentra criterios explícitos de validación de dependencia.
2. En "Vocabulario del framework" si percibe abstracción alta sin puente inmediato a mecanismo operativo.

---

## 3) Perfil: Head of Engineering

### Qué entiende en los primeros 30 segundos

1. El orden de activación importa para evitar retrabajo y deuda.
2. El framework conecta decisiones arquitectónicas con operación.
3. Puede seleccionar perfil + intención para obtener una ruta sugerida.
4. Hay relación entre ejecución de equipos, memoria organizativa y escalado.

### Qué no entiende

1. Qué debe cambiar en la operación semanal de ingeniería a partir del framework (rituales, ownership, criterios de done).
2. Cómo traducir rápidamente cada capa a backlog/roadmap de equipo.
3. Qué priorizar primero si hay presión simultánea de entrega y governance.
4. Diferencia práctica entre "leer artículos" y "ejecutar decisiones" en su contexto.

### Preguntas abiertas

1. ¿Qué decisiones son irreversibles y deben protegerse con gates?
2. ¿Qué dependencia rota explica hoy su inconsistencia de entregas?
3. ¿Cuál es el playbook de 30 días para empezar sin frenar delivery?
4. ¿Qué métricas de ingeniería deberían mapearse a cada capa?

### Punto potencial de abandono

1. En el bloque de capas, cuando ve descripciones correctas pero no un "cómo operarlo mañana".
2. En "Elige tu siguiente paso" si no identifica un CTA directo a implementación técnica/operativa y ve rutas más narrativas.

---

## 4) Perfil: Director de Transformación Digital

### Qué entiende en los primeros 30 segundos

1. Archwise ofrece un marco transversal para ordenar transformación IA.
2. El problema no es solo tecnología: incluye governance, contexto y memoria.
3. El modelo busca coherencia entre estrategia y ejecución multiarea.
4. Hay rutas según perfil e intención para orientar entrada.

### Qué no entiende

1. Cómo conectar el framework con agenda de cambio organizativo, adopción y gestión de stakeholders.
2. Qué resultado intermedio puede presentar al comité en corto plazo.
3. Qué parte del framework requiere sponsorship ejecutivo vs. liderazgo técnico.
4. Cuál es la secuencia de despliegue por unidades de negocio o dominios.

### Preguntas abiertas

1. ¿Cómo se gobierna el cambio entre áreas con madurez desigual?
2. ¿Qué capacidades deben centralizarse y cuáles federarse por dominio?
3. ¿Cómo se mide avance de transformación más allá de outputs técnicos?
4. ¿Qué riesgos de adopción humana aparecen al subir autonomía agéntica?

### Punto potencial de abandono

1. Tras entender la tesis, si no encuentra una traducción explícita a programa de transformación (fases, hitos, responsables).
2. En el "Constructor de ruta" si no queda claro que la salida sirve para toma de decisiones de cambio organizacional, no solo para lectura.

---

## Problemas de Comprensión Priorizados (cross-profile)

### Crítico

1. Falta de output explícito por sesión de lectura.
   Impacto: perfiles senior no visualizan retorno inmediato de tiempo.
2. Ambigüedad entre contenido editorial y mecanismo de decisión.
   Impacto: se percibe como biblioteca curada en lugar de sistema operativo de decisiones.

### Alto

1. Definiciones de capas y términos avanzados sin puente operativo inmediato.
   Impacto: alta carga cognitiva para comprender aplicación práctica.
2. Flujo conceptual fragmentado entre secciones (Mapa, Capas, Navigator, Vocabulario, Continuidad).
   Impacto: el usuario entiende piezas, no siempre el recorrido completo.

### Medio

1. CTA de continuidad parcialmente orientados a exploración general.
   Impacto: reduce sensación de avance para perfiles que buscan ejecución inmediata.
2. Algunas promesas estratégicas no anclan con criterios de decisión concretos en la misma página.
   Impacto: preguntas abiertas que pueden frenar adopción temprana.

---

## Señales de Abandono Más Probables

1. Cuando el usuario no detecta en 1-2 minutos "qué decisión concreta tomo hoy".
2. Cuando interpreta el Navigator como recomendador de lectura y no de acción.
3. Cuando encuentra vocabulario avanzado sin ejemplo operativo mínimo por término.
4. Cuando no identifica una ruta corta para su problema urgente (riesgo, control, escalado o adopción).

---

## Conclusión

La página Framework logra comunicar con claridad la tesis y la estructura causal de Archwise. El principal gap no es conceptual de alto nivel, sino de aterrizaje decisional inmediato para perfiles ejecutivos y arquitectónicos.

En términos de comprensión: el visitante entiende el marco, pero puede no entender con suficiente rapidez cómo convertirlo en una decisión concreta de negocio, arquitectura u operación en su contexto actual. Esa brecha es el principal riesgo de abandono.
