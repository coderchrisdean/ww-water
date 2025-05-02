/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#DC2626', // Red
          700: '#B91C1C', // Darker Red
        },
      },
    },
  },
  plugins: [],
}
