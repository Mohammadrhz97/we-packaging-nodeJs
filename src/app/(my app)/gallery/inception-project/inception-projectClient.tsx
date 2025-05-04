"use client";

import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";

export default function InceptionProjectClient() {
  // Image array for the gallery, each with original and thumbnail paths
  const images: ReactImageGalleryItem[] = [
    {
      original: "/gallery/inception/images/1.jpg",
      thumbnail: "/gallery/inception/images/1.jpg",
      originalAlt: "image1",
      thumbnailAlt: "image1",
    },
    {
      original: "/gallery/inception/images/2.jpg",
      thumbnail: "/gallery/inception/images/2.jpg",
      originalAlt: "image2",
      thumbnailAlt: "image2",
    },
    {
      original: "/gallery/inception/images/3.jpg",
      thumbnail: "/gallery/inception/images/3.jpg",
      originalAlt: "image3",
      thumbnailAlt: "image3",
    },
    {
      original: "/gallery/inception/images/4.jpg",
      thumbnail: "/gallery/inception/images/4.jpg",
      originalAlt: "image4",
      thumbnailAlt: "image4",
    },
    {
      original: "/gallery/inception/images/5.jpg",
      thumbnail: "/gallery/inception/images/5.jpg",
      originalAlt: "image5",
      thumbnailAlt: "image5",
    },
    {
      original: "/gallery/inception/images/6.jpg",
      thumbnail: "/gallery/inception/images/6.jpg",
      originalAlt: "image6",
      thumbnailAlt: "image6",
    },
    {
      original: "/gallery/inception/images/7.jpg",
      thumbnail: "/gallery/inception/images/7.jpg",
      originalAlt: "image7",
      thumbnailAlt: "image7",
    },
    {
      original: "/gallery/inception/images/8.jpg",
      thumbnail: "/gallery/inception/images/8.jpg",
      originalAlt: "image8",
      thumbnailAlt: "image8",
    },
    {
      original: "/gallery/inception/images/9.jpg",
      thumbnail: "/gallery/inception/images/9.jpg",
      originalAlt: "image9",
      thumbnailAlt: "image9",
    },
    {
      original: "/gallery/inception/images/10.jpg",
      thumbnail: "/gallery/inception/images/10.jpg",
      originalAlt: "image10",
      thumbnailAlt: "image10",
    },
    {
      original: "/gallery/inception/images/11.jpg",
      thumbnail: "/gallery/inception/images/11.jpg",
      originalAlt: "image11",
      thumbnailAlt: "image11",
    },
    {
      original: "/gallery/inception/images/12.jpg",
      thumbnail: "/gallery/inception/images/12.jpg",
      originalAlt: "image12",
      thumbnailAlt: "image12",
    },
  ];

  return (
    <>
      {/* Title section */}
      <div className="flex justify-center mb-6 pt-4">
        <p className="md:w-2/3 w-[90%] text-center mb-8 md:tracking-[.6rem] tracking-[.2rem]  text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] bg-white/10 p-3 rounded-2xl text-white md:text-3xl ">
          Inception Project
        </p>
      </div>

      {/* Image carousel using react-image-gallery */}
      <div className="w-[60%] mx-auto">
        <ImageGallery items={images} showNav={true} />
      </div>

      <div className="w-[90%] md:w-[70%] m-14 mx-auto mt-32 shadow-[0_0_40px_rgba(255,255,255,0.15)] rounded-2xl overflow-hidden">
        <ReactPlayer
          url="/gallery/inception/video/inception.mp4"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
