import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noki | Quantitative/AI Developer",
  description:
    "Personal portfolio of Noki (Lok Kei Chau) — Quantitative/AI Developer & CS Student @ CUHK. Building at the intersection of machine intelligence and financial markets.",
  keywords: ["quantitative developer", "AI engineer", "CUHK", "computer science", "Hong Kong", "quant finance", "machine learning", "derivatives pricing", "full-stack developer"],
  authors: [{ name: "Noki (Lok Kei Chau)" }],
  openGraph: {
    title: "Noki | Quantitative/AI Developer",
    description:
      "Personal portfolio of Noki — Quantitative/AI Developer & CS Student @ CUHK. Options pricing, ML, full-stack development.",
    url: "https://worldofnoki.com",
    siteName: "Noki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noki | Quantitative/AI Developer",
    description:
      "Building at the intersection of machine intelligence and financial markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add your Google Search Console verification ID here if you have one
    // google: "your-verification-id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
