/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#0b1021",
        ink: "#0f172a",
        accent: "#0077a6", // azul wikimedia
        magenta: "#a2001d", // reutilizado como rojo wikimedia
        verde: "#4b9e6a",
        rojo: "#a2001d",
        wikiblue: "#0077a6",
        wikigreen: "#4b9e6a",
        wikired: "#a2001d",
      },
      boxShadow: {
        glow: "0 15px 60px rgba(93, 224, 230, 0.25)",
      },
    },
  },
  plugins: [],
};
