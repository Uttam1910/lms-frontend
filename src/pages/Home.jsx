import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogin = () => {
    // Simulate login
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    navigate('/dashboard'); // Navigate to a dashboard or another authenticated page
  };

  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/'); // Navigate to home or another public page
  };

  return (
    <div className="space-y-16 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Learning Management System</h1>
          <p className="text-xl mb-8">Your gateway to world-class education and training.</p>
          {!isAuthenticated && (
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>Get Started</button>
          )}
        </div>
      </section>

      {/* Features Section */}
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

      {/* Popular Courses Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Course Title 1</h3>
              <p>Short description of the course.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Course Title 2</h3>
              <p>Short description of the course.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Course Title 3</h3>
              <p>Short description of the course.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Call to Action Section */}
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
