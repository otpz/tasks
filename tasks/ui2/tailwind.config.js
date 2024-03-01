/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'icon': '14px',
        '11.75': '2.9375rem',
        '41': '164px',
        '42': '168px',
        '62': '15.5rem',
        '76': '19rem',
        '84': '21rem',
        '90': '22.5rem',
        '100': '25rem',
        '125': '31.25rem',
        '128': '32rem',
        '144': '36rem',
        '148': '37rem',
        '160': '40rem',
      },
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
      },
      colors: {
        'body-dark': '#0E0E0E',
        'component-dark': '#161616',
        'secondary': '#E8E8E8',
        'form-dark': '#2F2F2F',
        'highlight-yellow': '#F0CF04',
        'mail-btn': '#1C5AD7',

        'gradient-1': '#427af0',
        'gradient-2': '#205cda',
        'border-gray': 'rgba(115, 115, 115, 0.1)',

        'popular': "#FFB709",
      },
      fontSize: {
        'xxs': '.625rem',
      }
    },
  },
  plugins: [],
}
