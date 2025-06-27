import React from 'react';
import teamImage from '../assets/dummyteam.jpg';

const AboutSection = () => {
  return (
    <div className=" text-white px-4 py-10 sm:px-6 md:px-16 lg:px-24">
      {/* About and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* About Us */}
        <div>
          <div className="inline-block mb-4">
            <div className="bg-red-600 px-4 py-2 font-bold text-xl skew-x-[-20deg] shadow-md">
              <span className="skew-x-[20deg] block">About us</span>
            </div>
          </div>
          <p className="text-sm sm:text-base leading-relaxed mt-4">
            STEELLUN, the student chapter of Material Advantage at the National Institute of Technology, Rourkela, is one of just nine such chapters in India...
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <div className="inline-block mb-4">
            <div className="bg-red-600 px-4 py-2 font-bold text-xl skew-x-[-20deg] shadow-md">
              <span className="skew-x-[20deg] block">OUR VISION</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm sm:text-base mt-4 space-y-2">
            <li>Expand Industry Collaboration with global organizations like ASM International, ACerS, AIST, and TMS.</li>
            <li>Hands-on Learning: workshops, lab sessions, and certifications.</li>
            <li>Focus on emerging technologies: nanomaterials, biomaterials, and sustainable materials.</li>
            <li>Promote student-led research and innovation.</li>
          </ul>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">MEET OUR TEAM</h2>
        <div className="mx-auto w-full max-w-3xl border-4 border-red-600 p-2 rounded-xl shadow-xl">
          <img
            src={teamImage}
            alt="Our Team"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
