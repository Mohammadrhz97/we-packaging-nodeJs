"use client";
import Image from "next/image";
import { ServiceData } from "../constant/constants.index";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import Calling from "../../public/Calling.gif";
import ProductsDropdown from "./ProductsDropdown";
import Link from "next/link";
import ModalPage from "./ModalPage";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close mobile nav if clicked outside
      if (nav && navRef.current && !navRef.current.contains(e.target as Node)) {
        setNav(false);
      }

      // Close products dropdown if clicked outside
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav, open]);

  return (
    <div className="relative">
      <div className="text-white flex justify-between items-center mx-auto h-14 px-4 text-1 fixed w-full backdrop-blur-sm border-b border-gray-800 z-40">
        <Link href="/">
          <h1 className="text-3xl font-bold primary-color ml-4 cursor-pointer">
            WE.
          </h1>
        </Link>

        <ul className="hidden md:flex md:mx-auto font-markazi text-lg">
          <li className="p-5">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li
            onMouseEnter={() => setOpen(true)}
            className="p-5 flex flex-row-reverse items-center gap-1 relative"
          >
            <Link href="/products">محصولات</Link>
            <span>
              <SlArrowDown className="w-3 h-3 text-white" />
            </span>

            {/* Dropdown container with ref */}
            <div ref={dropdownRef} onMouseLeave={() => setOpen(false)}>
              {open && (
                <div className="absolute top-full left-0 w-64 z-50">
                  <ProductsDropdown />
                </div>
              )}
            </div>
          </li>

          <li className="p-5">
            <Link href="/blog">بلاگ</Link>
          </li>
          <li className="p-5">
            <Link href="/about">درباره ما</Link>
          </li>
        </ul>

        <button
          onClick={() => setIsModalOpen(true)}
          className="md:flex items-center justify-center cursor-pointer hidden "
        >
          <Image
            src={Calling}
            alt="Calling"
            width={18}
            height={18}
            className="w-12 h-12 object-contain p-1"
            priority
          />
        </button>

        <div onClick={() => setNav(!nav)} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={navRef}
        className={
          nav
            ? "text-white md:hidden fixed h-full right-0 top-0 w-[50%]  bg-[#202121]/35 backdrop-blur-lg ease-in-out duration-500 z-20"
            : "fixed right-[-100%] ease-out duration-100"
        }
      >
        <ul className="p-8 text-xl mt-12 text-right space-y-2">
          {[
            { label: "صفحه اصلی", href: "/" },
            { label: "محصولات", href: "/products" },
            { label: "بلاگ", href: "/blog" },
            { label: "درباره ما", href: "/about" },
          ].map(({ label, href }) => {
            const isProducts = href === "/products";
            return (
              <li
                key={href}
                className="group relative p-2 overflow-hidden cursor-pointer w-full"
                ref={isProducts ? mobileDropdownRef : null}
              >
                {isProducts ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen((prev) => !prev)}
                      className="flex items-center text-white w-full justify-end gap-1"
                    >
                      <SlArrowDown className="w-3 h-3 text-white mr-2" />
                      {label}
                    </button>

                    {/* Dropdown items (conditionally rendered) */}
                    {mobileDropdownOpen && (
                      <ul className="mt-2 pr-3 space-y-1 text-white text-base ">
                        {ServiceData.map((item) => (
                          <li key={item.id} onClick={() => setNav(!nav)}>
                            <Link
                              href={`/products/${item.id}`}
                              className="block border-b border-b-gray-500 pb-2"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      href={href}
                      className="flex items-center text-white w-full justify-end gap-1"
                    >
                      {label}
                    </Link>
                  </>
                )}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}

export default Navbar;
