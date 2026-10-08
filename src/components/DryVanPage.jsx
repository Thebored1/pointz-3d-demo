"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Truck, ShieldCheck, Package, Globe, Warehouse, Route } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { DRY_VAN_FAQS } from './dryVanFaqs';
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
// verified capability — company-owned dry vans, FTL/scheduled LTL, cross-border
// authority — with hedged phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request a Dry Van Quote';

const capabilities = [
  { icon: ShieldCheck, title: 'Enclosed & Weather-Protected', desc: 'Palletized and packaged freight stays sealed away from weather and road debris, pickup to delivery.' },
  { icon: Truck, title: 'Company-Owned Trailers', desc: 'Dry vans run by Point Zero and maintained at our Mississauga facility — not brokered to the spot market.' },
  { icon: Package, title: 'FTL & Scheduled LTL', desc: 'Full-truckload loads or scheduled less-than-truckload consolidation, matched to your volume and lane.' },
  { icon: Globe, title: 'Cross-Border Lanes', desc: 'Registered lanes into the U.S. under USDOT 3983391 and MC 1492151, subject to lane and program.' },
];

const freight = [
  ['Consumer Packaged Goods', 'Palletized CPG runs serving distribution centres and retail hubs across Ontario.'],
  ['Packaged Manufacturing Freight', 'Cartons, film, bottles and finished goods that need an enclosed, dry trailer.'],
  ['Warehouse & DC Transfers', 'Scheduled dry-van linehauls between plants, warehouses and retail distribution centres.'],
  ['General Palletized Freight', 'Standard dry freight that benefits from a clean, weather-tight enclosed trailer.'],
];

const compareRows = [
  ['Weather-sensitive but dock-loaded freight', 'Dry van — fully enclosed and sealed in transit'],
  ['Freight needing side or crane loading', 'Flatbed or roll-tite — open or curtain-side deck'],
  ['No dock or forklift at the delivery site', 'Moffett-equipped flatbed — unloads itself on arrival'],
];

const processSteps = [
  ['1', 'Share Your Lane & Freight', 'Send us your pickup, destination, freight type and volume.'],
  ['2', 'We Match the Trailer', 'The right dry van — full load or scheduled LTL — is planned for your freight.'],
  ['3', 'Load & Secure', 'Freight is loaded and secured for a clean, weather-protected transit.'],
  ['4', 'Deliver & Confirm', 'We deliver on schedule and confirm — with 24/7 dispatch on the line throughout.'],
];

const whyChoose = [
  ['Company-Owned Equipment', 'Tractors and dry vans operated by Point Zero and maintained in Mississauga.'],
  ['Integrated With Our Cross-Dock', 'Dry-van lanes connect to our warehouse for staging, consolidation and LTL-to-FTL building.'],
  ['FTL or Scheduled LTL', 'Flexible capacity — a full trailer for volume lanes, scheduled LTL for smaller consignments.'],
  ['Operating Since 2006', 'An established GTA carrier under MC 1492151 with 24/7 account dispatch.'],
];

export default function DryVanPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · DRY VAN"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="ENCLOSED DRY VAN FREIGHT IN THE GTA,"
        titleAccent="PROTECTED FROM DOCK TO DOOR."
        description="Point Zero Road Lines moves palletized and packaged freight in company-owned dry vans across the GTA, Ontario and cross-border lanes — full-truckload or scheduled LTL, weather-protected and backed by 24/7 dispatch."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/highway-trailer.webp"
        heroAlt="Point Zero Road Lines dry van trailer on the highway"
        heroPosition="center"
      />

      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The service" title="Weather-Tight Capacity for Palletized & Packaged Freight" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Enclosed dry vans keep consumer goods, packaged manufacturing freight and general
                palletized loads sealed from weather and road debris, pickup to delivery.
              </p>
              <p>Point Zero runs company-owned dry vans alongside its <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">flatbed and Moffett</Link> fleet, so we can match the right trailer to your freight rather than force it onto whatever is available. See the full <Link href="/fleet-and-equipment" className="mf-inline-link">fleet &amp; equipment</Link>.</p>
              <p>Move a full trailer on volume lanes, or scheduled LTL for smaller consignments consolidated through our Mississauga cross-dock.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="What Dry Van Service Gives You"
            desc="Enclosed, company-owned capacity for freight that needs weather protection and a clean trailer." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Specialists" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="What we haul" title="Freight That Rides in Our Dry Vans"
            desc="Palletized and packaged freight across consumer goods, manufacturing and distribution." />
          <MiniGrid items={freight} />
          <p className="mf-note">Related: <Link href="/services/manufacturing-consumer-goods-freight" className="mf-inline-link">manufacturing &amp; consumer goods</Link>, <Link href="/services/warehouse-cross-dock-storage" className="mf-inline-link">warehouse &amp; cross-dock</Link>, and <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet</Link>.</p>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Choosing equipment" title="Dry Van, Flatbed or Moffett?"
            desc="The right trailer depends on your freight and the delivery site." />
          <ComparisonTable heads={['Your freight', 'The fit']} rows={compareRows} />
          <CenterCta label="Not Sure? Tell Us Your Load" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="From Quote to Delivery" desc="A straightforward path from first call to confirmed delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Get a Dry Van Quote" />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="Why Shippers Choose Our Dry Van Service"
            desc="Company-owned capacity integrated with our terminal and dispatch." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving lanes throughout the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Dry Van FAQs" />
          <FaqAccordion items={DRY_VAN_FAQS} />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('dry-van-transportation')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <FinalCta
        badge="Move It Enclosed"
        title="Need Weather-Protected Dry Van Capacity?"
        paragraphs={[
          'Have palletized or packaged freight that needs an enclosed trailer?',
          'Tell us your lane, freight and volume and we will match the right dry van — full load or scheduled LTL — and come back with a fast quote.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Dry Van Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
