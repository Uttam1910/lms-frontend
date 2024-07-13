import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../redux/slice/authSlice';
import { toast } from 'react-hot-toast';
import { FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || 'An error occurred');
    }
  }, [error]);

  const handleEditProfile = () => {
    navigate('/edit-profile'); // This route should be defined in your routing configuration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : user ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src={user.avatar.secureUrl}
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Name:</p>
              <p className="text-gray-900">{user.username}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email:</p>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Role:</p>
              <p className="text-gray-900">{user.role}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Active:</p>
              <p className="text-gray-900">{user.isActive ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Created At:</p>
              <p className="text-gray-900">{new Date(user.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Updated At:</p>
              <p className="text-gray-900">{new Date(user.updatedAt).toLocaleString()}</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleEditProfile}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <FaUserEdit className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">Error loading profile</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
