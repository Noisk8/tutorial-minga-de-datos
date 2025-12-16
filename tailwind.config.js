/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["'Courier New'", "Courier", "monospace"],
        mono: ["'Courier New'", "Courier", "monospace"],
      },
      colors: {
        // Official Wikimedia color palette from logo
        wikiblue: "#006699",       // Main blue from logo
        wikibluehover: "#004466",  // Darker blue for hover
        wikigreen: "#339966",      // Green from logo center
        wikired: "#990000",        // Red from logo top
        wikigray: "#A2A9B1",       // Border gray (standard)
        wikidark: "#202122",       // Text dark gray (standard)
        wikilight: "#F8F9FA",      // Light background (standard)
      },
      boxShadow: {
        wiki: "0 1px 1px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
