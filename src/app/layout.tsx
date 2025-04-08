"use client";

import { Markazi_Text } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import AosInit from "./aos-init";

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

const markaziText = Markazi_Text({
  subsets: ["arabic"],
  variable: "--font-markazi-text",
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="ltr">
      <body className={`${markaziText.variable} antialiased`}>
        <Background />
        <Navbar />
        <AosInit />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
