import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Ministries from "./pages/Ministries";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className="bg-globe bg-cover bg-center bg-topnavbg/15 
            bg-blend-overlay ring-8 ring-white shadow-white/50
            "
    >
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center relative  pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="membership" element={<Membership />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
