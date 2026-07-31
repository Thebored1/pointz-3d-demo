export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Moffett Delivery in Mississauga & the GTA | Point Zero Road Lines" },
  description: "Truck-mounted Moffett forklift delivery from Point Zero Road Lines - freight unloaded on arrival at sites with no loading dock or forklift, across Ontario.",
  alternates: { canonical: "/services/moffett-delivery" },
  openGraph: {
    title: "Moffett Delivery",
    description: "Truck-mounted Moffett forklift delivery from Point Zero Road Lines - freight unloaded on arrival at sites with no loading dock or forklift, across Ontario.",
    url: "/services/moffett-delivery",
  },
};

export default function Layout({ children }) {
  return children;
}
