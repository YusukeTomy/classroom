const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      maxAssetSize: 700000,
      maxEntrypointSize: 700000,
    }
  } 
})
