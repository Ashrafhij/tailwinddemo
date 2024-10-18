import React from "react";

const Button = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
