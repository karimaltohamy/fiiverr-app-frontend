import React from "react";
import { Link } from "react-router-dom";
import "./cardSlider.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';

const CardSlider = ({ card }) => {
  return (
    <SwiperSlide>
      <Link to="/gigs?cat=design" className="card-slider" key={card.id}>
        <img src={card.img} alt="" />
        <div className="text">
          <p>{card.desc}</p>
          <h3>{card.title}</h3>
        </div>
      </Link>
    </SwiperSlide>
  );
};

export default CardSlider;
