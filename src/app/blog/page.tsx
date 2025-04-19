import { BlogContents } from "../../constant/blogContents.index";
import { Metadata } from "next";

import Image from "next/image";
import favicon from "../../../public/favicon.png";
import Link from "next/link";

// Define static metadata for the page (used in <head>)
export const metadata: Metadata = {
  title: "بلاگ", // Page title
  description:
    "در بلاگ وی پکیجینگ جدیدترین مقالات، نکات و راهنماهای کاربردی را در زمینه پکیجینگ بیابید. ما به شما کمک می‌کنیم تا با به‌روزترین اطلاعات و اخبار، تصمیمات بهتری بگیرید و از تجربیات ما بهره‌مند شوید.", // Page description
};

// Main blog list page component
export default function page() {
  return (
    <>
      {/* Container for blog page */}
      <div className="max-w-[1024px] mx-auto pt-20">
        {/* Page heading */}
        <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl ">
          <h1>مقاله ها</h1>
        </div>

        {/* Blog cards container */}
        <div className="max-w-full mt-6 mx-5 bg-white/10 p-5 rounded-lg flex justify-center flex-wrap gap-6">
          {/* Loop through blog contents */}
          {BlogContents.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className="flex flex-col gap-6 backdrop-blur-sm group relative shadow-lg text-white rounded-xl px-3 py-8 h-[360px] w-[265px] overflow-hidden cursor-pointer mx-auto"
              >
                {/* Blog post image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  height={300}
                  width={300}
                  className="object-contain absolute top-0 left-0"
                />

                {/* Blog text content */}
                <div className=" relative flex flex-col mt-44 font-[Morabba-Regular]">
                  {/* Tags */}
                  <span className="font-[AlteHaasGroteskRegular] text-[10px] text-gray-400">
                    #{item.tags}
                  </span>

                  {/* Blog title */}
                  <h1 dir="rtl" className="text-[19px]">
                    {item.title}
                  </h1>

                  {/* Blog excerpt */}
                  <p
                    dir="rtl"
                    className="font-[Morabba-Light] text-justify text-[10px] mt-2"
                  >
                    {item.excerpt}
                  </p>

                  {/* Footer with favicon and post date */}
                  <div className="fixed bottom-2 w-[90%] flex flex-row justify-between items-center mt-7">
                    <Image src={favicon} height={20} width={20} alt="Icon" />
                    <p className="text-[10px] text-gray-400">
                      {new Date(item.date).toLocaleDateString("fa-IR")}{" "}
                      {/* Format date to Persian */}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
