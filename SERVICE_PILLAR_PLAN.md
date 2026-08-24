# Service Cluster Plan (v2)

> **Revised model:** `/services` is the parent service hub. **Major commercial services become
> service pillars**, while **industry, use-case and capability pages form supporting clusters**
> around those pillars. Not nine equal pillars.
>
> The Moffett page is the **benchmark service pillar** — every other page should meet the same
> *quality bar*, but **not** be cloned to the same length or section list. Depth follows
> **search-intent completeness**, not a word/section quota.
>
> **URLs stay as-is** — this is a conceptual hierarchy, no migrations/redirects.

---

## 1. Page roles

| Page | Role |
|------|------|
| `/services` | **Primary Services Hub / Parent Pillar** |
| Flatbed & Moffett | **Core Service Pillar** ✅ (benchmark) |
| Dedicated Fleet | **Core Service Pillar** |
| Warehouse & Cross-Dock | **Core Service Pillar** |
| Expedited & Same-Day | **Core Service Pillar** |
| Construction Material Hauling | **Use-case / vertical sub-pillar** (supports Moffett + Dedicated Fleet) |
| Last Mile Delivery | **Supporting service pillar** — only if its search intent stays distinct from Moffett |
| Manufacturing & Consumer Goods | **Industry cluster page** (not a general service pillar) |
| Healthcare Linen Logistics | **Industry / specialty cluster page** |
| 24/7 Dispatch & Weekend Delivery | **Capability / supporting page** — unless keyword data proves independent demand |

Rationale: Manufacturing and Healthcare Linen are written around *sectors* (manufacturers/CPG, hospitals/laundry), so they're industry verticals, not peers of Moffett or Cross-Dock. 24/7 Dispatch is an operational capability that cuts across services.

---

## 2. Topical clusters (pillar → supporting content)

The goal is real topical clusters, **not nine siblings all linking sideways**. Each pillar gets a small set of supporting pages/sections that link *back up* to it.

**Flatbed & Moffett (pillar)** ← supported by:
- Construction Material Hauling (use-case sub-pillar)
- Equipment / machinery delivery, truck-mounted forklift delivery (currently sections; could become pages if demand justifies)
- Specific GTA markets *only where demand justifies a distinct page*
- Real construction-site Moffett delivery **case studies**

**Dedicated Fleet (pillar)** ← supported by:
- Manufacturing & Consumer Goods (industry)
- Healthcare Linen (industry)
- Retail distribution, recurring scheduled routes

**Warehouse / Cross-Dock (pillar)** ← supported by:
- Cross-docking Mississauga, freight consolidation, load rework, overflow storage

**Expedited / Same-Day (pillar)** ← supported by:
- Hot-shot freight, emergency jobsite delivery, plant-down freight, after-hours/weekend delivery (24/7 page)

Cluster pattern to aim for: **Service pillar → commercial supporting page → location/use-case content → real-world proof (case study).**

---

## 3. The quality standard (intent completeness, not word count)

Every page must fully answer its searchers' questions in the locked brand voice (Premium & Slightly Authoritative), with real photos and hedged/factual claims. It must **not** be padded to hit a length.

Depth guidance (targets, not rules):
- **Comprehensive topics** (Moffett, Construction, Cross-Dock): ~1,400–2,000 words — multiple equipment types, applications, requirements, questions.
- **Focused topics** (24/7 Dispatch): ~700–1,000 highly useful words. Forcing 1,800 would produce filler.
- **Others**: whatever completeness requires.

Baseline every page still needs: a keyword-true H1, clear intro + CTA, the core "what/why/how", coverage of GTA/Ontario where relevant, and strong CTAs. Everything else is **optional/reorderable** (see §5).

**FAQs:** include only when they answer real buying questions. Don't force 8–12. Two great FAQs beat ten filler ones.

---

## 4. Structured-data policy (revised)

| Schema | Policy | Why |
|--------|--------|-----|
| `BreadcrumbList` | **Keep** on every page | Supported breadcrumb treatment; cheap, useful |
| `Service` | **Optional / semantic** | Reasonable for clarity, but **not** a Google rich-result or ranking lever — don't over-invest |
| `FAQPage` | **Optional (downgraded from required)** | Google now restricts FAQ rich results largely to authoritative gov/health sites; unlikely to earn FAQ SERP treatment for a commercial carrier. Harmless when accurate, but not worth much engineering attention |

Keep the Moffett page's existing schema (already built); just don't treat FAQPage/Service as mandatory or a priority on the remaining pages.

---

## 5. Component design — flexible, not a rigid template

Build a reusable **`ServicePillarPage`** driven by a data file, but as a **library of optional, reorderable blocks** — not a fixed `Hero → 4 benefits → industries → process → area → FAQ → CTA` mould. Otherwise all nine pages end up structurally identical with nouns swapped — efficient engineering, mediocre content architecture.

Block library (compose per page as the topic needs):
- Hero · intro+CTA · advantage/why · feature grid · **equipment specs** · **materials/what-we-handle** · **facility details** · **industries** · **use-cases** · process · requirements · **comparison** · coverage/locations · **case studies / proof points** · FAQ · related · final CTA

Each page picks and orders the blocks its search intent calls for.

---

## 6. Internal linking — contextual first

Related-service cards (`getRelated`) are useful but **do not by themselves make a cluster**. The real signal is **editorial contextual links in the body**:

