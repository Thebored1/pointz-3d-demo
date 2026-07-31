export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Dedicated Fleet Trucking Services in Mississauga & the GTA" },
  description: "Point Zero Road Lines provides dedicated fleet trucking - consistent trucks, trailers and drivers for predictable, reliable freight capacity across Ontario.",
  alternates: { canonical: "/services/dedicated-fleet" },
  openGraph: {
    title: "Dedicated Fleet",
    description: "Point Zero Road Lines provides dedicated fleet trucking - consistent trucks, trailers and drivers for predictable, reliable freight capacity across Ontario.",
    url: "/services/dedicated-fleet",
  },
};

export default function Layout({ children }) {
  return children;
}
