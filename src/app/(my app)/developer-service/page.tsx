import { Metadata } from "next";
import DeveloperServiceClient from "./developerServiceClient";

// SEO Metadata for the About page — used by Next.js to generate <head> info
export const metadata: Metadata = {
  title: "خدمات سایت",
  description:
    "در وی پکیجینگ، خدمات طراحی و توسعه وب‌سایت را با جدیدترین فناوری‌ها و رویکردی کاربرمحور ارائه می‌دهیم. از طراحی UI/UX گرفته تا بهینه‌سازی سئو و پشتیبانی فنی، ما همراه شما هستیم تا حضورتان در فضای دیجیتال قدرتمند و متمایز باشد.",
  openGraph: {
    title: "خدمات سایت | وی پکیجینگ",
    description:
      "با تیم حرفه‌ای ما، حضورتان در فضای آنلاین را تقویت کنید. طراحی، توسعه، سئو و پشتیبانی سایت.",
    url: "https://wepackaging.co/developer-service",
    siteName: "وی پکیجینگ",
    images: [
      {
        url: "/developer-service.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function AboutPage() {
  return <DeveloperServiceClient />;
}
