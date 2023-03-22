/* eslint-disable react/jsx-key */
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import SliderSection from "../../components/SliderSection/SliderSection";
import newRequest from "../../utils/newRequest";
import "./gig.scss";
import GigProfileInfo from "../../components/gigProfileInfo/GigProfileInfo";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: gig,
  } = useQuery({
    queryKey: ["gig"],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  return (
    <div className="gig">
      <div className="container">
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "there is something error"
        ) : (
          <div className="content">
            <div className="left">
              <p className="path">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                {">"}
                <span>Graphics & Design</span>
                {">"}
              </p>
              <h1 className="head-title">{gig.title}</h1>
              <div className="seller-overview">
                <img
                  src={
                    gig.userId.img ||
                    "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt=""
                />
                <span>{gig.userId.username}</span>
                <div className="stars">
                  {Array(Math.round(gig.totalStars / gig.starNumber) || 1)
                    .fill("")
                    .map((_, index) => {
                      return (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      );
                    })}
                  {Math.round(gig.totalStars / gig.starNumber) || 1}
                </div>
              </div>
              <div className="slider-gig">
                <SliderSection slidesToShow={1} arrowsScroll={1}>
                  {gig.images &&
                    gig.images.map((img, index) => {
                      return <img src={img} key={index} alt="" />;
                    })}
                </SliderSection>
              </div>
              <div className="about-gig">
                <h3>About this Gig</h3>
                <p>{gig.desc}</p>
              </div>
              <div className="about-seller">
                <h3>About The Seller</h3>
                <div className="info">
                  <img src={gig.userId.img} alt="" />
                  <div className="text">
                    <span>{gig.userId.username}</span>
                    <div className="stars">
                      {Array(Math.round(gig.totalStars / gig.starNumber) || 1)
                        .fill("")
                        .map((_, index) => {
                          return (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          );
                        })}
                    </div>
                    <button className="btn-contact">Contact Me</button>
                  </div>
                </div>
              </div>
              <GigProfileInfo gig={gig} />
              <Reviews gigId={gig._id} />
            </div>

            <div className="right">
              <div className="sidebar-content">
                <div className="price">
                  <span className="title">{gig.shortTitle}</span>
                  <span className="num-price">$ {gig.price}</span>
                </div>
                <p className="desc">{gig.shortDesc}</p>

                <div className="additional-info">
                  <div className="delivery-wrapper">
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>{gig.delivaryTime} Days Delivery</span>
                  </div>
                  <div className="revisions-wrapper">
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
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    <span>{gig.revisionNumber} Unlimited Revisions</span>
                  </div>
                </div>

                <div className="features">
                  {gig.addFeatures.map((feature, index) => {
                    return (
                      <div className="feature" key={index}>
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
                        {feature}
                      </div>
                    );
                  })}
                </div>
                <Link to={`/pay/${id}`}>
                  <button className="btn-continue">Continue</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gig;
