import React, { useState } from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userNumber: "",
    userEmail: "" // Email is optional
  });

  const [errors, setErrors] = useState({
    userFirstName: "",
    userNumber: ""
  });

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { userFirstName: "", userNumber: "" };

    // Name validation
    if (!formData.userFirstName.trim()) {
      newErrors.userFirstName = "שם לא יכול להיות ריק";
      valid = false;
    } else if (!/^[a-zA-Zא-ת]+$/.test(formData.userFirstName)) {
      newErrors.userFirstName = "שם חייב להכיל אותיות בלבד";
      valid = false;
    }

    // Phone number validation
    if (!formData.userNumber.trim()) {
      newErrors.userNumber = "מספר טלפון לא יכול להיות ריק";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.userNumber)) {
      newErrors.userNumber = "מספר טלפון חייב להיות בן 10 ספרות";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return; // Prevent submission if the form is invalid
    }

    const { userFirstName, userNumber, userEmail } = formData;
    const message = `שלום, אני ${userFirstName}. רציתי לקבל פרטים נוספים. ניתן לחזור אליי בטלפון ${userNumber}.${userEmail ? ` כתובת האימייל שלי היא ${userEmail}.` : ""}`;
    const whatsappUrl = `https://wa.me/+972526265341?text=${encodeURIComponent(message)}`; // Replace with owner's WhatsApp number

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl shadow-lg" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-semibold text-center text-black">
            השאר פרטים ונחזור אליך בהמשך
          </h1>
          <div className="flex flex-col" dir="rtl">
            <input
              className={`py-2 px-2 bg-backgroundColor text-white placeholder-gray-300 rounded-lg focus:outline-none focus:text-white focus:ring-2 focus:ring-[blue] ${errors.userFirstName ? "border-red-500" : ""}`}
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="שם"
              onChange={handleChange}
              required // Make name required
            />
            {errors.userFirstName && <p className="text-red-500 text-sm">{errors.userFirstName}</p>}
          </div>
          <div className="flex flex-col" dir="rtl">
            <input
              className={`py-2 px-2 bg-backgroundColor text-white placeholder-gray-300 rounded-lg focus:outline-none focus:text-white focus:ring-2 focus:ring-[blue] ${errors.userNumber ? "border-red-500" : ""}`}
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="מספר טלפון"
              onChange={handleChange}
              required // Make phone number required
            />
            {errors.userNumber && <p className="text-red-500 text-sm">{errors.userNumber}</p>}
          </div>
          <div className="flex flex-col" dir="rtl">
            <input
              className="py-2 px-2 bg-backgroundColor text-white placeholder-gray-300 rounded-lg focus:outline-none focus:text-white focus:ring-2 focus:ring-[blue]"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="אִימֵיְיל (לא חובה)"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <Button title="שליחה" className="w-full" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
