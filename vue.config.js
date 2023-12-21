const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: {
      key: require('fs').readFileSync('./key.pem'),
      cert: require('fs').readFileSync('./cert.pem'),
    },
  },
})
