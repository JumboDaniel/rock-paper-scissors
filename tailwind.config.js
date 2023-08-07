/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          gold:'#FFD700',
          darkBlue:'#00008B'
        }
      },
    },
    plugins: ['prettier-plugin-tailwindcss'],
  }