/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#003154',
        'blue-light': '#069FD2',
        "blue-mid": "#005EA2",
        white: '#FDFDFD',
        gray: '#868686',
        'gray-light': 'rgba(133,133,133,0.5)',
        'gray-lighter': '#DDDDDD',
        black: '#000000',
        'black-lighter': 'rgba(0,0,0,0.6)',
        green: '#1CAE22',
        red: '#DF1313',
      },
      // Font family - Encode Sans
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // 'Inter' as the primary font with fallback to sans-serif
      }
    },
  },
  plugins: [],
}

