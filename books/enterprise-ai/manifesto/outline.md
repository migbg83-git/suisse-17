# Outline — Manifiesto

## Objetivo del documento

Convertir las ideas dispersas en los cuatro artículos fundacionales en una filosofía coherente, comunicable y memorable. No es un resumen. Es una destilación: las ideas reducidas a su esencia, organizadas con lógica interna clara.

El manifiesto debe poder leerse en 5 minutos y recordarse indefinidamente.

---

## Estructura lógica

La filosofía se organiza en tres capas:

```
1. OBSERVACIÓN   →  Qué está cambiando (diagnóstico)
2. PRINCIPIOS    →  Qué creemos como consecuencia (posición)
3. IMPLICACIONES →  Qué se sigue de creerlo (acción)
```

---

## Capa 1: La observación

### Tesis principal

**La IA ha cambiado qué es escaso y qué es abundante en la industria del software.**

- La capacidad de producir código se vuelve abundante.
- El criterio arquitectónico, el conocimiento de contexto y las decisiones fundamentadas permanecen escasos.
- El valor económico se concentra en lo escaso.
- Por tanto: la arquitectura vuelve a ser estratégica.

### Observaciones que soportan la tesis

1. La IA funciona como espejo — refleja la calidad del contexto explícito.
2. Los humanos compensaban vacíos de conocimiento. La IA no puede.
3. Los costes de la deuda de conocimiento, antes invisibles, ahora son inmediatos y medibles.
4. Las herramientas son amplificadores neutros — amplifican criterio o amplifican confusión.
5. El cuello de botella se ha movido de escribir a decidir.
6. Los equipos con mejor contexto obtienen mejores resultados — no los que tienen mejores herramientas.

---

## Capa 2: Los principios

### Estructura de principios

De la observación se derivan ocho principios. Se organizan en tres grupos lógicos:

#### Grupo A: Sobre la información (qué documentar)

| # | Principio | En una frase |
|---|-----------|--------------|
| 1 | Lo que no está escrito no existe | La IA solo opera con lo explícito. El conocimiento tácito es un vacío absoluto para ella. |
| 2 | Documenta lo exclusivo, no lo genérico | Si existe en internet, el modelo lo sabe. Si solo existe en tu equipo, debes dárselo. |
| 3 | Menos correcto > más genérico | Veinte líneas de decisiones críticas superan cuarenta páginas de documentación redundante. |

#### Grupo B: Sobre el valor (dónde está)

| # | Principio | En una frase |
|---|-----------|--------------|
| 4 | Contexto sobre prompts | La calidad del contexto importa órdenes de magnitud más que la formulación de la pregunta. |
| 5 | Decisiones sobre ejecución | El valor se concentra en decidir qué construir y cómo — no en escribirlo. |
| 6 | Criterio sobre velocidad | La velocidad sin criterio produce deuda a velocidad de máquina. |

#### Grupo C: Sobre la inversión (qué construir)

| # | Principio | En una frase |
|---|-----------|--------------|
| 7 | El conocimiento explícito es infraestructura | No es burocracia. Es infraestructura operativa del mismo nivel que CI/CD o monitoring. |
| 8 | El contexto produce retornos compuestos | Cada decisión documentada mejora todas las interacciones futuras con cualquier herramienta. |

---

## Capa 3: Las implicaciones

### Consecuencias derivadas de los principios

De aceptar estos principios se siguen consecuencias concretas sobre:

#### Para equipos

- Equipos pequeños con alto criterio > equipos grandes orientados a volumen.
- El ratio decisión/ejecución en un equipo importa más que el headcount.
- El onboarding, la consistencia y el bus factor mejoran como efecto secundario del mismo esfuerzo.

#### Para organizaciones

- La calidad del contexto organizacional es la ventaja competitiva que no se puede copiar.
- El conocimiento explícito es un activo que se aprecia — no se deprecia.
- Cada mejora tecnológica amplifica la ventaja de quien tiene mejor contexto.

#### Para la industria

- El modelo de body-shopping (vender horas de ejecución) pierde diferenciación.
- Las estimaciones deberían reflejar complejidad de decisión, no volumen de código.
- El valor profesional se mueve de velocidad de ejecución a calidad de decisión.

#### Para la carrera individual

