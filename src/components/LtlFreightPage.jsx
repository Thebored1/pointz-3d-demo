"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Package, Warehouse, Layers, Route, Navigation, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { LTL_FAQS } from './ltlFaqs';
import {
  Reveal,
  SectionHead,
  CtaButtons,
  CenterCta,
  FeatureGrid,
  MiniGrid,
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

// Built on the shared servicePillar block library. Scoped honestly to Point
// Zero's actual offer: scheduled / consolidated LTL through our cross-dock, not
// a national hub-and-spoke LTL network. Hedged per §3a.

const QUOTE_LABEL = 'Request an LTL Quote';

const capabilities = [
  { icon: Package, title: 'Pay for the Space You Use', desc: 'Partial loads share a trailer, so you are not paying for a full truck you do not need.' },
  { icon: Warehouse, title: 'Cross-Dock Consolidation', desc: 'Smaller consignments are consolidated through our Mississauga cross-dock and routed efficiently.' },
  { icon: Layers, title: 'LTL-to-FTL Building', desc: 'On volume lanes we combine partial loads into full trailers to keep costs and handling down.' },
  { icon: Route, title: 'Scheduled Lanes', desc: 'Best suited to known, recurring lanes rather than one-off national LTL — reliable and planned.' },
];

const freight = [
  ['Manufacturing & CPG Partials', 'Palletized production and consumer-goods freight that does not fill a trailer.'],
  ['Recurring Small Shipments', 'Regular partial loads on established lanes across the GTA and Ontario.'],
  ['Consolidation Freight', 'Multiple small consignments combined through the cross-dock into efficient runs.'],
  ['DC & Retail Replenishment', 'Scheduled partial-load deliveries into distribution centres and retail hubs.'],
];

const compareRows = [
  ['Smaller consignment, cost over speed', 'Scheduled LTL — shared, consolidated capacity'],
  ['Fills a trailer or needs direct transit', 'FTL — the whole truck dedicated to your freight'],
  ['One-off national small parcel', 'A national LTL/parcel network may fit better than us'],
];

const processSteps = [
  ['1', 'Send Your Freight Details', 'Pallet count, weight, lane and timing for your partial load.'],
  ['2', 'We Plan the Consolidation', 'Your freight is scheduled and, where it fits, consolidated with other loads.'],
  ['3', 'Cross-Dock & Route', 'Consignments move through our Mississauga cross-dock and onto the right run.'],
  ['4', 'Deliver & Confirm', 'Scheduled delivery with confirmation and 24/7 dispatch on the line.'],
];

const whyChoose = [
  ['Integrated Cross-Dock', 'LTL runs through our own Mississauga warehouse — staging and consolidation under one roof.'],
  ['Honest Scope', 'We are a scheduled, consolidated LTL operation for known lanes — not a one-size national network.'],
  ['LTL or FTL as It Fits', 'When partials add up, we build them into full loads to save you cost and handling.'],
  ['Operating Since 2006', 'An established GTA carrier under MC 1492151 with 24/7 account dispatch.'],
];

export default function LtlFreightPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · LESS-THAN-TRUCKLOAD"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="LTL FREIGHT ACROSS ONTARIO,"
        titleAccent="CONSOLIDATED AND SCHEDULED."
        description="Point Zero Road Lines moves less-than-truckload (LTL) freight across the GTA and Ontario — partial loads consolidated through our Mississauga cross-dock on scheduled lanes, so you pay for the space you use and freight still moves on time."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/warehouse-crossdock-docks.webp"
        heroAlt="Point Zero Road Lines cross-dock loading docks"
        heroPosition="center"
      />

      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The service" title="Move Partial Loads Without Paying for a Full Truck" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Less-than-truckload freight shares a trailer with other consignments, so smaller
                shipments move efficiently instead of paying for capacity they do not use.
              </p>
              <p>Point Zero runs <strong>scheduled, consolidated LTL</strong> through our <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">Mississauga cross-dock</Link> — best suited to known, recurring lanes rather than one-off national LTL. When partials add up on a lane, we build them into full loads.</p>
              <p>If a shipment fills a trailer or needs direct transit, <Link href="/services/full-truckload-ftl" className="mf-inline-link">full truckload</Link> is usually the better call — we will tell you which fits.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="What Our LTL Service Gives You"
            desc="Consolidated capacity, cross-dock efficiency and scheduled, reliable lanes." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Specialists" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="What we move" title="Freight Suited to Scheduled LTL"
            desc="Partial loads and recurring small shipments across manufacturing, CPG and distribution." />
          <MiniGrid items={freight} />
          <p className="mf-note">Related: <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">warehouse &amp; cross-dock</Link>, <Link href="/services/manufacturing-consumer-goods-freight" className="mf-inline-link">manufacturing &amp; consumer goods</Link>, and <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet</Link>.</p>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Choosing a mode" title="LTL, FTL or a Parcel Network?"
            desc="The right mode depends on load size and how one-off or recurring the lane is." />
          <ComparisonTable heads={['Your freight', 'The fit']} rows={compareRows} />
          <CenterCta label="Not Sure? Tell Us Your Load" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="From Quote to Delivery" desc="A clear path from freight details to a scheduled delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Get an LTL Quote" />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="Why Shippers Choose Our LTL Service"
            desc="An integrated cross-dock and an honest, scheduled LTL scope." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving lanes throughout the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Less-Than-Truckload FAQs" />
          <FaqAccordion items={LTL_FAQS} />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('less-than-truckload-ltl')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <FinalCta
        badge="Ship Smaller, Smarter"
        title="Have Partial Loads to Move?"
        paragraphs={[
          'Freight that does not fill a trailer does not need to pay for one.',
          'Send us your pallet count, lane and schedule and we will come back with a scheduled LTL plan and a fast quote.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request an LTL Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
