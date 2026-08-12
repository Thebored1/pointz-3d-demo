export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Freight & Trucking Service Areas | GTA & Ontario" },
  description: "Point Zero Road Lines serves Mississauga, Brampton, Toronto, Vaughan, Caledon, Burlington & across Ontario, with cross-border trucking to the U.S.",
  alternates: {
    canonical: "/service-areas",
    languages: {
      'en-CA': '/service-areas',
      'en-US': '/service-areas',
      'x-default': '/service-areas',
    },
  },
  openGraph: {
    title: "Freight & Trucking Service Areas | GTA & Ontario",
    description: "Point Zero Road Lines serves Mississauga, Brampton, Toronto, Vaughan, Caledon, Burlington & across Ontario, with cross-border trucking to the U.S.",
    url: "/service-areas",
  },
};

export default function Layout({ children }) {
  return children;
}
