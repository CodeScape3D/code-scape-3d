/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
      "primary": "#31293B",
      "secondary": "#715979",
      "tertiary": "#ECE6E4",
      "quaternary": "#211715",
      "white": "#FFFFFF",
      "gray": {
        100: "#D9D9D9",
        900:"#1E1E1E"
      },
      "danger": "#FF7575",
      "success": "#87BA7A"
    }

  },
  plugins: [],
};
