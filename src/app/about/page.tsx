"use client";

import Image from "next/image";
import dynamic from "next/dynamic"; // ✅ Add this for dynamic import
import mg1 from "../../../public/MainpageGallery/mg1.jpg";
import mg2 from "../../../public/MainpageGallery/mg2.jpg";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

// ✅ Dynamically import the MapComponent without SSR
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p className="text-white">در حال بارگذاری نقشه...</p>,
});

export default function ProductListClient() {
  return (
    <div className="max-w-[1024px] mx-auto pt-20">
      <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl">
        <h1>درباره ما</h1>
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

      <div className="mt-6 max-w-full justify-items-center place-content-between mx-5 bg-white/10 p-5 rounded-lg">
        <p
          className="text-white text-justify font-[Morabba-Regular] md:text-xl"
          dir="rtl"
        >
          ما در مجموعه‌ی خود تلاش می‌کنیم تا با تکیه بر تخصص، تجربه و نوآوری،
          خدماتی متمایز و با کیفیت در حوزه‌ی [حوزه فعالیت شما] ارائه دهیم. هدف
          ما، ایجاد تجربه‌ای بی‌نقص برای مشتریان و پاسخ‌گویی به نیازهای آن‌ها با
          راهکارهای خلاقانه و متناسب با استانداردهای روز دنیاست.
        </p>
        <p
          className="text-white text-justify font-[Morabba-Regular] md:text-xl mt-6"
          dir="rtl"
        >
          تعهد ما به صداقت، کیفیت و مشتری‌مداری، پایه و اساس تمامی فعالیت‌های
          ماست. ما باور داریم که موفقیت واقعی در گرو رضایت کامل مشتریان است و
          برای رسیدن به این هدف، همواره در حال ارتقاء خدمات، گسترش دانش فنی و
          استفاده از تکنولوژی‌های نوین هستیم.{" "}
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
              href="tel:+989011710116"
              className="flex items-center justify-between px-4 hover:scale-105  border border-gray-800 rounded-2xl cursor-pointer  transition"
            >
              <span className="text-white text-right font-[Morabba-Regular]">
                ۰۹۸۹۰۱۱۷۱۰۱۱۶
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
              href="https://wa.me/09011710116"
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
