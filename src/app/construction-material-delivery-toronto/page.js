import LandingPage from '@/components/LandingPage';
import { buildMetadata } from '@/lib/landingPages';

export const metadata = buildMetadata('construction-material-delivery-toronto');

export default function Page() {
  return <LandingPage slug="construction-material-delivery-toronto" />;
}
