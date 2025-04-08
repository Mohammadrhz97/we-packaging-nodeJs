import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery: React.FC = () => {
  // Image array for the gallery, each with original and thumbnail paths
  const images: ReactImageGalleryItem[] = [
    {
      original: "/MainpageGallery/mg1.jpg",
      thumbnail: "/MainpageGallery/mg1.jpg",
    },
    {
      original: "/MainpageGallery/mg2.jpg",
      thumbnail: "/MainpageGallery/mg2.jpg",
    },
    {
      original: "/MainpageGallery/mg3.jpg",
      thumbnail: "/MainpageGallery/mg3.jpg",
    },
    {
      original: "/MainpageGallery/mg4.jpg",
      thumbnail: "/MainpageGallery/mg4.jpg",
    },
    {
      original: "/MainpageGallery/mg5.jpg",
      thumbnail: "/MainpageGallery/mg5.jpg",
    },
    {
      original: "/MainpageGallery/mg6.jpg",
      thumbnail: "/MainpageGallery/mg6.jpg",
    },
    {
      original: "/MainpageGallery/mg7.jpg",
      thumbnail: "/MainpageGallery/mg7.jpg",
    },
    {
      original: "/MainpageGallery/mg8.jpg",
      thumbnail: "/MainpageGallery/mg8.jpg",
    },
  ];

  return (
    <>
      {/* Title section */}
      <div className="flex justify-center mb-6">
        <p className="w-1/3 text-center mb-8 bg-white/10 p-3 rounded-2xl text-white md:text-xl text-sm">
          گالری تصاویر
        </p>
      </div>

      {/* Image carousel using react-image-gallery */}
      <ImageGallery items={images} />
    </>
  );
};

export default Gallery;
