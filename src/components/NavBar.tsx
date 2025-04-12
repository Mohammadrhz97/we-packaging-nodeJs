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
import weLogo from "../../public/weLogo.png";

function Navbar() {
  // Initialize state variables
  const [nav, setNav] = useState<boolean>(false); // Controls the mobile navigation menu state
  const [open, setOpen] = useState<boolean>(false); // Controls the product dropdown state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Controls the modal for contact
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false); // Controls the mobile dropdown for products

  // References for handling outside clicks
  const navRef = useRef<HTMLDivElement>(null); // Ref for the mobile navigation menu
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the product dropdown
  const mobileDropdownRef = useRef<HTMLLIElement>(null); // Ref for the contact dropdown

  // Effect to handle closing mobile dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for mouse click
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, []);

  // Effect to handle closing mobile nav or product dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (nav && navRef.current && !navRef.current.contains(e.target as Node)) {
        setNav(false);
      }

      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false); // Close product dropdown when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for mouse click
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, [nav, open]); // Re-run effect if 'nav' or 'open' state changes

  return (
    <div className="relative">
      {/* Navbar Container */}
      <div
        style={{ fontFamily: "Morabba-Regular" }}
        className="text-white flex justify-between items-center mx-auto h-14 px-4 text-1 fixed w-full backdrop-blur-sm border-b border-gray-800 z-40"
      >
        {" "}
        {/* Brand Logo */}
        <Link href="/">
          <div className="w-16">
            <Image
              src={weLogo}
              height={0}
              width={0}
              alt="logo"
              className="w-auto h-auto"
            />
          </div>
        </Link>
        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex md:mx-auto font-markazi text-lg">
          <li className="p-5">
            <Link href="/">صفحه اصلی</Link>
          </li>

          {/* Products Dropdown */}
          <li
            onMouseEnter={() => setOpen(true)} // Open dropdown on hover
            className="p-5 flex flex-row-reverse items-center gap-1 relative"
          >
            <Link href="/products">محصولات</Link>
            <span>
              <SlArrowDown className="w-3 h-3 text-white" />
            </span>

            {/* Dropdown container with ref */}
            <div
              ref={dropdownRef}
              onClick={() => setOpen(false)}
              onMouseLeave={() => setOpen(false)}
            >
              {open && (
                <div className="absolute top-full left-0 w-64 z-50">
                  <ProductsDropdown /> {/* Render dropdown content */}
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
        {/* Calling Button */}
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on button click
          className="md:flex items-center justify-center cursor-pointer hidden "
        >
          <Image
            src={Calling}
            alt="Calling"
            width={18}
            height={18}
            className="w-12 h-12 object-contain p-1"
            unoptimized
          />
        </button>
        {/* Mobile Menu Toggle */}
        <div onClick={() => setNav(!nav)} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={navRef}
        className={
          nav
            ? "text-white md:hidden fixed h-full right-0 top-0 w-[50%]  bg-[#202121]/35 backdrop-blur-lg ease-in-out duration-500 z-20"
            : "fixed right-[-100%] ease-out duration-100"
        }
      >
        <ul className="p-8 text-xl mt-12 text-right space-y-2">
          {/* Navigation Links */}
          {[
            { label: "صفحه اصلی", href: "/" },
            { label: "محصولات", href: "/products" },
            { label: "بلاگ", href: "/blog" },
            { label: "درباره ما", href: "/about" },
          ].map(({ label, href }) => {
            const isProducts = href === "/products"; // Check if current link is products
            return (
              <li
                key={href}
                className="group relative p-2 overflow-hidden cursor-pointer w-full"
                ref={isProducts ? mobileDropdownRef : null} // Add ref for products dropdown
              >
                {isProducts ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen((prev) => !prev)} // Toggle mobile dropdown for products
                      className="flex items-center text-white w-full justify-end gap-1"
                    >
                      <SlArrowDown className="w-3 h-3 text-white mr-2" />
                      {label}
                    </button>

                    {/* Dropdown items (conditionally rendered) */}
                    {mobileDropdownOpen && (
                      <ul className="mt-2 pr-3 space-y-1 text-white text-base ">
                        <Link
                          href={`/products`}
                          className="block border-b border-b-gray-500 pb-2 pt-2"
                        >
                          همه محصولات
                        </Link>
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
                  <Link
                    href={href}
                    className="flex items-center text-white w-full justify-end gap-1"
                  >
                    {label}
                  </Link>
                )}
                <span className="absolute bottom-0  h-[1px] bg-gray-600 transition-all duration-300 w-full left-0"></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Modal for Calling */}
      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}

export default Navbar;
