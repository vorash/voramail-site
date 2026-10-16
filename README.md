# voramail.org

The website of [Vora Mail](https://github.com/vorash/vora-mail), the keyboard-first, local-first mail client for Linux.

| URL | What |
| --- | --- |
| `/` | the Vora Mail page |
| `/privacy` | the privacy policy, a synced copy of vora-mail's `docs/privacy-policy.md` |
| `/legal` | the legal notice (mentions légales) |

Vite + React, plain CSS, no UI framework. Day and night themes; the visitor's choice is stored in `localStorage` (`vora-cr-theme`) and defaults to the OS setting. Press `n` to toggle. The page loads nothing from other sites.

## Run

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # static site in build/
```

`yarn build` refuses to publish the privacy policy while it still has review markers (`[OWNER: …]`, `[LEGAL: …]`, `[PLACEHOLDER]`); `MAIL_PRIVACY_DRAFT=1 yarn build` shows them highlighted instead. `scripts/sync-mail-privacy.sh [ref]` copies the policy from `../vora-mail` (default ref `origin/main`).

## Layout

| Path | What |
| --- | --- |
| `index.html`, `src/mail/` | the Vora Mail page (`MailPage.tsx`, `mail.css`) |
| `privacy/index.html`, `src/mail/privacy.tsx` | the policy page; `tools/privacy-policy.ts` renders `src/mail/privacy-policy.md` at build time |
| `legal/index.html`, `src/legal/` | the legal notice; `src/shared/DocPage.tsx` is the layout it shares with the policy |
| `src/shared/content.ts` | every fact on the pages, the links and the contact address |
| `src/landing/`, `src/probe/` | Clean Room styles, self-hosted fonts and the shared nav styles, carried over from the vora.sh landing |
| `public/` | the Mail icon, hero videos, posters, stills, `llms.txt` |
| `vercel.json` | `cleanUrls`, so `/privacy` and `/legal` serve `privacy/index.html` and `legal/index.html` |
