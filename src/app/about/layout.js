export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "About Point Zero Road Lines | Mississauga Trucking & Logistics Company" },
  description: "Point Zero Road Lines is a dedicated transportation company based in Mississauga, ON, built on quality, safety and integrity. Moffett delivery and specialized freight since 2006.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description: "Point Zero Road Lines is a dedicated transportation company based in Mississauga, ON, built on quality, safety and integrity. Moffett delivery and specialized freight since 2006.",
    url: "/about",
  },
};

export default function Layout({ children }) {
  return children;
}
