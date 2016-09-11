const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-source-map',
  entry: './app/client.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      path.resolve(__dirname, './node_modules')
    ]  
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /(\.scss|\.sass)$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  recordsPath: './records/records.json',
  plugins: [
    new HardSourceWebpackPlugin({
      cacheDirectory: './cache',
      environmentPaths: {
        root: process.cwd(),
        directories: ['node_modules', 'app'],
        files: ['package.json', 'webpack.config.js'],
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      mangle: true,
      minimize: true,
      sourceMap: false
    }),
  ]
};