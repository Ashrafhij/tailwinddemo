import React from "react";
import { FaTooth, FaTeeth, FaTeethOpen } from "react-icons/fa"; // Dental icons
import ServicesCard from "../layouts/ServicesCard";

const DentalAreasSection = () => {
  const icon1 = <FaTooth size={35} className="text-black" />;
  const icon2 = <FaTeeth size={35} className="text-black" />;
  const icon3 = <FaTeethOpen size={35} className="text-black" />;

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-12 text-right" dir="rtl">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-8 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-right lg:text-right">
            השירותים הדנטליים שלנו
          </h1>
          <p className="mt-2 text-right lg:text-right">
            אנו מציעים מגוון רחב של טיפולים דנטליים ללקוחותינו.
          </p>
          <div className="mt-2 h-1 w-26 bg-secondColor"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="טיפולי שיניים" />
        <ServicesCard icon={icon2} title="שיקום שיניים" />
        <ServicesCard icon={icon3} title="עקירות שיניים" />
      </div>
    </div>
  );
};

export default DentalAreasSection;
