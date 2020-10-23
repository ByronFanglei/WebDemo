const path = require('path')

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
        'style-loader', 
        'css-loader', 
        'sass-loader', 
        'postcss-loader'
      ]
    }]
  },
  // 项目输出文件，最后要运行的文件
  output: {
    // 打包最后生成的文件
    filename: 'bundle.js',
    // 打包最后生成的文件夹
    path: path.resolve(__dirname, 'dist')
  }
}
