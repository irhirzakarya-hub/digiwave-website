import type { Metadata, Viewport } from "next";
import { Orbitron, Rajdhani, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DIGIWAVE | Ne suis pas la vague, sois la vague",
  description:
    "Agence digitale créative - Design, Automatisation, Montage Vidéo, Création de Sites Web, Publicités, Boost et Gestion de Pages. Des solutions digitales simples, flexibles et efficaces.",
  keywords: [
    "agence digitale",
    "design",
    "automatisation",
    "montage vidéo",
    "création sites web",
    "publicités",
    "boost pages",
    "gestion pages",
    "DIGIWAVE",
    "Maroc",
  ],
  authors: [{ name: "DIGIWAVE" }],
  openGraph: {
    title: "DIGIWAVE | Ne suis pas la vague, sois la vague",
    description:
      "Agence digitale créative - Des solutions digitales simples, flexibles et efficaces.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIWAVE | Ne suis pas la vague, sois la vague",
    description:
      "Agence digitale créative - Des solutions digitales simples, flexibles et efficaces.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#020810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${cairo.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
