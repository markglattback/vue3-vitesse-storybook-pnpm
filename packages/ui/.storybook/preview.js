import vueRouter from 'storybook-vue3-router'
import resolveConfig from 'tailwindcss/resolveConfig'
import { routes } from './mocks/routes'
import theme from './theme.js'
import customConfig from '../tailwind.config.js'
const config = resolveConfig(customConfig)
import AppApp from '../src/components/AppApp/AppApp.vue'
import '../src/styles/main.css'
export const decorators = [
  (story) => ({
    components: { story, AppApp },
    template: `<AppApp><story/></AppApp>`,
  }),
  vueRouter(routes, { initialRoute: routes[0].name }),
]

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#001133' },
      { name: 'gray', value: config.theme.colors.zinc[100] },
    ],
  },
  docs: {
    theme,
  },
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
  status: {
    type: 'wip',
    statuses: {
      stable: {
        background: config.theme.colors.green.default,
        description: 'Matches figma design and approved',
      },
      'stable-with-notes': {
        background: config.theme.colors.blue.default,
        description: 'Missing some functionality of there are some caveats',
      },
      'stable-pending-test': {
        background: config.theme.colors.purple.default,
        default: 'Stable but pending some testing',
      },
      beta: {
        background: config.theme.colors.orange.default,
        description: 'For approval',
      },
      wip: {
        background: config.theme.colors.red.default,
        description: 'The default status, for new Work in Progress components',
      },
    },
  },
  viewport: {
    viewports: {
      xs: {
        name: 'Extra small (default)',
        styles: { width: '375px', height: '100%' },
      },
      sm: {
        name: 'Small (sm)',
        styles: { width: config.theme.screens.sm, height: '100%' },
      },
      md: {
        name: 'Medium (md)',
        styles: { width: config.theme.screens.md, height: '100%' },
      },
      lg: { name: 'Large (n/a)', styles: { width: '1336px', height: '100%' } },
    },
  },
}
