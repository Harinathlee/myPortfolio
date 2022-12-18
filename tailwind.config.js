/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    //adding font family for knowme text to reuse
    fontFamily: {
      signature: ["Great Vibes"],
      Roboto: ["Roboto"],
      La_Belle_Aurore: ["La Belle Aurore"],
      Open_Sans: ["Open Sans"],
      Playfair_Display: ["Playfair Display"],
      League_Spartan: ["League Spartan"],
      Abril_Fatface: ["Abril Fatface"],
      Cassandra: ["Cassandra"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
