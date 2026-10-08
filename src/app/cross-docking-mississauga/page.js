import LandingPage from '@/components/LandingPage';
import { buildMetadata } from '@/lib/landingPages';

export const metadata = buildMetadata('cross-docking-mississauga');

export default function Page() {
  return <LandingPage slug="cross-docking-mississauga" />;
}
