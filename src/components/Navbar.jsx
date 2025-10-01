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
      ? 'text-red-600 underline underline-offset-4 font-bold'
      : 'hover:text-red-600 transition-colors';

  return (
    <div className="z-50 border-b border-white/30 backdrop-blur-lg bg-white/5 text-[#c6c1c1] w-full flex flex-wrap justify-between items-center p-4">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img className="h-10 md:h-12 w-10 md:w-12" src={logo} alt="Logo" />
        <h1 id='steellun' className="text-red-900 text-2xl md:text-4xl font-bold">STEELLUN</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex font-medium text-xl gap-14 mr-8">
        <li><NavLink className={linkStyle} id='nav-full' to="/" >Home</NavLink></li>
        {/* <li><NavLink className={linkStyle} id='nav-full' to="/about" >About Us</NavLink></li> */}
        <li><NavLink className={linkStyle} id='nav-full' to="/events" >Events</NavLink></li>
        <li><NavLink className={linkStyle} id='nav-full' to="/team" >Team</NavLink></li>
        <li><NavLink className={linkStyle} id='nav-full' to="/gallery" >Gallery</NavLink></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={handleNav}>
          {showNav ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {showNav && (
        <ul className="lg:hidden flex flex-col font-medium text-center w-full mt-4 gap-3 rounded-lg transition-all duration-300 ease-in-out">
          <li><NavLink id='nav-menu' className={linkStyle} to="/" onClick={handleNav}>Home</NavLink></li>
          {/* <li><NavLink id='nav-menu' className={linkStyle} to="/about" onClick={handleNav}>About Us</NavLink></li> */}
          <li><NavLink id='nav-menu' className={linkStyle} to="/events" onClick={handleNav}>Events</NavLink></li>
          <li><NavLink id='nav-menu' className={linkStyle} to="/team" onClick={handleNav}>Team</NavLink></li>
          <li><NavLink id='nav-menu' className={linkStyle} to="/gallery" onClick={handleNav}>Gallery</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
