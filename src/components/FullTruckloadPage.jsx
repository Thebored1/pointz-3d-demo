"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Truck, Route, ShieldCheck, Globe, Timer, Warehouse } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { FTL_FAQS } from './fullTruckloadFaqs';
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

// Built on the shared servicePillar block library. Content reflects Point Zero's
// verified full-truckload capacity + equipment claims, hedged per §3a.

const QUOTE_LABEL = 'Request an FTL Quote';

const capabilities = [
  { icon: Route, title: 'Direct Point-to-Point', desc: 'Your freight travels straight from pickup to destination — no consolidation stops, minimal handling.' },
  { icon: Truck, title: 'Any Deck for the Load', desc: 'Flatbed, step-deck, dry van or Moffett-equipped flatbed, matched to your freight and the site.' },
  { icon: Timer, title: 'Time-Sensitive Lanes', desc: 'A dedicated trailer for volume or urgent freight that cannot wait for a shared schedule.' },
  { icon: Globe, title: 'Cross-Border FTL', desc: 'Registered lanes into the U.S. under USDOT 3983391 and MC 1492151, subject to lane.' },
];

const useCases = [
  ['Volume Distribution Lanes', 'Full trailers running plant-to-DC and inter-facility transfers across Ontario.'],
  ['Time-Critical Freight', 'Loads that need direct transit and minimal handling to hit a delivery window.'],
  ['Large or Heavy Loads', 'Freight that fills a trailer or needs flatbed, step-deck or Moffett handling.'],
  ['Cross-Border Shipments', 'Direct full-truckload lanes connecting Ontario hubs with U.S. points.'],
];

const compareRows = [
  ['Fills a trailer or needs direct transit', 'FTL — the whole truck dedicated to your freight'],
  ['Smaller consignment, cost over speed', 'Scheduled LTL — shared, consolidated capacity'],
  ['Recurring lanes, fixed schedule', 'Dedicated fleet — assigned trucks and drivers'],
];

const processSteps = [
  ['1', 'Send Your Lane & Load', 'Pickup, destination, freight type, weight and timing.'],
  ['2', 'We Assign Equipment', 'The right trailer and driver are dedicated to your shipment.'],
  ['3', 'Direct Transit', 'Freight moves point-to-point, secured and tracked, with live dispatch.'],
  ['4', 'Deliver & Confirm', 'On-time delivery with confirmation — dock, curbside or job site where accessible.'],
];

const whyChoose = [
  ['Company-Owned Equipment', 'Tractors and trailers run by Point Zero, not brokered to the spot market.'],
  ['One Truck, One Shipment', 'Dedicated capacity means less handling and a cleaner chain of custody.'],
  ['Flexible Deck Options', 'Flatbed, step-deck, dry van or Moffett — matched to the freight, not forced.'],
  ['Operating Since 2006', 'An established GTA carrier under MC 1492151 with 24/7 account dispatch.'],
];

export default function FullTruckloadPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · FULL TRUCKLOAD"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="FULL-TRUCKLOAD (FTL) FREIGHT,"
        titleAccent="POINT-TO-POINT ACROSS ONTARIO."
        description="Point Zero Road Lines runs full-truckload (FTL) freight across the GTA, Ontario and cross-border lanes — a dedicated trailer carrying your shipment point-to-point on flatbed, step-deck, dry van or Moffett equipment, backed by 24/7 dispatch."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/dedicated-fleet-highway.webp"
        heroAlt="Point Zero Road Lines truck on the open highway"
        heroPosition="center"
      />

      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The service" title="A Dedicated Trailer, Direct to the Destination" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Full truckload means one truck carries your shipment and nothing else — direct from
                pickup to delivery, with minimal handling along the way.
              </p>
              <p>It is the right call for freight that fills a trailer, needs direct transit to hit a window, or is large or heavy enough to need a specific deck. We match the equipment to the load — <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">flatbed or Moffett</Link>, step-deck or dry van.</p>
              <p>For smaller consignments, <Link href="/services/less-than-truckload-ltl" className="mf-inline-link">scheduled LTL</Link> may cost less; for recurring lanes, a <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated program</Link> may fit better.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="What Full Truckload Gives You"
            desc="Dedicated capacity, direct transit and the right deck for the freight." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Specialists" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="When to use FTL" title="Freight That Belongs on a Full Truck"
            desc="Volume, time-critical and large or heavy loads across Ontario and cross-border." />
          <MiniGrid items={useCases} />
          <p className="mf-note">Related: <Link href="/services/manufacturing-consumer-goods-freight" className="mf-inline-link">manufacturing &amp; consumer goods</Link>, <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet</Link>, and <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">warehouse &amp; cross-dock</Link>.</p>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Choosing a mode" title="FTL, LTL or Dedicated?"
            desc="The right mode depends on load size, timing and how often the lane runs." />
          <ComparisonTable heads={['Your freight', 'The fit']} rows={compareRows} />
          <CenterCta label="Not Sure? Tell Us Your Load" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="From Quote to Delivery" desc="A direct path from first call to confirmed delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Get an FTL Quote" />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="Why Shippers Choose Our FTL Service"
            desc="Company-owned equipment and dedicated, direct transit." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving lanes throughout the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Full Truckload FAQs" />
          <FaqAccordion items={FTL_FAQS} />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('full-truckload-ftl')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <FinalCta
        badge="Move a Full Load"
        title="Ready for Direct Full-Truckload Capacity?"
        paragraphs={[
          'Have a load that fills a trailer or needs direct, time-sensitive transit?',
          'Tell us your lane, freight and timing and we will assign the right equipment and come back with a fast quote.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request an FTL Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
