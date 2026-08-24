"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Repeat, Package, Layers, Truck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { WAREHOUSE_FAQS } from './warehouseFaqs';
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
// published warehouse/cross-dock content + hedged phrasing per the fact-handling
// rule (SERVICE_PILLAR_PLAN §3a). Confirm operational specifics before publishing.

const QUOTE_LABEL = 'Request a Cross-Dock Quote';

const capabilities = [
  { icon: Repeat, title: 'Rapid Cross-Dock Transfers', desc: 'Direct inbound-to-outbound trailer transfers that reduce storage dwell time and keep freight moving.' },
  { icon: Package, title: 'Short & Long-Term Storage', desc: 'Secure racked and floor storage for overflow inventory, seasonal stock and staged regional distribution.' },
  { icon: Layers, title: 'Freight Consolidation', desc: 'Combine LTL shipments into full truckloads, or break inbound bulk loads down into local delivery runs.' },
  { icon: Truck, title: 'Integrated Fleet Dispatch', desc: 'Because our trucks and warehouse share one Mississauga terminal, freight can transition onto local routes.' },
];

const services = [
  ['GTA Freight Cross-Docking', 'Trailer-to-trailer transfers for cross-border and long-haul carriers needing efficient local distribution.'],
  ['Construction Material Staging', 'Materials staged indoors and loaded onto Moffett flatbeds for early-morning job-site drops.'],
  ['Healthcare Linen Staging', 'Cart staging, sorting and turnaround support in a clean, controlled environment.'],
  ['Retail & Consumer Overflow', 'Buffer inventory and seasonal stock held close to the major 400-series transport corridors.'],
  ['Emergency Load Rework', 'Re-palletizing, shrink-wrapping and load-shift corrections for shifted or rejected freight.'],
  ['LTL to FTL Consolidation', 'Staging smaller vendor consignments into unified truckloads for regional delivery.'],
];

const benefits = [
  ['One Coordinated Operation', 'Warehouse and fleet run under the same roof at 1566 Bonhill Road, reducing hand-off friction between storage and transport.'],
  ['Central Mississauga Location', 'Immediate access to Highways 401, 410 and 407 — a practical staging hub for the Greater Toronto Area.'],
  ['Lower Dwell & Demurrage', 'Fast cross-dock turns help freight keep moving and can reduce trailer detention costs.'],
  ['Onward Delivery Built In', 'Cross-docked freight can move straight onto our local routes, including Moffett flatbed job-site drops.'],
];

const processSteps = [
  ['1', 'Tell Us Your Freight & Timing', 'Share inbound details, storage or cross-dock needs, and where the freight is heading next.'],
  ['2', 'Inbound Arrives at the Dock', 'Carriers deliver to our Mississauga terminal; freight is checked in at the dock.'],
  ['3', 'Cross-Dock, Store or Rework', 'Freight is transferred trailer-to-trailer, placed into short/long-term storage, or reworked as needed.'],
  ['4', 'Consolidate or Deconsolidate', 'LTL consignments are combined into truckloads, or bulk loads are broken down for local delivery.'],
  ['5', 'We Dispatch It Onward', 'Freight moves onto our local routes — dry van, flatbed or Moffett — from the same terminal.'],
];

const facility = [
  ['1566 Bonhill Road, Mississauga', 'A central GTA terminal shared by our warehouse operation and transport fleet.'],
  ['Highway 401 / 410 / 407 Access', 'Positioned for fast inbound and outbound movement across the Greater Toronto Area.'],
  ['Racked & Floor Storage', 'Space for palletized overflow, seasonal stock and staged distribution, subject to availability.'],
  ['Monitored, Secure Storage', 'Freight is held in a controlled, monitored environment.'],
  ['Dock & Terminal Access', 'Loading-bay docks for efficient inbound and outbound transfers; contact us for access hours.'],
  ['Staging Space for Onward Runs', 'Room to stage construction, linen and consumer freight for scheduled onward delivery.'],
];

export default function WarehouseCrossDockPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · WAREHOUSE & CROSS-DOCK"
        badgeAlt="1566 BONHILL RD · MISSISSAUGA HQ"
        titleLine1="WAREHOUSE & CROSS-DOCK"
        titleAccent="IN THE HEART OF MISSISSAUGA."
        description="Located at 1566 Bonhill Road, Mississauga, Point Zero Road Lines provides secure warehousing, cross-docking, freight consolidation and short- or long-term pallet storage. Operating under the same roof as our trucking fleet, we reduce transfer friction and help keep freight moving."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/warehouse-crossdock-docks.webp"
        heroAlt="Loading-bay docks at the Point Zero Road Lines cross-dock terminal in Mississauga"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="A Cross-Dock That Shares a Roof With the Fleet" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Storage and transport under one operation — so freight moves between the dock and the
                road without a separate vendor, an extra hand-off, or added dwell time.
              </p>
              <p>Our Mississauga terminal at 1566 Bonhill Road sits with direct access to Highways 401, 410 and 407, making it a practical staging and cross-dock hub for the GTA. Because our <Link href="/services/dedicated-fleet-services" className="mf-inline-link">fleet</Link> and warehouse run together, cross-docked freight can transition straight onto local routes.</p>
              <p>From high-speed trailer-to-trailer transfers to overflow storage, freight consolidation and emergency load rework, we help shippers and carriers keep product moving through the Greater Toronto Area.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Why Our Mississauga Facility Delivers Value"
            desc="Centrally located with immediate highway access, our terminal gives shippers and carriers a practical staging and cross-dock hub in the GTA." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Warehouse Operations Team" />
        </div>
      </section>

      {/* Services offered */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Services offered" title="How Shippers Use Our Warehouse"
            desc="From high-speed cross-docking to emergency load rework and pre-staged deliveries." />
          <MiniGrid items={services} />
          <p className="mf-note">Staging <Link href="/services/construction-material-hauling" className="mf-inline-link">construction materials</Link> or <Link href="/services/healthcare-linen-logistics" className="mf-inline-link">healthcare linen</Link>? We can hold and turn those loads too.</p>
          <CenterCta label="Ask About Dock Space & Rates" />
        </div>
      </section>

      {/* Benefits */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Why it works" title="One Terminal, Less Friction"
            desc="Combining warehousing and transport in one operation removes the seams where freight usually slows down." />
          <MiniGrid items={benefits} />
          <CenterCta label="See How We'd Handle Your Freight" />
        </div>
      </section>

      {/* Process */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="How Cross-Docking Works" desc="From inbound arrival to onward dispatch, in one place." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start a Cross-Dock Conversation" />
        </div>
      </section>

      {/* Facility & access */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="The facility" title="Our Mississauga Terminal"
            desc="A central GTA location built for fast inbound and outbound freight movement." />
          <MiniGrid items={facility} />
          <p className="mf-note">Serving shippers and carriers across the GTA. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Warehouse & Cross-Dock FAQs" />
          <FaqAccordion items={WAREHOUSE_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('warehouse-cross-dock-storage')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Space & Cross-Dock Rates"
        title="Need Dock Space or Storage in Mississauga?"
        paragraphs={[
          'Looking for cross-dock capacity, overflow storage, or an emergency load transfer?',
          'Contact our warehouse operations team for current space availability, cross-dock rates and onward delivery from the same terminal.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Cross-Dock Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
