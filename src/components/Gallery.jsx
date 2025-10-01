import React, { useState } from "react";

const images = [
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323040/WhatsApp_Image_2025-09-30_at_01.27.04_o0ylwl.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323040/WhatsApp_Image_2025-09-30_at_01.27.06_gtuc0l.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323039/WhatsApp_Image_2025-09-30_at_01.27.06_1_kikbgx.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323036/WhatsApp_Image_2025-09-29_at_20.27.19_d3i2d7.jpg",
  ],
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323036/WhatsApp_Image_2025-09-30_at_01.27.06_2_kcfzut.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323036/WhatsApp_Image_2025-09-30_at_01.27.04_1_gybsxs.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323035/WhatsApp_Image_2025-09-30_at_01.27.03_b3uyj2.jpg",
  ],
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323035/WhatsApp_Image_2025-09-29_at_20.27.20_cqalhd.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323035/WhatsApp_Image_2025-09-29_at_20.27.20_1_pnnfyk.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323035/WhatsApp_Image_2025-09-30_at_01.27.03_1_pifren.jp",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323032/WhatsApp_Image_2025-09-29_at_20.27.18_wi7rgv.jpg",
  ],
  [
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323035/WhatsApp_Image_2025-09-30_at_01.27.03_1_pifren.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323033/WhatsApp_Image_2025-09-29_at_20.27.19_1_surwow.jpg",
    "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759323032/WhatsApp_Image_2025-09-29_at_14.44.04_qpyzdk.jpg",
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