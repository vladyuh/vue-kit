const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  assetsDir: 'assets/',
  publicPath: "/",
  chainWebpack: config => {
    config.module
        .rule('svg-sprite')
        .use('svgo-loader')
        .loader('svgo-loader');
  }
})
