import React, { useState, useEffect } from 'react';
import img from '../assets/image.jpeg';

const TeamCard = ({ name, image, role, quote }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const delay = 200; // 1 second delay

  useEffect(() => {
    let timer;

    if (isHovered) {
      timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);
    } else {
      clearTimeout(timer);
      setShowPopup(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white overflow-hidden flex flex-col h-[200px] w-[135px] lg:h-[380px] rounded-lg lg:w-[300px]">
        <img
          className="rounded-lg h-[80%] object-cover w-[135px] lg:w-[300px]"
          src={image}
          alt=""
        />
        <div className="flex h-[20%] flex-col justify-center">
          <h4 className="font-bold text-[#6d6a6a] text-xl md:text-2xl lg:text-4xl">
            {name}
          </h4>
        </div>
      </div>

      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] pointer-events-none"></div>

          <div
            id="cardx"
            className="fixed top-1/2 left-1/2 rounded-lg z-[1001] transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-row shadow-2xl transition-all duration-300 ease-in-out w-[310px] md:w-[470px] lg:w-[600px] h-[230px] md:h-[350px] scale:110 md:scale-150"
          >
            <img
              className="rounded-lg object-cover h-full w-[150px] md:w-[210px] lg:w-[300px]"
              src={image}
              alt=""
            />
            <div className="flex flex-col text-left justify-center px-5">
              <h4 className="font-bold text-[#c6c1c1] text-lg md:text-2xl lg:text-4xl my-1 md:mb-2">
                {name}
              </h4>
              <p className="font-semibold text-[#c37f7f] text-md md:text-xl lg:text-3xl mb-4 md:mb-7">
                {role}
              </p>
              <p className="font-medium text-[#c6c1c1] text-sm md:text-lg lg:text-2xl mb-2 md:mb-5">
                {quote}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamCard;
