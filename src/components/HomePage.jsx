import React from "react";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div
      id="xx1"
      className="top-0 flex flex-col items-center text-center justify-center"
    >
      <div className="text-red-500 font-bold text-[66px]/33 sm:text-[80px]/35 md:text-[100px]/40 pb-0 lg:text-[200px]/60 mt-25 sm:mt-30">
        STEELLUN
      </div>
      <div className="text-red-500 font-bold text-2xl sm:text-3xl mt-0 mb-10 md:text-5xl ">
        <Typewriter
          options={{
            strings: ["Abra ka dabra gili gili chuu"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="text-white w-78 sm:w-120 md:w-150 lg:w-200 text-lg sm:text-xl md:text-2xl pb-30 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
        nulla vitae eius dicta commodi temporibus voluptatibus, voluptate vero
        minus quia maiores dolorem sapiente amet labore eum quae. Earum,
        recusandae!
      </div>
    </div>
  );
};

export default HomePage;
