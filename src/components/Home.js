import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";
import backgroundImage from '../assets/img/4.jpeg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full relative">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          {/* Tailwind spinner loader */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div
          className="min-h-screen flex flex-col justify-center text-black w-full max-w-full lg:px-32 px-5 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          
          <div className="absolute inset-0 bg-backgroundColor opacity-50"></div>

          {/* Content */}
          <div
            className="relative w-full lg:w-4/5 space-y-5 lg:mt-[-4] mt-[-2] flex flex-col items-start"
            dir="rtl"
          >
            <h1 className="text-5xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold leading-tight text-right">
            האם ידעת אילו השפעות יש לחיוך יפה על האנשים מסביבך?
            </h1>
            <p>החיוך המושלם שאנחנו יכולים לתת לך יכול לעזור לך לשפר את התקשורת עם האנשים מסביבך , תמיד תזכור בטחון עצמי הוא הדרך להצלחה, ובטח שחיוך מושלם הוא חלק חשוב מאוד להיות עם בטחון עצמי.</p>

            <a href="#DentalAreasSection">
              <Button title="ראה שירותים" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
