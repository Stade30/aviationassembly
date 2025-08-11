import React from "react";
import { useState } from "react";

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prayer request submitted:", formData);
    setSubmitted(true);
    // Optionally reset the form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <div className="max-w-xl mx-auto p-6 text-white ">
      <h2 className="text-2xl font-bold text-center text-white text-slate-900 mb-6">
        Send a Prayer Request
      </h2>

      {submitted && (
        <div className="text-green-600 font-medium mb-4 text-center">
          Thank you! Your prayer request has been received.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Prayer Request</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-slate-400"
            placeholder="Type your prayer request here..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white px-6 py-2 rounded hover:bg-green-900 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default PrayerRequest;
