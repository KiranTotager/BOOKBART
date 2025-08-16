/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgba(8, 27, 63, 1)",
        secondary:"#d4971cff",
        optionsBackground:"#88BDF2",
        bookCardBackground:"#BDDDFC",
        loginBackground:"#EBF4F9",
        loginRegistrationText:"#296199ff",
        backNavBackground:"#BDDDFC",
      }
    },
  },
  plugins: [],
}
