"use client";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Loading() {
  return (
    <>
      <Background />
      <div className="flex items-center h-screen  justify-center text-white">
        <div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  );
}
