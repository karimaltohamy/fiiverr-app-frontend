import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./hero.scss";

const Hero = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/gigs?search=${search}`)
  }
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <em>freelance</em> services for your business
          </h1>
          <div className="search">
            <div className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input type="text" placeholder="Try building mobile app" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span className="text">Popular:</span>
            <Link className="item">Website Design</Link>
            <Link className="item">Wordpress</Link>
            <Link className="item">Logo Design</Link>
            <Link className="item">AI Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
