export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "About Point Zero Road Lines | Ontario Carrier Since 2006" },
  description: "Point Zero Road Lines has run dedicated fleet, Moffett delivery, and warehousing across Ontario since 2006. USDOT & MC registered, licensed & insured.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Point Zero Road Lines | Ontario Carrier Since 2006",
    description: "Point Zero Road Lines has run dedicated fleet, Moffett delivery, and warehousing across Ontario since 2006. USDOT & MC registered, licensed & insured.",
    url: "/about",
  },
};

export default function Layout({ children }) {
  return children;
}
