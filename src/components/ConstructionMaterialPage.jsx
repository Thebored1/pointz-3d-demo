"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Hammer, Truck, Shield, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { CONSTRUCTION_FAQS } from './constructionFaqs';
import {
  Reveal,
  SectionHead,
  CtaButtons,
  CenterCta,
  FeatureGrid,
  MiniGrid,
  StepGrid,
  FaqAccordion,
  RelatedServices,
  FinalCta,
  QUOTE_HREF,
  TEL_HREF,
  MAIL_HREF,
} from './servicePillar/blocks';
import '../app/about/AboutPage.css';

// Built on the shared servicePillar block library. Copy reuses Point Zero's
// already-published construction content plus hedged phrasing per the
// fact-handling rule (SERVICE_PILLAR_PLAN §3a). Confirm operational specifics
// before publishing.

const QUOTE_LABEL = 'Request a Delivery Quote';
const MOFFETT_HREF = '/services/flatbed-moffett-transport';

const capabilities = [
  { icon: Hammer, title: 'Direct Job-Site Spotting', desc: 'Where access allows, materials are spotted along foundation lines, framing bays or garage pads to reduce trade re-handling.' },
  { icon: Truck, title: 'Rough-Terrain Offloading', desc: 'Moffett forklifts can navigate suitable unpaved ground, gravel and active subdivision work zones, subject to site conditions.' },
  { icon: Shield, title: 'Tarping & Weather Protection', desc: 'Drop tarps and roll-tite flatbeds help keep drywall, insulation and finished timber protected from the elements in transit.' },
  { icon: Clock, title: 'Early Morning Site Drops', desc: 'Staged from our Mississauga terminal for early arrival, ahead of site congestion — subject to scheduling and access.' },
];

const materials = [
  ['Lumber & Engineered Wood', 'Framing packages, trusses, studs and plywood delivered and spotted near the crew where access allows.'],
  ['Drywall, Sheathing & Insulation', 'Weather-protected skids placed at direct entryways for efficient interior boarding.'],
  ['Roofing Materials & Shingles', 'Bundles of asphalt shingles, modified bitumen rolls and metal roofing staged for hoisting.'],
  ['Brick, Block & Precast Concrete', 'Pallets of brick, stone, concrete steps and block placed along building perimeter lines where accessible.'],
  ['Structural Steel & Rebar', 'Heavy open-deck transport secured to MTO/DOT standards and unloaded with care.'],
  ['Commercial Glazing & Windows', 'Crated glass units and architectural metal delivered with cushioned, stable transport.'],
  ['Landscape Products & Interlock', 'Sod, aggregate, pavers and interlock blocks delivered and spotted on site — dock or no dock.'],
  ['HVAC Equipment', 'RTUs, chillers and mechanical equipment delivered on schedule with Moffett offloading.'],
];

const jobsitePoints = [
  ['Delivery to Sites With No Loading Dock', 'A Moffett-equipped truck can provide an unloading solution for suitable job sites where conventional dock access is unavailable.'],
  ['Spotting Materials at the Work Area', 'Where site access and operating space allow, our driver can move eligible materials toward the foundation, framing bay or staging point.'],
  ['Active Subdivision & Rough-Terrain Access', 'Moffett forklifts can operate on suitable gravel and uneven ground; site conditions should be discussed when arranging delivery.'],
  ['Weather Protection in Transit', 'Suitable loads can be tarped or carried on roll-tite trailers to help protect materials from the elements.'],
  ['Early-Morning Scheduling', 'Deliveries can be staged for early arrival before site access gates become congested, subject to availability.'],
  ['Secured to MTO/DOT Standards', 'Open-deck loads such as steel and rebar are secured to applicable MTO/DOT standards for safe transport.'],
];

const processSteps = [
  ['1', 'Request Your Delivery Quote', 'Tell us the pickup and job-site locations, and when the materials need to arrive.'],
  ['2', 'Provide Material & Site Details', 'Share the material type, approximate weight and dimensions, and any handling requirements.'],
  ['3', 'Confirm Site Access & Placement', "We'll review the site's access, ground conditions, operating space and where the material should be placed."],
  ['4', 'We Load & Secure Your Materials', 'Your materials are loaded on a flatbed or step-deck and secured to applicable standards.'],
  ['5', 'We Deliver With Flatbed + Moffett', 'A truck-mounted Moffett travels with the load, providing onsite unloading for eligible deliveries.'],
  ['6', 'We Spot & Place Where Accessible', 'Where site conditions permit, our driver unloads and spots the material toward the work area.'],
];

const siteRequirements = [
  ['Truck Access', 'The job site must provide suitable access for the flatbed or step-deck to enter and reach the unloading area.'],
  ['Ground Conditions', 'Moffett forklifts can operate on suitable gravel and uneven ground; actual suitability depends on the site and conditions.'],
  ['Overhead & Site Clearance', 'Identify obstructions such as overhead structures, scaffolding, trees or power lines before delivery.'],
  ['Staging & Placement Space', 'The Moffett needs room to enter, maneuver and set down the load safely at the intended placement area.'],
  ['Load Weight & Dimensions', 'Material weight and dimensions help determine the right equipment and whether the delivery can be completed safely.'],
  ['Delivery Window', 'Let us know site access hours and any early-morning or sequencing requirements so we can plan the drop.'],
];

const cityCoverage = [
  ['Construction Delivery in Toronto', 'Building-material delivery to residential, ICI and infrastructure job sites across Toronto.'],
  ['Construction Delivery in Mississauga', 'Job-site material delivery for builders, contractors and suppliers throughout Mississauga.'],
  ['Construction Delivery in Brampton', 'Flatbed and Moffett material delivery to active sites and subdivisions in Brampton.'],
  ['Construction Delivery in Vaughan', 'Delivery and onsite spotting for construction and industrial projects throughout Vaughan.'],
];

