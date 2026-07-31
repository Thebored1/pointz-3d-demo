export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Get a Freight Quote | Point Zero Road Lines Trucking" },
  description: "Get in touch with Point Zero Road Lines for Moffett delivery, dedicated fleet, flatbed or warehousing services. Request a quote or contact our Mississauga office.",
  alternates: { canonical: "/get-a-quote" },
  openGraph: {
    title: "Get a Quote",
    description: "Get in touch with Point Zero Road Lines for Moffett delivery, dedicated fleet, flatbed or warehousing services. Request a quote or contact our Mississauga office.",
    url: "/get-a-quote",
  },
};

export default function Layout({ children }) {
  return children;
}
