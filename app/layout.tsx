import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <body
        className={inter.className}
        style={{
          // paddingTop: "100px", // header height
          paddingTop: "70px", // header height
          overflowX: "hidden",
        }}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}