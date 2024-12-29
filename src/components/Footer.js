import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-8">
      <p className="text-2xl font-semibold mb-4">Sneha C Shaji</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-blue-500 transition-colors"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-pink-500 transition-colors"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-blue-400 transition-colors"
        >
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <p className="text-sm">
        &#169; {new Date().getFullYear()} Sneha C Shaji. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
