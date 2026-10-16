// ── Vora Mail (/) ───────────────────────────────────────────────────
// The Linux mail client in vorash/vora-mail.
// Every entry below cites the file in that repo it comes from. "Owner decision"
// means vorash/landing-page#4 (2026-10-15). Google's OAuth review reads this
// page, so keep the Gmail and AI wording exact; it follows docs/security.md §9.
// The one place the contact address lives: a later contact@voramail.org changes this line.
export const CONTACT_ADDRESS = "contact@vora.sh";

export const MAIL_LINKS = {
  // Vora Mail's home. The canonical URLs in index.html and privacy/index.html carry the domain.
  home: "/",
  privacy: "/privacy",
  legal: "/legal",
  // Private during the closed beta (vora-mail README.md "Status"); the owner accepts a 404 (#4).
  source: "https://github.com/vorash/vora-mail",
  contact: `mailto:${CONTACT_ADDRESS}`,
  contactAddress: CONTACT_ADDRESS,
  // Google requires this exact policy name and link next to the Limited Use sentence.
  googlePolicy: "https://developers.google.com/terms/api-services-user-data-policy",
};

export const MAIL_PAGE = {
  // README.md "Status" (closed beta, 0.2.0-beta.1); Linux and open source: README.md first lines and "License".
  status: ["Beta", "Linux", "Open source"],
  headline: ["Your mail,", "on your computer."],
  // README.md first two paragraphs, docs/security.md §5.1.
  intro: "A fast, keyboard-first mail client for Linux. No server in between, encrypted on disk.",
  // README.md "What it does today" and "Privacy and security".
  traits: ["Native GTK4", "Gmail and IMAP", "No telemetry", "MIT or Apache-2.0"],
  // The hero loop: vora-mail-promotional/video-scripts/storyboard.md, take A (20.5 s,
  // with All Inboxes). Rewrite this when the video changes.
  video: {
    alt: "A 20-second loop of Vora Mail with three accounts in All Inboxes, driven only from the keyboard: j moves to the next conversation, s stars it, e archives one and opens a conversation from another account, the keys 1 to 4 switch between the Smart Inbox tabs, Ctrl+2 shows one account's inbox and Ctrl+0 returns to All Inboxes, Ctrl+K opens the command palette and z undoes the archive.",
  },
  // Stills from the same take (vora-mail-promotional/videos/hero/stills/).
  stills: {
    allInboxes: "Vora Mail's All Inboxes: conversations from three accounts in one list, each row marked with its account's colour, and the accounts as tiles in the side rail.",
  },
  guarantees: [
    // README.md "Privacy and security": "No Vora server", "no telemetry".
    { glyph: "server", title: "No Vora server", text: "Mail goes between your provider and your computer, and nowhere else. No telemetry." },
    // README.md "Privacy and security"; docs/security.md §5.1, §5.4, §5.6.
    { glyph: "lock", title: "Encrypted on your disk", text: "The database and downloaded attachments are encrypted. The key stays in your system keyring." },
    // README.md "Desktop"; docs/ui-ux.md "Mail navigation shortcuts".
    { glyph: "keys", title: "Keys before clicks", text: "j and k to move, e to archive, / to search. ? shows every shortcut, and Ctrl+K opens the command palette." },
  ],
  features: [
    {
      id: "accounts",
      label: "Accounts",
      title: ["Every account.", "One inbox."],
      // README.md "Accounts"; docs/multi-account.md §1 and "Keyboard".
      text: "Add Gmail through Google sign-in in your browser, or any IMAP/SMTP account: TLS only, with the server settings found for you where possible. Each account has its own label and colour. All Inboxes is one list over all of them, and every conversation shows which account it belongs to.",
      points: ["Gmail through the Gmail API", "IMAP and SMTP, TLS only", "Ctrl+0 for All Inboxes, Ctrl+1…9 for one account"],
    },
    {
      id: "smart-inbox",
      label: "Smart Inbox",
      title: ["Sorted on your computer.", "No AI needed."],
      // README.md "Reading and triage"; docs/smart-inbox.md §1, §3.
      text: "The Inbox splits into People, Updates, Newsletters and Promotions, with pinned conversations first. Rules on your computer do the sorting. Drag a conversation to another tab to correct it, and keep that choice for the sender.",
      tabs: ["Smart Inbox", "People", "Updates", "Newsletters", "Promotions"],
    },
    {
      id: "search",
      label: "Search",
      title: ["Your whole history,", "searched on your computer."],
      // README.md "Reading and triage": local search from / and its operators. CHANGELOG.md
      // 0.2.0-beta.1: the whole history downloaded in the background (#390), and the server
      // asked too while it downloads or when an account keeps less (#391).
      text: "Press / and search the mail stored on your computer, offline too. Vora Mail downloads your whole history in the background. Until it has, or if you keep only the last year or 30 days, a search also asks your mail provider for older mail.",
      operators: ["from:", "to:", "subject:", "label:", "in:", "after:", "before:", "is:unread", "is:starred", "has:attachment"],
    },
    {
      id: "writing",
      label: "Writing",
      title: ["Write it properly.", "Send it reliably."],
      // README.md "Writing"; docs/rich-compose.md.
      text: "A rich-text composer with a format bar, lists, links and quotes, or plain text if you prefer. Paste or drop a picture and it is sent inline. Drafts are saved on your computer and on the server, and sending goes through a local outbox, so a send survives a dropped connection.",
      points: ["Recipient suggestions from your own mail", "Spell checking with your system's dictionaries", "Opens mailto: links"],
    },
    {
      id: "desktop",
      label: "Desktop",
      title: ["At home on Linux.", "At home on Omarchy."],
      // README.md first paragraph and "Desktop"; docs/ui-ux.md.
      text: "A native GTK4 app, not a browser wrapper. A tray icon with an unread dot, desktop notifications for new mail, and an optional background mode that keeps syncing after you close the window. Light and dark themes are built in, and under Omarchy Vora Mail takes the active theme's colours and follows a theme switch live.",
      points: ["Arch and Omarchy first", "Also Ubuntu 24.04, Debian 13 and Fedora"],
    },
  ],
  shortcuts: [
    // docs/ui-ux.md "Mail navigation shortcuts" and "Standard desktop shortcuts".
    { keys: ["j", "k"], label: "next, previous" },
    { keys: ["e"], label: "archive" },
    { keys: ["r"], label: "reply" },
    { keys: ["c"], label: "compose" },
    { keys: ["/"], label: "search" },
    { keys: ["z"], label: "undo" },
    { keys: ["?"], label: "every shortcut" },
    { keys: ["Ctrl", "K"], label: "command palette" },
  ],
  data: {
    intro: "Vora Mail has no server. This is everything it connects to, and when.",
    // docs/privacy-policy.md §5 (vora-mail PR #363) and docs/security.md §9.1–9.3.
    // The list is complete: the policy says Vora connects to "these, and to nothing else".
    rows: [
      { to: "Your mail provider", detail: "Google for a Gmail account, your IMAP and SMTP servers otherwise", when: "Always: to sign in, sync and send. That is the app's job." },
      { to: "Server-settings lookup", detail: "autoconfig.<your domain> and autoconfig.thunderbird.net", when: "When you add an IMAP account, unless you skip it. Only the part of your address after the @ is sent." },
      { to: "Images in a message", detail: "Wherever the sender put them", when: "Only when you allow them. They are blocked by default." },
      { to: "Anthropic", detail: "The writing assistant, with your own API key", when: "Only if you turn it on, and only when you ask it for help." },
      { to: "TypeSafe", detail: "Smart Inbox AI triage, with your own API key", when: "Only if you turn it on, and only for mail that arrives afterwards." },
      { to: "Us", detail: "The people who make Vora Mail", when: "Never. No telemetry, no analytics, no crash reports." },
    ],
    // docs/security.md §9.3 and docs/privacy-policy.md §2, §6. The writing assistant on
    // the user's own text still works for every account; this sentence must not hide that.
    gmail: {
      title: "Gmail signed in with Google never goes to AI.",
      text: "Mail that Vora Mail reads through its own Google sign-in is never sent to an AI service. Smart Inbox sorts it with local rules only, and the writing assistant cannot add a received Gmail message to a request. The assistant, if you turn it on, only sends what you write yourself.",
    },
    // docs/ai-writing.md, docs/smart-inbox.md §7, docs/security.md §9.1–9.2.
    ai: "Both AI features are off in a fresh install. Each one shows what it would send, to whom and under which terms, and asks before it sends anything. Neither moves, archives, deletes or sends mail on its own.",
    // Google's required wording, verbatim. Do not paraphrase.
    limitedUse: ["Vora Mail's use and transfer of information received from Google APIs will adhere to the ", "Google API Services User Data Policy", ", including the Limited Use requirements."],
  },
  faq: [
    {
      q: "Can I download it?",
      // README.md "Status" and "Install"; the v0.2.0-beta.1 release on GitHub.
      a: "Vora Mail is a closed beta, version 0.2.0-beta.1. It comes as an Arch package and as a tarball for other x86_64 distributions, on GitHub. The repository is private for now, so only invited testers can download it.",
    },
    {
      q: "Which Linux distributions does it run on?",
      // README.md first paragraph and "Install".
      a: "Arch and Omarchy are the first-class targets. It also builds and runs on Ubuntu 24.04, Debian 13 and Fedora. It needs GTK 4.10 or newer, WebKitGTK 6.0 and a system keyring.",
    },
    {
      q: "Is the Gmail sign-in safe?",
      // README.md "Accounts", "Privacy and security" and "Install"; docs/oauth.md.
      a: "You sign in with Google in your own browser, so Vora Mail never sees your Google password. The sign-in token is kept in your system keyring, never in a file. Google has not finished verifying the app yet, so until it does, its sign-in screen can show an \"unverified app\" warning.",
    },
    {
      q: "Can I use the AI features with Gmail?",
      // docs/security.md §9.3; docs/oauth.md (own client).
      a: "Not with the built-in Google sign-in. Add your Gmail as an IMAP account with an app password, or sign in with your own Google client, and both AI features work for it.",
    },
    {
      q: "What happens without a keyring?",
      // docs/security.md §4, §5.4; docs/privacy-policy.md §4.
      a: "Vora Mail shows your mail as locked and explains how to fix it. It never falls back to storing mail unencrypted.",
    },
    {
      q: "Is it open source? Does it cost anything?",
      // README.md "License" and "Status" (private repo); owner decision (free, non-commercial).
      a: "It is free and dual-licensed under MIT or Apache-2.0. Nothing is sold: no paid plan, no ads. The source is on GitHub; the repository is private during the beta and opens to the public later.",
    },
  ],
};

