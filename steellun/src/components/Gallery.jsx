import React from "react";


const images=[
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",],
  ["https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"]
]

const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-3xl sm:text-5xl my-12 font-bold">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-6">
        {images.map((i) => (
          <div className="grid gap-4">
            {i.map((id) => 
            <div className="overflow-hidden">
              <img id="gallery-item" className="h-auto max-w-full" src={id} alt="" />
            </div>
            )}
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Gallery;
