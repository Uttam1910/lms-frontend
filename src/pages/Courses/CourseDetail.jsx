// src/pages/Courses/CourseDetail.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../../redux/slice/courseSlice';
import { toast } from 'react-hot-toast';

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.course);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
  }, [dispatch, courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    toast.error(error);
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {course && (
        <div>
          <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-3xl font-semibold mb-4">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="text-gray-800 font-bold">Category: {course.category}</div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Lectures</h3>
            {course.lectures.length > 0 ? (
              <ul className="list-disc list-inside">
                {course.lectures.map((lecture, index) => (
                  <li key={index}>
                    <div className="font-semibold">{lecture.title}</div>
                    <p>{lecture.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No lectures available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
  