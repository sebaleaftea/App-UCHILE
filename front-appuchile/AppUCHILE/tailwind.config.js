/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0369a1',
        'secondary': '#e0f2fe',
        'accent': '#e11d48',
      }
    },
  },
  plugins: [],
}