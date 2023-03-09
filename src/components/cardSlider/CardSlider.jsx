import React from "react";
import { Link } from "react-router-dom";
import "./cardSlider.scss";

const CardSlider = ({ card }) => {
  return (
    <Link to="/gigs?cat=design" className="card-slider" key={card.id}>
      <img src={card.img} alt="" />
      <div className="text">
        <p>{card.desc}</p>
        <h3>{card.title}</h3>
      </div>
    </Link>
  );
};

export default CardSlider;
