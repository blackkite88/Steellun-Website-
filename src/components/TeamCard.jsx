import React, { useState } from 'react';

const TeamCard = ({ name, image, role, quote }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        <div className="bg-white overflow-hidden flex flex-col h-[200px] w-[135px] lg:h-[380px] rounded-lg lg:w-[300px]">
          <img
            className="rounded-lg h-[80%] object-cover w-[135px] lg:w-[300px]"
            src={image}
            alt={`${name}, ${role}`}
          />
          <div className="flex h-[20%] flex-col justify-center text-center p-2">
            <h4 className="font-bold text-[#6d6a6a] text-xl md:text-2xl lg:text-4xl">
              {name.split(" ")[0]}
            </h4>
          </div>
        </div>
      </div>

      {showPopup && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
            onClick={handleClosePopup}
          ></div>

          <div
            id="cardx"
            className="fixed top-1/2 left-1/2 rounded-lg z-[1001] transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-row shadow-2xl transition-all duration-300 ease-in-out w-[310px] md:w-[470px] lg:w-[600px] h-[230px] md:h-[350px] scale-125" 
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-800 text-3xl font-light z-10"
            >
              &times;
            </button>

            <img
              className="rounded-l-lg object-cover h-full w-[150px] md:w-[210px] lg:w-[300px]"
              src={image}
              alt={`${name}, ${role}`}
            />
            <div className="flex flex-col text-left justify-center px-5">
              <h4 className="font-bold text-[#6d6a6a] text-lg md:text-2xl lg:text-4xl my-1 md:mb-2">
                {name}
              </h4>
              <p className="font-semibold text-[#c37f7f] text-md md:text-xl lg:text-3xl mb-4 md:mb-7">
                {role}
              </p>
              <p className="font-medium text-gray-500 text-sm md:text-lg lg:text-2xl mb-2 md:mb-5">
                "{quote}"
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TeamCard;