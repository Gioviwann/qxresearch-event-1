# Contexto — Contactos Outlook, agendas de grupos y facturas (A-Bike / Color Bikes)

Documento para pegar o adjuntar en otro chat. Sustituye los hilos de extracción de `info@a-bike.es`, `barcelona@a-bike.es`, merge de CSV, agendas de planning y análisis de facturas emitidas 2019–2025.

Empresa: Color Bikes SL / A-Bike R&T SL (Barcelona + Ámsterdam). Buzones: **info@a-bike.es** y **barcelona@a-bike.es**. Repo local de trabajo habitual: `mailforms` (máquina de Gio), carpeta escritorio `fromm hdd`.

## Limitación operativa

Outlook web no carga el historial entero; BOOKINGS ~2.500 hilos; GYG/FareHarbor suelen dejar reply-aliases inútiles. Extracción vía browser + CDP: vistas previas + abrir hilos para remitente real. Sin PST/MBOX o Graph mail API, no hay scrape completo. Outlook MCP en cloud a menudo solo calendar.

## info@a-bike.es — archivos en `mailforms/contactos-b2b/`

| Archivo | Contenido |
| --- | --- |
| `contactos.csv` / `contactos.json` | **105** B2B: grupos, escuelas, empresas, agencias, resellers (sin turistas sueltos) |
| `lista-contactos.csv` | **114** tours + alquileres (incluye 9 extras de groups/alquiler) |
| `contactos-tours-y-alquileres.csv` | Misma base con asunto/descripción |
| `contactos-empresas.csv` (+ json) | **40** empresas/agencias/DMC (incentive, team building, corporate) |
| `contactos-empresas-escuelas-alquiler.csv` | **13** (6 empresas + 7 escuelas), sin agencias |
| `contactos-alquileres.csv` | **65** |
| `contactos-tours.csv` | **79** (33 en ambas listas) |
| `contactos-unidos.csv` | Merge de 6 CSV → **130** únicos |

Etiquetas: `alquiler-grupo`, `alquiler-escolar`, `alquiler-empresa`, `tour-bici`, `tour-caminando`, `tapas`, `team-building`, `agencia`, `dmc`, `escuela`, `empresa`, `reseller`.

Carpetas clave Archive: `**ciclotour**` → groups, tours, CICLOTOUR, sai, GYG, turisme, enviados, bandejas 2018–2023. Socios frecuentes: World Experience, El Corte Inglés / AG Viajes, Activetour, GB Events, Turisme BCN, SAI, Nanook, Indigo DMC, Hola Incentives, Across Spain, Calafell Evasion, Léolagrange.

## barcelona@a-bike.es — `mailforms/contactos-barcelona/`

Tras ampliar Enviados + Rentals + Big groups + Private/Public tours + Random request + groups/tours/CICLOTOUR/sai/Archive:

| Lista | Contactos |
| --- | ---: |
| Todos (`contactos.csv`) | **120** |
| Alquileres | **63** |
| Tours | **48** |
| Empresas/agencias | **62** |
| Empresas+escuelas solo alquiler | **19** |

Export usuario: `Downloads/contactos-barcelona.csv`.

## Merges posteriores (Downloads / escritorio)

- `barcelona csv.csv` = unidos info@ + barcelona@ → **232** contactos (18 en ambos).
- `BCNContacts-2026.xlsx` = 6 fuentes (Barcelona, todos-desde-2020, empresas-agencias, Billin xlsx, barcelonaContacts233, unidosInfo) → **608** contactos; hojas Contactos + Resumen; **1.175 facturas** Billin / **834.469,62 €** en origen facturación (392 Billin / 216 solo correo / 16 unidos).

## Agendas de grupos — `Desktop/fromm hdd /groups/`

Fuentes: Planning Jorge, Groups 2025, Planning 2023, Planning 2024, Groups-2026. Unido: **`Grupos-planning-unido.xlsx`**.

- **Contactos** 521 grupos · **Reservas por mes** 989 (591 con proforma, 439 con factura) · Notas año siguiente · We Barcelona · Resumen · 66 hojas originales.
- Ejemplo: 22Hostel ene 2026 → proforma **P202579**, factura **F20261**.

Reporte pax/guías/alquileres: **`Grupos-planning-reporte.xlsx`** + PDF mismo nombre (estilo canvas). Canvas: participantes 2022–2026.

| Año | Pax pago | Gratis | Alquileres agenda |
| --- | ---: | ---: | ---: |
| 2022 | 269 | 0 | 0 |
| 2023 | 3.618 | 44 | 9 |
| 2024 | 6.906 | 303 | 50 |
| 2025 | 5.100 | 203 | 45 |
| 2026 | 3.533 | 262 | 37 |

Totales ~**19.426** pax pago + **812** gratis; **141** alquileres agenda (+ We Barcelona 376 / 3.234 pax aparte). Top guías: Jordi 164, Mathieu 110, Ophelie 84, Thomas 80, Pau 61. Recurrentes pax: Saffron, El Corte Inglés, Viatges Fenals, WorldStrides.

## Facturas emitidas 2019–2025 — `fromm hdd / Administración`

Solo **emitidas a clientes** (A-Bike R&T SL + Color Bikes SL). Fuera: nóminas, bancos, recibidas, diario tienda. Métrica: **base imponible sin IVA**; rectificativas restan. Billin completo ~2023–2025; pre-Billin Color Bikes PDF/Excel; **2020 = 0** archivadas; A-Bike emitidas desde **2023** en esas carpetas.

**Base total ~580.563 € · 1.045 facturas · 340 clientes · 67 multi-año.**

| Año | Facturas | Base | Notas |
| --- | ---: | ---: | --- |
| 2019 | 2 | 56 € | Solo Color |
| 2020 | 0 | 0 | Sin archivo |
| 2021 | 46 | 6.237 € | Solo Color |
| 2022 | 145 | 40.660 € | Solo Color |
| 2023 | 300 | 262.070 € | Pico (Primavera Sound, Primacities, Classic Bikes) |
| 2024 | 312 | 175.747 € | |
| 2025 | 240 | 95.794 € | |

El Corte Inglés 2023–2025, ambas razones, ~7 facturas / ~39.300 € (pico 2025). Recurrentes desde 2021: Barcelona Turisme, BCN Enjoy, Grupo Kabul, Liana Maya Katzir. We The Club ~42.038 € 2023–25. **479** facturas cruzan con agenda grupos (pax solo si coincide).

Entregables jefe (EN):  
`Desktop/Issued-invoices-2019-2025.xlsx` + `.pdf` (5 págs estilo canvas). ES: `Facturas-emitidas-2019-2025.xlsx` en Administración.

## Criterio al reutilizar

1. Separar siempre info@ vs barcelona@ vs merge.
2. No inventar pax ni emails si Outlook no los muestra.
3. Listas “empresas” ≠ “escuelas sin agencia” ≠ “alquileres” ≠ “tours”.
4. Facturas = emitidas clientes, base sin IVA, por razón social y trimestre.
5. Planning grupos ≠ We Barcelona e-bike (informe aparte).
