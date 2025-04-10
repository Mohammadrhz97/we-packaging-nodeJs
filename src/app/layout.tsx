import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import AosInit from "./aos-init";
import Background from "@/components/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="ltr">
      <body className={`antialiased`} suppressHydrationWarning>
        <Background />
        <Navbar />
        <AosInit />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
