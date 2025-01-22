import "./globals.css";
import { GeistSans } from "geist/font/sans";
import NetworkBackground from "@/components/NetworkBackground";

export const metadata = {
  title: "Shamith Pasula | Software Engineer",
  description: "Personal website and portfolio of Shamith Pasula",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-dark text-light min-h-screen font-sans">
        <NetworkBackground />
        {children}
      </body>
    </html>
  );
}
