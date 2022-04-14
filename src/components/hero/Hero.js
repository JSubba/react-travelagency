import React from "react";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";

import video from "../../assets/travel-video.mp4";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              <FaSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
