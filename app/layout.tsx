import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientEffects from "@/components/ClientEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nukkar Natak",
  description: "Modern Animated Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={inter.className}
        style={{
          paddingTop: "70px",
          overflowX: "hidden",
        }}
      >
        <ClientEffects />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}