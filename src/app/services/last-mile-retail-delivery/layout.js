export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Last Mile & Retail Delivery in the GTA | Point Zero Road Lines" },
  description: "Scheduled last mile and retail store delivery from Point Zero Road Lines, including white glove material placement across the GTA and Ontario.",
  alternates: { canonical: "/services/last-mile-retail-delivery" },
  openGraph: {
    title: "Last Mile & Retail Delivery",
    description: "Scheduled last mile and retail store delivery from Point Zero Road Lines, including white glove material placement across the GTA and Ontario.",
    url: "/services/last-mile-retail-delivery",
  },
};

export default function Layout({ children }) {
  return children;
}
