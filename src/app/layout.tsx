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
      </Head>
      <body className={`antialiased`} suppressHydrationWarning>
        <Script id="matomo" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//app-matomo-xm9zx.apps.teh2.abrhapaas.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
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
