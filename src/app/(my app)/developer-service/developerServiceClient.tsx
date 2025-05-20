"use client";

import Image from "next/image";
import { useState } from "react";
import ModalPage from "@/components/ModalPage";
import { MdSettingsPhone } from "react-icons/md";
import FAQ from "@/components/DevFAQ";
import { CallAction } from "@/components/CallAction";

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
      <CallAction />

      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
