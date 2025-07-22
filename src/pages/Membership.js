import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Membership = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative group">
      {/* Trigger element */}
      <span
        tabIndex={0}
        className=" text-white-700 dark:text-gray-300 cursor-pointer focus:outline-none"
      >
        Member?
        <FaChevronDown
          className="inline-block ml-1 text-gray-500"
          onClick={toggleDropdown}
        />
      </span>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="
          absolute right-0 mt-2 w-44 rounded-lg bg-white text-white-700 dark:bg-green-800 shadow-lg z-[999]
          transition-all duration-300 ease-out transform
          opacity-0 scale-95 -translate-y-2 invisible
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible
          group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:visible
        "
        >
          <Link
            to="/user-authn/sigin"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Login
          </Link>

          <Link
            to="/user-authn/signup"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Membership;
