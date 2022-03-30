const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest:   '.25em',
    },
    fontFamily: {
      regular: ['Graphik Regular'],
      medium: ['Cereal Book'],
      semibold: ['Graphik Semibold'],
      bold: ['Graphik Bold'],
      serif: ['Berlingske Serif'],
      serifblack: ['Berlingske Serif Blk'],
    },
    extend: {
      colors: {
        orange: colors.orange,
        gray: colors.gray,
        amber: colors.amber,
        yellow: colors.yellow,
        green: colors.emerald,
        'brand-cyan': '#003A46',
        'brand-background': '#fffcf3',
        'brand-red': '#b01c31',
        'brand-black': '#323131',
        'color-grey': '#e0ded6',
        'brand-grey': '#989898'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
