# Reading Time Validation — Article-26

**Fecha:** 2026-06-04  
**Objetivo:** Confirmar o corregir `readingTime: 27` de article-26/article.json  
**Trigger:** Inconsistencia aparente entre Article-25 (5,610 palabras → 16 min) y Article-26 (5,947 palabras → 27 min)

---

## 1) Corpus Comparison (datos calculados)

| Artículo | Palabras (real) | readingTime (json) | WPM implícito |
|----------|-----------------|-------------------|---------------|
| Article-20 | 2,502 | 15 | 167 |
| Article-21 | 2,375 | 18 | 132 |
| Article-22 | 2,215 | 20 | 111 |
| Article-23 | 4,505 | 23 | **196** |
| Article-24 | 2,852 | 13 | **219** |
| Article-25 | 5,610 | 16 | **351** ⚠️ |
| Article-26 | 5,947 | 27 | **220** |

> **Método de conteo:** PowerShell `($content -split '\s+').Count` sobre article.md completo (incluyendo frontmatter y headings).

---

## 2) Formula Detected

### Artículos 20–22: WPM inconsistente (111–167)

Los tres primeros artículos del corpus muestran WPM bajos (111–167), lo que sugiere una calibración inicial conservadora o que el readingTime fue estimado manualmente sin fórmula fija. Puede reflejar artículos con alta densidad conceptual evaluados a ojo.

### Artículos 23–24: Convergencia hacia ~200–220 WPM

| Artículo | WPM implícito |
|----------|--------------|
| Article-23 | 196 |
| Article-24 | 219 |
| Promedio | **207 WPM** |

A partir de article-23, el corpus converge a una fórmula implícita de **~200–220 palabras por minuto**, que representa lectura ejecutiva moderada-rápida (lector con alta familiaridad con el dominio).

### Article-25: Anomalía (351 WPM)

Article-25 tiene **5,610 palabras** y `readingTime: 16`, lo que implica **351 WPM**. Ese valor está fuera de cualquier rango plausible para lectura de comprensión ejecutiva (habitual: 180–250 WPM). 

**Conclusión:** El readingTime de Article-25 está **subestimado**. El valor correcto a 220 WPM sería:

```
5,610 / 220 = 25.5 → 26 minutos
```

Esto es una **inconsistencia preexistente en article-25**, no en article-26.

### Article-26: Consistente con fórmula 23–24

Article-26 tiene **5,947 palabras** y `readingTime: 27`:

```
5,947 / 220 = 27.03 → 27 minutos  ✓
5,947 / 200 = 29.7  → 30 minutos
```

A 220 WPM, el valor **27 es correcto con precisión de ±1 minuto**.

---

## 3) Validation Results

### ¿Article-26 usa el mismo criterio que el corpus reciente?

| Comparación | Fórmula | Resultado |
|-------------|---------|-----------|
| Article-23 (196 WPM) | 4,505 / 23 | ✓ Aproximado |
| Article-24 (219 WPM) | 2,852 / 13 | ✓ Aproximado |
| **Article-26 (220 WPM)** | **5,947 / 27** | **✓ Consistente** |

**Veredicto:** El readingTime de Article-26 **es coherente** con la fórmula implícita detectada en los artículos más recientes del corpus (23–24).

### ¿Article-25 es la anomalía?

Sí. Article-25 con `readingTime: 16` sobre 5,610 palabras implica 351 WPM, que es inconsistente con el resto del corpus. Esto es un error en Article-25, no en Article-26.

---

## 4) Recommended Reading Time

### Article-26

| Fórmula | Cálculo | Resultado |
|---------|---------|-----------|
| 220 WPM (fórmula corpus 23–24) | 5,947 / 220 | **27 min** ✓ |
| 200 WPM (conservador) | 5,947 / 200 | 30 min |
| 250 WPM (rápido) | 5,947 / 250 | 24 min |

**Recomendación:** Mantener `readingTime: 27`.

La fórmula de 220 WPM es la que produce consistencia con articles 23–24, que son los más próximos cronológicamente y tienen calidad de cálculo documentable.

---

## 5) Final Decision

### Article-26: readingTime = 27 ✅ CORRECTO

**No se modifica article.json.**

El valor `readingTime: 27` es correcto aplicando la misma velocidad de lectura (~220 WPM) que se detecta en articles 23 y 24.

### Article-25: readingTime = 16 ⚠️ INCONSISTENTE (hallazgo colateral)

El readingTime de Article-25 está subestimado. A 220 WPM, el valor correcto sería **26 minutos**, no 16. Sin embargo, corregir Article-25 está fuera del scope de esta validación; se documenta como hallazgo para decisión separada.

### Fórmula oficial recomendada para corpus Archwise

```
readingTime = ceil(words / 220)
```

Donde `words` = conteo por split de espacios sobre article.md completo.

---

## Appendix: Conteo de palabras por comando

```powershell
for ($n = 20; $n -le 26; $n++) {
    $j = "content\enterprise-ai\article-$n\article.json"
    $m = "content\enterprise-ai\article-$n\article.md"
    $rt = (Get-Content $j -Raw | ConvertFrom-Json).readingTime
    $w  = ((Get-Content $m -Raw) -split '\s+').Count
    Write-Host "A$n w=$w rt=$rt wpm=$(if($rt -gt 0){[math]::Round($w/$rt)}else{0})"
}
```

Output real obtenido (2026-06-04):

```
A20 w=2502  rt=15  wpm=167
A21 w=2375  rt=18  wpm=132
A22 w=2215  rt=20  wpm=111
A23 w=4505  rt=23  wpm=196
A24 w=2852  rt=13  wpm=219
A25 w=5610  rt=16  wpm=351  ← anomalía
A26 w=5947  rt=27  wpm=220  ← consistente con 23–24
```
