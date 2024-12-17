import React from 'react'
import logo from "../assets/TM logo.jpg"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='mb-20 flex justify-between items-center py-4'>
    <div className="flex flex-shrink-0 items-center">
        <img className='w-20 md:w-30 lg:w-50 mx-2 ml-10 h-auto object-contain shadow-lg' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
    </div>
    </nav>
      );
};

export default Navbar;