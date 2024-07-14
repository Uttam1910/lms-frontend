import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAvatar } from '../../redux/slice/authSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateAvatar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarFile, setAvatarFile] = useState(null);

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleAvatarUpload = () => {
    if (avatarFile) {
      const formData = new FormData();
      formData.append('avatar', avatarFile);

      dispatch(updateUserAvatar(formData))
        .unwrap()
        .then(() => {
          toast.success('Avatar updated successfully');
          navigate('/profile');
        })
        .catch((error) => {
          toast.error(error.message || 'Avatar update failed');
        });
    } else {
      toast.error('Please select a file to upload');
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Update Avatar</h1>
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="mb-4"
        />
        <button
          onClick={handleAvatarUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Upload Avatar
        </button>
      </div>
    </div>
  );
};

export default UpdateAvatar;
