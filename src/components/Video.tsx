"use client";
import Image from "next/image";
import WeVideo from "../../public/video/WeVideo.gif";

const Video: React.FC = () => {
  return (
    <div className="max-w-full p-5  mt-30 flex justify-center items-center flex-col">
      <p className="text-center font-[AlteHaasGroteskBold] shadow-[0_0_40px_rgba(255,255,255,0.15)] mb-8 bg-white/10 p-3 rounded-2xl text-white font-semibold md:text-xl text-sm md:tracking-[.8rem] tracking-[.2rem]">
        . . . WE OUT OF SPACE . . .
      </p>
      <div className="w-full max-w-[940px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] ">
        <Image
          src={WeVideo}
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

export default Video;
