const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~/': path.resolve(__dirname, '../src/'),
  }
  config.plugins.push(
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros', '@vueuse/core'],
      dts: '.storybook/auto-imports.d.ts',
    })
  )
  config.plugins.push(
    Components({
      dirs: ['src/components', '.storybook/common'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.stories\.js$/, /\.stories\.ts$/],
      resolvers: [
        IconsResolver({
          customCollections: ['far'],
        }),
      ],

      dts: '.storybook/components.d.ts',
    })
  )
  config.plugins.push(
    Icons({
      compiler: 'vue3',
    })
  )
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })

  return config
}
