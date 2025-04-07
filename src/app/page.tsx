import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import SwipperProductCards from "@/components/SwipperProductCards";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <About />
      <SwipperProductCards />
      <Gallery />
    </>
  );
}
