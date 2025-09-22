import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jennifer Watkins - Contemporary Artist",
  description: "Contemporary artist Jennifer Watkins creates ethereal paintings and mixed media works exploring themes of nature, emotion, and human experience.",
  keywords: ["contemporary art", "paintings", "mixed media", "artist", "gallery", "fine art"],
  authors: [{ name: "Jennifer Watkins" }],
  creator: "Jennifer Watkins",
  openGraph: {
    title: "Jennifer Watkins - Contemporary Artist",
    description: "Contemporary artist Jennifer Watkins creates ethereal paintings and mixed media works exploring themes of nature, emotion, and human experience.",
    type: "website",
    locale: "en_US",
    siteName: "Jennifer Watkins Art",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Watkins - Contemporary Artist",
    description: "Contemporary artist Jennifer Watkins creates ethereal paintings and mixed media works exploring themes of nature, emotion, and human experience.",
    creator: "@jwatkinsart",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
