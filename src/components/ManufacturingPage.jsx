"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Factory, Route, Warehouse, Truck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { MANUFACTURING_FAQS } from './manufacturingFaqs';
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

// Industry cluster page under the Dedicated Fleet pillar. Built on the shared
// servicePillar block library. Reuses Point Zero's published content + hedged
// phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request a Freight Quote';

const capabilities = [
  { icon: Factory, title: 'Just-In-Time (JIT) Plant Delivery', desc: 'Raw material, packaging and parts delivered to match production shift windows, subject to scheduling.' },
  { icon: Route, title: 'Distribution Centre Linehauls', desc: 'Scheduled full-truckload transfers connecting manufacturing plants to retail DCs across Ontario.' },
  { icon: Warehouse, title: 'Mississauga Buffer Staging', desc: 'Pre-stage finished goods and overflow stock at our 1566 Bonhill facility for on-demand dispatch.' },
  { icon: Truck, title: 'Multi-Trailer Versatility', desc: 'Dry vans for palletized CPG freight and flatbeds for heavy machinery, structural components and tooling.' },
];

const freightCategories = [
  ['Automotive Parts & Assemblies', 'Time-critical plant runs feeding Tier-1 and Tier-2 automotive manufacturing corridors in Ontario.'],
  ['Packaging Materials & Cartons', 'High-cube dry-van freight hauling corrugated cartons, film, bottles and commercial packaging.'],
  ['Industrial Machinery & Tooling', 'Open-deck and roll-tite flatbed hauling for heavy production machinery and equipment.'],
  ['Consumer Packaged Goods (CPG)', 'Consistent palletized freight delivery to retail distribution hubs and fulfillment centres.'],
  ['Plastics, Resins & Metal Goods', 'Transport of raw materials and finished fabrications between plants and processors.'],
  ['Cross-Border Supply Chain Lanes', 'Transport connecting Ontario industrial hubs to Great Lakes manufacturing corridors.'],
];

const processSteps = [
  ['1', 'Share Your Lanes & Volumes', 'Tell us your plants, DCs, freight types and production schedule.'],
  ['2', 'We Plan the Capacity', 'FTL, scheduled LTL, dry van or flatbed — matched to your freight and timing.'],
  ['3', 'We Align to Your Shifts', 'Deliveries and pickups are timed to production windows and dock hours.'],
  ['4', 'We Run the Lanes', 'Scheduled linehauls, JIT plant runs and DC transfers, with 24/7 dispatch.'],
  ['5', 'We Stage & Flex', 'Buffer staging at our Mississauga terminal absorbs overflow and on-demand surges.'],
];

const whyChoose = [
  ['Capacity That Keeps Production Moving', 'Dedicated tractors, dry vans and flatbeds with 24/7 dispatch so a plant run is never left waiting.'],
  ['One Operation, Fleet + Warehouse', 'Transport and Mississauga staging under one roof for JIT, overflow and cross-dock support.'],
  ['FTL & Scheduled LTL', 'Flexible capacity — full loads for volume lanes, scheduled LTL for smaller consignments.'],
  ['Established & Compliant', 'Operating since 2006 under CVOR 158-303-152 · MC 1492151, with cross-border experience.'],
];

export default function ManufacturingPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · MANUFACTURING & CPG"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="MANUFACTURING & CONSUMER-GOODS FREIGHT,"
        titleAccent="CAPACITY THAT KEEPS PRODUCTION MOVING."
        description="Ontario manufacturers and CPG brands can't afford production halts or delayed retail distribution. Point Zero Road Lines provides dedicated full-truckload (FTL) and scheduled less-than-truckload (LTL) capacity, raw-material plant deliveries and warehouse cross-dock support."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/warehouse-crossdock-facility.webp"
        heroAlt="Point Zero Road Lines modern logistics facility serving manufacturers"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Built for the Rhythm of Modern Manufacturing" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Production lines wait for no one. We provide dedicated tractors, dry vans, flatbeds and
                24/7 dispatchers who communicate in real time — so your plant keeps running.
              </p>
              <p>Whether it&rsquo;s JIT raw-material replenishment, finished-goods distribution to retail DCs, or heavy machinery on a flatbed, we plan capacity around your schedule. Recurring lanes can run as a full <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet program</Link>.</p>
              <p>From automotive corridors to CPG distribution and cross-border lanes, Point Zero keeps freight moving between your plants, warehouses and customers.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Freight Capacity Around Your Production Schedule"
            desc="Dedicated equipment and real-time dispatch so your line never stalls waiting on a truck." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Team" />
        </div>
      </section>

      {/* Freight categories */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Freight categories" title="Manufactured Goods We Transport"
            desc="From high-volume packaging and automotive parts to heavy machinery and consumer products." />
          <MiniGrid items={freightCategories} />
          <p className="mf-note">Need staging between legs? See our <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">warehouse &amp; cross-dock</Link>, or heavy machinery on <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">flatbed &amp; Moffett</Link>.</p>
          <CenterCta label="Discuss Your Freight Categories" />
        </div>
      </section>

      {/* How it works */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="How it works" title="How We Plan Manufacturing Freight" desc="From your lanes to running, scheduled capacity." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start Planning Your Lanes" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Why Point Zero" title="Why Manufacturers Choose Point Zero"
            desc="An established, company-owned carrier that plans capacity around production, not the other way around." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving industrial lanes across the GTA, Ontario and cross-border. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="See If We Fit Your Production Schedule" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="FAQ" title="Manufacturing & Consumer-Goods Freight FAQs" />
          <FaqAccordion items={MANUFACTURING_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('manufacturing-consumer-goods-freight')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Capacity for Your Schedule"
        title="Need Dedicated Capacity for Your Production Schedule?"
        paragraphs={[
          'Running recurring plant lanes, DC transfers, or JIT deliveries?',
          'Talk to our dispatch team about recurring plant lanes, JIT delivery and warehouse staging options.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Freight Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
