import React from 'react'

const EventCard = ({title, image, description}) => {
  return (
    <div className='flex h-full flex-col justify-between bg-amber-50'>
      <div className="overflow-hidden">
        <img id='event-card' className='' src={image} alt="" />
      </div>
      <h2 className='text-3xl font-bold '>{title}</h2>
      <p className='text-xl font-medium mx-5 my-2'>{description}</p>
    </div>
  )
}

export default EventCard
