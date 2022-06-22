module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-notes',
    '@etchteam/storybook-addon-status',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              require('tailwindcss/nesting')(),
              require('tailwindcss')(),
              require('autoprefixer')(),
            ],
          },
        },
        cssLoaderOptions: { importLoaders: 1 },
      },
    },
  ],
  framework: '@storybook/vue3',
  staticDirs: ['../public'],
}
