import React from "react";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div
      id="xx1"
      className="top-0 flex flex-col items-center text-center  justify-center"
    >
      <div
        id="steellun"
        className="font-bold text-[66px]/33 sm:text-[80px]/35 md:text-[100px]/40 pb-0 lg:text-[200px]/60 mt-25 sm:mt-30"
      >
        STEELLUN
      </div>
      <div className="text-red-500 font-bold text-2xl sm:text-3xl mt-0 mb-12 md:mb-20 md:text-5xl ">
        <Typewriter
          options={{
            strings: ["The Official Material Advantage Chapter"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="font-medium text-white w-78 sm:w-120 md:w-150 lg:w-150 text-lg sm:text-xl md:text-4xl pb-42 ">
        We don’t just study materials — we
        <span className="mx-3 text-red-500 font-semibold italic">steel</span>
        the spotlight.
      </div>
    </div>
  );
};

export default HomePage;
