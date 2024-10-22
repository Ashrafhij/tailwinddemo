import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/4.jpeg')] bg-no-repeat bg-cover opacity-90 w-full max-w-full">
      <div className="w-full lg:w-4/5 space-y-5 mt-10" dir="rtl">
        <h1 className="text-5xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold leading-tight text-right">
          בחירת בריאות מחזקת לחיים תוססים - האמין שלך..
        </h1>
        {/* <p className="lg:text-lg md:text-md sm:text-sm text-right">
          לורם איפסום דולור סיט אמט קונסקטטור אדיפיסיצינג אליט. קואם מגנם
          אומניס נאטוס אקוסנטיום קווס. רפרהנדר אינצידונט אקספדיטה
          מולסטיאטה אימפדיט אט סקווי דולורם איסט סיט קולטה, אופטיו וולופטטס
          פגאט ורו קונטרקטור?
        </p> */}

        <Button title="ראה שירותים" />
      </div>
    </div>
  );
};

export default Home;