- Las habilidades que ganan valor: pensamiento sistémico, articulación de trade-offs, comunicación de contexto.
- Las que pierden valor relativo: velocidad de tecleo, memorización de APIs, ejecución mecánica.
- El conocimiento tácito tiene techo. El conocimiento explícito tiene retornos compuestos.

---

## Lo que rechazamos (anti-posiciones)

Una filosofía se define también por lo que niega. Declaraciones breves:

1. Rechazamos el hype — promesas vacías de productividad mágica.
2. Rechazamos la industria de prompts — el cuello de botella no es cómo preguntas.
3. Rechazamos la documentación-burocracia — wikis de 200 páginas que nadie lee.
4. Rechazamos la métrica de output — velocity y tickets cerrados como medida de valor.
5. Rechazamos la ejecución como diferenciador — escribir más rápido no es la ventaja.
6. Rechazamos la normalización de lo tácito — "siempre hemos funcionado así" no es argumento.
7. Rechazamos las predicciones apocalípticas — no es reemplazo, es redistribución.

---

## Estructura propuesta para manifesto.md

### Orden de lectura

```
1. Apertura (2-3 frases)
   → Declaración clara de la tesis principal.

2. Lo que observamos (5-6 puntos)
   → Las observaciones que soportan la tesis. Breve. Factual.

3. Lo que creemos (8 principios)
   → Los principios derivados. Una frase por principio + 1-2 líneas de expansión.

4. Lo que rechazamos (7 puntos)
   → Anti-posiciones. Directas.

5. Lo que se sigue (implicaciones)
   → Consecuencias para equipos, organizaciones, industria, individuos.

6. Cierre (2-3 frases)
   → Remate. La idea que debe quedarse después de cerrar el documento.
```

### Formato

- **Longitud total:** 800-1200 palabras.
- **Tono:** Declarativo. Sin justificación extensa. Afirmaciones con convicción tranquila.
- **Formato:** Prosa corta + listas. Sin headers innecesarios. Denso pero legible.
- **Relación con artículos:** El manifiesto NO explica ni argumenta. Los artículos argumentan. El manifiesto declara.

---

## Frases candidatas para apertura y cierre

### Aperturas posibles

- "La IA ha cambiado qué es escaso y qué es abundante. Y el valor siempre se concentra en lo escaso."
- "Durante una década, la industria optimizó para producir código. Las condiciones han cambiado."
- "Lo que no está escrito no existe para la IA. Lo que no existe no puede amplificarse. Lo que no se amplifica se queda atrás."

### Cierres posibles

- "Las condiciones han cambiado. La arquitectura vuelve a ocupar el lugar que le corresponde. No porque alguien lo haya decidido — porque la economía lo exige."
- "Los equipos que hoy transforman conocimiento tácito en explícito están construyendo la ventaja que no se puede copiar. Los demás están acumulando la deuda que no podrán ignorar."
- "El contexto produce retornos compuestos. Cada semana que pasa con conocimiento explícito es una semana de ventaja. La pregunta no es si empezar — es cuánta ventaja estás dispuesto a dejar pasar."

---

## Notas de coherencia

### Progresión de los 4 artículos hacia el manifiesto

| Artículo | Función | Lo que aporta al manifiesto |
|----------|---------|----------------------------|
| Art 01: architecture.md | Artefacto concreto | Principio 1 (lo no escrito no existe), Principio 4 (contexto > prompts), Principio 8 (retornos compuestos) |
| Art 02: Deuda técnica | Diagnóstico | Observaciones 1-3, el concepto de "deuda de conocimiento", la IA como espejo |
| Art 03: Qué documentar | Criterio de decisión | Principios 2-3 (exclusivo > genérico, concisión), Principio 7 (infraestructura) |
| Art 04: Arquitectura estratégica | Visión macro | Tesis principal (escaso/abundante), las implicaciones para industria/consultoría/carrera |

### Lo que el manifiesto NO debe ser

- No es un resumen de los artículos.
- No es un artículo más.
- No es marketing.
- No es una landing page.
- No es un readme del proyecto.

Es una declaración de posición. Una filosofía comprimida. El documento que quien lo lea diga: "Entiendo lo que esta gente cree y por qué."

---

*Última actualización: Mayo 2026*