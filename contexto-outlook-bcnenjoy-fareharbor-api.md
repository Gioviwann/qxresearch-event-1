# Contexto — Outlook info@a-bike.es: BCN Enjoy + API FareHarbor

Memoria operativa asimilada del chat *API Tour and rental reservations*. **No** reabrir el hilo; este archivo es la fuente en este agente.

**Relacionado:** `contexto-fareharbor-bcn-enjoy-reservas.md` (extracto FH dashboard). Este archivo = **buzón Outlook** + cruce correo.

---

## 1. Alcance de la búsqueda

| | |
|---|---|
| Cuenta | **info@a-bike.es** (Outlook web, sesión browser) |
| Pedido | Reservas tours/alquileres de `@bcnenyoy.com` + relacionadas con **API FareHarbor** |
| Rango | **1 dic 2025 → 11 oct 2026** |
| MCP Outlook | Plugin calendar no da mail; búsqueda vía browser |

### Corrección de dominio
No existe tráfico útil de `@bcnenyoy.com`. El partner es **@bcnenjoy.com** (BCN Enjoy / Barcelona Enjoy).

---

## 2. Cómo llegan las reservas BCN Enjoy

- **No** llegan como “Nuevo pedido” de agencia en el periodo 2025–2026.
- Entran por **API FareHarbor**, remitente tipo:
  - *Barcelona Enjoy API (BCN Enjoy - API)*  
  - *bcnenjoy (BCN Enjoy - API)*
- Carpeta **`bebcnenjoy`**: solo pedidos **antiguos**; último “Nuevo pedido” ≈ **30 ago 2023**.
- Carpeta archivo **`fareharbor`**: avisos FH hasta ~**oct 2023**; lo reciente está sobre todo en **`BOOKINGS ***`** (y búsqueda global).

---

## 3. Reservas BCN Enjoy vía API (Outlook)

**23 correos** de reserva, **feb–oct 2026**.  
**1 dic 2025 – 11 feb 2026:** ninguna de BCN Enjoy.

| Actividad | Producto | Empresa | Reserva FH | Correo |
|---|---|---|---|---|
| 27/03/2026 | CicloTour (asunto sin producto) | CicloTour | 340254556 | 26/03/2026 |
| 27/03/2026 | CicloTour (asunto sin producto) | CicloTour | 340237849 | 26/03/2026 |
| 01/04/2026 | Tapas tour | CicloTour | **340382971** | 27/03/2026 |
| 01/05/2026 | Daily Barcelona Highlights | CicloTour | **346365549** | 30/04/2026 |
| 09/05/2026 | Dutch bike rental | Rent a Bike | **347779349** | 08/05/2026 |
| 09/05/2026 | Dutch bike rental | Rent a Bike | **347775074** | 08/05/2026 |
| 22/05/2026 | Daily Barcelona Highlights | CicloTour | — | 21/05/2026 |
| 04/06/2026 | Daily Barcelona Highlights | CicloTour | 342116199 | 05/04/2026 |
| 08/07/2026 | Daily Barcelona Highlights | CicloTour | — | 07/07/2026 |
| 14/07/2026 | E-Bike Highlights tour | CicloTour | — | 13/07/2026 |
| 31/07/2026 | Daily Barcelona Highlights | CicloTour | — | 29/07/2026 |
| 01/08/2026 | Daily Barcelona Highlights | CicloTour | — | 31/07/2026 |
| 05/08/2026 | Fat E-Bike Rental | Rent a Bike | — | 05/08/2026 |
| 20/08/2026 | E-Bike Highlights tour | CicloTour | — | 19/08/2026 |
| 08/09/2026 | Tandem rental | Rent a Bike | 343544184 | 13/04/2026 |
| 08/09/2026 | Tandem rental | Rent a Bike | 343542065 | 13/04/2026 |
| 14/09/2026 | Touring Bike | Rent a Bike | 343684047 | 14/04/2026 |
| 14/09/2026 | Dutch bike rental | Rent a Bike | 341330735 | 01/04/2026 |
| 16/09/2026 | Dutch bike rental | Rent a Bike | — | 15/09/2026 |
| 19/09/2026 | Children’s Bike Rental | Rent a Bike | 341522928 | 02/04/2026 |
| 21/09/2026 | E-Bike Rental | Rent a Bike | 341410150 | 01/04/2026 |
| 24/09/2026 | Fat E-Bike Rental | Rent a Bike | 341515212 | 02/04/2026 |
| 28/09/2026 | Touring Bike | Rent a Bike | 341546518 | 02/04/2026 |

**Nota:** varias filas tienen **correo en abril** y **actividad en sep** (reservas anticipadas). Algunos `#` no salieron en el aria-label del listado.

Cruce con FH dashboard (`contexto-fareharbor-bcn-enjoy-reservas.md`): coinciden al menos **340382971, 346365549, 347775074, 347779349** y el Fat E-Bike ago; el informe FH con VN-123456 era más estrecho (solo mayo/ago en Rent a Bike en availability date).

---

## 4. Volumen general API FareHarbor (Outlook)

Avisos *New booking* / *New online booking*:

| Tramo recepción | ~Volumen |
|---|---|
| 12 feb – 18 may 2026 | **213** |
| 18 may – 11 oct 2026 | ~**320** más |

Outlook listó completo desde **12 feb 2026**. Antes (1 dic 2025 – ~11 feb): búsqueda acotada ≈ **10** reservas API (GetYourGuide / Viator, Dutch bike 28/12/2025–10/02/2026); **ninguna BCN Enjoy**.

Feb–may por producto (aprox.): Dutch 102 · Daily Highlights 39 · E-Bike 24 · Touring 12 · Tandem 9 · Cargo 8 · E-Bike Highlights 7 · kids 4 · Fat E-Bike 1 · Tapas 1.

Otros canales en asuntos: cliente online, **GetYourGuide API**, **Viator/TripAdvisor**.

Carpeta archivo `fareharbor` corta en **oct 2023**; lo nuevo no vive ahí.

---

## 5. Correos BCN Enjoy que **no** son reserva

| Fecha | Tema |
|---|---|
| 12/10/2025 | Piden que alquileres hora/día pasen por API FH |
| 03/12/2025 | Comprobante pago Alejandro Rojas (servicios oct 2025) |
| 26/02/2026 | Portal proveedor / cambio correos |
| 24/03/2026 | No encuentran alquileres para conectar en FH |
| 30/03/2026 | Portal / correos |
| 08/04/2026 | Respuesta A-Bike tour privado Moco / Street Art |
| 13/04/2026 | Comprobante pago Alejandro Rojas (servicios mar 2026) |

Contacto pago: `alejandrorojas@bcnenjoy.com`.

---

## 6. Carpetas Outlook útiles (info@)

| Carpeta | Uso |
|---|---|
| `bebcnenjoy` | Pedidos antiguos BCN Enjoy (pre-API) |
| `fareharbor` | Archivo FH antiguo (hasta ~2023) |
| `BOOKINGS ***` | Reservas recientes (incl. API) |
| Búsqueda global *All folders* | Necesaria; filtros “Groups” engañan |

---

## 7. Pendientes

- [ ] Completar `#` FH faltantes abriendo cada correo / cruzando advanced report sin filtro voucher  
- [ ] Autenticar MCP Outlook mail (si existe) para extractos repetibles  
- [ ] Confirmar con BCN Enjoy el estado de la conexión de alquileres (mail 24/03/2026)  

---

*Asimilado: Nov 2026 · chat API Tour and rental reservations · agente cloud `qxresearch-event-1`.*
