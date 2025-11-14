/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ocean: "#0077B6",
        aqua: "#00B4D8",
      },
    },
  },
  plugins: [],
};
