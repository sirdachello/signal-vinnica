import scrollerStyles from "../Styles/Scroller.module.css";

import car1 from "../Assets/Cars/car1.webp";
import car2 from "../Assets/Cars/car2.webp";
import car3 from "../Assets/Cars/car3.webp";
import car4 from "../Assets/Cars/car4.webp";
import car5 from "../Assets/Cars/car5.webp";
import car6 from "../Assets/Cars/car6.webp";
import car8 from "../Assets/Cars/car7.webp";
import car9 from "../Assets/Cars/car8.webp";
import car10 from "../Assets/Cars/car9.webp";
import car11 from "../Assets/Cars/car10.webp";

import React from "react";
import Slider from "react-slick";

const carsList = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car8,
  car9,
  car10,
  car11,
];

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
      className={scrollerStyles.nextArrow}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={scrollerStyles.prevArrow}
        onClick={onClick}
      />
    );
  }

export default function CarScroller() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1400,
          settings: {

            variableWidth: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true
          },
        }
      ],
  };

  const images = carsList.map((elem, index) => {
    return (
      <div className="mr-5 overflow-hidden" key={index}>
        <img
          className="px-1 h-[300px] sm:h-[350px] customlg:h-[300px] rounded-3xl m-auto"
          src={elem}
          alt="Автомобіль школи Сигнал"
          loading="lazy"
        />
      </div>
    );
  });

  return (
    <>
    <div className="my-[80px]">
    <h3 className="text-center">Наші автомобілі</h3>
      <div className="lg:mx-24 xl:mx-36 customxl:mx-0">
        <Slider {...settings}>{images}</Slider>
      </div>
    </div>
    </>
  );
}
