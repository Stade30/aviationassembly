import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import Membership from "../pages/Membership";
import Ministries from "../pages/Ministries";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Navbar */}
      <div className="bg-topnavbg text-white py-2 px-14 flex justify-end gap-4 text-lg">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaTiktok />
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-navbgc bg-globe shadow-lg px-6 py-4">
        <div className=" mx-auto px-40 py-2 flex items-center justify-between">
          <img src={logo} alt="Church Logo" className="h-14" />
          <ul className="flex gap-8 text-gray-800 font-medium text-base">
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="/" className="hover:text-[#163F1B]">
                Home
              </Link>
            </li>
            <div className="w-px h-6 bg-gray-400"></div>
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="/give" className="hover:text-[#163F1B]">
                Give
              </Link>
            </li>
            <div className="w-px h-6 bg-gray-400"></div>
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="#" className="hover:text-[#163F1B]">
                <Ministries />
              </Link>
            </li>
            <div className="w-px h-6 bg-gray-400"></div>
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="/contact" className="hover:text-[#163F1B]">
                Contact
              </Link>
            </li>
            <div className="w-px h-6 bg-gray-400"></div>
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="/about" className="hover:text-[#163F1B]">
                About
              </Link>
            </li>
            <div className="w-px h-6 bg-gray-400"></div>
            <li className="transition-transform duration-300 hover:scale-105">
              <Link to="#" className="hover:text-[#163F1B]">
                <Membership />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
