import React from 'react';
import Slider from 'react-slick';
import img1 from '../assets/img/test.jpg';
import img2 from '../assets/img/test.jpg';
import img3 from '../assets/img/test.jpg';

const BeforeAndAfter = () => {
  const galleryItems = [
    { src: img1, title: "Gallery Item 1", opinion: { name: "יואב כהן", rating: 5, comment: "היה לי ניסיון מצוין במרפאת השיניים!" } },
    { src: img2, title: "Gallery Item 2", opinion: { name: "שרה לוי", rating: 4, comment: "שירות מאוד מקצועי." } },
    { src: img3, title: "Gallery Item 3", opinion: { name: "מיכאל גולדשטין", rating: 5, comment: "הטיפול הדנטלי הטוב ביותר שקיבלתי!" } },
    // Add more images and opinions as needed
  ];

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
        <div className="w-full lg:w-1/3 h-1 bg-[#FFA500] mb-4"></div>
      </div>
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
    </section>
  );
};

export default BeforeAndAfter;
