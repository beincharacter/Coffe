/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        '432010': '#432010',
      },
      fontSize: {
        '15': '15px',
        '22': '22px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}