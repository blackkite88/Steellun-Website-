import React from 'react';

const EventCard = ({ title, image, description }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group cursor-pointer bg-amber-50">
      {/* Image Layer */}
      <img
        id="event-card"
        src={image}
        alt={title}
        className="w-full h-full transition-transform duration-500"
      />

      {/* Slide-up Text Layer */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-5 py-6 
        bg-gradient-to-t from-black/80 to-transparent 
        translate-y-full group-hover:translate-y-0 
        transition-transform duration-500 ease-in-out">
        
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
