import React, { useState } from "react";

const images = [
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037502/p2_oiox0h.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037489/p4_gxdqdn.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037500/p1_j1vdjk.jpg",
  ],
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037506/p3_lpmpo6.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037522/p5_ulqsbu.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  ],
  [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ],
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="flex scroll-smooth flex-col items-center mb-10">
        <div id="xx1" className="mt-10 mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white  to-red-500 bg-clip-text text-transparent">
            The Steellun Archive
          </h2>
          <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
        <div id="xx1" className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10">
          {images.map((i, colIndex) => (
            <div key={colIndex} className="grid-rows gap-4">
              {i.map((id) => (
                <div
                  key={id}
                  className="overflow-hidden mt-4 bg-amber-50 cursor-pointer"
                  onClick={() => setSelectedImage(id)}
                >
                  <img id="gallery-item" className="" src={id} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-[#8e8989] text-4xl font-medium hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;