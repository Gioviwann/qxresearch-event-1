# Contexto — Mac Gio: tienda, gio, disco ABIKE, Drive

Documento para pegar o adjuntar en otro chat. Sustituye el hilo «data mac search» (carpetas Escritorio, disco externo ABIKE, Google Drive, reorganización).

Máquina: Mac de Gio (`/Users/gioviwan/...`). Distinto del agente cloud (que no ve Desktop ni `/Volumes`). Para archivos del Mac o del USB, usar el agente local de Cursor en ese equipo.

## Escritorio — `tienda`

Ruta: `/Users/gioviwan/Desktop/tienda` (única carpeta con ese nombre en el Mac). Última modificación ~23 octubre (según el hilo).

Contenido típico: documentos A-Bike y Color Bikes (nóminas, contratos, seguros, stock). Subcarpetas: `endesa facturas`, `google`, `here`, `Intership Insa School`, `intership practicas euroace net`, `nominas june-sep 2026`, `opendata`, `sara`, `verwimp+gransier`, `weiver risk`.

**Budget / presupuesto en tienda:**
- Nombre: `.../Account 2015/2. BICILONA/Facturas/Factura 2015-0001 (Budget Bikes 25-02).pdf` (bajo Maribel marketing en `here/`).
- Contenido: `opendata/opendatabcn_bicicletes-csv.csv` — 4 tiendas Budget Bikes Barcelona (Estruc, Nou de la Rambla, Plaça de la Llana, Unió).
- Thunderbird `mail.barcelonaciclotour.com` (Inbox/Sent): «a budget for your group», «proforma with the budget».
- Presupuestos: `here/CHECK …/PRESUPUESTO_2025-00-1 A BIKE.PDF` y `.../Turist check/presupuesto.pdf`.

## Escritorio — `gio`

Ruta: `/Users/gioviwan/Desktop/gio` (~159 GB). Sin archivos con nombre budget/presupuesto. «budget» en notas = enlaces a **budgetfietsonderdelen.nl** (recambios NL) y frase freeCodeCamp. Notas repetidas en: `txt gio.txt`, `me/Code-IT-Learning/txt/...`, `me/ubicar/...`, y copias en `personal gio`, `giochack`, `3sep2025personal`.

### Reorganización opción 1 (ejecutada — mínimo riesgo)
Solo archivos sueltos de la raíz → cinco carpetas. No se borró nada (tampoco «copy» / « 2»).

| Carpeta | Archivos |
| --- | --- |
| `Documentos` | 35 |
| `Libros` | 23 |
| `Capturas` | 9 |
| `Banco` | 5 |
| `Instaladores` | 4 |

Log: `gio/_reorganizacion-raiz.txt`.

Carpetas grandes **sin tocar**: `personal gio` (38 GB), `movie` (38), `giochack` (37), `me` (19), `3sep2025personal` (17), `CHECK_fromoldhdd` (9,6), `portatil bigsurf`, `cat`, préstamo Cetelem. No fusionar copias a ciegas (`giochack` tiene descargas que `personal gio` no). Libre en Mac ~107 GB → no cabe copia completa de gio.

**Pendiente:** opción 2 (`_Copias` por tema) y opción 3 (`_Duplicados`).

## Disco externo ABIKE

Montaje: `/Volumes/ABIKE` (~60 GB usados / ~480 GB).

### Presupuesto en disco
- Principal (pre/post-reorg bajo A-Bike): `Budget 2023-2024.xlsx` — hojas **Budget BCN 2024 total**, **Budget tours 2024**, **Budget events 2023** (NL/EN, sin IVA). Tras reorg debería vivir en `A-Bike/Presupuesto/` si se movió con esa sección.
- También: `presupuesto.pdf` (Turist check), factura Budget Bikes 2015, `PRESUPUESTO_2025-00-1 A BIKE.PDF` (y copias que estaban en `tienda 28-7-26`).

### Reorganización hecha (2026-10-26)
**No tocar:** `gestoria-trimestre-gio` (raíz, mismos ~1042 archivos, fecha ~22 oct).

Estructura raíz actual:

