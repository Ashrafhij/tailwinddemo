import React, { useState, useRef } from 'react';

const ClinicGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clinicImages = [
    { src: "https://img.freepik.com/free-photo/male-dentist-looking-teeth-x-ray-computer-dentist-office_613910-15183.jpg?t=st=1729351654~exp=1729355254~hmac=677dec3e7a50e88e99d0a1fba04fd3d7a7c03e6b23b354bfa707e9c4adcae662&w=996", alt: "Clinic Image 1" },
    { src: "https://img.freepik.com/free-photo/happy-confident-dentist-clinic_23-2147879211.jpg?t=st=1729351704~exp=1729355304~hmac=4892a2042720aea0da56120c9397581f2ccaecba3d613dc1984bd267b81cb47c&w=360", alt: "Clinic Image 2" },
    { src: "https://img.freepik.com/free-photo/full-equiped-medical-cabinet_1303-23918.jpg?t=st=1729351726~exp=1729355326~hmac=38fe8c856768d5852ae8e532ce5301189c65a052bfea64344b84222cfc424caf&w=996", alt: "Clinic Image 3" },
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
        <div className="flex flex-col text-right w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">המרפאה שלנו</h1>
          <div className="h-1 w-1/4 bg-orange-500 ml-auto" />
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
                    className="max-w-full max-h-full cursor-auto mx-auto" // Added cursor pointer for clickability
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
