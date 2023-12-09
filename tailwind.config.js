/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C831F",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
