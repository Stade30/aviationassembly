import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
