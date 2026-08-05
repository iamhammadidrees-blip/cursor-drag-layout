<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- This is a single, frontend-only Next.js 16 app (`cursor-drag-layout`); a static "Visual UI Layout Playground" page. There is no backend, database, or required environment variable/secret — it runs with zero config.
- Package manager is npm (only `package-lock.json` is present). Standard scripts live in `package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- The dev server (`npm run dev`) serves on http://localhost:3000 and supports Hot Module Reloading, so edits to files under `src/` update the browser live without a restart.
- `next dev`/`next build` regenerate the `nextjs-agent-rules` block at the top of this file (see `node_modules/next/dist/server/lib/generate-agent-files.js`). This can leave an uncommitted change to AGENTS.md; commit it alongside your work to keep the tree clean rather than trying to delete it.
