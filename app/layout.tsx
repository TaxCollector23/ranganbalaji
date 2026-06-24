import type { Metadata, Viewport } from "next";
import { cormorant, spaceGrotesk, sourceSerif, dmMono } from "@/lib/fonts";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rangan Balaji — Builder, Developer, Student",
    template: "%s · Rangan Balaji",
  },
  description: site.intro,
  keywords: [
    "Rangan Balaji",
    "software engineer",
    "developer",
    "builder",
    "founder",
    "startups",
    "AI",
    "web development",
    "product development",
    "Fracture Studio",
  ],
  authors: [{ name: "Rangan Balaji", url: site.url }],
  creator: "Rangan Balaji",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Rangan Balaji — Builder, Developer, Student",
    description: site.headline,
    siteName: "Rangan Balaji",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangan Balaji — Builder, Developer, Student",
    description: site.headline,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${sourceSerif.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
