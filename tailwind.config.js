/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans']
      },
      colors: {
        primary: "#AE7732",
        secondary: "#111827",
        lightDark: "#666666",
        white: "#FFFFFF",
        darkModeGray: "#1F1F1F",
        darkModeBlack: "#121212",
        white : "#F5F5F5 "
      },
    },
  },
  plugins: [],
};
