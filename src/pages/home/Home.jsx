/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { Fragment, useEffect, useState} from "react";
import Hero from "../../components/hero/Hero";
import { cards, projects } from "../../data";
import "./home.scss";
import "../../components/sliderSection/sliderSection.scss";

import metaImg from "../../assets/images/meta.8a23b13.png";
import googleImg from "../../assets/images/google.517da09.png";
import paypalImg from "../../assets/images/paypal.ec56157.png";
import netflix from "../../assets/images/netflix.e3ad953.png";
import pgImg from "../../assets/images/pandg.8b7310b.png";
import bannerImg from "../../assets/images/business-desktop-870-x1.webp";


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import { Link } from "react-router-dom";

const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 470) {
        setSlidesToShow(1);
      } else if (width >= 470 && width < 700) {
        setSlidesToShow(2);
      } else if (width >= 700 && width < 868) {
        setSlidesToShow(3);
      } else if (width >= 868 && width < 1100) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={slidesToShow}
            navigation
            loop={true}
          >
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    to="/gigs?cat=design"
                    className="card-slider"
                    key={card.id}
                  >
                    <img src={card.img} alt="" />
                    <div className="text">
                      <p>{card.desc}</p>
                      <h3>{card.title}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
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
                <h4>24/7 support</h4>
              </div>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
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
                <h4>Quality work done quickly</h4>
              </div>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>
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
                <h4>Protected payments, every time</h4>
              </div>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>
          </div>
          <div className="right">
            <video controls>
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="fib-banner">
        <div className="container">
          <div className="left">
            <svg
              width="219"
              height="27"
              viewBox="0 0 219 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z"></path>
                <path d="M91.7,23.7v2.7h-3.5V0h3.5v10.8c1.1-1.8,3.3-3,5.8-3c5.6,0,8.7,4,8.7,9.4s-3.2,9.4-8.8,9.4 C95,26.7,92.8,25.5,91.7,23.7z M102.6,17.3c0-3.8-2.2-6.4-5.6-6.4c-3.4,0-5.6,2.5-5.6,6.4s2.2,6.4,5.6,6.4 C100.4,23.6,102.6,21.1,102.6,17.3z"></path>
                <path d="M123.5,26.4H120v-3.2c-1,2.3-3.2,3.5-5.9,3.5c-4.1,0-6.8-3-6.8-7.3V8.1h3.5v10.6c0,2.9,1.7,4.9,4.3,4.9 c2.9,0,4.9-2.3,4.9-5.5V8.1h3.5L123.5,26.4z"></path>
                <path d="M125,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3c0-3.1,2.7-5.2,6.5-5.2 c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2c0,3.3-2.7,5.5-6.8,5.5 C128.1,26.7,125.2,24.3,125,20.5z"></path>
                <path d="M144.5,8.1H141v18.3h3.5V8.1z"></path>
                <path d="M147.1,8.1h3.5v3.2c1-2.3,3.2-3.5,5.9-3.5c4.1,0,6.8,3,6.8,7.3v11.3h-3.5V15.8c0-2.9-1.7-4.9-4.3-4.9 c-2.9,0-4.9,2.3-4.9,5.5v9.9H147L147.1,8.1z"></path>
                <path d="M182.9,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C186,26.7,183.2,24.3,182.9,20.5z"></path>
                <path d="M178.7,20.5c-0.5,2.1-2.3,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h14c0-0.3,0.1-0.9,0.1-1.4c0-4.6-3-8.7-8.7-8.7 c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.6,9.2,9.6c4.1,0,7.2-2.1,8.2-5.3L178.7,20.5z M173.4,10.7c3,0,4.9,1.9,5.1,4.6h-10.4 C168.7,12.2,170.5,10.7,173.4,10.7z"></path>
                <path d="M198.1,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C201.2,26.7,198.3,24.3,198.1,20.5z"></path>
                <path d="M142.7,0c-0.6,0-1.1,0.2-1.6,0.7c-0.4,0.4-0.7,1-0.7,1.6c0,0.6,0.2,1.1,0.7,1.6c0.5,0.4,1,0.7,1.6,0.7 c0.6,0,1.1-0.2,1.6-0.7c0.4-0.5,0.7-1,0.7-1.6c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.5-0.5-0.8c-0.2-0.2-0.5-0.4-0.7-0.5 C143.4,0.1,143.1,0,142.7,0z"></path>
                <path d="M218.3,24.4L218.3,24.4c0,0.6-0.2,1.2-0.7,1.6c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7 c-0.4-0.4-0.7-1-0.7-1.6v0c0-0.6,0.2-1.2,0.7-1.6c0.4-0.4,1-0.7,1.6-0.7c0.6,0,1.2,0.2,1.6,0.7C218.1,23.2,218.3,23.8,218.3,24.4z"></path>
              </g>
            </svg>
            <h2>
              A business solution designed for <em>teams</em>
            </h2>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>

            <div className="items">
              <div className="item">
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
                <p>Connect to freelancers with proven business experience</p>
              </div>
              <div className="item">
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
                <p>
                  Get matched with the perfect talent by a customer success
                  manager
                </p>
              </div>
              <div className="item">
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
                <p>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </p>
              </div>
            </div>
            <button className="btn-banner">Explore Fiverr Business</button>
          </div>
          <div className="right">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
      <div className="made-on-fiverr">
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide className="project-card" key={index}>
                  <img className="img-cover" src={project?.img} alt="" />
                  <div className="info">
                    <img className="profile" src={project.pp} alt="" />
                    <div className="text">
                      <h3 className="cat">{project.cat}</h3>
                      <span>{project.username}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
