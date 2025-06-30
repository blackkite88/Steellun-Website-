import React from 'react'
import EventCard from './EventCard.jsx'
import logo from '../assets/dummycard.png'
import { Carousel } from "flowbite-react";
import Flagships from './Flagships.jsx';


const slides=[
    {
        name:"Event",
        image:logo,
        description:"jinga la la hoo hoo"
    },
    {
        name:"Event",
        image:logo,
        description:"jinga la la hoo hoo"
    },
    {
        name:"Event",
        image:logo,
        description:"jinga la la hoo hoo"
    }
]

const Events = () => {
  return (
    <div className='flex scroll-smooth flex-col items-center text-center'>
      <div className=" flex flex-col items-center text-center justify-center mb-15">
        <h1 className='text-[#c6c1c1] text-2xl sm:text-3xl my-12 font-bold'>Our Flagship Events</h1>
      <div id='xx1' className="flex flex-wrap items-center text-center justify-center md:gap-10  px-auto gap-5 ">
        <Flagships title={"af"} image={logo} description={"effefe"} />
        <Flagships title={"af"} image={logo} description={"effefe"} />
      </div>
      </div>

      <h1 id='xx2' className='text-[#c6c1c1] text-2xl sm:text-3xl mt-12 mb-8 font-bold'>Events & Activities</h1>
      <div id='xx2' className="w-[90%] overflow-hidden lg:w-[80%]  h-[300px] md:h-[500px] rounded-lg lg:h-[650px] flex flex-wrap backdrop-blur-xl backdrop-filter mx-2 mb-10 bg-white/20 bg-opacity-10 justify-evenly p-1">
      <Carousel  slideInterval={1000} pauseOnHover indicators={false}>
        {slides.map((s) => 
        <EventCard title={"af"} image={logo} description={"effefe"} />
        )}
      </Carousel>
      </div>
    </div>
  )
}

export default Events
