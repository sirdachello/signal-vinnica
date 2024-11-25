/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fece00",   // Example: yellow
        secondary: "#4b3793", // Example: purple
        accent: "#82729d",    // Example: bright-purple
        highlight: "#f4020a", // Example: red
      },
      screens: {
        'custom-lg': '1340px', // Define your custom screen size
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
