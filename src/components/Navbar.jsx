import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <span className="text-2xl md:text-3xl font-medium text-white">Arepalli Saiteja</span>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-white hover:text-yellow-400 font-medium transition-colors">Home</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-400 font-medium transition-colors">About</a></li>
          <li><a href="#projects" className="text-white hover:text-yellow-400 font-medium transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-400 font-medium transition-colors">Contact</a></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 animate-fade-in">
          <li><a href="#home" className="text-white hover:text-yellow-400 font-medium transition-colors" onClick={handleToggle}>Home</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-400 font-medium transition-colors" onClick={handleToggle}>About</a></li>
          <li><a href="#projects" className="text-white hover:text-yellow-400 font-medium transition-colors" onClick={handleToggle}>Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-400 font-medium transition-colors" onClick={handleToggle}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;