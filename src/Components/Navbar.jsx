import React, { useState } from 'react';

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
           <a
            href="#home"
            className="text-white hover:text-[#00ffab] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#00ffab] transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white hover:text-[#00ffab] transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-[#00ffab] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#00ffab] transition-colors duration-300"
          >
            Contact
          </a>
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
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;