import { Metadata } from "next";
import Image from "next/image";
import favicon from "../../../../public/favicon.png";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

// Define static metadata for the page (title and description)
export const metadata: Metadata = {
  title: "گالری وی",
  description:
    "در این پروژه عکاسی و فیلم‌برداری تبلیغاتی، مجموعه ما با تمرکز بر برندسازی، طراحی هویت بصری و پکیجینگ خلاقانه، به معرفی حرفه‌ای برند پن پرداخت. این پروژه با هدف افزایش جذابیت بصری، اعتماد مخاطب و ارتقاء جایگاه برند اجرا شده است. نمونه‌ای کامل از تلفیق هنر، تبلیغات و استراتژی برندینگ.",
};

// Main blog list page component
export default function page() {
  return (
    <>
      {/* Container for blog page */}
      <div className="max-w-[1024px] mx-auto pt-20">
        {/* Page heading */}
        <div className="max-w-full text-center mx-5 bg-white/5 backdrop-blur-xs shadow-[0_0_30px_rgba(255,255,255,0.15)] p-5 rounded-lg text-white text-4xl ">
          <h1>گالری</h1>
        </div>

        {/* Blog cards container */}
        <div className="max-w-full mt-10 mx-5 bg-white/5 backdrop-blur-xs shadow-[0_0_30px_rgba(255,255,255,0.15)] p-5 rounded-lg flex justify-center flex-wrap gap-6">
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
                  <Image src={favicon} height={20} width={20} alt="Icon" />
                  {/* Arrow icon for navigation hint, rotates on hover */}
                  <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </div>
            </div>
          </Link>

          {/* rooted in the earh project */}

          <Link
            href={`/gallery/rooted-in-the-earth-project`}
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
                  <Image src={favicon} height={20} width={20} alt="Icon" />
                  <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </div>
            </div>
          </Link>

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
                  <Image src={favicon} height={20} width={20} alt="Icon" />
                  <RxArrowTopRight className=" w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
