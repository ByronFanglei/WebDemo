const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 打包文件压缩
  // mode: 'production',
  // 打包文件不压缩
  mode: "development",
  // 项目入口文件
  entry: './src/index.js',
  // 针对不同类型文件进行打包
  module: {
    rules:[{
      // 当打包后缀为jpg的文件时，使用file-loader进行打包
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // 打包后的名字配置
          name: '[name]_[hash].[ext]',
          // 打包后存入文件地址
          outputPath: 'images/',
          // 当图片大于2048后不转为base64文件，存入images，反之转为base64文件
          limit: 2048
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        // 将css资源挂载到header中
        'style-loader', 
        {
          // 解析css
          loader: 'css-loader',
          options: {
            // 当使用import引入的scss文件后，先调用下面两个loader，再向上调用，否则直接向上调用
            importLoaders: 2,
            // css模块化打包，css只在当前文件生效
            // modules: true,
          }
        }, 
        // 解析scss
        'sass-loader', 
        // 样式资源浏览器前缀
        'postcss-loader'
      ]
    }, {
      // 字体打包
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [
    // 打包自动生成一个入口文件，以index.html为模板生成
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // 打包前自动删除dist目录下的文件
    new CleanWebpackPlugin()
  ],
  // 项目输出文件，最后要运行的文件
  output: {
    // 打包最后生成的文件
    filename: 'main.js',
    // 打包最后生成的文件夹
    path: path.resolve(__dirname, 'dist')
  }
}
