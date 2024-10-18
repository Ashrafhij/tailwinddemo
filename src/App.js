import ContactSection from './components/ContactSection';
import DentalAreasSection from './components/DentalAreasSection';
import GallerySection from './components/GallerySection';
import CustomerOpinionSection from './components/CustomerOpinionSection';
import ClinicGallerySection from './components/ClinicGallerySection';
import { FiMail, FiPhone } from 'react-icons/fi'; // Importing icons from react-icons
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <div id="hero-section">
        <Home />
      </div>
      <div className="py-10 bg-white shadow-md rounded-lg mb-6">
        <DentalAreasSection />
      </div>
      <div className="py-10 bg-white shadow-md rounded-lg mb-6">
        <GallerySection />
      </div>
      <div className="py-10 bg-white shadow-md rounded-lg mb-6">
        <CustomerOpinionSection />
      </div>
      <div className="py-10 bg-white shadow-md rounded-lg mb-6">
        <ClinicGallerySection />
      </div>
      <div className="py-10 bg-white shadow-md rounded-lg mb-6">
        <ContactSection />
      </div>

      {/* Divided Clickable Areas for Mobile Users */}
      <div className="fixed inset-x-0 bottom-0 h-12 bg-white shadow-lg sm:hidden flex">
        <a
          href="/contact"
          className="flex-1 bg-indigo-500 text-white flex items-center justify-center relative hover:bg-indigo-600"
        >
          <FiMail className="w-5 h-5 absolute left-2 sm:left-1" />
          <span className="text-sm pl-12 sm:pl-8">השאר פרטים</span>
        </a>
        <a
          href="tel:+1234567890"
          className="flex-1 bg-[#ff7f50] text-white flex items-center justify-center relative hover:bg-[#ff5f30]" // Replace with your orange color
        >
          <FiPhone className="w-5 h-5 absolute left-2 sm:left-1" />
          <span className="text-sm pl-12 sm:pl-8">חייג עכשיו</span>
        </a>
      </div>



      </main>
    </div>
  );
}

export default App;
