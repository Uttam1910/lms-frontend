// // src/components/CourseCard.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CourseCard = ({ course }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/courses/${course.id}`);
//   };

//   return (
//     <div 
//       className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
//       onClick={handleCardClick}
//     >
//       <img src={course.thumbnail.secure_url} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
//       <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//       <p className="text-gray-600">{course.description}</p>
//     </div>
//   );
// };

// export default CourseCard;
