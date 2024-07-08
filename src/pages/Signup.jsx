import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../redux/slice/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(registerUser(data));
      const { error } = resultAction.payload;
      if (error) {
        toast.error(error.message || 'Registration failed. Please try again.');
      } else {
        // Check if registration was successful
        const { message } = resultAction.payload;
        if (message === 'User registered successfully') {
          toast.success(message);
          navigate('/');
        } else {
          // Handle other messages (e.g., user already exists, email matched)
          toast.error(message || 'Registration failed. Please try again.');
        }
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register('username', { required: true, minLength: 3 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Username"
            />
            {errors.username && errors.username.type === 'required' && (
              <p className="text-red-500">Username is required.</p>
            )}
            {errors.username && errors.username.type === 'minLength' && (
              <p className="text-red-500">Username must be at least 3 characters.</p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            {errors.email && errors.email.type === 'required' && (
              <p className="text-red-500">Email is required.</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="text-red-500">Invalid email format.</p>
            )}
          </div>
          <div>
            <input
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
            {errors.password && errors.password.type === 'required' && (
              <p className="text-red-500">Password is required.</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className="text-red-500">Password must be at least 6 characters.</p>
            )}
          </div>
          <div>
            <select
              {...register('role')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
