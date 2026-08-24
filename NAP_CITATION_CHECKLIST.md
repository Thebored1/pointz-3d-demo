# NAP & Citation Checklist — Point Zero Road Lines

> **NAP = Name, Address, Phone.** For local SEO, these three must appear **byte-for-byte
> identical** everywhere your business is listed online. Inconsistency (old phone, "Rd"
> vs "Road", missing suite) splits your ranking signals and erodes trust with Google.
>
> This is off-page/operational work — done in each platform's dashboard, not in the code.
> The website itself already uses the canonical values below (site.js + JSON-LD).

---

## 1. Canonical NAP — copy/paste this EXACTLY, everywhere

**Name:** `Point Zero Road Lines`

**Address:**
```
1566 Bonhill Road
Mississauga, ON  L5T 1C7
Canada
```

**Primary phone:** `(647) 680-1300`  ·  tel: `+1 647 680 1300`

**Website:** `https://pointzeroroadlines.com`
**Email:** `info@pzrls.com`

**Supporting (use where a field exists — keep identical too):**
- Secondary phone: `(905) 291-0325`  ← see §2, the decision you must make
- CVOR: `158-303-152`
- USDOT: `3983391`
- MC: `1492151`
- Operating since: `2006`
- Category: Trucking company / Freight forwarding service / Logistics service

**Social profiles (link these as-is; use as `sameAs`):**
- Instagram: https://www.instagram.com/pointzeroroadlines/
- Facebook: https://www.facebook.com/pointzeroroadline/
- YouTube: https://www.youtube.com/@PointZeroRoadlines
- LinkedIn: https://www.linkedin.com/company/the-point-zero-road-lines/

### Formatting rules (the usual NAP mistakes)
- Always **"Road"**, never "Rd." — pick one form and never vary it.
- Postal code with the space: **`L5T 1C7`**.
- Phone format consistent: **`(647) 680-1300`** (some directories force digits only — that's fine, just be consistent).
- Exact legal name only — no "Inc.", no taglines appended.

---

## 2. ⚠️ FIRST: decide the phone situation (you just changed it)

The site's **primary number changed to (647) 680-1300**, with (905) 291-0325 kept as a
secondary. For NAP you should pick **ONE primary phone** and use it as *the* NAP phone on
every citation. Two numbers across listings is the #1 way NAP consistency breaks.

- [ ] **Decide:** is (905) 291-0325 **retired** or **kept as a secondary line**?
- [ ] If retired → update it to (647) 680-1300 **everywhere** (old listings still show 905).
- [ ] If kept → use **(647) as the single NAP phone** on all citations; only add (905) in a
      separate "secondary/additional phone" field where one exists.
- [ ] Audit where (905) still appears: search Google for `"905 291 0325"` and
      `"Point Zero Road Lines"` and fix each result.

---

## 3. Priority 1 — the platforms that matter most (do these first)

- [ ] **Google Business Profile** — the big one. Claim/verify, set NAP exactly, primary
      category "Trucking company", add service areas (GTA cities), services, hours, photos,
      website. *(Biggest local-ranking lever.)*
- [ ] **Bing Places for Business**
- [ ] **Apple Business Connect** (Apple Maps)
- [ ] **Facebook Page** — About → address/phone/website match exactly
- [ ] **LinkedIn Company Page** — location + website
- [ ] **Instagram** — bio link + contact button

## 4. Priority 2 — the data aggregators (they feed hundreds of others)

Getting these right propagates correct NAP downstream automatically.

- [ ] **Data Axle** (formerly Infogroup)
- [ ] **Localeze / Neustar**
- [ ] **Foursquare** (feeds Apple, Bing, Uber, etc.)
- [ ] Consider a paid sync tool to push once and monitor: **Yext**, **BrightLocal**,
      **Moz Local**, or **Semrush Listing Management**. (Optional but saves manual work.)

## 5. Priority 3 — Canadian & general directories

- [ ] **Yellow Pages Canada** (yellowpages.ca)
- [ ] **411.ca**
- [ ] **Canada411 / Canpages**
- [ ] **Yelp Canada**
- [ ] **Cylex Canada**
- [ ] **N49.com**
- [ ] **Ontario / Mississauga business directory** (local chamber, city listings)
- [ ] **Mississauga Board of Trade** (membership + listing, if a member)

## 6. Priority 4 — trucking / freight industry directories

- [ ] **FMCSA SAFER** — confirm USDOT 3983391 / MC 1492151 address & phone match
      (safer.fmcsa.dot.gov). Carriers/brokers check this; keep it current.
- [ ] **Ontario Trucking Association / CTA** listing (if a member)
- [ ] **DAT / Truckstop** carrier profiles (if used for loads)
- [ ] **BlueBook / carrier-vetting profiles** (Carrier411, MyCarrierPackets, etc.)
- [ ] Industry directories your customers actually search (construction supplier lists,
      healthcare-vendor lists, etc.)

---

## 7. Per-listing checklist (repeat for every platform above)

For each citation, confirm:
- [ ] Name exact: `Point Zero Road Lines`
- [ ] Address exact: `1566 Bonhill Road, Mississauga, ON L5T 1C7`
- [ ] Phone exact: `(647) 680-1300` (single NAP phone)
- [ ] Website: `https://pointzeroroadlines.com`
- [ ] Correct primary category
- [ ] Hours (note 24/7 dispatch where a field allows)
- [ ] Real photos uploaded
- [ ] Listing claimed/verified (not just an unmanaged auto-generated stub)
- [ ] No duplicate listing for the same business (merge/remove duplicates)

---

## 8. Verify & maintain

- [ ] Google search `"Point Zero Road Lines"` and scan the first 3–4 pages for any listing
      with the **old (905)** number or a wrong address — fix each.
- [ ] Search `"1566 Bonhill"` to find address citations.
- [ ] Run a free audit (BrightLocal / Moz Local / Semrush) to score NAP consistency and
      surface duplicates.
- [ ] Re-audit whenever anything changes (phone, hours, a new location).
- [ ] Keep a simple tracking sheet: Platform · URL · Claimed? · NAP correct? · Date checked.

---

## What's already done in the website (no action needed)
- `LocalBusiness` / `Organization` JSON-LD with the canonical NAP, geo, USDOT/MC,
  hours and `sameAs` social links (`src/app/layout.js`).
- Central NAP source of truth in `src/lib/site.js`.
- (647) 680-1300 is the primary phone across the site; (905) is the footer secondary.

## Code-adjacent help I can add if useful
- A **testimonials/reviews section** component for the site.
- **Case-study pages** (block-library) once you have real delivery stories + photos.
- Confirm the schema `sameAs`/contactPoint stays in sync if the phone decision changes.
