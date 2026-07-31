export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Contact Point Zero Road Lines | Mississauga Trucking Office" },
  description: "Contact Point Zero Road Lines in Mississauga for dedicated fleet, Moffett and flatbed freight across Ontario. 24/7 dispatch, weekend pickup and delivery.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact",
    description: "Contact Point Zero Road Lines in Mississauga for dedicated fleet, Moffett and flatbed freight across Ontario. 24/7 dispatch, weekend pickup and delivery.",
    url: "/contact-us",
  },
};

export default function Layout({ children }) {
  return children;
}
