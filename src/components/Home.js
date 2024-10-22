import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/4.jpeg')] bg-no-repeat bg-center bg-cover opacity-90 w-full max-w-full">
      <div className="w-full lg:w-4/5 space-y-5 mt-[-2] lg:mt-[-4] flex flex-col items-start" dir="rtl">
        <h1 className="text-5xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold leading-tight text-right">
          בחירת בריאות מחזקת לחיים תוססים - האמין שלך..
        </h1>

        <a href="#DentalAreasSection">
          <Button title="ראה שירותים" />
        </a>
      </div>
    </div>
  );
};

export default Home;
