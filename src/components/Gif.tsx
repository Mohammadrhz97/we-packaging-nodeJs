"use client";
import Image from "next/image";
import WeGif from "../../public/gif/WeGif.gif";

const Gif: React.FC = () => {
  return (
    <div className="max-w-full p-5 md:mt-30 mt-45 flex justify-center items-center flex-col">
      <p className="text-center [text-shadow:_1px_1px_2px_black] font-[AlteHaasGroteskBold] shadow-[0_0_40px_rgba(255,255,255,0.10)] mb-8 bg-white/10 p-3 rounded-2xl text-white font-semibold md:text-xl text-sm md:tracking-[.8rem] tracking-[.2rem]">
        . . . WE OUT OF SPACE . . .
      </p>
      <div className="w-full max-w-[940px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] ">
        <Image
          src={WeGif}
          alt="GIF"
          layout="responsive"
          width={940}
          height={500}
          className="object-cover max-h-[500] max-w-[940]  "
          unoptimized
        />
      </div>
    </div>
  );
};

export default Gif;
