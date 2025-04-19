"use client";

import Image from "next/image";
import dynamic from "next/dynamic"; // ✅ Add this for dynamic import
import mg1 from "../../../public/MainpageGallery/mg1.jpg";
import mg2 from "../../../public/MainpageGallery/mg2.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Metadata } from "next";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p className="text-white">در حال بارگذاری نقشه...</p>,
});

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "با تیمی متخصص و پرانرژی، ما در وی پکیجینگ به ارائه بهترین محصولات با کیفیت و خدمات منحصر به فرد افتخار می‌کنیم. در این صفحه با تاریخچه، ارزش‌ها و ماموریت ما آشنا شوید و ببینید که چگونه می‌توانیم به شما در رسیدن به اهداف‌تان کمک کنیم.",
};

export default function ProductListClient() {
  return (
    <div className="max-w-[1024px] mx-auto pt-20">
      <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl">
        <h1>درباره بنیان‌گذاران وی</h1>
      </div>

      <div className="max-w-full mt-6 mx-5 bg-white/10 p-5 rounded-lg flex justify-center">
        <div className="md:flex gap-4 ">
          <Image
            src={mg1}
            alt="GIF"
            height={300}
            width={300}
            className="rounded-2xl shadow-white/10 shadow-lg mt-4"
          />
          <Image
            src={mg2}
            alt="GIF"
            height={300}
            width={300}
            className="rounded-2xl shadow-white/10 shadow-lg mt-4"
          />
        </div>
      </div>

      <div className="mt-6 max-w-full items-center justify-end mx-5 bg-white/10 p-5 rounded-lg">
        <p
          className="text-white text-right mb-4 font-[Morabba-Regular] text-xl md:text-2xl"
          dir="rtl"
        >
          <strong>سها جوریان و امیر حمزه</strong>
        </p>
        <p
          className="text-white text-justify font-[Morabba-Regular] md:text-lg"
          dir="rtl"
        >
          سها و امیر، بنیان‌گذاران وی، دو نگاه متفاوت اما مکمل‌اند. یکی با ذهنی
          مفهومی و نگاهی عمیق به هویت انسان؛ و دیگری با رویکردی تحلیلی،
          ساختارمند و آینده‌نگر.
        </p>
        <p
          className="text-white text-justify font-[Morabba-Regular] md:text-lg mt-4"
          dir="rtl"
        >
          سها جوریان، طراح هویت بصری و استراتژیست برند، باور دارد برند چیزی
          فراتر از یک لوگو یا تصویر است؛ برند، امتداد درونی‌ترین بخش وجود توست.
          سها با درک عمیقی از لایه‌های هویتی انسان، به کسب‌وکارها کمک می‌کند
          خودِ واقعی‌شان را زندگی کنند؛ و این «بودن» را در برندشان جاری کنند.
        </p>
        <p
          className="text-white text-justify font-[Morabba-Regular] md:text-lg mt-4"
          dir="rtl"
        >
          امیر حمزه، تحلیل‌گر و طراح ساختارهای برند، با ذهنی دقیق و آینده‌نگر به
          برند به‌عنوان یک سیستم زنده نگاه می‌کند؛ سیستمی که باید در زمان رشد
          کند، با آینده گفتگو داشته باشد، و در عین ریشه داشتن، روبه‌جلو حرکت
          کند. او پایه‌های فکری و سیستمی وی را بر اساس پایداری، تحول و نگاه به
          فردا بنا کرده است.
        </p>
        <p
          className="text-white text-right font-[Morabba-Regular] md:text-lg mt-4"
          dir="rtl"
        >
          آن‌ها وی را خلق کردند، نه فقط برای طراحی، بلکه برای ساختن برندهایی که
          زنده‌اند. برندهایی که از درون روشن می‌شوند، و آینده را روشن می‌کنند.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center text-white mx-5 mt-6 bg-white/10 p-5 rounded-lg">
          <MapComponent />
        </div>
        <div className="flex flex-col justify-start text-white mx-5 mt-6 bg-white/10 p-5 rounded-lg">
          <p className="text-white text-right font-[Morabba-Bold]" dir="rtl">
            راه های ارتباطی:
          </p>
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="tel:+989196017454"
              className="flex items-center justify-between px-4 hover:scale-105  border border-gray-800 rounded-2xl cursor-pointer  transition"
            >
              <span className="text-white text-right font-[Morabba-Regular]">
                ۰۹۱۹۶۰۱۷۴۵۴
              </span>
            </a>
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              تلفن:
            </span>
            <BsTelephoneInbound />
          </div>
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="https://instagram.com/we_packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
            >
              <FaLink className="w-5 h-5 text-white" />
              <span className="text-white font-[Morabba-Regular]">
                كليك كنید
              </span>
            </a>
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              اينستاگرام:
            </span>
            <FaInstagram />
          </div>
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="https://wa.me/+989196017454"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
            >
              <FaLink className="w-5 h-5 text-white" />
              <span className="text-white font-[Morabba-Regular]">
                كليك كنید
              </span>
            </a>
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              واتس اپ:
            </span>
            <FaWhatsapp />
          </div>
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="https://t.me/we_packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer gap-2 px-2 transition"
            >
              <FaLink className="w-5 h-5 text-white" />
              <span className="text-white font-[Morabba-Regular]">
                كليك كنید
              </span>
            </a>
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              تلگرام:
            </span>
            <FaTelegramPlane />
          </div>
          <div className="flex items-center justify-end gap-2 mt-8">
            <span
              className="text-white text-right font-[Morabba-Regular]"
              dir="rtl"
            >
              تهران-خیابان نوفل لوشاتو - خیابان رازی - پلاک 27 - طبقه دوم - واحد
              پنج
            </span>

            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              آدرس:
            </span>
            <HiOutlineOfficeBuilding />
          </div>
        </div>
      </div>
    </div>
  );
}
