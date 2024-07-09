// src/pages/Courses/CourseList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../redux/slice/courseSlice';
import CourseCard from '../../components/CourseCard.jsx';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Courses</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
