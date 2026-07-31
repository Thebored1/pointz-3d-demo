export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Safety & Compliance | Point Zero Road Lines Trucking" },
  description: "Point Zero Road Lines is a bonded, DOT-registered carrier committed to Hours of Service, MTO and HTA compliance on every load. Learn about our safety standards.",
  alternates: { canonical: "/safety-compliance" },
  openGraph: {
    title: "Safety & Compliance",
    description: "Point Zero Road Lines is a bonded, DOT-registered carrier committed to Hours of Service, MTO and HTA compliance on every load. Learn about our safety standards.",
    url: "/safety-compliance",
  },
};

export default function Layout({ children }) {
  return children;
}
