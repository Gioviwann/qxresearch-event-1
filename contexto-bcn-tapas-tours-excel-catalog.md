# Contexto: Barcelona tapas tours — full guided options catalog (EN Excel)

Memoria operativa asimilada del chat *Barcelona tapas tours options*: catálogo exhaustivo de combinaciones walking / bike / e-bike, **en inglés**, exportable a Excel (una fila por opción guiada). Snapshot de fichas **11 oct 2026**. **No** reabrir el hilo; este archivo es la fuente.

**Deliverable del chat:** `barcelona-tapas-tours.xlsx` (proyecto local del usuario / agente que generó el Excel — **no** está necesariamente en este `/workspace`). Abrir por la hoja **How to use**, luego **All guided options**.

**Complementa (no sustituye):** `contexto-bcn-tapas-tours-otas.md` — benchmark ES/OTA con tienda vs fantasma, A-Bike 41,50 €, escenario walking 43/66 €. Este archivo = inventario EN más amplio (37 opciones / 11 empresas) orientado a export y shortlist.

---

## 1. Workbook structure (English)

| Sheet | Purpose |
|-------|---------|
| **How to use** | How to filter; how to read prices / empty cells |
| **Shortlist** | Quick picks by need |
| **All guided options** | Full table — **37** guided products, **~36 columns** |
| **Companies** | One row per operator |
| **Outside this list** | Explicitly excluded: Montserrat day trips, cooking classes, Segway, self-guided |

**Useful filter columns on All guided options:** Transport mode · Food included · Booking format · Price from.

**Price note:** Published “from” prices that day; they move with date/channel. Empty price cell = quote-only / on request. When two booking sites disagree on the same tour, the sheet marks the discrepancy.

---

## 2. Scale of the catalog

| Metric | Value |
|--------|-------|
| Companies | **11** |
| Guided options (rows) | **37** |
| Walking | **28** |
| Bike / e-bike | **9** |
| Snapshot date | **11 Oct 2026** |

---

## 3. Walking operators & flagship options (EN summary)

| Company | Flagship / range | Notes from chat |
|---------|------------------|-----------------|
| **Devour** | Gothic crawl from **~135 USD** (10+ tapas, 5 drinks); daytime Born/Barceloneta; Time Out Market; Supper Club; private groups **11–40** at **92 EUR**/person | Also in OTAs contexto as WalksDevour |
| **Eating Europe** (= **The Barcelona Taste**) | Side Streets from **~85 EUR**; Gothic VIP; Poble Sec from **~132 EUR** | Three main walks |
| **Secret Food Tours** | **89,99 EUR** + drinks supplement | Brand food walk |
| **Carpe Diem** | **2,5 h**, 4 kitchens, **9 tapas** | Matches OTA band 65–85 € |
| **Culinary Backstreets** | **160 USD** — long walks Gràcia / Sants / Raval bodegas | Premium niche |
| **Context Travel** | Poble Sec + La Boquería tapas tour | Academic/small-group style |
| **Fat Tire** | Night tapas walk; optional flamenco | Shop at Escudellers 48; meeting often Sant Jaume |

*(Travel Bound, E-VOLVE, GuruWalk, Local Experiences, Food Lover / Domus Flora appear in the sibling OTAs contexto; this Excel chat focused the named food-tour brands above plus bike shops.)*

---

## 4. Bike / e-bike options (EN summary)

| Company | Product | Price (snapshot) | Duration / starts | Meeting | Food |
|---------|---------|------------------|-------------------|---------|------|
| **Born Bike Tours** | Tapas Bike Tour | **42 EUR** adult · **38 EUR** child | 2,5 h + 30 min food · **11:00 & 16:00** · **min 4** | C/ Marquesa 1, Born | **4 tapas + 1 drink**, bike, helmet |
| **Barcelona eBikes** | Wine & Tapas e-bike | **69 EUR** | ~3 h (OTA often 3,5 h) · shop agenda **11:00 & 16:00** | Plaça Sant Agustí Vell 16 | Shared **3 tapas**, cava + wine/soft · e-bike |
| **City Tours on Bike** | Gaudí bike/e-bike + tasting | from **~45 USD** (GYG-style listing) | ~2,5 h | OTA listing | End tasting; busy days sometimes cancel tapa |
| **Fat Tire** | Night bike | Group ~USD band; private from **275 EUR** | **4 h** · group **17:30** | Green Bikes Escudellers 48 | **Cava included**; tapas **paid at bar** |
| **Tapas & Bikes** | Custom (Santa Caterina, bravas, Montjuïc…) | **On request only** | Custom | Operator | Tailored routes |

**A-Bike** tapas bike (**41,50 EUR**, 10:00/18:00, Montserrat 8) is documented in `contexto-bcn-tapas-tours-otas.md`; ensure it is present in any future Excel refresh if missing from the 11-company set.

---

## 5. Companies sheet — presence types (ops)

Align labels with OTAs contexto:

- **Shopfront bike:** Born, Barcelona eBikes, Fat Tire/Green Bikes, A-Bike (if listed)
- **Food-tour brand / multi-city:** Devour, Eating Europe/The Barcelona Taste, Secret Food, Carpe Diem, Culinary Backstreets, Context Travel
- **Custom / quote:** Tapas & Bikes
- **OTA-only / unnamed provider:** e.g. GYG bike+tasting listings without signed shop

---

## 6. Outside this list (explicit exclusions)

Do **not** mix into the guided tapas catalog:

- Montserrat / day trips with incidental food  
- Cooking classes  
- Segway “food” products  
- Self-guided maps / audio without a live guide  

---

## 7. Ops use for A-Bike

- Excel = English partner/DMC deliverable; OTAs contexto = Spanish competitive + shop vs ghost + student 43/66 analysis.
- Born remains the closest **shop + included food** peer (42 EUR, min 4, 4 tapas fixed).
- Deck 2027 tapas bike/walk still **hold** until food-stop cost ~20–22 EUR/pax (`contexto-bcn-tour-pricing-2027-deck.md`).
- When refreshing the xlsx: keep one row per bookable SKU; mark dual-source price conflicts; keep “Outside this list” sheet so Montserrat/cooking do not pollute filters.

---

## 8. Column checklist expected on All guided options

Company · Product name · Transport mode (walk / bike / e-bike) · Booking format (group / private / custom) · Duration · Start times · Meeting point · Price from · Currency · Food included (Y/N / partial) · Stops · Dishes · Drinks · Not included · Diet options · Max/min group · Languages · Cancellation · Source URL · Notes / source conflict · Snapshot date.
