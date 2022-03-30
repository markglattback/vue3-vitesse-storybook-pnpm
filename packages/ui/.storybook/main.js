module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    // '@storybook/addon-a11y',
    // '@storybook/addon-notes',
    // '@etchteam/storybook-addon-status',
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  }
}
