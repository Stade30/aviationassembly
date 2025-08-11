import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";

const ChurchScrollPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const sections = [
    { title: "Welcome to Our Church", bg: { image1 } },
    { title: "Our Mission", bg: { image2 } },
    { title: "Ministries", bg: { image3 } },
    { title: "Give & Support", bg: { image4 } },
    { title: "Contact Us", bg: { image4 } },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sections.map((section, idx) => (
        <section
          key={idx}
          className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center snap-start"
          style={{ backgroundImage: `url(${section.bg})` }}
          data-aos="fade-up"
        >
          <div className="bg-black/40 p-6 rounded-lg">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              {section.title}
            </h1>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ChurchScrollPage;
