# November VSCode Theme — Claude Context

## Palette

| Role                   | Hex       |
| ---------------------- | --------- |
| Background             | `#21222c` |
| Selection / highlights | `#30364a` |
| Structural borders     | `#272a38` |
| Floating surfaces      | `#2a2b38` |
| Accent (orange)        | `#ed7249` |
| Accent hover (darker)  | `#b84e2e` |
| Foreground             | `#c8d5e0` |
| Muted text             | `#b8c5d0` |

## Architecture

- `themes/november.json` — all edits go here, split into two sections:
  - `colors` — workbench UI (borders, sidebar, tabs, terminal, etc.) — fully reviewed and on-palette
  - `tokenColors` — 166 TextMate syntax rules inherited from Palenight Operator — intentionally untouched
- Syntax colours (purple keywords, blue functions, yellow-green strings) are Palenight Operator and should be kept as-is

## Workflow

```sh
npm run install-ext   # package + install locally, then reload VS Code window
npm run marketplace   # package + open marketplace upload page
npm run release:patch # bump version, commit, tag, push
```

# November VSCode Theme — Claude Context

## Palette

| Role                   | Hex       |
| ---------------------- | --------- |
| Background             | `#21222c` |
| Selection / highlights | `#30364a` |
| Structural borders     | `#272a38` |
| Floating surfaces      | `#2a2b38` |
| Accent (orange)        | `#ed7249` |
| Accent hover (darker)  | `#b84e2e` |
| Foreground             | `#c8d5e0` |
| Muted text             | `#b8c5d0` |

## Architecture

- `themes/november.json` — all edits go here, split into two sections:
  - `colors` — workbench UI (borders, sidebar, tabs, terminal, etc.) — fully reviewed and on-palette
  - `tokenColors` — 166 TextMate syntax rules inherited from Palenight Operator — intentionally untouched
- Syntax colours (purple keywords, blue functions, yellow-green strings) are Palenight Operator and should be kept as-is

## Workflow

```sh
npm run install-ext   # package + install locally, then reload VS Code window
npm run marketplace   # package + open marketplace upload page
npm run release:patch # bump version, commit, tag, push
```

## Key theming decisions

### Surfaces

- All main surfaces (editor, sidebar, activity bar, status bar, title bar, tabs, panel, terminal) use `#21222c`
- Floating/elevated surfaces (dropdowns, quick input, breadcrumb picker) use `#2a2b38`
- Widget chrome and peek view results use `#272a38` (structural border colour as subtle elevation)
- Never use `#292D3E`, `#2C3043`, `#23243a` — these are Palenight remnants

### Buttons

- `button.background` / `extensionButton.prominentBackground`: `#ed7249`
- `button.hoverBackground` / `extensionButton.prominentHoverBackground`: `#b84e2e`
- `button.foreground`: `#ffffff` (full white — semi-transparent was hard to read)

### Badges

- `badge.background` / `activityBarBadge.background`: `#ed7249`
- `badge.foreground` / `activityBarBadge.foreground`: `#ffffff`

### Inputs

- `input.background`: `#2a2b38` — DO NOT change, affects search/replace inputs globally
- `input.border`: `#21222c` (invisible, intentional flat design)

## Comment widget / annotation (revu) theming

VS Code renders comment threads as a zone widget using peek view infrastructure. The key mapping is:

| Area                          | Key                         | Value     |
| ----------------------------- | --------------------------- | --------- |
| Outer border                  | `peekView.border`           | `#272a38` |
| Widget chrome / outer padding | `peekViewResult.background` | `#272a38` |
| Content area (display mode)   | `peekViewEditor.background` | `#21222c` |
| Edit textarea (edit mode)     | `peekViewTitle.background`  | `#21222c` |
| Header                        | `peekViewTitle.background`  | `#21222c` |

**Important:** `input.background` must NOT be changed to fix the edit textarea — it breaks all search/replace inputs globally. The edit textarea is controlled by `peekViewTitle.background`.

## VS Code theming limitations discovered

- Comment widget edit textarea and display area use different keys — `peekViewTitle.background` for edit mode, `peekViewEditor.background` for display mode
- Minimap scrollbar uses `minimapSlider.*` keys, NOT `scrollbarSlider.*` — they're independent
- `debugIcon.startForeground` must be set explicitly or VS Code defaults to teal
- `editorError.foreground: #00000000` and `editorWarning.foreground: #00000000` are intentional (invisible squiggles, using border instead)
- `editor.background` cannot be scoped per-widget — embedded editors always use the global value
- `commentThread.background` and `commentThreadReply.background` exist but have limited effect

## Publishing

1. `npm run release:patch` — bumps version, commits `🔖 chore(release): bump to X.X.X`, tags, pushes
2. `npm run marketplace` — packages `.vsix` into `build/` and opens the marketplace upload page
3. Upload `.vsix` manually at marketplace.visualstudio.com/manage/publishers/kud
