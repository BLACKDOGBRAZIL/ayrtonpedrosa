# Agent Rules

- Load web fonts with a `<link>` in the root route's `head()` (`src/routes/__root.tsx`), never `@import` inside `src/styles.css` — Tailwind inlines its own output above the remote `@import`, and lightningcss then fails the CSS build.
- Keep the production deploy target expressed through the `nitro` option in `vite.config.ts` (currently the Vercel preset); the old `cloudflare:` flag was removed in `@lovable.dev/vite-tanstack-config` v2 and is silently ignored, so never reintroduce it.
