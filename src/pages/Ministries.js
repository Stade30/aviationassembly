import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Ministries = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  
  return (
    <div className="relative group">
      {/* Trigger element */}
      <span tabIndex={0} className="hover: text-white-700 cursor-pointer">
        Ministries
        <FaChevronDown
          className="inline-block ml-1 text-gray-500"
          onClick={toggleDropdown}
        />
      </span>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="
              absolute right-0 mt-2 w-40 rounded-lg bg-white text-topnavbg shadow-lg z-50
              transition-all duration-300 ease-out transform
              opacity-0 scale-95 -translate-y-2 invisible
              group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible
              group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:visible
            "
        >
          <Link
            to="/ministries/youth"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Youth Ministry
          </Link>

          <Link
            to="/ministries/music"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Music Ministry
          </Link>
          <Link
            to="/ministries/children"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Children Ministry
          </Link>
          <Link
            to="/ministries/media"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Media Ministry
          </Link>
          <Link
            to="/ministries/outreach"
            onClick={closeDropdown}
            className="block px-4 py-2 text-sm text-topnavbg hover:bg-primarycolor hover:text-topnavbg transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Outreach Ministry
          </Link>
        </div>
      )}
    </div>
  );
};
export default Ministries;
