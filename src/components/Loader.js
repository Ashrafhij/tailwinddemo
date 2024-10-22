// src/components/Loader.js
import React from 'react';
import logo from '../assets/img/logo.jpeg'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-backgroundColor">
      <img src={logo} alt="Loading Logo" className="w-16 h-16 mb-4" />
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px; /* Size of the loader */
          height: 40px; /* Size of the loader */
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
