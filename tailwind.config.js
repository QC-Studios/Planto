/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        f1:"inter"
      },
      fontWeight:{
        w1:400,
        w2:500,
        w3:600,
        w4:700,
        w5:800,
        w6:900,
      }
    },
  },
  plugins: [],
}

