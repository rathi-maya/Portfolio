import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-xl font-bold text-[#00ffab]">
          RATHI M
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link  className="text-white hover:text-[#00ffab] transition-colors duration-300" to="/">Home</Link>
           <Link  className="text-white hover:text-[#00ffab] transition-colors duration-300" to="/about">About me</Link>
            <Link  className="text-white hover:text-[#00ffab] transition-colors duration-300" to="/skills">Skills</Link>
             <Link  className="text-white hover:text-[#00ffab] transition-colors duration-300" to="/projects">Projects</Link>
              <Link  className="text-white hover:text-[#00ffab] transition-colors duration-300" to="/contact">Contact</Link>    
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4 transition-all duration-300 ease-in-out`}
        style={{
          background: 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <div className="flex flex-col items-center space-y-4">
        <Link onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300" to="/">Home</Link>
        
          <Link onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300" to="/about">About Me</Link>
          
           <Link onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300" to="/skills">Skills</Link>

             <Link onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300" to="/projects">Projects</Link>

             <Link onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300" to="/contact">
              Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;