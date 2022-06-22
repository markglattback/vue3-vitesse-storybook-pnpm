module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
}
