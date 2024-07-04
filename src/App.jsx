import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
import Footer from './components/Footer';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    // <div className="flex flex-col min-h-screen">
    //   <div className="flex flex-col items-center flex-grow">
    //     <div className="flex space-x-4 mt-8">
    //       <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    //         <img src={viteLogo} className="h-16" alt="Vite logo" />
    //       </a>
    //       <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //         <img src={reactLogo} className="h-16" alt="React logo" />
    //       </a>
    //     </div>
    //     <h1 className="text-4xl font-bold mt-8">Vite + React</h1>
    //     <div className="card mt-6 p-4 bg-white shadow-md rounded w-full max-w-md">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </div>
    //   </div>
      <Footer />
    // </div>
  );
}

export default App;
