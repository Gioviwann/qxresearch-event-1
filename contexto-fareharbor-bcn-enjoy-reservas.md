# Contexto — FareHarbor: reservas BCN Enjoy - API

Memoria operativa asimilada del chat *FareHarbor reservation data* (browser interno, ~11 oct 2026). **No** reabrir el hilo; este archivo es la fuente en este agente.

**Relacionado:** `contexto-fareharbor-availabilities-2027.md` (calendarios 2026→2027). Este archivo = **extracción de bookings / afiliados**.

---

## 1. Filtro del extracto

| Campo | Valor |
|---|---|
| Affiliate | **BCN Enjoy - API** |
| Voucher (1.ª consulta) | **VN-123456** (BCN Enjoy reutiliza el mismo voucher en API) |
| Rango | **1 ene 2026 → 11 oct 2026** |
| Report on | **Availability date** (fecha de la actividad) |
| Canceladas 0 € | Excluidas por el filtro del informe |

Empresas: `barcelonaciclotour` + `barcelonarentabike`.

---

## 2. Totales con affiliate + voucher VN-123456

**10 reservas** · CicloTour tours + Rent a Bike alquileres.

### Barcelona CicloTour — 7 reservas · 15 pax · **685,00 €**
(Solo tours; sin alquileres con este filtro)

| Reserva | Actividad | Actividad | Creada | Pax | Total |
|---|---|---|---|---:|---:|
| #340382971 | Tapas tour | 1/4/26 11:00–14:00 | 27/3/26 | 3 | 240,00 € |
| #346365549 | Daily Barcelona Highlights | 1/5/26 10:00–12:30 | 30/4/26 | 1 | 29,50 € |
| #350209171 | Daily Barcelona Highlights | 22/5/26 10:00–12:30 | 21/5/26 | 1 | 29,50 € |
| #353144102 | Private Gaudí & Modernism | 5/6/26 13:00–15:30 | 4/6/26 | 2 | 150,00 € |
| #360960625 | Daily Barcelona Highlights | 8/7/26 10:00–12:30 | 7/7/26 | 2 | 59,00 € |
| #367222645 | Daily Barcelona Highlights | 31/7/26 10:00–12:30 | 29/7/26 | 4 | 118,00 € |
| #367812059 | Daily Barcelona Highlights | 1/8/26 10:00–12:30 | 31/7/26 | 2 | 59,00 € |

Verificado en #353144102: affiliate + voucher = BCN Enjoy / VN-123456.

### Barcelona Rent a Bike — 3 reservas · 5 pax · **97,00 €**
(Alquileres)

| Reserva | Actividad | Actividad | Creada | Pax | Total |
|---|---|---|---|---:|---:|
| #347775074 | Dutch bike rental | 9/5/26 09:00 | 8/5/26 | 1 | 8,00 € |
| #347779349 | Dutch bike rental | 9/5/26 09:00 | 8/5/26 | 1 | 8,00 € |
| #369349693 | Fat E-Bike Rental | 5/8/26 11:30 | 5/8/26 | 3 | 81,00 € |

---

## 3. Rent a Bike — BCN Enjoy mes a mes (sin filtro voucher)

Misma empresa, solo affiliate **BCN Enjoy - API**, ene–11 oct 2026. Resultado: **solo mayo y agosto**; resto **0**. Las 3 reservas siguen con **VN-123456**.

| Mes | Reservas | Números |
|---|---:|---|
| Ene–Abr 2026 | 0 | — |
| **May 2026** | **2** | #347775074, #347779349 |
| Jun–Jul 2026 | 0 | — |
| **Ago 2026** | **1** | #369349693 |
| Sep–Oct (hasta 11) 2026 | 0 | — |

**Mayo:** 2 pax · 16,00 € · Dutch bike rental ×2  
**Agosto:** 3 pax · 81,00 € · Fat E-Bike Rental ×1

---

## 4. Cómo buscar por afiliado (paso a paso)

El buscador superior = nº reserva / nombre / voucher suelto. Para afiliado + fechas:

1. Cambiar empresa (arriba dcha): CicloTour **o** Rent a Bike — **repetir en las dos**.
2. **Reports → Bookings**.
3. **Advanced**.
4. **Dates:** Custom Range · inicio/fin · **Report on = Availability date** (o *Booking created date* si interesa creación).
5. **Add Filter → Affiliate** → desmarcar Any → marcar afiliado → **Save**.
6. Opcional: **Add Filter → Voucher** · contains · texto → Save.
7. **Detailed report** + columna Booking ID (mínimo).
8. Opcional mes a mes: group by **Availability Month**.
9. **Generate**.

URL útil:  
`https://fareharbor.com/<shortname>/dashboard/reports/advanced/bookings/`

---

## 5. Listas de afiliados (snapshot del chat)

### Barcelona CicloTour
Adventuro Ltd EUR - API · Barcelona Turisme · **BCN Enjoy - API** · FareHarbor Sites · FH Agent (OpenCX) - EUR · GetYourGuide - EUR - API · Klook - EUR - API · Manawa - EUR - API · Moco Museum - Referral · Ocio Business - EUR - API · The Tour Guy - EUR - API · Tiqets - EUR - API · TripAdvisor Experiences/Viator - EUR - API

### Barcelona Rent a Bike
**BCN Enjoy - API** · FH Agent (OpenCX) - EUR · GetYourGuide - EUR - API · Ocio Business - EUR - API · Tiqets - EUR - API · TripAdvisor Experiences/Viator - EUR - API

API afiliados (sesión):  
`GET /api/v1/companies/<shortname>/affiliates/`

---

## 6. Nota operativa tienda

Las reservas Rent a Bike #347775074 / #347779349 (9 may, Dutch, 8 €, BCN Enjoy / FH) también aparecen en la hoja Montserrat *Reservations* (ver chat caja noviembre). Útil para cruzar FH ↔ sheet.

---

## 7. Pendientes posibles

- [ ] Mismo informe mes a mes en **CicloTour** (solo BCN Enjoy, sin voucher)
- [ ] Repetir extracto con **Booking created date** si contabilidad lo pide
- [ ] Export CSV del advanced report para archivo contable

---

*Asimilado: Nov 2026 · chat FareHarbor reservation data (datos de ~11 oct 2026) · agente cloud `qxresearch-event-1`.*
