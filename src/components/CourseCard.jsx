// src/components/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/courses/${course._id}`);
  };

  return (
    <div onClick={handleCardClick} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="text-gray-800 font-bold">Category: {course.category}</div>
      </div>
    </div>
  );
};

export default CourseCard;
