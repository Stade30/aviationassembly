/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "Open Sans", "sans-serif"],
        heading: ["Playfair Display", "Poppins", "serif"],
        scripture: ["Cormorant Garamond", "Quicksand", "serif"],
        optfont: ["Merriweather", "Lora", "serif"],
        
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/bg1.JPG')",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
