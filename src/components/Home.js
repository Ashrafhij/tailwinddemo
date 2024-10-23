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
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div
          className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white opacity-90 w-full max-w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="w-full lg:w-4/5 space-y-5 mt-[-2] lg:mt-[-4] flex flex-col items-start"
            dir="rtl"
          >
            <h1 className="text-5xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold leading-tight text-right">
              בחירת בריאות מחזקת לחיים תוססים - האמין שלך..
            </h1>

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
