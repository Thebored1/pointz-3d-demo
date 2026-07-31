export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Trucking & Logistics Services in the GTA | Point Zero Road Lines" },
  description: "From Moffett delivery and dedicated fleet to flatbed, warehousing and 24/7 dispatch, explore the full range of services from Point Zero Road Lines.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services",
    description: "From Moffett delivery and dedicated fleet to flatbed, warehousing and 24/7 dispatch, explore the full range of services from Point Zero Road Lines.",
    url: "/services",
  },
};

export default function Layout({ children }) {
  return children;
}
