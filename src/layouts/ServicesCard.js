import React, { useState } from "react";

const ServicesCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border p-5 rounded-lg shadow-lg hover:border-secondColor cursor-pointer"
      onClick={toggleDescription}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={`${title} Icon`} className="w-8 h-8" /> {/* Use the icon as an img */}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {isOpen && (
          <div className="mt-3 text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
