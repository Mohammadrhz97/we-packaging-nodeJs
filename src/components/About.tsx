import React from "react";
import Image from "next/image";
import gif from "../../public/gif1.gif";

const About: React.FC = () => {
  return (
    // Main container with top margin and fixed height
    <div className="mt-28 relative h-[600px]">
      <div className="w-full h-full relative flex lg:justify-end justify-center items-center overflow-hidden">
        {/* Background GIF image with blur and slight transparency */}
        <Image
          src={gif}
          alt="GIF"
          fill // makes the image fill the parent container
          className="object-cover blur-sm opacity-85"
          priority // loads this image first for performance
        />

        {/* Overlay container for the text box */}
        <div className="absolute flex justify-center items-center lg:mr-24 m-16">
          {/* Semi-transparent black background text box */}
          <div className="max-w-[600px] text-center bg-black/35 p-5 rounded-lg">
            {/* Section title */}
            <p className="text-white font-bold text-right text-xl font-IBMPlex mb-9">
              درباره ما
            </p>
            {/* Descriptive paragraph */}
            <p className="text-white text-right">
              شروع به کار مجموعه چاپ و بسته بندی های لوکس حمزه در تاریخ ۱۳۸۷
              توسط برادران حمزه به عنوان سرمایه گذاران و مدیران مجموعه می باشد.
              تمام پکیج های طراحی و چاپ شده این مجموعه زیر نظر بهترین و مجرب
              ترین ناظران و کارشناسان صنعت چاپ و بسته بندی صورت گرفته است که
              همین امر باعث پیشرفت و متمایز گشتن مجموعه چاپ و بسته بندی های لوکس
              حمزه از دیگر همکاران توسط مخاطبین و مصرف کنندگان این صنعت می باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
