"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Zap, Truck, PhoneCall, Navigation } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { EXPEDITED_FAQS } from './expeditedFaqs';
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
// expedited content + hedged phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request an Urgent Quote';

const capabilities = [
  { icon: Zap, title: 'Direct-Drive Dedicated Transit', desc: 'Your freight is the sole cargo on the truck — no terminal stops, no consolidation, direct door-to-door.' },
  { icon: Truck, title: 'Rapid Equipment Mobilization', desc: 'Tractors, dry vans, flatbeds and Moffett units dispatched from our Mississauga yard quickly on call.' },
  { icon: PhoneCall, title: '24/7 Live Emergency Dispatch', desc: 'A direct line to experienced dispatchers nights, weekends and holidays — never an automated service.' },
  { icon: Navigation, title: 'Real-Time Milestones & GPS', desc: 'Live truck tracking, departure alerts and immediate digital proof of delivery on touchdown.' },
];

const scenarios = [
  ['Plant-Down & Production Stops', 'Immediate hot shot hauling of tooling, raw materials or critical replacement parts to help restart halted lines.'],
  ['Job-Site Material Shortages', 'Emergency same-day delivery of trusses, steel, fasteners or drywall to keep construction crews working.'],
  ['Healthcare & Hospital Surges', 'Urgent linen, laundry-cart and medical-supply replenishment during unforeseen demand spikes.'],
  ['Commercial Equipment Breakdowns', 'Direct transit for replacement motors, pumps, electrical gear and mechanical components.'],
  ['Critical Cross-Border Hot Shots', 'Expedited transport between Ontario and U.S. points with accelerated customs coordination.'],
  ['Retail Stock-Out Prevention', 'Rapid same-day transfers from distribution hubs to retail locations for high-demand periods.'],
];

const processSteps = [
  ['1', 'Call or Request a Quote', 'Reach our 24/7 dispatch line with the pickup, destination and what needs to move.'],
  ['2', 'We Confirm the Details', 'Freight type, weight, timing and any handling or border requirements are confirmed fast.'],
  ['3', 'We Mobilize Equipment', 'The right truck — dry van, flatbed or Moffett — rolls from our Mississauga yard.'],
  ['4', 'Direct Door-to-Door Transit', 'Your shipment travels alone, without terminal stops or consolidation delays.'],
  ['5', 'Live Tracking to Drop-Off', 'GPS tracking and departure alerts keep you updated end to end.'],
  ['6', 'Proof of Delivery', 'Digital POD is sent on touchdown to confirm the shipment arrived.'],
];

const whyChoose = [
  ['Company-Owned Equipment, Ready to Roll', 'Trucks and drivers dispatched from our own Mississauga yard, not sourced from the spot market.'],
  ['A Real Person, 24/7', 'Live dispatchers answer around the clock — critical when minutes mean downtime.'],
  ['Visibility End to End', 'Live GPS, departure alerts and digital POD so you always know where the load is.'],
  ['One Carrier for Urgent & Ongoing', 'The same fleet behind your dedicated and scheduled freight can also move your emergencies.'],
];

export default function ExpeditedFreightPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · EXPEDITED FREIGHT"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="EXPEDITED & SAME-DAY FREIGHT,"
        titleAccent="WHEN TOMORROW IS TOO LATE."
        description="Production line down? Emergency job-site shortage? Urgent medical-linen surge? Point Zero Road Lines provides immediate direct-drive hot shot and same-day freight across the Greater Toronto Area, the Golden Horseshoe and cross-border lanes."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/flatbed-highway-ad.webp"
        heroAlt="Point Zero Road Lines expedited freight transport on the highway"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="When Minutes Mean Money, We Roll Now" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Direct-drive hot shot transit with your freight as the only cargo on the truck — no
                terminal stops, no consolidation, straight door-to-door.
              </p>
              <p>When downtime costs thousands an hour, you need a carrier with wheels rolling and a real dispatcher on the line. We mobilize equipment from our Mississauga yard and keep you updated from wheels-up to drop-off. For recurring off-hours needs, see our <Link href="/services/24-7-after-hours-weekend-dispatch" className="mf-inline-link">24/7 dispatch &amp; weekend delivery</Link>.</p>
              <p>From industrial machinery emergencies to healthcare surges and job-site shortages, Point Zero is built for time-critical logistics across Ontario and cross-border lanes.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Built for High-Stakes, Time-Critical Logistics"
            desc="Immediate wheels rolling and proactive communication from wheels-up to drop-off." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to 24/7 Dispatch" />
        </div>
      </section>

      {/* Scenarios */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Emergency scenarios" title="When Shippers Call Point Zero Hot Shot"
            desc="From industrial machinery emergencies to healthcare surges across Ontario." />
          <MiniGrid items={scenarios} />
          <p className="mf-note">Urgent <Link href="/services/construction-material-hauling" className="mf-inline-link">construction material</Link> or <Link href="/services/healthcare-linen-logistics" className="mf-inline-link">healthcare linen</Link> need? We can expedite those too.</p>
          <CenterCta label="Get an Urgent Freight Quote" />
        </div>
      </section>

      {/* How it works */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="How it works" title="How Expedited Freight Works" desc="From your call to proof of delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start an Expedited Request" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Why Point Zero" title="Why Shippers Trust Us With the Urgent Ones"
            desc="An established, company-owned carrier that answers when it matters." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving the GTA, Golden Horseshoe and cross-border lanes. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="See If We Can Cover Your Lane" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="FAQ" title="Expedited & Same-Day Freight FAQs" />
          <FaqAccordion items={EXPEDITED_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('expedited-same-day-freight')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Urgent Freight Emergency?"
        title="Need a Truck Rolling Right Now?"
        paragraphs={[
          'Production down, a job-site shortage, or an urgent surge?',
          'Call our 24/7 emergency dispatch line at (647) 680-1300 for immediate truck assignment, or send an urgent quote request.',
        ]}
        actions={[
          { href: TEL_HREF, label: 'Call 24/7 Dispatch', variant: 'primary', external: true, icon: <Phone size={16} /> },
          { href: QUOTE_HREF, label: 'Request an Urgent Quote', variant: 'line', icon: <ArrowUpRight size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
