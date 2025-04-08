"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { SlArrowDown } from "react-icons/sl";
import Blb1 from "../../public/blb1.png"; // Decorative bulb image
import P1 from "../../public/1.png"; // Main hero image

const Hero: React.FC = () => {
  return (
    <div className="bg-black/30 w-screen ">
      <div className="w-full relative mx-auto h-lvh flex justify-center lg:justify-evenly items-center flex-col-reverse md:flex-row">
        {/* Text, animation, bulb image, and button section */}
        <div className="absolute md:relative md:top-0 top-[40%] text-white md:min-w-[500px] max-w-[500px]  flex items-center justify-center flex-col text-3xl z-10">
          {/* Typing animation text */}
          <div className="relative top-[120px] z-20">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                display: "block",
                textAlign: "center",
              }}
              speed={20}
              sequence={[`Designing Dreams,\nPackaging Perfection`, 2000, ""]}
              className="font-Playwrite font-bold leading-loose text-white mb-10"
              repeat={Infinity}
            />
          </div>

          {/* Blurred background bulb image for decoration */}
          <div className="mt-[-50%] opacity-50 w-[400px] md:w-auto">
            <Image
              src={Blb1}
              alt="bulb"
              width={720}
              height={720}
              className="blur-3xl relative object-cover"
              priority
            />
          </div>

          {/* Button leading to products page */}
          <Link href="/products">
            <button className="absolute backdrop-blur-sm flex items-center text-white text-lg gap-4 border border-black border-opacity-60 border-r-2 border-b-2 p-2 px-7 z-30 cursor-pointer top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span>
                <SlArrowDown className="w-4 h-4 text-white" />
              </span>
              محصولات
            </button>
          </Link>
        </div>

        {/* Main image */}
        <div className=" md:w-[700px] w-[400px] md:mr-16 pt-48 md:pt-0 absolute md:top-0 top-[-20%] md:relative">
          <Image
            src={P1}
            alt="1"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
