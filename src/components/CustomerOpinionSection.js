import React, { useState, useRef } from 'react';

const CustomerOpinionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opinions = [
    {
      name: "יואב כהן",
      rating: 5,
      comment: "היה לי ניסיון מצוין במרפאת השיניים! הצוות היה ידידותי, והשירות היה ברמה גבוהה. ממליץ בחום!",
    },
    {
      name: "שרה לוי",
      rating: 4,
      comment: "שירות מאוד מקצועי. הייתי עצבנית לגבי הפגישה שלי, אבל הם עשו אותי להרגיש בנוח.",
    },
    {
      name: "מיכאל גולדשטין",
      rating: 5,
      comment: "הטיפול הדנטלי הטוב ביותר שקיבלתי אי פעם! הצוות מיומן ודואג. אני בהחלט אחזור.",
    },
    {
      name: "מריה שמחון",
      rating: 4,
      comment: "ניסיון נהדר בסך הכל! המשרד היה נקי, והערכתי את ההסברים המפורטים על ההליכים.",
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? opinions.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === opinions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="text-gray-600 body-font py-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col text-right w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">חוות דעת של לקוחות</h1>
          <div className="h-1 w-1/4 bg-orange-500 mt-1 ml-auto" />
        </div>

        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {opinions.map((opinion, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full p-6 border-2 border-orange-500 rounded-lg shadow-lg text-right"
              >
                <h2 className="text-xl font-bold mb-2">{opinion.name}</h2>
                <div className="flex items-center mb-2 justify-end">
                  {Array.from({ length: opinion.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500">&#9733;</span>
                  ))}
                  {Array.from({ length: 5 - opinion.rating }).map((_, idx) => (
                    <span key={idx} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
                <p className="leading-relaxed text-base">{opinion.comment}</p>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <span className="cursor-pointer text-gray-800 text-2xl" onClick={handlePrev}>&#10094;</span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <span className="cursor-pointer text-gray-800 text-2xl" onClick={handleNext}>&#10095;</span>
          </div>
        </div>

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
