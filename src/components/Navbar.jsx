import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  // Active link styling
  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-red-500 underline underline-offset-4 font-semibold'
      : 'hover:text-red-400 transition-colors';

  return (
    <div className="z-50 border-b border-white/30 backdrop-blur-lg bg-white/5 text-white w-full flex flex-wrap justify-between items-center p-4">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img className="h-10 md:h-12 w-10 md:w-12" src={logo} alt="Logo" />
        <h1 className="text-red-900 text-2xl md:text-4xl font-bold">STEELLUN</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-medium gap-4">
        <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
        <li><NavLink to="/events" className={linkStyle}>Events</NavLink></li>
        <li><NavLink to="/team" className={linkStyle}>Our Team</NavLink></li>
        <li><NavLink to="/report" className={linkStyle}>Annual Report</NavLink></li>
        <li><NavLink to="/gallery" className={linkStyle}>Gallery</NavLink></li>
        <li><NavLink to="/contact" className={linkStyle}>Contact Us</NavLink></li>
        <li><NavLink to="/about" className={linkStyle}>About Us</NavLink></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={handleNav}>
          {showNav ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {showNav && (
        <ul className="md:hidden flex flex-col font-medium text-center w-full mt-4 bg-black/90 py-4 rounded-lg transition-all duration-300 ease-in-out">
          <li><NavLink to="/" className={linkStyle} onClick={handleNav}>Home</NavLink></li>
          <li><NavLink to="/events" className={linkStyle} onClick={handleNav}>Events</NavLink></li>
          <li><NavLink to="/team" className={linkStyle} onClick={handleNav}>Our Team</NavLink></li>
          <li><NavLink to="/report" className={linkStyle} onClick={handleNav}>Annual Report</NavLink></li>
          <li><NavLink to="/gallery" className={linkStyle} onClick={handleNav}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={linkStyle} onClick={handleNav}>Contact Us</NavLink></li>
          <li><NavLink to="/about" className={linkStyle} onClick={handleNav}>About Us</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
