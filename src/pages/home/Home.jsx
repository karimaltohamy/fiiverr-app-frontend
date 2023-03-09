/* eslint-disable react/jsx-key */
import React, { Fragment } from "react";
import Hero from "../../components/hero/Hero";
import SliderSection from "../../components/SliderSection/SliderSection";
import { cards } from "../../data";
import "./home.scss";

import metaImg from "../../assets/images/meta.8a23b13.png";
import googleImg from "../../assets/images/google.517da09.png";
import paypalImg from "../../assets/images/paypal.ec56157.png";
import netflix from "../../assets/images/netflix.e3ad953.png";
import pgImg from "../../assets/images/pandg.8b7310b.png";
import CardSlider from "../../components/cardSlider/CardSlider";
import "../../components/sliderSection/sliderSection.scss";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="trusted-by-wrapper">
        <div className="container">
          <div className="content">
            <span>Trusted by:</span>
            <div>
              <img src={metaImg} alt="" />
            </div>
            <div>
              <img src={googleImg} alt="" />
            </div>
            <div>
              <img src={netflix} alt="" />
            </div>
            <div>
              <img src={pgImg} alt="" />
            </div>
            <div>
              <img src={paypalImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Popular-services">
        <SliderSection slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => {
            return <CardSlider card={card} />;
          })}
        </SliderSection>
      </div>
      <div className="selling-proposition">
        <div className="container">
          <div className="left">
            <h1>A whole world of freelance talent at your fingertips</h1>

            <div className="item">
              <div className="head">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <h4>The best for every budget</h4>
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
          </div>
          <div className="right">
            <video
              src="../../assets/images/vmvv3czyk2ifedefkau7.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
