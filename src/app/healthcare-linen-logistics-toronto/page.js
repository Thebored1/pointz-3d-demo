import LandingPage from '@/components/LandingPage';
import { buildMetadata } from '@/lib/landingPages';

export const metadata = buildMetadata('healthcare-linen-logistics-toronto');

export default function Page() {
  return <LandingPage slug="healthcare-linen-logistics-toronto" />;
}
