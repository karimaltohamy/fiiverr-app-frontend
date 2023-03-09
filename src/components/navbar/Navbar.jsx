import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openList, setOpenList] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 0 ? setActive(true) : setActive(false);
    });
  });

  const currentUser = {
    id: 1,
    user: "karim",
    isSeller: true,
  };

  return (
    <div className={`navbar ${active || pathname !== "/" ? "active" : ""}`}>
      <div className="nav-top">
        <div className="container">
          <Link to={"/"} className="logo">
            Fiverr
            <span>.</span>
          </Link>
          <div className="links">
            <Link>Fiverr Business</Link>
            <Link>Explore</Link>
            <Link>English</Link>
            {!currentUser && <Link>Become a Seller</Link>}
            {!currentUser && <Link>Sign in</Link>}
            {!currentUser && (
              <Link>
                <button className={`join ${active ? "active" : ""}`}>
                  Join
                </button>
              </Link>
            )}

            {currentUser && (
              <div className="currentUser">
                <div
                  className="info-user"
                  onClick={() => setOpenList(!openList)}
                >
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt=""
                  />
                  <span>karim</span>
                </div>
                {openList && (
                  <div className="list-user" onClick={() => setOpenList(false)}>
                    <Link to={"/gigs"}>Gigs</Link>
                    <Link to={"/addGig"}>Add New Gig</Link>
                    <Link to={"/orders"}>Orders</Link>
                    <Link to={"/messages"}>Messages</Link>
                    <Link>Logout</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {active || pathname !== "/" ? (
        <div className="nav-bottom">
          <div className="container">
            <div>Graphics & Design</div>
            <div>Digital Marketing</div>
            <div>Writing & Translation</div>
            <div>Video & Animation</div>
            <div>Music & Audio</div>
            <div>Programming & Tech</div>
            <div>Business</div>
            <div>Lifestyle</div>
            <div>AI Services</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
