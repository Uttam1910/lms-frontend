// // src/pages/Courses/CourseDetail.jsx
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCourseById } from '../../redux/slice/courseSlice';

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const dispatch = useDispatch();
//   const course = useSelector((state) => state.courses.currentCourse);
//   const loading = useSelector((state) => state.courses.loading);
//   const error = useSelector((state) => state.courses.error);

//   useEffect(() => {
//     dispatch(fetchCourseById(courseId));
//   }, [dispatch, courseId]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {course && (
//         <div>
//           <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-64 object-cover rounded-md mb-4" />
//           <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
//           <p className="text-gray-700 mb-4">{course.description}</p>
//           {/* Additional course details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;


// src/pages/Courses/CourseDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseById } from '../../redux/slice/courseSlice';

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.currentCourse);
  const loading = useSelector((state) => state.courses.loading);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
  }, [dispatch, courseId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {course && (
        <div>
          <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-64 object-cover rounded-md mb-4" />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-4">{course.description}</p>
          {/* Additional course details here */}
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
