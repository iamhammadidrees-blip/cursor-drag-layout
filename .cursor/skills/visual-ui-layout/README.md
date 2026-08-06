# visual-ui-layout

An open-source [Cursor Agent Skill](https://cursor.com/docs/skills) that turns rough Design Mode / Visual Editor edits into clean, minimal Tailwind + design-token changes for Next.js apps.

Instead of the slow "tweak -> hope -> check -> tweak again" loop, this skill enforces a disciplined, measurement-driven, smallest-diff workflow that always prefers Tailwind utilities and existing design tokens over arbitrary pixel values and inline styles.

This package is **skill-only**. It does not ship an app or playground. Drop it into any Next.js + Tailwind project and use it there.

## What it does

1. Activates when you clean up a visual edit (drag / resize / move) from Design Mode, or when you select/annotate UI and state an intent.
2. Reads the "before" classes and the "after" delta (Design Mode arbitrary values / inline styles, or your described change).
3. Confirms your intent in one short line (one clarifying question max).
4. Picks the cleanest strategy: Tailwind utility > existing token > existing component variant/prop > minimal custom value as a last resort.
5. Shows a minimal, readable diff before applying.
6. Applies, waits for hot-reload, and verifies against your running app.
7. Runs a short refine loop (max 2–3 cycles) only if the visual result is off, then exits with a one-line summary of what changed and why.

See [SKILL.md](SKILL.md) for the full workflow and rules, and [references/tailwind-token-map.md](references/tailwind-token-map.md) for the px → Tailwind scale and token conversions it uses.

## Install

Skills are folders containing a `SKILL.md`. Cursor auto-loads them from `.cursor/skills/` in your repo (project-level) or `~/.cursor/skills/` (personal).

```bash
# Project-level (shared with your team via git)
mkdir -p /path/to/your-project/.cursor/skills
cp -r visual-ui-layout /path/to/your-project/.cursor/skills/

# or personal (available in all your projects)
cp -r visual-ui-layout ~/.cursor/skills/
```

The folder name (`visual-ui-layout`) must match the `name` in the frontmatter.

## Invoke

- Explicitly: type `/visual-ui-layout` in the Cursor agent chat.
- Naturally: describe the task and the agent will route to it — e.g. "apply this layout cleanly", "make the code match the visual change", "turn these arbitrary values into Tailwind", "clean up this Design Mode edit".

## How "measurement" works

The agent can't read live pixel geometry on its own.

- **Path A:** Design Mode writes rough edits into the code as arbitrary values (`max-w-[420px]`, `ml-[23px]`) or inline styles. That encoded value is the measurement; the skill rewrites it to the nearest Tailwind scale value or matching token.
- **Path B:** You select/annotate an element and state the intent in chat (e.g. "one step wider"). The current classes are the before state; the skill applies the smallest clean on-scale change.

Then verify against your own running app (whatever URL/`npm run dev` you already use).

## Worked examples

These are documentation scenarios you can mirror in your own UI — not a bundled demo app:

- [examples/resize-card.md](examples/resize-card.md) — widen a card: `max-w-[420px]` → `max-w-md`
- [examples/alignment-strip.md](examples/alignment-strip.md) — fix row spacing/alignment: `gap-[7px]` / `ml-[9px]` → `gap-2` / `ml-2`
- [examples/spacing-stack.md](examples/spacing-stack.md) — clean a nudge + recolor: `mt-[15px]` → `mt-4`, prefer tokens like `bg-primary-soft` over raw hex

## License

[MIT](LICENSE)
