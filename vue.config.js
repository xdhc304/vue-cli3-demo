const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true, // 保存时检查格式，使用eslint
  crossorigin: 'anonymous', // htmlWebpackPlugin
  publicPath: '/', // 基本路径baseUrl
  outputDir: 'dist', // 输出文件路径
  productionSourceMap: false, // 生产环境是否生成SourceMap
  parallel: require('os').cpus().length > 1, // 启用并行化 默认并发运行数 ('os').cpus().length - 1 显著加速构建
  devServer: { // 对开发服务的设置
    compress: false, // 开启压缩
    // Various Dev Server settings
    host: '0.0.0.0', // process.env.HOST,
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    open: true, // 自动调用默认浏览器打开
    https: false, // 是否使用https, https使用node的一个内部默认的ca证书
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  css: {
    extract: true, // 分离插件
    sourceMap: false,
    modules: false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/common/index.scss"
        `
      }
    }
  },
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("@img", resolve("src/assets/images"))
    .set("@scss", resolve("src/assets/common"))
    // 判断是否生产环境
    if (isProduction) {
      config.plugins.delete('preload');
      config.plugins.delete("prefetch");
      //压缩
      config.optimization.minimize(true);
      //分割成块
      config.optimization.splitChunks({
        chunks: 'all'
      })
      // 注入cdn
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 注入cdn
      // 生产环境修改配置
      config.plugins.push(
        new UglifyJSPlugin({
          // 删除
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          // 多进程并行来提高构建速度
          parallel: true
        }, new CompressionPlugin({
          algorithm:'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }))
      )
    } else {
      // 为其他环境配置
    }
  }

}

// 查看内置默认的项目配置需要使用 vue inspect命令
