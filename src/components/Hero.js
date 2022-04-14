import React from "react";
import homeVideo from "../assets/homeVideo.mp4";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section name="home" className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={homeVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#1a92f5] mix-blend-overlay"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-gray-300 p-4">
        <h1 className="text-5xl pb-4">Come Explore Our</h1>
        <h2 className="pb-4">Top Locations Worldwide</h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <FaSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
