import React, { useState, useRef } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryItems = [
    { src: "https://www.shutterstock.com/shutterstock/photos/2328458421/display_1500/stock-photo-cropped-shot-of-a-young-caucasian-smiling-woman-before-and-after-veneers-installation-teeth-2328458421.jpg", title: "כוכבי ירי", subtitle: "הכותרת המשנית" },
    { src: "https://www.shutterstock.com/shutterstock/photos/2307503479/display_1500/stock-photo-young-woman-smiling-before-and-after-dental-implant-2307503479.jpg", title: "הקטליזטור", subtitle: "הכותרת המשנית" },
    { src: "https://www.shutterstock.com/shutterstock/photos/2489053763/display_1500/stock-photo-dental-implant-treatment-for-missing-teeth-all-on-and-all-on-x-treatment-for-people-with-no-2489053763.jpg", title: "400 הבלואו", subtitle: "הכותרת המשנית" },
    { src: "https://dummyimage.com/602x362", title: "נפטון", subtitle: "הכותרת המשנית" },
    { src: "https://dummyimage.com/605x365", title: "הולדין קולפילד", subtitle: "הכותרת המשנית" },
    { src: "https://dummyimage.com/606x366", title: "אלפר קאמו", subtitle: "הכותרת המשנית" }
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
        handlePrev();
      } else {
        handleNext();
      }
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-gray-600 body-font" dir="rtl">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-right w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">הגלריה שלנו</h1>
          {/* Orange line */}
          <div className="w-full lg:w-1/3 h-1 bg-[#FFA500] mb-4"></div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex overflow-hidden">
            {galleryItems.map((item, index) => (
              <div key={index} className={`flex-shrink-0 transition-transform duration-500 ${index === currentIndex ? "block" : "hidden"} w-full`}>
                <div className="flex relative">
                  <img 
                    alt={item.title} 
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 object-cover cursor-pointer mx-auto transition-transform transform hover:scale-105"
                    src={item.src} 
                    onClick={openModal}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 right-0 flex items-center">
            <span className="cursor-pointer text-gray-800 text-2xl" onClick={handlePrev}>&#10094;</span>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <span className="cursor-pointer text-gray-800 text-2xl" onClick={handleNext}>&#10095;</span>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          {galleryItems.map((_, index) => (
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
            alt="zoomed gallery" 
            className="max-w-full max-h-full cursor-auto" 
            src={galleryItems[currentIndex].src} 
            onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking the image
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
