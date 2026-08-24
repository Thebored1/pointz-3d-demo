"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, HeartPulse, ShieldCheck, Package, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { HEALTHCARE_FAQS } from './healthcareFaqs';
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

// Specialty cluster page under the Dedicated Fleet pillar. Built on the shared
// servicePillar block library. Reuses published content + hedged phrasing (§3a).

const QUOTE_LABEL = 'Request a Linen Transport Quote';

const capabilities = [
  { icon: Clock, title: 'Scheduled Turnaround Windows', desc: 'Adherence to daily morning and evening delivery cycles between laundry plants and facilities.' },
  { icon: ShieldCheck, title: 'Sanitary Handling Protocols', desc: 'Clean, enclosed trailers and defined cart-handling procedures to help prevent cross-contamination.' },
  { icon: Package, title: 'Rolling Cart & Sling Gear', desc: 'Trailers equipped with e-track, heavy-duty load bars and secure strapping for rolling laundry cages.' },
  { icon: HeartPulse, title: '24/7 & Weekend Exchange Runs', desc: 'Continuous facility coverage seven days a week, including early-morning and holiday schedules.' },
];

const sectors = [
  ['Hospital & Acute Care Loops', 'Scheduled clean and soiled linen exchanges serving medical institutions across Ontario.'],
  ['Long-Term Care & Senior Living', 'Dependable, timed deliveries helping keep resident bedding and care textiles stocked.'],
  ['Commercial Laundry Processing', 'High-volume inter-facility hauling between processing plants and regional distribution hubs.'],
  ['Hospitality & Hotels', 'Bulk hotel textile rotations and scheduled guest-linen replenishment across the GTA.'],
  ['Industrial Workwear & Uniforms', 'Scheduled pickup and drop routes for manufacturing and trade garment processors.'],
  ['Emergency Expedited Linen Drops', 'Immediate hot-shot runs when a hospital or facility surge exceeds planned linen inventory.'],
];

const processSteps = [
  ['1', 'Share Your Exchange Schedule', 'Tell us your facilities, cart counts and daily turnaround windows.'],
  ['2', 'We Build the Route Plan', 'Dedicated drivers and purpose-equipped trailers matched to your cycles.'],
  ['3', 'We Run the Loops', 'Clean and soiled exchanges on time, with sanitary handling throughout.'],
  ['4', 'We Cover Weekends & Surges', 'Weekend, holiday and expedited runs keep textiles flowing when demand spikes.'],
];

const whyChoose = [
  ['Built on Time-Critical Precision', 'Strict schedule adherence so clean textiles are never the reason a facility falls behind.'],
  ['Dedicated Cart & Sling Transport', 'Purpose-equipped trailers and dedicated drivers who know your facilities and dock routines.'],
  ['Seven-Day, Around-the-Clock Coverage', '24/7 dispatch and weekend runs backed by our own fleet and Mississauga terminal.'],
  ['Surge Support When You Need It', 'Expedited linen drops available when demand outpaces planned inventory.'],
];

export default function HealthcareLinenPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · HEALTHCARE LINEN"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="HEALTHCARE LINEN & TEXTILE LOGISTICS,"
        titleAccent="BUILT ON TIME-CRITICAL PRECISION."
        description="Hospitals, long-term care facilities, hospitality providers and commercial laundries run on strict turnaround cycles. Point Zero Road Lines provides dedicated cart and sling transport, sanitary handling protocols and tight schedule adherence so clean textiles are never delayed."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/dedicated-fleet-blue.webp"
        heroAlt="Point Zero Road Lines specialized healthcare textile fleet"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Clean Textiles, Delivered on the Cycle You Run On" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                Healthcare and laundry operations run on strict exchange windows. We provide dedicated
                drivers, purpose-equipped trailers and 24/7 dispatch so clean linen arrives on schedule.
              </p>
              <p>Clean and soiled exchanges are handled with sanitary protocols and cart gear built for rolling laundry cages. Recurring facility loops can run as a full <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet program</Link>, and surges can be covered by <Link href="/services/expedited-same-day-freight" className="mf-inline-link">expedited linen drops</Link>.</p>
              <p>From daily hospital rotations to hotel textile cycles and commercial processing loops, Point Zero keeps textiles moving across Ontario.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Engineered for Laundry & Healthcare Operations"
            desc="Predictable exchange schedules, dedicated drivers, purpose-equipped trailers and 24/7 dispatch oversight." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Team" />
        </div>
      </section>

      {/* Sectors */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Sectors served" title="Textile & Linen Operations We Support"
            desc="From daily hospital rotations to commercial processing facilities across Ontario." />
          <MiniGrid items={sectors} />
          <CenterCta label="Discuss Your Exchange Schedule" />
        </div>
      </section>

      {/* How it works */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="How it works" title="How Linen Transport Works" desc="From your schedule to running, sanitary loops." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start a Linen Transport Plan" />
        </div>
      </section>

      {/* Why choose */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Why Point Zero" title="Why Facilities Choose Point Zero"
            desc="Dedicated, sanitary, seven-day transport built around your turnaround windows." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving healthcare and hospitality facilities across the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="See If We Fit Your Turnaround Windows" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="FAQ" title="Healthcare Linen Logistics FAQs" />
          <FaqAccordion items={HEALTHCARE_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('healthcare-linen-logistics')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Dependable Linen Runs"
        title="Need a Dependable Carrier for Healthcare Linen Runs?"
        paragraphs={[
          'Running daily clean/soiled exchanges, weekend cycles, or surge linen needs?',
          'Contact our logistics team to discuss exchange schedules, cart counts and dedicated fleet capacity.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Linen Transport Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
