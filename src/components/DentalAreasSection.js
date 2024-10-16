import React from 'react';
import { FaTooth, FaTeeth, FaTeethOpen, FaSmile, FaHeartbeat } from 'react-icons/fa';

function DentalAreasSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">תחומי טיפול דנטליים</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            מגוון רחב של טיפולים דנטליים ללקוחותינו, מתיקונים קלים ועד שיקום מלא.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Dental Areas */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <a 
              href="/implants" 
              className="border border-gray-200 p-6 rounded-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaTooth className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">שתלים דנטליים</h2>
              <p className="leading-relaxed text-base">טיפול בשתלים לשיקום השיניים.</p>
            </a>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <a 
              href="/braces" 
              className="border border-gray-200 p-6 rounded-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaTeeth className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">יישור שיניים</h2>
              <p className="leading-relaxed text-base">שירותי יישור שיניים וטיפולי אורתודנטיה.</p>
            </a>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <a 
              href="/extractions" 
              className="border border-gray-200 p-6 rounded-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaTeethOpen className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">עקירות שיניים</h2>
              <p className="leading-relaxed text-base">טיפולי עקירה מקצועיים עם דגש על נוחות המטופל.</p>
            </a>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <a 
              href="/whitening" 
              className="border border-gray-200 p-6 rounded-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaSmile className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">הלבנת שיניים</h2>
              <p className="leading-relaxed text-base">טיפולים לשיפור מראה השיניים והלבנתן.</p>
            </a>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <a 
              href="/checkups" 
              className="border border-gray-200 p-6 rounded-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaHeartbeat className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">בדיקות שגרתיות</h2>
              <p className="leading-relaxed text-base">בדיקות שגרתיות למעקב אחר בריאות הפה והשיניים.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DentalAreasSection;
