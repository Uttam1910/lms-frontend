// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <Link to={`/courses/${course._id}`}>
        <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Link to={`/courses/${course._id}`} className="hover:text-indigo-600">{course.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{course.category}</span>
          <span className="text-sm text-gray-500">By {course.createdBy}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.numberOfLectures} Lectures</span>
          <Link to={`/courses/${course._id}`} className="text-indigo-600 hover:text-indigo-800">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
