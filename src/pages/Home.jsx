import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    const fetchPopularCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        console.log('API Response:', response.data); // Debug log
        if (response.data && Array.isArray(response.data)) {
          setPopularCourses(response.data.slice(0, 3));
        } else {
          console.warn('Unexpected API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching popular courses:', error.message);
        console.error('Error details:', error.response);
        // Fallback to mock data for testing
        const mockCourses = [
          {
            _id: '1',
            title: 'Course 1',
            description: 'Description for Course 1',
            thumbnail: 'https://via.placeholder.com/150',
          },
          {
            _id: '2',
            title: 'Course 2',
            description: 'Description for Course 2',
            thumbnail: 'https://via.placeholder.com/150',
          },
          {
            _id: '3',
            title: 'Course 3',
            description: 'Description for Course 3',
            thumbnail: 'https://via.placeholder.com/150',
          },
        ];
        setPopularCourses(mockCourses);
      }
    };

    fetchPopularCourses();
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="space-y-16 text-white">
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Learning Management System</h1>
          <p className="text-xl mb-8">Your gateway to world-class education and training.</p>
          {!isAuthenticated && (
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>Get Started</button>
          )}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
            <p>Learn from industry experts with years of experience.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Interactive Courses</h3>
            <p>Engage in interactive and practical courses designed for real-world application.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Certification</h3>
            <p>Receive certificates upon completion of courses to boost your career.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.length > 0 ? (
              popularCourses.map(course => (
                <div
                  key={course._id}
                  className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
                  onClick={() => navigate(`/course/${course._id}`)}
                >
                  <img
                    src={course.thumbnail || 'https://via.placeholder.com/150'}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-4 text-white">{course.title}</h3>
                  <p className="text-white">{course.description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No courses available.</p>
            )}
          </div>
          <div className="text-center mt-8">
            <button className="btn btn-secondary" onClick={() => navigate('/courses')}>
              View All Courses
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">"This platform has transformed my learning experience. Highly recommend!"</p>
            <p className="text-right font-bold">- Student A</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">"The courses are well-structured and the instructors are very knowledgeable."</p>
            <p className="text-right font-bold">- Student B</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4">"I love the interactive nature of the courses. It keeps me engaged."</p>
            <p className="text-right font-bold">- Student C</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8">Join thousands of students and begin your educational journey with us.</p>
          {!isAuthenticated ? (
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>Sign Up Now</button>
          ) : (
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
