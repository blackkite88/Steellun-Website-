import React from 'react'
import EventCard from './EventCard.jsx'
import logo from '../assets/dummycard.png'
import { Carousel } from "flowbite-react";


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
    <div className='flex flex-col items-center text-center'>
      <h1 className="text-white text-3xl sm:text-5xl my-12 font-bold">Events & Activities</h1>
      <div className="w-3/4 flex flex-wrap backdrop-blur-xl backdrop-filter mx-6 mb-10 bg-white/20 bg-opacity-10 justify-evenly p-2">
      <Carousel indicators={false}>
        {slides.map((s) => 
        <EventCard title={"af"} image={logo} description={"effefe"} />
        )}
      </Carousel>
      </div>
    </div>
  )
}

export default Events
