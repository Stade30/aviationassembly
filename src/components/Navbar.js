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
    { name: "Media", path: "/give" },
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
        { name: "Log In", path: "/membership/login" },
        { name: "Join Us", path: "/membership/join" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com/icgcaviation" },
    { icon: FaInstagram, url: "https://www.instagram.com/icgc_aviation" },
    { icon: FaTiktok, url: "https://tiktok.com/@icgc_aviation" },
    { icon: FaYoutube, url: "https://youtube.com/@icgcaviation-o4i" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-globe">
      {/* Social Topbar */}
      <div className="bg-topnavbg text-white py-2 px-4 sm:px-14 flex justify-end gap-8 text-lg">
        {socialLinks.map(({ icon: Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
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
        className="bg-slate-200/80 backdrop-blur-md shadow-lg transition-all duration-300
        fixed top-8 left-0 w-full z-50 py-4"
      >
        <div className=" max-w-7xl mx-auto flex items-center justify-between py-4 px-4 ">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 sm:h-14" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 font-medium text-base items-center text-md">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group relative inline-block px-3 py-1 cursor-pointer
                after:content-[''] after:absolute after:right-0 after:bottom-0
                after:h-[2px] after:w-0 after:bg-current after:transition-all
                after:duration-300 hover:after:w-full"
              >
                <Link to={item.path} className="flex items-center gap-1">
                  {item.name}
                  {item.children && <ChevronDown size={16} />}
                </Link>
                {item.children && (
                  <ul className="absolute left-0 w-40 bg-white text-topnavbg shadow-lg rounded-md z-10 hidden group-hover:block mt-2">
                    {item.children.map((child, idx) => (
                      <li key={idx} className="relative group">
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
          
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 bg-white text-topnavbg text-base text-center font-medium space-y-4">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group  relative inline-block px-2 py-1 cursor-pointer
                    after:content-[''] after:absolute after:right-0 after:bottom-0
                    after:h-[2px] after:w-0 after:bg-current after:transition-all
                    after:duration-300 hover:after:w-full"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={item.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenDropdown("");
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="focus:outline-none"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && openDropdown === item.name && (
                    <ul className="mt-2 space-y-2">
                      {item.children.map((child, idx) => (
                        <li
                          key={idx}
                          className="relative group  relative inline-block px-2 py-1 cursor-pointer
                          after:content-[''] after:absolute after:right-0 after:bottom-0
                          after:h-[2px] after:w-0 after:bg-current after:transition-all
                          after:duration-300 hover:after:w-full"
                        >
                          <Link
                            to={child.path}
                            className="block"
                            onClick={() => setMobileMenuOpen(false)}
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
