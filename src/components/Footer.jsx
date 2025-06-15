import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-red-900 pt-10 text-white">
      <div className="flex flex-wrap md:flex-nowrap justify-between px-6">
      <div className="flex flex-col gap-3 md:w-1/4 mb-4">
        <h3 className="text-xl font-bold">Steellun</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          National Institute of Technology Rourkela's premier platform for steel
          industry insights, research, and innovation. Connecting academia with
          industry excellence.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <h1>A</h1>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <h1>A</h1>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <h1>A</h1>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <h1>A</h1>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <h1>A</h1>
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Faculty
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Students
            </a>
          </li>
        </ul>
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
              <span className="font-medium">Phone:</span> +91-661-246-2XXX
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Email:</span> info@steellun.ac.in
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
