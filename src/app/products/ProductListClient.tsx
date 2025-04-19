// Enable client-side rendering for this component (required when using hooks, interactivity, etc.)
"use client";

// Importing an arrow icon from react-icons for visual cue
import { RxArrowTopRight } from "react-icons/rx";

// Importing the data source containing the list of services/products
import { ServiceData } from "../../constant/constants.index";

// Importing Next.js Link component for internal navigation
import Link from "next/link";

// Functional component that renders a grid of product/service cards
export default function ProductListClient() {
  return (
    <div className="max-w-[1024px] mx-auto">
      {/* Page header */}
      <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl">
        <h1>محصولات</h1>
      </div>

      {/* Grid layout for product/service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 max-w-full justify-items-center place-content-between mx-5 bg-white/10 p-5 rounded-lg">
        {ServiceData.map((item) => (
          // Link to individual product/service detail page using item.id
          <Link key={item.id} href={`/products/${item.id}`}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[300px] overflow-hidden cursor-pointer">
              {/* Background image with slight blur */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-[2px]"
                style={{
                  backgroundImage: `url(${item.backgroundImage.src})`,
                }}
              />

              {/* Overlay dark effect on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />

              {/* Foreground content */}
              <div className="relative flex flex-col ali">
                {/* Icon associated with each item */}
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />

                {/* Title of the service/product */}
                <h1 className="text-2xl lg:text-3xl text-right backdrop-blur-md p-1 font-bold">
                  {item.title}
                </h1>

                {/* Short description text (positioned near bottom of card) */}
                <p className="lg:text-[16px] opacity-60 text-[14px] text-right absolute mt-52 backdrop-blur-md">
                  {item.content}
                </p>
              </div>

              {/* Arrow icon for navigation hint, rotates on hover */}
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
