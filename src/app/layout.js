import "./globals.css";

export const metadata = {
  title: "Pointz Logistics",
  description: "Next-Generation Logistics & Supply Chain Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
