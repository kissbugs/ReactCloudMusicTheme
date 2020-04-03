/* eslint-disable no-undef */
const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    library: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name]_[chunkhash].dll.js',
    path: path.join(__dirname, 'build/library'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      context: __dirname,
      path: path.join(__dirname, 'build/library/[name].json')
    })
  ]
}