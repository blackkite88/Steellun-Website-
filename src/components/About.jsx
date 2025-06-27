import React from 'react';
import teamImage from '../assets/team.png';

const AboutSection = () => {
  return (
    <div id="about" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 md:px-16 lg:px-24">
        {/* About and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* About Us */}
          <div className="group">
            <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-bold text-xl skew-x-[-20deg] shadow-lg hover:shadow-red-600/25 transition-all duration-300">
                <span className="skew-x-[20deg] block relative z-10">About us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 hover:text-white transition-colors duration-300 pl-6">
                <span className="text-red-400 font-semibold">STEELLUN</span>, the student chapter of Material Advantage at the National Institute of Technology, Rourkela, is one of just nine such chapters in India. It aims to bridge the gap between academia and industry, creating opportunities for students in materials science and metallurgy. The chapter actively organizes seminars, workshops, industrial visits, and competitions to foster knowledge and collaboration.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="group">
            <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-bold text-xl skew-x-[-20deg] shadow-lg hover:shadow-red-600/25 transition-all duration-300">
                <span className="skew-x-[20deg] block relative z-10">OUR VISION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
              <ul className="space-y-4 text-sm sm:text-base lg:text-lg">
                {[
                  "Expand Industry Collaboration with global organizations like ASM International, ACerS, AIST, and TMS.",
                  "Hands-on Learning: workshops, lab sessions, and certifications.",
                  "Focus on emerging technologies: nanomaterials, biomaterials, and sustainable materials.",
                  "Promote student-led research and innovation."
                ].map((item, index) => (
                  <li key={index} className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
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

        {/* Meet Our Team Section */}
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent">
              MEET OUR TEAM
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group max-w-4xl mx-auto">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={teamImage}
                  alt="Our Team"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-5 left-5 w-4 h-4 border-l-2 border-t-2 border-red-400 opacity-60"></div>
              <div className="absolute top-5 right-5 w-4 h-4 border-r-2 border-t-2 border-red-400 opacity-60"></div>
              <div className="absolute bottom-5 left-5 w-4 h-4 border-l-2 border-b-2 border-red-400 opacity-60"></div>
              <div className="absolute bottom-5 right-5 w-4 h-4 border-r-2 border-b-2 border-red-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;