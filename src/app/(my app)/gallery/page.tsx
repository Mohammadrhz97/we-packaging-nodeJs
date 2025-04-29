"use client";

import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery: React.FC = () => {
  // Image array for the gallery, each with original and thumbnail paths
  const images: ReactImageGalleryItem[] = [
    {
      original: "/gallery/1.jpg",
      thumbnail: "/gallery/1.jpg",
      originalAlt: "image1",
      thumbnailAlt: "image1",
    },
    {
      original: "/gallery/2.jpg",
      thumbnail: "/gallery/2.jpg",
      originalAlt: "image2",
      thumbnailAlt: "image2",
    },
    {
      original: "/gallery/3.jpg",
      thumbnail: "/gallery/3.jpg",
      originalAlt: "image3",
      thumbnailAlt: "image3",
    },
    {
      original: "/gallery/4.jpg",
      thumbnail: "/gallery/4.jpg",
      originalAlt: "image4",
      thumbnailAlt: "image4",
    },
    {
      original: "/gallery/5.jpg",
      thumbnail: "/gallery/5.jpg",
      originalAlt: "image5",
      thumbnailAlt: "image5",
    },
    {
      original: "/gallery/6.jpg",
      thumbnail: "/gallery/6.jpg",
      originalAlt: "image6",
      thumbnailAlt: "image6",
    },
    {
      original: "/gallery/7.jpg",
      thumbnail: "/gallery/7.jpg",
      originalAlt: "image7",
      thumbnailAlt: "image7",
    },
    {
      original: "/gallery/8.jpg",
      thumbnail: "/gallery/8.jpg",
      originalAlt: "image8",
      thumbnailAlt: "image8",
    },
    {
      original: "/gallery/9.jpg",
      thumbnail: "/gallery/9.jpg",
      originalAlt: "image9",
      thumbnailAlt: "image9",
    },
    {
      original: "/gallery/10.jpg",
      thumbnail: "/gallery/10.jpg",
      originalAlt: "image10",
      thumbnailAlt: "image10",
    },
    {
      original: "/gallery/11.jpg",
      thumbnail: "/gallery/11.jpg",
      originalAlt: "image11",
      thumbnailAlt: "image11",
    },
    {
      original: "/gallery/12.jpg",
      thumbnail: "/gallery/12.jpg",
      originalAlt: "image12",
      thumbnailAlt: "image12",
    },
    {
      original: "/gallery/13.jpg",
      thumbnail: "/gallery/13.jpg",
      originalAlt: "image13",
      thumbnailAlt: "image13",
    },
    {
      original: "/gallery/14.jpg",
      thumbnail: "/gallery/14.jpg",
      originalAlt: "image14",
      thumbnailAlt: "image14",
    },
    {
      original: "/gallery/15.jpg",
      thumbnail: "/gallery/15.jpg",
      originalAlt: "image15",
      thumbnailAlt: "image15",
    },
    {
      original: "/gallery/16.jpg",
      thumbnail: "/gallery/16.jpg",
      originalAlt: "image16",
      thumbnailAlt: "image16",
    },
    {
      original: "/gallery/17.jpg",
      thumbnail: "/gallery/17.jpg",
      originalAlt: "image17",
      thumbnailAlt: "image17",
    },
    {
      original: "/gallery/18.jpg",
      thumbnail: "/gallery/18.jpg",
      originalAlt: "image18",
      thumbnailAlt: "image18",
    },
    {
      original: "/gallery/19.jpg",
      thumbnail: "/gallery/19.jpg",
      originalAlt: "image19",
      thumbnailAlt: "image19",
    },
    {
      original: "/gallery/20.jpg",
      thumbnail: "/gallery/20.jpg",
      originalAlt: "image20",
      thumbnailAlt: "image20",
    },
    {
      original: "/gallery/21.jpg",
      thumbnail: "/gallery/21.jpg",
      originalAlt: "image21",
      thumbnailAlt: "image21",
    },
    {
      original: "/gallery/22.jpg",
      thumbnail: "/gallery/22.jpg",
      originalAlt: "image22",
      thumbnailAlt: "image22",
    },
    {
      original: "/gallery/23.jpg",
      thumbnail: "/gallery/23.jpg",
      originalAlt: "image23",
      thumbnailAlt: "image23",
    },
    {
      original: "/gallery/24.jpg",
      thumbnail: "/gallery/24.jpg",
      originalAlt: "image24",
      thumbnailAlt: "image24",
    },
    {
      original: "/gallery/25.jpg",
      thumbnail: "/gallery/25.jpg",
      originalAlt: "image25",
      thumbnailAlt: "image25",
    },
  ];

  return (
    <>
      {/* Title section */}
      <div className="flex justify-center mb-6 pt-24">
        <p className="w-2/3 text-center mb-8 text-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] bg-white/10 p-3 rounded-2xl text-white md:text-xl ">
          گالری تصاویر
        </p>
      </div>

      {/* Image carousel using react-image-gallery */}
      <div className="w-2/3 mx-auto">
        <ImageGallery items={images} showNav={true} />
      </div>
    </>
  );
};

export default Gallery;
