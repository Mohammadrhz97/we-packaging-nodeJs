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
        <div className="absolute flex justify-center items-center lg:mr-24 m-8">
          {/* Semi-transparent black background text box */}
          <div className="max-w-[600px] text-center bg-black/35 p-5 rounded-lg">
            {/* Section title */}
            <p className="text-white font-[Morabba-Bold] text-right text-xl font-IBMPlex mb-9">
              درباره وی
            </p>
            {/* Descriptive paragraph */}
            <p
              className="text-white text-justify text-sm md:text-lg font-[Morabba-Regular]"
              dir="rtl"
            >
              وی فقط یک استودیو طراحی و پکیجینگ نیست. وی یک جنبش است؛ جنبشی که
              باور دارد برندها، موجوداتی زنده‌اند با هویتی پویا، احساسی عمیق، و
              نوری درونی که اگر کشف شود، می‌تواند آینده را روشن کند.
              <br /> ما در وی، برند را از درون آغاز می‌کنیم؛ از جایی که هویت
              واقعی تو پنهان شده. با رویکردی فلسفی و آینده‌نگر، به کسب‌وکارها
              کمک می‌کنیم نه فقط دیده شوند، بلکه حس شوند و ماندگار بمانند.
              <br />
              اما این هویت فقط در ذهن نمی‌ماند. ما آن را به جهان فیزیکی می‌آوریم
              در طراحی بسته‌بندی‌هایی که پیش از باز شدن هم حرف می‌زنند، در چاپ
              متریالی که لمسش، تجربه‌ی برند تو را زنده می‌کند.
              <br />
              از جعبه‌های خاص گرفته تا لیبل‌ها، کارت‌ها، پاکت‌ها و بسته‌بندی‌های
              شخصی‌سازی‌شده، ما مراقب‌ایم که هر جز از برند تو، صدایی منسجم و
              اصیل داشته باشد.
              <br />
              ما فقط طراحی نمی‌کنیم؛ ما واقعیت برندت را به شکل، جنس و حضور تبدیل
              می‌کنیم حضوری که روی میز مشتری، در قفسه فروشگاه یا هنگام باز شدن
              یک بسته، معنا پیدا می‌کند.
              <br /> در وی، ما از داستان‌ها الهام می‌گیریم؛ از ناخودآگاه تو، از
              رؤیاهایی که هنوز زبانی برای گفتن ندارند و آن‌ها را به چیزی تبدیل
              می‌کنیم که دیده، لمس و به یاد سپرده می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
