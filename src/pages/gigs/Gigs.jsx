import React, { useState } from "react";
import CardGig from "../../components/cardGig/CardGig";
import { gigs } from "../../data";
import "./gigs.scss";

const Gigs = () => {
  const [listSort, setListSort] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");

  const handleSortBy = (type) => {
    setSortBy(type);
    setListSort(false);
  };
  return (
    <div className="gigs">
      <div className="container">
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
        <h1 className="head-title">AI Artists</h1>
        <p className="desc">
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="row-inputs">
          <div className="budget">
            <span>budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button className="btn-apply">Apply</button>
          </div>
          <div className="sort">
            <p onClick={() => setListSort(!listSort)}>
              Sort by <span>{sortBy}</span>
            </p>
            {listSort && (
              <div className="list-sort">
                {sortBy !== "Best Selling" && (
                  <li onClick={() => handleSortBy("Best Selling")}>
                    Best Selling
                  </li>
                )}
                {sortBy !== "Newest Arrivals" && (
                  <li onClick={() => handleSortBy("Newest Arrivals")}>
                    Newest Arrivals
                  </li>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards-gig">
          {gigs.map((gig) => {
            <CardGig gig={gig} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
