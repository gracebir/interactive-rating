/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
      colors:{
        dark: "var(--color-dark)",
        blue: "var(--color-blue)",
        "dark-blue": "var(--color-dark-blue)",
        orange: "var(--color-orange)",
        grey: "var(--color-grey)",
        "medium-grey": "var(--color-medium-grey)",
        round: "var(--color-round)"
      }
    },
  },
  plugins: [],
}

