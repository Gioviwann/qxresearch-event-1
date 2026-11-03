# Contexto: BCN Daily — The Barcelona Highlights bike tour 2,5 h (precios 2027)

Memoria operativa asimilada del chat de recálculo de precio de venta (público adulto + estudiante) del tour diario abierto. Producto B2C A-Bike Barcelona / Color Bikes SL. **No** reabrir el hilo; este archivo es la fuente en este agente.

**Actividad:** *The Barcelona Highlights bike tour 2,5h* · e-bike · tour guiado abierto al público (amigos, familias, parejas / adulto general) · salida diaria **10:00** · capacidad de cálculo **14 participantes**.

**Origen de datos:** hoja de cálculo Google Drive del usuario (calculadora Gio) + canvases en proyecto `mailforms` (máquina local del usuario, no necesariamente en este `/workspace`).

**Canvases del hilo (rutas en Mac del usuario):**
- `.../canvases/barcelona-highlights-2-5h-precio.canvas.tsx` — fórmula y comparación 29,50 / 30,50 / 31,01 + estudiante 24 / 26 / 27,82
- `.../canvases/highlights-32-50-gastos-competidores.canvas.tsx` — 32,50 € vs costes y mercado
- `.../canvases/highlights-31-50-atencion.canvas.tsx` — 31,50 € + atención/reseñas competidores
- Relacionados previos: `barcelona-highlights-student-price.canvas.tsx`, `montjuic-coast-ebike-price.canvas.tsx`, `precios-bici-barcelona.canvas.tsx`, `barcelona-bike-benchmark-2026.canvas.tsx`

**Continuación del mismo chat (asimilada aparte):** correo B2B partners 2027 + extracción PPTX Tour Pricing 2027 → Excel → ver `contexto-bcn-tour-pricing-2027-deck.md`. En el deck Gio/Rob el público Highlights queda fijado a **€32** (grupos 10+ €38 · escuelas €31,50).

---

## 1. Hipótesis de coste (comunes)

| Concepto | Valor | Notas |
|----------|-------|-------|
| Plazas | **14** | Capacidad de la salida diaria |
| Duración | **2,5 h** | Highlights |
| Guía | **25 €/h** → **62,50 €** / salida | En la hoja a veces aparece **75 €** (= 3 h); con guía 75 € el público fórmula pasa a **32,97 €** y el estudiante a **29,78 €** |
| Bici pública (2,5 h) | **9,63 €** | De tarifa 2027 2 h (**7,71 €**) × 2,5/2 |
| Bici estudiante (2,5 h) | **8,18 €** | De escolar 2 h (**6,55 €**) × mismo factor; dato pedido por el usuario |
| Coste directo grupo 14 (público) | **197,32 €** | Guía 62,50 + 14 × 9,63 |
| Márgenes fórmula | Marketing **10%** · Overheads **15%** · Beneficio **20%** → margen objetivo ~**45%** sobre venta neta / estructura habitual de la calculadora Gio |
| IVA | **21%** incluido en precios de venta al público citados |

**Suplemento e-bike (hoja):** +24,20 € → misma salida ~**55,21 €**/persona (referencia; no es el precio base Highlights).

---

## 2. Público adulto — precios calculados

| Precio €/pax | Origen | Grupo 14 (ingreso) | Beneficio aprox. | Margen | Notas |
|--------------|--------|--------------------|------------------|--------|-------|
| **29,50** | Web / cobro **actual** | 413,00 € | — | **42,2%** con salida llena | Por debajo de fórmula |
| **30,50** | Cálculo **previo** 2027 | — | — | — | Histórico |
| **31,01** | **Fórmula** (mkt 10% + OH 15% + ben 20%) | 434,10 € | — | ~**45%** | +1,51 vs 29,50; +0,51 vs 30,50 |
| **31,50** | Escenario pedido | **441,00 €** | **167,14 €** | **45,9%** | IVA 76,54 €; +23,14 € ben vs 29,50; −11,57 vs 32,50 |
| **32,50** | Escenario pedido | **455,00 €** | **178,71 €** | **47,5%** | IVA 78,97 €; +34,71 € ben vs 29,50; +17,27 vs 31,01 |

### Desglose a 32,50 € / adulto (salida llena)

De cada **32,50 €**: coste **14,09** · marketing **2,69** · overheads **4,03** · beneficio **6,05** · IVA **5,64**. Beneficio ≈ **22,5%** de la venta (por encima del 20% de fórmula). Ratio venta neta / coste ≈ **1,91**.

### Umbrales de ocupación (público)

