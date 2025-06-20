import React from 'react'

const Flagships = ({image, title, description}) => {
  return (
    <div className='flex h-[300px] w-[300px] md:h-[520px] md:w-[520px] flex-col bg-amber-50'>
      <div className="overflow-hidden">
        <img id='event-card' className='h-[100%]' src={image} alt="" />
      </div>
      <h2 className='text-3xl font-bold '>{title}</h2>
      <p className='text-xl font-medium mx-5 my-2'>{description}</p>
    </div>
  )
}

export default Flagships
