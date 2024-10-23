import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/img/1.jpeg';
import img2 from '../assets/img/2.jpeg';
import img3 from '../assets/img/3.jpeg';
import img4 from '../assets/img/4.jpeg';
import img5 from '../assets/img/5.jpeg';
import img6 from '../assets/img/6.jpeg';
import img7 from '../assets/img/7.jpeg';
import img8 from '../assets/img/8.jpeg';

const ClinicGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for loading images

  const clinicImages = [
    { src: img1, alt: "Clinic Image 1" },
    { src: img2, alt: "Clinic Image 2" },
    { src: img3, alt: "Clinic Image 3" },
    { src: img4, alt: "Clinic Image 4" },
    { src: img5, alt: "Clinic Image 5" },
    { src: img6, alt: "Clinic Image 6" },
    { src: img7, alt: "Clinic Image 7" },
    { src: img8, alt: "Clinic Image 8" }
  ];

  const startX = useRef(0);
  const isSwiping = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clinicImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Load images and set loading state
    const loadImages = () => {
      const imagePromises = clinicImages.map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
  
      Promise.all(imagePromises)
        .then(() => setIsLoading(false))
        .catch(err => console.error("Failed to load images:", err));
    };
  
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on component mount
  

  return (
    <section className="text-black body-font">
      <div className="flex flex-col justify-center lg:px-32 px-5 pt-12 text-right">
        <div>
          <h1 className="text-4xl font-semibold text-right lg:text-right">המרפאה שלנו</h1>
          <p className="mt-2 text-right lg:text-right">
            לורם איפסום דולור סיט, אמט קונסקטורר אדיפיסינג אלית. נטשנש, קווידם.
          </p>
          <div className="mt-2 h-1 w-26 bg-[#ff8c00] mx-auto lg:mx-0"></div>
        </div>

        {/* Loader */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            {/* Tailwind spinner loader */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          // Slider Container
          <div 
            className="relative"
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex overflow-hidden">
              {clinicImages.map((item, index) => (
                <div key={index} className={`flex-shrink-0 transition-transform duration-500 ${index === currentIndex ? "block" : "hidden"} w-full flex justify-center`}>
                  <div className="flex relative">
                    <img 
                      alt={item.alt} 
                      className="w-full sm:w-3/4 md:w-2/3 lg:w-64 h-64 object-cover cursor-pointer mx-auto transition-transform transform hover:scale-105" 
                      src={item.src} 
                      onClick={openModal} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <span className="cursor-pointer text-gray-800 text-2xl" onClick={handlePrev}>&#10094;</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="cursor-pointer text-gray-800 text-2xl" onClick={handleNext}>&#10095;</span>
            </div>
          </div>
        )}

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          {clinicImages.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              style={{ display: 'inline-block' }}
            />
          ))}
        </div>
      </div>

      {/* Modal for Image Zoom */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeModal}>
          <img 
            alt={clinicImages[currentIndex].alt} 
            className="max-w-full max-h-full cursor-auto" 
            src={clinicImages[currentIndex].src} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default ClinicGallerySection;
