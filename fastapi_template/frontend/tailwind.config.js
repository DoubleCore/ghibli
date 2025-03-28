/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ghibli-blue': '#6AB9C9',
        'ghibli-green': '#83C382',
        'ghibli-yellow': '#F3D670',
        'ghibli-pink': '#E69DAF',
      },
    },
  },
  plugins: [],
}