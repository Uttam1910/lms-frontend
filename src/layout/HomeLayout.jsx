// import React, { useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/slice/authSlice';
// import Footer from '../components/Footer';

// const HomeLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const role = useSelector((state) => state.auth.role);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
//         <button className="text-2xl" onClick={toggleSidebar}>
//           <FaBars />
//         </button>
//         <h1 className="text-xl font-bold">My Application</h1>
//       </header>

//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-full z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
//         <div className="flex justify-between items-center p-4 shadow-md">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button className="text-2xl" onClick={toggleSidebar}>
//             <FaTimes />
//           </button>
//         </div>
//         <nav className="flex flex-col p-4 space-y-4">
//           <NavLink to="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Home</NavLink>
//           <NavLink to="/about" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>About</NavLink>
//           <NavLink to="/contact" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Contact</NavLink>
//           <NavLink to="/courses" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Courses</NavLink>
//           {!isLoggedIn && (
//             <>
//               <NavLink to="/login" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Login</NavLink>
//               <NavLink to="/signup" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Sign Up</NavLink>
//             </>
//           )}
//           {isLoggedIn && (
//             <button onClick={handleLogout} className="hover:bg-gray-700 p-2 rounded text-left">Logout</button>
//           )}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-gray-100">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomeLayout;


import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, logout } from '../redux/slice/authSlice'; // Ensure you import the correct thunk
import Footer from '../components/Footer';

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 p-4 flex justify-between items-center shadow-md">
        <button className="text-2xl" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h1 className="text-xl font-bold">My Application</h1>
      </header>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-full z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
        <div className="flex justify-between items-center p-4 shadow-md">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-2xl" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink to="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Home</NavLink>
          <NavLink to="/about" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>About</NavLink>
          <NavLink to="/contact" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Contact</NavLink>
          <NavLink to="/courses" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Courses</NavLink>
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Login</NavLink>
              <NavLink to="/signup" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Sign Up</NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink to="/profile" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Profile</NavLink>
              <button onClick={handleLogout} className="hover:bg-gray-700 p-2 rounded text-left">Logout</button>
            </>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
