"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Clock, Truck, Route, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { AFTER_HOURS_FAQS } from './afterHoursFaqs';
import {
  Reveal,
  SectionHead,
  CtaButtons,
  CenterCta,
  FeatureGrid,
  MiniGrid,
  FaqAccordion,
  RelatedServices,
  FinalCta,
  QUOTE_HREF,
  TEL_HREF,
  MAIL_HREF,
} from './servicePillar/blocks';
import '../app/about/AboutPage.css';

// Capability page (kept intentionally lighter — SERVICE_PILLAR_PLAN §3). Built on
// the shared servicePillar block library. Reuses published content + hedged
// phrasing per the fact-handling rule (§3a).

const QUOTE_LABEL = 'Request After-Hours Dispatch';

const capabilities = [
  { icon: Clock, title: 'Live Human Dispatch 24/7/365', desc: 'Call (647) 680-1300 after hours and an experienced dispatcher answers — never an automated recording.' },
  { icon: Truck, title: 'Weekend & Holiday Fleet Operations', desc: 'Full fleet service across Saturday, Sunday and statutory holidays for continuous supply-chain coverage.' },
  { icon: Route, title: 'Overnight Linehauls & Plant Transfers', desc: 'Move freight across GTA corridors overnight for early-morning dock readiness the next day.' },
  { icon: ShieldCheck, title: 'Real-Time Load Rescue', desc: 'Rerouting, backup equipment mobilization and rapid intervention when unexpected events occur.' },
];

const scenarios = [
  ['Continuous 3-Shift Manufacturing', 'Plant replenishment for automotive, packaging and industrial facilities running 24/7 production.'],
  ['Weekend Job-Site Deliveries', 'Deliveries staged Saturday and Sunday mornings when traffic is light and access roads are open.'],
  ['Hospital Weekend Linen Cycles', 'Regular Saturday and Sunday laundry-cart rotations for healthcare and acute-care facilities.'],
  ['Retail Restocking Before Opening', 'Night and early-morning mall deliveries completed before customers and foot traffic arrive.'],
  ['Emergency Plant Breakdown Hauling', 'Overnight hot shots for replacement tooling, electrical components and heavy mechanicals.'],
  ['Sunday Cross-Dock Pre-Staging', 'Inbound trailers unloaded and staged Sunday for rapid Monday-morning dispatch.'],
];

const whyChoose = [
  ['A Real Person, Not a Voicemail', 'Live dispatchers answer around the clock from our Mississauga terminal.'],
  ['Fleet That Runs Seven Days', 'Weekend and holiday operations are standard, not an exception.'],
  ['Overnight Readiness', 'Linehauls timed so freight is dock-ready first thing in the morning.'],
  ['One Carrier, Any Hour', 'The same fleet behind your scheduled freight also covers nights, weekends and surges.'],
];

export default function AfterHoursDispatchPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · 24/7 DISPATCH"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="24/7 LIVE DISPATCH & WEEKEND DELIVERY,"
        titleAccent="BECAUSE FREIGHT DOESN'T STOP AT 5 PM."
        description="Your manufacturing lines run three shifts, construction pours happen at dawn on Saturday, and healthcare linens cycle over long weekends. Point Zero Road Lines provides around-the-clock live dispatch, overnight linehauls and full weekend delivery operations."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/dedicated-fleet-highway.webp"
        heroAlt="Point Zero Road Lines transport truck operating at night"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Real 24/7 Capability, Not Just an On-Call Phone" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Our dispatch team operates continuously from our Mississauga terminal — so shippers get
                real answers and equipment moving whenever duty calls, day or night.
              </p>
              <p>Weekend job-site drops, overnight plant transfers, holiday hospital linen runs — off-hours freight is standard here. For time-critical moves, this pairs with our <Link href="/services/expedited-same-day-freight" className="mf-inline-link">expedited &amp; same-day freight</Link>.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Around-the-Clock Coverage That Actually Answers"
            desc="Continuous dispatch and equipment mobilization out of our Mississauga terminal." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to 24/7 Dispatch" />
        </div>
      </section>

      {/* Scenarios */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="After-hours scenarios" title="Operations Running on Our 24/7 Clock"
            desc="From overnight inter-plant transfers to weekend construction drops and holiday hospital runs." />
          <MiniGrid items={scenarios} />
          <CenterCta label="Set Up After-Hours Coverage" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Why Point Zero" title="Why Shippers Rely on Our Off-Hours Coverage"
            desc="A live team and a seven-day fleet for the hours other carriers don't cover." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Covering the GTA and Ontario, around the clock. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="FAQ" title="24/7 Dispatch & Weekend Delivery FAQs" />
          <FaqAccordion items={AFTER_HOURS_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('24-7-after-hours-weekend-dispatch')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="After-Hours & Weekends"
        title="Need Dispatch or Delivery Outside Business Hours?"
        paragraphs={[
          'Off-hours plant transfer, weekend job-site drop, or a holiday emergency?',
          'Call our 24/7 dispatch desk directly at (647) 680-1300 — we are on the line right now.',
        ]}
        actions={[
          { href: TEL_HREF, label: 'Call 24/7 Dispatch', variant: 'primary', external: true, icon: <Phone size={16} /> },
          { href: QUOTE_HREF, label: 'Request After-Hours Dispatch', variant: 'line', icon: <ArrowUpRight size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
