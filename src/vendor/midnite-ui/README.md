# Vendored Midnite UI

Source: [bilo-io/midnite-ui](https://github.com/bilo-io/midnite-ui), `packages/ui/src`
(`@bilo-io/ui` v0.4.0), commit **`12a92bf`**. MIT licence, see `LICENSE`.

## Why vendored

`@bilo-io/ui` is published only to GitHub Packages, which needs an auth token at
install time. Vercel builds this site without one, so the components this CV uses
are copied here instead of installed. To update, re-copy the files from a newer
midnite-ui commit and bump the hash above.

## What is here

| Path | From `packages/ui/src` | Changed? |
| --- | --- | --- |
| `lib/cn.ts` | `lib/cn.ts` | no |
| `components/button.tsx` | `components/button.tsx` | no |
| `components/card.tsx` | `components/card.tsx` | no |
| `components/dynamic-background.tsx` | `components/dynamic-background.tsx` | no |
| `components/github-icon.tsx` | `components/github-icon.tsx` | no |
| `components/gradient-glow.tsx` | `components/gradient-glow.tsx` | no |
| `components/neuro-cloud-background.tsx` | `components/neuro-cloud-background.tsx` | **yes**: an optional `density` prop scales the neuron count; the site passes 0.5 (marked `[vendored adaptation]`) |
| `components/pointer-trail.tsx` | `components/pointer-trail.tsx` | no |
| `components/select.tsx` | `components/select.tsx` | no |
| `components/tabs.tsx` | `components/tabs.tsx` | no |
| `components/theme-toggle.tsx` | `components/theme-toggle.tsx` | no |
| `theme/theme-script.ts` | `theme/theme-script.ts` | no |
| `theme/theme-context.tsx` | `theme/theme-context.tsx` | **yes**: `localStorage` reads and writes wrapped in `try/catch` (marked `[vendored adaptation]`) |
| `styles/tokens.css` | `styles/tokens.css` | no |
| `styles/brand.css`, `styles/brand/*` | `styles/brand.css`, `styles/brand/*` | no |
| `styles/bg-patterns.css` | `packages/shell/src/appearance/appearance.css` | **extract**: only the static `.bg-*` pattern classes, used as the reduced-motion fallback |
| `index.ts` | `index.ts` | **new**: a small barrel for the files above |

The CV's own styling (glows, reveals, the top-bar placement of the theme menu) lives
in `src/styles/`, not in these files.
