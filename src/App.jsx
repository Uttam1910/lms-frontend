import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseList from "./pages/Courses/CourseList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/Courses/CourseDetail";
import AccessDenied from "./pages/AccessDenied";
import RequireAuth from './components/auth/RequireAuth';
import CreateCourse from './pages/Courses/CreateCourse'; 
import Profile from './pages/Profile/Profile';
import UpdateAvatar from './pages/Profile/UpdateAvatar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="courses/:courseId" element={<CourseDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route
          path="/create-course"
          element={
            <RequireAuth roles={["admin"]}>
              <CreateCourse />
            </RequireAuth>
          }
        />
        <Route path="profile" element={<RequireAuth roles={['student', 'admin']}><Profile /></RequireAuth>} />
        <Route path="/update-avatar" element={<RequireAuth roles={['student', 'admin']}><UpdateAvatar /></RequireAuth>} />
      </Route>
      <Route path="#" element={<AccessDenied />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
