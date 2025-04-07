"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SlArrowDown } from "react-icons/sl";
import Blb1 from "../../public/blb1.png";
import P1 from "../../public/1.png";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="bg-black/30 w-screen">
        <div className="mx-auto h-lvh flex justify-center items-center flex-col-reverse lg:flex-row">
          <div className="absolute lg:relative text-white md:min-w-[500px] max-w-[500px] lg:mr-[-200px] h-full flex items-center justify-center flex-col text-3xl z-10">
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

            <div className="mt-[-50%] opacity-50">
              <Image
                src={Blb1}
                alt="bulb"
                width={720}
                height={720}
                className="blur-3xl relative object-cover"
                priority
              />
            </div>

            <Link href="/products">
              <button className="absolute backdrop-blur-sm flex items-center text-white text-lg gap-4 border border-black border-opacity-60 border-r-2 border-b-2 p-2 px-7 z-30 cursor-pointer top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span>
                  <SlArrowDown className="w-4 h-4 text-white" />
                </span>
                محصولات
              </button>
            </Link>
          </div>

          <Image
            src={P1}
            alt="1"
            width={900}
            height={900}
            className="h-full max-w-auto object-contain lg:mr-16 mr-56 ml-24 sm:ml-0 z-0"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
