import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery: React.FC = () => {
  // Image array for the gallery, each with original and thumbnail paths
  const images: ReactImageGalleryItem[] = [
    {
      original: "/MainpageGallery/mg1.jpg",
      thumbnail: "/MainpageGallery/mg1.jpg",
      originalAlt: "image1",
      thumbnailAlt: "image1",
    },
    {
      original: "/MainpageGallery/mg2.jpg",
      thumbnail: "/MainpageGallery/mg2.jpg",
      originalAlt: "image2",
      thumbnailAlt: "image2",
    },
    {
      original: "/MainpageGallery/mg3.jpg",
      thumbnail: "/MainpageGallery/mg3.jpg",
      originalAlt: "image3",
      thumbnailAlt: "image3",
    },
    {
      original: "/MainpageGallery/mg4.jpg",
      thumbnail: "/MainpageGallery/mg4.jpg",
      originalAlt: "image4",
      thumbnailAlt: "image4",
    },
    {
      original: "/MainpageGallery/mg5.jpg",
      thumbnail: "/MainpageGallery/mg5.jpg",
      originalAlt: "image5",
      thumbnailAlt: "image5",
    },
    {
      original: "/MainpageGallery/mg6.jpg",
      thumbnail: "/MainpageGallery/mg6.jpg",
      originalAlt: "image6",
      thumbnailAlt: "image6",
    },
    {
      original: "/MainpageGallery/mg7.jpg",
      thumbnail: "/MainpageGallery/mg7.jpg",
      originalAlt: "image7",
      thumbnailAlt: "image7",
    },
    {
      original: "/MainpageGallery/mg8.jpg",
      thumbnail: "/MainpageGallery/mg8.jpg",
      originalAlt: "image8",
      thumbnailAlt: "image8",
    },
  ];

  return (
    <>
      {/* Title section */}
      <div className="flex justify-center mb-6">
        <p className="w-2/3 text-center mb-8 text-2xl bg-white/10 p-3 rounded-2xl text-white md:text-xl ">
          گالری تصاویر
        </p>
      </div>

      {/* Image carousel using react-image-gallery */}
      <ImageGallery
        items={images}
        lazyLoad={true} // Enable lazy loading for the images
      />
    </>
  );
};

export default Gallery;
