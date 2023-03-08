import React, { Fragment } from "react";
import Hero from "../../components/hero/Hero";
import "./home.scss";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="trusted-by-wrapper">
        <div className="container">
          <div className="content"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
