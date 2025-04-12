import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import AosInit from "./aos-init";
import Background from "@/components/Background";
import StickyCallIcon from "@/components/StickyCallIcon";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="ltr">
      <Head>
        {/* Add the viewport meta tag directly here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`antialiased`} suppressHydrationWarning>
        <Background />
        <Navbar />
        <AosInit />
        <StickyCallIcon />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
