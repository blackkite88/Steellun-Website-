import React, { useState } from 'react';
import img from '../assets/image.jpeg';

const TeamCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white overflow-hidden flex flex-col h-[200px] w-[135px] lg:h-[380px] rounded-lg lg:w-[300px]">
        <img
          className="rounded-lg h-[200px] w-[135px] lg:h-[350px] lg:w-[300px]"
          src={img}
          alt=""
        />
        <h4 className="font-bold text-[#ff0000] text-xl md:text-2xl lg:text-4xl">
                Archana Mallick
              </h4>
      </div>

      {isHovered && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] pointer-events-none"></div>

          <div id='cardx' className="fixed top-1/2 left-1/2 rounded-lg z-[1001] transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-row shadow-2xl transition-all duration-300 ease-in-out w-[310px] md:w-[470px] lg:w-[600px] h-[230px] md:h-[350px] scale:110 md:scale-150">
            <img
              className="rounded-lg h-full w-[150px] md:w-[210px] lg:w-[300px]"
              src={img}
              alt=""
            />
            <div className="flex flex-col text-left justify-center pl-5">
              <h4 className="font-bold text-[#ff0000] text-lg md:text-2xl lg:text-4xl my-1 md:mb-2">
                Archana Mallick
              </h4>
              <p className="font-semibold text-[#c37f7f] text-md md:text-xl lg:text-3xl mb-4 md:mb-7">
                Faculty Advisor
              </p>
              <p className="font-medium text-[#c6c1c1] text-sm md:text-lg lg:text-2xl mb-2 md:mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                expedita!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamCard;
