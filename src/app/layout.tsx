import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.littlelostnote.com';

export const metadata: Metadata = {
  title: {
    default: "Little Lost Note - A Family Story",
    template: "%s | Little Lost Note",
  },
  description: "A digital ebook of the family story Little Lost Note, written in 1957. An introduction to the orchestra through the tale of a little lost note.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Little Lost Note",
    title: "Little Lost Note - A Family Story",
    description: "A digital ebook of the family story Little Lost Note, written in 1957. An introduction to the orchestra through the tale of a little lost note.",
    images: [
      {
        url: `${baseUrl}/assets/little-lost-note-cover.png`,
        width: 1200,
        height: 630,
        alt: "Little Lost Note Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Lost Note - A Family Story",
    description: "A digital ebook of the family story Little Lost Note, written in 1957.",
    images: [`${baseUrl}/assets/little-lost-note-cover.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e9eae6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Little Lost Note" />
      </head>
      <body
        className={`${kalam.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
