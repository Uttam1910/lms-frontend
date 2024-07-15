import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Your Company</h3>
            <p className="text-sm mb-2">1234 Street Name</p>
            <p className="text-sm mb-2">City, State, 12345</p>
            <p className="text-sm mb-2">Email: info@yourcompany.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-sm hover:text-gray-400 transition-colors duration-200">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-sm hover:text-gray-400 transition-colors duration-200">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-sm hover:text-gray-400 transition-colors duration-200">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/courses" className="text-sm hover:text-gray-400 transition-colors duration-200">Courses</a>
              </li>
              <li className="mb-2">
                <a href="/login" className="text-sm hover:text-gray-400 transition-colors duration-200">Login</a>
              </li>
              <li className="mb-2">
                <a href="/signup" className="text-sm hover:text-gray-400 transition-colors duration-200">Sign Up</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-6 mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook size={24} className="text-white hover:text-gray-400 transition-colors duration-200" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <BsInstagram size={24} className="text-white hover:text-gray-400 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={24} className="text-white hover:text-gray-400 transition-colors duration-200" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub size={24} className="text-white hover:text-gray-400 transition-colors duration-200" />
              </a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
