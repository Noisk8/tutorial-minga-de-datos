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
        accent: "#0f66b2", // azul
        magenta: "#5942b0", // morado
        verde: "#226b4a",
        rojo: "#920000",
      },
      boxShadow: {
        glow: "0 15px 60px rgba(93, 224, 230, 0.25)",
      },
    },
  },
  plugins: [],
};
