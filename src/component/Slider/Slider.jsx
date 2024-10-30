import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "80%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.8,
        }}
      />
    ),
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
