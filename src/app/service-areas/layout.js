export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Trucking Service Areas: GTA & Ontario | Point Zero Road Lines" },
  description: "Point Zero Road Lines serves Mississauga, Brampton, Bolton, Toronto and the wider GTA and Ontario, with cross-border trucking into the U.S.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas",
    description: "Point Zero Road Lines serves Mississauga, Brampton, Bolton, Toronto and the wider GTA and Ontario, with cross-border trucking into the U.S.",
    url: "/service-areas",
  },
};

export default function Layout({ children }) {
  return children;
}
