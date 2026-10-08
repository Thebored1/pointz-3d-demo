# SEO — What's Left ("everything under the sun")

The technical foundation is already strong (see [`SEO_AUDIT_REPORT.md`](./SEO_AUDIT_REPORT.md)):
canonicals, per-page metadata/OG, JSON-LD (`Organization` / `LocalBusiness` / `Service` /
`BreadcrumbList` / `FAQPage`), 301 map, security headers, `next/font`, WebP, clean sitemap &
robots. This file is the backlog **beyond** that — what still moves the needle.

---

## ✅ Shipped in this pass (code, verified on localhost:3000)

| Win | File | Effect |
| :-- | :-- | :-- |
| **Image sitemap** | `src/lib/site.js`, `src/app/sitemap.js` | Each route now emits `<image:image>` for its hero/OG photo → Google Images discovery & attribution. 22 images in `/sitemap.xml`. |
| **Web App Manifest** | `src/app/manifest.js` | `/manifest.webmanifest` (name, icons 512/180, brand colors, categories). Next auto-links it. PWA/mobile signal. |
| **`viewport` + `theme-color`** | `src/app/layout.js` | `theme-color: #0a0a0a` + `color-scheme: dark` → mobile browser chrome matches the site; no CLS. |
| **Search-engine verification scaffold** | `src/app/layout.js` | Env-gated `verification` (Google/Bing/Yandex). Set the env vars below to emit tags — nothing committed. |
| **Referrer-Policy hardening** | `next.config.mjs` | `origin-when-cross-origin` → `strict-origin-when-cross-origin` (current best practice). |

**To activate verification**, set in the hosting env (then redeploy):
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_BING_SITE_VERIFICATION=...
NEXT_PUBLIC_YANDEX_VERIFICATION=...        # optional
```

---

## 🔥 High impact — needs content/business input (not pure code)

### 1. Dedicated city landing pages ✅ SHIPPED (10 cities)
Built as `src/app/service-areas/[city]/page.js` (dynamic, `dynamicParams = false` → unknown
slugs 404), driven by per-city data in [`src/lib/cities.js`](./src/lib/cities.js). Live pages:
Mississauga, Toronto, Brampton, Vaughan, Caledon, Bolton, Burlington, Richmond Hill, Markham,
and a province-wide Ontario page. Each has **genuinely distinct** copy (local corridors,
industrial zones, FAQs, service mix), `Service` + `BreadcrumbList` + `FAQPage` JSON-LD with the
right `areaServed`, a self-referential canonical + OG, internal links to the relevant service
pages, a sibling-city related rail, a sitemap entry with its hero image, and a crawlable link
from the `/service-areas` hub.
- **To add more cities:** add one entry to `src/lib/cities.js` (and a hero image in
  `/public/images`). The route, schema, sitemap and hub links pick it up automatically.
- ⚠️ Keep each city's copy unique — templated near-duplicates get filtered as thin content.

### 2. Reviews / ratings (`aggregateRating` + `Review`)
Review stars in search are a top CTR lever. **Only with real, verifiable reviews** (Google
policy — never fabricate). Pull from Google Business Profile and add to `LocalBusiness` schema;
optionally a visible testimonials section feeding the same data.

### 3. Resources / guides hub ✅ SHIPPED (8 guides)
Built at `/resources` (hub) + `/resources/[slug]` (dynamic articles), driven by
[`src/lib/guides.js`](./src/lib/guides.js): Moffett vs forklift delivery, LTL vs FTL, flatbed load
securement in Ontario, what is cross-docking, choosing the right trailer, how Moffett delivery
works, dedicated fleet vs common carrier, expedited/same-day freight. Each has
`Article` + `BreadcrumbList` + `FAQPage` JSON-LD, a self-referential canonical, a branded dynamic
OG card, breadcrumbs, links to the relevant service pages + sibling guides, a sitemap entry with
its image, and a footer link sitewide. `dynamicParams = false` → unknown slugs 404.
- **To add a guide:** add one entry to `src/lib/guides.js` (+ a hero image). Hub, route, schema,
  OG and sitemap pick it up automatically.
- Optional follow-ups: a few contextual service→guide links; author bylines.

### 4. Google Business Profile + citations (off-page)
Follow [`NAP_CITATION_CHECKLIST.md`](./NAP_CITATION_CHECKLIST.md). Confirm the **(647) 680-1300**
primary now matches GBP and every directory; scrub lingering **(905) 291-0325** primaries.
Submit `/sitemap.xml` to Google Search Console + Bing Webmaster Tools.

---

## 🛠️ Medium impact — code group ✅ SHIPPED

- ✅ **Branded dynamic OG images** — `src/app/service-areas/[city]/opengraph-image.js` renders
  a branded card (wordmark + city name + service line + USDOT/MC) per city; the static photo OG
  was removed from city metadata so there's a single on-brand `og:image`. (The 14 service detail
  pages keep their photo OGs — strong truck imagery; convert later if desired.)
- ✅ **Visible breadcrumbs** — a `Breadcrumbs` component rendered once inside `EditorialHero`, so
  every service, service-area and city page shows a trail (Home / Services / …) matching the
  `BreadcrumbList` JSON-LD. No per-page wiring.
- ✅ **Real `lastmod`** — `sitemap.js` derives each route's date from `git log` of its source
  file, falling back to build time on shallow clones / missing git.
- ✅ **Richer `Organization` schema** — `logo` as `ImageObject` (1349×157), `slogan`,
  `description`, `image`, `telephone`, `email`, `foundingLocation`, `knowsLanguage`, `areaServed`.
- ✅ **Custom 404** — `not-found.js` with Navbar/Footer, top services, all service-area cities,
  and quote/contact CTAs (returns a real 404, avoids soft-404 dead ends).
- ✅ **Internal-linking pass** — audited: service pages already link related services +
  `/service-areas`; the new breadcrumbs add Home/Services links sitewide; city pages link to
  services, sibling cities and the hub; the hub links to every city.
- ◻️ **Per-service `speakable` + expanded FAQ** — remaining nice-to-have; ensure each service FAQ
  block stays unique.

---

## ⚡ Core Web Vitals / performance

- Add field-data monitoring (`@vercel/speed-insights` or GSC Core Web Vitals report).
- Audit every `<Image>` `sizes` attr against real rendered widths; `preload` only the LCP hero.
- Verify no layout shift from the floating nav pill / WhatsApp button / mobile CTA bar.
- Consider `next/script` strategy audit for analytics (defer/lazyOnload).

---

## 🔒 Optional hardening (test before shipping)

- **Content-Security-Policy**: strongest header still missing. Non-trivial here (inline JSON-LD
  + analytics) — needs nonces/hashes and staging QA, so it's deliberately not auto-added.
- `Cross-Origin-Opener-Policy: same-origin`, `X-Permitted-Cross-Domain-Policies: none`.

---

## 📋 Operational (no code)

- [ ] Submit sitemap to GSC + Bing; watch indexation + the 301s being honored.
- [ ] Set the three verification env vars and redeploy.
- [ ] GBP: categories, hours, photos, services, posts; keep NAP byte-identical.
- [ ] Monitor Search Console for coverage errors, CWV, and query opportunities monthly.
