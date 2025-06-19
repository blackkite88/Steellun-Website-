import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div id='xx2' className="z-100 border-b-1 border-white/30 position-absolute top-0 backdrop-blur-lg bg-clip-padding backdrop-filter bg-black/20 bg-opacity-30 text-white w-full flex flex-wrap justify-between items-center mx-auto p-4">
      <div className="flex items-center gap-3">
        <img className='h-10 md:h-13 w-10 md:w-13' src={logo} alt="Logo" />
        <h1 className='text-red-900 text-2xl md:text-4xl font-bold'>STEELLUN</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden font-medium md:flex">
        <li id='nav-menu' className="p-4"><Link to="/">Home</Link></li>
        <li id='nav-menu' className="p-4"><Link to="/events">Events</Link></li>
        <li id='nav-menu' className="p-4"><Link to="/team">Our Team</Link></li>
        <li id='nav-menu' className="p-4"><Link to="/report">Annual Report</Link></li>
        <li id='nav-menu' className="p-4"><Link to="/Gallery">Gallery</Link></li>
        <li id='nav-menu' className="p-4"><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={handleNav}>{showNav ? <X /> : <Menu />}</button>
      </div>

      {/* Mobile Menu Items */}
      {showNav && (
        <ul className="flex font-medium text-center flex-col basis-full items-center mt-4">
          <li id='nav-menu' className="p-4"><Link to="/" onClick={handleNav}>Home</Link></li>
          <li id='nav-menu' className="p-4"><Link to="/events" onClick={handleNav}>Events</Link></li>
          <li id='nav-menu' className="p-4"><Link to="/team" onClick={handleNav}>Our Team</Link></li>
          <li id='nav-menu' className="p-4"><Link to="/report" onClick={handleNav}>Annual Report</Link></li>
          <li id='nav-menu' className="p-4"><Link to="/contact" onClick={handleNav}>Contact Us</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
