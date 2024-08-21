/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#00BCD4",
        "indigo-light": "#585AF0",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom left, #8BEAF2 0%, #7462FF 50%, #D2001A 100%)",
        "custom-gradient-2":
          "linear-gradient(to right, #6600FF 0%, #D2001A 100%)",
      },
    },
  },
  plugins: [],
};
