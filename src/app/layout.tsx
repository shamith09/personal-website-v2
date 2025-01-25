import "./globals.css";
import { GeistSans } from "geist/font/sans";
import NetworkBackground from "@/components/NetworkBackground";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://shamithpasula.vercel.app/"),
  title: "Shamith Pasula | Software Engineer",
  description: "Shamith Pasula's personal website and portfolio",
  openGraph: {
    title: "Shamith Pasula | Software Engineer",
    description:
      "Full-stack developer passionate about building innovative solutions",
    url: "https://shamithpasula.vercel.app/",
    siteName: "Shamith Pasula",
    images: [
      {
        url: "https://shamithpasula.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shamith Pasula - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamith Pasula | Software Engineer",
    description:
      "Full-stack developer passionate about building innovative solutions",
    images: ["https://shamithpasula.vercel.app/og-image.png"],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
