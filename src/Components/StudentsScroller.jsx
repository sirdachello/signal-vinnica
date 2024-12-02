import scrollerStyles from "../Styles/Scroller.module.css";

import students1 from "../Assets/Photos/Students/1.jpg";
import students2 from "../Assets/Photos/Students/2.jpg";
import students3 from "../Assets/Photos/Students/3.jpg";
import students4 from "../Assets/Photos/Students/4.jpg";
import students7 from "../Assets/Photos/Students/7.jpg";
import students8 from "../Assets/Photos/Students/8.jpg";
import students9 from "../Assets/Photos/Students/9.jpg";
import students10 from "../Assets/Photos/Students/10.jpg";
import students11 from "../Assets/Photos/Students/11.jpg";
import students12 from "../Assets/Photos/Students/12.jpg";
import students13 from "../Assets/Photos/Students/13.jpg";
import students14 from "../Assets/Photos/Students/14.jpg";
import students15 from "../Assets/Photos/Students/15.jpg";
import students16 from "../Assets/Photos/Students/16.jpg";

import React from "react";
import Slider from "react-slick";

const studentsList = [
  students1,
  students2,
  students3,
  students4,
  students7,
  students8,
  students9,
  students10,
  students11,
  students12,
  students13,
  students14,
  students15,
  students16,
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

export default function StudentsScroller() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      }
    ],
  };

  const images = studentsList.map((elem, index) => {
    return (
      <div className="mb-[-6px]" key={index}>
        <img
          className="rounded-3xl mx-auto shadow-md h-[67vw] md:h-[500px] customlg:h-[300px] active:scale-150 transition-all duration-200"
          src={elem}
          alt="Фотографія групи випускників автошколи Сигнал"
          loading="lazy"
        />
      </div>
    );
  });

  return (
    <div className="mx-4 customlg:mx-14 lg:mx-24 xl:mx-36 customxl:mx-0">
      <Slider {...settings}>{images}</Slider>
    </div>
  );
}
