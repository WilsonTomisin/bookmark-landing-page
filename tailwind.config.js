/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Soft-Red': 'hsl(0, 94%, 66%)',
        'Soft-Blue': 'hsl(231, 69%, 60%)',
        'Very-Dark-Blue': 'hsl(229, 31%, 21%)'
      },
      screens:{
        'laptop': '1024px',
        'tablet': '768px',
        'mobile': '320px'
      }
    },
  },
  plugins: [],
}

