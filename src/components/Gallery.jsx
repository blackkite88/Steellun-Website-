import React from "react";


const images=[
  ["https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037502/p2_oiox0h.jpg",
  "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037489/p4_gxdqdn.jpg",
  "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037500/p1_j1vdjk.jpg",],
  ["https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037506/p3_lpmpo6.jpg",
  "https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759037522/p5_ulqsbu.jpg",
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
    <div className="flex scroll-smooth flex-col items-center mb-10">
      <h1 className=" text-[#c6c1c1] text-3xl sm:text-5xl my-12 font-bold">The Steellun Archive</h1>
      <div id="xx1" className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-6">
        {images.map((i) => (
          <div className="grid-rows gap-4">
            {i.map((id) => 
            <div className="overflow-hidden mt-4 bg-amber-50">
              <img id="gallery-item" className="" src={id} alt="" />
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
