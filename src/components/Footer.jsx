import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-gray-200 text-center">
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
