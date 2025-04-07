"use client";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div className="max-w-full p-5 bg-white/5 flex justify-center items-center flex-col">
      <p className="text-center mb-8 bg-white/10 p-3 rounded-2xl text-white font-semibold md:text-xl text-sm md:tracking-[.8rem] tracking-[.5rem]">
        ... WE OUT OF SPACE ...
      </p>
      <div className="w-full max-w-[940px] aspect-video rounded-2xl overflow-hidden">
        <ReactPlayer
          url="/video/WeVideo.mp4"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
}

export default Video;
