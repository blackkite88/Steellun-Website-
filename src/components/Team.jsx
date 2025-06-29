import React from 'react'
import mem_image from '../assets/dummyteam.jpg'
import TeamCard from './TeamCard'
import logo from '../assets/dummycard.png'
import { Carousel } from "flowbite-react";
import EventCard from './EventCard.jsx'
import img1 from'../assets/image.jpeg'
import { useState } from 'react';

const slides=[
  mem_image,
  mem_image,
  mem_image,
  mem_image,
  mem_image,
  mem_image
]

const Team = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='relative'>
    {isHovered && <div className="pointer-events-none
 z-[101] fixed inset-0 h-screen w-screen bg-black/80"></div>}
    <div id='xx1' className="flex flex-col relative text-center justify-center items-center m-5">
      <div className="flex flex-col m-5 relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl' >FACULTY ADVISOR</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <TeamCard />

        {/* <img className='h-[250px] w-[200px] lg:h-[450px] lg:w-[400px]' src={img1} alt="" /> */}
      </div>
      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl' >EXECUTIVE BODY</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-4 ">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
        </div>
      </div>
      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] w-78 sm:w-120 md:w-150 lg:w-150 text-lg sm:text-xl md:text-4xl' >TEAM MEMBERS</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-4">
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
          <img className='h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]' src={img1} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team
