export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Warehouse & Cross-Dock Storage in the GTA | Point Zero Road Lines" },
  description: "Secure warehouse and cross-dock facilities from Point Zero Road Lines, centrally located in the GTA - keeping your freight moving, not sitting idle.",
  alternates: { canonical: "/services/warehouse-cross-dock" },
  openGraph: {
    title: "Warehouse & Cross-Dock",
    description: "Secure warehouse and cross-dock facilities from Point Zero Road Lines, centrally located in the GTA - keeping your freight moving, not sitting idle.",
    url: "/services/warehouse-cross-dock",
  },
};

export default function Layout({ children }) {
  return children;
}
