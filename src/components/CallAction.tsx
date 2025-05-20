"use client";

import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

// Dynamic import to load components lazily on client-side only
import dynamic from "next/dynamic";

// Dynamically importing the MapComponent with SSR disabled
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false, // Disable server-side rendering
  loading: () => <p className="text-white">در حال بارگذاری نقشه...</p>, // Fallback UI while loading
});

export const CallAction = () => {
  return (
    <>
      {/* Contact info and location map section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map showing business location */}
        <div className="flex justify-center items-center text-white  mt-6 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg">
          <MapComponent />
        </div>

        {/* Contact details section */}
        <div className="flex flex-col justify-start text-white  mt-6 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] p-5 rounded-lg">
          <p className="text-white text-right font-[Morabba-Bold]" dir="rtl">
            راه های ارتباطی:
          </p>

          {/* Phone */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <a
              href="tel:02165021226"
              className="flex items-center justify-between px-4 hover:scale-105  border border-gray-800 rounded-2xl cursor-pointer  transition"
            >
              <span className="text-white text-right font-[Morabba-Regular]">
                ۰۲۱-۶۵۰۲۱۲۲۶
              </span>
            </a>
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
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
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
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
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
            <span
              className="text-white text-right font-[Morabba-Bold]"
              dir="rtl"
            >
              تلگرام:
            </span>
            <FaTelegramPlane />
          </div>

          {/* Address */}
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
    </>
  );
};
