import React from 'react';
import EventCard from './EventCard.jsx';
import edge from '../assets/edge.png';
import gi from '../assets/gi.png';
import me from '../assets/me.png';
import logo from '../assets/dummycard.png';
import { Carousel } from "flowbite-react";
import Flagships from './Flagships.jsx';

const slides = [
  {
    name: "EDGE",
    image: edge,
    description: "jinga la la hoo hoo"
  },
  {
    name: "GI",
    image: gi,
    description: "jinga la la hoo hoo"
  },
  {
    name: "ME",
    image: me,
    description: "jinga la la hoo hoo"
  }
];

const Events = () => {
  return (
    <div className='flex scroll-smooth flex-col items-center text-center'>
      <div className="flex flex-col items-center text-center justify-center mb-5 md:mb-15">
        <div id='xx1' className="my-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-white  to-red-500 bg-clip-text text-transparent">
            FLAGSHIP EVENTS
          </h2>
          <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
        <div id='xx1' className="flex flex-wrap items-center text-center justify-center md:gap-10 px-auto gap-5">
          <Flagships title={"EDGE"} image={edge} description={"effefe"} />
          <Flagships title={"GI"} image={gi} description={"effefe"} />
        </div>
      </div>

      <div id="xx2" className="my-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white  to-red-500 bg-clip-text text-transparent">
            EVENTS
          </h2>
          <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>

      {/* Carousel on md and above */}
      <div id='xx2' className="hidden md:flex w-[90%] lg:w-[80%] h-[300px] md:h-[500px] lg:h-[650px] rounded-lg backdrop-blur-xl backdrop-filter mx-2 mb-10 bg-white/20 bg-opacity-10 justify-evenly p-1">
        <Carousel slideInterval={3000} pauseOnHover indicators={false}>
          {slides.map((s, i) => (
            <EventCard key={i} title={s.name} image={s.image} description={s.description} />
          ))}
        </Carousel>
      </div>

      {/* Grid on small screens */}
      <div id='xx2' className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] px-4 mb-10">
        {slides.map((s, i) => (
          <EventCard key={i} title={s.name} image={s.image} description={s.description} />
        ))}
      </div>
    </div>
  );
};

export default Events;
