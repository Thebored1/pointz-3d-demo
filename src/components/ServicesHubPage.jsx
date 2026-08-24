"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Package, Truck, Warehouse, Navigation } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { overviewServices } from './serviceEditorialData';
import {
  Reveal,
  SectionHead,
  CtaButtons,
  FeatureGrid,
  MiniGrid,
  RelatedServices,
  FinalCta,
  QUOTE_HREF,
  TEL_HREF,
  MAIL_HREF,
} from './servicePillar/blocks';
import '../app/about/AboutPage.css';

// Parent-pillar services hub, built on the shared servicePillar block library.
// The 9 service lines are grouped by their role in the cluster model
// (SERVICE_PILLAR_PLAN §1): core services, specialized/industry solutions, and
// the 24/7 capability. Copy reuses Point Zero's published overview content.

// Look up a service card ({ title, href, desc }) by slug.
const bySlug = Object.fromEntries(
  overviewServices.map((s) => [s.href.replace('/services/', ''), { title: s.title, href: s.href, desc: s.desc }]),
);
const pick = (...slugs) => slugs.map((s) => bySlug[s]).filter(Boolean);

const coreServices = pick(
  'flatbed-moffett-transport',
  'dedicated-fleet-services',
  'warehouse-cross-dock-storage',
  'expedited-same-day-freight',
);

const specializedServices = pick(
  'construction-material-hauling',
  'last-mile-delivery',
  'manufacturing-consumer-goods-freight',
  'healthcare-linen-logistics',
);

const alwaysOn = bySlug['24-7-after-hours-weekend-dispatch'];

const capabilities = [
  { icon: Package, title: 'Moffett', desc: 'Truck-mounted forklifts that travel with the load and unload without site equipment.' },
  { icon: Truck, title: 'Flatbed', desc: '36ft, 40ft, 48ft, 53ft, step-decks and drop-decks — ready for oversized and overweight loads.' },
  { icon: Warehouse, title: 'Cross-dock', desc: 'Inbound-to-outbound transfers that keep freight moving instead of sitting.' },
  { icon: Navigation, title: 'Tracking', desc: 'Live truck location, so you know where the load is without calling to ask.' },
];

const whyPointZero = [
  ['Operating Since 2006', 'An established GTA carrier under CVOR 158-303-152 · MC 1492151 — a registered, licensed and insured operator.'],
  ['Company-Owned Equipment', 'Tractors, trailers and Moffett units run by Point Zero, not brokered out to the spot market.'],
  ['24/7 Live Dispatch', 'A real dispatcher on the line nights, weekends and holidays — coordinated from our Mississauga HQ.'],
  ['One Mississauga Operation', 'Fleet, warehouse and cross-dock at 1566 Bonhill Road, so freight moves between the road and the dock without friction.'],
];

export default function ServicesHubPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · OVERVIEW"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="SPECIALIZED FREIGHT SERVICES,"
        titleAccent="BUILT AROUND YOUR OPERATION."
        description="Point Zero Road Lines provides dedicated transportation, specialized flatbed and Moffett delivery, warehousing and logistics across the Greater Toronto Area and Ontario. Every service is backed by company-owned equipment, professional drivers and 24/7 live dispatch."
        scrollLabel="SCROLL THE SERVICES"
        heroImage="/images/fleet-lineup.webp"
        heroAlt="Point Zero Road Lines fleet lined up in the yard"
        heroPosition="center"
      />

      {/* Intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="What we do" title="One Carrier for the Loads Others Turn Down" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                From job sites with no unloading equipment to time-sensitive manufacturing and healthcare
                routes, we provide dedicated capacity and specialized gear across the GTA and Ontario.
              </p>
              <p>Our services fall into a few groups: <strong>core transportation and storage</strong>, <strong>specialized and industry solutions</strong>, and <strong>around-the-clock coverage</strong>. Not sure which fits? Tell us your lane and load and we&rsquo;ll point you to the right one.</p>
              <CtaButtons quoteLabel="Get a Freight Quote" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Core services" title="Transportation & Storage"
            desc="The backbone of what we do — specialized delivery, dedicated capacity, warehousing and urgent freight." />
          <RelatedServices items={coreServices} />
        </div>
      </section>

      {/* Specialized & industry */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Specialized & industry" title="Solutions for Specific Jobs & Sectors"
            desc="Use-case and industry services built on the same fleet — construction, final-mile, manufacturing and healthcare." />
          <RelatedServices items={specializedServices} />
        </div>
      </section>

      {/* Always-on capability */}
      {alwaysOn ? (
        <section className="mf-section mf-band">
          <div className="pz-container">
            <SectionHead num="04" label="Around the clock" title="Coverage That Doesn't Stop at 5 PM" />
            <Reveal className="mf-callout">
              <h3 className="mf-subhead">{alwaysOn.title}</h3>
              <p>{alwaysOn.desc} Overnight linehauls, weekend job-site drops and holiday runs are standard — with a live dispatcher on the line whenever you call.</p>
              <Link href={alwaysOn.href} className="mf-btn mf-btn--primary">Explore 24/7 dispatch <ArrowUpRight size={16} /></Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Fleet & equipment at a glance */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Capabilities" title="Fleet & Equipment at a Glance"
            desc="Modern tractors, flatbeds and step-decks, roll-tite trailers, dry vans and truck-mounted Moffett units." />
          <FeatureGrid cols={4} items={capabilities} />
          <div className="mf-center"><Link href="/fleet-and-equipment" className="mf-btn mf-btn--line">See the full fleet &amp; equipment <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Why Point Zero */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="One Operation Behind Every Service"
            desc="An established, company-owned GTA carrier running fleet, warehouse and dispatch under one roof." />
          <MiniGrid items={whyPointZero} />
          <p className="mf-note">Serving the GTA and Ontario since 2006. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Not Sure Which Service Fits?"
        title="Tell Us Your Lane and Load"
        paragraphs={[
          "Not sure which service is the right one? That's what we're here for.",
          "Tell us your pickup, destination and freight, and we'll point you to the right service and get back to you with a straight answer and a fast quote.",
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Get a Freight Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
