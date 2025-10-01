import React from 'react';

const EventCard = ({ title, image, description }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[320px] md:h-full overflow-hidden rounded-lg shadow-lg group cursor-pointer bg-amber-50">
      
      <img
        id="event-card"
        src={image}
        alt={title}
        className="w-full h-full object-fit transition-transform duration-600 group-hover:scale-101"
      />

      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-5 py-6 
        bg-gradient-to-t from-black/100 to-transparent 
        transition-all duration-500 ease-in-out
        translate-y-0 md:translate-y-full md:group-hover:translate-y-0">
        
        <h3 className="text-white text-xl md:text-4xl font-bold mb-4 md:mb-6">{title}</h3>
        <p className="text-gray-300 text-sm md:text-2xl mb-2">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
