import React from 'react'
import mem_image from '../assets/dummyteam.jpg'
import TeamCard from './TeamCard'
import logo from '../assets/dummycard.png'
import { Carousel } from "flowbite-react";
import EventCard from './EventCard.jsx'
import img1 from'../assets/image.jpeg'
import { useState } from 'react';
import ebMembers from './EB.js'
import designMembers from './DesignMembers.js';
import contentMembers from './ContentMembers.js';
import technicalMembers from './TechnicalMembers.js';
import publicityMembers from './PublicityMembers.js';
import managementMembers from './ManagementMembers.js';

const Team = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='relative scroll-smooth'>
    <div id='xx1' className="flex flex-col relative text-center justify-center items-center m-5">
      <div className="flex flex-col m-5 relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl' >FACULTY ADVISOR</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <TeamCard name={"Archana Mallik"} role={"Faculty Advisor"} image={"https://res.cloudinary.com/dwhfvkfkb/image/upload/v1759322954/WhatsApp_Image_2025-09-29_at_19.59.44_hgqz7x.jpg"} quote={"Focus fuels growth"} />
      </div>
      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl' >EXECUTIVE BODY</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-500 to-yellow-200 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-6 mx-2 md:gap-12 ">
          {ebMembers.map((m) => (
            <TeamCard
              key={m['Full Name']}
              name={m['Full Name']}
              role={m['Team Name / Designation']}
              image={m['Upload Profile Photo']}
              quote={m['Your Quote']}
            />
          ))}
        </div>
      </div>
      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl'>DESIGN TEAM</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-12">
          {designMembers.map((m) => <TeamCard key={m['Full Name']} name={m['Full Name']} role={m['Team Name / Designation']} image={m['Upload Profile Photo']} quote={m['Your Quote']} />)}
        </div>
      </div>

      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl'>CONTENT TEAM</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-12">
          {contentMembers.map((m) => <TeamCard key={m['Full Name']} name={m['Full Name']} role={m['Team Name / Designation']} image={m['Upload Profile Photo']} quote={m['Your Quote']} />)}
        </div>
      </div>

      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl'>TECHNICAL TEAM</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-12">
          {technicalMembers.map((m) => <TeamCard key={m['Full Name']} name={m['Full Name']} role={m['Team Name / Designation']} image={m['Upload Profile Photo']} quote={m['Your Quote']} />)}
        </div>
      </div>

      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl'>PUBLICITY TEAM</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-cyan-600 to-cyan-200 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-12">
          {publicityMembers.map((m) => <TeamCard key={m['Full Name']} name={m['Full Name']} role={m['Team Name / Designation']} image={m['Upload Profile Photo']} quote={m['Your Quote']} />)}
        </div>
      </div>

      <div className="w-screen flex m-5 flex-col relative text-center justify-center items-center">
        <h1 className='font-bold text-[#c6c1c1] text-lg sm:text-xl md:text-4xl'>MANAGEMENT TEAM</h1>
        <div className="w-44 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto mt-2 mb-5 rounded-full"></div>
        <div className="flex flex-wrap justify-center gap-2 mx-2 md:gap-12">
          {managementMembers.map((m) => <TeamCard key={m['Full Name']} name={m['Full Name']} role={m['Team Name / Designation']} image={m['Upload Profile Photo']} quote={m['Your Quote']} />)}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team
