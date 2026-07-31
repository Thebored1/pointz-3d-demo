export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Flatbed Trucking & Transport Services | Point Zero Road Lines" },
  description: "Specialized flatbed trucking from Point Zero Road Lines - open-deck capacity for steel, lumber, machinery and oversized freight across Ontario.",
  alternates: { canonical: "/services/flatbed-transportation" },
  openGraph: {
    title: "Flatbed Transportation",
    description: "Specialized flatbed trucking from Point Zero Road Lines - open-deck capacity for steel, lumber, machinery and oversized freight across Ontario.",
    url: "/services/flatbed-transportation",
  },
};

export default function Layout({ children }) {
  return children;
}
