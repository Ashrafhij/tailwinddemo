// src/components/Loader.js
import React from 'react';
import logo from '../assets/img/logo.jpeg'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-backgroundColor relative">
      <div className="loader absolute"></div>
      <img src={logo} alt="Loading Logo" className="w-32 h-32 relative z-10" /> {/* Increased logo size */}
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 2px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 180px; /* Adjusted loader size */
          height: 180px; /* Adjusted loader size */
          animation: spin 1s linear infinite;
          z-index: 0; /* Behind the logo */
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
