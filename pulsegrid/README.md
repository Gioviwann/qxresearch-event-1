# Pulsegrid

Original **3D tower defense** for desktop and browser. Inspired by classic grid/lane defense games, but built from scratch with modern rendering (Three.js), original systems, art direction, and naming.

> Not affiliated with Vector TD, Candystand, PCH Games, or Sony PlayStation Minis.

## Play

```bash
cd pulsegrid
npm install
npm run dev
```

Open the local Vite URL (default `http://127.0.0.1:5173`).

### Desktop (Electron)

```bash
npm run electron:dev
```

### macOS installer (`.dmg`)

Build the signed-or-unsigned DMG **on a Mac** (Apple Silicon or Intel):

```bash
npm install
npm run dist:mac
```

The installer appears in `pulsegrid/release/` as a `.dmg` (name includes version/arch).

> Building a macOS `.dmg` requires macOS + Xcode CLT. From Linux you can still develop/play via `npm run dev`, or produce a Linux AppImage with `npm run dist:linux`.
>
> Or trigger the GitHub Action **Pulsegrid macOS DMG** (`workflow_dispatch`) and download the artifact `pulsegrid-macos-dmg`.

### macOS: “Pulsegrid is damaged and can’t be opened”

That message usually means Gatekeeper blocked an **unsigned** download, not a corrupt file. After installing to Applications, run this in Terminal:

```bash
xattr -cr /Applications/Pulsegrid.app
```

Then open Pulsegrid again (or right-click the app → **Open** → confirm).

Alternative: **System Settings → Privacy & Security** → scroll to the blocked-app notice → **Open Anyway**.

## Controls

| Input | Action |
| --- | --- |
| Click empty cell | Place selected relay |
| Click owned relay | Upgrade (if you can afford it) |
| `1`–`4` | Select Lance / Seeker / Drag / Amp |
| Space | Call next wave |
| Sell button | Refund ~60% of spent credits |

## Relays

- **Lance** — single-target beam
- **Seeker** — slower homing pulses
- **Drag** — slows targets and chips HP
- **Amp** — aura that boosts nearby relay damage

Survive **20 waves**. Clearing a wave pays bank **interest**. Hold the core.

## License

MIT — original code and design in this folder.
