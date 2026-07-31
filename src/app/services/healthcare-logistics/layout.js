export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Healthcare Linen & Textile Trucking | Point Zero Road Lines" },
  description: "Point Zero Road Lines specializes in healthcare linen and textile transportation across the GTA, with equipment and scheduling built for hygiene-sensitive freight.",
  alternates: { canonical: "/services/healthcare-logistics" },
  openGraph: {
    title: "Healthcare Logistics",
    description: "Point Zero Road Lines specializes in healthcare linen and textile transportation across the GTA, with equipment and scheduling built for hygiene-sensitive freight.",
    url: "/services/healthcare-logistics",
  },
};

export default function Layout({ children }) {
  return children;
}
