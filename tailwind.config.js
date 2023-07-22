/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        'custom:sm':'1112px',
        'custom-m':'480px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}