import React from 'react'

const TeamCard = ({name, role, image}) => {
  return (
    <div id='event-card' className='h-55 w-40 lg:h-90 lg:w-70 flex flex-col justify-between bg-amber-50 m-3 md:m-4'>
      <img className='h-[70%] ' src={image} alt="" />
      <h2 className='text-3xl font-bold '>{name}</h2>
      <p className='text-lg mx-5 mb-5'>{role}</p>
    </div>
  )
}

export default TeamCard
