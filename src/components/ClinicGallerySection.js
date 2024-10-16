import React, { useState, useRef } from 'react';

const ClinicGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clinicImages = [
    { src: "https://dummyimage.com/800x600/000/fff&text=Clinic+Image+1", alt: "Clinic Image 1" },
    { src: "https://dummyimage.com/800x600/111/fff&text=Clinic+Image+2", alt: "Clinic Image 2" },
    { src: "https://dummyimage.com/800x600/222/fff&text=Clinic+Image+3", alt: "Clinic Image 3" },
    { src: "https://dummyimage.com/800x600/333/fff&text=Clinic+Image+4", alt: "Clinic Image 4" },
    { src: "https://dummyimage.com/800x600/444/fff&text=Clinic+Image+5", alt: "Clinic Image 5" }
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

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Dental Clinic</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a look at our clinic's environment, designed for your comfort and care.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex overflow-hidden">
            {clinicImages.map((item, index) => (
              <div key={index} className={`flex-shrink-0 transition-transform duration-500 ${index === currentIndex ? "block" : "hidden"} w-full`}>
                <div className="flex relative">
                  <img 
                    alt={item.alt} 
                    className="w-full h-64 object-cover cursor-pointer" // Added cursor pointer for clickability
                    src={item.src} 
                    onClick={openModal} // Open modal on click
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
            onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking the image
          />
        </div>
      )}
    </section>
  );
};

export default ClinicGallerySection;