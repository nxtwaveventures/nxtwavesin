import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NxtWaves | AI Talent Retention",
  description: "We map India's best AI talent, then rigorously stress-test their architecture skills and cultural fit so your GCC scales flawlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