| Carpeta | Contenido |
| --- | --- |
| `A-Bike/` | Empresas, Facturas, Impuestos, Nominas, Presupuesto, Contratos, Tiendas, HR, legal, ops |
| `Color Bikes/` | Empresas, contratos, facturas, ayudas, legal, escaneos Tallers |
| `Marketing/` | Material A-Bike/Maribel/tienda, hostales, MOCO, fotos, GYG/Viator, J&J |
| `Biosphere/` | Evidencias + docs Maribel/tienda |
| `Personal/` | Nóminas/costes Maribel, renta Gio/Jan/Zita, certificados |
| `Contabilidad/` | Admin 2019–2026, impuestos, AEAT, `Gestoria copia tienda 28-7-26`, finanzas 24–25 |
| `_Archivo copias/` | Thunderbird, Maribel HDD DATA |
| `gestoria-trimestre-gio/` | **Intocable** — facturas 2026 A-Bike y Color Bikes |
| `$RECYCLE.BIN` | Papelera Windows ~9,6 GB, intacta |

Log: `/Volumes/ABIKE/_reorganizacion-2026-10-26.txt`. Sin borrados de documentos; `Maribel` y `tienda 28-7-26` vacías eliminadas. Biosphere unificado (raíz + Maribel + tienda). Marketing unificado (duplicados Maribel ↔ tienda conviviendo bajo Marketing).

### Facturas emitidas desde 2022

Base contable: `/Volumes/ABIKE/Contabilidad/Administracion 2019-2026`

**A-Bike**

| Año | Dónde |
| --- | --- |
| 2022 | Sin Account A-Bike; sueltos en `A-Bike/Facturas/Proformas - Invoices/2022` |
| 2023 | `Account 2023/0. A BIKE R&T/Facturas` (+ copia `.../Sent Invoices 2023`) |
| 2024 | T1–T2 en `Account 2024/1. A-BIKE/Facturas`; T2–T4 en `.../Sent Invoices 2024` |
| 2025 | `Account 2025/1 - A-Bike/Facturas - Sent Invoices - A-BIKE` |
| 2026 | Completo ene–oct: `gestoria-trimestre-gio/1 - A-Bike 2026/A-Bike - 2026 - Sent`; Account solo ene–mar |

**Color Bikes**

| Año | Dónde |
| --- | --- |
| 2022 | `Account 2022/3. COLOR/Facturas` (4 T) |
| 2023 | `Account 2023/2. COLOR BIKES/Facturas` |
| 2024 | Solo T1–T2 en `Account 2024/3. COLOR BIKES/Facturas` |
| 2025 | `Account 2025/2 - Color Bikes/Facturas - sent - COLOR BIKES` |
| 2026 | Completo ene–oct: `gestoria-trimestre-gio/2 - Color Bikes 2026/Color Bikes - 2026 - Sent Invoices`; Account solo ene–mar |

Excel `Resumen facturas emitidas Billin` por año 2023–2026. `Finanzas 24-25` y `_Archivo copias/Maribel HDD DATA` = copias, no archivo principal.

### Reorg pendiente (propuesta, no ejecutada)
Separar `Administracion 2019-2026` en:

```text
Administracion 2019-2026/
  A-Bike/        2023–2026
  Color Bikes/   2019–2026  (2019–2022 solo Color; incl. Jovellanos/Tallers)
  Compartido/    bancos, nóminas mezcladas, Expenses forms, HR, Reporting,
                 Booking/GYG/Viator, seguros, AEAT, caso Rodrigo
```

Mover carpetas enteras, sin borrar. A-Bike contable empieza en 2023 (`0. A BIKE R&T` → luego `1. A-BIKE` / `1 - A-Bike`).

## Google Drive

Único archivo con «budget» en el título:

**[Budget 2025-2026.xlsx](https://docs.google.com/spreadsheets/d/1N9P3YRuSG1oLHocgWQjBvW5R4ZWYNAC6/edit)**  
ID: `1N9P3YRuSG1oLHocgWQjBvW5R4ZWYNAC6` · con estrella  
Creado: zitaabikework@gmail.com (10 dic 2025) · Modificado: dijkhuis.rob@gmail.com (14 abr 2026)

Hojas: **Budget BCN 2026 total** (Tallers + Montserrat, revendedores, costes, alquileres, intereses, inversión, cashflow), **salary costs 2026**, **Targets 2026** (GYG, Viator, BCN Enjoy, BCN Turisme, Klook, etc.). Sin título «presupuesto». Otras coincidencias de texto = menciones sueltas (tareas, reseñas), no el P&L.

## Notas para el agente

- Cloud agent: Drive MCP sí; Desktop/`/Volumes/ABIKE` no.
- No tocar `gestoria-trimestre-gio` en reorgs ABIKE.
- Gio Escritorio: priorizar opciones que mueven sin borrar; no fusionar volcados.
- Contabilidad mixta A-Bike/Color: usar Account por año + gestoría 2026 como fuente de verdad de emitidas recientes.
