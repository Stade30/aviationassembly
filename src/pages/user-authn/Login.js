import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primarycolor bg-cover bg-center relative px-4">
      {/* Globe Watermark Overlay */}
      <div className="absolute inset-0 bg-globe bg-opacity-60 z-999" />

      {/* Animated Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 bg-formcolor bg-opacity-90 shadow-xl rounded-2xl p-10 max-w-md w-full text-gray-800"
      >
        <h2 className="text-3xl font-bold text-topnavbg text-center mb-6">
          Member Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-xl mb-2 text-topnavbg">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-topnavbg"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xl mb-2 text-topnavbg">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-topnavbg"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-md text-topnavbg">
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:underline">
            Create Account
          </Link>
        </div>

        {/* Divider */}
        <div className="my-3 text-center text-white relative">
          <span className="bg-primarycolor px-2 z-13 relative">
            or sign in with
          </span>
          <hr className="absolute top-1/2 w-full border-t border-green-600 left-0 z-0" />
        </div>

        {/* Social Logins */}
        <div className="flex space-x-14 justify-center">
          <button className="flex items-center gap-2 bg-white text-green-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" />
            Google
          </button>
          <button className="flex items-center gap-2 bg-white text-green-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-500" />
            Facebook
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
