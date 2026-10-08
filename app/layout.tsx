import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esdras Thychel MBOULOUKOUE | KoniG.dev — Développeur Full-Stack & IA Freelance",
  description:
    "Portfolio d'Esdras Thychel MBOULOUKOUE (KoniG.dev), développeur full-stack et IA freelance à Brazzaville. Automatisations IA, web & mobile, Next.js, Flutter, Mistral AI.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${playfair.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
