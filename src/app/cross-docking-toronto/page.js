import LandingPage from '@/components/LandingPage';
import { buildMetadata } from '@/lib/landingPages';

export const metadata = buildMetadata('cross-docking-toronto');

export default function Page() {
  return <LandingPage slug="cross-docking-toronto" />;
}
