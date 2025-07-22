/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primarycolor: "#eeeaf2ff",
        formcolor: "#E8E2E2",
        topnavbg: "#163F1B",
        navbgc: "#E8E2E2",
      },
      fontFamily: {
        sans: ["Raleway", "Open Sans", "sans-serif"],
        heading: ["Playfair Display", "Poppins", "serif"],
        scripture: ["Cormorant Garamond", "Quicksand", "serif"],
        optfont: ["Merriweather", "Lora", "serif"],
      },
      backgroundImage: {
        globe: "url('./assets/bg-globe.png')",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },

  plugins: [],
};
