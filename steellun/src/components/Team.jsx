import React from 'react'
import mem_image from '../assets/dummyteam.jpg'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className="text-white text-3xl sm:text-5xl my-12 font-bold">Our Team</h1>
      <div className="z-[-1] flex flex-wrap backdrop-blur-xl backdrop-filter mx-6 bg-white/20 bg-opacity-10 justify-evenly p-1">
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>
        <TeamCard name={`Vivek`} role={`Technical Team Lead`} image={mem_image}/>

      </div>
    </div>
  )
}

export default Team
