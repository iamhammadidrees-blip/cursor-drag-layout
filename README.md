# cursor-drag-layout

Open-source [Cursor Agent Skill](https://cursor.com/docs/skills): **visual-ui-layout**.

Turns rough Design Mode / visual layout edits into clean, minimal Tailwind + design-token changes for Next.js apps.

## Install (drop into a project)

This repo publishes the skill only (no app). Clone it, then copy the skill folder into **your** Next.js + Tailwind project:

````bash
git clone https://github.com/iamhammadidrees-blip/cursor-drag-layout.git

# project-level (shared with your team)
mkdir -p your-app/.cursor/skills
cp -r cursor-drag-layout/.cursor/skills/visual-ui-layout your-app/.cursor/skills/
````

**Windows (PowerShell):**

````powershell
git clone https://github.com/iamhammadidrees-blip/cursor-drag-layout.git
New-Item -ItemType Directory -Force -Path your-app\.cursor\skills
Copy-Item -Recurse cursor-drag-layout\.cursor\skills\visual-ui-layout your-app\.cursor\skills\
````

**Personal (all projects):** copy to `~/.cursor/skills/visual-ui-layout/`  
(Windows: `C:\Users\<you>\.cursor\skills\visual-ui-layout\`).

- Skill folder: [`.cursor/skills/visual-ui-layout/`](.cursor/skills/visual-ui-layout/)
- Full guide: [`.cursor/skills/visual-ui-layout/README.md`](.cursor/skills/visual-ui-layout/README.md)

The folder name must stay `visual-ui-layout` (matches `name` in `SKILL.md`).

## Use

In Cursor Agent chat:

```text
/visual-ui-layout
```

Or say things like:

- “apply this layout cleanly”
- “clean up this Design Mode edit”
- “turn these arbitrary values into Tailwind”

**Path A:** Design Mode wrote messy classes (`max-w-[420px]`) → skill snaps to the Tailwind scale (`max-w-md`).  
**Path B:** Select / annotate an element and state the intent → skill applies the smallest clean class change.

## License

MIT — see [LICENSE](LICENSE) and [skill LICENSE](.cursor/skills/visual-ui-layout/LICENSE).
