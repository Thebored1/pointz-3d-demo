"use client";
import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Phone,
  Mail,
  Gauge,
  Move,
  Truck,
  HardHat,
  Layers,
  MapPin,
  Users,
  Building2,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { MOFFETT_FAQS } from './moffettFaqs';
import {
  Reveal,
  SectionHead,
  CtaButtons,
  CenterCta,
  FeatureGrid,
  MiniGrid,
  CheckList,
  StepGrid,
  ComparisonTable,
  FaqAccordion,
  RelatedServices,
  FinalCta,
  QUOTE_HREF,
  TEL_HREF,
  MAIL_HREF,
} from './servicePillar/blocks';
import '../app/about/AboutPage.css';

// Copy on this page is reproduced verbatim from MOFFETT_PAGE_DRAFT.md (the
// client-approved source). Do not paraphrase section text without approval.
// Layout is composed from the shared servicePillar block library.

const QUOTE_LABEL = 'Request a Moffett Delivery Quote';

const whyChoose = [
  { icon: Gauge, title: 'Up to 5,500-Lb Moffett Lifting Capacity', desc: 'Our Moffett-equipped trucks offer lifting capacity of up to 5,500 lbs, subject to the specific load, equipment configuration and operating requirements.' },
  { icon: Move, title: '2-Way and 4-Way Moffett Forklifts', desc: 'Point Zero operates both 2-way and 4-way Moffett units, providing flexibility for different unloading and material-placement requirements.' },
  { icon: Truck, title: 'Flatbed + Truck-Mounted Forklift', desc: 'Your freight travels on a flatbed equipped with the unloading equipment required for eligible Moffett deliveries.' },
  { icon: HardHat, title: 'Construction-Site Delivery Capability', desc: 'Our Moffett-equipped trucks can support deliveries to suitable construction and jobsite locations, including sites with gravel or uneven ground.' },
  { icon: Layers, title: 'Flexible Delivery Solutions', desc: 'Moffett delivery can be a practical option for locations without conventional loading docks or onsite forklifts.' },
  { icon: MapPin, title: 'GTA-Wide Delivery', desc: 'Point Zero provides Moffett delivery services throughout the Greater Toronto Area, serving businesses, contractors, suppliers and commercial customers.' },
  { icon: Users, title: 'Professional Drivers', desc: 'Our drivers handle the transportation and onsite unloading process with attention to the load, delivery location and site requirements.' },
  { icon: Building2, title: 'Commercial & Residential Delivery', desc: 'We support both commercial and residential deliveries where the load and site are suitable for Moffett unloading.' },
];

const deliverGroups = [
  {
    title: 'Construction & Building Materials',
    lead: 'Point Zero provides delivery for eligible materials such as:',
    items: ['Lumber', 'Drywall', 'Roofing materials', 'Steel', 'Building materials', 'Concrete products', 'Palletized construction materials', 'Other jobsite materials'],
  },
  {
    title: 'Equipment & Machinery',
    lead: 'We can also support eligible deliveries involving:',
    items: ['Construction equipment', 'Machinery', 'HVAC equipment', 'Industrial equipment', 'Commercial equipment', 'Palletized equipment', 'Other suitable machinery and materials'],
  },
  {
    title: 'Landscaping & Outdoor Materials',
    lead: 'Moffett delivery can also be used for suitable landscaping and outdoor materials, including:',
    items: ['Pavers', 'Stone', 'Landscaping materials', 'Palletized outdoor products'],
  },
  {
    title: 'Retail & Commercial Freight',
    lead: 'For retailers and commercial businesses, Moffett-equipped flatbeds can provide delivery and onsite unloading for suitable:',
    items: ['Palletized products', 'Commercial goods', 'Equipment', 'Oversized products', 'Other eligible freight'],
  },
];

