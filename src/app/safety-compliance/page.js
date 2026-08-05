import ServiceEditorialPage from '../../components/ServiceEditorialPage';

export const metadata = {
  title: 'Safety & Compliance | Point Zero Road Lines — Licensed & Insured',
  description: 'Point Zero Road Lines operates under Hours of Service, MTO & HTA compliance as a USDOT/MC-registered, licensed and insured carrier. USDOT 3983391.',
};

const compliancePillars = [
  { icon: 'Shield', title: 'Regulatory Authority & Licensing', desc: 'Registered CVOR, USDOT 3983391, and MC 1492151 authorities. Fully insured with comprehensive commercial cargo and liability coverage.' },
  { icon: 'Users', title: 'Driver Screening & Certification', desc: 'Rigorous abstract verification, drug/alcohol screening, and mandatory Moffett rough-terrain and load securement certification.' },
  { icon: 'Wrench', title: 'Preventive Fleet Maintenance', desc: 'Routine mechanical service, brake checks, and safety inspections executed in-house at our Mississauga terminal.' },
  { icon: 'Clock', title: 'ELD & Hours of Service (HOS)', desc: 'Certified Electronic Logging Devices on all tractors to ensure strict compliance with Canadian and U.S. driver rest regulations.' },
];

const safetyProtocols = [
  { icon: 'CheckCircle', title: 'Daily Electronic DVIR Inspections', desc: 'Mandatory pre-trip and post-trip commercial vehicle inspections completed electronically before wheels roll.' },
  { icon: 'CheckCircle', title: 'Certified Load Securement', desc: 'Chains, heavy-duty ratchet straps, corner protectors, and edge guards matched to MTO and DOT cargo standards.' },
  { icon: 'CheckCircle', title: 'Job-Site Safety Compliance', desc: 'Full PPE, high-visibility apparel, site hazard awareness, and strict adherence to constructor safety protocols on active sites.' },
  { icon: 'CheckCircle', title: 'Speed & Telematics Monitoring', desc: 'Real-time engine diagnostics and satellite tracking to encourage safe driving behavior and route efficiency.' },
  { icon: 'CheckCircle', title: 'Zero Spill & Environmental Care', desc: 'Trained response procedures and spill kits carried on board to protect natural and municipal environments.' },
  { icon: 'CheckCircle', title: 'Continuous Driver Training', desc: 'Regular safety briefings on winter driving, tight maneuverability, fatigue management, and defensive operations.' },
];

export default function SafetyCompliancePage() {
  return (
    <ServiceEditorialPage
      relatedKey="safety-compliance"
      badge="SAFETY & COMPLIANCE"
      badgeAlt="USDOT 3983391 · MC 1492151"
      titleLine1="SAFETY FIRST."
      titleAccent="IN EVERY MILE, ON EVERY SITE."
      description="At Point Zero Road Lines, safety is a core operating principle. We maintain rigorous compliance with Ontario Ministry of Transportation (MTO), Highway Traffic Act (HTA), and U.S. Department of Transportation (USDOT) standards across every load."
      heroImage="/images/home-driver-cabin.webp"
      heroAlt="Professional Point Zero Road Lines driver in cabin"
      stats={[
        { value: 'USDOT', label: '3983391 Registered' },
        { value: 'MC', label: '1492151 Authority' },
        { value: '100%', label: 'ELD Compliant' },
        { value: 'Daily', label: 'DVIR Inspections' },
      ]}
      primarySection={{
        num: '01',
        label: 'Compliance Pillars',
        title: 'How we maintain industry-leading safety standards',
        desc: 'From hiring and training professional drivers to proactive equipment maintenance and real-time electronic oversight, safety is engineered into every process.',
        columns: 4,
        items: compliancePillars,
      }}
      gallery={[
        { src: '/images/home-fleet-manager.webp', alt: 'Safety and compliance oversight', span: 'main' },
        { src: '/images/dedicated-fleet-rows.webp', alt: 'Fleet maintenance inspection' },
        { src: '/images/about-fleet-lineup.webp', alt: 'Clean commercial fleet' },
      ]}
      darkSection={{
        num: '02',
        label: 'Safety Standards',
        title: 'Protocols followed on every single shipment',
        desc: 'Our daily commitment to protecting our drivers, your cargo, and the motoring public on Ontario highways.',
        items: safetyProtocols,
      }}
      cta={{
        titleLine1: 'HAVE QUESTIONS ABOUT OUR',
        titleAccent: 'SAFETY RECORD OR COMPLIANCE?',
        desc: 'Contact our safety department for carrier packets, certificate of insurance (COI), and compliance documentation.',
      }}
    />
  );
}
