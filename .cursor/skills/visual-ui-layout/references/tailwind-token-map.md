# Tailwind + token conversion map

Use this reference in Step 3 (Decide strategy) to convert Design-Mode arbitrary values into clean, scale-based Tailwind utilities and existing design tokens. Always prefer a value from these tables over an arbitrary `[...]` value or an inline style.

## Spacing scale (padding, margin, gap, space-x/y)

Tailwind's default spacing scale is `0.25rem` (4px) per step. Snap the Design-Mode pixel value to the nearest step.

| px | Tailwind step | Example utilities |
| --- | --- | --- |
| 0 | `0` | `p-0`, `m-0`, `gap-0` |
| 2 | `0.5` | `p-0.5`, `mt-0.5` |
| 4 | `1` | `p-1`, `ml-1`, `gap-1` |
| 6 | `1.5` | `px-1.5`, `gap-1.5` |
| 8 | `2` | `p-2`, `ml-2`, `gap-2` |
| 10 | `2.5` | `mt-2.5` |
| 12 | `3` | `p-3`, `gap-3` |
| 14 | `3.5` | `mt-3.5` |
| 16 | `4` | `p-4`, `mt-4`, `gap-4` |
| 20 | `5` | `p-5`, `gap-5` |
| 24 | `6` | `p-6`, `ml-6`, `gap-6` |
| 28 | `7` | `mt-7` |
| 32 | `8` | `p-8`, `gap-8` |
| 40 | `10` | `p-10` |
| 48 | `12` | `p-12` |
| 64 | `16` | `p-16` |

Rule of thumb: `step = round(px / 4)`. If the value lands between steps and the intent is clearly "a little", round to the nearest existing step rather than inventing an arbitrary value. Only use an arbitrary value (e.g. `mt-[15px]`) if the design genuinely requires a non-scale value and no token fits — and say so.

## Width & max-width

Prefer semantic `max-w-*` containers for cards/content, and the `w-*` scale for fixed elements.

| Design-Mode value (approx) | Prefer |
| --- | --- |
| ~320px card | `max-w-sm` (24rem / 384px) or `w-80` (320px) |
| ~384px card | `max-w-sm` |
| ~420-450px card | `max-w-md` (28rem / 448px) |
| ~512px | `max-w-lg` (32rem) |
| ~576px | `max-w-xl` (36rem) |
| full-bleed | `w-full` |

For square/fixed tiles, use the size scale: `size-16` (64px), `size-12` (48px), `h-16 w-16`, etc.

## Alignment & layout (no magic numbers needed)

| Intent | Utility |
| --- | --- |
| Push items apart | `justify-between` |
| Center on main axis | `justify-center` |
| Pack to start / end | `justify-start` / `justify-end` |
| Cross-axis center | `items-center` |
| Even gaps | `gap-2` / `gap-4` (scale) instead of per-item margins |
| Wrap | `flex-wrap` |

When a row uses ad-hoc per-item margins to space children (`ml-[9px]` on each), prefer a single `gap-*` on the parent flex container.

## Radius

This project defines a multiplicative radius scale from `--radius: 0.625rem`. Use the named utilities, not pixel radii.

| Utility | Value |
| --- | --- |
| `rounded-sm` | `--radius * 0.6` |
| `rounded-md` | `--radius * 0.8` |
| `rounded-lg` | `--radius` (baseline) |
| `rounded-xl` | `--radius * 1.4` |
| `rounded-2xl` | `--radius * 1.8` |

## Design tokens (this repo)

Source of truth: `src/app/globals.css`. Prefer these token-backed utilities over raw palette classes or hex values.

| Token utility | Meaning |
| --- | --- |
| `bg-background` / `text-foreground` | Page surface + default text |
| `bg-card` / `text-card-foreground` | Card surface |
| `bg-primary` / `text-primary-foreground` | Solid brand (blue 600) |
| `bg-primary-soft` | Soft brand tint background |
| `border-primary-border` | Brand-tinted border |
| `text-accent-foreground` | Accent text on soft/brand-soft surfaces |
| `bg-secondary` / `text-secondary-foreground` | Neutral secondary surface |
| `bg-muted` / `text-muted-foreground` | Muted surface + secondary text |
| `border-border`, `ring-ring`, `bg-input` | Structural neutrals |
| `text-success` / `text-warning` / `text-info` / `text-destructive` | Status colors |

### Brand gradient utilities (custom, defined in globals.css)

| Utility | Use |
| --- | --- |
| `bg-brand-gradient` | Left-to-right brand gradient |
| `bg-brand-gradient-y` | Top-to-bottom brand gradient |
| `hover:bg-brand-gradient-hover` | Hover state for the gradient |

## Component variants / props (prefer over ad-hoc classes)

`Button` (`src/components/ui/button.tsx`) already encodes brand styling and sizes — reach for a variant/size before hand-rolling classes.

- Variants: `default`, `brand`, `outline`, `secondary`, `ghost`, `destructive`, `link`
- Sizes: `xs`, `sm`, `default`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

Example: to make a primary CTA use the brand gradient, prefer `<Button variant="brand">` over adding `bg-brand-gradient text-white ...` by hand.
