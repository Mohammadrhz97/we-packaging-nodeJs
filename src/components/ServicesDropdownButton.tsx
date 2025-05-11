"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PackagingServices from "./PackagingServices";

interface ServicesDropdownButtonProps {
  children: ReactNode;
  label?: string;
  href?: string; // ✅ New prop
}

function ServicesDropdownButton({
  children,
  label,
  href,
}: ServicesDropdownButtonProps) {
  const buttonClasses =
    "flex items-center justify-between gap-3 cursor-pointer rounded-lg w-52 hover:bg-gray-800/75 hover:border hover:backdrop-blur-lg border-black/75 transition duration-200 ease-in-out hover:scale-105 pr-2";

  return (
    <li className="flex items-center justify-end relative group">
      {/* Conditionally render the badge if it's the "طراحی سایت" button */}
      {label === "طراحی سایت" && (
        <span className="absolute top-0 right-20 bg-red-500 text-white text-[10px] font-bold px-2 p-1 rounded-full leading-none z-20">
          جدید
        </span>
      )}

      <Link href={href || "#"} className="w-full">
        <button className={buttonClasses} type="button">
          {label === "پکیجینگ" && (
            <div className="absolute top-0 right-53 ">
              <PackagingServices />
            </div>
          )}
          <span>
            <MdKeyboardArrowLeft />
          </span>
          {children}
        </button>
      </Link>

      {/* ✅ Here is where you'll later inject the submenu (for hover) if needed */}
    </li>
  );
}

export default ServicesDropdownButton;
