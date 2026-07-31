export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Building Material Distribution & Delivery | Point Zero Road Lines" },
  description: "Building material distribution from Point Zero Road Lines - warehousing, consolidation and Moffett delivery from supplier yards to job sites across Ontario.",
  alternates: { canonical: "/services/building-material-distribution" },
  openGraph: {
    title: "Building Material Distribution",
    description: "Building material distribution from Point Zero Road Lines - warehousing, consolidation and Moffett delivery from supplier yards to job sites across Ontario.",
    url: "/services/building-material-distribution",
  },
};

export default function Layout({ children }) {
  return children;
}
