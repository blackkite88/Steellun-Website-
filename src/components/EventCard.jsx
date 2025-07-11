import React from 'react';

const EventCard = ({ title, image, description }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[320px] md:h-full overflow-hidden rounded-lg shadow-lg group cursor-pointer bg-amber-50">
      
      {/* Image Layer */}
      <img
        id="event-card"
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay (always visible on mobile, slide-up on hover for md+) */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-5 py-6 
        bg-gradient-to-t from-black/80 to-transparent 
        transition-all duration-500 ease-in-out
        translate-y-0 md:translate-y-full md:group-hover:translate-y-0">
        
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
