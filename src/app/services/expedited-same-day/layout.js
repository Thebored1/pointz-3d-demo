export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Expedited, Same-Day & 24/7 Dispatch Trucking | Point Zero Road Lines" },
  description: "Point Zero Road Lines offers expedited and same-day freight with 24/7 after-hours and weekend dispatch, so your load is not stuck waiting on business hours.",
  alternates: { canonical: "/services/expedited-same-day" },
  openGraph: {
    title: "Expedited & Same Day",
    description: "Point Zero Road Lines offers expedited and same-day freight with 24/7 after-hours and weekend dispatch, so your load is not stuck waiting on business hours.",
    url: "/services/expedited-same-day",
  },
};

export default function Layout({ children }) {
  return children;
}
