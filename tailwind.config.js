/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#063434',
        accent: '#b8fe22',
        heading: '#1e2222',
        muted: '#4e5151',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"General Sans"', '"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        lg: '810px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}
