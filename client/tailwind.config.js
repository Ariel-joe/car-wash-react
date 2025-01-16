/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creamish: "#f4f2ec",
        lightDarkGray: "#444444",
        DarkGray: "#2e2e2e",
      },
    },
  },
  plugins: [],
};
