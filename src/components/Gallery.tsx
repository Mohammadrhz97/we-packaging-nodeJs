import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

const Gallery: React.FC = () => {
  return (
    <>
      {/* Title section */}
      <div className="flex justify-center mb-6 ">
        <p className="w-2/3 text-center mb-8 text-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] bg-white/10 p-3 rounded-2xl text-white md:text-xl ">
          گالری
        </p>
      </div>

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
        className="max-w-[70%] xl:max-w-[70%] flex justify-center items-center"
      >
        {/* Blog cards container */}
        <div className="max-w-full mt-10 mx-5 bg-white/5 backdrop-blur-xs shadow-[0_0_30px_rgba(255,255,255,0.15)] p-5 rounded-lg flex justify-center flex-wrap gap-6">
          <SwiperSlide key="out-of-space-project">
            {/* out of space project */}

            <Link href="/gallery/out-of-space-project" key="ourOfSpaceProject">
              <div className="flex flex-col gap-6 backdrop-blur-sm group relative shadow-lg text-white rounded-xl px-3 py-8 h-[360px] w-[265px] overflow-hidden cursor-pointer mx-auto">
                {/* Overlay dark effect on hover */}
                <div className="absolute z-10 inset-0 bg-black opacity-0 group-hover:opacity-50" />
                {/* Blog post image */}
                <div className="w-full h-full absolute top-0 left-0 bottom-0">
                  <Image
                    src={"/gallery/out-of-space/images/1.jpg"}
                    alt={"ourOfSpaceProject"}
                    fill
                    className="absolute top-0 left-0"
                  />
                </div>

                {/* Blog text content */}
                <div className="w-full p-3 text-center backdrop-blur-sm text-2xl text-white/50 mt-8 ">
                  Out Of Space
                </div>
                {/* Footer with favicon and post date */}
                <div className=" relative flex flex-col mt-44 font-[Morabba-Regular]">
                  <div className="fixed bottom-2 w-[90%] flex flex-row justify-between items-center mt-7">
                    <Image
                      src={"/favicon.png"}
                      height={20}
                      width={20}
                      alt="Icon"
                    />
                    {/* Arrow icon for navigation hint, rotates on hover */}
                    <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide key="rooted-in-the-earh-project">
            {/* rooted in the earh project */}

            <Link
              href={`/gallery/rooted-in-the-earh-project`}
              key={"rooted-in-the-earh-project"}
            >
              <div className="flex flex-col gap-6 backdrop-blur-sm group relative shadow-lg text-white rounded-xl  py-8 h-[360px] w-[265px] overflow-hidden cursor-pointer mx-auto">
                {/* Overlay dark effect on hover */}
                <div className="absolute z-10 inset-0 bg-black opacity-0 group-hover:opacity-50" />
                {/* Blog post image */}
                <div className="w-full h-full absolute top-0 left-0 bottom-0">
                  <Image
                    src={"/gallery/rooted-in-the-earth/images/7.jpg"}
                    alt={"rooted-in-the-earh-project"}
                    fill
                    className="absolute top-0 left-0"
                  />
                </div>

                {/* Blog text content */}
                <div className="w-full p-3 text-center backdrop-blur-sm text-2xl text-white/50 mt-8 ">
                  Rooted In The Earh
                </div>
                <div className="w-full relative flex flex-col mt-44 font-[Morabba-Regular]">
                  {/* Footer with favicon and post date */}
                  <div className="fixed bottom-2 w-full mx-auto flex flex-row justify-between items-center mt-7 px-3">
                    <Image
                      src={"/favicon.png"}
                      height={20}
                      width={20}
                      alt="Icon"
                    />
                    <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide key="inception-project">
            {/* inception project */}

            <Link href={`/gallery/inception-project`} key={"inception-project"}>
              <div className="flex flex-col gap-6 backdrop-blur-sm group relative shadow-lg text-white rounded-xl py-8 h-[360px] w-[265px] overflow-hidden cursor-pointer mx-auto">
                {/* Overlay dark effect on hover */}
                <div className="absolute z-10 inset-0 bg-black opacity-0 group-hover:opacity-50" />
                {/* Blog post image */}
                <div className="w-full h-full absolute top-0 left-0 bottom-0">
                  <Image
                    src={"/gallery/inception/images/9.jpg"}
                    alt={"inception-project"}
                    fill
                    className="absolute top-0 left-0"
                  />
                </div>

                {/* Blog text content */}
                <div className="w-full p-3 text-center backdrop-blur-sm text-2xl text-white/50 mt-8 ">
                  Inception
                </div>
                <div className="w-full px-3 relative flex flex-col mt-44 font-[Morabba-Regular]">
                  {/* Footer with favicon and post date */}
                  <div className="fixed  bottom-2 w-[90%] flex flex-row justify-between items-center mt-7">
                    <Image
                      src={"/favicon.png"}
                      height={20}
                      width={20}
                      alt="Icon"
                    />
                    <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Gallery;
