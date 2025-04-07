"use client";

import Image from "next/image";
import { ServiceData } from "@/constant/constants.index";
import { CiCirclePlus } from "react-icons/ci";
import { MdSettingsPhone } from "react-icons/md";
import { useState } from "react";
import ModalPage from "@/components/ModalPage";

export default function ProductPageClient({
  productId,
}: {
  productId: string;
}) {
  // State to manage contacts modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the product based on the provided productId
  const product = ServiceData.find((item) => item.id === productId) || null;

  // If the product is not found, return a "Product not found" message
  if (!product) {
    return (
      <div className="text-white text-center mt-20">Product not found</div>
    );
  }

  return (
    <div className="max-w-[1024px] pt-36 mx-auto">
      {/* Product title section */}
      <div
        data-aos="fade-down"
        className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl"
      >
        <h1>{product.title}</h1>
      </div>

      {/* Product details and image section */}
      <div className="max-w-full mx-5 grid grid-cols-12 mt-4 gap-4">
        {/* Product image */}
        <div
          data-aos="fade-right"
          className="col-span-12 md:col-span-4 bg-white/10 p-5 rounded-lg relative w-full h-full flex justify-center items-center"
        >
          <div className="w-fit max-h-[300px] overflow-hidden relative rounded-3xl shadow-2xl flex justify-center items-center transition duration-200 ease-in-out hover:scale-105">
            <Image
              src={product.backgroundImage.src}
              alt={product.id}
              width={300}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Product details */}
        <div
          data-aos="fade-left"
          className="col-span-12 md:col-span-8 bg-white/10 p-5 rounded-lg relative"
        >
          {/* Product icon */}
          <div className="absolute top-4 right-4 p-2">
            <product.icon className="text-white w-[45px] h-[45px]" />
          </div>

          {/* Product services */}
          <ul className="mt-24 space-y-2 text-white text-right text-lg">
            {product.services?.map((service, index) => {
              const [title, description] = service.split(":");

              return (
                <li
                  key={index}
                  className="flex items-start justify-between gap-2 transition duration-200 ease-in-out hover:scale-105 mb-3"
                >
                  <span className="flex-1">
                    <p className="text-xl font-semibold mb-1">:{title}</p>
                    <p className="mr-2 font-light text-[15px]">{description}</p>
                  </span>
                  <CiCirclePlus
                    width={30}
                    height={30}
                    className="flex-shrink-0 mt-[6px]"
                  />
                </li>
              );
            })}
          </ul>

          {/* Button to open contact modal  */}
          <div className="flex items-center justify-center md:justify-start mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-between p-3 transition duration-200 ease-in-out hover:scale-105 w-40 mt-4 border border-gray-800 rounded-2xl cursor-pointer"
            >
              <MdSettingsPhone className="w-[30px] h-[30px] text-white" />
              <span className="text-white text-lg">استعلام قیمت</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div
        data-aos="fade-up"
        className="max-w-full mt-4 text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-xl"
      >
        <h1 className="text-right font-semibold text-2xl">
          {product?.description?.title}
        </h1>
        <p className="text-justify text font-thin mt-4 text-[16px]" dir="rtl">
          {product?.description?.firstParagraph}
        </p>
        <p className="text-justify ltr font-thin mt-2 text-[16px]" dir="rtl">
          {product?.description?.secondParagraph}
        </p>
      </div>

      {/* Modal for contacts */}
      <ModalPage isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
