import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };


  return (
    <div id='xx2' className="z-100 positon-absolute top-0 rounded-xl backdrop-blur-xl bg-clip-padding backdrop-filter bg-black/40 bg-opacity-10 text-white sticky w-full flex flex-wrap justify-between items-center mx-auto p-4 ">
        <div className="flex items-center gap-3"><img className='h-10 md:h-13 w-10 md:w-13' src={logo} alt="" />
        <h1 className='text-red-900 text-2xl md:text-4xl font-bold'>STEELLUN</h1></div>
        <ul className="hidden md:flex">
        <li id='nav-full' className="p-4">Home</li>
        <li id='nav-full' className="p-4">Events</li>
        <li id='nav-full' className="p-4">Our Team</li>
        <li id='nav-full' className="p-4">Annual Report</li>
        <li id='nav-full' className="p-4">Contact Us</li>
      </ul>
      <div className="md:hidden">
        <button onClick={handleNav}>{showNav ? <X/> : <Menu /> }</button>
      </div>
      {showNav && (
        <ul className="flex text-center flex-col basis-full items-center mt-4">
        <li id='nav-menu' className="p-4">Home</li>
        <li id='nav-menu' className="p-4">Events</li>
        <li id='nav-menu' className="p-4">Our Team</li>
        <li id='nav-menu' className="p-4">Annual Report</li>
        <li id='nav-menu' className="p-4">Contact Us</li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
