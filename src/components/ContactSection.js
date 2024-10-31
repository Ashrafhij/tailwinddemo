import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
        {/* Map Section */}
        <div className="lg:w-1/2 md:w-full bg-gray-300 rounded-lg overflow-hidden shadow-md mb-8 lg:mb-0">
          <iframe
            width="100%"
            height="400px"
            className="rounded-lg"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=32.813847,35.156815&hl=en&z=14&output=embed"
          ></iframe>
        </div>
        
        {/* Contact Information Section */}
        <div className="lg:w-1/2 md:w-full bg-white flex flex-col py-8 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold title-font mb-4 text-gray-900 text-right">צרו קשר עם המרפאה שלנו</h2>

          {/* Address */}
          <div className="mt-6 text-right">
            <div className="flex items-center mb-2" dir='rtl'>
            <h3 className="font-semibold text-gray-600">כתובת:</h3>
              <i className="fas fa-map-marker-alt text-secondColor text-2xl mr-3" />
              
            </div>
            <p className="text-lg">
              Hamoudi Dental Clinic<br />
              ד'אהר עומר אלזידאני, שפרעם
            </p>
          </div>

          {/* Directions */}
          <div className="mt-6 text-right">
            <div className="flex items-center mb-2" dir='rtl'>
            <h3 className="font-semibold text-gray-600">הוראות הגעה:</h3>
              <i className="fas fa-directions text-secondColor text-2xl mr-3" />
              
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=32.813847,35.156815"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondColor hover:underline"
            >
              לחץ כאן כדי לקבל הוראות הגעה
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-6 text-right">
            <div className="flex items-center mb-2" dir='rtl'>
            <h3 className="font-semibold text-gray-600">צור קשר:</h3>
              <i className="fas fa-phone-alt text-secondColor text-2xl mr-3" />
              
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">טלפון:</span> <a href="tel:049868641" className="text-secondColor">049868641</a>
            </p>
            <p className="text-gray-700">
             <a href="mailto:hamoudidc@gmail.com" className="text-secondColor">hamoudidc@gmail.com</a><span className="font-semibold"> :דוא"ל</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 text-right">
            <div className="flex items-center mb-2" dir='rtl'>
            <h3 className="font-semibold text-gray-600">מדיה חברתית:</h3>
              <i className="fab fa-facebook-square text-secondColor text-2xl mr-3" />
              
            </div>
            <a
              href="https://www.facebook.com/share/1M1zbk7Ymb/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondColor hover:underline"
            >
              עמוד הפייסבוק שלנו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
