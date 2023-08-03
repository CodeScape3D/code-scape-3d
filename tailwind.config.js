/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "primary": "#31293B",
        "secondary": "#715979",
        "tertiary": "#ECE6E4",
        "white": "#FFFFFF",
      }
    },

  },
  plugins: [],
};
