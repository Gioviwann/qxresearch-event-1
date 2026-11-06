# Contexto — mailforms + ATS + CV Giulia Mantovani

Memoria operativa asimilada del chat *Python web application features* (Mac Gio / proyecto `mailforms` + mejoras ATS del CV de Giulia). **No** reabrir el hilo; este archivo es la fuente en este agente.

**Máquina del chat:** `/Users/gioviwan/mailforms` (agente local Cursor). Distinto del cloud workspace `/workspace`.

---

## 1. Proyecto `mailforms`

### Brief original
Web Python amigable con backend capaz de **enviar y recibir emails**, **formularios** y UI friendly.

### Decisiones
| Ítem | Valor |
|---|---|
| Nombre | **mailforms** |
| Stack | **Flask** + **SQLite** + **SMTP** (envío) + **IMAP** (bandeja) |
| Ruta Mac | `/Users/gioviwan/mailforms` |
| Branch git | `cursor/flask-forms-and-email` |
| Commit | `c541fc8` — *Add a friendly Flask app for forms, SMTP send, and IMAP inbox.* |
| Local URL | `http://127.0.0.1:5000` |

### Rutas de la app
| Página | Función |
|---|---|
| `/contact` | Formulario “hello” |
| `/help` | Formulario de ayuda |
| `/submissions` | Notas / envíos guardados (SQLite) |
| `/compose` | Enviar correo (SMTP) |
| `/inbox` | Leer correo (IMAP) |

### Email
- Formularios **guardan en SQLite sin mail**.
- Send / Check for mail requieren `.env` (copiar de `.env.example`).
- Default pensado para **Gmail / App password** (no password normal).
- `ADMIN_EMAIL` = copia de cada nota de formulario por correo.
- **No** meter passwords reales en el repo; `.venv` y SQLite fuera del commit.

### Arranque
```bash
cd ~/mailforms
source .venv/bin/activate
python app.py
```

---

## 2. ATS (Applicant Tracking System) — resumen útil

- Software que filtra/ordena candidaturas **antes** de lectura humana.
- Mezcla de: requisitos duros, keywords, parseo del CV, scoring, reglas del reclutador.
- Mito “keyword exacta o papelera” está **exagerado**; en grandes sí hay más auto-filtro.
- Buenas prácticas: PDF/DOCX de **texto** (no imagen), **una columna**, títulos estándar, alinear lenguaje de la oferta **con verdad**, rellenar formulario web además del adjunto.
- Evitar: keywords falsas, texto blanco, tablas/iconos como único contenido.
- Scores tipo Jobscan = **simulación**, no el ATS real (Workday, Greenhouse, Lever, Taleo…).

---

## 3. CV Giulia Mantovani — archivos (Mac Downloads)

| Archivo | Qué es |
|---|---|
| `/Users/gioviwan/Downloads/CV_Giulia_Mantovani_aggiornato.pdf` | Original IT, 1 pág., corto |
| `/Users/gioviwan/Downloads/CV_Giulia_Mantovani_ATS_IT_EN.docx` | ATS editable: **pág. 1 IT + pág. 2 EN** |
| `/Users/gioviwan/Downloads/Giulia_Mantovani_Guida_LinkedIn.pdf` | Guía LinkedIn alineada al Word |

### Perfil (hechos del CV)
- **Giulia Mantovani** — laurea Scienze della Comunicazione (Insubria 100/110); liceo 89/100; EF Barcelona.
- LinkedIn: `https://www.linkedin.com/in/giulia-mantovani-a2a655299/` (en el Word sin `https://www.` para parseo).
- Idiomas en Word (revisar vs certificados): IT nativo · EN **C1** · ES **B2** (PDF original tenía EN B2 / ES B2.2 — **ojo a la discrepancia**).
- Titular Word: **Junior Office & Communication Assistant \| Milano / Milan**.
- Herramientas: Microsoft Office, Canva, Odoo, Fattura24, PEC.

### Experiencia clave (versión ATS ampliada vs PDF)
| Empresa | PDF original | Word ATS |
|---|---|---|
| **A-Bikes (Barcelona)** | Addetta al noleggio — atención, reservas, pagos | **Coordinamento punto vendita / Shop Coordinator** — personal/turnos, **tours en bici**, **control de cuentas/caja**, customer service |
| Studio BC& (Milano) | Office Manager | Igual, compacto (Feb 2024 – Gen 2026) |
| Airs Automation | Segretaria (stage) — facturas/inventario | **Assistente personale di direzione** — agenda + apoyo dirección |
| Museo Ma.Ga | Acogida | + **conducción de grupos** |
| Amazon | Outbound almacén | Compacto; trabajo bajo presión |

### Soft skills añadidos
Contacto con personas · pensamiento analítico · problem solving · trabajo bajo presión.

### Regla de edición
Sin inventar experiencia; ampliar solo lo pedido por Gio. Mantener **1 página IT + 1 página EN**.

---

## 4. Búsqueda de empleo (Indeed / LinkedIn — Milano)

**Match fuerte:** Junior Office Manager · Office Assistant · Assistente di direzione · Front Office / reception.

**Puente 1–2 años:** Junior Office & Marketing Assistant · Communication Assistant · Marketing Assistant junior · Event assistant.

**Plan B idiomas:** Customer care · Guest relations · prenotazioni.

**Evitar ahora:** Social Media Manager / SEO / Ads puros · store manager gran retail · magazzino (salvo urgencia).

Búsquedas útiles: `"office manager" junior Milano`, `"assistente di direzione" Milano`, `"office assistant" marketing Milano`, etc. Open to work: Entry/Associate · Milano · presenza/ibrido.

---

## 5. LinkedIn Giulia — actualizar sí

Recruiters cruzan CV + LinkedIn; deben coincidir (sobre todo A-Bikes, Airs, museo, titular Milano).

### Checklist (resumen de la guía PDF)
1. Foto clara  
2. Open to work (recruiters)  
3. Ubicación Milano e dintorni / Grassobbio abierto a Milano  
4. Headline = mismo titular del Word  
5. About alineado al perfil Word  
6. Experiencia = mismos cargos/fechas que el `.docx`  
7. Formación + idiomas + skills  
8. Open to work titles: Junior Office Manager, Office Assistant, Assistente di direzione, Communication Assistant, Marketing Assistant  

Headline sugerido:
```
Junior Office & Communication Assistant | Milano | Agenda, PEC, Front Office
```

---

## 6. Relación con A-Bike / Gio

- Giulia trabajó en **A-Bikes Barcelona** (punto de alquiler); el CV ATS refuerza coordinación, tours y caja — útil si Gio da referencia.
- El chat **mailforms** es herramienta local de Gio (formularios + correo), no el site público de alquiler.
- Guía LinkedIn de Giulia ≠ indicaciones LinkedIn de Gio (`giovlazarde`); no mezclar.

---

## 7. Pendientes / siguientes pasos posibles

- [ ] Conectar `.env` mailforms (Gmail app password) en Mac Gio  
- [ ] Si Giulia confirma nº de personas que coordinaba en A-Bikes → añadir cifra al CV  
- [ ] Alinear idiomas Word ↔ certificados reales  
- [ ] Ella actualiza LinkedIn con la guía PDF  
- [ ] Opcional: exportar solo página IT o EN a PDF según anuncio  

---

*Asimilado: Nov 2026 · chat mailforms / ATS / CV Giulia · agente cloud `qxresearch-event-1`.*
