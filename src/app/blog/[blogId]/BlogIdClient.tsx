"use client";
import { BlogContents } from "../../../constant/blogContents.index";
import Image from "next/image";
import styles from "./BlogIdClient.module.css"; // Import the CSS Module file
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function BlogIdClient({ blogId }: { blogId: string }) {
  // Find the product based on the provided blogId
  const blog = BlogContents.find((item) => item.id === blogId) || null;

  // If the product is not found, return a "Product not found" message
  if (!blog) {
    return (
      <div className="text-white text-center h-screen flex items-center justify-center pt-20">
        Product not found
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1024px] pt-20 mx-auto">
        {/* Product title section */}
        <div
          data-aos="fade-down"
          className=" font-[Morabba-Bold] text-2xl  max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white"
        >
          <h1>{blog.title}</h1>
        </div>

        {/* Product details and image section */}
        <div className="max-w-full mx-5 mt-4 gap-4">
          {/* Product image */}
          <div
            data-aos="fade-right"
            className="bg-white/10 p-5 rounded-lg w-full h-full"
          >
            <div className="max-w-fit max-h-[500px] overflow-hidden relative rounded-3xl shadow-2xl mx-auto transition duration-200 ease-in-out hover:scale-105">
              <Image
                src={blog.image}
                alt={blog.id}
                width={500}
                height={500}
                className="h-auto w-auto"
                priority
              />
            </div>
            <Link
              href="/products"
              className="flex items-center p-3 transition duration-200 ease-in-out hover:scale-105 w-[280px] md:w-[350px] mt-16 gap-3 mx-auto border border-gray-800 rounded-2xl cursor-pointer"
            >
              <FaExternalLinkAlt className="w-[20px] h-[20px] text-white" />
              <span className="text-white text-sm md:text-lg">
                برای مشاهده لیست محصولات کلیک کنید
              </span>
            </Link>
            <div
              className={`mt-4 text-white text text-justify p-5 ${styles.blogId}`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
              dir="rtl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start text-white mx-5 md:mx-auto mt-6 bg-white/10 p-5 rounded-lg md:w-[55%]">
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
    </>
  );
}
