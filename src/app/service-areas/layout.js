export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Freight & Trucking Service Areas | GTA & Ontario" },
  description: "Point Zero Road Lines serves Mississauga, Brampton, Toronto, Vaughan, Caledon, Burlington & across Ontario, with cross-border trucking to the U.S.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    images: [{ url: '/images/dedicated-fleet-highway.webp', width: 1200, height: 630, alt: 'Point Zero Road Lines serving the GTA and Ontario' }],
    title: "Freight & Trucking Service Areas | GTA & Ontario",
    description: "Point Zero Road Lines serves Mississauga, Brampton, Toronto, Vaughan, Caledon, Burlington & across Ontario, with cross-border trucking to the U.S.",
    url: "/service-areas",
  },
};

export default function Layout({ children }) {
  return children;
}
