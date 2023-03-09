import React from "react";
import Slider from "infinite-react-carousel";
// import "./sliderSection.scss";

const SliderSection = ({ children, slidesToShow, arrowsScroll, title }) => {
  return (
    <div className="slide">
      <div className="container">
        <h1>{title && title}</h1>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
