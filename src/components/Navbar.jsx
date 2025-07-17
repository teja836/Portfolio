import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative">
      <div className="rainbow-border rounded-b-xl">
        <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-md rounded-b-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-white/40 shadow-lg text-black font-extrabold text-2xl mr-2 select-none" style={{textShadow: '0 0 8px #fff, 0 0 16px #fff'}}>T</span>
              <span className="text-xl font-bold text-white">Portfolio</span>
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
      </div>
      <style>{`
        .rainbow-border {
          padding: 3px;
          background: conic-gradient(
            red, orange, yellow, green, cyan, blue, violet, red
          );
          animation: rotate 3s linear infinite;
        }
        @keyframes rotate {
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;