| Precio | Margen 45% desde | Con 10 pax | Con 8 pax | Con 4 pax |
|--------|------------------|------------|-----------|-----------|
| **32,50** | **13** adultos | 40,9% · ben 109,80 € | 35,1% | Coste directo cubierto · ben 6,42 € |
| **31,50** | Solo con **14** | 39,0% · ben 101,53 € | — | Coste cubierto · ben 3,11 € |
| Con 13 a 31,50 | Margen **44,5%** (no llega al 45%) | | | |

---

## 3. Estudiantes — precios calculados

Misma estructura de márgenes; bici **8,18 €** / 2,5 h.

| Precio €/alumno | Origen | Grupo 14 | Notas |
|-----------------|--------|----------|-------|
| **24,00** | Cobro **actual** | — | Margen grupo 14 ≈ **36,3%** |
| **26,00** | Cálculo **previo** | — | Histórico |
| **27,82** | **Fórmula** (mismos %) | **389,44 €** | +3,82 vs 24; +1,82 vs 26 |
| **23,54** | Fórmula con **marketing 0%** (entrada agencia) | — | Los **24 €** actuales sí cubren OH + beneficio si no hay mkt propio |

Con guía a **75 €** (celda 3 h en hoja): estudiante fórmula → **29,78 €**.

---

## 4. Competidores (highlights / city bike tours BCN)

Precios orientativos del hilo (catálogo / “desde”; no son ventas netas):

| Operador | Precio ref. | Duración típica | €/hora aprox. | Visibilidad / “atención” |
|----------|-------------|-----------------|---------------|---------------------------|
| **Fat Tire** | **35 €** | 3 h | 11,67 | **Más reseñas:** ~2.929 Viator + ~2.009 Tripadvisor · ~95% recomendación → quien más llama la atención |
| **Baja Bikes** | **32,50 €** | 3 h | 10,83 | Empata con escenario A-Bike 32,50; pocas reseñas OTA visibles (~80 en ficha); peso en tour neerlandés |
| **Buena Vista** | **desde 32 €** | 3 h | 10,67 | **Más cercano en precio con tracción OTA:** ~1.247 Viator + ~628 GetYourGuide |
| A-Bike escenario | **32,50 / 31,50** | **2,5 h** | **13,00 / 12,60** | Más caro **por hora** que Baja/Buena Vista (tour más corto) |
| A-Bike web actual | **29,50 €** | 2,5 h | 11,80 | Por debajo de la banda Baja/Buena Vista |
| Tres Gatos | **29 €** | — | — | Por debajo |
| GetYourGuide Originals | **27 €** | — | — | Por debajo |
| **Orange Fox** | Catálogo ~30 € tachados; **promo ~15 €** (bici a veces 10 €) | — | — | Único que publica volumen: **1.134 huéspedes en 2025** (web); atrae por precio/promo; no en la misma banda de catálogo |

**Importante:** reseñas ≠ ventas. Fat Tire = máxima señal social; Buena Vista = mejor proxy de demanda OTA cerca de 32 €; Orange Fox = volumen declarado + precio bajo; Baja = precio par pero poca ficha inglesa.

Comparación rápida A-Bike a **32,50 € / 2,5 h** vs Baja/Buena Vista a ~32–32,50 / **3 h**: A-Bike queda **más caro por hora** (13,00 vs ~10,7–10,8).

---

## 5. Decisiones / pendientes (no cerrados en el chat)

- No hay decisión final de listado 2027 entre **31,01 / 31,50 / 32,50**; los tres quedaron como escenarios.
- Revisar en la hoja si el coste de guía debe ser **62,50** (2,5 × 25) o se mantiene **75** (3 h) — cambia fórmula a 32,97 / 29,78.
- Estudiante: mantener **24 €** solo tiene sentido con canal agencia (mkt ≈ 0); fórmula retail apunta a **27,82 €**.
- Canvases viven en el proyecto local `mailforms` del usuario; este repo solo guarda la memoria operativa.

---

## 6. Fórmula (resumen operativo)

Estructura usada (alineada a calculadoras Gio / canvases Montjuïc–Highlights):

1. Coste directo por pax = (guía_salida / 14) + coste_bici_2_5h  
2. Sobre coste se apilan marketing 10%, overheads 15%, beneficio 20% (o mkt 0% si B2B/agencia).  
3. Precio venta con IVA 21% incluido.  
4. Margen reportado = (ingreso − IVA − coste directo) / ingreso (o según definición del canvas; cifras de beneficio € del chat usan coste directo 197,32 €).

**Coste directo / pax público:** 197,32 / 14 ≈ **14,09 €** (sin IVA).
