# AGENTS.md

Website of Vora Mail (voramail.org): three static pages, a Vite 6 + React 18 site with plain CSS and no UI framework. Split out of the vora.sh landing (vorash/vora-landing).

## Commands

- Package manager is **yarn classic** (`yarn.lock`). If `yarn` isn't installed, use `npx yarn@1 …`; don't create a `package-lock.json`.
- `yarn dev` serves on port 3000 and opens a browser. If 3000 is taken: `npx vite --port 5317`.
- `yarn build` writes to `build/` (not `dist/`). `npx vite preview --port 5319` serves it.
- `yarn build` fails while the privacy policy (`src/mail/privacy-policy.md`) has `[OWNER: …]`, `[LEGAL: …]` or `[PLACEHOLDER]` markers, so a draft policy can never be published. `MAIL_PRIVACY_DRAFT=1 yarn build` builds anyway and highlights them, for local review only; `yarn dev` needs the same variable. The policy lives in vorash/vora-mail: refresh the copy with `scripts/sync-mail-privacy.sh [ref]` (default `origin/main` of `../vora-mail`), never edit it here.
- There is no test suite, linter or `tsconfig`. Vite's SWC plugin does **not** type-check. Verify with `yarn build` plus a look in a browser at desktop and ~390px width, in both themes.

## Layout

- `/` is `index.html` → `src/mail/main.tsx` → `MailPage.tsx`. `/privacy` is `privacy/index.html` → `src/mail/privacy.tsx`. `/legal` is `legal/index.html` → `src/legal/main.tsx`. The three are the Rollup inputs in `vite.config.ts`.
- `src/shared/content.ts` holds **every fact and link**: `MAIL_PAGE`, `MAIL_LINKS`, `LEGAL_PAGE`. The contact address is the single constant `CONTACT_ADDRESS`; a later contact@voramail.org is a one-line change there.
- Media sits at the site root in `public/` (`/vora-mail-hero-light.mp4`, `/light-all-inboxes.webp`, …).
- `vercel.json` has `cleanUrls` so `/privacy` and `/legal` resolve on Vercel. `tools/dir-index.ts` does the same for the Vite dev and preview servers.
- Google's OAuth verification points at `/`, `/privacy` and `/legal` on voramail.org: never move them. The canonical and og URLs in the HTML entries carry the domain.

## Content rules

- Every claim must trace to vorash/vora-mail (`../vora-mail`: README, `docs/`). Vora Mail's media comes from `../vora-mail-promotional/videos/hero/`, copied under the same names. Never invent customers, numbers or features.
- Keep the Google OAuth Limited Use sentence verbatim (`MAIL_PAGE.data.limitedUse`) and the Gmail and AI wording exact; it follows vora-mail `docs/security.md` §9.
- The legal notice is legal text. Change it only with the owner's say-so. It states the site sets no cookies, runs no analytics and loads nothing from other sites, and has no form; revisit it if that changes.
- The privacy policy §13 still describes the old site (www.vora.sh); that is fixed in vorash/vora-mail (#421), then re-synced.

## Styling and themes

- All selectors are scoped under `.cr` (`src/landing/cleanroom.css`; `cp-*` nav styles in `src/probe/probe.css`, `cm-*` in `src/mail/mail.css`, `cd-*` in `src/shared/doc.css`).
- Day/night theme is `data-theme` on the `.cr` root. **Never hard-code colours**: use the tokens at the top of `cleanroom.css`, overridden in `.cr[data-theme="night"]`.
  - Translucent colours use channel tokens: `rgb(var(--ink-rgb) / 0.07)`, `rgb(var(--glass) / 0.8)`, `rgb(var(--bg-rgb) / …)`, `rgb(var(--cool) / …)`.
  - Shadows: `rgb(var(--shade) / calc(a * var(--shade-a)))`. White highlights: `rgb(255 255 255 / calc(a * var(--hi-a)))`.
  - Text on accent or colour fills uses `var(--on-accent)`; text on ink fills uses `var(--on-ink)`. Night accent `#7d98ff` is too light for white text.
- The theme storage key `vora-cr-theme` is in `src/shared/theme.ts` and in the inline no-flash script of every HTML entry (`index.html`, `privacy/`, `legal/`); change them together.
- Fonts (Switzer, Fragment Mono) are self-hosted in `src/landing/fonts/` via `fonts.css`. Don't add font CDNs; the pages make no third-party requests.
- Keep `prefers-reduced-motion` support when adding animation (`useReducedMotion` in `src/shared/hooks.ts`, plus CSS).

## Branding

- The Mail icon (`public/vora-mail-icon.svg`, with `-32.png` and `-apple-touch-icon.png`) is a copy of vora-mail's `assets/icons/scalable/apps/dev.vora.Mail.svg`. Re-copy it if the icon changes. It carries its own dark tile, so it is the same in both themes. `MarkMail` in `src/shared/logos.tsx` renders it.

## Git

- Work on a branch and open a PR against `main`. Commits are signed and follow `type(scope): summary`, e.g. `feat(site): …`, `fix(legal): …`, `chore(deps): …`, with the body explaining why.
