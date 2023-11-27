const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true,
    allowedHosts: 'all',
  },
  configureWebpack: {
    devtool: 'source-map',
  },
})
