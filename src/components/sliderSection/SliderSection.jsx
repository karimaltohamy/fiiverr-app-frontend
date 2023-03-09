import React from "react";
import Slider from "infinite-react-carousel";
// import "./sliderSection.scss";

const SliderSection = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
