# Contexto — FareHarbor: duplicar availabilities 2026 → 2027

Memoria operativa asimilada del chat *FareHarbor internal browser* (agente local Cursor + browser interno). **No** reabrir el hilo; este archivo es la fuente en este agente.

**Shortnames confirmados**
| Compañía | Shortname | Uso |
|---|---|---|
| Barcelona CicloTour (tours) | `barcelonaciclotour` | Tours guiados |
| Barcelona Rent a Bike (alquiler) | `barcelonarentabike` | Alquileres |

Dashboard típico: `https://fareharbor.com/<shortname>/dashboard/...`  
Sesión vista en el chat: usuario **Giovanni**.

API útil (con cookie de sesión):
```
/api/v1/companies/<shortname>/items/
/api/v1/companies/<shortname>/items/<pk>/calendar/<year>/<mm>/
```

---

## 1. Cómo duplicar en FareHarbor (UI)

Por **item**:

1. Item → **Calendar** (o Availability Schedules → Create availabilities).
2. **Duplicate availabilities**
3. Choose year to copy from: **2026**
4. Months: **all**
5. **Duplicate**
6. Las copias nacen como **Closed & hidden**.
7. Abrir con **Update booking status** / **Update availabilities**:
   - Fechas `01/01/2027` → `31/12/2027`
   - Status destino: **Auto close (online cutoffs enforced)**
   - Filtro *Current online booking status* = **Closed & hidden**
   - **Preview changes** → verificar el número
   - **Complete update** solo si el count es el esperado

**Límites**
- Solo copia **patrones repetidos**, no one-offs sueltos.
- Si 2027 ya tenía slots, aparecen **dobles** a la misma hora (uno bookable viejo + uno closed nuevo). No borrar el bookable con reservas.
- Pasos de mutación masiva pueden pedir **aprobación** en Cursor; si el prompt no aparece, el save no se completa.
- Si la página está locked: **Take Control**.

---

## 2. Barcelona CicloTour — estado tras el chat

| Item | pk (ref) | 2026→2027 | Estado |
|---|---|---|---|
| **Moco Museum \| Barcelona Street Art Bike Tour** | `483115` | **208** slots copiados | Online = **Auto close** (como 2026). Enero 2027 bookable. |
| **Daily Barcelona Highlights bike tour** | `399990` | **317** slots copiados | Creados **Closed & hidden**. ~**161** días con **doble** 10:00 (viejo bookable + copia closed). ~**156** días nuevos solo closed → aún no bookable. Booking 2027 existente **no tocado**. |
| E-Bike Highlights | (en lista items) | **No** copiado aún | 2027 ya tenía slots → mismo riesgo de overlap |
| Private bike tour | | **No** | |
| Private Gaudí & Modernism | | **No** | |
| Private Tapas | | **No** | |
| Street Art Bike Tour & Moco Museum Entrance (unlisted) | | **No** | |

**Pendiente CicloTour (si se retoma):**
1. Duplicar calendarios vacíos / restantes (E-Bike, privates, unlisted).
2. Limpiar dobles de Highlights (mantener bookable con reservas; no abrir el closed duplicado en esos días).
3. Abrir a Auto close los días nuevos de Highlights que solo tienen la copia closed.

Schedule de ejemplo visto: Highlights *High season* schedule id `42449` (item `399990`).

---

## 3. Barcelona Rent a Bike — estado tras el chat

Conteos **2026 = 2027** en items con actividad (sin doble copia):

| Item | pk | Slots/año | Online booking 2027 |
|---|---|---:|---|
| Dutch city bike | `399972` | **8 285** | **Closed & hidden** (pendiente abrir) |
| E-Bike | `399984` | **7 920** | Closed & hidden (salvo excepciones abajo) |
| Fat E-Bike | `480670` | **7 920** | **Auto close** (bookable) |
| Tandem | `399985` | **8 650** | **Auto close** |
| Family / Cargo | `399986` | **7 920** | **Auto close** |
| Children’s bike | `480758` | **7 920** | **Auto close** |
| Touring bike | `480674` | **7 920** | Closed & hidden (pendiente abrir) |
| E-Scooter | `480663` | **0** | Nada que copiar |
| Specialized Racing Bike | `480680` | **0** | Nada que copiar |

### Excepciones one-off / call-to-book (no restauradas 1:1)
- **E-Bike:** 10 marzo 2026 → 18 slots *call* (2027 no restaurados como call).
- **Cargo:** 4–6 enero 2026 → 54 slots *call*; intento de restore a *call* en 2027; verificar en dashboard si quedaron.

### Pedido pendiente del usuario
> “open the slots for all 2027 with item city bike option”

= **Dutch city bike** `399972`: abrir **8 285** closed → **Auto close** en todo 2027.  
Formulario preparado en el chat; **Complete update no se guardó** (approval prompt falló).

Pasos manuales / reintento agente:
1. `…/items/399972/calendar/2027/01/`
2. Update availabilities / Update booking status  
3. `01/01/2027`–`31/12/2027` · Auto close · filtro Closed & hidden  
4. Preview = **8285** → Complete update  

También quedan por abrir (mismo patrón): **E-Bike** `399984`, **Touring** `480674`.

---

## 4. Items CicloTour (muestra del chat)

Incluidos en exploración API: `399990`, `407963`, `483115`, `402475`, `455331`, `455341`, `570875` (nombres: Highlights, E-Bike, Moco, privates, etc.).

---

## 5. Cursor: mezclar chats / fork (respuesta dada en el hilo)

Los chats **no** se mezclan solos. Formas de conectar:
- `@` → **Chats** y elegir conversación anterior  
- **Fork Chat** (menú pestaña / sidebar / Command Palette) — copia todo a un chat nuevo; o fork desde un mensaje concreto  
- Side chat: `Shift+Cmd+S`  
- Buscar Agents: `Cmd+K`  
- Project en Agents Window = contexto compartido  
- Reglas / skills / archivos del repo sí se comparten entre chats  

Fork: no hay atajo de teclado documentado; en CLI Cursor: `/fork` (`/branch`, `/duplicate`).

---

## 6. Relación con otros contextos

- Montserrat sheet *Reservations* apunta GYG/FH/BRB; no sustituye calendario FH.
- Shortnames también usados al intentar login cloud: `barcelonarentabike`, `barcelonaciclotour`.
- Pricing 2027 / Ashton rebuild FH: ver `contexto-bcn-tour-pricing-2027-deck.md`.

---

## 7. Checklist reanudación

- [ ] CicloTour: terminar items no copiados + limpiar Highlights dobles + abrir closed restantes  
- [ ] Rent a Bike: abrir city bike **8285** → Auto close  
- [ ] Rent a Bike: abrir E-Bike + Touring closed → Auto close  
- [ ] Verificar call-to-book E-Bike 10/03 y Cargo 4–6/01 en 2027  
- [ ] Scooter / Racing: decidir si crear schedule 2027 desde cero  

---

*Asimilado: Nov 2026 · chat FareHarbor internal browser · agente cloud `qxresearch-event-1`.*
