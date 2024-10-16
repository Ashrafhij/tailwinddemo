import React from 'react';
import ContactSection from './components/ContactSection';
import HeadDoc from './components/headDoc';
import HeroSection from './components/HeroSection';
import DentalAreasSection from './components/DentalAreasSection';
import GallerySection from './components/GallerySection';
import CustomerOpinionSection from './components/CustomerOpinionSection';
import ClinicGallerySection from './components/ClinicGallerySection';

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-600/20 to-blue-200/10"> {/* Apply a very slight gradient */}
      <HeadDoc /> {/* Always render the header */}
      <div id="hero-section" className="py-10">
        <HeroSection />
      </div>
      <div className="py-10">
        <DentalAreasSection />
      </div>
      <div className="py-10">
        <GallerySection />
      </div>
      <div className="py-10">
        <CustomerOpinionSection />
      </div>
      <div className="py-10">
        <ClinicGallerySection />
      </div>
      <div className="py-10">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
