import React from 'react';

function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=32.8059,35.1775&hl=en&z=14&output=embed"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">כתובת</h2>
              <p className="mt-1">טאטו בוהו בפוטו, פורטלנד, הודי נויטרה, מכונת כתיבה</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">דוא"ל</h2>
              <a href="mailto:hamoudidc@gmail.com" className="text-secondColor leading-relaxed">hamoudidc@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">טלפון</h2>
              <a href="tel:049868641" className="text-secondColor leading-relaxed">049868641</a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-right"> {/* Align entire section to the right */}
          <h2 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">משוב</h2>
          <div className="h-1 w-1/4 bg-secondColor mt-0 ml-auto" />
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-10 text-sm text-gray-600">שם</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-blue-300 focus:border-secondColor focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">דוא"ל</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-blue-300 focus:border-secondColor focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">הודעה</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-blue-300 focus:border-secondColor focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-secondColor border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            כפתור
          </button>
          <p className="text-xs text-gray-500 mt-3">בלוג צ'יצ'רון, הלברשיר, נורמקור, איסלנד, טוסלד, ברוק, ויראלי, ארטיזן.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
