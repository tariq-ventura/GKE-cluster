const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    type: 'https',
    allowedHosts: 'all',
  },
  configureWebpack: {
    devtool: 'source-map',
  },
})
