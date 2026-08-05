# Example: Fix a row's spacing & alignment

Target: the "Alignment strip" section in the playground — the row with `data-measure="align-row"` and its three items (`align-item-1/2/3`) in `src/app/page.tsx`.

## Scenario

The developer dragged the three tiles around to add breathing room and nudged the last one. Design Mode expressed this as per-item arbitrary margins plus an arbitrary gap.

### Step 1 - Before / after measurement

Before (original):

```tsx
<div
  data-measure="align-row"
  className="flex justify-start gap-2 rounded-lg border border-dashed border-primary-border p-3"
>
  <div data-measure="align-item-1" className="... rounded-md bg-secondary ...">A</div>
  <div data-measure="align-item-2" className="... rounded-md bg-primary ...">B</div>
  <div data-measure="align-item-3" className="ml-2 ... rounded-md bg-secondary ...">C</div>
</div>
```

After (what Design Mode produced):

```tsx
<div
  data-measure="align-row"
  className="flex justify-start gap-[7px] rounded-lg border border-dashed border-primary-border p-3"
>
  <div data-measure="align-item-1" className="... rounded-md bg-secondary ...">A</div>
  <div data-measure="align-item-2" className="... rounded-md bg-primary ...">B</div>
  <div data-measure="align-item-3" className="ml-[9px] ... rounded-md bg-secondary ...">C</div>
</div>
```

Delta: `gap-2` -> `gap-[7px]` on the row, and `ml-2` -> `ml-[9px]` on item C.

### Step 2 - Confirm intent

"You set the row gap to ~7px and item C's left margin to ~9px. Both are one step off the scale — I'll snap the gap back to `gap-2` (8px) and keep C's extra offset as `ml-2` (8px). Or did you specifically want item C pushed further right?"

### Step 3 - Decide strategy

Per [../references/tailwind-token-map.md](../references/tailwind-token-map.md): 7px and 9px both round to the `2` step (8px). Keep spacing on the scale. The even inter-item spacing belongs on the parent as a single `gap-*`; C's deliberate extra offset stays as one `ml-*`.

### Step 4 - Minimal clean diff

```diff
- className="flex justify-start gap-[7px] rounded-lg border border-dashed border-primary-border p-3"
+ className="flex justify-start gap-2 rounded-lg border border-dashed border-primary-border p-3"
```

```diff
- <div data-measure="align-item-3" className="ml-[9px] ...">C</div>
+ <div data-measure="align-item-3" className="ml-2 ...">C</div>
```

### Step 5 - Apply & verify

Apply, wait for hot-reload, view `http://localhost:3000`, and confirm the three tiles are evenly spaced with C carrying a slightly larger gap — matching the intent without any arbitrary pixels.

### Alternate intent: spread the row

If the developer actually wanted the tiles pushed to the row's edges rather than nudged, the clean answer is an alignment utility, not margins:

```diff
- className="flex justify-start gap-[7px] ..."
+ className="flex justify-between ..."
```

### Step 7 - Exit summary

Snapped `gap-[7px]` -> `gap-2` and `ml-[9px]` -> `ml-2`, keeping row spacing on the Tailwind scale. (Or switched to `justify-between` if the goal was to spread the row.)
