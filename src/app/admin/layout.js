export const metadata = {
  title: "Admin Panel",
  description: "Internal admin panel — read-only view of quote and contact requests.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return children;
}
