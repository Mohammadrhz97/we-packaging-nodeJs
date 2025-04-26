"use client";

import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

import P1 from "../../public/1.jpg"; // Desktop image
import P2 from "../../public/2.jpg"; // Desktop image
import P4 from "../../public/4.jpg"; // Desktop image

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{ backgroundImage: `url(${P1.src})` }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex justify-between items-center flex-col pt-[10px]">
        {/* Blog post image */}
        <div className="sm:hidden ">
          <div className="mt-10">
            <Image src={P1} alt="Hero image1" height={620} width={620} />
          </div>
          <div>
            <Image src={P2} alt="Hero image2" height={620} width={620} />
          </div>
          <div className="relative">
            <Image src={P4} alt="Hero image2" height={620} width={620} />
            <Link href="/products">
              <div className="absolute sm:hidden w-full top-10 backdrop-blur-xs h-16 flex justify-center items-center">
                <button className="backdrop-blur-xs flex items-center h-11 justify-center text-white text-xl gap-4 border border-black border-opacity-60 border-r-3 border-b-3 p-1 px-3 z-30 cursor-pointer">
                  <span>
                    <FiExternalLink className="w-4 h-4 text-white" />
                  </span>
                  برای دیدن لیست محصولات کلیک کنید
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* Typing animation text */}
        <div className="absolute z-20  w-full h-[140px] md:h-[220px] backdrop-blur-xs top-[420px] sm:top-12 hidden sm:block">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              textAlign: "center",
            }}
            speed={20}
            sequence={[`Designing Dreams,\nPackaging Perfection`, 2000, ""]}
            className="font-[Angel] font-extrabold leading-loose text-[38px] md:text-[56px] text-white"
            repeat={Infinity}
          />
        </div>

        {/* Button */}
        <Link href="/products">
          <div className="absolute hidden w-full backdrop-blur-xs h-16 sm:bottom-16 bottom-42 right-0 sm:flex justify-center items-center">
            <button className="backdrop-blur-xs flex items-center h-11 justify-center text-white text-xl gap-4 border border-black border-opacity-60 border-r-3 border-b-3 p-1 px-3 z-30 cursor-pointer">
              <span>
                <FiExternalLink className="w-4 h-4 text-white" />
              </span>
              برای دیدن لیست محصولات کلیک کنید
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
