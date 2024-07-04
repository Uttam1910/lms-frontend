import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <BsGithub size={24} />
          </a>
        </div>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
