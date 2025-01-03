import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on link click
    }
  };

  return (
    <nav className="fixed w-full z-30 bg-white-900 text-white shadow">
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-slate-800 font-sans text-base font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
            Sneha C Shaji
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          {/* Links for Larger Screens */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="text-slate-800 font-sans text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="text-slate-800 font-sans text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "#skills")}
              className="text-slate-800 font-sans text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Skills
            </a>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="text-slate-800 font-sans text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="text-slate-800 font-sans text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
            </a>
          </div>
        </div>
        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="block text-gray-600 hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="block text-gray-600 hover:text-gray-400"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "#skills")}
              className="block text-gray-600 hover:text-gray-400"
            >
              Skills
            </a>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="block text-gray-600 hover:text-gray-400"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block text-gray-600 hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
