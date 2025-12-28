/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A0A0B',
        'secondary-bg': '#141417',
        'border-dark': '#1E1E23',
        'border-light': '#3A3A42',
        'text-primary': '#E8E8EC',
        'text-secondary': '#6B6B76',
        'text-muted': '#3A3A42',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}