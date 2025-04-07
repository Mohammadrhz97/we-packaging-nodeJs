"use client";
import Link from "next/link";
import ModalPage from "./ModalPage";
import { useState } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="shadow bg-transparent relative p-5 mt-36">
      <div className="w-full max-w-screen-xl mx-auto p-4  ">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              WE.
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/products" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline me-4 md:me-6">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:underline cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block mt-4 text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025-
          <Link href="https://flowbite.com/" className="hover:underline">
            WE. Packaging
          </Link>
          . All Rights Reserved.
        </span>
      </div>
      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </footer>
  );
}

export default Footer;
