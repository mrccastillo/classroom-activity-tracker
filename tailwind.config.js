/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "nav-open-icon": "url('public/icons/menu.png')",
      // },
      colors: {
        green: {
          dark: "#193046",
          mint: "#369694",
        },
        blue: {
          nav: "#7bb7e0",
          white: "#f4f6fc",
        },
      },
    },
  },
  plugins: [],
};