const audienceBlocks = [
  {
    label: 'Construction sites',
    title: 'Moffett Delivery for Construction Sites',
    intro: 'Construction sites often present delivery challenges that are not found at traditional commercial loading locations. There may be no loading dock, limited unloading equipment, gravel access or a requirement to move materials closer to where they will be used.',
    intro2: 'Point Zero provides Moffett-equipped flatbed delivery for construction materials and jobsite deliveries throughout the GTA.',
    points: [
      ['Construction Material Delivery to Jobsites', 'We transport eligible building and construction materials directly to jobsite locations, helping contractors and project teams coordinate material deliveries around their work requirements.'],
      ['Delivery Where There Is No Loading Dock', 'A Moffett-equipped truck can provide an unloading solution for suitable locations where conventional dock access is unavailable.'],
      ['Delivery on Gravel and Uneven Ground', 'Moffett forklifts can operate in suitable outdoor environments, including certain gravel and uneven-ground conditions. Site conditions should be discussed when arranging delivery.'],
      ['Material Placement at the Delivery Site', 'Where site access and operating conditions allow, our driver can unload and move eligible materials toward the required delivery area.'],
      ['Planning Delivery Access Before Your Truck Arrives', 'Providing accurate site information in advance helps us assess the delivery requirements and determine whether the Moffett can safely access the intended unloading area.'],
      ['Coordinating Deliveries Across Project Phases', 'We can help coordinate staged or recurring material deliveries as your project progresses, subject to scheduling, availability and site access.'],
    ],
    ctaLabel: 'Planning a Construction-Site Delivery? Request a Quote',
  },
  {
    label: 'Equipment & machinery',
    title: 'Moffett Delivery for Equipment & Machinery',
    intro: 'Equipment and machinery deliveries can require more than simply transporting a load from one location to another.',
    intro2: 'For suitable loads, a Moffett-equipped flatbed provides transportation together with onsite unloading capability, helping businesses coordinate delivery to commercial, industrial and construction locations.',
    points: [
      ['Equipment Delivery With Onboard Unloading', 'The Moffett travels with the truck, reducing the need to arrange separate unloading equipment at the destination.'],
      ['Machinery Delivery to Commercial & Industrial Sites', 'Point Zero can support eligible machinery and equipment deliveries to suitable commercial and industrial locations throughout the GTA.'],
      ['Construction Equipment Delivery', 'For construction companies and equipment suppliers, Moffett delivery can provide a practical solution for getting eligible equipment and materials directly to the jobsite.'],
      ['Equipment Placement at the Delivery Location', 'Where access and site conditions permit, the Moffett can be used to unload and move eligible equipment or materials toward the required placement area.'],
    ],
    ctaLabel: 'Request an Equipment Delivery Quote',
  },
  {
    label: 'Retail & commercial',
    title: 'Moffett Delivery for Retailers & Commercial Locations',
    intro: 'Retailers, suppliers and commercial businesses may need to deliver palletized or oversized products to locations without conventional dock facilities.',
    intro2: 'A Moffett-equipped flatbed can provide transportation and onsite unloading for suitable loads.',
    points: [
      ['Palletized Freight Delivery', 'Our Moffett-equipped trucks can handle suitable palletized freight within the applicable weight and equipment requirements.'],
      ['Commercial Deliveries Without a Loading Dock', 'Where site access permits, Moffett delivery provides an alternative to relying on conventional dock unloading.'],
      ['On-Site Unloading With a Moffett Forklift', 'The forklift travels with the delivery truck, allowing our driver to unload eligible freight at the destination.'],
      ['Oversized & Bulky Product Delivery', 'Moffett-equipped flatbeds can handle suitable oversized or bulky products that may be difficult to unload with conventional equipment, subject to weight, equipment and site conditions.'],
    ],
    ctaLabel: 'Request a Commercial Delivery Quote',
  },
];

const processSteps = [
  ['1', 'Request Your Moffett Delivery Quote', 'Tell us where the load is being picked up, where it needs to go and when you need it delivered.'],
  ['2', 'Provide Your Load & Delivery Details', 'Share the material type, approximate weight, dimensions and any relevant handling requirements.'],
  ['3', 'Confirm Site Access & Placement Requirements', "We'll need to understand the delivery site's access, ground conditions, available operating space and intended placement area."],
  ['4', 'We Pick Up Your Material', 'Our Moffett-equipped flatbed arrives at the pickup location and transports the load to its destination.'],
  ['5', 'We Deliver With a Moffett-Equipped Flatbed', 'The Moffett travels with the truck, providing onsite unloading capability for eligible deliveries.'],
  ['6', 'We Unload and Position the Load Where Accessible', 'Where site conditions permit, our driver unloads the material and moves it toward the required delivery area.'],
];

const siteRequirements = [
  ['Truck Access', 'The delivery location must provide suitable access for the flatbed truck to enter and reach the unloading area.'],
  ['Moffett Operating Space', 'The Moffett requires sufficient space to enter, maneuver and operate safely. Let us know about any tight access areas or placement requirements before delivery.'],
  ['Ground Conditions', 'Moffett forklifts can operate in suitable outdoor environments, including certain gravel and uneven-ground conditions. Actual suitability depends on the site and operating conditions.'],
  ['Overhead & Site Clearance', 'Identify potential obstructions such as overhead structures, trees, power lines or other obstacles before delivery.'],
  ['Load Dimensions, Weight & Placement', 'Load dimensions, weight and the intended placement area help determine whether the delivery can be completed safely and which Moffett configuration is appropriate.'],
  ['Placement Area Confirmation', 'Confirming the intended placement area in advance helps our team determine whether the load can be positioned where you need it, subject to access and safe operating space.'],
];