const whyChoose = [
  ['Company-Owned Flatbed & Moffett Fleet', 'Flatbeds, step-decks and truck-mounted Moffetts operated by Point Zero — not brokered out to spot-market carriers.'],
  ['Self-Unloading — No Site Crane Needed', 'The Moffett travels with the delivery, so suitable sites can be served without arranging a separate forklift or crane.'],
  ['Mississauga Terminal & Early Drops', 'Loads are staged from our Mississauga terminal for early, coordinated job-site arrivals.'],
  ['Licensed & MTO/DOT Compliant', 'Operating since 2006 under CVOR 158-303-152 · MC 1492151, with loads secured to applicable standards.'],
  ['Dedicated Capacity for Recurring Projects', 'For ongoing builds we can arrange dedicated capacity and scheduled routes.'],
  ['Moffett-Equipped for Tough Sites', 'For dock-free and rough-terrain sites, delivery pairs with our Moffett service for onsite unloading.'],
];

export default function ConstructionMaterialPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · CONSTRUCTION HAULING"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="CONSTRUCTION MATERIAL DELIVERY"
        titleAccent="ACROSS TORONTO & THE GTA."
        description="Construction schedules depend on materials arriving on time and placed where installation happens — not dumped on the road or blocked at the gate. Point Zero Road Lines delivers building supplies across the GTA and Ontario with flatbeds and truck-mounted Moffetts built for rough terrain and tight job-site access."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/construction-blue-hero.webp"
        heroAlt="Point Zero Road Lines delivering building materials on a construction site"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Building Materials Delivered Where the Crew Is Working" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                No dock, no crane, no finished road? That&rsquo;s our daily standard. Our flatbeds and
                truck-mounted Moffetts deliver building supplies and spot them where trades need them,
                where site access allows.
              </p>
              <p>When a job site has no loading dock or onsite forklift, arranging separate unloading equipment adds time, cost and coordination. A <Link href={MOFFETT_HREF} className="mf-inline-link">Moffett-equipped flatbed</Link> brings the forklift with the delivery, so eligible materials can be unloaded and spotted on arrival — subject to site conditions and safe operating space.</p>
              <p>From residential subdivision framing to major industrial, commercial and institutional (ICI) projects, we help contractors and suppliers keep materials moving to the point of installation.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Engineered for the Reality of Active Job Sites"
            desc="Our drivers and Moffett equipment are set up to work on active sites safely and drop materials where trades need them." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Construction Delivery Team" />
        </div>
      </section>

      {/* Materials we haul */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Materials hauled" title="Building Supplies We Transport & Place"
            desc="Eligible construction, commercial and industrial materials — delivered and spotted on site, dock or no dock." />
          <MiniGrid items={materials} />
          <p className="mf-note">If you&rsquo;re unsure whether your material is suitable for Moffett delivery, contact our team with the load details.</p>
          <CenterCta label="Check Your Load With Point Zero" />
        </div>
      </section>

      {/* Job-site delivery deep-dive */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="On the job site" title="Delivery Built for Job-Site Conditions"
            desc="Construction sites present access, terrain and placement challenges that standard freight delivery isn't set up for." />
          <MiniGrid items={jobsitePoints} />
          <CenterCta label="Planning a Job-Site Delivery? Request a Quote" />
        </div>
      </section>

      {/* Process */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="How Construction Material Delivery Works" desc="We keep the process straightforward from quote to placement." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start Your Construction Delivery Quote" />
        </div>
      </section>

      {/* Site & access */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Site & access" title="Job-Site Access & Delivery Requirements"
            desc="A smooth delivery starts with understanding the site. Sharing accurate access details up front helps us plan the drop and placement." />
          <MiniGrid items={siteRequirements} />
          <p className="mf-note">Not sure if your site is ready for delivery? Contact our team before booking.</p>
        </div>
      </section>

      {/* GTA coverage */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Service area" title="Construction Material Delivery Across the GTA"
            desc="Point Zero delivers building materials to job sites throughout the Greater Toronto Area, supporting builders, contractors and suppliers." />
          <MiniGrid items={cityCoverage} />
          <p className="mf-note">Point Zero also serves construction sites throughout surrounding GTA communities, including Milton, Oakville, Burlington, Caledon, Bolton, Markham, Richmond Hill, Aurora, Newmarket and beyond. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="Request a GTA Construction Delivery Quote" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Why Point Zero" title="Why Contractors Choose Point Zero"
            desc="A dedicated carrier built around getting materials to the point of installation — not just to the curb." />
          <MiniGrid items={whyChoose} />
          <div className="mf-note">
            Need dedicated capacity for an ongoing build? Explore our <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet services</Link>, or browse our full <Link href="/fleet-and-equipment" className="mf-inline-link">fleet &amp; equipment</Link>.
          </div>
          <CenterCta label="See If We're the Right Fit for Your Project" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="09" label="FAQ" title="Construction Material Delivery FAQs" />
          <FaqAccordion items={CONSTRUCTION_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="10" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('construction-material-hauling')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Tell Us About Your Delivery"
        title="Get a Construction Material Delivery Quote"
        paragraphs={[
          'Have a job site that needs materials delivered and placed where the crew is working?',
          'Send Point Zero the delivery coordinates, material specs and access notes for a fast job-site quote. Our team will confirm the right equipment for your load and site.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Delivery Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
