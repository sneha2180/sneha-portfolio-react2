import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Hide the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home'; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust offset for better highlight timing
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-400 shadow-sm text-gray-800 z-100 pb-5 box-border">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <a href="#" className="text-xl font-bold">
            Sneha C Shaji
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex md:items-center space-x-6 list-none">
          {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
            <li key={section} className="relative text-[16px] font-semibold text-gray-900 cursor-pointer">
              <a
                href={`#${section}`}
                className={`block py-2 hover:text-blue-500 ${activeSection === section ? 'text-blue-500' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {/* Blue line under active link */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 ${activeSection === section || 'group-hover:scale-x-100'}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[93px] right-0 bg-gray-100 w-64 h-screen transform transition-transform duration-300 ease-in-out ${
            menuVisible ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-6 px-6 py-4 list-none">
            {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
              <li key={section} className="relative text-[16px] font-semibold text-gray-900 cursor-pointer">
                <a
                  href={`#${section}`}
                  className="block py-2 hover:text-blue-500"
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                {/* Blue line under active link */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 ${activeSection === section || 'group-hover:scale-x-100'}`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
