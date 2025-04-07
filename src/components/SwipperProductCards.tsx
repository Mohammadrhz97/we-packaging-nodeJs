"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constant/constants.index";
import Link from "next/link";

const SwipperProductCards: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[700px]">
      <Swiper
        breakpoints={{
          // Different breakpoints for responsive design
          340: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        style={
          {
            "--swiper-pagination-color": "#578E7E",
            "--swiper-pagination-bullet-inactive-color": "#F5ECD5",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          } as React.CSSProperties
        }
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        modules={[FreeMode, Pagination, Mousewheel, Autoplay]}
        className="max-w-[90%] xl:max-w-[80%] flex justify-center items-center"
      >
        {/* Iterate over ServiceData to generate product cards */}
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={`/products/${item.id}`}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[320px] w-[265px] lg:h-[350px] lg:w-[300px] overflow-hidden cursor-pointer mx-auto">
                {/* Background image with blur effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-[2px]"
                  style={{
                    backgroundImage: `url(${item.backgroundImage.src})`, // Dynamically set background image
                  }}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
                {/* Content section */}
                <div className="relative flex flex-col gap-3">
                  {/* Product icon */}
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  {/* Product title */}
                  <h1 className="text-3xl lg:text-4xl text-right backdrop-blur-md p-1 rounded-xl shadow-2xl shadow-black">
                    {item.title}
                  </h1>
                  {/* Product description */}
                  <p className="lg:text-[16px] opacity-60 text-[14px] text-right mt-28 backdrop-blur-sm rounded-2xl">
                    {item.content}
                  </p>
                </div>
                {/* Arrow icon for navigation */}
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipperProductCards;
