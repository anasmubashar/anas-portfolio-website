/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "440px",
        md: "769px",
        lg: "1025px",
        xl: "1440px",
      },
      fontSize: {
        responsive: "clamp(0.7rem, 10vw + 0.5rem, 0.82rem)",
      },
    },
  },
  plugins: [],
};
