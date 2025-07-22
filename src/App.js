import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import Navbar from "./components/Navbar";
import Login from "./pages/user-authn/Login";
import Signup from "./pages/user-authn/Signup";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-globe bg-cover relative px-4 pt-28 ">
      <div className="min-h-screen flex flex-col transition-colors duration-500 bg-white dark:bg-green-800 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="#" element={<Ministries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="#" element={<Membership />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
