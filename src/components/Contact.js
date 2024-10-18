import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm(); // Close the modal when clicking outside
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick} // Add click handler to overlay
    >
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-backgroundColor">
            השאר פרטים ונחזור אליך בהמשך
          </h1>
          <div className="flex flex-col">
            <input
              className="py-2 px-2 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36ae9a]"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="שם"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-2 px-2 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36ae9a]"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="מספר טלפון"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-2 px-2 bg-[#d5f2ec] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36ae9a]"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="אִימֵיְיל (לא חובה)"
            />
          </div>
          <div className="flex justify-center">
            <Button title="שליחה" className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
