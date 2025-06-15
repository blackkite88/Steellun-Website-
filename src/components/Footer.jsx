import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-red-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">SteelLun</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              National Institute of Technology Rourkela's premier platform for steel industry insights, 
              research, and innovation. Connecting academia with industry excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <h1>A</h1>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <h1>A</h1>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <h1>A</h1>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <h1>A</h1>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <h1>A</h1>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Faculty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Students</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Steel Database</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Industry Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Technical Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">News & Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Downloads</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Department of Metallurgical & Materials Engineering</p>
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SteelLun - NIT Rourkela. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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
