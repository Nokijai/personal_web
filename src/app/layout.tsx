import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noki | Quantitative/AI Developer",
  description:
    "Personal portfolio of Noki — Quantitative/AI Developer & CS Student @ CUHK",
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
