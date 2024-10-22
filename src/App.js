import React, { useState } from 'react'; // Import useState for managing modal
import ContactSection from './components/ContactSection';
import DentalAreasSection from './components/DentalAreasSection';
import GallerySection from './components/GallerySection';
import CustomerOpinionSection from './components/CustomerOpinionSection';
import ClinicGallerySection from './components/ClinicGallerySection';
import { FiMail, FiPhone } from 'react-icons/fi'; // Importing icons from react-icons
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact'; // Import the Contact modal
import Footer from './components/Footer';
import Doctors from './components/Doctors';

function App() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="Doctors" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <Doctors />
        </div>
        <div id="DentalAreasSection" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <DentalAreasSection />
        </div>
        <div id="GallerySection" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <GallerySection />
        </div>
        <div id="CustomerOpinionSection" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <CustomerOpinionSection />
        </div>
        <div id="ClinicGallerySection" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <ClinicGallerySection />
        </div>
        <div id="ContactSection" className="py-10 bg-white shadow-md rounded-lg mb-6">
          <ContactSection />
        </div>

        {/* Divided Clickable Areas for Mobile Users */}
        <div className="fixed inset-x-0 bottom-0 h-12 bg-white shadow-lg sm:hidden flex">
          <button
            onClick={openModal} // Opens the modal when clicked
            className="flex-1 bg-backgroundColor text-black flex items-center justify-center relative hover:bg-[#FFA500]"
          >
            <FiMail className="w-5 h-5 absolute left-2 sm:left-1" />
            <span className="text-sm pl-12 sm:pl-8">השאר פרטים</span>
          </button>
          <a
            href="tel:+972526265341"
            className="flex-1 bg-[#ff7f50] text-white flex items-center justify-center relative hover:bg-[#ff5f30]" // Replace with your orange color
          >
            <FiPhone className="w-5 h-5 absolute left-2 sm:left-1" />
            <span className="text-sm pl-12 sm:pl-8">חייג עכשיו</span>
          </a>
        </div>

        {/* Modal Implementation */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80 md:w-96 relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600">
                X {/* Close Button */}
              </button>
              <Contact closeForm={closeModal} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
