import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-white-900 text-slate-900 py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/sneha2180"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-c-shaji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gray-400"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaTwitter className="text-2xl" />
            </a> */}
          </div>

          {/* Copyright Text */}
          <div className="text-slate-400 text-right">
            &copy; {new Date().getFullYear()} Sneha C Shaji. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
