/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Soft-Red': 'hsl(0, 94%, 66%)'
      }
    },
  },
  plugins: [],
}

