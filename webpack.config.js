const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'fy-utils.min.js',
    libraryTarget: 'umd'
  }
}