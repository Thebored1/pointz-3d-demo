"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Wind, Settings, Building2, Package } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { EQUIPMENT_FAQS } from './equipmentFaqs';
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

// Equipment & Machinery Delivery — cluster page under the Moffett + Dedicated
// Fleet pillars. Built ONLY from confirmed intake facts; everything unconfirmed
// (payload/dimension limits, rigging/crane/oversize, non-Moffett unloading,
// specialized handling, cross-border) is omitted or deferred to "contact us"
// per the fact-handling rule (§3a). Positioned as delivery, not heavy-haul.

const QUOTE_LABEL = 'Request an Equipment Delivery Quote';
const MOFFETT_HREF = '/services/flatbed-moffett-transport';

const whatWeDeliver = [
  { icon: Wind, title: 'HVAC Equipment', desc: 'HVAC equipment delivered and unloaded onsite where the load and site are suitable for Moffett handling.' },
  { icon: Settings, title: 'Machinery', desc: 'Eligible machinery transported on a flatbed and unloaded with a truck-mounted Moffett, within applicable handling requirements.' },
  { icon: Building2, title: 'Commercial Equipment', desc: 'Commercial equipment delivered to suitable sites across the GTA where truck and Moffett access allow.' },
  { icon: Package, title: 'Palletized Equipment', desc: 'Palletized equipment and freight handled within the applicable weight and equipment requirements.' },
];

const capabilities = [
  ['Up to 5,500-Lb Moffett Lifting Capacity', 'Our Moffett-equipped trucks lift up to 5,500 lbs, subject to load characteristics, equipment configuration, site conditions and safe operating requirements.'],
  ['2-Way and 4-Way Moffett Units', 'Both 2-way and 4-way Moffett units are available; the 4-way adds lateral movement for added maneuverability when positioning loads.'],
  ['Onsite Unloading', 'The forklift travels with the delivery truck, so eligible loads can be unloaded on arrival — a separate onsite forklift may not be required.'],
  ['Gravel & Uneven-Ground Capability', 'Moffett units can operate in suitable outdoor environments, including certain gravel and uneven-ground conditions.'],
  ['Placement Where Accessible', 'Where site access, ground conditions and safe operating space permit, our driver can position eligible equipment toward the required delivery area.'],
  ['Professional Drivers', 'A professional driver accompanies the equipment and handles the transportation and onsite unloading process.'],
];

const processSteps = [
  ['1', 'Request an Equipment Delivery Quote', 'Tell us the pickup and delivery locations, the equipment, and when it needs to arrive.'],
  ['2', 'Share Equipment & Site Details', 'Provide the item type, approximate weight and dimensions, and any handling or access requirements.'],
  ['3', 'Confirm Access & Placement', 'We review the delivery site’s access, ground conditions, operating space and intended placement area.'],
  ['4', 'We Pick Up Your Equipment', 'Your equipment is loaded on a flatbed and transported to its destination.'],
  ['5', 'We Deliver With Flatbed + Moffett', 'A truck-mounted Moffett travels with the load, providing onsite unloading for eligible deliveries.'],
  ['6', 'We Unload & Position Where Accessible', 'Where site conditions permit, our driver unloads and positions the equipment toward the required area.'],
];

const audience = [
  ['Equipment & Machinery Suppliers', 'Getting eligible equipment to commercial, construction and site locations with onsite unloading.'],
  ['Retailers', 'Delivery of suitable equipment and palletized freight to retail and commercial destinations.'],
  ['Construction Companies', 'Equipment delivered to suitable jobsites, including sites with gravel or uneven ground and no loading dock.'],
];

export default function EquipmentMachineryPage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · EQUIPMENT & MACHINERY"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="EQUIPMENT & MACHINERY DELIVERY,"
        titleAccent="FLATBED TRANSPORT + MOFFETT UNLOADING."
        description="Point Zero Road Lines delivers eligible equipment and machinery across the Greater Toronto Area on flatbeds with truck-mounted Moffett forklifts — so suitable loads can be unloaded onsite, even where there’s no loading dock or forklift."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/moffett-unloading-forklift.webp"
        heroAlt="Point Zero Road Lines truck-mounted Moffett unloading freight onsite in the GTA"
        heroPosition="center"
      />

      {/* Advantage / intro */}
      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The advantage" title="Equipment Delivered — and Unloaded — on Arrival" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                For eligible loads, our <Link href={MOFFETT_HREF} className="mf-inline-link">Moffett-equipped flatbeds</Link> bring
                the forklift with the delivery — so equipment can be unloaded onsite without a separate forklift or crane on hand.
              </p>
              <p>When a destination has no loading dock or unloading equipment, arranging separate handling adds time and cost. A truck-mounted Moffett unloads eligible equipment on arrival and can position it toward the required area where site access and safe operating space allow.</p>
              <p>Our focus here is equipment and machinery <strong>delivery</strong> with flatbed transport and Moffett unloading — for items within our handling requirements. If you’re unsure whether your load is a fit, send the details and we’ll confirm.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="What we deliver" title="Equipment & Machinery We Handle"
            desc="Eligible equipment and machinery within applicable transport and Moffett handling requirements." />
          <FeatureGrid cols={4} items={whatWeDeliver} />
          <p className="mf-note">Not sure whether your equipment is a fit? Contact our team with the load details and we’ll confirm.</p>
          <CenterCta label="Check Your Equipment With Point Zero" />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="Capabilities" title="Why Moffett Delivery Works for Equipment"
            desc="Onsite unloading and placement built into the delivery, for loads within Moffett handling requirements." />
          <MiniGrid items={capabilities} />
          <CenterCta label="Talk to Our Delivery Team" />
        </div>
      </section>

      {/* How it works */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="How it works" title="How Equipment Delivery Works" desc="From quote to onsite placement." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Start an Equipment Delivery Quote" />
        </div>
      </section>

      {/* Who it's for */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="Who it's for" title="Who We Deliver Equipment For"
            desc="Suppliers, retailers and contractors who need eligible equipment delivered and unloaded onsite." />
          <MiniGrid items={audience} cols={2} />
          <p className="mf-note">Delivering across the Greater Toronto Area. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
          <CenterCta label="Request a GTA Equipment Delivery Quote" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="FAQ" title="Equipment & Machinery Delivery FAQs" />
          <FaqAccordion items={EQUIPMENT_FAQS} />
        </div>
      </section>

      {/* Related services */}
      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('equipment-machinery-delivery')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        badge="Tell Us About Your Equipment"
        title="Get an Equipment & Machinery Delivery Quote"
        paragraphs={[
          'Have equipment or machinery that needs delivering — and unloading — across the GTA?',
          'Send Point Zero the pickup and delivery details, the item, and any site-access notes. We’ll confirm whether it’s a fit for our flatbed and Moffett equipment and get you a quote.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request an Equipment Delivery Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
