import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AS FAMILY | Gaming Discord Community",
    template: "%s | AS FAMILY",
  },
  description: siteConfig.description,
  keywords: [
    "AS FAMILY",
    "gaming community",
    "Discord server",
    "Free Fire",
    "Among Us",
    "Valorant",
    "Minecraft",
    "gaming clan",
    "find teammates",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/branding/as-family-emblem.png",
    shortcut: "/branding/as-family-emblem.png",
    apple: "/branding/as-family-emblem.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "AS FAMILY | Gaming Discord Community",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 1200,
        alt: "AS FAMILY emblem — gold crown and wings crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS FAMILY | Gaming Discord Community",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
