import React from 'react';

const Flagships = ({ image, title, description }) => {
  return (
    <div className="relative group h-[300px] w-[300px] md:h-[520px] md:w-[520px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
      {/* Base Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-101"
      />

      {/* Slide-Up Info Box */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-4 py-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
        <p className="text-sm md:text-lg font-medium mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Flagships;
