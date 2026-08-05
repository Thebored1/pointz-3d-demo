export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Safety & Compliance | Point Zero Road Lines — Licensed & Insured" },
  description: "Point Zero Road Lines operates under Hours of Service, MTO & HTA compliance as a USDOT/MC-registered, licensed and insured carrier. USDOT 3983391.",
  alternates: { canonical: "/safety-compliance" },
  openGraph: {
    title: "Safety & Compliance",
    description: "Point Zero Road Lines operates under Hours of Service, MTO & HTA compliance as a USDOT/MC-registered, licensed and insured carrier. USDOT 3983391.",
    url: "/safety-compliance",
  },
};

export default function Layout({ children }) {
  return children;
}