- Aim for **~2–5 meaningful contextual links per page**, not indiscriminate linking to every sibling.
- Make them **reciprocal and topical**, e.g.:
  - Construction Material page: "sites without unloading equipment can use our [Moffett delivery]" → links to the Moffett pillar.
  - Moffett page: when discussing building supplies, link to **Construction Material Delivery**.
  - Industry/capability pages link **up** to their parent pillar (Manufacturing/Healthcare → Dedicated Fleet; 24/7 → Expedited).
- Keep related-service cards as a secondary nav aid, not the primary cluster mechanism.

(The Moffett page already has related cards + `/service-areas`, `/fleet-and-equipment`, `/services` contextual links — a good template.)

---

## 7. Build order (SEO-opportunity weighted)

Prioritise pages where Google already shows signals, per the construction-material and cross-docking query signals noted earlier (⚠️ **confirm in Search Console before committing the order**).

1. **Moffett** — ✅ done
2. **Construction Material Hauling** — existing query signals; supports the Moffett pillar
3. **Warehouse / Cross-Dock** — existing cross-docking signals
4. **Dedicated Fleet** — anchors the industry cluster
5. **Expedited / Same-Day**
6. **Last Mile**
7. **Manufacturing** (industry cluster)
8. **Healthcare Linen** (industry cluster)
9. **24/7 Dispatch** (capability — can stay lighter)
10. **/services hub** — final polish into a genuine parent pillar

**Revenue caveat:** if Dedicated Fleet generates substantially larger contracts, moving it to #2 is defensible. SEO priority and revenue priority don't have to match — decide with Point Zero which lever matters more this quarter.

---

## 8. Workflow per page (unchanged — this part was right)

1. **Intake** — 8–12 questions to Point Zero (capacities, equipment, coverage, audiences, differentiators). **Gating step — no page ships without verified facts.**
2. **Draft copy** — to the quality standard (§3), brand voice, block set chosen for the topic.
3. **Save draft** — `<service>_PAGE_DRAFT.md`.
4. **Build** — via the flexible `ServicePillarPage` block library.
5. **SEO** — unique title/meta/OG/Twitter; Breadcrumb schema (Service/FAQ optional).
6. **Interlink** — 2–5 contextual body links + related cards.
7. **Images** — real photos + alt text (§10).
8. **QA** — production build clean, mobile OK, no horizontal overflow.
9. **Fact-check + approve** by Point Zero.
10. **Commit + push.**

**Engineering note:** before page #2, refactor the Moffett markup into the flexible block-based `ServicePillarPage`. One-time cost; pages 2–10 become mostly a data file + chosen blocks.

---

## 9. Off-page / local authority workstream (NEW — the biggest gap)

On-page pages alone won't win competitive GTA searches. Run this in parallel:

- **Google Business Profile** — optimise categories, services, service areas; keep it active.
- **Reviews** — steady stream of genuine customer reviews.
- **Real media** — regular authentic truck / Moffett / jobsite photos (also feeds the pages).
- **Citations / NAP** — consistent Name-Address-Phone across directories. *(Note: primary phone is now (647) 680-1300 — keep citations consistent.)*
- **Backlinks** — suppliers, contractors, industry associations, local business groups, customer/vendor links where appropriate.
- **Case studies** — documented real deliveries (e.g. a construction-site Moffett delivery in Toronto: challenge, load type, equipment, outcome, original photos). Stronger evidence than another generic "Moffett Toronto" landing page.

---

## 10. Image / alt-text plan

- Hero + 2–3 body photos per page, **real Point Zero operations** relevant to that service.
- Don't reuse the same photo across pages (dilutes distinctiveness).
- Descriptive, non-stuffed alt text on every image.

---

## 11. Measurement

- Per page: Search Console impressions/clicks, target-keyword rankings, quote-form submissions attributed to the page.
- Watch **cannibalization** between overlapping pages (e.g. Moffett vs Construction, Last Mile vs Moffett) — differentiate copy if two compete for one query.
- Track GBP insights, review velocity, and backlinks alongside on-page metrics.

---

## 12. Risks & guardrails

- **Thin/duplicate content** — distinct copy per page; never template-fill identical paragraphs.
- **Structural sameness** — vary block selection/order per topic (§5).
- **Cannibalization** — keep keyword themes distinct; industry/capability pages point up to their pillar.
- **Overclaiming** — factual/hedged; verify every capability claim.
- **Premature city pages** — hold per-city spokes until pillars are strong *and* each city has genuinely distinct content or proof.

---

## 13. Definition of done (per page)

- [ ] Facts verified & approved by Point Zero
- [ ] Copy is **intent-complete** for the topic (right depth, no filler), brand voice
- [ ] Unique title/meta/OG/Twitter; Breadcrumb schema (Service/FAQ optional)
- [ ] 2–5 contextual internal links (reciprocal, topical) + related cards
- [ ] Real images + alt text
- [ ] Production build clean; mobile OK
- [ ] Committed & pushed

---

## Summary of changes from v1
- ❌ "nine equal pillars" → ✅ hub + **tiered roles** (pillars vs industry/use-case/capability clusters)
- ❌ rigid 1,200–2,000 words / ~12 sections → ✅ **search-intent completeness**, variable depth
- ❌ FAQPage required → ✅ **optional**; Breadcrumb kept, Service semantic-only
- ➕ **contextual reciprocal linking** (2–5/page) as the real cluster mechanism
- ➕ **flexible block-library component**, not a fixed template
- ➕ **case-study / supporting-cluster** content
- ➕ separate **local / off-page authority** program
- 🔀 build order re-weighted to **SEO signal** (Construction, Cross-Dock earlier), with a revenue caveat for Dedicated Fleet
- Kept: workflow, intake/fact gate, engineering refactor, QA, measurement
