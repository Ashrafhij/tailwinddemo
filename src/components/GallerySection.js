import React, { useState, useRef } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryItems = [
    { src: "https://www.shutterstock.com/shutterstock/photos/2328458421/display_1500/stock-photo-cropped-shot-of-a-young-caucasian-smiling-woman-before-and-after-veneers-installation-teeth-2328458421.jpg", title: "Shooting Stars", subtitle: "THE SUBTITLE" },
    { src: "https://www.shutterstock.com/shutterstock/photos/2307503479/display_1500/stock-photo-young-woman-smiling-before-and-after-dental-implant-2307503479.jpg", title: "The Catalyzer", subtitle: "THE SUBTITLE" },
    { src: "https://www.shutterstock.com/shutterstock/photos/2489053763/display_1500/stock-photo-dental-implant-treatment-for-missing-teeth-all-on-and-all-on-x-treatment-for-people-with-no-2489053763.jpg", title: "The 400 Blows", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/602x362", title: "Neptune", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/605x365", title: "Holden Caulfield", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/606x366", title: "Alper Kamu", subtitle: "THE SUBTITLE" }
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
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
            {galleryItems.map((item, index) => (
              <div key={index} className={`flex-shrink-0 transition-transform duration-500 ${index === currentIndex ? "block" : "hidden"} w-full`}>
                <div className="flex relative">
                  <img 
                    alt="gallery" 
                    className="w-full h-64 object-cover" // Fixed height and object-fit
                    src={item.src} 
                    style={{ imageRendering: 'crisp-edges' }} // Better clarity
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
          {galleryItems.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              style={{ display: 'inline-block' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
