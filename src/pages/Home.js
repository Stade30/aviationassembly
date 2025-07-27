import React from "react";
import Hero from "../components/HeroSlider";
import {motion} from 'framer-motion';
import leadpastor from "../assets/lead-pastor.jpeg"
import HeroSlider from "../components/HeroSlider";

const Home =() => {
  return (
    <main className="min-h-screen  ">
      <HeroSlider />
      {/* Welcome Message */}
      <section className="py-16 px-6 md:px-20 ">
        <div className="max-w-4xl mx-auto text-center">
          <p className="flex justify-center">
            <img
              src={leadpastor}
              className="w-40 h-40 mb-6 rounded-full object-cover border-4 border-[#163F1B] shadow-lg "
            />
          </p>
          <h2 className="text-3xl font-semibold text-[#163F1B] mb-4">
            Welcome Message
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dear beloved, we are so glad you found your way here. At Aviation
            Assembly, our heart is to see lives transformed through the love of
            Christ. Whether you’re a first-time visitor or a long-time member,
            we welcome you with open arms and a heart full of joy. Join us as we
            worship, learn, and grow together in faith.
          </p>
          <p className="mt-8 text-green-700 font-semibold font-optfont">
            – Ps. & Mrs Jim Emmitt Konadu
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
