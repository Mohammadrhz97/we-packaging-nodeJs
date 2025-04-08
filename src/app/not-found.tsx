"use client";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-4 text-xl">صفحه مورد نظر یافت نشد</p>
      </div>
    </div>
  );
}
