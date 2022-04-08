// const path = require('path')
// const vueConfig = require('@vue/cli-service/webpack.config.js')
// module.exports = ({ config, mode }) => {
//   // Extend it as you need.
//   function resolve(dir) {
//     return path.join(__dirname, '../', dir)
//   }
//
//   config.resolve = {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       vue$: 'vue/dist/vue.esm.js',
//       '@oen.web.vue2/ui': resolve(''),
//       '@vue/composition-api$': '@vue/composition-api/dist/vue-composition-api.mjs',
//     },
//   }
//
//   config.module.rules.push({
//     test: /\.postcss$/,
//     use: ['vue-style-loader', 'postcss-loader'],
//   })
//
//   config.module.rules.push({
//     test: /\.mjs$/,
//     include: /node_modules/,
//     type: 'javascript/auto',
//   })
//
//   config.module.rules.push({
//     test: /\.css$/,
//     loaders: [
//       {
//         loader: 'postcss-loader',
//         options: {
//           sourceMap: true,
//           config: {
//             path: resolve(''),
//           },
//         },
//       },
//     ],
//
//     include: resolve('stories'),
//   })
//
//   // config.module.rules.push(...vueConfig.module.rules.filter(rule => rule.test.toString().indexOf('css') !== -1))
//   return config
// }
