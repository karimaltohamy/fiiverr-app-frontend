import React, { Fragment, useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openList, setOpenList] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 0 ? setActive(true) : setActive(false);
    });
  });

  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
            {!currentUser && <Link to={"/login"}>Sign in</Link>}
            {!currentUser && (
              <Link to={"/register"}>
                <button
                  className={`join ${
                    active || pathname !== "/" ? "active" : ""
                  }`}
                >
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
                    src={
                      currentUser.img
                        ? currentUser.img
                        : "https://www.w3schools.com/howto/img_avatar.png"
                    }
                    alt=""
                  />
                  <span>{currentUser.username}</span>
                </div>
                {openList && (
                  <div className="list-user" onClick={() => setOpenList(false)}>
                    {currentUser.isSeller && (
                      <Fragment>
                        <Link to={"/gigs"}>Gigs</Link>
                        <Link to={"/addGig"}>Add New Gig</Link>
                      </Fragment>
                    )}
                    <Link to={"/orders"}>Orders</Link>
                    <Link to={"/messagesTable"}>Messages</Link>
                    <Link onClick={handleLogout}>Logout</Link>
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
