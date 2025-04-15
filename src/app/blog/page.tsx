import mg9 from "../../../public/MainpageGallery/mg9.jpg";
import Image from "next/image";
import favicon from "../../../public/favicon.png";

export default function page() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto pt-20">
        <div className="max-w-full text-center mx-5 bg-white/10 p-5 rounded-lg text-white text-4xl ">
          <h1>مقاله ها</h1>
        </div>
        <div className="max-w-full mt-6 mx-5 bg-white/10 p-5 rounded-lg flex justify-center">
          <div className="flex flex-col gap-6 mb-20  backdrop-blur-sm group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[265px]  overflow-hidden cursor-pointer mx-auto">
            {/* Image centered 50% from the top */}
            <Image
              src={mg9}
              alt="GIF"
              height={300}
              width={300}
              className="object-contain absolute top-0 left-0"
            />
            <div className="flex flex-col mt-32 font-[Morabba-Regular]">
              <span className="font-[AlteHaasGroteskRegular] text-[10px] text-gray-400">
                #Hard Box
              </span>
              <h1 dir="rtl" className="text-[19px]">
                سررسید در مقابل پلنر؛ کدام ابزار برنامه‌ریزی را انتخاب کنیم؟
              </h1>
              <p dir="rtl" className="font-[Morabba-Light] text-[12px] mt-2">
                سررسید یا سالنامه، ابزاری است که عمدتاً بر پایهٔ تقویم رسمی
                طراحی می‌شود. هر روز، تاریخ مشخص خود را ...
              </p>
              <div className="flex flex-row justify-between items-center mt-9">
                <Image src={favicon} height={20} width={20} alt="Icon" />
                <p className="text-[10px] text-gray-400">July 14, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
