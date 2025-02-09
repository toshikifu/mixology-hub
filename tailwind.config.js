/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(238, 242, 255)", // indigo-50
          100: "rgb(224, 231, 255)", // indigo-100
          500: "rgb(79, 70, 229)", // indigo-600
        },
        accent: {
          200: "rgb(153, 246, 228)", // teal-200
          300: "rgb(94, 234, 212)", // teal-300
        },
      },
    },
  },
  plugins: [],
};
