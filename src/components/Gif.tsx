"use client";
import Image from "next/image";
import WeGif from "../../public/gif/WeGif.gif";

const Gif: React.FC = () => {
  return (
    <div className="max-w-full p-5 md:mt-30 mt-45 flex justify-center items-center flex-col">
      <p className="text-center [text-shadow:_1px_1px_2px_black] font-[AlteHaasGroteskBold] shadow-[0_0_40px_rgba(255,255,255,0.10)] mb-8 bg-white/10 p-3 rounded-2xl text-white font-semibold md:text-xl text-sm md:tracking-[.8rem] tracking-[.2rem]">
        . . . WE OUT OF SPACE . . .
      </p>
      <div className="relative w-full max-w-[940px] aspect-[940/500] rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.10)]">
        <Image
          src={WeGif}
          alt="GIF"
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 940px"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Gif;
