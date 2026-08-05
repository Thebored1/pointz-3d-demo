export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Get a Freight Quote — GTA & Southern Ontario | Point Zero" },
  description: "Request a free freight quote from Point Zero Road Lines. Dedicated fleet, flatbed & Moffett delivery, and more. Quotes typically returned within 24 hours.",
  alternates: { canonical: "/get-a-quote" },
  openGraph: {
    title: "Get a Freight Quote — GTA & Southern Ontario | Point Zero",
    description: "Request a free freight quote from Point Zero Road Lines. Dedicated fleet, flatbed & Moffett delivery, and more. Quotes typically returned within 24 hours.",
    url: "/get-a-quote",
  },
};

export default function Layout({ children }) {
  return children;
}
