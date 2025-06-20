import React from 'react'
import mem_image from '../assets/dummyteam.jpg'
import TeamCard from './TeamCard'
import logo from '../assets/dummycard.png'
import { Carousel } from "flowbite-react";
import EventCard from './EventCard.jsx'

const slides=[
  mem_image,
  mem_image,
  mem_image,
  mem_image,
  mem_image,
  mem_image
]

const Team = () => {
  return (
    <div className="flex flex-col relative items-center">
      <div className="w-[90%] lg:w-[80%] h-[300px] md:h-[500px] lg:h-[650px] relative backdrop-blur-xl backdrop-filter mx-6 mt-5 mb-10 bg-white/20 bg-opacity-10 p-2">
        <Carousel indicators={false}>
          {slides.map((s) => 
          <img className='relative h-full' src={s} alt="" />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Team