// ── Legal notice (/legal), for voramail.org ─────────────────────────
// The publisher is a private individual publishing on a non-professional basis
// (owner decision, #4). LCEN art. 1-1, II (in force since 23 May 2024, read on
// Légifrance 2026-10-15) then lets the notice name only the hosting provider,
// provided the publisher's identity was given to that provider. The owner chose
// host + contact, without the publisher's name.
export const LEGAL_PAGE = {
  updated: "16 October 2026",
  sections: [
    {
      id: "publisher",
      title: "Publisher",
      paragraphs: [
        "voramail.org is published by a private individual, on a non-professional basis. As article 1-1, II of French law no. 2004-575 of 21 June 2004 (LCEN) allows, the publisher's identity has been given to the hosting provider and is not shown here.",
      ],
      contact: true,
    },
    {
      id: "host",
      title: "Hosting provider",
      // vercel.com/legal/dmca-policy (address, phone) and vercel.com/legal/privacy-notice
      // (address), read 2026-10-15. The site answers with `server: Vercel`.
      card: ["Vercel Inc.", "440 N Barranca Ave #4133", "Covina, CA 91723", "United States", "Phone: +1 559 288 7060"],
    },
    {
      id: "data",
      title: "Personal data on this site",
      // AGENTS.md: no third-party requests; theme key in src/shared/theme.ts. There is no form
      // and no backend. Revisit this section if analytics, cookies or a form appear.
      paragraphs: [
        "This site sets no cookies, runs no analytics and loads nothing from other sites. Your choice of day or night theme is kept only in your own browser.",
        "Like any web host, Vercel may keep technical logs of requests to this site; see Vercel's privacy notice.",
      ],
      links: [{ href: "https://vercel.com/legal/privacy-notice", text: "Vercel's privacy notice" }],
    },
    {
      id: "vora-mail",
      title: "Vora Mail",
      paragraphs: ["Vora Mail, the desktop mail client presented on voramail.org, has its own privacy policy."],
      links: [{ href: MAIL_LINKS.privacy, text: "Vora Mail privacy policy" }],
    },
  ],
};
