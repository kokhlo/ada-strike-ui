# strike-ui

[![CI](https://github.com/kokhlo/ada-strike-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/kokhlo/ada-strike-ui/actions/workflows/ci.yml)
[![Histoire](https://github.com/kokhlo/ada-strike-ui/actions/workflows/pages.yml/badge.svg)](https://github.com/kokhlo/ada-strike-ui/actions/workflows/pages.yml)

Dark-first design tokens and Vue 3 components for **dense operator dashboards**:
monitoring consoles, control panels, telemetry tables. Built for screens where a
lot of state has to be readable at a glance — compact sizing, monospaced data
fonts, high-contrast dark surfaces, semantic status colors.

- **Vue 3.5 + TypeScript** — components ship with types
- **Token-driven theming** — one CSS custom-property scale, no hardcoded colors
- **Headless-leaning primitives** — structure and state logic in the component,
  rendering fully customizable via slots
- **Tested** — every component covered by vitest + @vue/test-utils specs

## Components

| Component | Purpose |
|---|---|
| `SuButton` | Actions: `primary` / `ghost` / `danger` variants, `loading`, `disabled` |
| `SuBadge` | Status tags in six semantic tones, optional status dot |
| `SuCard` | Raised panel with title / meta / body / footer slots |
| `SuKbd` | Keyboard key caps for shortcut hints |
| `SuToggle` | Two-state switch (`v-model`, real `role="switch"` button) |
| `SuDataTable` | Sortable data table with per-column `cell-<key>` slots |

Browse all stories: **[Histoire docs on GitHub Pages](https://kokhlo.github.io/ada-strike-ui/)**

## Install

> Published as a git dependency for now (see [Publish to npm — TODO](#publish-to-npm--todo)).

```bash
pnpm add github:kokhlo/ada-strike-ui
```

Usage:

```ts
// main.ts
import { createApp } from 'vue'
import StrikeUI from 'strike-ui'
import 'strike-ui/styles'

const app = createApp(App)
app.use(StrikeUI)
```

Or import components individually:

```vue
<script setup lang="ts">
import { SuButton, SuBadge, SuDataTable } from 'strike-ui'
import type { SuDataTableColumn } from 'strike-ui'
</script>
```

Peer dependency: `vue >= 3.5`.

### Design tokens

All styling consumes CSS custom properties defined in `src/styles/tokens.css`
(shipped in `strike-ui/styles`). Base palette:

| Token | Value | Role |
|---|---|---|
| `--su-bg` | `#0b0f14` | app background |
| `--su-panel` | `#121821` | raised panels |
| `--su-accent` | `#ff9e2c` | primary accent |
| `--su-success` | `#7ee08a` | success states |
| `--su-error` | `#ff6b6b` | error / destructive |
| `--su-font-mono` | system mono stack | data, numbers, code |

Override any token on `:root` (or scope to a subtree) to re-theme the kit
without touching component styles.

## Development

```bash
pnpm install
pnpm story          # Histoire dev server
pnpm test           # vitest
pnpm lint           # eslint
pnpm build          # type-check (vue-tsc) + library build
pnpm story:build    # static Histoire build -> .histoire/dist
```

## Publish to npm — TODO

The package is not on the npm registry yet. When publishing:

1. Remove `"private": true` from `package.json`.
2. `pnpm login && pnpm publish --access public` (name `strike-ui`).
3. Update this README's install section to the registry form.

## License

[MIT](./LICENSE)
