/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        loginGreen: {
          dark: "#193046",
          mint: "#369694",
        },
      },
    },
  },
  plugins: [],
};
