/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      colors: {
         background: '#000000',
         primary: '#964BD0',
         secondary: '#9E9E9E',
         active: '#FFFFFF',
      },
      extend: {},
   },
   plugins: [],
};
