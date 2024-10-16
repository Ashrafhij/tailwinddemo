import React, { useState, useRef } from 'react';

const CustomerOpinionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opinions = [
    {
      name: "John Doe",
      rating: 5,
      comment: "I had an excellent experience at the dental office! The staff was friendly, and the service was top-notch. Highly recommend!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Very professional service. I was nervous about my appointment, but they made me feel comfortable and at ease.",
    },
    {
      name: "Michael Johnson",
      rating: 5,
      comment: "Best dental care I've ever received! The team is knowledgeable and caring. I will definitely be returning.",
    },
    {
      name: "Emily Davis",
      rating: 4,
      comment: "Great experience overall! The office was clean, and I appreciated the thorough explanations of the procedures.",
    },
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? opinions.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === opinions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Customer Opinions</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            See what our customers have to say about their experiences at our dental care office.
          </p>
        </div>

        {/* Swipeable Opinion Container */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {opinions.map((opinion, index) => (
              <div key={index} className="flex-shrink-0 w-full p-6 border rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">{opinion.name}</h2>
                <div className="flex items-center mb-2">
                  {Array.from({ length: opinion.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500">&#9733;</span> // Star rating
                  ))}
                  {Array.from({ length: 5 - opinion.rating }).map((_, idx) => (
                    <span key={idx} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
                <p className="leading-relaxed text-base">{opinion.comment}</p>
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

        {/* Opinion Indicator Dots */}
        <div className="flex justify-center mt-4">
          {opinions.map((_, index) => (
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

export default CustomerOpinionSection;
