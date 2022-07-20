const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // 增强 vue-cli 的 webpack 配置项
  configureWebpack: {
    // 打包优化
    externals: {
      // import 时的包名称: window 全局的成员名称
      'highlight.js': 'hljs',
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      vant: 'vant',
      dayjs: 'dayjs',
      'socket.io-client': 'io',
      popmotion: 'popmotion'
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.join(
              __dirname,
              './src/styles/theme.less'
            )}";`
          }
        }
      }
    }
  }
})
