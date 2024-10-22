import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import doc1 from '../assets/img/doc1.jpeg';
import doc2 from '../assets/img/doc2.jpeg';

const Doctors = () => {
  const data = [
    {
      img: doc1,
      name: "דר' סרינה מיטשל",
      specialties: "מנתחת אורתופדית",
    },
    {
      img: doc2,
      name: "דר' ג'וליאן בנט",
      specialties: "קרדיולוג",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <ul style={{ display: "flex", gap: "10px" }}> {/* Adjust spacing between dots */}
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-12 text-right" dir="rtl">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-8 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-right lg:text-right">הרופאים שלנו</h1>
          <p className="mt-2 text-right lg:text-right">
            לורם איפסום דולור סיט, אמט קונסקטורר אדיפיסינג אלית. נטשנש, קווידם.
          </p>
          <div className="mt-2 h-1 w-26 bg-[#ff8c00] mx-auto lg:mx-0"></div>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="hidden lg:flex bg-backgroundColor text-[#ff8c00] px-4 py-2 rounded-lg active:bg-[#d5f2ec]"
            onClick={() => slider.current.slickPrev()}
          >
            <BsChevronRight size={25} />
          </button>
          <button
            className="hidden lg:flex bg-backgroundColor text-[#ff8c00] px-4 py-2 rounded-lg active:bg-[#d5f2ec]"
            onClick={() => slider.current.slickNext()}
          >
            <BsChevronLeft size={25} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="flex flex-col items-center mb-5 cursor-pointer"
              key={index}
            >
              <div className="flex flex-row-reverse items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-[#ff8c00] shadow-lg">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mr-4 text-right">
                  <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                  <h3 className="text-gray-600">{e.specialties}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
