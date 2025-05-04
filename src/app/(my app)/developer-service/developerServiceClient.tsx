"use client";

import Image from "next/image";
import { useState } from "react";
import ModalPage from "@/components/ModalPage";
import { MdSettingsPhone } from "react-icons/md";
import FAQ from "@/components/FAQ";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import dynamic from "next/dynamic";

// Dynamically importing the MapComponent with SSR disabled
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p className="text-white">در حال بارگذاری نقشه...</p>,
});

export default function DeveloperServiceClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[1024px] pt-18 mx-auto p-6">
      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg mx-auto text-center p-5"
      >
        <h2 className="md:text-3xl text-2xl text-white font-bold">
          ساخت وبسایت‌های مدرن و کارآمد برای رشد کسب‌وکار شما
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6 mx-auto">
        <div className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg h-full flex justify-center">
          <Image
            src="/developer-service.png"
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
          <p className="text-md text-white mb-4 text-justify">
            ما در مجموعه وی، با بهره‌گیری از جدیدترین تکنولوژی‌های طراحی و توسعه
            وب مانند React و Next.js، وبسایت‌هایی خلق می‌کنیم که فراتر از یک
            ظاهر زیبا هستند؛ این وبسایت‌ها از نظر عملکرد، سرعت، امنیت و
            بهینه‌سازی برای موتورهای جستجو (SEO) در بالاترین سطح قرار دارند و
            تجربه‌ای بی‌نقص برای کاربران شما فراهم می‌کنند.
          </p>
          <ul className="list-disc pr-5 text-white space-y-2 text-sm">
            <li>طراحی واکنش‌گرا (Responsive)</li>
            <li>بهینه‌سازی کامل برای موتورهای جستجو (SEO)</li>
            <li>بارگذاری سریع و بهینه</li>
            <li>رعایت بهترین استانداردهای تجربه کاربری (UX)</li>
            <li>قابلیت سفارشی‌سازی کامل بر اساس نیاز برند شما</li>
          </ul>
        </div>
      </div>

      <div
        dir="rtl"
        className="bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-lg p-4 mt-6 text-white"
      >
        <h2 className="text-2xl font-bold">همین امروز قدم اول را بردارید!</h2>
        <p className="text-justify mt-3">
          اگر به دنبال یک وب‌سایت حرفه‌ای، واکنش‌گرا و کاربرپسند هستید که بتواند
          برند شما را در فضای آنلاین به بهترین شکل نمایش دهد، ما اینجا هستیم تا
          به شما کمک کنیم. از طراحی سفارشی گرفته تا توسعه کامل با React و
          Next.js، آماده‌ایم تا پروژه‌های شما را به واقعیت تبدیل کنیم.
        </p>
        <p className="text-justify mt-3 font-bold text-lg">
          برای مشاوره رایگان یا شروع همکاری همین حالا با ما تماس بگیرید!
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
        <FAQ />
      </div>

      {/* Contact info and location map section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col font-[Morabba-Regular] justify-start text-white mt-6 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg">
          <p className="text-white text-right text-xl font-bold" dir="rtl">
            راه های ارتباطی:
          </p>

          {/* Phone */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="tel:+989196017454"
              className="flex items-center justify-between px-4 hover:scale-105 border border-gray-800 rounded-2xl cursor-pointer transition"
            >
              <span className="text-white text-right font-[Morabba-Regular]">
                ۰۹۱۹۶۰۱۷۴۵۴
              </span>
            </a>
            <span className="text-white text-right" dir="rtl">
              تلفن:
            </span>
            <BsTelephoneInbound />
          </div>

          {/* Instagram */}
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
            <span className="text-white text-right" dir="rtl">
              اينستاگرام:
            </span>
            <FaInstagram />
          </div>

          {/* WhatsApp */}
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
            <span className="text-white text-right" dir="rtl">
              واتس اپ:
            </span>
            <FaWhatsapp />
          </div>

          {/* Telegram */}
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
            <span className="text-white text-right" dir="rtl">
              تلگرام:
            </span>
            <FaTelegramPlane />
          </div>

          {/* Address */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <span className="text-white text-right" dir="rtl">
              تهران-خیابان نوفل لوشاتو - خیابان رازی - پلاک 27 - طبقه دوم - واحد
              پنج
            </span>
            <span className="text-white text-right font-bold" dir="rtl">
              آدرس:
            </span>
            <HiOutlineOfficeBuilding />
          </div>
        </div>
        <div className="flex justify-center items-center text-white  md:mt-6 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg">
          <MapComponent />
        </div>
      </div>

      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
