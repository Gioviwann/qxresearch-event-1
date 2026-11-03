# Contexto: Cursor Agent, Grok Bot, tokens y plan Pro

Memoria operativa asimilada del chat sobre Cursor IA / Cloud Agents, modelos Grok, tokens, cuotas Pro y configuración de Grok Bots. **No** reabrir el hilo; este archivo es la fuente en este agente.

**Cuenta / Spending (pantallazos del usuario):** plan legacy **Pro $20/mo** · ciclo Models **9 oct → 9 nov 2026** · On-Demand **Disabled** · Monthly Limit **Disabled**.

**Cloud Agent de ese hilo (referencia):** `bc-01a12c31-78af-7ebe-a006-4150e9058fc6` — repo `Gioviwann/qxresearch-event-1` · source mobile · owner Giovanni Lazarde Borges.

**Canvas creados en el hilo (guías visuales):**
- Guía Grok Bot paso a paso (pasos clicables + prompts).
- Guía “Tu Pro: tokens, modelos y Grok Bot” (tabs tokens / models / bot / calendar).

Docs oficiales citadas: [Agent overview](https://cursor.com/es/docs/agent/overview.md) · [Cloud Agents](https://cursor.com/es/docs/cloud-agent.md) · [Grok Bot](https://cursor.com/es/docs/grok-bot.md) · [Get started](https://cursor.com/docs/grok-bot/get-started) · [Usage limits](https://cursor.com/help/models-and-usage/usage-limits) · [Models & pricing](https://cursor.com/docs/models-and-pricing.md) · [Grok Bot FAQs](https://cursor.com/help/grok-bot/faqs) · [Dashboard Bot](https://cursor.com/dashboard/bot) · [Download Bot](https://cursor.com/download/bot).

---

## 1. Regla de oro: dos productos distintos

| | **Agent + modelo Grok** | **Grok Bot (app)** |
|--|-------------------------|--------------------|
| Dónde | Cursor IDE / web / Cloud Agents / CLI / móvil | App **Grok Bot** aparte (Mac/Win/Linux/iOS) |
| Qué hace | Código: editar, terminal, tests, PRs | Trabajo multi-app: email, research, CRM, digests, PC en la nube |
| Modelo | Tú eliges Grok 4.7 / 4.6 / 4.5 (Cmd/Ctrl+/) | El sistema elige; no hay picker de modelo |
| Memoria / bots nombrados | Sesión / Cloud Agent | Bots con nombre + memoria + skills / routines |
| Cuota | **Cursor Models** (mensual) | **Grok Bot weekly** (semanal, medidor aparte) |

**Paywall “fuera”:** si al salir del Agent pide pagar otra suscripción, casi seguro está en la app **Grok (xAI / grok.com / SuperGrok)**, no en **Grok Bot** con la misma cuenta Cursor Pro. Camino correcto: mismo email Pro → [cursor.com/dashboard/bot](https://cursor.com/dashboard/bot) → Download → Sign in with Cursor.

**No hay botón “crear Grok Bot” dentro del panel Agent del IDE.** Son hermanos con la misma membresía Pro. El Bot puede delegar código a un Cloud Agent; el Agent no “alquila” el Bot.

---

## 2. Qué es Cursor Agent (modos)

Agent = asistente que busca, edita, ejecuta terminal y verifica. Abrir: **Cmd/Ctrl+I**.

| Modo | Uso | Edita |
|------|-----|-------|
| **Agent** | Features, bugs, tests | Sí |
| **Ask** | Entender / explorar | No |
| **Plan** | Plan primero, luego código | Tras aprobar |
| **Debug** | Bugs con evidencia runtime | Sí |

**Cloud Agents:** VM en la nube (no en el laptop). Clonan repo, ramas, push, PRs, tests, browser. Inicio: [cursor.com/agents](https://cursor.com/agents), app móvil, Desktop (selector Cloud), Slack/GitHub `@cursor`.

---

## 3. Estado real de la cuenta Pro (pantallazos)

| Concepto | Estado (ciclo Oct 9 → Nov 9, 2026) |
|----------|-------------------------------------|
| Plan | Pro $20/mo (legacy) |
| Cursor Models (Grok / Composer) | **~60%** (~218.6M tokens); casi todo `grok-4.7-high-fast` (~217.3M) + poco Auto (~1.3M) |
| Other Models (Claude / GPT / Gemini…) | **0%** |
| Grok Bot · Weekly usage | **0%** (incluido, sin usar) · reset semanal ~**25 oct** |
| On-Demand | **Disabled** → **$0** extra |
| Monthly Limit | Disabled |
| Reset Models | **9 nov** (cupo limpio; lo no usado **no** hace rollover) |

### Capas de uso

1. **Cursor Models (mensual)** — Grok 4.x + Composer 2.5. Bolsa principal del Agent diario.
2. **Other Models (mensual)** — Claude, GPT, Gemini, etc. Misma UI Agent, otra bolsa (precio API del proveedor).
3. **Grok Bot (semanal)** — solo la app Grok Bot; al 100% se pausa hasta el reset (o on-demand si se activa).

### Tokens: qué son / qué pasa al acabarlos

- Token ≈ trozo pequeño de texto (entrada = prompt+archivos; salida = respuesta). Una tarea larga = muchos tokens; no “1 pregunta = 1 token”.
- **Con cupo:** Agent, Chat, Cloud Agents, editar, tests, pools Cursor Models y Other Models.
- **On-Demand OFF (caso actual):** al 100% de ambas bolsas Models → el servicio se corta/pausa hasta el reset; **no hay cargo sorpresa**.
- **Si Cursor Models llega a 100% primero:** aún se puede usar Other Models (usuario al 0%).
- **Si se activa On-Demand:** pay-as-you-go a precio API; conviene poner tope en $ (ej. $10).
- **Fast (~2×)** contra el cupo vs modo normal. Tip ahorro: Grok sin Fast, effort medium/low, o Composer 2.5 en tareas simples — para que el ~40% restante dure hasta el 9 nov.

### Calendario de renovación

- **Hasta Nov 9:** queda ~40% Cursor Models + 100% Other Models + Grok Bot semanal independiente.
- **Días previos al reset:** si se llega a 100% con On-Demand OFF → sin Agent hasta Nov 9 (o upgrade / on-demand).
- **Nov 9:** cobro Pro $20 (si renovación activa); Cursor Models y Other Models a 0% usado; lo no gastado se pierde.
- **Grok Bot:** reset semanal aparte (ej. Oct 25), no ligado al mes Models.

---

## 4. Configurar Grok Bot con Pro (sin segunda cuota)

Requisitos: plan de pago Cursor (Pro/Pro+/Ultra/Teams/Start) **o** SuperGrok enlazado en [cursor.com/bot/onboarding](https://cursor.com/bot/onboarding). Privacy Mode Legacy puede pedir cambio a Privacy Mode normal (Bot necesita storage en nube).

### Pasos

1. Login en cursor.com con el **mismo email** del Spending / Pro.
2. [cursor.com/dashboard/bot](https://cursor.com/dashboard/bot) → “Download Grok Bot setup” **o** [cursor.com/download/bot](https://cursor.com/download/bot) (Mac/Win/Linux; iPhone App Store “Grok Bot”, iOS 18+).
3. Instalar y abrir la app **Grok Bot** (icono distinto a Cursor IDE).
4. **Sign in** → autenticación Cursor en el navegador. **No** comprar SuperGrok en la app xAI.
5. Settings → Usage & Billing: debe verse acceso Pro / Grok Bot weekly (usuario al 0%).
6. **New Bot (+)** → un solo trabajo (no “hazlo todo”) → primer mensaje = rol + reglas → primera tarea real con límites (“no envíes / no cambies prod”).
7. Si pide login en una web: **Open computer** → el usuario pone pass/2FA (el Bot no ve la contraseña) → **Return control**; sesión queda guardada.
8. Revisar resultado → corregir formato → pedir **skill** → luego **routine** (ej. cada lunes a las 9, parar en review).
9. Acciones peligrosas (enviar, pagar, prod) detrás de approval / Auto Review.

**Si falla el login:** Quit completo de la app (no solo cerrar ventana) y reabrir. [How Tos](https://cursor.com/help/grok-bot/how-to).

**Laptop apagado:** el trabajo corre en el PC en la nube; cerrar app/laptop no mata un turno en background ni una routine.

### Buen pedido = resultado + fuentes + límites + entregable + dónde parar

- Mal: “Ayúdame con la uni.”
- Bien: “Resume este PDF en 5 viñetas… no cambies el archivo.”

---

## 5. Usar Grok solo para código (sin app Bot)

1. Cursor IDE → Agent **Cmd/Ctrl+I**.
2. Selector de modelo **Cmd/Ctrl+/** → **Grok 4.7** (o 4.6 / 4.5) / Composer 2.5 / Claude/GPT / Auto.
3. Cloud Agent: selector Cloud bajo el input, o [cursor.com/agents](https://cursor.com/agents); elegir Grok al lanzar.

Ejemplo:

```
En este repo, añade un endpoint GET /health que devuelva { ok: true }.
Escribe un test y córrelo. No toques auth. Abre un PR si todo pasa.
```

Grok en Agent va al pool **Cursor Models** (más uso incluido que Claude/GPT en muchos planes legacy).

### Tabla rápida estudiante / ops

| Quiero… | Usa |
|---------|-----|
| Tarea del repo con Grok | Agent + Grok 4.7 |
| CI / PR sin PC encendido | Cloud Agent + Grok |
| Resumir PDFs / research / digests | App Grok Bot |
| Bot semanal que revise PRs | Automation (Pro+) + Grok, o routine en Grok Bot |

---

## 6. Cinco Grok Bots de ejemplo (copiar en New Bot)

Un bot = un trabajo. No mezclar apuntes + email + bugs en el mismo.

### 1. Agenda-diaria (chief of staff)

```
Tu trabajo es “Agenda-diaria”.
Revisas email, calendario y notas cuando te lo pido.
Formato fijo:
1) 5 prioridades
2) Blockers
3) 3 borradores de respuesta (sin enviar)
No envíes mensajes ni cambies eventos. Espera mi OK.
Recuerda este formato.
```

Primera tarea: `Haz el digest de hoy con el formato acordado. No envíes nada.`

### 2. Estudiante-apuntes

```
Tu trabajo es “Estudiante-apuntes”.
Resumes PDFs y apuntes en español claro.
Formato:
1) Resumen en 5 viñetas
2) Fechas / definiciones / fórmulas
3) Preguntas abiertas
4) Cita la sección de origen
Nunca edites el archivo original. Recuerda esto.
```

Primera tarea: `Adjunta este PDF. Resúmelo con el formato acordado. No modifiques el archivo.`

### 3. Bug-repro (QA)

```
Tu trabajo es “Bug-repro”.
Lees bugs y los reproduces en staging con cuenta de prueba.
Devuelves: pasos exactos, esperado vs actual, screenshots,
navegador/OS y caso mínimo.
No uses datos de producción ni cambies código/prod.
```

Primera tarea: `Lee este bug y reprodúcelo en staging. Devuelve el pack completo. No toques producción.`

### 4. Research-corto

```
Tu trabajo es “Research-corto”.
Investigas un tema en la web y fuentes que te indique.
Entrega:
1) Resumen de 8 viñetas
2) Tabla: afirmación | fuente | enlace
3) Riesgos / huecos de info
No publiques, no envíes, no edites docs ajenos. Solo borrador para review.
```

Primera tarea: `Investiga [tema]. Máximo 10 fuentes fiables. Para en review; no publiques nada.`

### 5. Inbox-borradores

```
Tu trabajo es “Inbox-borradores”.
Clasificas el inbox (urgente / esperar / archivar).
Por cada urgente: 1 borrador en mi tono, corto.
Nunca envíes ni archives. Solo lista + borradores para mi aprobación.
Recuerda mi tono: directo, sin florituras.
```

Primera tarea: `Revisa los no leídos de hoy. Lista + borradores. No envíes nada.`

---

## 7. Checklist final Grok Bot

- [ ] Bot con un solo trabajo claro en la descripción
- [ ] 1 tarea real con alcance seguro
- [ ] Formato corregido hasta usable sin el usuario
- [ ] Skill guardada y probada con otro input
- [ ] Acciones peligrosas detrás de approval
- [ ] Login vía dashboard/bot + misma cuenta Pro (no app xAI)

---

## 8. Enlaces rápidos

- [Dashboard](https://cursor.com/dashboard) · [Dashboard Bot](https://cursor.com/dashboard/bot) · [Download Bot](https://cursor.com/download/bot)
- [Usage & limits](https://cursor.com/help/models-and-usage/usage-limits) · [Models & pricing](https://cursor.com/docs/models-and-pricing)
- [Grok Bot ES](https://cursor.com/es/docs/grok-bot.md) · [Get started](https://cursor.com/docs/grok-bot/get-started) · [Use cases](https://cursor.com/docs/grok-bot/use-cases) · [FAQs](https://cursor.com/help/grok-bot/faqs)
- [Grok 4.7](https://cursor.com/es/docs/models/grok-4-7.md) · [Agents](https://cursor.com/agents)
