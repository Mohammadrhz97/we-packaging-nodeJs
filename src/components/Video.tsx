"use client";
import Image from "next/image";
import WeVideo from "../../public/video/WeVideo.gif";

const Video: React.FC = () => {
  return (
    <div className="max-w-full p-5 bg-white/5 flex justify-center items-center flex-col">
      <p className="text-center mb-8 bg-white/10 p-3 rounded-2xl text-white font-semibold md:text-xl text-sm md:tracking-[.8rem] tracking-[.5rem]">
        . . . WE OUT OF SPACE . . .
      </p>
      <div className="w-full max-w-[940px] rounded-2xl overflow-hidden">
        <Image
          src={WeVideo}
          alt="GIF"
          width={940}
          height={500}
          className="object-cover "
          priority // loads this image first for performance
        />{" "}
      </div>
    </div>
  );
};

export default Video;
