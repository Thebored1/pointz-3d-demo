"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, Layers, Shield, Package, Forklift, Route, Truck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import EditorialHero from './EditorialHero';
import { getRelated } from './serviceEditorialData';
import { ROLL_TITE_FAQS } from './rollTiteFaqs';
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
// verified roll-tite / curtain-side capability with hedged phrasing per §3a.

const QUOTE_LABEL = 'Request a Roll-Tite Quote';

const capabilities = [
  { icon: Layers, title: 'Retractable Curtain System', desc: 'The tarp rolls back for full side and overhead access, then seals tight for the road.' },
  { icon: Forklift, title: 'Side & Overhead Loading', desc: 'Forklift or crane loading from the side — without the tarping-and-untarping of an open flatbed.' },
  { icon: Shield, title: 'Weather-Tight Protection', desc: 'Suitable loads stay protected from the elements in transit, subject to load and conditions.' },
  { icon: Truck, title: 'Flatbed-Style Deck', desc: 'The loading flexibility of a flatbed with the weather protection closer to an enclosed van.' },
];

const freight = [
  ['Building Materials', 'Drywall, insulation and finished timber that need protection from the elements in transit.'],
  ['Palletized Industrial Goods', 'Manufacturing freight best loaded from the side and kept weather-tight on the road.'],
  ['Machinery & Equipment', 'Open-deck and roll-tite hauling for production machinery, subject to dimensions and load.'],
  ['Mixed Job-Site Loads', 'Materials heading to a site that need both quick side access and weather cover.'],
];

const compareRows = [
  ['Side or crane loading + weather protection', 'Roll-tite / curtain-side — the best of both'],
  ['Fully enclosed, dock-loaded palletized freight', 'Dry van — sealed enclosed trailer'],
  ['Oversized or crane-only open loads', 'Flatbed or step-deck — fully open deck, tarped if suitable'],
];

const processSteps = [
  ['1', 'Share Your Load & Site', 'Tell us the freight, dimensions, loading method and destination.'],
  ['2', 'We Confirm the Fit', 'We confirm roll-tite suits the load, or point you to a flatbed or dry van if it fits better.'],
  ['3', 'Load From the Side', 'Curtains roll back for forklift or crane loading, then seal weather-tight.'],
  ['4', 'Deliver Protected', 'Freight arrives protected, with 24/7 dispatch on the line throughout.'],
];

const whyChoose = [
  ['Company-Owned Trailers', 'Roll-tite and curtain-side trailers run by Point Zero and maintained in Mississauga.'],
  ['Right Equipment, Not Just Available', 'We match roll-tite, flatbed, dry van or Moffett to the load instead of forcing a fit.'],
  ['Built for Building Materials', 'A natural fit for drywall, timber and palletized site freight that must stay dry.'],
  ['Operating Since 2006', 'An established GTA carrier under MC 1492151 with 24/7 account dispatch.'],
];

