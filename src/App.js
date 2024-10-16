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
    <div>
      <HeadDoc /> {/* Always render the header */}
      <div id="hero-section">
        <HeroSection />
      </div>
      <div>
        <DentalAreasSection />
      </div>
      <div>
        <GallerySection />
      </div>
      <div>
        <CustomerOpinionSection />
      </div>
      <div>
        <ClinicGallerySection />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
