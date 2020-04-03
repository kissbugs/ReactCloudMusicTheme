/* eslint-disable no-undef */
const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const version = new Date().getTime();
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
        use: ['babel-loader?cacheDirectory=true', 'react-hot-loader/webpack']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            /*对图片进行压缩*/
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
              outputPath: './images/',
              publicPath: 'images/',
            }
          }
        ]
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
    filename: `index_bundle.${version}.js`,
    path: path.resolve(__dirname, './dist')
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: "./src/assets/images/favicon.ico", //favicon.ico文件路径
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    // new webpack.DllReferencePlugin({
    //   context: __dirname, //这个上下文对应DllPlugin
    //   manifest: require('./build/library/library.json')        
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minChunks: 2,
          minSize: 0,
          name: "commons"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        },
        parallel: true
      })
    ]
  },
}

