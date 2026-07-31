export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Construction Material Delivery & Hauling | Point Zero Road Lines" },
  description: "On-time construction material delivery from Point Zero Road Lines, including flatbed and Moffett delivery direct to job sites across the GTA and Southern Ontario.",
  alternates: { canonical: "/services/construction-material-delivery" },
  openGraph: {
    title: "Construction Material Delivery",
    description: "On-time construction material delivery from Point Zero Road Lines, including flatbed and Moffett delivery direct to job sites across the GTA and Southern Ontario.",
    url: "/services/construction-material-delivery",
  },
};

export default function Layout({ children }) {
  return children;
}
