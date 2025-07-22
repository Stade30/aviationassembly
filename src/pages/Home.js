import React from "react";
import Hero from "../components/Hero";
import {motion} from 'framer-motion';
import leadpastor from "../assets/lead-pastor.jpeg"

const Home =() => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section (Slideshow placeholder) */}
      <section className="relative h-[70vh] bg-cover bg-center bg-hero-slide flex items-center justify-center text-white text-center">
        <div className="bg-black/50 absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Aviation Assembly - ICGC
          </h1>
          <p className="text-lg md:text-2xl">
            A place to worship, grow, and serve.
          </p>
        </motion.div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-6 md:px-20 bg-white">
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
          <p className="mt-8 text-green-700 font-semibold">
            – Ps. & Mrs Jim Emmitt Konadu
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
