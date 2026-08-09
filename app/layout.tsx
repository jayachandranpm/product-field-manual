import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(
    host ? `${protocol}://${host}` : "http://localhost:3000",
  );

  return {
    metadataBase,
    title: "Product Management Professional Certificate | ProductCraft",
    description:
      "A complete, project-based product management certificate with 6 courses, 24 modules, 96 lessons, practice labs, and a portfolio capstone.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Product Management Professional Certificate | ProductCraft",
      description:
        "96 lessons, 6 courses, 24 modules, and hands-on product work from foundations to product leadership and AI.",
      type: "website",
      images: [{ url: "/academy/og-v2.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Product Management Professional Certificate",
      description: "Learn product management by doing the work.",
      images: ["/academy/og-v2.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
