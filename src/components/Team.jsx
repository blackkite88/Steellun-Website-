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
      <h1 className="text-white relative text-3xl sm:text-5xl my-12 font-bold">Our Team</h1>
      <div className="w-3/4 relative backdrop-blur-xl backdrop-filter mx-6 mb-10 bg-white/20 bg-opacity-10 p-2">
        <Carousel indicators={false}>
          {slides.map((s) => 
          <img className='relative' src={s} alt="" />
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Team