const cityCoverage = [
  ['Moffett Delivery in Toronto', 'Moffett-equipped flatbed delivery for suitable construction, equipment, machinery and commercial loads throughout Toronto.'],
  ['Moffett Delivery in Mississauga', 'Reliable Moffett delivery for businesses, suppliers, construction sites and commercial locations throughout Mississauga.'],
  ['Moffett Delivery in Brampton', 'Moffett-equipped flatbed transportation and onsite unloading for eligible materials, equipment and machinery in Brampton.'],
  ['Moffett Delivery in Vaughan', 'Moffett delivery solutions for construction, industrial and commercial locations throughout Vaughan and surrounding areas.'],
];

const comparisonRows = [
  ['May require unloading equipment at the destination', 'Moffett travels with the truck'],
  ['Often benefits from dock access', 'Can serve suitable non-dock locations'],
  ['Separate forklift coordination may be required', 'Onboard unloading capability'],
  ['Material may need to be unloaded at a designated dock or area', 'Eligible loads can be moved toward the required placement area'],
  ['Less flexibility where unloading equipment is unavailable', 'Greater flexibility for suitable jobsites and commercial locations'],
];

const whichFactors = ['Load weight', 'Load dimensions', 'Delivery location', 'Ground conditions', 'Available access', 'Required placement', 'Available operating space'];

