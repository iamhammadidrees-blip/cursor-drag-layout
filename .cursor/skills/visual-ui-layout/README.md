# visual-ui-layout

An open-source [Cursor Agent Skill](https://cursor.com/docs/skills) that turns rough Design Mode / Visual Editor edits into clean, minimal Tailwind + design-token changes for Next.js apps.

Instead of the slow "tweak -> hope -> check -> tweak again" loop, this skill enforces a disciplined, measurement-driven, smallest-diff workflow that always prefers Tailwind utilities and existing design tokens over arbitrary pixel values and inline styles.

## What it does

1. Activates when you clean up a visual edit (drag / resize / move) from Design Mode.
2. Reads the "before" classes and the Design-Mode "after" (the arbitrary values / inline styles it wrote) as the delta.
3. Confirms your intent in one short line (one clarifying question max).
4. Picks the cleanest strategy: Tailwind utility > existing token > existing component variant/prop > minimal custom value as a last resort.
5. Shows a minimal, readable diff before applying.
6. Applies, waits for hot-reload, and verifies the result against the running dev server.
7. Runs a short refine loop (max 2-3 cycles) only if the visual result is off, then exits with a one-line summary of what changed and why.

See [SKILL.md](SKILL.md) for the full workflow and rules, and [references/tailwind-token-map.md](references/tailwind-token-map.md) for the px -> Tailwind scale and token conversions it uses.

## Install

Skills are folders containing a `SKILL.md`. Cursor auto-loads them from `.cursor/skills/` in your repo (project-level) or `~/.cursor/skills/` (personal). To use this skill in your own project:

```bash
# Project-level (shared with your team via git)
cp -r visual-ui-layout /path/to/your-project/.cursor/skills/

# or personal (available in all your projects)
cp -r visual-ui-layout ~/.cursor/skills/
```

The folder name (`visual-ui-layout`) must match the `name` in the frontmatter.

## Invoke

- Explicitly: type `/visual-ui-layout` in the Cursor agent chat.
- Naturally: describe the task and the agent will route to it — e.g. "apply this layout cleanly", "make the code match the visual change", "turn these arbitrary values into Tailwind", "clean up this Design Mode edit".

## How "measurement" works

The agent can't read live pixel geometry on its own. Cursor's Design Mode writes your rough edit into the code as arbitrary values (`max-w-[420px]`, `ml-[23px]`) or inline styles (`style={{ marginTop: 15 }}`). That encoded value is the measurement. The skill rewrites it to the nearest Tailwind scale value or matching token, then verifies visually against the running dev server.

## Built-in testbed

This skill lives inside a small Next.js 16 + Tailwind v4 + shadcn/ui playground designed to exercise it. Run it and try the examples:

```bash
npm install
npm run dev   # http://localhost:3000
```

The playground page (`src/app/page.tsx`) has three `data-measure` targets — a resize card, an alignment strip, and a spacing stack. The worked examples map directly onto them:

- [examples/resize-card.md](examples/resize-card.md) — widen a card: `max-w-[420px]` -> `max-w-md`
- [examples/alignment-strip.md](examples/alignment-strip.md) — fix row spacing/alignment: `gap-[7px]` / `ml-[9px]` -> `gap-2` / `ml-2`
- [examples/spacing-stack.md](examples/spacing-stack.md) — clean a nudge + recolor: `mt-[15px]` -> `mt-4`, inline `#eff6ff` -> `bg-primary-soft`

## License

[MIT](LICENSE)
