/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" ,"./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      "desktop" : {"min" : "1200px"},
      "laptop" : {"min" : "992px" , "max" : "1199"},
      "tablet" : {"min" : "768px" , "max" : "991px"},
      "mobile" : {"max" : "767px"},
    },
  },
  plugins: [],
  darkMode : 'selector',
}

