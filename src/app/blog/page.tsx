import { BlogContents } from "../../constant/blogContents.index";
import Image from "next/image";
import favicon from "../../../public/favicon.png";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto pt-20">
        <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl ">
          <h1>مقاله ها</h1>
        </div>
        <div className="max-w-full mt-6 mx-5 bg-white/10 p-5 rounded-lg flex justify-center flex-wrap gap-6">
          {BlogContents.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className="flex flex-col gap-6 backdrop-blur-sm group relative shadow-lg text-white rounded-xl px-3 py-8 h-[360px] w-[265px] overflow-hidden cursor-pointer mx-auto"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  height={300}
                  width={300}
                  className="object-contain absolute top-0 left-0"
                />
                <div className=" relative flex flex-col mt-44 font-[Morabba-Regular]">
                  <span className="font-[AlteHaasGroteskRegular] text-[10px] text-gray-400">
                    #{item.tags}
                  </span>
                  <h1 dir="rtl" className="text-[19px]">
                    {item.title}
                  </h1>
                  <p
                    dir="rtl"
                    className="font-[Morabba-Light] text-justify text-[10px] mt-2"
                  >
                    {item.excerpt}
                  </p>
                  <div className="fixed bottom-2 w-[90%] flex flex-row justify-between items-center mt-7">
                    <Image src={favicon} height={20} width={20} alt="Icon" />
                    <p className="text-[10px] text-gray-400">
                      {new Date(item.date).toLocaleDateString("fa-IR")}
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
