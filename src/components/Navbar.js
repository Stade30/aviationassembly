import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="text-xl font-bold">Aviation Assembly</div>
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
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
