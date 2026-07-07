import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const Navbar = ({ onNavigate = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = (section) => {
    setMenuOpen(false);
    onNavigate(section);
  };

  return (
    <Motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-10 mx-4 mb-3 rounded-full border border-black/15 bg-transparent shadow-lg backdrop-blur-md z-50"
    >
      <div className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("all");
            }}
            className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            AST
          </a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-800 focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("all");
              }}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("about");
              }}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("experience");
              }}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("projects");
              }}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Projects
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("contact");
          }}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg"
        >
          Contact Me
        </a>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 animate-fade-in">
          <li>
            <a
              href="#home"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("all");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </Motion.nav>
  );
};

export default Navbar;
