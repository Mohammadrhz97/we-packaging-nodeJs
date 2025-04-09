"use client";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../../constant/constants.index";
import Link from "next/link";


export default function ProductListClient() {
  return (
    <div className="max-w-[1024px] pt-36 mx-auto">
      <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl">
        <h1>محصولات</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 max-w-full justify-items-center place-content-between mx-5 bg-white/10 p-5 rounded-lg">
        {ServiceData.map((item) => (
         <Link href={`/products/${item.id}`}> <div
            key={item.id}
            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[300px] overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-[2px]"
              style={{
                backgroundImage: `url(${item.backgroundImage.src})`,
              }}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-2xl lg:text-3xl text-right backdrop-blur-md p-1 font-bold">
                {item.title}
              </h1>
              <p className="lg:text-[16px] opacity-60 text-[14px] text-right mt-16 lg:mt-36 backdrop-blur-md">
                {item.content}
              </p>
            </div>
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
          </div></Link>
        ))}
      </div>
    </div>
  );
}
