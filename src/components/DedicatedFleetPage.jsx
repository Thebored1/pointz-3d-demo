"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Users, ShieldCheck, Route, Wrench } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { DEDICATED_FLEET_FAQS } from './dedicatedFleetFaqs';
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
// dedicated-fleet content + hedged phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request a Dedicated Fleet Quote';

const capabilities = [
  { icon: Users, title: 'Assigned Drivers & Equipment', desc: 'Consistent, vetted drivers and equipment that get to know your facilities, dock staff and delivery expectations.' },
  { icon: ShieldCheck, title: 'Dedicated Capacity', desc: 'Trucks and trailers dedicated to your freight, helping insulate your lanes from spot-market volatility.' },
  { icon: Route, title: 'Custom Routes & Schedules', desc: 'Multi-stop daily routes, scheduled inter-plant transfers and distribution planned around your plant hours.' },
  { icon: Wrench, title: 'Complete Fleet Administration', desc: 'We handle maintenance, fuel, insurance, MTO/DOT compliance and safety oversight from Mississauga.' },
];

const industries = [
  ['Healthcare & Commercial Linen', 'Scheduled clean/soiled linen facility loops running on precise turnaround windows.'],
  ['Manufacturing & Industrial Goods', 'Daily raw-material replenishment and finished-goods distribution between plants and warehouses.'],
  ['Building Material Distribution', 'Dedicated flatbeds and Moffett units staged daily at supply yards for job-site drops.'],
  ['Retail Distribution & Restocking', 'Predictable scheduled store deliveries with liftgate and offloading support.'],
  ['Consumer Packaged Goods', 'Dry-van runs serving distribution centres and retail hubs throughout Ontario.'],
  ['Cross-Border Supply Chains', 'Dedicated lanes connecting Ontario hubs with Michigan, New York, Ohio and beyond.'],
];

const managed = [
  ['Maintenance & Uptime', 'Scheduled maintenance and servicing kept in-house so dedicated equipment stays road-ready.'],
  ['Fuel & Operating Costs', 'Fuel, tolls and day-to-day operating administration handled as part of the program.'],
  ['Insurance & Compliance', 'Commercial insurance and MTO/DOT regulatory compliance managed for your lanes.'],
  ['Driver Recruiting & Safety', 'Driver hiring, training and safety oversight — without the recruiting burden on your team.'],
  ['Account Dispatch', 'Continuous dispatch support coordinating your routes and daily schedule.'],
  ['Custom Equipment Specs', 'Tractors, trailers and Moffett units matched to your freight and, where wanted, your branding.'],
];

const processSteps = [
  ['1', 'Share Your Volume & Lanes', 'Tell us your routes, schedules, equipment needs and service expectations.'],
  ['2', 'We Design the Program', 'We build a dedicated plan around your volume — equipment, drivers and routing.'],
  ['3', 'Assign Drivers & Equipment', 'Consistent drivers and matched equipment are dedicated to your account.'],
  ['4', 'Onboard & Integrate', 'We align with your facilities, dock procedures and delivery windows.'],
  ['5', 'Run & Manage the Fleet', 'We operate the routes and handle maintenance, compliance, safety and dispatch.'],
  ['6', 'Review & Scale', 'We review performance and adjust capacity as your volume changes.'],
];

const whyChoose = [
  ['Private-Fleet Benefits, No Overhead', 'Predictable capacity and branded service without the capital expenditure, maintenance or driver recruiting.'],
  ['Company-Owned Equipment', 'Tractors, trailers and Moffett units operated by Point Zero — not brokered out to the spot market.'],
  ['Integrated With Our Terminal', 'Dedicated routes connect to our Mississauga warehouse and cross-dock for staging and consolidation.'],
  ['Operating Since 2006', 'An established GTA carrier under CVOR 158-303-152 · MC 1492151 with 24/7 account dispatch.'],
];

export default function DedicatedFleetPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · DEDICATED FLEET"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="YOUR DEDICATED FLEET,"
        titleAccent="WITHOUT THE OVERHEAD OF OWNING ONE."
        description="Point Zero Road Lines assigns company-owned tractors, trailers, Moffett units and professional drivers directly to your business. Gain predictable capacity, fixed scheduling and custom brand representation — without the capital expenditure, maintenance or driver-recruiting burden."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/dedicated-fleet-rows.webp"
        heroAlt="Point Zero Road Lines dedicated fleet lined up in parallel rows"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Private-Fleet Capacity Without the Private-Fleet Headaches" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Dedicated trucks, trailers, Moffett units and drivers assigned to your account and
                planned around your schedule — predictable capacity without buying and running your own fleet.
              </p>
              <p>Spot-market capacity swings and driver shortages make recurring freight hard to plan. A dedicated program locks in consistent drivers and equipment for your lanes, and we handle maintenance, fuel, insurance and compliance. See the <Link href="/fleet-and-equipment" className="mf-inline-link">fleet &amp; equipment</Link> we can dedicate to your account.</p>
              <p>From daily healthcare-linen loops to high-volume manufacturing lines and building-material distribution, we integrate into your supply chain with branded equipment and continuous dispatch support.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Why a Dedicated Carrier Program Wins"
            desc="Private-fleet benefits without private-fleet headaches — dedicated drivers, matched equipment and continuous dispatch." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Specialists" />
        </div>
      </section>

      {/* Industries served */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Industries served" title="Who Relies on a Point Zero Dedicated Fleet"
            desc="From daily medical-linen exchanges to manufacturing lines and distributor yards across Ontario." />
          <MiniGrid items={industries} />
          <p className="mf-note">Related programs: <Link href="/services/manufacturing-consumer-goods-freight" className="mf-inline-link">manufacturing &amp; consumer goods</Link>, <Link href="/services/healthcare-linen-logistics" className="mf-inline-link">healthcare linen logistics</Link>, and <Link href="/services/construction-material-hauling" className="mf-inline-link">construction material delivery</Link>.</p>
          <CenterCta label="Build a Program for Your Industry" />
        </div>
      </section>

      {/* What we manage */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Fleet administration" title="Everything We Manage for You"
            desc="A dedicated program takes the operating burden off your team." />
          <MiniGrid items={managed} />
          <CenterCta label="See What We'd Take Off Your Plate" />
        </div>
      </section>

      {/* Process */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="How a Dedicated Program Comes Together" desc="From first conversation to running routes." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start Designing Your Program" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="Why Shippers Choose Our Dedicated Fleet"
            desc="An established, company-owned operation built to run your lanes reliably." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving lanes throughout the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="See If a Dedicated Fleet Fits Your Lanes" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Dedicated Fleet FAQs" />
          <FaqAccordion items={DEDICATED_FLEET_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('dedicated-fleet-services')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Build a Dedicated Program"
        title="Ready for Dedicated Fleet Capacity on Your Lanes?"
        paragraphs={[
          'Want consistent trucks, drivers and equipment dedicated to your freight?',
          'Talk to our logistics specialists about a dedicated program tailored to your volume, routes and equipment needs.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Dedicated Fleet Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
