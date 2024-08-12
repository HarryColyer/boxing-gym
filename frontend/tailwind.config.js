/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#FFF8F1",
          100: "#FFECE0",
          200: "#FFCFB8",
          300: "#FFAD7F",
          400: "#FF7C43",
          500: "#FF4D01", // Change this to your custom orange color
          600: "#E04E00",
          700: "#B74100",
          800: "#8F3300",
          900: "#6E2700",
        },
      },
    },
  },
  plugins: [],
};
