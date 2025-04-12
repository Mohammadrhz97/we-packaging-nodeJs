"use client";

import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import SwipperProductCards from "@/components/SwipperProductCards";
import Video from "@/components/Video";
import StickyCallIcon from "@/components/StickyCallIcon";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <About />
      <SwipperProductCards />
      <Gallery />
      <StickyCallIcon />
    </>
  );
}