export default function MoffettFlatbedPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · MOFFETT & FLATBED"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="MOFFETT TRUCK DELIVERY &"
        titleAccent="FLATBED SERVICE IN THE GTA."
        description="Point Zero Road Lines provides Moffett-equipped flatbed delivery throughout the Greater Toronto Area (GTA) for construction materials, equipment, machinery, palletized freight and other eligible loads. Our Moffett-equipped trucks provide onsite unloading capability, making them a practical solution for delivery locations where conventional loading docks or unloading equipment may not be available."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/moffett-construction-unload.webp"
        heroAlt="Point Zero Road Lines Moffett-equipped flatbed delivery in the GTA"
        heroPosition="center"
      />

      {/* Heading first (right after the hero), then copy, then CTAs at the bottom */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Moffett Delivery Without an On-Site Forklift" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                With Moffett lifting capacity up to 5,500 lbs and both 2-way and 4-way Moffett forklift
                options, we can accommodate a range of delivery and material-placement requirements.
              </p>
              <p>When your delivery site does not have a forklift or loading dock, arranging separate unloading equipment can add time, cost and coordination to your project.</p>
              <p>A Moffett-equipped flatbed brings the forklift with the delivery truck. Once onsite, our driver can unload eligible materials and equipment and position them where accessible, subject to site conditions, load requirements and safe operating space.</p>
              <p>This makes Moffett delivery particularly useful for construction sites, commercial properties, equipment deliveries and locations where traditional dock delivery is not practical.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Flatbed + truck-mounted Moffett */}
      <section className="mf-section mf-band">
        <div className="pz-container mf-prose-grid">
          <SectionHead num="02" label="The equipment" title="Flatbed Delivery With a Truck-Mounted Moffett" />
          <div className="mf-prose">
            <Reveal>
              <p>The combination of a flatbed truck and truck-mounted Moffett forklift provides both transportation and onsite unloading capability in one delivery solution.</p>
              <h3 className="mf-subhead">Unload and Position Eligible Materials at the Delivery Site</h3>
              <p>Depending on the load and site conditions, the Moffett can be used to unload materials from the flatbed and move them toward the required delivery area.</p>
              <p>Adequate access and operating space are required for the Moffett to safely enter and maneuver at the delivery location.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose Point Zero */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Why Point Zero" title="Why Choose Point Zero for Moffett Delivery?" />
          <FeatureGrid cols={4} items={whyChoose} />
          <CenterCta label="Talk to Our Moffett Delivery Team" />
        </div>
      </section>

      {/* 2-way & 4-way */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Equipment options" title="2-Way & 4-Way Moffett Forklift Options"
            desc="Different delivery sites can require different approaches to material handling. Point Zero offers both 2-way and 4-way Moffett forklift options to provide greater flexibility when planning your delivery." />
          <div className="mf-grid mf-grid-2">
            <Reveal className="mf-card mf-card--lg">
              <h3>2-Way Moffett Forklift</h3>
              <p>Our 2-way Moffett units provide forward and backward movement and are suited to a range of standard unloading and material-placement applications.</p>
            </Reveal>
            <Reveal className="mf-card mf-card--lg" custom={1}>
              <h3>4-Way Moffett Forklift</h3>
              <p>Our 4-way Moffett units provide forward and backward movement along with lateral movement. This additional maneuverability can be beneficial when positioning loads in more challenging or space-sensitive delivery environments.</p>
            </Reveal>
          </div>
          <Reveal className="mf-callout">
            <h3 className="mf-subhead">Which Moffett Is Right for Your Delivery?</h3>
            <p>The appropriate equipment depends on factors such as:</p>
            <CheckList items={whichFactors} cols />
            <p>When requesting a quote, provide as much information as possible about the load and delivery site so our team can help determine the appropriate delivery solution. You can also browse our full <Link href="/fleet-and-equipment" className="mf-inline-link">fleet &amp; equipment</Link>.</p>
            <a href={TEL_HREF} className="mf-btn mf-btn--line"><Phone size={15} /> Discuss Your Delivery Requirements</a>
          </Reveal>
        </div>
      </section>

      {/* What can we deliver */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Freight types" title="What Can We Deliver With a Moffett?"
            desc="Moffett-equipped flatbed delivery can be used for a wide range of eligible construction, commercial and industrial freight." />
          <div className="mf-grid mf-grid-2">
            {deliverGroups.map((g, i) => (
              <Reveal key={g.title} className="mf-card mf-card--list" custom={i}>
                <h3>{g.title}</h3>
                <p className="mf-card-lead">{g.lead}</p>
                <CheckList items={g.items} />
              </Reveal>
            ))}
          </div>
          <p className="mf-note">If you&rsquo;re unsure whether your material is suitable for Moffett delivery, contact our team with the load details. For equipment and machinery specifically, see our <Link href="/services/equipment-machinery-delivery" className="mf-inline-link">equipment &amp; machinery delivery</Link>.</p>
          <CenterCta label="Check Your Load With Point Zero" />
        </div>
      </section>

      {/* Audience deep-dives */}
      {audienceBlocks.map((b, idx) => (
        <section key={b.title} className={`mf-section${idx % 2 === 0 ? ' mf-band' : ''}`}>
          <div className="pz-container">
            <SectionHead num={String(6 + idx).padStart(2, '0')} label={b.label} title={b.title} />
            <div className="mf-prose mf-prose--wide">
              <Reveal>
                <p>{b.intro}</p>
                <p>{b.intro2}</p>
              </Reveal>
            </div>
            <MiniGrid items={b.points} />
            <CenterCta label={b.ctaLabel} />
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="09" label="How it works" title="How Moffett Delivery Works" desc="We keep the process straightforward from quote to delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start Your Moffett Delivery Quote" />
        </div>
      </section>

      {/* Site requirements */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="10" label="Site & access" title="Moffett Delivery Site & Access Requirements"
            desc="A successful Moffett delivery begins with understanding the delivery site. Because the Moffett must be able to safely enter and operate at the destination, customers should provide accurate information about the site when requesting a quote." />
          <MiniGrid items={siteRequirements} />
          <p className="mf-note">Not Sure if Your Site Is Suitable? Contact Our Team Before Booking.</p>
        </div>
      </section>

      {/* GTA coverage */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="11" label="Service area" title="Moffett Delivery Across the GTA"
            desc="Point Zero provides Moffett truck delivery and flatbed Moffett service throughout the Greater Toronto Area, supporting construction companies, equipment suppliers, retailers and commercial customers." />
          <MiniGrid items={cityCoverage} />
          <p className="mf-note">Point Zero also serves customers throughout surrounding GTA communities, including Milton, Oakville, Burlington, Etobicoke, Concord, Markham, Richmond Hill, North York, Scarborough, Pickering, Ajax, Whitby and Oshawa. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="Request a GTA Moffett Delivery Quote" />
        </div>
      </section>

      {/* Comparison table (the "Why Use a Moffett Flatbed" section was removed as
          it restated the benefits already covered in the intro, Why-Choose and
          this comparison — trimming ~20% of overlap per the SEO review). */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="12" label="Comparison" title="Moffett vs. Traditional Flatbed Delivery" />
          <ComparisonTable heads={['Traditional Flatbed Delivery', 'Moffett-Equipped Flatbed Delivery']} rows={comparisonRows} />
          <p className="mf-note">The right delivery method depends on the load, site conditions and placement requirements. Our team can help determine whether Moffett delivery is suitable for your shipment.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="13" label="FAQ" title="Frequently Asked Questions About Moffett Delivery" />
          <FaqAccordion items={MOFFETT_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="14" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('flatbed-moffett-transport')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Tell Us About Your Delivery"
        title="Request a Moffett Delivery Quote in the GTA"
        paragraphs={[
          'Need a Moffett truck for your next delivery in the GTA?',
          'Send Point Zero Road Lines your pickup and delivery details, along with information about the load and delivery site. Our team will review the requirements and help determine the appropriate Moffett delivery solution.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Moffett Delivery Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
