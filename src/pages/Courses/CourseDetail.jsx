import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourseById } from '../../redux/slice/courseSlice';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { course, loading, error } = useSelector((state) => state.courses);
  const { user, role } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
  }, [dispatch, courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const isEnrolled = course && course.enrolledStudents.includes(user?.id);

  const handleButtonClick = () => {
    if (!user) {
      toast.error('You need to sign up to view lectures');
      navigate('/signup');
    } else if (role === 'admin' || isEnrolled) {
      // Navigate to lectures
      navigate(`/courses/${course._id}/lectures`);
    } else {
      // Enroll or subscribe logic
      toast.info('Please subscribe or enroll to access lectures');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {course && (
        <div>
          <img
            src={course.thumbnail.secure_url}
            alt={course.title}
            className="w-full h-96 object-cover mb-6 rounded-lg shadow-lg"
          />
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="text-gray-800 font-bold mb-4">Category: <span className="text-indigo-600">{course.category}</span></div>
            <div className="flex space-x-4">
              <button
                onClick={handleButtonClick}
                className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {user ? (
                  <>
                    {role === 'admin' || isEnrolled ? (
                      <>
                        <BsFillPlayFill className="mr-2" />
                        Watch Lecture
                      </>
                    ) : (
                      <>
                        <FaUserGraduate className="mr-2" />
                        Subscribe or Enroll
                      </>
                    )}
                  </>
                ) : (
                  'Sign up to view lectures'
                )}
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Lectures</h3>
            {user && (role === 'admin' || isEnrolled) && course.lectures.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {course.lectures.map((lecture, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                    <div className="font-semibold text-xl">{lecture.title}</div>
                    <p className="text-gray-700">{lecture.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No lectures available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