export default function RollTiteCurtainSidePage() {
  return (
    <div className="pz-about mf-page">
      <Navbar />

      <EditorialHero
        badge="SERVICES · ROLL-TITE / CURTAIN-SIDE"
        badgeAlt="EST. 2006 · MISSISSAUGA HQ"
        titleLine1="SIDE-LOADING ACCESS,"
        titleAccent="WEATHER-TIGHT PROTECTION."
        description="Point Zero Road Lines runs roll-tite and curtain-side trailers across the GTA and Ontario — the side and overhead loading of a flatbed with weather protection closer to an enclosed van. Ideal for building materials and palletized industrial freight."
        scrollLabel="SCROLL FOR DETAILS"
        heroImage="/images/flatbed-blue-transport.webp"
        heroAlt="Point Zero Road Lines curtain-side flatbed transport on route"
        heroPosition="center"
      />

      <section className="mf-section mf-intro">
        <div className="pz-container">
          <SectionHead num="01" label="The service" title="Load Like a Flatbed, Protect Like a Van" />
          <div className="mf-prose mf-prose--wide">
            <Reveal>
              <p className="mf-lead">
                A roll-tite trailer is a flatbed-style deck under a retractable tarp — it rolls back
                for forklift or crane access, then seals weather-tight for the road.
              </p>
              <p>That combination suits freight that has to be loaded from the side but cannot ride exposed: drywall, insulation, finished timber and palletized industrial goods. It removes the tarping-and-untarping cycle of an open <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">flatbed</Link> while keeping suitable loads protected.</p>
              <p>Where a load is oversized or crane-only, an open flatbed or step-deck may fit better — we will tell you which. See the full <Link href="/fleet-and-equipment" className="mf-inline-link">fleet &amp; equipment</Link>.</p>
              <CtaButtons quoteLabel={QUOTE_LABEL} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="02" label="Capabilities" title="Why Roll-Tite Earns Its Place"
            desc="Side access and weather protection in one trailer, for freight that needs both." />
          <FeatureGrid cols={4} items={capabilities} />
          <CenterCta label="Talk to Our Logistics Specialists" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="03" label="What we haul" title="Freight Suited to Roll-Tite"
            desc="Building materials and palletized industrial freight that must stay dry." />
          <MiniGrid items={freight} />
          <p className="mf-note">Related: <Link href="/services/construction-material-hauling" className="mf-inline-link">construction material hauling</Link>, <Link href="/services/flatbed-moffett-transport" className="mf-inline-link">flatbed &amp; Moffett</Link>, and <Link href="/services/dedicated-fleet-services" className="mf-inline-link">dedicated fleet</Link>.</p>
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="04" label="Choosing equipment" title="Roll-Tite, Dry Van or Flatbed?"
            desc="The right deck depends on how the freight loads and what it must be protected from." />
          <ComparisonTable heads={['Your load', 'The fit']} rows={compareRows} />
          <CenterCta label="Not Sure? Tell Us Your Load" />
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="05" label="How it works" title="From Quote to Delivery" desc="A clear path from first call to a protected delivery." />
          <StepGrid steps={processSteps} />
          <CenterCta label="Get a Roll-Tite Quote" />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="06" label="Why Point Zero" title="Why Shippers Choose Our Curtain-Side Service"
            desc="Company-owned trailers and honest equipment matching." />
          <MiniGrid items={whyChoose} />
          <p className="mf-note">Serving lanes throughout the GTA and Ontario. <Link href="/service-areas" className="mf-inline-link">See all service areas &rarr;</Link></p>
        </div>
      </section>

      <section className="mf-section">
        <div className="pz-container">
          <SectionHead num="07" label="FAQ" title="Roll-Tite &amp; Curtain-Side FAQs" />
          <FaqAccordion items={ROLL_TITE_FAQS} />
        </div>
      </section>

      <section className="mf-section mf-band">
        <div className="pz-container">
          <SectionHead num="08" label="Related services" title="You might also need"
            desc="Explore related Point Zero freight and logistics services across the GTA and Ontario." />
          <RelatedServices items={getRelated('roll-tite-curtain-side-trailers')} />
          <div className="mf-center"><Link href="/services" className="mf-btn mf-btn--line">View all services <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <FinalCta
        badge="Keep It Dry, Load It Easy"
        title="Need Side-Loading With Weather Protection?"
        paragraphs={[
          'Have building materials or palletized freight that must be loaded from the side and kept dry?',
          'Tell us the load and destination and we will confirm whether roll-tite is the right call — and come back with a fast quote.',
        ]}
        actions={[
          { href: QUOTE_HREF, label: 'Request a Roll-Tite Quote', variant: 'primary', icon: <ArrowUpRight size={16} /> },
          { href: TEL_HREF, label: 'Call Point Zero', variant: 'line', external: true, icon: <Phone size={15} /> },
          { href: MAIL_HREF, label: 'Email Our Team', variant: 'line', external: true, icon: <Mail size={15} /> },
        ]}
      />

      <Footer hideCta />
    </div>
  );
}
