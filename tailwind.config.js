/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '5xl': '3000px'
      },
    },
    extend: {
      backgroundColor: {
        'gamma-lightGray': '#252833',
        'gamma-darkGray': '#181A24'
      }
    },
  },
  plugins: [],
}