import React from "react";

const Modal = ({ showModal, closeModal, children }) => {
  const handleOverlayClick = (e) => {
    // Close modal if the overlay is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        showModal ? "block" : "hidden"
      }`}
      onClick={handleOverlayClick} // Close modal when clicking outside
    >
      <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full max-h-[80vh] overflow-y-auto"> {/* Adjusted height */}
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
