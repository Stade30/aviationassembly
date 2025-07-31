import React, { useState, useEffect, Children } from "react";
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

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Give", path: "/give" },
    {
      name: "Ministries",
      path: "/ministries",
      children: [
        { name: "Youth", path: "/ministries/youth" },
        { name: "Men", path: "/ministries/men" },
        { name: "Women", path: "/ministries/women" },
      ],
    },
    {
      name: "Member ?",
      path: "/membership",
      children: [
        { name: "Log In", path: "membership/login" },
        { name: "Join Us", path: "membership/join" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-globe">
      {/* Social Topbar */}
      <div className="bg-topnavbg text-white py-2 px-4 sm:px-14 flex justify-end gap-8 text-lg">
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
            ? "bg-black/90 text-white shadow-md"
            : "bg-transparent text-topnavbg"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          <img src={logo} alt="Logo" className="h-12 sm:h-14" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 font-medium text-base items-center relative text-md left-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group inline-block px-2 py-1 cursor-pointer after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link to={item.path} className="flex items-center gap-1">
                  {item.name}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {item.children && (
                  <ul
                    className="absolute left-0 w-40 bg-white text-topnavbg shadow-lg rounded-md z-10 hidden opacity-0 translate-x-2 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible
                    transition-all duration-300 ease-in-out group-hover:block transform"
                  >
                    {item.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={child.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-topnavbg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-6 mt-4 space-y-3 text-topnavbg text-base text-center  font-medium gap-8">
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
