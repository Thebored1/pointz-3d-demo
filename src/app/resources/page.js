import ResourcesHub from '@/components/ResourcesHub';

export const metadata = {
  title: 'Freight & Logistics Guides',
  description:
    'Plain-language guides to how freight moves — Moffett & flatbed delivery, trailer types, LTL vs FTL, cross-docking and load securement in Ontario.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    type: 'website',
    url: '/resources',
    title: 'Freight & Logistics Guides | Point Zero Road Lines',
    description:
      'Plain-language guides to how freight moves — Moffett & flatbed delivery, trailer types, LTL vs FTL, cross-docking and load securement in Ontario.',
  },
};

export default function Page() {
  return <ResourcesHub />;
}
