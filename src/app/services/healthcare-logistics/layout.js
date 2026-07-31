export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Healthcare Linen & Textile Trucking | Point Zero Road Lines" },
  description: "Healthcare linen and textile transportation across the GTA from Point Zero Road Lines, with scheduling built around hygiene-sensitive facility turnaround windows.",
  alternates: { canonical: "/services/healthcare-logistics" },
  openGraph: {
    title: "Healthcare Logistics",
    description: "Healthcare linen and textile transportation across the GTA from Point Zero Road Lines, with scheduling built around hygiene-sensitive facility turnaround windows.",
    url: "/services/healthcare-logistics",
  },
};

export default function Layout({ children }) {
  return children;
}
