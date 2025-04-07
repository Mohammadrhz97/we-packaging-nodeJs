import { Markazi_Text } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import "./globals.css";

const markaziText = Markazi_Text({
  subsets: ["arabic"],
  variable: "--font-markazi-text",
  weight: "500",
});

export const metadata = {
  title: "WE. Pakaging",
  description:
    "طراحی بسته‌بندی و برندینگ حرفه‌ای برای کسب‌وکارهای نوآور. ساخت هویتی ماندگار برای برند شما",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`${markaziText.variable} antialiased`}>
        <Navbar />
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
