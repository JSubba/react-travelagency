import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  // FaFacebook,
  // FaInstagram,
  // FaPinterest,
  // FaTwitter,
  // FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>travelCOM</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Destinations</li>
        </Link>
        <Link to="travel" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="book" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icon">
        <BsPerson className="icon" />
      </div>
      <div className="toggle-icon" onClick={handleNav}>
        {!nav ? (
          <FaBars className="icon" />
        ) : (
          <FaTimes style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="travel" smooth={true} duration={500}>
            <li>Travel</li>
          </Link>
          <Link to="book" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Account</button>
          </div>
          {/* <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
