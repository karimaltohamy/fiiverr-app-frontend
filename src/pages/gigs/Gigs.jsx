/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import CardGig from "../../components/cardGig/CardGig";
import newRequest from "../../utils/newRequest";
import "./gigs.scss";

const Gigs = () => {
  const [listSort, setListSort] = useState(false);
  const [sortBy, setSortBy] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const [data, setData] = useState(undefined);
  const [error, setError] = useState();

  const getGigs = () => {
    try {
      newRequest
        .get(
          `/gigs${search ? search : "?"}&min=${minRef.current.value}&max=${
            maxRef.current.value
          }&sort=${sortBy}`
        )
        .then((res) => setData(res.data));
    } catch (error) {
      setError("there is something error");
      console.log(error);
    }
  };

  useEffect(() => {
    getGigs();
  }, [sortBy]);

  const handleSortBy = (type) => {
    setSortBy(type);
    setListSort(false);
  };

  const apply = () => {
    getGigs();
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
          <span>design</span>
          {">"}
        </p>
        <h1 className="head-title">AI Artists</h1>
        <p className="desc">
          Explore the boundaries of art and technology with {"Fiverr's"} AI
          artists
        </p>
        <div className="row-inputs">
          <div className="budget">
            <span>budget</span>
            <input type="number" placeholder="min" ref={minRef} />
            <input type="number" placeholder="max" ref={maxRef} />
            <button className="btn-apply" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="sort">
            <p onClick={() => setListSort(!listSort)}>
              Sort by{" "}
              <span>{sortBy === "sales" ? "Best Selling" : "Newest"}</span>
            </p>
            {listSort && (
              <div className="list-sort">
                {sortBy !== "createdAt" && (
                  <li onClick={() => handleSortBy("createdAt")}>Newest</li>
                )}
                {sortBy !== "sales" && (
                  <li onClick={() => handleSortBy("sales")}>Best Selling</li>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards-gig">
          {!data
            ? "Loading..."
            : data.map((gig) => <CardGig key={gig._id} gig={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
