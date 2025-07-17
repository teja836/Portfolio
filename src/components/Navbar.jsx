import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-gray-800">Teja Arepalli</span>
      </div>
      <ul className="flex space-x-6">
        <li><a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a></li>
        <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a></li>
        <li><a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;