import React from "react";
import Typewriter from "typewriter-effect";
import teamImage from "../assets/team_pic.jpg";

const HomePage = () => {
  return (
    <div
      id="xx1"
      className="top-0 flex flex-col scroll-smooth items-center text-center  justify-center"
    >
      <div
        id="steellun"
        className="font-bold text-[66px]/33 sm:text-[80px]/35 md:text-[100px]/40 pb-0 lg:text-[200px]/60 mt-25 sm:mt-30"
      >
        STEELLUN
      </div>
      <div className="text-[#c6c1c1] flex flex-col lg:flex-row font-bold text-2xl gap-3 sm:text-3xl mt-0 mb-12 md:mb-20 md:text-5xl ">
        The
        <div className="text-red-500">
          {" "}
          <Typewriter
            options={{
              strings: ["Material Advantage"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        Chapter Of NIT Rourkela
      </div>
      <div className="font-medium text-[#c6c1c1] w-78 sm:w-120 md:w-150 lg:w-150 text-lg sm:text-xl md:text-4xl mb-18 md:mb-40">
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
      <div
        id="xx2"
        className="font-medium backdrop-blur-xl mx-5 p-4 md:p-10 rounded-2xl backdrop-filter bg-white/20 bg-opacity-30 w-[96%] mb-20"
      >
        {/* Animated background elements */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-white  to-red-500 bg-clip-text text-transparent">
            WHO WE ARE !!
          </h2>
          <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div id="xx1" className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24">
          {/* About and Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* About Us */}
            <div className="group">
              <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-bold text-4xl skew-x-[-20deg] shadow-lg hover:shadow-red-600/25 transition-all duration-300">
                  <span className="skew-x-[20deg] text-[#c6c1c1] block relative z-10">
                    About us
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
                <p className="text-left text-md sm:text-lg lg:text-2xl leading-relaxed text-gray-300 hover:text-white transition-colors duration-300 pl-6">
                  <span className="text-red-400 font-semibold">STEELLUN</span>,
                  the student chapter of Material Advantage at the National
                  Institute of Technology, Rourkela, is one of just nine such
                  chapters in India. It aims to bridge the gap between academia
                  and industry, creating opportunities for students in materials
                  science and metallurgy. The chapter actively organizes
                  seminars, workshops, industrial visits, and competitions to
                  foster knowledge and collaboration.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="group">
              <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-bold text-4xl skew-x-[-20deg] shadow-lg hover:shadow-red-600/25 transition-all duration-300">
                  <span className="skew-x-[20deg] text-[#c6c1c1] block relative z-10">
                    Our Vision
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="relative text-left pl-6">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
                <ul className="space-y-4 text-md sm:text-lg lg:text-2xl">
                  {[
                    "Expand Industry Collaboration with global organizations like ASM International, ACerS, AIST, and TMS.",
                    "Hands-on Learning: workshops, lab sessions, and certifications.",
                    "Focus on emerging technologies: nanomaterials, biomaterials, and sustainable materials.",
                    "Promote student-led research and innovation.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 group-hover/item:bg-red-400 group-hover/item:scale-125 transition-all duration-300"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="xx2"
        className="font-medium backdrop-blur-xl mx-5 md:p-10 rounded-2xl backdrop-filter bg-white/20 bg-opacity-30 w-[96%] mb-20"
      >
        {/* Meet Our Team Section */}
        <div className="text-center">
          <div className="mb-18">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-white  to-red-400 bg-clip-text text-transparent">
              MEET OUR TEAM
            </h2>
            <div className="w-44 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative group max-w-4xl mx-auto">
            {/* Glowing border effect */}
            <div className="absolute -inset-5 bg-gradient-to-r animate-pulse from-red-600 via-red-500 to-red-600 rounded-lg blur-xl opacity-65 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={teamImage}
                  alt="Our Team"
                  className="w-full h-auto object-cover transition-transform duration-800 group-hover:scale-101"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-5 left-5 w-4 h-4  border-red-400 opacity-60"></div>
              <div className="absolute top-5 right-5 w-4 h-4  border-red-400 opacity-60"></div>
              <div className="absolute bottom-5 left-5 w-4 h-4  border-red-400 opacity-60"></div>
              <div className="absolute bottom-5 right-5 w-4 h-4  border-red-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
