// Per-city service-area content. One entry = one page at /service-areas/<slug>.
// Each city has genuinely distinct copy (angle, corridors, industries, FAQs) so
// the pages are not templated near-duplicates — thin/duplicate city pages get
// filtered by Google. To add a city: add an entry here (and a real hero image
// in /public/images). sitemap.js and the /service-areas hub pick it up
// automatically; no other file needs editing.

export const CITIES = {
  mississauga: {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region, Ontario',
    ogImage: '/images/fleet-hero.webp',
    imageKey: 'service-areas',

    metaTitle: 'Moffett & Flatbed Delivery in Mississauga, ON | Point Zero Road Lines',
    metaDescription:
      'Mississauga-based carrier since 2006 — Moffett, flatbed, dedicated fleet & cross-dock from our Bonhill Road HQ. Same-day local dispatch across Peel. Free quote.',
    keywords: [
      'Moffett delivery Mississauga',
      'flatbed delivery Mississauga',
      'trucking company Mississauga',
      'freight Mississauga',
      'cross-dock Mississauga',
      'dedicated fleet Mississauga',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'MISSISSAUGA, ONTARIO',
    titleLine1: 'MOFFETT & FLATBED DELIVERY',
    titleAccent: 'IN MISSISSAUGA.',
    description:
      'Mississauga is home. Our terminal sits at 1566 Bonhill Road with direct ramps to the 401, 403, 407, 410 and 427 — so local loads move with the shortest possible dispatch-to-door window. We have run Moffett, flatbed and dedicated fleet work across Peel since 2006.',

    stats: [
      { value: 'HQ', label: '1566 Bonhill Rd terminal' },
      { value: 'Same-day', label: 'Local Peel dispatch' },
      { value: '5 Hwys', label: '401 · 403 · 407 · 410 · 427' },
      { value: 'Since 2006', label: 'Operating in Mississauga' },
    ],

    primary: {
      num: '01',
      label: 'Services in Mississauga',
      title: 'What we run locally',
      desc: 'Every Point Zero service dispatches from our Mississauga terminal — most local jobs are a short run from the yard.',
      columns: 4,
      items: [
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Truck-mounted forklift unloading for warehouses and job sites with no dock — common across Mississauga’s industrial parks.' },
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Trucks and drivers assigned to Mississauga manufacturers and distributors on a set schedule.' },
        { icon: 'Warehouse', title: 'Cross-Dock & Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Stage, consolidate and transload freight at our centrally located Mississauga facility.' },
        { icon: 'Timer', title: 'Expedited & Same-Day', href: '/services/expedited-same-day-freight', desc: 'Hot-shot runs across Peel when a load can’t wait for a standard slot.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Mississauga corridors & industrial zones',
      desc: 'We work the full city daily — from the airport employment lands to the Meadowvale and Dixie business parks.',
      items: [
        { icon: 'MapPin', title: 'Airport Corporate / Gateway', desc: 'Freight to and from the Pearson employment lands, Airport Road and the Gateway cluster.' },
        { icon: 'Route', title: 'Northeast Industrial (Dixie)', desc: 'Dixie, Tomken and Eastgate — dense warehousing and distribution served on short local loops.' },
        { icon: 'Navigation', title: 'Meadowvale & Streetsville', desc: 'West-end business parks and building-supply yards along the 401/407 edge.' },
        { icon: 'Factory', title: 'Malton & Derry corridor', desc: 'Manufacturing and assembly plants on the Derry Road and Malton industrial grid.' },
        { icon: 'CheckCircle', title: 'Port Credit & Clarkson', desc: 'South-Mississauga commercial and retail deliveries down to the QEW/Lakeshore.' },
        { icon: 'Truck', title: 'Pearson & cross-border', desc: 'Airport freight staging and USDOT 3983391 / MC 1492151 cross-border runs from the hub.' },
      ],
    },

    faqs: [
      { title: 'Are you actually based in Mississauga?', desc: 'Yes — our terminal and dispatch are at 1566 Bonhill Road, Mississauga ON L5T 1C7. Local loads are dispatched from the yard, which keeps response times short across Peel.' },
      { title: 'Can you do same-day delivery within Mississauga?', desc: 'For local Mississauga and wider Peel runs we can often dispatch same-day depending on equipment availability. Call dispatch or request a quote and we’ll give you a straight answer on timing.' },
      { title: 'Do you offer Moffett unloading at Mississauga sites with no dock?', desc: 'Yes. Our Moffett-equipped flatbeds carry a truck-mounted forklift, so we unload at warehouses, yards and job sites that have no loading dock or on-site forklift.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'MISSISSAUGA?',
      desc: 'We’re minutes from most of the city. Call dispatch for local rates, dedicated capacity, and same-day availability.',
    },
  },

  toronto: {
    slug: 'toronto',
    name: 'Toronto',
    region: 'City of Toronto, Ontario',
    ogImage: '/images/flatbed-construction-haul.webp',
    imageKey: 'last-mile-delivery',

    metaTitle: 'Moffett & Flatbed Delivery in Toronto, ON | Point Zero Road Lines',
    metaDescription:
      'Toronto Moffett & flatbed delivery for tight downtown and no-dock sites — condo builds, retail last-mile and construction freight. 24/7 dispatch. Free quote.',
    keywords: [
      'Moffett delivery Toronto',
      'flatbed delivery Toronto',
      'construction material delivery Toronto',
      'last mile delivery Toronto',
      'trucking company Toronto',
      'no dock delivery Toronto',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'TORONTO, ONTARIO',
    titleLine1: 'MOFFETT & FLATBED DELIVERY',
    titleAccent: 'IN TORONTO.',
    description:
      'Toronto freight is about access, not just distance. Tight downtown streets, condo sites with no dock, delivery windows and restricted routes are everyday work for us. Our Moffett-equipped flatbeds unload themselves — no site crane or forklift required — from the core to Etobicoke, North York and Scarborough.',

    stats: [
      { value: 'No-dock', label: 'Self-unloading Moffett' },
      { value: '24/7', label: 'Live dispatch for windows' },
      { value: 'Gardiner/DVP', label: '401 · 400 · 404 · 427 access' },
      { value: 'Core → 416', label: 'Downtown to the suburbs' },
    ],

    primary: {
      num: '01',
      label: 'Services in Toronto',
      title: 'Built for a dense city',
      desc: 'The services Toronto jobs lean on most — where self-unloading and timed, final-leg delivery matter.',
      columns: 4,
      items: [
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Self-unloading delivery for downtown and condo sites with no dock, no forklift and no room for a crane.' },
        { icon: 'Store', title: 'Last Mile Delivery', href: '/services/last-mile-delivery', desc: 'Final-leg delivery to retail, residential and job sites at the exact point of need across the 416.' },
        { icon: 'Hammer', title: 'Construction Hauling', href: '/services/construction-material-hauling', desc: 'Building materials placed where a Toronto job site actually needs them, dock or no dock.' },
        { icon: 'Timer', title: 'Expedited & Same-Day', href: '/services/expedited-same-day-freight', desc: 'Hot-shot freight through city traffic when a shipment can’t miss its window.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Toronto zones & access',
      desc: 'We handle the parts of Toronto delivery that trip up out-of-town carriers — restrictions, timing and tight sites.',
      items: [
        { icon: 'MapPin', title: 'Downtown core & waterfront', desc: 'Condo towers, office fit-outs and retail along the Gardiner and the port lands.' },
        { icon: 'Navigation', title: 'Etobicoke & the 427', desc: 'West-end industrial and commercial freight off the 427 and QEW.' },
        { icon: 'Route', title: 'North York & the 401', desc: 'Midtown and north commercial corridors with timed deliveries.' },
        { icon: 'Globe', title: 'Scarborough & the east', desc: 'East-end retail, warehousing and residential last-mile toward the 404/401.' },
        { icon: 'Clock', title: 'Delivery windows & permits', desc: 'Early-morning, overnight and weekend slots to work around restricted-route and noise windows.' },
        { icon: 'CheckCircle', title: 'Tight-site unloading', desc: 'Moffett placement on narrow streets and sites where a forklift or crane won’t fit.' },
      ],
    },

    faqs: [
      { title: 'Can you deliver downtown where there’s no loading dock?', desc: 'Yes — that’s exactly what our Moffett-equipped flatbeds are for. The truck-mounted forklift unloads at the curb or on site, so you don’t need a dock, a forklift or a crane in the core.' },
      { title: 'Do you work around Toronto delivery windows and restricted routes?', desc: 'We do. With 24/7 live dispatch we schedule early-morning, overnight and weekend deliveries to fit building and municipal windows, and route around restrictions.' },
      { title: 'Which parts of Toronto do you cover?', desc: 'The whole city — the downtown core, Etobicoke, North York and Scarborough — plus the surrounding GTA. We dispatch from our Mississauga terminal just off the 427/401.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'TORONTO?',
      desc: 'No dock, tight street, timed window — tell us the site. Dispatch is live 24/7 for Toronto runs.',
    },
  },

  brampton: {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel Region, Ontario',
    ogImage: '/images/warehouse-crossdock-docks.webp',
    imageKey: 'warehouse-cross-dock-storage',

    metaTitle: 'Dedicated Fleet & Freight in Brampton, ON | Point Zero Road Lines',
    metaDescription:
      'Brampton dedicated fleet, LTL/FTL, cross-dock and Moffett delivery for the city’s distribution and manufacturing hub. Scheduled lanes off the 410/407. Free quote.',
    keywords: [
      'trucking company Brampton',
      'dedicated fleet Brampton',
      'LTL freight Brampton',
      'cross-dock Brampton',
      'Moffett delivery Brampton',
      'distribution Brampton',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'BRAMPTON, ONTARIO',
    titleLine1: 'DEDICATED FLEET & FREIGHT',
    titleAccent: 'IN BRAMPTON.',
    description:
      'Brampton is one of the GTA’s busiest distribution and manufacturing hubs, and it runs on consistent, scheduled capacity. We move dedicated fleet loops, LTL and FTL lanes, and Moffett deliveries across the city — from the Gore and Bramalea industrial zones out along the 410 and 407. Our Mississauga cross-dock sits minutes away for consolidation and staging.',

    stats: [
      { value: 'Dedicated', label: 'Scheduled fleet loops' },
      { value: 'LTL + FTL', label: 'Partial to full loads' },
      { value: '410 · 407 · 401', label: 'Direct corridor access' },
      { value: 'Cross-dock', label: 'Minutes away in Mississauga' },
    ],

    primary: {
      num: '01',
      label: 'Services in Brampton',
      title: 'Capacity a hub city needs',
      desc: 'The services Brampton’s distribution and manufacturing operations rely on most.',
      columns: 4,
      items: [
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Trucks, trailers and drivers assigned to Brampton distribution centres on fixed, repeatable schedules.' },
        { icon: 'Package', title: 'Less-Than-Truckload', href: '/services/less-than-truckload-ltl', desc: 'Partial loads consolidated through our nearby Mississauga cross-dock on scheduled lanes.' },
        { icon: 'Warehouse', title: 'Cross-Dock & Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Transload and stage Brampton freight between legs without it sitting idle.' },
        { icon: 'Factory', title: 'Manufacturing Freight', href: '/services/manufacturing-consumer-goods-freight', desc: 'LTL and FTL capacity that moves with Brampton production and distribution schedules.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Brampton corridors & industrial zones',
      desc: 'We run the city’s distribution grid daily and connect it to the wider GTA and cross-border lanes.',
      items: [
        { icon: 'MapPin', title: 'Gore & Highway 50', desc: 'East-Brampton warehousing and distribution along the Gore Road / Hwy 50 corridor.' },
        { icon: 'Route', title: 'Bramalea & Steeles', desc: 'The Steeles and Bramalea industrial belt — large DCs, auto parts and food & beverage.' },
        { icon: 'Navigation', title: 'Highway 410 spine', desc: 'The 410 corridor linking Brampton straight into our Mississauga terminal.' },
        { icon: 'Globe', title: 'Highway 407 lanes', desc: 'Cross-GTA dedicated loops east and west via the 407 ETR.' },
        { icon: 'Warehouse', title: 'Heart Lake & Mount Pleasant', desc: 'North-Brampton commercial and building-supply deliveries.' },
        { icon: 'CheckCircle', title: 'Moffett for no-dock sites', desc: 'Self-unloading flatbeds for yards, retail and sites without dock equipment.' },
      ],
    },

    faqs: [
      { title: 'Do you run dedicated fleet lanes for Brampton distribution centres?', desc: 'Yes. Dedicated fleet is one of our core services — trucks, trailers and drivers assigned to your Brampton operation on a set schedule, planned around your dock and volume.' },
      { title: 'Can you consolidate Brampton LTL freight?', desc: 'We can. Partial loads are consolidated through our Mississauga cross-dock, which is only minutes from Brampton off the 410, then moved on scheduled lanes.' },
      { title: 'How fast can you reach Brampton from your terminal?', desc: 'Our terminal is in Mississauga with direct 410 access, so Brampton is a short run. For timing on a specific lane, request a quote and dispatch will confirm.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'BRAMPTON?',
      desc: 'Dedicated loops, LTL consolidation or a one-off Moffett drop — talk to dispatch about Brampton capacity.',
    },
  },

  vaughan: {
    slug: 'vaughan',
    name: 'Vaughan',
    region: 'York Region, Ontario',
    ogImage: '/images/construction-blue-hero.webp',
    imageKey: 'building-material-distribution',

    metaTitle: 'Flatbed & Building-Material Delivery in Vaughan, ON | Point Zero Road Lines',
    metaDescription:
      'Vaughan flatbed, Moffett & dedicated-fleet delivery for building-supply, distribution and VMC construction — Concord, Woodbridge & the 400/407. 24/7. Free quote.',
    keywords: [
      'flatbed delivery Vaughan',
      'Moffett delivery Vaughan',
      'building material delivery Vaughan',
      'trucking company Vaughan',
      'Concord Woodbridge freight',
      'construction delivery Vaughan',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'VAUGHAN, ONTARIO',
    titleLine1: 'FLATBED & MATERIAL DELIVERY',
    titleAccent: 'IN VAUGHAN.',
    description:
      'Vaughan is building-supply and distribution country — Concord, Woodbridge and the fast-rising Vaughan Metropolitan Centre. Those are exactly the loads our Moffett-equipped flatbeds are built for: lumber, brick, windows and packaged materials set down on site with no dock or crane. We run it daily off the 400, 407 and Highway 7.',

    stats: [
      { value: 'Building', label: 'Materials & home-reno freight' },
      { value: '400 · 407 · 7', label: 'Direct corridor access' },
      { value: 'No-dock', label: 'Self-unloading Moffett' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Services in Vaughan',
      title: 'What Vaughan runs on',
      desc: 'The services behind Vaughan’s building-supply yards, distribution centres and construction sites.',
      columns: 4,
      items: [
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Lumber, brick and packaged materials unloaded on site by truck-mounted forklift — no dock, no crane.' },
        { icon: 'Hammer', title: 'Construction Hauling', href: '/services/construction-material-hauling', desc: 'Materials delivered where VMC towers and Vaughan job sites actually need them.' },
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Scheduled capacity for Concord and Woodbridge distributors and suppliers.' },
        { icon: 'Warehouse', title: 'Cross-Dock & Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Stage and consolidate Vaughan freight at our nearby Mississauga facility.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Vaughan zones & corridors',
      desc: 'From the established industrial belts to the new downtown — we cover the whole city.',
      items: [
        { icon: 'MapPin', title: 'Concord industrial', desc: 'Dense distribution and building-product warehousing between the 400 and Keele.' },
        { icon: 'Route', title: 'Woodbridge & Hwy 7', desc: 'Suppliers, millwork and home-reno freight across the Woodbridge grid.' },
        { icon: 'Navigation', title: 'Vaughan Metropolitan Centre', desc: 'High-rise construction deliveries around the VMC and Jane/Hwy 7.' },
        { icon: 'Globe', title: 'Highway 400 / 407', desc: 'North-south and cross-GTA lanes linking Vaughan to the wider network.' },
        { icon: 'Layers', title: 'Improve Canada / design district', desc: 'Furniture, fixtures and renovation materials for the Vaughan design cluster.' },
        { icon: 'CheckCircle', title: 'Intermodal connections', desc: 'Drayage and transfers near the Vaughan intermodal and rail lands.' },
      ],
    },

    faqs: [
      { title: 'Do you deliver building materials to Vaughan sites without a forklift?', desc: 'Yes — our Moffett-equipped flatbeds carry their own truck-mounted forklift, so lumber, brick, windows and packaged materials get set down on site with no dock, forklift or crane needed.' },
      { title: 'Can you handle high-rise construction deliveries in the VMC?', desc: 'We do timed construction deliveries around the Vaughan Metropolitan Centre and other sites, scheduled with 24/7 dispatch to fit site and traffic windows.' },
      { title: 'Which Vaughan areas do you serve?', desc: 'All of Vaughan — Concord, Woodbridge, Maple, Kleinburg and the VMC — off the 400, 407 and Highway 7, dispatched from our Mississauga terminal.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'VAUGHAN?',
      desc: 'Building materials, distribution loops or a site drop — tell us the load and dispatch will quote it.',
    },
  },

  caledon: {
    slug: 'caledon',
    name: 'Caledon',
    region: 'Peel Region, Ontario',
    ogImage: '/images/construction-materials-crane.webp',
    imageKey: 'construction-material-hauling',

    metaTitle: 'Flatbed, Aggregate & Distribution Freight in Caledon, ON | Point Zero Road Lines',
    metaDescription:
      'Caledon flatbed, Moffett & full-truckload freight for aggregates, construction and the new Hwy 50 / 410 distribution centres. Dedicated lanes, 24/7. Free quote.',
    keywords: [
      'trucking company Caledon',
      'flatbed delivery Caledon',
      'construction material delivery Caledon',
      'distribution Caledon',
      'Moffett delivery Caledon',
      'aggregate hauling Caledon',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'CALEDON, ONTARIO',
    titleLine1: 'CONSTRUCTION & FREIGHT',
    titleAccent: 'IN CALEDON.',
    description:
      'Caledon mixes heavy construction and big-box distribution — aggregate pits and building sites on one side, the sprawling new warehouses along Highway 50 and the 410 extension on the other. We run flatbed, Moffett and full-truckload capacity across both, from Mayfield West up through Tullamore and Bolton.',

    stats: [
      { value: 'FTL', label: 'Full-truckload lanes' },
      { value: 'Hwy 50 · 410', label: 'Distribution corridors' },
      { value: 'Construction', label: 'Materials & site delivery' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Services in Caledon',
      title: 'Heavy loads, long lanes',
      desc: 'What Caledon’s construction sites and distribution centres rely on most.',
      columns: 4,
      items: [
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Building materials and heavy freight unloaded on rural sites with no dock equipment.' },
        { icon: 'Hammer', title: 'Construction Hauling', href: '/services/construction-material-hauling', desc: 'Materials delivered to Caledon job sites and new subdivisions as they’re built out.' },
        { icon: 'Route', title: 'Full Truckload (FTL)', href: '/services/full-truckload-ftl', desc: 'Dedicated trailers point-to-point for the Highway 50 and 410 distribution centres.' },
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Scheduled capacity for Caledon’s large-format warehouses and manufacturers.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Caledon corridors & zones',
      desc: 'Rural, industrial and distribution — we cover the whole township and its growth areas.',
      items: [
        { icon: 'MapPin', title: 'Highway 50 distribution belt', desc: 'The large-format warehouses and fulfilment centres along the Hwy 50 corridor.' },
        { icon: 'Route', title: '410 extension / Mayfield', desc: 'New distribution and commercial development off the 410 and Mayfield Road.' },
        { icon: 'Navigation', title: 'Bolton & Tullamore', desc: 'Industrial and freight lanes connecting Bolton and Tullamore to the GTA.' },
        { icon: 'Hammer', title: 'Aggregate & construction', desc: 'Materials to and from Caledon’s pits, quarries and active building sites.' },
        { icon: 'Globe', title: 'Highway 10 / Orangeville line', desc: 'North-south freight up Hwy 10 toward Orangeville and Dufferin County.' },
        { icon: 'CheckCircle', title: 'Rural site access', desc: 'Moffett unloading on job sites and yards where no dock or forklift is available.' },
      ],
    },

    faqs: [
      { title: 'Do you serve the new distribution centres along Highway 50?', desc: 'Yes — we run dedicated-fleet and full-truckload lanes to the large distribution and fulfilment centres along the Hwy 50 and 410 corridor in Caledon.' },
      { title: 'Can you deliver construction materials to rural Caledon sites?', desc: 'We do. Our Moffett-equipped flatbeds unload themselves, which is ideal for Caledon subdivisions, rural builds and yards without dock equipment.' },
      { title: 'How does Caledon connect to your terminal?', desc: 'Caledon sits directly up the 410 / Highway 50 from our Mississauga terminal, so it’s a straightforward run for both one-off drops and scheduled lanes.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'CALEDON?',
      desc: 'Construction materials, FTL lanes or distribution capacity — dispatch will give you a straight quote.',
    },
  },

  bolton: {
    slug: 'bolton',
    name: 'Bolton',
    region: 'Caledon, Peel Region, Ontario',
    ogImage: '/images/dedicated-fleet-rows.webp',
    imageKey: 'dedicated-fleet-services',

    metaTitle: 'Dedicated Fleet & Distribution Freight in Bolton, ON | Point Zero Road Lines',
    metaDescription:
      'Bolton dedicated fleet, LTL and cross-dock for the Coleraine / Hwy 50 distribution and food-logistics hub. Scheduled lanes minutes from our terminal. Free quote.',
    keywords: [
      'trucking company Bolton',
      'dedicated fleet Bolton',
      'LTL freight Bolton',
      'distribution Bolton',
      'cross-dock Bolton',
      'food logistics Bolton',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'BOLTON, ONTARIO',
    titleLine1: 'DEDICATED FLEET & FREIGHT',
    titleAccent: 'IN BOLTON.',
    description:
      'Bolton’s industrial park off Coleraine Drive and Highway 50 is a serious distribution and food-logistics cluster, and it runs on consistent, scheduled capacity. We move dedicated fleet loops, LTL and cross-dock freight for Bolton operations, with our Mississauga transload facility a short run down the 50.',

    stats: [
      { value: 'Dedicated', label: 'Scheduled fleet loops' },
      { value: 'LTL', label: 'Consolidated partials' },
      { value: 'Hwy 50', label: 'Coleraine industrial access' },
      { value: 'Cross-dock', label: 'Minutes down the 50' },
    ],

    primary: {
      num: '01',
      label: 'Services in Bolton',
      title: 'Distribution-hub capacity',
      desc: 'The services Bolton’s warehouses and food-distribution operations lean on.',
      columns: 4,
      items: [
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Trucks and drivers assigned to Bolton distribution centres on fixed schedules.' },
        { icon: 'Package', title: 'Less-Than-Truckload', href: '/services/less-than-truckload-ltl', desc: 'Partial loads consolidated through our Mississauga cross-dock on scheduled lanes.' },
        { icon: 'Warehouse', title: 'Cross-Dock & Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Transload and stage Bolton freight between legs without it sitting idle.' },
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Self-unloading delivery for Bolton yards and sites without dock equipment.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Bolton zones & corridors',
      desc: 'We run the Bolton industrial grid daily and tie it into the wider GTA network.',
      items: [
        { icon: 'MapPin', title: 'Coleraine industrial park', desc: 'The core Bolton distribution and food-logistics belt off Coleraine Drive.' },
        { icon: 'Route', title: 'Highway 50 corridor', desc: 'The primary freight spine connecting Bolton south to the 427 and 407.' },
        { icon: 'Factory', title: 'Food & beverage DCs', desc: 'Scheduled handling for Bolton’s food-distribution and consumer-goods operations.' },
        { icon: 'Navigation', title: 'King Street / Bolton core', desc: 'Commercial and retail deliveries through the Bolton town centre.' },
        { icon: 'Globe', title: 'Caledon & north Peel', desc: 'Connecting Bolton to the wider Caledon and north-Peel freight lanes.' },
        { icon: 'CheckCircle', title: 'Temperature-aware scheduling', desc: 'Turnaround-driven windows for time-sensitive distribution freight.' },
      ],
    },

    faqs: [
      { title: 'Do you run dedicated lanes to the Bolton industrial park?', desc: 'Yes — dedicated fleet is a core service. We assign trucks, trailers and drivers to Bolton distribution operations on set, repeatable schedules off Highway 50.' },
      { title: 'Can you consolidate LTL freight out of Bolton?', desc: 'We can. Partial loads are consolidated through our Mississauga cross-dock, a short run down the 50, then moved on scheduled lanes.' },
      { title: 'Is Bolton part of your regular service area?', desc: 'Yes. Bolton sits in Caledon within Peel Region and is one of our regularly served distribution hubs, minutes from our terminal via Highway 50.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'BOLTON?',
      desc: 'Dedicated loops, LTL consolidation or cross-dock staging — talk to dispatch about Bolton capacity.',
    },
  },

  burlington: {
    slug: 'burlington',
    name: 'Burlington',
    region: 'Halton Region, Ontario',
    ogImage: '/images/warehouse-crossdock-facility.webp',
    imageKey: 'manufacturing-consumer-goods-freight',

    metaTitle: 'Manufacturing & Flatbed Freight in Burlington, ON | Point Zero Road Lines',
    metaDescription:
      'Burlington dedicated fleet, manufacturing freight, Moffett & LTL along the QEW/403/407 — with USDOT/MC cross-border lanes to the U.S. 24/7 dispatch. Free quote.',
    keywords: [
      'trucking company Burlington',
      'manufacturing freight Burlington',
      'flatbed delivery Burlington',
      'dedicated fleet Burlington',
      'LTL freight Burlington',
      'cross-border trucking Burlington',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'BURLINGTON, ONTARIO',
    titleLine1: 'MANUFACTURING & FLATBED FREIGHT',
    titleAccent: 'IN BURLINGTON.',
    description:
      'Burlington is a manufacturing and building-products town on the QEW, where Halton meets Hamilton’s industrial base and the Niagara cross-border run. We move dedicated fleet, manufacturing LTL/FTL and Moffett flatbed freight across Aldershot and the north-Burlington business parks — and carry USDOT 3983391 / MC 1492151 authority for loads heading stateside.',

    stats: [
      { value: 'Manufacturing', label: 'LTL & FTL capacity' },
      { value: 'QEW · 403 · 407', label: 'Corridor access' },
      { value: 'Cross-border', label: 'USDOT 3983391 · MC 1492151' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Services in Burlington',
      title: 'Industrial freight, moved right',
      desc: 'What Burlington’s manufacturers and building-product suppliers depend on.',
      columns: 4,
      items: [
        { icon: 'Factory', title: 'Manufacturing Freight', href: '/services/manufacturing-consumer-goods-freight', desc: 'LTL and FTL capacity that moves with Burlington production and distribution schedules.' },
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Assigned trucks and drivers for Aldershot and north-Burlington plants.' },
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Self-unloading delivery of building products and industrial freight with no dock.' },
        { icon: 'Package', title: 'Less-Than-Truckload', href: '/services/less-than-truckload-ltl', desc: 'Consolidated partials on scheduled lanes through our Mississauga cross-dock.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Burlington zones & corridors',
      desc: 'From the QEW industrial spine to the cross-border lanes, we cover the city and beyond.',
      items: [
        { icon: 'MapPin', title: 'Aldershot & north Burlington', desc: 'Manufacturing and building-product plants across the north-Burlington business parks.' },
        { icon: 'Route', title: 'QEW industrial spine', desc: 'The core freight corridor linking Burlington to Oakville, Mississauga and Hamilton.' },
        { icon: 'Navigation', title: 'Highway 403 / 407', desc: 'Cross-GTA and Niagara-direction lanes via the 403 and 407 ETR.' },
        { icon: 'Factory', title: 'Hamilton port & steel belt', desc: 'Freight connecting Burlington to the Hamilton harbour and steel industry next door.' },
        { icon: 'Globe', title: 'Niagara & U.S. crossings', desc: 'Cross-border runs down the QEW to Fort Erie / Buffalo and beyond.' },
        { icon: 'CheckCircle', title: 'Building-product delivery', desc: 'Moffett placement for Burlington’s building-supply and distribution customers.' },
      ],
    },

    faqs: [
      { title: 'Do you handle manufacturing freight in Burlington?', desc: 'Yes — manufacturing and consumer-goods freight is a core service. We provide LTL and FTL capacity that moves with Burlington production and distribution schedules.' },
      { title: 'Can you take Burlington loads across the U.S. border?', desc: 'We can. Point Zero holds USDOT 3983391 and MC 1492151 authority and runs cross-border lanes down the QEW toward the Niagara and Michigan crossings.' },
      { title: 'Which Burlington areas do you cover?', desc: 'All of Burlington — Aldershot and the north-Burlington industrial parks — along the QEW, 403 and 407, dispatched from our Mississauga terminal.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'BURLINGTON?',
      desc: 'Manufacturing lanes, flatbed drops or a cross-border run — dispatch is live 24/7 for Halton freight.',
    },
  },

  'richmond-hill': {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    region: 'York Region, Ontario',
    ogImage: '/images/flatbed-construction-haul.webp',
    imageKey: 'last-mile-delivery',

    metaTitle: 'Last-Mile & Flatbed Delivery in Richmond Hill, ON | Point Zero Road Lines',
    metaDescription:
      'Richmond Hill last-mile, Moffett & construction delivery for commercial, retail and residential builds along the 404/407 and Yonge. 24/7 dispatch. Free quote.',
    keywords: [
      'last mile delivery Richmond Hill',
      'flatbed delivery Richmond Hill',
      'Moffett delivery Richmond Hill',
      'trucking company Richmond Hill',
      'construction delivery Richmond Hill',
      'freight Richmond Hill',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'RICHMOND HILL, ONTARIO',
    titleLine1: 'LAST-MILE & FLATBED DELIVERY',
    titleAccent: 'IN RICHMOND HILL.',
    description:
      'Richmond Hill is commercial, retail and residential growth along Yonge and the 404 — low-rise and mid-rise builds, business parks and busy storefronts. We handle final-leg last-mile delivery and Moffett flatbed drops for sites that need freight placed precisely, not just dropped at a dock.',

    stats: [
      { value: 'Last-mile', label: 'Final-leg to the door' },
      { value: '404 · 407 · Yonge', label: 'Corridor access' },
      { value: 'No-dock', label: 'Self-unloading Moffett' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Services in Richmond Hill',
      title: 'Precise, final-leg delivery',
      desc: 'The services Richmond Hill’s commercial and residential sites rely on.',
      columns: 4,
      items: [
        { icon: 'Store', title: 'Last Mile Delivery', href: '/services/last-mile-delivery', desc: 'Final-leg delivery to retail, residential and commercial sites at the exact point of need.' },
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Self-unloading delivery for builds and storefronts with no dock or forklift.' },
        { icon: 'Hammer', title: 'Construction Hauling', href: '/services/construction-material-hauling', desc: 'Materials placed where Richmond Hill job sites actually need them.' },
        { icon: 'Timer', title: 'Expedited & Same-Day', href: '/services/expedited-same-day-freight', desc: 'Hot-shot runs up the 404 when a shipment can’t wait.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Richmond Hill zones & corridors',
      desc: 'From the Beaver Creek business park to the Yonge retail strip, we cover the city.',
      items: [
        { icon: 'MapPin', title: 'Beaver Creek business park', desc: 'Commercial and light-industrial deliveries off Highway 404 and 16th Avenue.' },
        { icon: 'Route', title: 'Highway 404 / 407', desc: 'Fast north-south and cross-GTA access for timed Richmond Hill runs.' },
        { icon: 'Navigation', title: 'Yonge Street corridor', desc: 'Retail and commercial last-mile along the busy Yonge spine.' },
        { icon: 'Store', title: 'Retail & residential', desc: 'Final-leg delivery to stores and residential builds across the city.' },
        { icon: 'Hammer', title: 'Mid-rise construction', desc: 'Material drops for Richmond Hill’s low- and mid-rise development sites.' },
        { icon: 'Clock', title: 'Timed windows', desc: 'Early and off-peak delivery scheduling to beat 404/Yonge congestion.' },
      ],
    },

    faqs: [
      { title: 'Do you do last-mile delivery in Richmond Hill?', desc: 'Yes — last-mile is a core service. We handle the final leg to retail, residential and commercial sites across Richmond Hill, placing freight at the exact point of need.' },
      { title: 'Can you deliver to Richmond Hill sites with no loading dock?', desc: 'We can. Our Moffett-equipped flatbeds self-unload, so storefronts, builds and sites without a dock or forklift are no problem.' },
      { title: 'How do you handle Yonge and 404 congestion?', desc: 'With 24/7 live dispatch we schedule early-morning and off-peak windows and route around the busiest stretches of the 404 and Yonge.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'RICHMOND HILL?',
      desc: 'A precise last-mile drop or a no-dock site — tell us where it needs to go and dispatch will quote it.',
    },
  },

  markham: {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region, Ontario',
    ogImage: '/images/dedicated-fleet-highway.webp',
    imageKey: '24-7-after-hours-weekend-dispatch',

    metaTitle: 'Dedicated Fleet & Distribution Freight in Markham, ON | Point Zero Road Lines',
    metaDescription:
      'Markham dedicated fleet, last-mile, cross-dock & expedited freight for the city’s tech, corporate and distribution base along the 404/407/Hwy 7. 24/7. Free quote.',
    keywords: [
      'trucking company Markham',
      'dedicated fleet Markham',
      'last mile delivery Markham',
      'cross-dock Markham',
      'distribution Markham',
      'freight Markham',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'MARKHAM, ONTARIO',
    titleLine1: 'DEDICATED FLEET & DISTRIBUTION',
    titleAccent: 'IN MARKHAM.',
    description:
      'Markham pairs a large corporate and tech base with serious warehousing and distribution around Milliken and the 404/407. That mix needs reliable, scheduled capacity and sharp last-mile service. We run dedicated fleet loops, cross-dock support and expedited freight across the city, dispatched 24/7.',

    stats: [
      { value: 'Dedicated', label: 'Scheduled fleet loops' },
      { value: '404 · 407 · 7', label: 'Corridor access' },
      { value: 'Cross-dock', label: 'Consolidation & staging' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Services in Markham',
      title: 'Capacity + precision',
      desc: 'What Markham’s distribution, corporate and retail operations rely on.',
      columns: 4,
      items: [
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Assigned trucks and drivers for Markham distribution centres on set schedules.' },
        { icon: 'Store', title: 'Last Mile Delivery', href: '/services/last-mile-delivery', desc: 'Final-leg delivery to Markham retail, corporate and residential addresses.' },
        { icon: 'Warehouse', title: 'Cross-Dock & Storage', href: '/services/warehouse-cross-dock-storage', desc: 'Consolidate and stage Markham freight between legs at our Mississauga facility.' },
        { icon: 'Timer', title: 'Expedited & Same-Day', href: '/services/expedited-same-day-freight', desc: 'Hot-shot freight across York Region when a load can’t wait.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Local coverage',
      title: 'Markham zones & corridors',
      desc: 'From the Milliken industrial belt to the corporate parks, we cover the whole city.',
      items: [
        { icon: 'MapPin', title: 'Milliken industrial', desc: 'Warehousing and distribution across the Milliken and Steeles employment lands.' },
        { icon: 'Route', title: 'Highway 404 / 407', desc: 'North-south and cross-GTA lanes for timed Markham deliveries.' },
        { icon: 'Navigation', title: 'Highway 7 / Markham Centre', desc: 'Corporate and commercial freight along the Hwy 7 spine and Markham Centre.' },
        { icon: 'Factory', title: 'Tech & corporate parks', desc: 'Scheduled logistics for the office and technology campuses around Woodbine/404.' },
        { icon: 'Store', title: 'Retail & residential', desc: 'Last-mile delivery to stores and residential communities across Markham.' },
        { icon: 'CheckCircle', title: 'No-dock unloading', desc: 'Moffett placement for Markham sites and yards without dock equipment.' },
      ],
    },

    faqs: [
      { title: 'Do you run dedicated lanes for Markham distribution centres?', desc: 'Yes — dedicated fleet is a core service. We assign trucks, trailers and drivers to Markham operations on repeatable schedules planned around your dock and volume.' },
      { title: 'Can you do last-mile and same-day across Markham?', desc: 'We can. We handle final-leg last-mile delivery and, when a load can’t wait, expedited same-day runs across Markham and York Region with 24/7 dispatch.' },
      { title: 'Which Markham areas do you serve?', desc: 'All of Markham — Milliken, Markham Centre, Unionville and the Highway 7 corridor — off the 404 and 407, dispatched from our Mississauga terminal.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING IN',
      titleAccent: 'MARKHAM?',
      desc: 'Dedicated capacity, cross-dock support or a same-day run — talk to dispatch about Markham freight.',
    },
  },

  ontario: {
    slug: 'ontario',
    name: 'Ontario',
    region: 'Province of Ontario',
    ogImage: '/images/flatbed-highway-ad.webp',
    imageKey: 'cross-border-freight',

    metaTitle: 'Ontario-Wide Trucking, Flatbed & Cross-Border Freight | Point Zero Road Lines',
    metaDescription:
      'Province-wide freight across Ontario — flatbed, Moffett, dedicated fleet & FTL on the 401, 400, QEW and 417, plus USDOT/MC cross-border lanes to the U.S. Free quote.',
    keywords: [
      'trucking company Ontario',
      'flatbed transport Ontario',
      'Moffett delivery Ontario',
      'freight Ontario',
      'cross-border trucking Ontario',
      'FTL carrier Ontario',
    ],

    badge: 'SERVICE AREA',
    badgeAlt: 'PROVINCE OF ONTARIO',
    titleLine1: 'FREIGHT ACROSS',
    titleAccent: 'ONTARIO.',
    description:
      'Beyond the GTA, we run freight the length of the province — the 401 spine from Windsor to the Montreal connector, the 400 north to cottage country, the QEW through Niagara and the 417 into Ottawa. Flatbed, Moffett, dedicated fleet and full-truckload capacity, backed by USDOT 3983391 / MC 1492151 authority for cross-border lanes into the United States.',

    stats: [
      { value: 'All Ontario', label: 'GTA to the provincial lines' },
      { value: '400-series', label: '401 · 400 · QEW · 417' },
      { value: 'Cross-border', label: 'USDOT 3983391 · MC 1492151' },
      { value: '24/7', label: 'Live dispatch' },
    ],

    primary: {
      num: '01',
      label: 'Province-wide services',
      title: 'Long lanes, full coverage',
      desc: 'The services that move freight across Ontario and across the border.',
      columns: 4,
      items: [
        { icon: 'Route', title: 'Full Truckload (FTL)', href: '/services/full-truckload-ftl', desc: 'Dedicated trailers point-to-point on long Ontario lanes — flatbed, dry van or Moffett.' },
        { icon: 'Users', title: 'Dedicated Fleet', href: '/services/dedicated-fleet-services', desc: 'Scheduled capacity and routing for shippers moving freight across the province.' },
        { icon: 'Forklift', title: 'Moffett & Flatbed', href: '/services/flatbed-moffett-transport', desc: 'Self-unloading delivery to sites anywhere in Ontario with no dock or crane.' },
        { icon: 'Timer', title: 'Expedited & Same-Day', href: '/services/expedited-same-day-freight', desc: 'Time-critical runs on Ontario’s main corridors when a shipment can’t wait.' },
      ],
    },

    dark: {
      num: '02',
      label: 'Provincial corridors',
      title: 'The lanes we run daily',
      desc: 'Ontario’s freight backbone, connected to our Mississauga hub and the U.S. border.',
      items: [
        { icon: 'Route', title: 'Highway 401 spine', desc: 'Windsor and London through the GTA to the Kingston and Montreal connector.' },
        { icon: 'Navigation', title: 'Highway 400 north', desc: 'Barrie, Simcoe County and cottage-country freight up the 400.' },
        { icon: 'Globe', title: 'QEW / Niagara', desc: 'Hamilton, the Niagara Peninsula and the Fort Erie / Buffalo border.' },
        { icon: 'MapPin', title: 'Highway 417 / Ottawa', desc: 'Scheduled runs connecting the GTA to Eastern Ontario and the capital.' },
        { icon: 'Factory', title: 'Southwestern Ontario', desc: 'Kitchener-Waterloo, Cambridge, Guelph, London and Windsor manufacturing lanes.' },
        { icon: 'Truck', title: 'Cross-border to the U.S.', desc: 'USDOT / MC authority into Michigan, New York, Ohio and Pennsylvania.' },
      ],
    },

    faqs: [
      { title: 'Do you deliver outside the GTA across Ontario?', desc: 'Yes — we run freight province-wide on the 401, 400, QEW and 417, from Southwestern Ontario through the GTA to Eastern Ontario and Ottawa.' },
      { title: 'Can you handle cross-border freight from Ontario?', desc: 'We can. Point Zero holds USDOT 3983391 and MC 1492151 authority and runs cross-border lanes into Michigan, New York, Ohio and Pennsylvania.' },
      { title: 'What kind of Ontario-wide capacity do you offer?', desc: 'Full-truckload and dedicated-fleet lanes for long hauls, plus flatbed, Moffett and expedited service — all dispatched 24/7 from our Mississauga terminal.' },
    ],

    cta: {
      titleLine1: 'FREIGHT MOVING ACROSS',
      titleAccent: 'ONTARIO?',
      desc: 'Long provincial lanes or a cross-border run — tell us the route and dispatch will quote it.',
    },
  },
};

export const CITY_SLUGS = Object.keys(CITIES);

export function getCity(slug) {
  return CITIES[slug] || null;
}

// Cross-links shown in the "related" rail of each city page: the sibling cities
// plus the service-areas hub, so the city cluster interlinks for crawlers.
export function getCityRelated(slug) {
  const siblings = CITY_SLUGS.filter((s) => s !== slug).map((s) => ({
    title: `${CITIES[s].name} service area`,
    href: `/service-areas/${s}`,
    desc: CITIES[s].metaDescription,
  }));
  return [
    ...siblings,
    {
      title: 'All service areas',
      href: '/service-areas',
      desc: 'Every region and corridor Point Zero Road Lines covers across Ontario and cross-border.',
    },
  ];
}
