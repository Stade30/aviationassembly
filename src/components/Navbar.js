import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  //Changing of text and background color when scrolled

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-globe">
      {/* Social Topbar */}
      <div className="bg-topnavbg/85 text-white py-2 px-4 sm:px-14 flex justify-end gap-8 text-lg">
        {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/60 text-white shadow-md"
            : "bg-black/60 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-12 sm:h-14" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 font-medium text-base items-center relative text-md">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/give" className="">
                Give
              </Link>
            </li>

            {/* Ministries Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1">
                Ministries <ChevronDown className="w-8 h-4" />
              </button>
              <ul className="absolute left-0 mt-4 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-2 z-50 min-w-[180px]">
                <li className="flex items-center gap-2 px-4 py-2 ">
                  <Link to="/ministries/music">Music Ministry</Link>
                </li>
                <li className="flex items-center gap-2 px-4 py-2 ">
                  <Link to="/ministries/youth">Youth Ministry</Link>
                </li>
                <li className="flex items-center gap-2 px-4 py-2 ">
                  <Link to="/ministries/evangelism">Evangelism</Link>
                </li>
              </ul>
            </li>

            {/* Membership Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1">
                Membership <ChevronDown className="w-8 h-4" />
              </button>
              <ul className="absolute left-0 mt-4 bg-white shadow-lg rounded-lg p-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-2 z-50 min-w-[180px]">
                <li className="flex items-center gap-2 px-4 py-2 ">
                  <Link to="/membership/register">Register</Link>
                </li>
                <li className="flex items-center gap-2 px-4 py-2 ">
                  <Link to="/membership/benefits">Benefits</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-6 mt-4 space-y-3 text-white text-base text-center  font-medium gap-8">
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/give" onClick={() => setMobileMenuOpen(false)}>
                  Give
                </Link>
              </li>
            </ul>
            {/* Ministries Mobile Dropdown */}
            <div className="text-center">
              <button
                onClick={() => toggleDropdown("ministries")}
                className="flex justify-between w-full items-center"
              >
                Ministries <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "ministries" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/ministries/music"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Music Ministry
                  </Link>
                  <Link
                    to="/ministries/youth"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Youth Ministry
                  </Link>
                  <Link
                    to="/ministries/evangelism"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Evangelism
                  </Link>
                </div>
              )}
            </div>

            {/* Membership Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("membership")}
                className="flex justify-between w-full items-center"
              >
                Membership <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "membership" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/membership/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Register
                  </Link>
                  <Link
                    to="/membership/benefits"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Benefits
                  </Link>
                </div>
              )}
            </div>
            <ul>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
