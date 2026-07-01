
## 1. Favicons

Copy the three uploaded favicon files into `public/` and delete the current `public/favicon.ico`:
- `user-uploads://favicon-16x16.png` → `public/favicon-16x16.png`
- `user-uploads://favicon-32x32.png` → `public/favicon-32x32.png`
- `user-uploads://apple-touch-icon.png` → `public/apple-touch-icon.png`
- Also copy `apple-touch-icon.png` → `public/favicon.ico` (browsers requesting `/favicon.ico` will still resolve; the PNG bytes render fine as an .ico fallback for modern browsers). If we want a true .ico we can generate one — I'll use the PNG copy approach for simplicity unless you prefer a real .ico.

Update `index.html` `<head>` to reference all four:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="shortcut icon" href="/favicon.ico" />
```

## 2. Open Graph social sharing image (1200×630)

Generate a professional OG image using the uploaded logo — centered logo on brand-navy background with the business name "אורה רוזנטלר" and tagline "ייעוץ משכנתאות" in the brand's gold/orange, no website screenshot.

Save via `lovable-assets` so it gets a stable absolute CDN URL, then wire that URL into `index.html` and `src/routes/__root.tsx`:
- `og:image`, `og:image:secure_url` → CDN URL
- `og:image:width` → 1200, `og:image:height` → 630, `og:image:type` → image/png
- `twitter:card` → `summary_large_image` (currently `summary`)
- `twitter:image` → CDN URL

Existing title, description, canonical stay untouched.

## 3. Reviews: consistent card height + expandable long text

In `src/routes/index.tsx` `ReviewsSection`:
- Make grid rows equal-height (`items-stretch`) and cards `flex flex-col h-full`; footer (avatar + name + date) stays pinned at the bottom.
- Introduce a `ReviewCard` sub-component with local `expanded` state.
- Collapsed state: clamp review text with `line-clamp-5`, overlay a subtle fade-to-card gradient at the bottom.
- Show "קרא עוד" button only when text exceeds the clamp (measured via `scrollHeight > clientHeight` after mount / on resize).
- Expanded state: remove clamp + fade, button label becomes "הצג פחות", smooth CSS transition on max-height.
- Preserve RTL, mobile responsiveness, existing typography and border styling — no other layout/style changes.

## 4. Out of scope (explicit)

No changes to: contact form, routing, header/footer navigation, calculator, about, styling tokens, or SEO title/description/canonical.

## Technical notes

- `lovable-assets create --file /mnt/user-uploads/apple-touch-icon.png ...` will be used to compose the OG image via `imagegen--generate_image` (premium tier, 1200×630, includes Hebrew text so premium is required for legibility), then uploaded via `lovable-assets` to obtain the absolute `https://` URL required by social crawlers.
- Note to user: social platforms (WhatsApp, Facebook, LinkedIn, Telegram) cache previews aggressively — after deploy, the new preview may take time to appear or need a manual refresh via each platform's debugger (e.g. Facebook Sharing Debugger).
