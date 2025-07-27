import React, { useState, useEffect } from "react";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import banner from "../assets/images/banner.jpg"
const imageslider = [banner, image1, image2, image3, image4]; // replace with your actual image paths

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === imageslider.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl h-[600px] overflow-hidden mx-auto mt-10 rounded-lg shadow-2xl">
      {/* Slides */}
      {imageslider.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full object-cover h-full transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {imageslider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
