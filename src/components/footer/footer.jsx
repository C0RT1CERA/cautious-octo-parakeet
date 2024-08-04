import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blk1 text-y2 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">&copy; 2024 RevMeSync. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Trademarks and brands are the property of their respective owners.</p>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-y3 hover:text-y22">
              <FaFacebookF className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-y3 hover:text-y22">
              <FaTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-y3 hover:text-y22">
              <FaLinkedinIn className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
