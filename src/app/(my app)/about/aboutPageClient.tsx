"use client";

import Image from "next/image";

import P3 from "../../../../public/3.jpg";
import { CallAction } from "@/components/CallAction";

// Main functional component for the About Us page
export default function AboutPageClient() {
  return (
    <div className="max-w-[1024px] mx-auto pt-20">
      {/* Page title section */}
      <div className="max-w-full text-center bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg text-white text-4xl">
        <h1>درباره بنیان‌گذاران وی</h1>
      </div>

      {/* Gallery section showing founders' images */}
      <div className="max-w-full mt-6 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg flex justify-center">
        <Image
          src={P3}
          alt="founderImage"
          height={600}
          width={600}
          className="rounded-2xl "
        />
      </div>

      {/* Biographical content section */}
      <div className="mt-6 max-w-full items-center justify-end bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg">
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
          ساختارمند و آینده‌نگر.{" "}
        </p>
        {/* Additional paragraphs continue describing founders' philosophy */}
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

      <CallAction />
    </div>
  );
}
