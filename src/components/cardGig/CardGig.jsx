import React from "react";
import { Link } from "react-router-dom";
import "./cardGig.scss";

const CardGig = ({ gig }) => {

  return (
    <Link to={`/gigs/${gig._id}`} className="card-gig">
      <img src={gig.cover} alt="" />
      <div className="inner-wrapper">
        <img src={gig.userId.img} alt="" />
        <span>{gig.userId.username}</span>
      </div>
      <p className="desc-card">{gig.title.slice(0, 60)}...</p>
      <div className="rating">
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
      <div className="footer-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <p>
          STARTING AT
          <span>US${gig.price}</span>
        </p>
      </div>
    </Link>
  );
};

export default CardGig;
