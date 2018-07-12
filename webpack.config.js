const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      { 
        test: /\.js$/,  // 搜索所有js檔案
        exclude: /node_modules/,  // 除了 node_modules 檔
        use: {
          loader: 'babel-loader', // 使用這個 loader
          options: {
            presets: ['env']  // 所有語法
          }
        }
      }
    ]
  },

  // plugins 跟 loader最大的差別是 plugin 跟檔案裡的內容無關
  plugins: [
    //webpack會自動產生/dist/index.html，並且會有 bundle的連結
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: "./index.html"
    })
  ]
}