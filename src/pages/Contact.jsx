// src/pages/Contact.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                {...register('name', { required: true })}
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register('email', { required: true })}
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                {...register('message', { required: true })}
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/3 bg-white p-6 shadow-md rounded-lg mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">If you have any questions, feel free to reach out to us using the form or through the contact information below:</p>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Address:</h3>
            <p className="text-gray-600">1234 Street Name, City, State, 56789</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Phone:</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Email:</h3>
            <p className="text-gray-600">contact@example.com</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
