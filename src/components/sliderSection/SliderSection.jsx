import React from "react";
import Slider from "infinite-react-carousel";
import "./sliderSection.scss";

const SliderSection = ({
  children,
  slidesToShow,
  arrowsScroll,
  title,
  className,
}) => {
  return (
    <div className="slide">
      <h1>{title && title}</h1>
      <Slider
        slidesToShow={slidesToShow}
        arrowsScroll={arrowsScroll}
        className={className && className}
      >
        {children}
      </Slider>
    </div>
  );
};

export default SliderSection;
