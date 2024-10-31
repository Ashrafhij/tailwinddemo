import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import img1 from '../assets/img/beforendafter/11.jpeg';
import img2 from '../assets/img/beforendafter/22.jpeg';
import img3 from '../assets/img/beforendafter/33.jpeg';
import img4 from '../assets/img/beforendafter/44.jpeg';
import img5 from '../assets/img/beforendafter/55.jpeg';
import img6 from '../assets/img/beforendafter/66.jpeg';
import img7 from '../assets/img/beforendafter/77.jpeg';
import img8 from '../assets/img/beforendafter/88.jpeg';
import img9 from '../assets/img/beforendafter/99.jpeg';
import img10 from '../assets/img/beforendafter/12.jpeg';

const BeforeAndAfter = () => {
  // Use useMemo to memoize galleryItems
  const galleryItems = useMemo(() => [
    { src: img1, title: "Gallery Item 1", opinion: { name: "*", rating: 5, comment: "היה לי ניסיון מצוין במרפאת השיניים!" } },
    { src: img2, title: "Gallery Item 2", opinion: { name: "שרה לוי", rating: 4, comment: "שירות מאוד מקצועי." } },
    { src: img3, title: "Gallery Item 3", opinion: { name: "מיכאל גולדשטין", rating: 5, comment: "הטיפול הדנטלי הטוב ביותר שקיבלתי!" } },
    { src: img4, title: "Gallery Item 4", opinion: { name: "יואב כהן", rating: 5, comment: "היה לי ניסיון מצוין במרפאת השיניים!" } },
    { src: img5, title: "Gallery Item 5", opinion: { name: "שרה לוי", rating: 4, comment: "שירות מאוד מקצועי." } },
    { src: img6, title: "Gallery Item 6", opinion: { name: "מיכאל גולדשטין", rating: 5, comment: "הטיפול הדנטלי הטוב ביותר שקיבלתי!" } },
    { src: img7, title: "Gallery Item 7", opinion: { name: "שרה לוי", rating: 4, comment: "שירות מאוד מקצועי." } },
    { src: img8, title: "Gallery Item 8", opinion: { name: "מיכאל גולדשטין", rating: 5, comment: "הטיפול הדנטלי הטוב ביותר שקיבלתי!" } },
    { src: img9, title: "Gallery Item 9", opinion: { name: "יואב כהן", rating: 5, comment: "היה לי ניסיון מצוין במרפאת השיניים!" } },
    { src: img10, title: "Gallery Item 10", opinion: { name: "יואב כהן", rating: 5, comment: "היה לי ניסיון מצוין במרפאת השיניים!" } },

    // Add more images and opinions as needed
  ], []); // Empty dependency array ensures it's only created once

  // State for loading images
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = galleryItems.map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      // When all images are loaded, remove loader
      Promise.all(imagePromises)
        .then(() => setIsLoading(false))
        .catch(err => console.error("Failed to load images:", err));
    };

    loadImages();
  }, [galleryItems]); // Now, galleryItems is stable and won't trigger useEffect unnecessarily

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="flex flex-col justify-center lg:px-32 px-5 pt-12 text-right" dir="rtl">
      <div className="mb-8 lg:mb-0">
        <h1 className="text-4xl font-semibold text-right">לפני ואחרי עם חוות דעת</h1>
        <div className="w-full lg:w-1/3 h-1 bg-secondColor mb-4"></div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          {/* Tailwind spinner loader */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="w-full lg:w-2/3">
          {/* Opinion Slider */}
          <Slider {...settings}>
            {galleryItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                <img alt={item.title} className="w-full h-64 object-cover mb-4" src={item.src} />
                <h2 className="text-lg font-bold mb-2">{item.opinion.name}</h2>
                <div className="flex items-center justify-end mb-2">
                  {Array.from({ length: item.opinion.rating }).map((_, starIdx) => (
                    <span key={starIdx} className="text-yellow-500">&#9733;</span>
                  ))}
                  {Array.from({ length: 5 - item.opinion.rating }).map((_, starIdx) => (
                    <span key={starIdx} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
                <p className="leading-relaxed text-base">{item.opinion.comment}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default BeforeAndAfter;
