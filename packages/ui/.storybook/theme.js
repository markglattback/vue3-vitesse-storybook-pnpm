import { create } from '@storybook/theming'
import resolveConfig from 'tailwindcss/resolveConfig'
import customConfig from '../tailwind.config.js'
const config = resolveConfig(customConfig)
// import logo from '../public/ria-logo.svg'
export default create({
  base: 'light',
  //
  // colorPrimary: config.theme.colors.dark,
  // colorSecondary: config.theme.colors.orange.DEFAULT,
  //
  // // UI
  // appBg: '#0011330d',
  // // appContentBg: "silver",
  // appBorderColor: '#00113326',
  // appBorderRadius: 6,
  //
  // Typography
  fontBase: config.theme.fontFamily.sans.join(','),
  fontCode: config.theme.fontFamily.mono.join(','),
  //
  // // Text colors
  // textColor: config.theme.colors.primary.text,
  // textInverseColor: config.theme.colors.primary['dark-text'],
  //
  // // Toolbar default and active colors
  // // barTextColor: "white",
  // // barSelectedColor: "black",
  // barBg: config.theme.colors.gray.bg,
  //
  // // Form colors
  // inputBg: config.theme.colors.light,
  // inputBorder: config.theme.colors.gray.light,
  // inputTextColor: config.theme.colors.primary.text,
  // inputBorderRadius: 6,
  //
  // // Brand
  // brandTitle: 'Ria Money Transfer',
  // brandUrl: 'https://www.riamoneytransfer.com/',
  // brandImage: logo,
})
