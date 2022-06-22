const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue,mdx}', './stories/**/*.{html,js,ts,vue,mdx}'],
  theme: {
    screens: {
      xs: '1px',
      sm: '600px',
      md: '960px',
    },
    transitionDuration: {
      90: '90ms',
      180: '180ms',
      270: '270ms',
      360: '360ms',
      450: '450ms',
      540: '540ms',
      630: '630ms',
      720: '720ms',
      810: '810ms',
      900: '900ms',
      990: '990ms',
      1000: '1000ms',
    },
    transitionDelay: {
      90: '90ms',
      180: '180ms',
      270: '270ms',
      360: '360ms',
      450: '450ms',
      540: '540ms',
      630: '630ms',
      720: '720ms',
      810: '810ms',
      900: '900ms',
      990: '990ms',
      1000: '1000ms',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          text: colors.zinc[800],
        },
        brand: {
          gray: {
            light: colors.gray[200],
            medium: colors.neutral[400],
            dark: colors.zinc[800],
          },
          link: {
            navbar: colors.neutral[400],
            text: colors.blue[500],
            'text-hover': colors.sky[700],
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
