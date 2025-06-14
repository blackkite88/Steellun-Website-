import React from 'react'

const EventCard = ({title, image, description}) => {
  return (
    <div className='flex flex-col justify-between bg-amber-50 '>
      <img className='' src={image} alt="" />
      <h2 className='text-3xl font-bold '>{title}</h2>
      <p className='text-xl font-medium mx-5 my-2'>{description}</p>
    </div>
  )
}

export default EventCard
