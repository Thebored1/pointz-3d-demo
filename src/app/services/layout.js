import { SITE_NAME } from "@/lib/site";

export const metadata = {
  // A bare string here would drop the root template for the nested service
  // pages, so re-declare it alongside this segment's own title.
  title: { default: "Services", template: `%s | ${SITE_NAME}` },
  description: "Dedicated fleet, specialty equipment and warehousing and storage across the GTA and Ontario.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services",
    description: "Dedicated fleet, specialty equipment and warehousing and storage across the GTA and Ontario.",
    url: "/services",
  },
};

export default function Layout({ children }) {
  return children;
}
