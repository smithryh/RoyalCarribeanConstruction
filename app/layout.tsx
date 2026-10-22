import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Caribbean | Boat Construction, Yacht Manufacturing & Shipbuilding",
  description:
    "Pinnacle of bespoke naval architecture, superyacht manufacturing, and precision commercial shipbuilding in Tuzla, Istanbul / Turkey.",
  keywords: [
    "Royal Caribbean Shipbuilding",
    "Yacht Manufacturing Turkey",
    "Boat Construction Tuzla",
    "Superyacht Builder",
    "Commercial Shipbuilding",
    "Naval Architecture",
    "Ship Repair Refit",
  ],
  openGraph: {
    title: "Royal Caribbean Shipbuilding & Naval Engineering",
    description: "Building Excellence Across the Seas. Custom superyachts and commercial ships in Turkey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="bg-white text-navy font-jakarta antialiased flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
