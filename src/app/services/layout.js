export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Trucking, Moffett Delivery & Logistics | Point Zero Road Lines" },
  description: "Dedicated fleet, flatbed & Moffett transport, warehousing, expedited freight, and last mile delivery across the GTA & Ontario.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Trucking, Moffett Delivery & Logistics | Point Zero Road Lines",
    description: "Dedicated fleet, flatbed & Moffett transport, warehousing, expedited freight, and last mile delivery across the GTA & Ontario.",
    url: "/services",
  },
};

export default function Layout({ children }) {
  return children;
}
