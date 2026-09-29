# Copilot instructions for JS Electrical

- This is a static single-page site. The whole app is served from `index.html` with styling in `styles.css` and behavior in `script.js`.
- No npm / build toolchain is present. Edit files directly and preview by opening `index.html` in the browser or using Live Server.
- `index.html` is the source of truth for page content, SEO metadata, contact links, Formspree integration, Google review URL, and map embed.
- `styles.css` uses modern CSS nesting and custom properties. Keep changes within the existing component blocks (e.g. `.site-header`, `.hero`, `.slider`, `.contact-info`).
- `script.js` controls:
  - mobile menu toggle via `#menu-toggle` and `#site-nav`
  - disabling the contact form submit button on submit
  - opening the Google review page from `#review-button`
  - the recent work slider using `#sliderTrack`, `#nextBtn`, `#prevBtn`, and `#sliderCounter`
- Contact details are hard-coded in multiple places: `07879415698`, `enquiries.jselectrical@gmail.com`, WhatsApp links, Facebook links, and the Formspree action URL.
- Update the Formspree action in `index.html` to the user's actual form ID. Keep `id="contact-form"` intact because `script.js` depends on it.
- The README mentions `assets/logo.svg` but the current HTML uses `assets/logo.PNG`; preserve the actual asset path or update both file and references consistently.
- Avoid adding unrelated frameworks or build steps unless the user explicitly asks for a migration. This repository is meant to remain a simple HTML/CSS/JS static site.
- Preserve accessibility cues: `aria-label`, `aria-expanded`, `type="button"` for non-form buttons, and `rel="noopener"` for external links.
- If adding new sections or pages, keep the existing single-page navigation pattern or update navigation anchors consistently.

Ask the user if any part of the contact/form/customization flow should be clarified or if they want a version with a build step and page routing.