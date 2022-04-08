const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const rmtColors = {
  current: 'currentColor',
  transparent: 'transparent',
  // Theme
  dark: {
    DEFAULT: 'rgb(0,17,51)',
    bg: 'rgb(51,65,92)',
  },
  light: 'rgb(255,255,255)',
  // White
  white: {
    DEFAULT: 'rgb(255,255,255)',
    dim: 'rgba(255,255,255,0.15)',
    dimmer: 'rgba(255,255,255,0.05)',
  },
  // Gray
  gray: {
    'light': 'rgba(0,17,51,0.15)',
    'lighter': 'rgba(0,17,51,0.05)',
    'lightest': 'rgba(0,17,51,0.02)',
    'bg': 'rgb(250,250,251)',
    'lighter-active': 'rgba(0,17,51,0.10)',
    'light-1_2': 'rgba(0,17,51,0.075)',
  },
  // Aux
  red: {
    DEFAULT: 'rgb(255,51,85)',
    lighter: 'rgba(255,51,85,0.15)',
    text: 'rgb(204,55,79)',
  },
  orange: {
    'DEFAULT': 'rgb(255,97,0)',
    'light': 'rgba(255,97,0,0.3)',
    'lighter': 'rgba(255,97,0,0.15)',
    'lightest': 'rgba(255, 97, 0, 0.05)',
    'text': 'rgb(208,72,5)',
    'button-hover': 'rgb(255,105,13)',
    'button-pressed': 'rgb(255,144,76)',
    'button-focused': 'rgb(255,121,38)',
  },
  yellow: {
    DEFAULT: 'rgb(255,187,0)',
    lighter: 'rgba(255,187,0,0.15)',
    text: 'rgb(178,96,0)',
  },
  green: {
    DEFAULT: 'rgb(34,204,102)',
    lighter: 'rgba(34,204,102,0.15)',
    text: 'rgb(8,135,62)',
  },
  blue: {
    DEFAULT: 'rgb(0,170,255)',
    lighter: 'rgba(0,170,255,0.15)',
    text: 'rgb(0,124,186)',
  },
  purple: {
    DEFAULT: 'rgb(153,102,255)',
    lighter: 'rgba(153,102,255,0.15)',
    text: 'rgb(119,78,204)',
  },
  pink: {
    DEFAULT: 'rgb(255,68,187)',
    lighter: 'rgba(255,68,187,0.15)',
    text: 'rgb(196,47,142)',
  },
  // Text
  primary: {
    'text': 'rgba(0,17,51,0.8)',
    'dark-text': 'rgb(255,255,255)',
  },
  secondary: {
    'text': 'rgba(0,17,51,0.6)',
    'dark-text': 'rgba(255,255,255,0.7)',
  },
  tertiary: {
    'text': 'rgba(0,17,51,0.3)',
    'dark-text': 'rgba(255,255,255,0.4)',
  },
}

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    colors: rmtColors,
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
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      height: {
        '14': '3.5rem',
        '18': '4.5rem',
        'screen-ios': '-webkit-fill-available',
      },
      width: {
        14: '3.5rem',
        18: '4.5rem',
        100: '25rem',
      },
      maxHeight: {
        '100': '25rem',
        'screen-ios': '-webkit-fill-available',
      },
      zIndex: {
        100: '100',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      boxShadow: {
        'ria-1': '0px 3px 15px rgba(0, 17, 51, 0.05)',
        'ria-2': '0px 10px 40px rgba(0, 17, 51, 0.1)',
        'ria-3': '0px 10px 40px rgba(0, 17, 51, 0.2)',
        'inset-1': 'inset -1px 1px 0 rgba(0, 17, 51, 0.05)',
        'outline-element-focus': `0 0 0 1px ${rmtColors.orange.DEFAULT}`,
        'outline-input-focus': `inset 0 0 0 1px ${rmtColors.orange.DEFAULT}`,
        'outline-input-focus-error': `inset 0 0 0 1px ${rmtColors.red.DEFAULT}`,
        'outline-orange': `0 0 0 2px ${rmtColors.orange.lighter}`,
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
      letterSpacing: {
        tightest: '-0.025rem',
        tighter: '-0.015625rem',
        tight: '-0.009375rem',
        normal: '0',
        wide: '0.009375rem',
        wider: '0.015625rem',
        widest: '0.025rem',
      },
      spacing: {
        '0_5': '0.125rem',
        '1_5': '0.375rem',
        '2_5': '0.625rem',
        '3_5': '0.875rem',
        '4_5': '1.125rem',
        '18': '4.5rem',
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.75rem',
        xxl: '1.5rem',
      },
      animation: {
        float: 'float 5s infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(-10px) rotate(0deg)',
          },
          '40%': {
            transform: 'translateY(0px) rotate(3deg)',
          },
          '60%': {
            transform: 'translateY(0px) rotate(-3deg)',
          },
          '100%': {
            transform: 'translateY(-10px) rotate(0deg)',
          },
        },
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities, config }) => {
      // Dont apply defaults, since they may override the bold styles etc, depending on order
      const typesets = {
        '.type-h1': {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.8'),
        },
        '.type-h2': {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.7'),
        },
        '.type-h3': {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.6'),
        },
        '.type-number': {
          fontSize: config('theme.fontSize.lg'),
          // fontWeight: config('theme.fontWeight.normal'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.6'),
        },
        '.type-subtitle': {
          fontSize: config('theme.fontSize.base'),
          // fontWeight: config('theme.fontWeight.normal'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.6'),
        },
        '.type-body': {
          fontSize: '15px',
          // fontWeight: config('theme.fontWeight.normal'),
          letterSpacing: config('theme.letterSpacing.wider'),
          lineHeight: config('theme.lineHeight.6'),
        },
        '.type-caption': {
          fontSize: config('theme.fontSize.sm'),
          // fontWeight: config('theme.fontWeight.normal'),
          letterSpacing: config('theme.letterSpacing.wider'),
          lineHeight: config('theme.lineHeight.5'),
        },
        '.type-caption-xs': {
          fontSize: config('theme.fontSize.xs'),
          // fontWeight: config('theme.fontWeight.normal'),
          letterSpacing: config('theme.letterSpacing.widest'),
          lineHeight: config('theme.lineHeight.4'),
        },
        '.type-overline': {
          fontSize: config('theme.fontSize.sm'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.widest'),
          lineHeight: config('theme.lineHeight.5'),
          textTransform: 'uppercase',
        },
        '.type-button': {
          fontSize: config('theme.fontSize.base'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.wide'),
          lineHeight: config('theme.lineHeight.6'),
        },
        '.type-helper': {
          fontSize: config('theme.fontSize.xs'),
          fontWeight: config('theme.fontWeight.bold'),
          letterSpacing: config('theme.letterSpacing.wider'),
          lineHeight: config('theme.lineHeight.4'),
        },
      }
      addUtilities(typesets)
    }),
  ],
}
