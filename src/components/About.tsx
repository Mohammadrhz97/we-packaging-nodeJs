import Image from "next/image";
import gif from "../../public/gif1.gif";

function About() {
  return (
    <div className="mt-28 relative h-[600px]">
      <div className="w-full h-full relative flex lg:justify-end justify-center items-center overflow-hidden">
        <Image
          src={gif}
          alt="GIF"
          fill
          className="object-cover blur-sm opacity-85"
          priority
        />

        <div className="absolute flex justify-center items-center lg:mr-24 m-16">
          <div className="max-w-[600px] text-center bg-black/35 p-5 rounded-lg">
            <p className="text-white font-bold text-right text-xl font-IBMPlex mb-9">
              درباره ما
            </p>
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
}

export default About;
