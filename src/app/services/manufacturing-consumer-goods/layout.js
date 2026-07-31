export const metadata = {
  // SEO title tag from the client's approved copy package. `absolute` bypasses
  // the root "%s | Point Zero Road Lines" template so it renders verbatim.
  title: { absolute: "Manufacturing & Consumer Goods Freight Trucking | Point Zero Road Lines" },
  description: "LTL and FTL freight services for manufacturers, distributors and retailers from Point Zero Road Lines - reliable capacity across the GTA and Southern Ontario.",
  alternates: { canonical: "/services/manufacturing-consumer-goods" },
  openGraph: {
    title: "Manufacturing & Consumer Goods",
    description: "LTL and FTL freight services for manufacturers, distributors and retailers from Point Zero Road Lines - reliable capacity across the GTA and Southern Ontario.",
    url: "/services/manufacturing-consumer-goods",
  },
};

export default function Layout({ children }) {
  return children;
}
