import React from "react";
import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full scroll-smooth bottom-0 backdrop-blur-sm backdrop-filter bg-white/10 pt-10 text-white">
      <div className="flex flex-wrap md:flex-nowrap  justify-between px-8 md:px-16">
      <div className="flex flex-col gap-3 md:w-1/4 mb-4">
        <h3 className="text-xl font-bold">Steellun</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          National Institute of Technology Rourkela's premier platform for steel
          industry insights, research, and innovation. Connecting academia with
          industry excellence.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/steellun-nitr/posts/?feedView=all"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/steellun__nitr/"
            className="text-gray-400 hover:text-white transition-colors"
          >
           <FaInstagram />
          </a>
          <a
            href="https://www.steellun.in/"
            className="text-gray-400 hover:text-white transition-colors"
          >
           <FaGlobe />
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-300">
              Department of Metallurgical & Materials Engineering
            </p>
            <p className="text-gray-300">National Institute of Technology</p>
            <p className="text-gray-300">Rourkela, Odisha 769008</p>
          </div>
          <div>
            <p className="text-gray-300">
              <span className="font-medium">Phone:</span> +91-637-147-9409
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Email:</span> nitrsteel@gmail.com
            </p>
          </div>
        </div>
</div>
</div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Steellun - NIT Rourkela. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-sm">Back to Top</span>
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

