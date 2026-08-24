"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Truck, Route, Package, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { LAST_MILE_FAQS } from './lastMileFaqs';
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

// Built on the shared servicePillar block library. Reuses Point Zero's published
// last-mile content + hedged phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request a Last-Mile Quote';

const capabilities = [
  { icon: Truck, title: 'Truck-Mounted Moffett Offload', desc: 'Direct offloading on gravel, pavement or dirt with all-terrain forklifts — no receiver equipment needed for suitable sites.' },
  { icon: Route, title: 'Restricted-Access Maneuvering', desc: 'Equipment configured for tight urban corridors, suburban subdivisions and restricted construction gates.' },
  { icon: Package, title: 'Point-of-Use Placement', desc: 'Freight spotted at garage bays, staging pads or site perimeters where accessible — not dumped at the curb.' },
  { icon: Clock, title: 'Appointment & ETA Precision', desc: 'Precise delivery windows, call-ahead driver contact and real-time dispatch updates for receiving crews.' },
];

const deliveryTypes = [
  ['Residential Building Supplies', 'Decking packages, fencing, sod, interlock pavers and turf delivered onto homeowner driveways where access allows.'],
  ['Retail Fixtures & Store Displays', 'Scheduled mall and retail-plaza deliveries with inside placement and liftgate support.'],
  ['Subdivisions & Townhouse Sites', 'Navigating active, high-density residential construction without blocking other trade vehicles.'],
  ['Commercial HVAC & Mechanicals', 'Large crated rooftop units and mechanical skids placed safely on grade.'],
  ['Solar & Renewable Infrastructure', 'Pallets of solar panels, racking and inverters delivered to rural or commercial installation sites.'],
  ['Architectural Windows & Doors', 'Careful transport and placement of high-value crated fenestration packages.'],
];

const processSteps = [
  ['1', 'Request Your Delivery Quote', 'Share the destination, freight details and any access or appointment requirements.'],
  ['2', 'We Confirm Site Access', 'We review the delivery address for access, ground conditions and placement needs.'],
  ['3', 'We Schedule the Window', 'A precise delivery window is set, with call-ahead contact for the receiving crew.'],
  ['4', 'We Deliver Final-Mile', 'Moffett flatbed or liftgate straight truck brings the freight to the destination.'],
  ['5', 'We Place at the Point of Use', 'Where access allows, the load is spotted where it is needed rather than at the curb.'],
];

const whyChoose = [
  ['Self-Unloading for Any Site', 'Moffett flatbeds and liftgate trucks mean suitable sites can be served without receiver equipment.'],
  ['Built for the Hard Last Mile', 'Tight streets, subdivisions and no-dock addresses are our standard, not the exception.'],
  ['Real Delivery Windows', 'Appointment precision and call-ahead contact keep receiving crews informed.'],
  ['Backed by Our Terminal', 'Final-mile runs connect to our Mississauga warehouse for staging and consolidation.'],
];

export default function LastMilePage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · LAST MILE"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="LAST-MILE FREIGHT DELIVERY,"
        titleAccent="THE HARDEST LEG, HANDLED."
        description="The final mile is where most supply-chain breakdowns happen — tight residential streets, narrow job-site access, no unloading equipment and strict appointment windows. Point Zero Road Lines runs Moffett-equipped flatbeds, straight trucks and liftgates built to master it."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/moffett-yard-rear.webp"
        heroAlt="Point Zero Road Lines last-mile delivery truck ready for dispatch"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Solving the Hardest Leg of the Journey" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Tight streets, no loading dock, no receiver forklift, strict windows — the last mile is
                where deliveries go wrong. It&rsquo;s where our equipment is built to work.
              </p>
              <p>Our <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">Moffett-equipped flatbeds</Link> and liftgate straight trucks unload themselves, so suitable residential, retail and job-site addresses can be served without on-site equipment — and freight placed where it&rsquo;s needed, where access allows.</p>
              <p>From homeowner driveway drops to retail store rollouts and subdivision sites, we handle the obstacles that stall standard carriers.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Mastering the Complexities of Final-Mile Freight"
            desc="Whether dropping building supplies at a new subdivision or delivering to a busy retail plaza, our drivers and Moffett forklifts handle the obstacles." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Last-Mile Team" />
        </div>
      </section>

      {/* Delivery types */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Delivery types" title="Final-Mile Freight We Handle Across Ontario"
            desc="From residential homeowner deliveries to commercial job sites and retail store rollouts." />
          <MiniGrid items={deliveryTypes} />
          <p className="mf-note">Staging before the final leg? See our <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">warehouse &amp; cross-dock</Link>, or <Link href="/services/construction-material-hauling" className="mf-inline-link">construction material delivery</Link> for job sites.</p>
          <CenterCta label="Check Your Delivery With Point Zero" />
        </div>
      </section>

      {/* How it works */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="How it works" title="How Last-Mile Delivery Works" desc="From quote to point-of-use placement." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start a Last-Mile Delivery" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Why Point Zero" title="Why Shippers Trust Us With the Final Mile"
            desc="Self-unloading equipment and real delivery windows for the addresses others avoid." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Delivering across the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="See If We Can Cover Your Deliveries" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="FAQ" title="Last-Mile Delivery FAQs" />
          <FaqAccordion items={LAST_MILE_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('last-mile-delivery')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Master Your Final Mile"
        title="Need a Carrier to Master Your Final-Mile Deliveries?"
        paragraphs={[
          'Have residential, retail or job-site deliveries that standard carriers struggle with?',
          'Talk to our dispatch team about route programs, Moffett deliveries and residential delivery coordination.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Last-Mile Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
