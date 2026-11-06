# Contexto — Adults + students Rates 2027 (VAT + fichas tour)

Memoria operativa asimilada del chat *Tour document updates* (Mac Gio / Desktop). **No** reabrir el hilo; este archivo es la fuente en este agente.

---

## 1. Documento fuente / resultado

| | |
|---|---|
| **Archivo** | `/Users/gioviwan/Desktop/Adults + students A-Bike Rental & Tours Barcelona Rates 2027.docx` |
| **Pedido** | (1) Añadir **IVA 21%** a cada precio de la 1.ª página; (2) a partir de la 2.ª, **una página de descripción por cada tour/actividad** del listado |
| **Resultado** | ~**10 páginas**: 1 tarifa + **9 fichas** de tour |
| **Etiquetas** | Antes: “net rates excl. VAT” / “SPANISH BTW” → ahora: tarifa **incluye 21% IVA** |

---

## 2. Generadores relacionados (mailforms Mac)

Proyecto local: `/Users/gioviwan/mailforms/product-sheets/`

| Script | Rol |
|---|---|
| `build_school_programs.py` | Rutas / programas escolares (itinerarios reutilizados en fichas) |
| `build_barcelona_school_rates_2027_docx.py` | Generador de tarifas escolares 2027 |
| Build ad hoc del chat | `/tmp/build_abike_rates.py` (sesión; aplicar VAT + páginas tour sobre el Desktop docx) |

Criterio: reutilizar **rutas/descripciones** ya definidas en school programs; precios de **este** documento Adults+students con VAT.

---

## 3. Precios tours (por alumno, **con 21% IVA**)

| Tour | Precio | E-bike upgrade |
|---|---|---|
| Barcelona City tour (1,5 h) | **€ 19,06** | + € 19,97 |
| Barcelona Highlights city tour (2,5 h) | **€ 26,00** | + € 19,97 |
| Highlights & Beach Picnic (5,5 h) | **€ 78,52** | + € 19,97 |
| Modernism & Street Art, Immersive Museums (6 h) | **€ 81,75** | + € 19,97 |
| Heritage Day, bike & walking (5,5 h) | **€ 71,51** | + € 19,97 |
| Upside Down & boat trip (6 h) | **€ 96,56** | + € 19,97 |
| Sustainability, Forum & ice cream (7 h) | **€ 75,69** | + € 19,97 |
| Modernist architecture & cooking class (4,5 h) | **€ 125,45** | + € 19,97 |
| Montjuïc, funicular & castle (5 h) | **€ 85,68** | **incluida** |

Cada ficha incluye: duración, tipo de bici, precio con IVA, recorrido, qué entra en la tarifa, condiciones de grupo (**profesor gratis**, **máx. 14 alumnos / guía**).

---

## 4. Precios alquiler (**con 21% IVA**)

### City bike
Tramos (orden del doc): **€ 7,95 · 9,95 · 12,50 · 13,50 · 15,00 · 16,50**  
Día extra: **€ 12,50**  
Seguro: **€ 4,24** (día) · tramo corto en condiciones: **€ 3,03**

Nota del chat: el **16,50** de 24 h **no** es un precio “sin VAT olvidado”; es la tarifa ya con IVA.

### E-bike
**€ 23,95 · 29,95 · 32,90 · 34,90 · 37,50 · 39,91**  
Día extra: **€ 35,50**  
Seguro: **incluido**

---

## 5. Relación con otros contextos

- School programmes / day programmes 2027: `contexto-programas-escolares-barcelona-2027.md`
- Highlights pricing / márgenes: `contexto-bcn-daily-highlights-precios.md`
- Deck Gio+Rob Tour Pricing 2027: `contexto-bcn-tour-pricing-2027-deck.md`
- World Experience rate card (otro docx, partners): `contexto-world-experience-guide-bike.md` — **no** confundir con Adults+students

---

## 6. Pendientes posibles

- [ ] Confirmar si Desktop docx debe versionarse también en repo / Drive compartido  
- [ ] Alinear números Adults+students vs deck 2027 / school sheet si hay divergencias  
- [ ] Export PDF del docx de 10 páginas para envío a agencias escolares  

---

*Asimilado: Nov 2026 · chat Tour document updates · agente cloud `qxresearch-event-1`.*
