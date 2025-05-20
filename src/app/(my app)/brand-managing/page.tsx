import { Metadata } from "next";
import DeveloperServiceClient from "./brandManagingClient";

// SEO Metadata for the About page — used by Next.js to generate <head> info
export const metadata: Metadata = {
  title: "خدمات برندینگ",
  description:
    "در استودیو وی، برندسازی فقط طراحی لوگو نیست؛ ما از درون هر کسب‌وکار آغاز می‌کنیم تا با کشف هویت، شخصیت و داستان برند، یک هویت بصری و کلامی ماندگار بسازیم.",
  openGraph: {
    title: "خدمات برندینگ | وی پکیجینگ",
    description:
      "در استودیو وی، برندسازی فقط طراحی لوگو نیست؛ ما از درون هر کسب‌وکار آغاز می‌کنیم تا با کشف هویت، شخصیت و داستان برند، یک هویت بصری و کلامی ماندگار بسازیم.",
    url: "/brand-managing",
    siteName: "وی پکیجینگ",
    images: [
      {
        url: "/blogImages/brand-managing.jpg",
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
