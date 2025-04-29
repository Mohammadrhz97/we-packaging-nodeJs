import { Metadata } from "next";
import AboutPageClient from "./aboutPageClient";

// SEO Metadata for the About page — used by Next.js to generate <head> info
export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "با تیمی متخصص و پرانرژی، ما در وی پکیجینگ به ارائه بهترین محصولات با کیفیت و خدمات منحصر به فرد افتخار می‌کنیم. در این صفحه با تاریخچه، ارزش‌ها و ماموریت ما آشنا شوید و ببینید که چگونه می‌توانیم به شما در رسیدن به اهداف‌تان کمک کنیم.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
