import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseList from './pages/Courses/CourseList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

