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
        />

        {/* Overlay container for the text box */}
        <div className="absolute flex justify-center items-center lg:mr-24 m-16">
          {/* Semi-transparent black background text box */}
          <div className="max-w-[600px] text-center bg-black/35 p-5 rounded-lg">
            {/* Section title */}
            <p className="text-white font-[Morabba-Bold] text-right text-xl font-IBMPlex mb-9">
              درباره وی
            </p>
            {/* Descriptive paragraph */}
            <p
              className="text-white text-justify font-[Morabba-Regular]"
              dir="rtl"
            >
              وی فقط یک استودیو طراحی نیست. وی یک جنبش است. جنبشی که باور دارد
              برندها، موجوداتی زنده‌اند. با هویت، با احساس، و با نور درونی‌ای که
              اگر کشف شود، می‌تواند آینده را روشن کند. <br /> ما در وی برند را
              از درون آغاز می‌کنیم؛ از جایی که هویت حقیقی تو پنهان شده. با
              رویکردی فلسفی و آینده‌نگر، ما به کسب‌وکارها کمک می‌کنیم نه فقط
              «دیده» شوند، بلکه درک شوند. ما طراحی نمی‌کنیم تا فقط زیبا باشد؛ ما
              طراحی می‌کنیم تا حقیقت تو را نشان دهد. <br />
              در وی، ما از داستان‌ها الهام می‌گیریم، از ناخودآگاه تو، از
              رؤیاهایی که هنوز زبانی برای گفتن ندارند. <br /> ما به تو کمک
              می‌کنیم تا برندت را زندگی کنی.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
