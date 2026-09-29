# JS Electrical — Static Website

A responsive static site for *JS Electrical* (Co. Down / Belfast). No build step — it's plain HTML/CSS/JS and can be uploaded to any static host as-is.

## Before going live

- **Domain not chosen yet** — several files use `https://www.jselectrical.co.uk/` as a placeholder domain. Once you register a real domain, update it in:
  - [index.html](index.html) — the `<link rel="canonical">`, `og:url` and `og:image` tags near the top of `<head>`.
  - [sitemap.xml](sitemap.xml)
  - [robots.txt](robots.txt)
- **Contact form** — submissions go to Formspree (form ID `xojobdyy`). Currently delivering to `lewismagowan@gmail.com`; switch the destination to `enquiries.jselectrical@gmail.com` in the Formspree dashboard (Settings → Send emails to) once that inbox can be verified.

## Files

- `index.html` — main page (services, gallery, reviews, contact form)
- `privacy.html` — privacy policy covering the contact form and Google Fonts (see note below)
- `404.html` — branded not-found page
- `styles.css` — site styles (dark background, black & yellow brand accent)
- `script.js` — mobile nav, review search/filter, gallery + lightbox, contact form submission
- `assets/newlogo.PNG` — logo, used in the header and social share preview
- `assets/apple-touch-icon.png` — icon shown when the site is added to a phone's home screen
- `images/work-*.jpg` — gallery photos, compressed for web (originals backed up outside this folder)
- `robots.txt` / `sitemap.xml` — basic SEO files, update the domain before launch (see above)
- `_headers` — security headers for Netlify (ignored by other hosts)
- `vercel.json` — same security headers, for Vercel (ignored by other hosts)

## Deploy

No build tooling required — any of these work:
- **Netlify / Vercel** — drag-and-drop the project folder, or connect a Git repo for automatic deploys. Netlify also detects the contact form automatically if you switch to Netlify Forms instead of Formspree. Both automatically serve `404.html` for unmatched routes.
- **GitHub Pages** — push this folder to a repo and enable Pages in the repo settings. `404.html` is served automatically.
- **Traditional hosting** — upload the contents of this folder via FTP/SFTP to your host's public folder (e.g. `public_html`). Some hosts need `404.html` wired up manually (e.g. an `ErrorDocument 404 /404.html` line in `.htaccess` on Apache) — check with your host if the custom 404 page doesn't show up automatically.

Once a domain is connected, update the placeholder URLs listed above and re-check the Formspree destination email.

## Adding a new review

Reviews are kept as plain data in `script.js` rather than pulled live from Google — this keeps the site free and independent of Google's API (which, in any case, only ever returns up to 5 reviews via its API, fewer than are already listed here). To add one, copy a review from Google Business Profile into the `reviews` array near the top of `script.js` — there's a ready-to-copy template and instructions directly above that array in the file. A few things are handled automatically so you don't have to think about them:

- **Order** — reviews are always displayed newest-first, so it doesn't matter where in the array you paste a new one.
- **"Recent" tag** — computed automatically from the date (anything within the last 45 days), no need to set it by hand.
- **Displayed time** ("3 months ago" etc.) — computed from the date every time the page loads, so it never goes stale the way a hardcoded string would.

You only need to fill in: name, date, star rating, content tags (`lighting`/`tidy`, if relevant), the review text, and the owner reply.

## Privacy policy note

`privacy.html` is a plain-language description of what the site actually does (contact form → Formspree → email), not a solicitor-drafted legal document. It's worth a quick review by a professional before relying on it, especially if you later add analytics, cookies, or other tracking.

## Security

This is a static site with no backend of its own, so the attack surface is small, but the following is in place:

- **Content-Security-Policy** — set via a `<meta>` tag on every page, restricting scripts/styles/connections to this site, Google Fonts, and Formspree only. All inline scripts were removed so the policy can stay strict (no `unsafe-inline`).
- **`_headers` / `vercel.json`** — if you deploy to Netlify or Vercel, these add `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and `Strict-Transport-Security` as real HTTP headers (stronger than what a `<meta>` tag can do — in particular, clickjacking protection via `X-Frame-Options`/`frame-ancestors` only works as a header, not a meta tag). **GitHub Pages and most plain FTP hosts don't support custom headers**, so if you end up there, only the meta CSP applies — worth knowing if you want the extra protection those headers give.
- All external links (WhatsApp, Facebook, Google, Formspree) use `rel="noopener noreferrer"` to prevent the linked page from controlling this tab.
- All review/gallery content rendered via `innerHTML` in `script.js` comes from hardcoded data in that file, not from user input — no injection risk there. The contact form and review search box never get written back into the page as HTML.
- No API keys, secrets, or credentials are present anywhere in the codebase (the Formspree form ID isn't a secret — it's meant to be public).

Once the real domain is live, double check the host actually enforces HTTPS (all major static hosts do this by default).
