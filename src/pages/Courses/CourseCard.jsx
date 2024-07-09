// src/pages/Courses/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={course.thumbnail?.secure_url} alt={course.title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500">Category: {course.category}</p>
        <p className="text-sm text-gray-500">Instructor: {course.createdBy}</p>
      </div>
    </div>
  );
};

export default CourseCard;
