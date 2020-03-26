const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // module: "development",
  // devtool: "cheap-module-eval-source-map",
  devtool: 'inline-source-map',

  entry: path.resolve(__dirname, "./src/index.js"),
  resolve: {
    alias: {
      '@': resolve('src'),
      'config': resolve('src/config'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'react-hot-loader/webpack']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
            publicPath: '/images',
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: "./src/assets/images/favicon.ico" //favicon.ico文件路径
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    // 用来显示路由地址正确显示
    historyApiFallback: {
      index: '/'
    },
    hot: true,
    hotOnly: true
  },
  // optimization: {
    // usedExports: true, // 如果模式是生产环境，usedExports 不需要配置
    // minimizer: [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         drop_console: true
    //       }
    //     }
    //   })
    // ]
    // splitChunks: {
    //   chunks: "all" // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    // }
  // }
}

