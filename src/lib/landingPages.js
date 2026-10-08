// Service + city landing pages (top-level, keyword-specific URLs from the SEO
// audit's new-pages plan). Each has genuinely distinct, locally-specific content
// — not a city-name swap — and links UP to its pillar service page and the
// matching /service-areas city page. Rendered by components/LandingPage.jsx.
import { SITE_URL, SITE_NAME } from './site';

export const LANDING_PAGES = {
  'cross-docking-mississauga': {
    slug: 'cross-docking-mississauga',
    name: 'Cross-Docking in Mississauga',
    serviceName: 'Cross-Docking in Mississauga',
    city: 'Mississauga',
    pillarHref: '/services/warehouse-cross-dock-storage',
    ogImage: '/images/warehouse-crossdock-docks.webp',
    imageKey: 'warehouse-cross-dock-storage',
    metaTitle: 'Cross-Docking in Mississauga | Point Zero Road Lines',
    metaDescription:
      'Cross-docking in Mississauga at our Bonhill Road terminal — trailer-to-trailer transfers, LTL consolidation and staging with direct 401/403/407/410 access. Get a quote.',
    keywords: ['cross docking mississauga', 'cross dock mississauga', 'crossdock near me', 'mississauga warehousing', 'transload mississauga'],
    badge: 'MISSISSAUGA',
    badgeAlt: 'CROSS-DOCK & TRANSLOAD',
    titleLine1: 'CROSS-DOCKING',
    titleAccent: 'IN MISSISSAUGA.',
    description:
      'Our cross-dock sits at 1566 Bonhill Road in Mississauga, with direct ramps to Highways 401, 403, 407 and 410 — and it shares a roof with our fleet. Inbound trailers are unloaded, sorted and moved straight onto outbound trucks or local routes, so freight keeps moving instead of sitting in storage.',
    stats: [
      { value: 'Bonhill Rd', label: 'Mississauga terminal' },
      { value: '401·403·407·410', label: 'Direct highway access' },
      { value: 'Same-roof', label: 'Dock + fleet together' },
      { value: 'LTL → FTL', label: 'Consolidation & transload' },
    ],
    primary: {
      num: '01', label: 'What we run here', title: 'Mississauga cross-dock services', columns: 4,
      desc: 'A transfer point, not a shelf — built to keep Mississauga freight in motion.',
      items: [
        { icon: 'Repeat', title: 'Trailer-to-Trailer Transfers', href: '/services/warehouse-cross-dock-storage', desc: 'Inbound unloaded and moved straight to outbound trucks, often the same day.' },
        { icon: 'Package', title: 'LTL Consolidation', href: '/services/less-than-truckload-ltl', desc: 'Combine smaller Mississauga shipments into fuller, cheaper outbound loads.' },
        { icon: 'Warehouse', title: 'Short-Term Staging', href: '/services/warehouse-cross-dock-storage', desc: 'Hold and stage freight between legs without paying for long-term storage.' },
        { icon: 'Forklift', title: 'Transload to Local Delivery', href: '/services/flatbed-moffett-transport', desc: 'Break a full trailer down for local Moffett and last-mile drops across the GTA.' },
      ],
    },
    dark: {
      num: '02', label: 'Why Mississauga', title: 'Why our location works',
      desc: 'Central to the GTA’s busiest logistics corridor, with the fleet in the same building.',
      items: [
        { icon: 'MapPin', title: 'Northeast industrial hub', desc: 'In the dense Mississauga warehousing and distribution belt, minutes from Pearson.' },
        { icon: 'Route', title: 'Four-highway access', desc: 'The 401, 403, 407 and 410 all within reach for fast inbound and outbound dispatch.' },
        { icon: 'Truck', title: 'Fleet under one roof', desc: 'Because our dock and trucks run together, cross-docked freight moves without a vendor hand-off.' },
        { icon: 'Timer', title: 'Reduced dwell time', desc: 'Freight transfers instead of sitting — less handling, less cost, faster turns.' },
        { icon: 'Globe', title: 'Cross-border connections', desc: 'Stage U.S.-bound freight for our cross-border lanes out of the same terminal.' },
        { icon: 'CheckCircle', title: 'Load rework', desc: 'Re-palletizing, shrink-wrap and shift corrections for rejected or damaged loads.' },
      ],
    },
    faqs: [
      { q: 'Where is your Mississauga cross-dock?', a: 'At 1566 Bonhill Road, Mississauga ON L5T 1C7, with direct access to Highways 401, 403, 407 and 410. Our fleet operates from the same terminal.' },
      { q: 'What’s the difference between cross-docking and warehousing?', a: 'Cross-docking transfers freight from inbound to outbound trucks with little or no storage, keeping it moving. Warehousing stores it until it’s needed. We offer both, but the Mississauga dock is built for fast transfers.' },
      { q: 'Can you consolidate LTL shipments in Mississauga?', a: 'Yes. We combine smaller vendor shipments into unified outbound truckloads, or break bulk inbound loads down for local GTA delivery.' },
    ],
    cta: { titleLine1: 'NEED A MISSISSAUGA', titleAccent: 'CROSS-DOCK?', desc: 'Ask about dock space, transfer timing and rates at our Bonhill Road terminal.' },
    related: [
      { title: 'Warehouse & Cross-Dock', href: '/services/warehouse-cross-dock-storage', desc: 'The full cross-dock and storage service this page is part of.' },
      { title: 'Freight in Mississauga', href: '/service-areas/mississauga', desc: 'Everything we run across Mississauga, from our HQ terminal.' },
      { title: 'LTL Freight', href: '/services/less-than-truckload-ltl', desc: 'Consolidated partial loads on scheduled GTA lanes.' },
    ],
  },

  'construction-material-delivery-toronto': {
    slug: 'construction-material-delivery-toronto',
    name: 'Construction Material Delivery in Toronto',
    serviceName: 'Construction Material Delivery in Toronto',
    city: 'Toronto',
    pillarHref: '/services/construction-material-hauling',
    ogImage: '/images/construction-blue-hero.webp',
    imageKey: 'construction-material-hauling',
    metaTitle: 'Construction Material Delivery in Toronto | Point Zero',
    metaDescription:
      'Construction & building material delivery across Toronto — Moffett flatbeds that unload themselves on downtown and no-dock sites. Onsite placement, timed windows. Quote.',
    keywords: ['construction material delivery toronto', 'building material transport', 'onsite material transportation', 'construction material delivery service', 'jobsite delivery toronto'],
    badge: 'TORONTO',
    badgeAlt: 'CONSTRUCTION & BUILDING MATERIALS',
    titleLine1: 'CONSTRUCTION MATERIAL DELIVERY',
    titleAccent: 'IN TORONTO.',
    description:
      'Toronto sites rarely have a dock, a forklift, or room for a crane — especially downtown. Our Moffett-equipped flatbeds bring their own forklift and place building materials exactly where the crew needs them: on the curb, in the yard, or across the site. Lumber, brick, windows, drywall and packaged materials, delivered onsite across the 416.',
    stats: [
      { value: 'No-dock', label: 'Self-unloading Moffett' },
      { value: 'Onsite', label: 'Placed where you need it' },
      { value: 'Downtown', label: 'Tight-site & condo builds' },
      { value: '24/7', label: 'Timed delivery windows' },
    ],
    primary: {
      num: '01', label: 'Toronto construction delivery', title: 'What we deliver onsite', columns: 4,
      desc: 'Building materials placed where a Toronto job site actually needs them, dock or no dock.',
      items: [
        { icon: 'Forklift', title: 'Moffett Flatbed Delivery', href: '/services/flatbed-moffett-transport', desc: 'Truck-mounted forklift unloads lumber, brick and packaged materials with no dock or crane.' },
        { icon: 'Hammer', title: 'Building Materials', href: '/services/construction-material-hauling', desc: 'Drywall, windows, trusses, block and finish materials for Toronto builds.' },
        { icon: 'Layers', title: 'Roll-Tite for Weather', href: '/services/roll-tite-curtain-side-trailers', desc: 'Side-loaded, weather-tight transport for moisture-sensitive products.' },
        { icon: 'Timer', title: 'Expedited Site Drops', href: '/services/expedited-same-day-freight', desc: 'Hot-shot material runs when a trade is waiting and the schedule can’t slip.' },
      ],
    },
    dark: {
      num: '02', label: 'Built for Toronto', title: 'The parts out-of-town carriers miss',
      desc: 'Downtown access, timed windows and tight-site unloading are everyday work for us.',
      items: [
        { icon: 'MapPin', title: 'Downtown & condo sites', desc: 'High-rise builds and infill lots where there’s no laydown area and no dock.' },
        { icon: 'Clock', title: 'Delivery windows', desc: 'Early-morning, overnight and weekend drops around municipal and site restrictions.' },
        { icon: 'Navigation', title: 'Restricted routes', desc: 'Routing around truck restrictions and congestion across the core and suburbs.' },
        { icon: 'CheckCircle', title: 'Tight-site unloading', desc: 'Moffett placement on narrow streets where a forklift or crane won’t fit.' },
        { icon: 'Route', title: 'Etobicoke to Scarborough', desc: 'Material delivery across the whole 416 and out into the GTA.' },
        { icon: 'Shield', title: 'Secured & tarped loads', desc: 'Building products secured and weather-protected to code for city streets.' },
      ],
    },
    faqs: [
      { q: 'Can you deliver building materials to a Toronto site with no dock?', a: 'Yes — that’s the core of what we do. Our Moffett-equipped flatbeds carry a truck-mounted forklift, so materials are unloaded and placed on site with no dock, forklift or crane needed.' },
      { q: 'Do you handle downtown Toronto delivery windows?', a: 'We do. With 24/7 dispatch we schedule early-morning, overnight and weekend deliveries to fit building and municipal restrictions in the core.' },
      { q: 'What materials do you deliver?', a: 'Lumber, brick, block, drywall, windows, trusses and packaged building products — anything suitable for flatbed and Moffett unloading. Share the load details for a quote.' },
    ],
    cta: { titleLine1: 'MATERIALS FOR A', titleAccent: 'TORONTO SITE?', desc: 'Tell us the site and the load — we’ll place it where the crew needs it.' },
    related: [
      { title: 'Construction Material Hauling', href: '/services/construction-material-hauling', desc: 'The full construction delivery service across the GTA.' },
      { title: 'Freight in Toronto', href: '/service-areas/toronto', desc: 'Everything we run across the City of Toronto.' },
      { title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'The self-unloading delivery behind every onsite drop.' },
    ],
  },

  'cross-docking-toronto': {
    slug: 'cross-docking-toronto',
    name: 'Cross-Docking & Last-Mile in Toronto',
    serviceName: 'Cross-Docking & Last-Mile in Toronto',
    city: 'Toronto',
    pillarHref: '/services/warehouse-cross-dock-storage',
    ogImage: '/images/warehouse-crossdock-facility.webp',
    imageKey: 'last-mile-delivery',
    metaTitle: 'Cross-Docking & Last-Mile in Toronto | Point Zero',
    metaDescription:
      'Cross-docking and last-mile delivery for Toronto — freight consolidated at our Mississauga dock and run final-mile into the 416. Retail, residential and site drops. Quote.',
    keywords: ['toronto cross dock', 'last mile delivery toronto', 'final mile delivery gta', 'cross docking toronto', 'toronto distribution'],
    badge: 'TORONTO',
    badgeAlt: 'CROSS-DOCK & LAST-MILE',
    titleLine1: 'CROSS-DOCK & LAST-MILE',
    titleAccent: 'INTO TORONTO.',
    description:
      'Toronto is the GTA’s biggest delivery market and its hardest last leg. We consolidate and stage freight at our Mississauga cross-dock, then run the final mile into the 416 — retail, residential and job-site drops — so your freight reaches the exact point of need without an extra vendor in the middle.',
    stats: [
      { value: 'Consolidate', label: 'At the Mississauga dock' },
      { value: 'Final-mile', label: 'Into the 416' },
      { value: 'Retail + site', label: 'Stores, homes, job sites' },
      { value: 'One operation', label: 'Dock + fleet together' },
    ],
    primary: {
      num: '01', label: 'Toronto cross-dock + delivery', title: 'How freight reaches Toronto', columns: 4,
      desc: 'Staged once, delivered precisely — the dock and the last mile under one roof.',
      items: [
        { icon: 'Warehouse', title: 'Cross-Dock & Consolidate', href: '/services/warehouse-cross-dock-storage', desc: 'Inbound freight sorted and consolidated for efficient Toronto outbound runs.' },
        { icon: 'Store', title: 'Last-Mile Delivery', href: '/services/last-mile-delivery', desc: 'Final-leg delivery to Toronto retail, residential and commercial addresses.' },
        { icon: 'Package', title: 'LTL Consolidation', href: '/services/less-than-truckload-ltl', desc: 'Combine partial loads bound for Toronto into fuller, cheaper deliveries.' },
        { icon: 'Forklift', title: 'No-Dock Drops', href: '/services/flatbed-moffett-transport', desc: 'Moffett placement for Toronto sites and storefronts without dock equipment.' },
      ],
    },
    dark: {
      num: '02', label: 'Toronto coverage', title: 'Across the 416 and the core',
      desc: 'From downtown to the suburbs, timed and routed for a dense city.',
      items: [
        { icon: 'MapPin', title: 'Downtown core', desc: 'Retail, office and condo deliveries along the Gardiner and the waterfront.' },
        { icon: 'Navigation', title: 'Etobicoke & North York', desc: 'West and north commercial and residential last-mile.' },
        { icon: 'Route', title: 'Scarborough & the east', desc: 'East-end retail, warehousing and residential drops.' },
        { icon: 'Clock', title: 'Timed windows', desc: 'Early and off-peak delivery scheduling around Toronto congestion.' },
        { icon: 'Repeat', title: 'Staged once', desc: 'Consolidated at our Mississauga dock so Toronto runs go out full and efficient.' },
        { icon: 'CheckCircle', title: 'Precise placement', desc: 'Freight set at the exact point of need, not just dropped at a dock.' },
      ],
    },
    faqs: [
      { q: 'Do you cross-dock freight for Toronto delivery?', a: 'Yes. We consolidate and stage freight at our Mississauga cross-dock, then run the final mile into Toronto — so freight is handled once and delivered efficiently across the 416.' },
      { q: 'What does last-mile delivery in Toronto cover?', a: 'Final-leg delivery to retail, residential and commercial addresses across downtown, Etobicoke, North York and Scarborough, with timed windows for the core.' },
      { q: 'Can you deliver to Toronto sites without a dock?', a: 'Yes — our Moffett-equipped flatbeds self-unload, so storefronts, builds and sites without a dock or forklift are no problem.' },
    ],
    cta: { titleLine1: 'FREIGHT HEADED', titleAccent: 'INTO TORONTO?', desc: 'We’ll stage it at the dock and run the last mile into the 416.' },
    related: [
      { title: 'Warehouse & Cross-Dock', href: '/services/warehouse-cross-dock-storage', desc: 'The cross-dock and consolidation service behind this.' },
      { title: 'Last Mile Delivery', href: '/services/last-mile-delivery', desc: 'The final-leg delivery service into the GTA.' },
      { title: 'Freight in Toronto', href: '/service-areas/toronto', desc: 'Everything we run across the City of Toronto.' },
    ],
  },

  'healthcare-linen-logistics-toronto': {
    slug: 'healthcare-linen-logistics-toronto',
    name: 'Healthcare Linen Logistics in Toronto',
    serviceName: 'Healthcare Linen Logistics in Toronto',
    city: 'Toronto',
    pillarHref: '/services/healthcare-linen-logistics',
    ogImage: '/images/dedicated-fleet-blue.webp',
    imageKey: 'healthcare-linen-logistics',
    metaTitle: 'Healthcare Linen Logistics in Toronto | Point Zero',
    metaDescription:
      'Hospital & healthcare linen transport across Toronto — scheduled, dedicated routes with clean/soiled separation and cart handling, backed by 24/7 dispatch. Get a quote.',
    keywords: ['hospital linen service toronto', 'healthcare linen management toronto', 'medical linen delivery toronto', 'linen logistics toronto'],
    badge: 'TORONTO',
    badgeAlt: 'HEALTHCARE LINEN LOGISTICS',
    titleLine1: 'HEALTHCARE LINEN LOGISTICS',
    titleAccent: 'IN TORONTO.',
    description:
      'Toronto’s hospitals and healthcare facilities run on linen that arrives on time and leaves on schedule. We provide dedicated, scheduled linen and textile routes across Toronto — clean in, soiled out, kept separate and handled by cart — with drivers who know the facilities and a dispatch desk that answers around the clock.',
    stats: [
      { value: 'Scheduled', label: 'Dedicated linen routes' },
      { value: 'Clean / soiled', label: 'Separated in transit' },
      { value: 'Toronto', label: 'Hospitals & facilities' },
      { value: '24/7', label: 'Dispatch support' },
    ],
    primary: {
      num: '01', label: 'Toronto linen logistics', title: 'How we run healthcare routes', columns: 4,
      desc: 'Turnaround-driven handling built around the windows healthcare runs on.',
      items: [
        { icon: 'HeartPulse', title: 'Scheduled Linen Routes', href: '/services/healthcare-linen-logistics', desc: 'Fixed clean-in / soiled-out windows Toronto facilities can plan around.' },
        { icon: 'Users', title: 'Dedicated Capacity', href: '/services/dedicated-fleet-services', desc: 'The same trucks and drivers assigned to the account for consistency.' },
        { icon: 'Clock', title: 'After-Hours Runs', href: '/services/24-7-after-hours-weekend-dispatch', desc: 'Evening and weekend linen runs when the turnaround requires it.' },
        { icon: 'Timer', title: 'Expedited Replenishment', href: '/services/expedited-same-day-freight', desc: 'Rush linen runs when a facility is short and can’t wait.' },
      ],
    },
    dark: {
      num: '02', label: 'Why it’s different', title: 'What compliant linen transport takes',
      desc: 'Less about distance, more about turnaround, separation and reliability.',
      items: [
        { icon: 'Repeat', title: 'Fixed turnarounds', desc: 'Clean linen in and soiled out on the schedule facilities plan around.' },
        { icon: 'Layers', title: 'Clean/soiled separation', desc: 'The two kept apart through handling and transport.' },
        { icon: 'Package', title: 'Cart-based handling', desc: 'Linen carts loaded, secured and returned — not loose pallets.' },
        { icon: 'MapPin', title: 'Toronto facility access', desc: 'Drivers who know the hospitals, docks and access across the city.' },
        { icon: 'Clock', title: 'Around-the-clock dispatch', desc: 'A live desk when a schedule has to flex, including nights and weekends.' },
        { icon: 'CheckCircle', title: 'Consistency first', desc: 'The reliable, repeatable schedule a facility depends on, every run.' },
      ],
    },
    faqs: [
      { q: 'Do you serve Toronto hospitals and healthcare facilities?', a: 'Yes. We run dedicated, scheduled linen and textile routes for healthcare facilities across Toronto, with clean/soiled separation and cart handling.' },
      { q: 'Why does healthcare linen need dedicated capacity?', a: 'It runs on fixed, repeatable turnarounds. Assigning the same trucks and drivers to the account gives the consistency a facility depends on — more than ad-hoc booking can.' },
      { q: 'Can you run Toronto linen routes after hours?', a: 'Yes. Healthcare schedules don’t stop at 5 PM; our 24/7 dispatch supports evening and weekend linen runs when turnaround requires it.' },
    ],
    cta: { titleLine1: 'LINEN LOGISTICS FOR A', titleAccent: 'TORONTO FACILITY?', desc: 'Talk to dispatch about scheduled, dedicated linen routes in Toronto.' },
    related: [
      { title: 'Healthcare Linen Logistics', href: '/services/healthcare-linen-logistics', desc: 'The full linen & textile logistics service across Ontario.' },
      { title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'The dedicated capacity model behind reliable linen routes.' },
      { title: 'Freight in Toronto', href: '/service-areas/toronto', desc: 'Everything we run across the City of Toronto.' },
    ],
  },
};

export const LANDING_SLUGS = Object.keys(LANDING_PAGES);

export function buildMetadata(slug) {
  const d = LANDING_PAGES[slug];
  const path = `/${slug}`;
  const ogImage = `${SITE_URL}${d.ogImage}`;
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', url: path, siteName: SITE_NAME, locale: 'en_CA',
      title: d.metaTitle, description: d.metaDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${SITE_NAME} — ${d.name}` }],
    },
    twitter: { card: 'summary_large_image', title: d.metaTitle, description: d.metaDescription, images: [ogImage] },
  };
}

export function buildSchema(slug) {
  const d = LANDING_PAGES[slug];
  const pageUrl = `${SITE_URL}/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: d.serviceName,
        description: d.metaDescription,
        provider: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
        areaServed: [
          { '@type': 'City', name: d.city },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
        ],
        offers: { '@type': 'Offer', priceCurrency: 'CAD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/get-a-quote` },
        isRelatedTo: { '@id': `${SITE_URL}${d.pillarHref}#service` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: d.name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: d.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };
}
