import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, logout } from '../redux/slice/authSlice'; // Ensure you import the correct actions
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(logout());
    navigate('/');
  };

  return (
    <footer className="bg-gray-800 text-white py-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Your Company</h3>
          <p className="mb-2">1234 Street Name</p>
          <p className="mb-2">City, State, 12345</p>
          <p className="mb-2">Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
            <li className="mb-2">
              <a href="/courses" className="hover:text-gray-400">Courses</a>
            </li>
            {!isLoggedIn && (
              <>
                <li className="mb-2">
                  <a href="/login" className="hover:text-gray-400">Login</a>
                </li>
                <li className="mb-2">
                  <a href="/signup" className="hover:text-gray-400">Sign Up</a>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="mb-2">
                <button onClick={handleLogout} className="hover:text-gray-400">Logout</button>
              </li>
            )}
          </ul>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <BsGithub size={24} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
