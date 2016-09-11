const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/client.js'
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: [
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { presets: ['react-hmre'] }
      },
      {
        test: /(\.scss|\.sass)$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
