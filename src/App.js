import React, { useState, useEffect } from 'react';
import ContactSection from './components/ContactSection';
import HeadDoc from './components/headDoc';
import HeroSection from './components/HeroSection';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { top } = heroSection.getBoundingClientRect();
        // Set the header visibility based on the hero section position
        if (top < 0) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeaderVisible && <HeadDoc />}
      <div id="hero-section">
        <HeroSection />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
