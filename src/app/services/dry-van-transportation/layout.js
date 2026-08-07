export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Dry Van Transportation Services | Point Zero Road Lines" },
  description: "Enclosed dry van freight from Point Zero Road Lines - FTL and LTL capacity for palletized and general freight across the GTA and Ontario.",
  alternates: { canonical: "/services/dry-van-transportation" },
  openGraph: {
    title: "Dry Van Transportation",
    description: "Enclosed dry van freight from Point Zero Road Lines - FTL and LTL capacity for palletized and general freight across the GTA and Ontario.",
    url: "/services/dry-van-transportation",
  },
};

export default function Layout({ children }) {
  return children;
}
