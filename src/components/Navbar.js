import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-gray-300">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          shonan
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="px-2">Home</li>
        <li className="px-2">Destinations</li>
        <li className="px-2">Travel</li>
        <li className="px-2">View</li>
        <li className="px-2">Book</li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={20} />
      </div>

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <FaTimes className="text-black" size={20} />
        ) : (
          <FaBars size={20} />
        )}
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul className="pt-12">
          <li className="border-b text-center py-2">Home</li>
          <li className="border-b text-center py-2">Destinations</li>
          <li className="border-b text-center py-2">Travel</li>
          <li className="border-b text-center py-2">View</li>
          <li className="border-b text-center py-2">Book</li>
          <div className="flex flex-col py-8">
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
