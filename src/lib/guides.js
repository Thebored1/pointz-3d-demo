// Resources / guides content. One entry = one article at /resources/<slug>.
// Evergreen, informational pieces that build topical authority and catch long-tail
// search, each linking to the relevant services. To add a guide: add an entry here
// (+ a hero image in /public/images). The hub, routes, schema and sitemap pick it
// up automatically.
//
// `body` is an ordered list of blocks; each block has exactly one key:
//   { h2 } section heading · { h3 } sub-heading · { p } paragraph ·
//   { ul: [] } bullet list · { ol: [] } numbered list · { callout } highlighted tip
//
// Dates reflect when this content was authored/last reviewed (not a fabricated
// publishing history). Update `updated` when you revise an article.

export const GUIDE_PUBLISHED = '2026-10-08';

export const GUIDES = {
  'moffett-vs-forklift-delivery': {
    slug: 'moffett-vs-forklift-delivery',
    title: 'Moffett Delivery vs Forklift Delivery: What’s the Difference?',
    shortTitle: 'Moffett vs forklift delivery',
    category: 'Equipment',
    readTime: '6 min read',
    metaTitle: 'Moffett Delivery vs Forklift Delivery: What’s the Difference?',
    metaDescription:
      'A Moffett is a truck-mounted forklift that travels with the load and unloads anywhere — no dock, no site forklift. Here’s how it differs from standard forklift delivery.',
    keywords: ['Moffett delivery', 'truck-mounted forklift', 'forklift delivery', 'piggyback forklift', 'no dock delivery'],
    excerpt: 'A Moffett rides on the back of the truck and unloads the freight itself — on a curb, a yard or a muddy job site. Here’s when it beats a standard forklift drop.',
    dek: 'Both move pallets off a truck. Only one brings its own forklift to a site that doesn’t have one.',
    heroImage: '/images/moffett-unloading-forklift.webp',
    heroAlt: 'A truck-mounted Moffett forklift unloading palletized freight on site',
    ogImage: '/images/moffett-unloading-forklift.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/flatbed-moffett-transport', '/services/construction-material-hauling', '/services/last-mile-delivery'],
    body: [
      { p: 'If you’ve ever had a shipment show up at a site with no loading dock and no forklift, you already understand the problem a Moffett solves. The two terms get used interchangeably, but “Moffett delivery” and “forklift delivery” describe different things — and the difference decides whether your freight gets unloaded or sits on the truck.' },
      { h2: 'What a Moffett actually is' },
      { p: 'A Moffett (the brand name people use for a truck-mounted or “piggyback” forklift) is a compact forklift that rides on the back of a flatbed or trailer and travels with the load. When the truck arrives, the driver unhooks it, drives it off, and unloads the freight directly — onto a curb, into a yard, or across a job site. When the job is done, the Moffett hooks back onto the truck and leaves with it.' },
      { p: 'A standard forklift delivery, by contrast, assumes the forklift is already at the destination. The truck backs into a dock or pulls alongside, and the receiver’s forklift (or dock crew) takes the freight off.' },
      { h2: 'The core difference: who unloads' },
      { ul: [
        'Moffett delivery: the truck brings the forklift. No dock, no site equipment and no receiving crew required.',
        'Forklift delivery: the site provides the forklift and the labour. The truck just has to get there and be reachable.',
      ] },
      { callout: 'Rule of thumb: if you can’t guarantee a working forklift and a person to run it at the delivery point, you need a Moffett — not a standard drop.' },
      { h2: 'When a Moffett is the right call' },
      { ul: [
        'Construction and job sites with no dock, uneven ground or gravel.',
        'Retail, residential and remote deliveries where there’s no receiving equipment.',
        'Building-supply drops — lumber, brick, windows, drywall — placed exactly where the crew needs them.',
        'Any location where waiting on the receiver’s forklift would stall the delivery.',
      ] },
      { h2: 'When a standard forklift drop is fine' },
      { p: 'If you’re shipping dock-to-dock between warehouses or distribution centres that already have forklifts and staff, you don’t need to pay for a Moffett. The equipment is already there, and a standard flatbed or dry van is the more economical choice.' },
      { h2: 'What it means for cost and planning' },
      { p: 'A Moffett adds equipment and a trained operator to the load, so it costs more per trip than a plain flatbed. But it removes the biggest hidden risk in off-dock delivery: showing up and not being able to unload. For most construction, building-supply and no-dock work, that certainty is the whole point.' },
    ],
    faqs: [
      { q: 'Is a Moffett the same as a piggyback forklift?', a: 'Yes. “Moffett,” “piggyback forklift” and “truck-mounted forklift” all refer to the same thing — a forklift that rides on the truck and unloads the freight on arrival. Moffett is a common brand name that became shorthand for the category.' },
      { q: 'Do I need anyone on site to receive a Moffett delivery?', a: 'No. The driver operates the Moffett and places the freight where you need it, so no receiving forklift or crew is required — just a safe, reachable spot to set the load down.' },
      { q: 'How much can a Moffett lift?', a: 'Capacity varies by unit, but truck-mounted forklifts commonly handle in the range of a few thousand pounds per lift. Share your heaviest piece when you request a quote so the right unit is dispatched.' },
    ],
  },

  'ltl-vs-ftl': {
    slug: 'ltl-vs-ftl',
    title: 'LTL vs FTL: Which Truckload Option Fits Your Shipment?',
    shortTitle: 'LTL vs FTL',
    category: 'Shipping modes',
    readTime: '6 min read',
    metaTitle: 'LTL vs FTL: Which Truckload Option Fits Your Shipment?',
    metaDescription:
      'LTL shares trailer space and costs less for small loads; FTL dedicates the whole trailer for speed and handling. Here’s how to choose between less-than-truckload and full-truckload.',
    keywords: ['LTL vs FTL', 'less than truckload', 'full truckload', 'LTL shipping', 'FTL shipping', 'freight class'],
    excerpt: 'Less-than-truckload shares the trailer and the cost; full-truckload buys the whole trailer for speed and gentler handling. Here’s where the line falls.',
    dek: 'The right answer usually comes down to how much you’re moving, how fragile it is, and how fast it has to arrive.',
    heroImage: '/images/warehouse-crossdock-docks.webp',
    heroAlt: 'Loading-bay docks at a cross-dock terminal with trailers',
    ogImage: '/images/warehouse-crossdock-docks.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/less-than-truckload-ltl', '/services/full-truckload-ftl', '/services/warehouse-cross-dock-storage'],
    body: [
      { p: 'Two of the most common questions in freight are “do I need a whole truck?” and “am I paying for space I’m not using?” The answer is the difference between LTL and FTL — less-than-truckload and full-truckload.' },
      { h2: 'Less-than-truckload (LTL)' },
      { p: 'LTL means your freight shares a trailer with other shippers’ loads. You pay for the space and weight you use, not the whole truck, which makes it cost-effective for smaller shipments — typically anywhere from a pallet or two up to roughly half a trailer.' },
      { p: 'The trade-off: LTL freight is consolidated and often handled more than once, moving through cross-docks between pickup and delivery. That adds transit time and more touch points.' },
      { h2: 'Full-truckload (FTL)' },
      { p: 'FTL means the entire trailer is dedicated to your shipment. It’s the better fit when you have enough volume to fill (or nearly fill) a trailer, when your freight is fragile and you want to minimize handling, or when speed matters — an FTL load generally goes straight from origin to destination.' },
      { h2: 'How to choose' },
      { ul: [
        'Volume: a few pallets lean LTL; most of a trailer leans FTL.',
        'Speed: FTL is usually faster — fewer stops, no consolidation.',
        'Handling: fragile or high-value freight does better as FTL (fewer touches).',
        'Budget: LTL spreads cost across shippers; FTL costs more but buys the whole trailer.',
      ] },
      { callout: 'In between the two? A dedicated or scheduled lane can combine the economy of shared capacity with the consistency of FTL — worth asking about if you ship the same route regularly.' },
      { h2: 'A few terms that affect LTL pricing' },
      { ul: [
        'Freight class / density: lighter, bulkier freight generally costs more per pound.',
        'Accessorials: liftgate, inside delivery, appointment or residential delivery add charges.',
        'Dimensions and weight: accurate numbers prevent reweigh and re-class fees.',
      ] },
      { p: 'If you’re not sure which way your shipment falls, give a carrier the pallet count, total weight, dimensions and the lane — that’s usually enough to quote both options and show you the real difference.' },
    ],
    faqs: [
      { q: 'At what point should I switch from LTL to FTL?', a: 'There’s no hard cutoff, but once you’re filling roughly half a trailer or more — or your freight is fragile or time-sensitive — FTL often becomes the better value once you factor in handling and transit time.' },
      { q: 'Is LTL always cheaper than FTL?', a: 'For small shipments, usually yes, because you only pay for the space you use. But as volume grows, or when accessorial charges stack up, FTL can end up comparable or cheaper per unit.' },
    ],
  },

  'flatbed-load-securement-ontario': {
    slug: 'flatbed-load-securement-ontario',
    title: 'Flatbed Load Securement in Ontario: Rules & Best Practices',
    shortTitle: 'Flatbed load securement',
    category: 'Compliance',
    readTime: '7 min read',
    metaTitle: 'Flatbed Load Securement in Ontario: Rules & Best Practices',
    metaDescription:
      'How cargo securement works on Ontario flatbeds — the National Safety Code Standard 10 basics: working load limits, minimum tie-downs, spacing and edge protection.',
    keywords: ['load securement Ontario', 'cargo securement', 'NSC Standard 10', 'flatbed tie down rules', 'working load limit'],
    excerpt: 'Working load limits, minimum tie-down counts, spacing and edge protection — the securement fundamentals every flatbed load in Ontario has to meet.',
    dek: 'Ontario follows the National Safety Code Standard 10. Here’s what that means in practice for a flatbed load.',
    heroImage: '/images/flatbed-lumber.webp',
    heroAlt: 'A flatbed loaded with lumber, secured for transport',
    ogImage: '/images/flatbed-lumber.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/flatbed-moffett-transport', '/services/construction-material-hauling', '/services/roll-tite-curtain-side-trailers'],
    body: [
      { p: 'Flatbed freight is exposed, which makes securement the single most important part of the job. In Ontario, cargo securement follows the North American standard — National Safety Code (NSC) Standard 10 — adopted into provincial regulation. These are the fundamentals; they’re not a substitute for the regulation itself or professional judgment on a specific load.' },
      { h2: 'The core principle: working load limit' },
      { p: 'Every tie-down, chain, strap, binder and anchor point has a Working Load Limit (WLL) — the maximum it’s rated to hold. The standard requires the aggregate WLL of all the devices holding a piece of cargo to be at least 50% of the weight of that cargo. The system also has to withstand defined forces: forward, rearward and sideways, plus lift.' },
      { h2: 'Minimum number of tie-downs' },
      { p: 'The standard sets a minimum count based on the length and weight of the article being secured (in addition to meeting the WLL rule):' },
      { ul: [
        'Up to 1.52 m long and up to 500 kg: at least 1 tie-down.',
        'Up to 1.52 m long and over 500 kg: at least 2 tie-downs.',
        'Over 1.52 m: at least 2 tie-downs, plus 1 more for every additional 3.04 m (or part of it).',
      ] },
      { p: 'Articles that aren’t blocked against forward movement generally need tie-downs spaced so the freight can’t shift — commonly one near each end and additional ones along the length.' },
      { h2: 'Edge protection, friction and inspection' },
      { ul: [
        'Edge protection: use corner protectors wherever a strap or chain passes over a sharp edge, so it can’t be cut or abraded.',
        'Friction / dunnage: blocking, bracing and friction mats help stop movement and let tie-downs do their job.',
        'Re-check en route: the driver must inspect the load within the first stretch of the trip and at intervals after, re-tensioning as loads settle.',
      ] },
      { callout: 'Some commodities — logs, steel coils, pipe, machinery, vehicles — have their own specific rules under the standard. Treat those as special cases, not the general flatbed rule.' },
      { h2: 'Why it matters beyond the fine' },
      { p: 'A shifted or lost load is a safety hazard first and a compliance problem second. Proper securement protects other road users, keeps the freight intact, and keeps the carrier’s CVOR record clean. For construction materials, equipment and machinery — the loads that ride on flatbeds most — it’s the difference between a routine delivery and a roadside incident.' },
      { callout: 'This is general information, current as of writing, not legal advice. Always verify the current MTO and NSC Standard 10 requirements for your specific commodity before shipping.' },
    ],
    faqs: [
      { q: 'What standard governs load securement in Ontario?', a: 'Ontario follows National Safety Code (NSC) Standard 10 — Cargo Securement, the harmonized North American standard, adopted into provincial regulation and enforced by the MTO.' },
      { q: 'What is the 50 percent rule?', a: 'The aggregate working load limit (WLL) of all the tie-downs securing a piece of cargo must be at least half the weight of that cargo. It’s a minimum — heavier or awkward loads often need more.' },
      { q: 'How often does a driver have to check the load?', a: 'The securement has to be inspected early in the trip and re-checked at regular intervals, with tie-downs re-tensioned as the load settles.' },
    ],
  },

  'what-is-cross-docking': {
    slug: 'what-is-cross-docking',
    title: 'What Is Cross-Docking (and When It Beats Warehousing)',
    shortTitle: 'What is cross-docking',
    category: 'Logistics',
    readTime: '5 min read',
    metaTitle: 'What Is Cross-Docking (and When It Beats Warehousing)',
    metaDescription:
      'Cross-docking moves freight from inbound to outbound trucks with little or no storage in between. Here’s how it works, when it saves money, and how it differs from warehousing.',
    keywords: ['cross-docking', 'cross dock vs warehouse', 'transloading', 'freight consolidation', 'distribution'],
    excerpt: 'Cross-docking keeps freight moving — inbound truck to outbound truck with minimal storage. Here’s when that beats putting it on a shelf.',
    dek: 'The goal of a cross-dock is simple: keep freight moving instead of sitting.',
    heroImage: '/images/warehouse-crossdock-facility.webp',
    heroAlt: 'A modern warehouse and cross-dock facility',
    ogImage: '/images/warehouse-crossdock-facility.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/warehouse-cross-dock-storage', '/services/less-than-truckload-ltl', '/services/dedicated-fleet-services'],
    body: [
      { p: 'Warehousing stores freight until it’s needed. Cross-docking does the opposite — it keeps freight moving. Understanding the difference helps you decide where your shipment should spend its time between trucks.' },
      { h2: 'How cross-docking works' },
      { p: 'At a cross-dock, inbound trucks are unloaded and the freight is sorted and moved more or less directly to outbound trucks — often the same day, sometimes within hours. There’s little or no long-term storage. The dock is a transfer point, not a shelf.' },
      { p: 'A typical flow: inbound trailers arrive, freight is scanned and staged by destination, then consolidated with other freight heading the same way and loaded onto outbound trailers.' },
      { h2: 'Cross-docking vs warehousing' },
      { ul: [
        'Warehousing: freight is stored for days, weeks or months until ordered. You’re paying for space and time.',
        'Cross-docking: freight is transferred quickly between trucks. You’re paying for handling and speed, not storage.',
      ] },
      { h2: 'When cross-docking wins' },
      { ul: [
        'Consolidating LTL freight onto fuller, more efficient outbound loads.',
        'Transloading between equipment types — for example, a full trailer broken down for local Moffett delivery.',
        'Fast-moving or time-sensitive goods that shouldn’t sit in storage.',
        'Reducing the handling and cost of double-storing freight that’s already spoken for.',
      ] },
      { h2: 'When you still want warehousing' },
      { p: 'If you need buffer stock, seasonal storage, or a place to hold inventory until orders come in, that’s warehousing — and a cross-dock isn’t a substitute. Many operations use both: a cross-dock to keep in-transit freight moving, and storage for what genuinely needs to wait.' },
      { callout: 'A centrally located cross-dock near the main highway corridors shortens both legs of the trip — inbound and outbound — which is where most of the time savings come from.' },
    ],
    faqs: [
      { q: 'How is cross-docking different from warehousing?', a: 'Warehousing stores freight until it’s needed; cross-docking transfers it from inbound to outbound trucks with little or no storage in between. One optimizes for holding, the other for speed.' },
      { q: 'What is transloading?', a: 'Transloading is moving freight from one mode or trailer type to another — for example, breaking a full trailer down into smaller local deliveries. It often happens at a cross-dock.' },
    ],
  },

  'choosing-the-right-trailer': {
    slug: 'choosing-the-right-trailer',
    title: 'Dry Van vs Flatbed vs Roll-Tite: Choosing the Right Trailer',
    shortTitle: 'Choosing the right trailer',
    category: 'Equipment',
    readTime: '6 min read',
    metaTitle: 'Dry Van vs Flatbed vs Roll-Tite: Choosing the Right Trailer',
    metaDescription:
      'Dry van for enclosed freight, flatbed for oversized and crane-loaded loads, roll-tite for weather-tight side loading. A plain-language guide to picking the right trailer.',
    keywords: ['dry van vs flatbed', 'roll-tite trailer', 'curtain side trailer', 'trailer types', 'step deck'],
    excerpt: 'Enclosed and weatherproof, open and crane-friendly, or curtain-sided for the best of both — how to match the trailer to the freight.',
    dek: 'The trailer you choose is really a decision about how the freight gets loaded, protected and unloaded.',
    heroImage: '/images/highway-trailer.webp',
    heroAlt: 'A transport trailer on the highway',
    ogImage: '/images/highway-trailer.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/dry-van-transportation', '/services/flatbed-moffett-transport', '/services/roll-tite-curtain-side-trailers'],
    body: [
      { p: 'Most shipments fit one of three trailer families. Picking the right one comes down to three questions: does the freight need weather protection, how does it get loaded and unloaded, and does it fit inside a standard enclosed trailer?' },
      { h2: 'Dry van' },
      { p: 'A dry van is the familiar enclosed box trailer. It protects freight from weather and theft and suits palletized, packaged and general goods. Loading and unloading happen at the rear, usually through a dock or with a liftgate/forklift.' },
      { ul: ['Best for: packaged, palletized and consumer goods that need to stay enclosed.', 'Limitation: rear-only loading, and freight has to fit the box.'] },
      { h2: 'Flatbed' },
      { p: 'A flatbed is an open deck with no walls or roof. That makes it the choice for oversized, awkward or heavy freight — building materials, steel, machinery — and for anything loaded or unloaded from the side, top or with a crane. Pair it with a Moffett and it can unload itself anywhere.' },
      { ul: ['Best for: construction materials, equipment, machinery and oversized loads.', 'Limitation: exposed to weather, so loads need tarping and careful securement.'] },
      { h2: 'Roll-tite / curtain-side' },
      { p: 'A roll-tite (curtain-side) trailer is a hybrid: a flatbed-style deck with a retractable weather-tight curtain over a frame. You get side and overhead loading access like a flatbed, plus enclosed-style protection from rain and road spray — useful for building products and industrial freight that can’t get wet but still needs to be loaded from the side.' },
      { ul: ['Best for: weather-sensitive building materials and industrial freight loaded from the side.', 'Limitation: not as fully sealed as a dry van for high-value, theft-sensitive goods.'] },
      { h2: 'Quick decision guide' },
      { ol: [
        'Does it need to be fully enclosed and secure? → Dry van.',
        'Is it oversized, crane-loaded, or headed to a no-dock site? → Flatbed (often with a Moffett).',
        'Does it need side loading and weather protection? → Roll-tite / curtain-side.',
      ] },
      { callout: 'Step-decks and drop-decks are flatbed variants for taller loads that wouldn’t clear height limits on a standard deck — ask about them when your freight is tall as well as heavy.' },
    ],
    faqs: [
      { q: 'What’s the difference between a flatbed and a roll-tite?', a: 'Both load from the side and top, but a roll-tite adds a retractable weather-tight curtain over the deck. Choose a flatbed for pure open-deck access, a roll-tite when the freight also needs protection from rain and spray.' },
      { q: 'Can a dry van deliver to a site with no dock?', a: 'Only with a liftgate and ground-level access, and even then unloading is limited. For true no-dock delivery, a flatbed with a Moffett is the better fit.' },
    ],
  },

  'how-moffett-delivery-works': {
    slug: 'how-moffett-delivery-works',
    title: 'How Moffett Delivery Works on a No-Dock Job Site',
    shortTitle: 'How Moffett delivery works',
    category: 'How-to',
    readTime: '5 min read',
    metaTitle: 'How Moffett Delivery Works on a No-Dock Job Site',
    metaDescription:
      'From dispatch to unload: how a truck-mounted Moffett forklift delivers and places freight on a job site with no loading dock — and how to prepare the site.',
    keywords: ['how Moffett delivery works', 'Moffett unloading', 'no dock delivery', 'job site delivery', 'truck mounted forklift'],
    excerpt: 'Dispatch, transit, unhook, unload, re-stow. A step-by-step look at how Moffett delivery puts freight exactly where a no-dock site needs it.',
    dek: 'The whole point of a Moffett is that the truck shows up able to unload itself. Here’s the sequence.',
    heroImage: '/images/moffett-construction-unload.webp',
    heroAlt: 'A Moffett-equipped flatbed delivering at a construction site',
    ogImage: '/images/moffett-construction-unload.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/flatbed-moffett-transport', '/services/construction-material-hauling', '/services/equipment-machinery-delivery'],
    body: [
      { p: 'Moffett delivery exists for one situation: the freight has to come off the truck at a place that has no dock and no forklift. Here’s how a typical delivery actually runs, and what you can do to make it go smoothly.' },
      { h2: 'Step by step' },
      { ol: [
        'Dispatch & load: the freight is loaded onto a flatbed and the Moffett is mounted on the back of the trailer, travelling with the load.',
        'Transit: the truck drives to the site with the forklift riding along — no separate equipment delivery needed.',
        'Arrival & unhook: on site, the driver detaches the Moffett and drives it off the back of the trailer.',
        'Unload & place: the driver uses the Moffett to lift each piece off the deck and set it exactly where it’s needed — ground level, in a yard, or across the site.',
        'Re-stow & depart: the Moffett is hooked back onto the trailer and leaves with the truck.',
      ] },
      { h2: 'What makes a site Moffett-ready' },
      { ul: [
        'A reasonably firm, level surface for the forklift to operate — gravel and compacted ground are usually fine; deep mud and steep slopes are not.',
        'Enough room for the truck to park and for the Moffett to maneuver between the trailer and the drop point.',
        'A clear, agreed spot to set the freight down.',
        'Overhead and access clearance — watch for wires, low structures and tight gates.',
      ] },
      { callout: 'The more precisely you can describe the site when you book — surface, access, where the freight goes — the faster and safer the unload.' },
      { h2: 'Why contractors rely on it' },
      { p: 'On a job site, waiting for a forklift or a crew to unload a truck costs time and money, and sometimes it simply isn’t available. A Moffett removes that dependency: the delivery is self-contained from pickup to placement. That’s why it’s the default for building materials, equipment and anything bound for a site that was never built to receive a truck.' },
    ],
    faqs: [
      { q: 'What surface does a Moffett need to operate on?', a: 'A reasonably firm and level surface — compacted gravel or dirt is usually fine. Deep mud, soft fill or steep grades can limit where the forklift can safely work, so flag site conditions when you book.' },
      { q: 'Does the driver place the freight exactly where I want it?', a: 'Within reason, yes. The driver can set each piece at an agreed, reachable spot on the site rather than just dropping it at the curb — one of the main advantages over a standard delivery.' },
    ],
  },

  'dedicated-fleet-vs-common-carrier': {
    slug: 'dedicated-fleet-vs-common-carrier',
    title: 'Dedicated Fleet vs Common Carrier: When Dedicated Capacity Pays Off',
    shortTitle: 'Dedicated fleet vs common carrier',
    category: 'Logistics',
    readTime: '6 min read',
    metaTitle: 'Dedicated Fleet vs Common Carrier: When Dedicated Capacity Pays Off',
    metaDescription:
      'A dedicated fleet assigns trucks and drivers to your account for guaranteed, scheduled capacity. Here’s how it compares to common-carrier freight and when it’s worth it.',
    keywords: ['dedicated fleet', 'common carrier', 'dedicated capacity', 'dedicated trucking', 'contract carriage'],
    excerpt: 'Guaranteed capacity, consistent drivers and a schedule built around you — versus the flexibility of booking per load. Here’s where dedicated wins.',
    dek: 'Dedicated capacity trades per-load flexibility for consistency and control. The question is whether your volume justifies it.',
    heroImage: '/images/dedicated-fleet-rows.webp',
    heroAlt: 'A dedicated fleet of trucks lined up in rows',
    ogImage: '/images/dedicated-fleet-rows.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/dedicated-fleet-services', '/services/manufacturing-consumer-goods-freight', '/services/warehouse-cross-dock-storage'],
    body: [
      { p: 'When you ship regularly, you eventually face a choice: keep booking carriers load by load, or dedicate trucks and drivers to your operation. That’s the difference between common-carrier freight and a dedicated fleet.' },
      { h2: 'Common carrier' },
      { p: 'A common carrier moves freight for many customers and books capacity per load. It’s flexible and economical for variable or occasional shipping — you pay for what you move, when you move it, and you’re not committed to anything between loads.' },
      { p: 'The trade-off is that capacity isn’t guaranteed. During busy periods, trucks and drivers go to whoever books first, and you may get a different driver and equipment every time.' },
      { h2: 'Dedicated fleet' },
      { p: 'A dedicated fleet assigns specific trucks, trailers and drivers to your account, planned around your schedule, docks and volume. You get guaranteed capacity, consistent drivers who learn your sites and products, and routing built around your operation rather than shared across many shippers.' },
      { h2: 'When dedicated pays off' },
      { ul: [
        'Consistent, repeatable volume — the same lanes or routes week after week.',
        'Tight or fixed delivery windows that depend on reliable capacity.',
        'Products or sites that benefit from drivers who know them (handling, access, security).',
        'Service-sensitive freight where a missed truck is expensive.',
      ] },
      { h2: 'When common carrier is the better fit' },
      { ul: [
        'Variable or seasonal volume that doesn’t justify committed trucks.',
        'One-off or occasional shipments.',
        'Lanes you ship rarely, where flexibility matters more than consistency.',
      ] },
      { callout: 'It isn’t all-or-nothing. Many shippers dedicate capacity for their core, predictable lanes and use common-carrier or spot capacity for overflow and one-offs.' },
      { h2: 'The real question: consistency vs flexibility' },
      { p: 'Common carriage optimizes for flexibility; dedicated capacity optimizes for consistency and control. If unreliable capacity or inconsistent service is already costing you — missed windows, scrambling for trucks, retraining every new driver on your sites — a dedicated fleet usually pays for itself in predictability.' },
    ],
    faqs: [
      { q: 'What is a dedicated fleet?', a: 'A dedicated fleet is capacity — specific trucks, trailers and drivers — assigned to one customer’s account and scheduled around their operation, rather than shared across many shippers load by load.' },
      { q: 'Do I need huge volume to use a dedicated fleet?', a: 'Not necessarily. What matters most is consistency — regular, repeatable lanes or windows. Many operations dedicate capacity for their core routes and use common-carrier capacity for overflow.' },
    ],
  },

  'expedited-same-day-freight': {
    slug: 'expedited-same-day-freight',
    title: 'Expedited & Same-Day Freight: How Hot-Shot Delivery Works',
    shortTitle: 'Expedited & same-day freight',
    category: 'Shipping modes',
    readTime: '5 min read',
    metaTitle: 'Expedited & Same-Day Freight: How Hot-Shot Delivery Works',
    metaDescription:
      'Expedited freight skips the schedule and goes direct when a shipment can’t wait. Here’s how same-day and hot-shot delivery works and when it’s worth the premium.',
    keywords: ['expedited freight', 'same day delivery', 'hot shot delivery', 'rush freight', 'direct delivery'],
    excerpt: 'When a line is down or a job stalls for one missing part, standard transit isn’t an option. Here’s how expedited and hot-shot delivery close the gap.',
    dek: 'Expedited freight buys one thing: time. Here’s how it works and when it’s worth paying for.',
    heroImage: '/images/flatbed-highway-ad.webp',
    heroAlt: 'A flatbed truck moving freight on the highway',
    ogImage: '/images/flatbed-highway-ad.webp',
    updated: GUIDE_PUBLISHED,
    related: ['/services/expedited-same-day-freight', '/services/24-7-after-hours-weekend-dispatch', '/services/dedicated-fleet-services'],
    body: [
      { p: 'Most freight runs on a schedule. Expedited freight doesn’t — it goes when you need it, usually direct, because the cost of waiting is higher than the cost of the premium. “Hot shot” is the common name for the smaller, urgent version of the same idea.' },
      { h2: 'What makes freight “expedited”' },
      { ul: [
        'Direct routing: the shipment goes straight from origin to destination, without consolidation or extra stops.',
        'Priority dispatch: a truck is assigned to the load as soon as it’s booked, often immediately.',
        'Speed over economy: you’re paying for time and exclusivity, not shared capacity.',
      ] },
      { h2: 'When it’s worth it' },
      { ul: [
        'A production line or job site is stopped waiting on one part or material.',
        'A missed or damaged shipment needs to be replaced today.',
        'A delivery window was moved up and standard transit won’t make it.',
        'High-value or critical freight that can’t sit in a consolidation network.',
      ] },
      { callout: 'The math is usually simple: if an hour of downtime costs more than the expedited premium, expedited is the cheaper option.' },
      { h2: 'Why 24/7 dispatch matters here' },
      { p: 'Urgent freight rarely waits for business hours. Breakdowns, line stoppages and missed deliveries happen at night and on weekends, and an expedited service is only as good as the dispatcher who can actually put a truck on the road when you call. A live dispatch desk — not a voicemail box — is what turns “we need it now” into a truck moving.' },
      { h2: 'How to request it' },
      { p: 'When time is the constraint, give dispatch the pickup and delivery points, the deadline, and the size and weight of the freight. That’s enough to assign the right equipment and get it moving — the faster the details come in, the faster the wheels turn.' },
    ],
    faqs: [
      { q: 'What’s the difference between expedited and hot-shot freight?', a: 'They overlap. “Expedited” is the broad term for priority, direct freight; “hot shot” usually refers to smaller urgent loads moved quickly, often on a smaller truck or trailer. Both prioritize speed and direct routing.' },
      { q: 'When is paying for expedited freight worth it?', a: 'When the cost of waiting is higher than the premium — a stopped production line, a stalled job site, or a missed delivery window. If downtime is expensive, expedited is often the cheaper choice overall.' },
    ],
  },
};

export const GUIDE_SLUGS = Object.keys(GUIDES);

export function getGuide(slug) {
  return GUIDES[slug] || null;
}

// Ordered list for the hub and related rails.
export const GUIDE_LIST = GUIDE_SLUGS.map((slug) => GUIDES[slug]);

// Related guides for an article: the others, capped.
export function getRelatedGuides(slug, limit = 3) {
  return GUIDE_LIST.filter((g) => g.slug !== slug).slice(0, limit);
}
