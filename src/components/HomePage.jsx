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
      <div className="text-[#c6c1c1] flex flex-col lg:flex-row font-bold text-2xl gap-3 sm:text-3xl mt-0 mb-12 md:mb-20 md:text-5xl ">
        The
       <div className="text-red-500"> <Typewriter 
          options={{
            strings: ["Material Advantage"],
            autoStart: true,
            loop: true,
          }}
        /></div>
        Chapter Of NIT Rourkela
      </div>
      <div className="font-medium text-[#c6c1c1] w-78 sm:w-120 md:w-150 lg:w-150 text-lg sm:text-xl md:text-4xl mb-5 md:mb-40">
        We don’t just study materials — we
        <span className="mx-2.5 text-red-500 font-semibold italic">steel</span>
        the spotlight.
      </div>
      <div id="xx2" className="flex items-center text-center justify-center">
        <div className="font-medium backdrop-blur-xl mx-5 p-4 md:p-10 rounded-2xl backdrop-filter bg-white/20 bg-opacity-30 w-[96%] mb-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-white  to-red-500 bg-clip-text text-transparent">
              THE OFFICIAL MATERIAL ADVANTAGE CHAPTER
            </h2>
            <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="font-medium  text-[#c6c1c1] text-md sm:text-lg md:text-2xl">
            <span className=" text-red-500 font-bold">STEELLUN</span> is the
            official Material Advantage chapter of NIT Rourkela and proudly
            stands among the nine recognized chapters in India. Backed by
            internationally renowned organizations like ASM International,
            ACerS, AIST, and TMS, STEELLUN serves as a bridge between students
            and the global materials science community.
            <br />
            <br />
            Our mission is to provide a vibrant platform for aspiring materials
            scientists and engineers to gain real-world exposure, collaborate on
            research, and build skills beyond the classroom. Through hands-on
            workshops, industry-led sessions, certification programs, and
            student-driven projects, we empower learners to engage with
            cutting-edge technologies — from advanced steels and alloys to
            nanomaterials, biomaterials, and sustainable innovations.
            <br />
            <br />
            STEELLUN fosters a culture of curiosity, collaboration, and
            continuous learning. By connecting academia with industry, and
            theory with application, we aim to shape students into
            forward-thinking professionals who are ready to contribute
            meaningfully to the evolving world of materials science. At
            STEELLUN, learning isn't just about lectures — it's about forging
            experiences, forming connections, and creating impact.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
