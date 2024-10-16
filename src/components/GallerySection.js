import React, { useState, useRef } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryItems = [
    { src: "https://www.shutterstock.com/shutterstock/photos/2328458421/display_1500/stock-photo-cropped-shot-of-a-young-caucasian-smiling-woman-before-and-after-veneers-installation-teeth-2328458421.jpg", title: "Shooting Stars", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/601x361", title: "The Catalyzer", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/603x363", title: "The 400 Blows", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/602x362", title: "Neptune", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/605x365", title: "Holden Caulfield", subtitle: "THE SUBTITLE" },
    { src: "https://dummyimage.com/606x366", title: "Alper Kamu", subtitle: "THE SUBTITLE" }
  ];

  const startX = useRef(0); // To store the starting position of the touch
  const isSwiping = useRef(false); // To track if the user is currently swiping

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX; // Get the initial touch position
    isSwiping.current = true; // Set swiping to true
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;

    const currentX = e.touches[0].clientX; // Get the current touch position
    const diffX = startX.current - currentX; // Calculate the difference

    // If the difference exceeds a threshold, navigate
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext(); // Swipe left
      } else {
        handlePrev(); // Swipe right
      }
      isSwiping.current = false; // Reset swiping
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false; // Reset swiping when touch ends
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
                  <img alt="gallery" className="w-full h-full object-cover object-center" src={item.src} />
                  <div className="absolute inset-0 bg-white opacity-50 flex flex-col items-center justify-center p-4 hover:opacity-75 transition-opacity duration-300">
                    </div>
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
      </div>
    </section>
  );
};

export default GallerySection;
