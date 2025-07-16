import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Membership from "../pages/Membership";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-800 text-white dark:bg-green-800 shadow">
      <div className="">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 inline-block mr-4" />
        </Link>
      </div>
      {/* <div>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
             {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </span>
      </div> */}
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/ministries" className="hover:underline">
          Ministries
        </Link>
        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to=" " className="hover:underline">
          <Membership />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
