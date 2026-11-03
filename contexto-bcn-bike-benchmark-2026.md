# Contexto: Barcelona bike tours & rentals benchmark 2026

Memoria operativa asimilada del chat *Barcelona bike tours benchmark*: mercado 2026 tours + alquiler, posicionamiento A-Bike, OTAs/comisiones, **17 tiendas** (10 en Ciutat Vella), PDF EN. Snapshot de precios de operador **sep 2026** (+ Hostelgeeks 30 abr 2026, POI Data, Observatori del Turisme). **No** reabrir el hilo; este archivo es la fuente.

**Deliverables del chat (máquina Gio / mailforms):**
- Canvas: `.../canvases/barcelona-bike-benchmark-2026.canvas.tsx`
- PDF EN 12 págs. landscape: `mailforms/product-sheets/Barcelona - Bike Benchmark 2026.pdf` (~504 KB)
- Builder: `mailforms/product-sheets/build_bike_benchmark.py` → regenerar con `./.venv/bin/python product-sheets/build_bike_benchmark.py`
- Canvas previo grupos: `a-bike-barcelona-groups-2026.canvas.tsx`

**Relacionado:** `contexto-bcn-daily-highlights-precios.md` · `contexto-bcn-tour-pricing-2027-deck.md` · `contexto-bcn-tapas-tours-otas.md`.

---

## 1. Market snapshot

| Signal | Figure |
|--------|--------|
| City tourists 2025 | **16.0 M** (destination **26.1 M**) |
| Jan–Jul 2026 city visitors | **+6.2%** YoY |
| Avg stay | ~**2.6 nights** → typically one 2–4 h rental **or** one 2.5–3 h tour |
| Bicing | **Residents-only** — tourist fight = shops vs apps vs guided |
| Rental businesses (POI Data) | **126** city · **214** province |

**Verdict:** Crowded, **price-clustered**. City-bike day **€15–18** · shop e-bike day **€29–32** · volume guided tour **€27–35**. A-Bike sits **on** those modes, not below them.

---

## 2. Rentals (VAT-in, Sep 2026)

### City bike 24 h

| Operator | €/24 h |
|----------|--------|
| Donkey (shared) | **12** |
| Color Bikes | **15** |
| Barcelona Rent a Bike | **16** |
| **A-Bike** | **16.50** |
| Happy | **18** |
| Orange Fox | **20** |

### E-bike 24 h

| Operator | € |
|----------|---|
| Cooltra (shared) | **29** |
| **A-Bike / BRAB** | **32** |
| Happy Bicelo | **35** (8 h) |
| Orange Fox | **60** |

### Short slot (weak point)

| | 2 h city |
|--|----------|
| Happy / BRAB | **€8** |
| **A-Bike** | **€9.95** |

**Geography:** Same street cluster as Color Bikes + Barcelona Rent a Bike (**Tallers 45** area).

---

## 3. Guided tours (published from-prices)

| Band | Product | Price |
|------|---------|-------|
| Floor | GetYourGuide City Highlights | **€27** |
| Volume | **A-Bike Highlights** | **€29.50 / 2.5 h** (higher €/h than Steel Donkey €35 / 4 h) |
| E-bike | **A-Bike e-bike** | **€37** (under Fat Tire ~€49, Ocean Photo €49) |
| B2B student | A-Bike group | **€23.85** (min 24) — below OTA floor; **keep closed B2B** |
| Premium | Park Güell / wine / tapas | **€59–69** |
| Sport | Montefusco | **€90+** |
| Private | A-Bike | from **€150** |

**So what (ops):**
- Do **not** cut city day below **€16**.
- Hold e-bike day at **€32**; sell **€37** tour as upsell.
- Leave Highlights at **€29.50** (deck 2027 later moves toward **€32** — see pricing contexts).
- GYG at **30%** commission → Highlights **€29.50 → net €20.65** ≈ student net → OTAs only if they bring seats you would not sell at the door.

**Caveats:** Orange Fox 4 h e-bike interpolated from €10/h; Fat Tire euros mix USD listings.

---

## 4. OTAs (PDF section B)

| Channel | Typical commission (notes in PDF) |
|---------|-----------------------------------|
| GetYourGuide | **20–30%** |
| Viator | **20–25%** |
| DST | from **1 Oct 2026** (as noted in builder) |

PDF includes: donut on-OTA vs direct brands · channel-depth bar · listed vs not · product families per OTA · net examples.

---

## 5. Seventeen rental shops

**10 / 17 in Ciutat Vella:**
A-Bike · Barcelona Rent a Bike · Color Bikes · By-Cycle · Ajo Bike · El Ciclo · Fat Tire / Unlimited Biking · Orange Fox · Bikes & Tours Barcelona · Barcelona eBikes

**Outside Ciutat Vella (7):**
- **Eixample:** Happy · Terra · Bike Club  
- **Poble-sec:** Rabbit Bike  
- **Poblenou / Vila Olímpica:** Bike to Deliver · RSB · Ocean Bikes  

PDF grids: full 17-row with **Ciutat Vella** column · Ciutat Vella-only · rest-of-city · district donut · city-bike day-rate chart.

---

## 6. PDF layout (English, 12 landscape pages)

| Block | Content |
|-------|---------|
| **A. Web operators** | Tour from-price charts (A-Bike in red, GYG floor €27) · brand min–max SKU · brand grid (website, base, offer, band, channel) · full product catalogue |
| **B. OTAs** | Separate section: presence, commissions, nets |
| **C. 17 shops** | District / rates / Ciutat Vella callout + grids |

---

## 7. Links to later pricing work

- Highlights formula / 31.50–32.50 scenarios → `contexto-bcn-daily-highlights-precios.md`
- Official Gio/Rob deck Highlights **€32** · e-bike +€12 upgrade (no separate e-bike departure) → `contexto-bcn-tour-pricing-2027-deck.md`
- Tapas bike peers Born €42 / A-Bike €41.50 → `contexto-bcn-tapas-tours-otas.md`
