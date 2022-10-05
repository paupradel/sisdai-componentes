const { defineConfig } = require('@vue/cli-service');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  productionSourceMap: true,
  outputDir: 'dist',
  publicPath: process.env.VUE_APP_BASE_ROUTE || '/',
  filenameHashing: process.env.VUE_APP_HASH || false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import 'dadsig-css/src/_variables.scss'; @import 'dadsig-css/src/_mixins.scss';`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./src/assets/data/", to: "data/" }
        ]
      })
    ]
  },
})
