/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Swiper } from "swiper/react";
import { Navigation} from 'swiper';
import "swiper/css";
import "./sliderSection.scss";
import 'swiper/css';
import 'swiper/css/navigation';

const SliderSection = ({ children, title }) => {
  return (
    <div className="slide">
      <h1>{title && title}</h1>

      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SliderSection;
