# Contexto: Programas escolares Barcelona 2027 (HEROLÉ / rates / guiones)

Memoria operativa asimilada del chat de conversión PDF→Word, fichas A–G, Swap & Change, guiones de guía, rate card Ashton y hostel. Producto escolar B2B A-Bike Barcelona / Color Bikes SL. **No** reabrir el hilo; este archivo es la fuente en este agente.

**Agente hermano (archivos docx del producto):** `bc-c17d163f-8d68-4d19-845d-c1a089dcd6df` — [2027 - School day programmes docx](https://cursor.com/agents/bc-c17d163f-8d68-4d19-845d-c1a089dcd6df). Los `.docx` de programas, opciones, guiones y rates viven en **ese** run, no necesariamente en este `/workspace`.

**Tiendas:** A-Bike Catalunya, Carrer dels Tallers 45, 08001 · A-Bike Ramblas / Carrer de Montserrat 8, 08001 · `barcelona@a-bike.es` · a-bike.es · +34 666 05 76 55.

---

## 1. Ámsterdam HEROLÉ (origen del formato)

- PDF de 3 páginas A4 *School Day Programmes 2027* preparado para HEROLÉ Reisen → Word editable con TeX Gyre Heros (métrica Helvetica) incrustada.
- Colores: rojo `#CD1619` / `#D2232A`, azul `#0A1240`, zebra `#F2F2F2`.
- Páginas: (1) portada con tarifas A/B/D/E/F; (2) ficha Programme A City Heritage Day; (3) Swap & Change (museos, atracciones, barcos, talleres, lunch, extensiones).
- En el hermano: `A-Bike x HEROLE - School Day Programmes 2027.docx` + `build_docx.py` + assets.

**IVA / reverse charge (Ámsterdam):** tasas netas excl. BTW holandés, reverse charge. **Barcelona:** colegios suelen pagar **21% IVA español incluido** en la rate card Ashton (no reverse charge salvo empresa con VAT UE).

---

## 2. Documento BCN programas de día (fichas A–G)

Archivos en el agente hermano (nombres típicos):

| Archivo | Uso |
|---------|-----|
| `A-Bike-BCN-School Day Programmes 2027.docx` / `✅ A-Bike-BCN-School Day Programmes 2027.docx` | Fichas corregidas por Gio (Desktop `2027 rates creating`) |
| `7days programmes A-Bike R&T.docx` | Copia con las 7 fichas + Swap |
| `opciones a-bike.docx` | Workshops + Lunch estudiantes/adultos (export editable) |
| `guiones de guia a-bike.docx` | Libretos de guía (~20 págs.) |
| `A-Bike Barcelona - School Groups - Tours and Rental Rates 2027.docx` | Rate card Ashton 2 págs. editable |

Rutas en el hermano: `/workspace/...` (mismas rutas relativas). En el Mac del usuario: download desde el agente; **no** escribir directo a `/Users/gioviwan/Desktop`.

### Programme A — Highlights & Beach Picnic Day
- **EUR 81,00** · ±5,5 h · Mon–Fri · Start **Tallers 45**
- 09:30 check-in → bici modernismo/puerto/Born → picnic playa 12:15–13:15 (incluido) → Poblenou 22@ → fin 15:30 tienda Catalunya
- Guía permanece en el picnic

### Programme B — Modernism, Street Art & Immersive
- **EUR 87,50** · ±6,5 h · **Tue–Fri** (Picasso cerrado lunes) · Tallers 45
- Bici street art + modernismo → Picasso 12:15 (1h15, ticket incluido) → snack Born **no incluido** → vuelta tienda → **House of Candy** Gran Via 620 (ticket incluido) → fin ~16:20
- Guía no entra en museos; profesores escoltan dentro

### Programme C — Heritage by Bike & Walking (Picasso)
- **EUR 77,50** (rate card Ashton; borrador anterior a veces EUR 64,01 neto — **usar Ashton con IVA**) · ±7 h · Tue–Fri · Start **Ramblas / Montserrat 8**
- 09:30–11:15 bici puerto/Barceloneta/Ciutadella (1,5 h) → 11:15–13:15 walk Gótico+Born (2 h) → Picasso 13:15 → MUHBA Plaça del Rei 14:30–16:30 → **fin en Plaça del Rei** (no vuelve a tienda)
- Tickets Picasso + Historia incluidos

### Programme D — Upside Down Bike & Walking + Boat
- **EUR 109,00** · ±6–7 h (tabla corregida acaba ~**16:50**; textos viejos decían 15:30 — **seguir tabla**) · Mon–Fri · Tallers → Paradox → walk a Montserrat → bici ida/vuelta Montserrat → Golondrinas
- Paradox ticket incluido (visita acaba ~11:15 en horarios antiguos; alinear con ficha actual)
- Catamarán 1 h, 1 botella agua incluida

### Programme E — Sustainability & Science
- **EUR 76,00** · ±7 h · Mon–Fri · Tallers 45 ida/vuelta
- Bici MACBA/supermanzana/ejes verdes/Ciutadella/Glòries/22@ → El Tío Che (1 helado incluido) → Museu Ciències Naturals Fòrum (ticket; ~30 plazas bici en puerta) → vuelta
- Nota interna a veces decía museo hasta 14:30; good-to-know/tabla: **13:45–15:45** aprox. — alinear ficha

### Programme F — Modernist Architecture + Cooking
- **EUR 131,00** · ±4,5 h · Mon–Fri · Tallers 45
- Bici ≤2 h (Batlló, Amatller, Lleó Morera, farolas Falqués, Milà, Fuster) → clase cocina 2,5 h (11:00–13:30, incluida) → Sagrada Família (exterior) y vuelta → fin ~14:00
- Farolas Passeig de Gràcia = **Pere Falqués**, no Gaudí

### Programme G — Montjuïc Park, Funicular & Castle E-bike
- **EUR 97,00** · ±5 h · Mon–Fri · Start **Ramblas**
- E-bikes incluidas (no el +EUR 12 de otros días) · Plaça Espanya, Font Màgica, Mies, Poble Espanyol, anillo olímpico → funicular (tickets ida/vuelta) → castillo 1 h (entrada incluida; guía oficial castillo **opcional** extra) → Miramar, cactus, Colom, Marítim → fin ~14:05–14:10 Ramblas
- E-bikes **no** suben en funicular con grupo escolar; quedan abajo custodiadas

### Reglas transversales fichas
- Mín. **10 estudiantes**; 1 profesor gratis / ~13 estudiantes (rate card); entradas profesores según ficha
- Guía: tramos bici/walk; profesores dentro de museos
- E-bike upgrade **+ EUR 12** / estudiante en A–F; G ya en e-bike
- Picasso / House of Candy: ventanas de booking ~2 meses; no reembolsable una vez confirmado
- Rain or shine; cancelación AEMET red; 48 h pax adjust / cancel policies en rate card

---

## 3. Rate card Ashton 2027 (editable)

**Fuente PDF:** *A-Bike Barcelona - School Groups - Tours and Rental Rates 2027* (from Ashton).

**Word:** `A-Bike Barcelona - School Groups - Tours and Rental Rates 2027.docx`  
Ruta hermano: `/workspace/A-Bike Barcelona - School Groups - Tours and Rental Rates 2027.docx`  
Builder: `build_rates_docx.py` · logo `assets/abike-logo.png`.

### Bloques página 1
1. Guided school tours (City 1,5 h €23,50 … Sustainability 3,5 h €39,50; e-bike +€12)
2. Walking / guide service (Gothic €19,50; Tapas €43; guide/coach €155)
3. Bike rental-only groups (city / e-bike by duration)
4. Booking terms (email confirm 24 h; 48 h adjust/cancel; museums own terms; IVA 21% schools; reverse charge solo empresas VAT UE; no commission en rates de la card)

### Página 2 — Complete school days A–G
Precios con IVA 21% (tabla §2 arriba). Good to know: Picasso/Candy slots; guide vs teachers; days invoiced with IVA.

Tipografía PDF: Helvetica → Word **Arial**. Colores navy/red/zebra/footer a sangre.

---

## 4. Swap & Change (última página) — solo estudiantes Barcelona

Modelo Ámsterdam (6 bloques, una hoja). Tras corrección de Gio: **solo opciones de estudiantes**; listas adultas fuera de esa hoja (sí en `opciones a-bike.docx`).

**Museums (ej.):** Picasso (B/C, cerrado lun), MUHBA (C), Paradox (D), Ciències Naturals Fòrum (E, 30 bikes), Xocolata, MACBA, CCCB, Marítim, MNAC, CosmoCaixa, Disseny, Batlló/Pedrera (rutas A/F), Montjuïc Fortress (G).

**Attractions:** House of Candy (B), Sagrada (A/F exterior), Park Güell, Aquàrium, Zoo, Poble Espanyol, Font Màgica (G).

**Boats & countryside:** Golondrinas (D), vela Mar Bella, paddle Barceloneta; extensiones Colònia Güell, Castelldefels Bicivia 7, Collserola.

**Workshops:** Cooking (F), chocolate, trencadís, graffiti legal (+ listas adultas en opciones: paella, tapas, cocktail, vermut, flamenco steps, ceramics Poblenou).

**Lunch:** Beach picnic (A); park Ciutadella; mercados Santa Caterina / Sant Antoni / Boqueria (parada corta); adultas: El Nacional, Moritz, 7 Portes, etc. Bicipark de pago ≠ flota escolar.

Marcas `in Day A`…`in Day G` / `on request` / `price on request`.

---

## 5. Guiones de guía

- Archivo: `guiones de guia a-bike.docx` · script `build_guiones.py`
- Por cada día A–G: reloj de ficha, paradas, texto voz alta ES + apunte EN, comida si aplica
- Briefing casco/semáforos común; no prometer entradas no pagadas
- Discrepancias documentadas en guion (D 16:50 vs 15:30; E museo; G 14:05 vs 14:10; B Arc/casas en mañana no en 20 min vuelta)
- Rutas “de siempre” con ~12 paradas oficiales: **pendiente** de que Gio pase listas; no inventar de memoria

---

## 6. Saint Christopher’s Inn Barcelona (alojamiento)

- Carrer Bergara 3 · ~5 min a pie Tallers 45 · ~10–12 min Montserrat 8
- OK **universitarios / secundaria ~16+** con reserva de grupo (≥10), habitaciones solo del grupo, responsable ≥21 con menores
- **No** ideal 12–15 años: Belushi’s hasta 2:00 / 3:00 fin de semana
- No &lt;12 (salvo excepción escrita); desayuno incluido; bike storage FIFO, **sin e-bikes** en almacén; flota tour vuelve a tienda A-Bike

---

## 7. Paths y descarga

| Qué | Dónde |
|-----|--------|
| Este contexto | `/workspace/contexto-programas-escolares-barcelona-2027.md` (este agente) |
| Productos docx | Agente `bc-c17d163f-8d68-4d19-845d-c1a089dcd6df` |
| Desktop Mac | Usuario descarga; cloud **no** escribe `/Users/gioviwan/Desktop` |
| Carpeta Gio | `2027 rates creating` (origen correcciones humanas) |

---

## 8. Pendiente / no hacer

- No mezclar reverse charge holandés en fichas BCN colegios
- No dejar texto Ámsterdam (Anne Frank, Volendam, etc.) en Swap BCN
- Alinear fichas D/E/G donde tabla ≠ nota interna
- Cuando lleguen las 12 paradas oficiales por ruta: ampliar guiones
- Facturación/presupuesto/Outlook: ver otros `contexto-*.md` de este repo
