import React from "react";
import { Link } from "react-router-dom";
import  {FaChevronDown} from "react-icons/fa";

const Membership = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative group">
      {/* Trigger element */}
      <span
        tabIndex={0}
        className="hover:underline text-white-700 dark:text-gray-300 cursor-pointer focus:outline-none"
      >
        Member? <FaChevronDown className="inline-block ml-1" />
      </span>

      {/* Dropdown Menu */}
      <div
        className="
          absolute right-0 mt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50
          transition-all duration-300 ease-out transform
          opacity-0 scale-95 -translate-y-2 invisible
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible
          group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0 group-focus-within:visible
        "
      >
        <Link
          to="/login"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Membership;
