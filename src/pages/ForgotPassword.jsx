import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgotpassword', data);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      toast.error(error.response.data.message || 'Failed to send reset email');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">Forgot Password</h1>
        <p className="text-center text-gray-600">Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
