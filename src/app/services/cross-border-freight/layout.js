export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Cross-Border Trucking: Ontario to the U.S. | Point Zero Road Lines" },
  description: "Cross-border freight from Point Zero Road Lines between Ontario and the United States, under our own USDOT and MC authority. Licensed and insured.",
  alternates: { canonical: "/services/cross-border-freight" },
  openGraph: {
    title: "Cross-Border Freight",
    description: "Cross-border freight from Point Zero Road Lines between Ontario and the United States, under our own USDOT and MC authority. Licensed and insured.",
    url: "/services/cross-border-freight",
  },
};

export default function Layout({ children }) {
  return children;
}
