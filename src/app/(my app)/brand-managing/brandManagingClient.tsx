"use client";

import Image from "next/image";
import { useState } from "react";
import ModalPage from "@/components/ModalPage";
import { MdSettingsPhone } from "react-icons/md";
import BrandFAQ from "@/components/BrandFAQ";
import { CallAction } from "@/components/CallAction";

export default function BrandManagingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[1024px] pt-18 mx-auto p-6">
      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg mx-auto text-center p-5"
      >
        <h2 className="md:text-3xl text-2xl text-white font-bold">
          برندینگ واقعی با وی؛ جایی‌که هویت برند، طراحی نمی‌شود، بلکه کشف
          می‌شود.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6 mx-auto">
        <div className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg h-full flex justify-center">
          <Image
            src="/brand-managing.jpg"
            width={450}
            height={450}
            alt="hero picture"
            className="rounded-2xl shadow-lg m-4"
          />
        </div>
        <div
          dir="rtl"
          className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg p-4 h-full"
        >
          <p className="text-2xl font-bold text-white mb-6 text-justify">
            خدمات ما
          </p>
          <ul className="list-disc pr-5 text-white space-y-4 text-md">
            <li>کشف و طراحی هویت برند با رویکرد Inside-full Branding</li>
            <li>تدوین استراتژی برند و شخصیت‌سازی</li>
            <li>طراحی هویت بصری (لوگو، رنگ، تایپوگرافی و...)</li>
            <li>تولید راهنمای لحن، صدا و محتوای برند</li>
            <li>پیاده‌سازی برند در رسانه‌ها و متریال‌ها</li>
            <li>طراحی و اجرای سیستم‌های برندینگ در فضای دیجیتال و فیزیکی</li>
          </ul>
        </div>
      </div>

      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg p-4 mt-6 text-white"
      >
        <h2 className="md:text-2xl text-lg font-bold">چرا «وی»؟</h2>
        <p className="text-justify mt-3">
          در «وی»، ما برندها را فقط طراحی نمی‌کنیم؛ ما به درون آن‌ها سفر
          می‌کنیم. با رویکرد منحصر‌به‌فرد Inside-full Branding، به ریشه‌ها،
          داستان‌های نادیده و انگیزه‌های پنهان هر کسب‌وکار نفوذ می‌کنیم تا هویتی
          زنده، صادق و ماندگار بسازیم.
        </p>
        <h2 className="md:text-2xl text-lg font-bold mt-4">ما کی هستیم؟</h2>
        <p className="text-justify mt-3">
          ا«وی» تیمی از استراتژیست‌ها، طراحان و روایت‌گران برند است که باور
          داریم هر برند، یک موجود زنده‌ است که باید شنیده، دیده و حس شود. نه
          صرفاً به‌عنوان یک لوگو، بلکه به‌عنوان یک تجربه عمیق انسانی.
        </p>
        <h2 className="md:text-2xl text-lg font-bold mt-4">چه کار می‌کنیم؟</h2>
        <ul className="list-disc pr-5 text-white space-y-4 text-md mt-3 text-justify">
          <li>
            <span className="font-bold underline ml-2">تحلیل عمیق برند:</span>{" "}
            کشف DNA برند، تحلیل رقبا و تعیین جایگاه منحصربه‌فرد در بازار ساخت
            هویت کلامی و بصری: طراحی لوگو، پالت رنگ، تایپوگرافی، صدای برند،
            داستان برند
          </li>
          <li>
            <span className="font-bold underline ml-2">
              تولید متریال‌های اجرایی:
            </span>
            کارت ویزیت، بسته‌بندی، ایمیل، لباس سازمانی، پروفایل دیجیتال و...
          </li>
          <li>
            <span className="font-bold underline ml-2">
              راهنمای جامع برندینگ:{" "}
            </span>
            طراحی مستنداتی برای اجرای صحیح برند در فضای واقعی و دیجیتال
          </li>
        </ul>
      </div>

      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg p-4 mt-6 text-white"
      >
        <h2 className="text-2xl font-bold">آیا وقتشه برندت رو زنده کنی؟</h2>
        <p className="text-justify mt-3">
          ااگر حس می‌کنی برندت فقط یه لوگو یا اسم نیست، بلکه یه شخصیت زنده‌ست که
          باید حس بشه، ما اینجاییم که کنارت باشیم. تو «وی»، فقط طراحی نمی‌کنیم،
          ما داستان برندتو می‌شنویم، کشف می‌کنیم و با استراتژی، محتوا و طراحی،
          هویتی می‌سازیم که برندت دیده بشه، شنیده بشه و حس بشه.
        </p>
        <p className="text-justify mt-3 text-md">
          <span className="font-bold text-lg">
            آماده‌ای برای ساختن یه برند واقعی؟
          </span>{" "}
          <br /> همین حالا با ما تماس بگیر یا جلسه مشاوره رایگان رزرو کن و قدم
          اول رو برای تحول درونی برندت بردار.{" "}
        </p>
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-between p-3 transition duration-200 ease-in-out hover:scale-105 w-36 mt-4 border border-gray-800 rounded-2xl cursor-pointer"
          >
            <span className="text-white text-lg">تماس با ما</span>
            <MdSettingsPhone className="w-[30px] h-[30px] text-white" />
          </button>
        </div>
      </div>

      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg p-4 mt-6 text-white"
      >
        <h2 className="text-2xl font-bold text-center">سوالات پرتکرار</h2>
        <BrandFAQ />
      </div>

      {/* Contact info and location map section */}
      <CallAction />

      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
