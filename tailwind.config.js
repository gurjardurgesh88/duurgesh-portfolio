export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        "reverse-spin": "spin 1s linear infinite reverse", // ✅ Add this
      },
    },
  },
  plugins: [],
};
