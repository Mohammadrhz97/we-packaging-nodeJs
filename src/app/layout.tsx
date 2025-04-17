import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import AosInit from "./aos-init";
import Background from "@/components/Background";
import StickyCallIcon from "@/components/StickyCallIcon";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

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

        {/* Google Tag Manager (Head) */}
      </Head>
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PD82BF67');
            `,
        }}
      />
      <body className={`antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (Body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PD82BF67"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
