import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import leadpastor from "../assets/ps.jpeg";
import leadershipImg from "../assets/leadership.jpeg";
import giveImg from "../assets/give.png";
import declarationImg from "../assets/declaration.jpg";
import prayerrequest from "../assets/open-bible.jpeg";
import HeroSlider from "../components/HeroSlider";
import PrayerRequest from "./PrayerRequest";
import AOS from "aos";
import "aos/dist/aos.css";

// URLs
const directionsURL = "https://maps.app.goo.gl/JTFU7Yzajkv5d21B6";

const churchlocation =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.190320669375!2d-0.156507!3d5.685613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d4342b82bb9%3A0x4fd868df5d8896f5!2sICGC%20Aviation%20Assembly!5e0!3m2!1sen!2sgh!4v1752792040301!5m2!1sen!2sgh";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookSquare,
      url: "https://facebook.com/@icgcaviation",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/@icgcaviation",
      hoverColor: "hover:text-pink-600",
    },
    {
      icon: FaXTwitter,
      url: "https://www.x.com/@icgcaviation",
      hoverColor: "hover:text-black",
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col justify-center relative pt-2">
      {/* Hero Section */}
      <HeroSlider />
      {/* Welcome Section */}

      <section className="mt-16 px-4 md:px-10 py-12 text-gray-800 w-full relative shadow-sm">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-start gap-10 bg-blue backdrop-blur-md rounded-xl shadow-xl p-8">
          {/* Left: Welcome Message */}
          <div className="w-full md:w-2/3 space-y-6 mt-6">
            <h2 className="text-3xl font-extrabold text-[#163F1B] ">
              Welcome to ICGC Aviation
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              We are delighted to have you here! At ICGC Aviation, our mission
              is to raise leaders, shape vision, and influence society through
              Christ. Whether you're a first-time visitor or a returning member,
              you are part of our family.
            </p>

            {/* Social Icons */}
            <ul className="flex justify-center gap-5 pt-4">
              {socialLinks.map(({ icon: Icon, url, hoverColor }, idx) => (
                <li key={idx}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 hover:scale-110 transform transition-transform duration-300 ${hoverColor}`}
                  >
                    <Icon className="text-3xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full md:w-1/3"
          >
            <img
              src={leadpastor}
              alt="Lead Pastor"
              className="w-48 h-48 rounded-full shadow-xl object-cover transition-transform duration-500 hover:scale-105"
            />
            <p
              className="mt-3 text-lg italic font-light text-gray-600"
              style={{ fontFamily: "cursive" }}
            >
              Ps. Jim Emmitt Konadu
            </p>
            <p
              className="text-base italic font-light text-gray-600"
              style={{ fontFamily: "cursive" }}
            >
              Lead Pastor
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Church */}
      <section className="py-8 px-4 md:px-20 text-gray-800 w-full shadow-lg">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
          {[
            { src: leadershipImg, title: "Our Leadership" },
            { src: declarationImg, title: "Declaration" },
            { src: giveImg, title: "Give" },
          ].map(({ src, title }, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col items-center w-full md:w-1/3 shadow-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-96 h-80 object-cover max-w-md shadow-lg mb-4 transform transition-transform duration-500 hover:scale-105"
                />
                <p className="text-xl text-center text-gray-500">{title}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </section>
      {/* Events */}
      <div className="bg-slate-300/60 text-gray-700 text-center w-full h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-2xl">Stay tuned for our upcoming events!</p>
      </div>
      {/* Gallery */}
      <div className="bg-white text-gray-800 w-full h-screen flex items-center justify-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Project Gallery
        </h2>
      </div>
      {/* Prayer Request */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${prayerrequest})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div
          className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
          data-aos="fade-up"
        >
          <div className="text-white w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Send a Prayer Request
            </h2>
            <p className="text-xl">
              Let us pray for you. Your prayer requests are confidential and
              handled with care and faith.
            </p>
          </div>
          <div
            className="w-full md:w-1/2 p-8 rounded-lg bg-white/10 backdrop-blur"
            data-aos="slide-up"
          >
            <PrayerRequest />
          </div>
        </div>
      </div>
      {/* Social Feeds */}
      <div className="bg-slate-300/60 text-gray-700 text-center w-full h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl font-bold mb-4">Social Feeds</h2>
        <p className="text-2xl">Coming Soon. Stay tuned!</p>
      </div>
      {/* Connect with Us - WhatsApp & Telegram */}
      <section className="w-full px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-700">
              Connect With Us
            </h2>
            <p className="text-gray-600">
              Join our community on WhatsApp and Telegram for updates,
              inspiration, and fellowship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/233247759084"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" /> Join WhatsApp
            </a>
            <a
              href="https://t.me/+Z5eea76QogczZmNk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
            >
              <FaTelegramPlane className="text-xl" /> Join Telegram
            </a>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <div className="w-full px-4 py-8">
        <div className="relative w-full h-[400px] max-w-7xl mx-auto border rounded shadow-lg overflow-hidden">
          <iframe
            src={churchlocation}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location Map"
          ></iframe>
          <a
            href={directionsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white text-green-600 px-4 py-2 text-sm rounded shadow hover:bg-green-100 transition z-10"
            title="Get Directions on Google Maps"
          >
            Get Directions
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
