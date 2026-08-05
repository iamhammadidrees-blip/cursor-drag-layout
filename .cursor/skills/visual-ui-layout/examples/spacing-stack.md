# Example: Clean up a spacing nudge

Target: the "Spacing stack" section in the playground — the stack with `data-measure="spacing-stack"` and its blocks (`spacing-block-1/2/3`) in `src/app/page.tsx`.

## Scenario

The developer dragged the second block down for extra separation and recolored the third block to highlight it. Design Mode produced an arbitrary top margin and an inline background color.

### Step 1 - Before / after measurement

Before (original):

```tsx
<div data-measure="spacing-block-2" className="mt-4 rounded-md bg-muted px-3 py-2 text-sm">
  Block two (extra mt-4)
</div>
<div data-measure="spacing-block-3" className="rounded-md bg-primary-soft px-3 py-2 text-sm text-accent-foreground">
  Block three
</div>
```

After (what Design Mode produced):

```tsx
<div data-measure="spacing-block-2" className="mt-[15px] rounded-md bg-muted px-3 py-2 text-sm">
  Block two (extra mt-4)
</div>
<div
  data-measure="spacing-block-3"
  style={{ backgroundColor: "#eff6ff" }}
  className="rounded-md px-3 py-2 text-sm text-accent-foreground"
>
  Block three
</div>
```

Delta: `mt-4` -> `mt-[15px]` on block 2, and block 3 lost `bg-primary-soft` in favor of an inline `#eff6ff` background.

### Step 2 - Confirm intent

"You nudged block two's top margin to ~15px and set block three's background to `#eff6ff`. That's the same blue as our `primary-soft` token — I'll restore `bg-primary-soft` and snap the margin to `mt-4` (16px). Good?"

### Step 3 - Decide strategy

Per [../references/tailwind-token-map.md](../references/tailwind-token-map.md): 15px rounds to the `4` step (16px), so `mt-4`. And `#eff6ff` is exactly the `--primary-soft` token, so the clean answer is the `bg-primary-soft` utility — never an inline hex when a token matches.

### Step 4 - Minimal clean diff

```diff
- <div data-measure="spacing-block-2" className="mt-[15px] rounded-md bg-muted px-3 py-2 text-sm">
+ <div data-measure="spacing-block-2" className="mt-4 rounded-md bg-muted px-3 py-2 text-sm">
```

```diff
- <div
-   data-measure="spacing-block-3"
-   style={{ backgroundColor: "#eff6ff" }}
-   className="rounded-md px-3 py-2 text-sm text-accent-foreground"
- >
+ <div
+   data-measure="spacing-block-3"
+   className="rounded-md bg-primary-soft px-3 py-2 text-sm text-accent-foreground"
+ >
```

### Step 5 - Apply & verify

Apply, wait for hot-reload, view `http://localhost:3000`, and confirm block two's spacing is unchanged visually (15px ~ 16px) and block three keeps its soft-blue highlight — now token-driven and inline-style-free.

### Step 7 - Exit summary

Snapped `mt-[15px]` -> `mt-4` and replaced the inline `#eff6ff` background with the matching `bg-primary-soft` token, removing the inline style entirely.
