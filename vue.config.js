module.exports = {
  lintOnSave: false, // 保存时检查格式，使用eslint
  crossorigin: 'anonymous', // htmlWebpackPlugin
  publicPath: '/',
  outputDir: 'dist', // 打包的目录
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: { // 对开发服务的设置
    // Various Dev Server settings
    host: '0.0.0.0', // process.env.HOST,
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    open: true, // 自动调用默认浏览器打开
    https: false, // 是否使用https, https使用node的一个内部默认的ca证书
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}

// 查看内置默认的项目配置需要使用 vue inspect命令
