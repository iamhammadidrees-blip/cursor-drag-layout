# Example: Resize a card

Target: the "Resize card" section in the playground — the `<Card>` with `data-measure="hero-card"` in `src/app/page.tsx`.

## Scenario

The developer entered Design Mode and dragged the card's right edge to make it wider. Design Mode wrote the new width back into the code as an arbitrary value.

### Step 1 - Before / after measurement

Before (original):

```tsx
<Card
  data-measure="hero-card"
  className="w-full max-w-sm border-primary-border/60"
>
```

After (what Design Mode produced):

```tsx
<Card
  data-measure="hero-card"
  className="w-full max-w-[420px] border-primary-border/60"
>
```

Delta: `max-w-sm` (384px) -> `max-w-[420px]`. The developer wants the card a bit wider — roughly one container step up.

### Step 2 - Confirm intent

"You widened the card from `max-w-sm` (384px) to ~420px. I'll snap it to the next container step, `max-w-md` (448px). Good?"

### Step 3 - Decide strategy

Per [../references/tailwind-token-map.md](../references/tailwind-token-map.md), ~420-450px maps to the semantic container `max-w-md`. Prefer that over the arbitrary `max-w-[420px]` — it stays on the design scale and reads clearly.

### Step 4 - Minimal clean diff

```diff
- className="w-full max-w-[420px] border-primary-border/60"
+ className="w-full max-w-md border-primary-border/60"
```

Only the width utility changes. Nothing else is touched.

### Step 5 - Apply & verify

Apply, wait for hot-reload, then view `http://localhost:3000` and confirm the card is visibly wider and still left-aligned within its section.

### Step 7 - Exit summary

Changed `max-w-[420px]` to `max-w-md` on `hero-card` — snaps the drag onto the Tailwind container scale instead of a magic pixel width, keeping the diff to one utility.
