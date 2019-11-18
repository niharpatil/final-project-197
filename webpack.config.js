var webpack = require('webpack');

var config = {
  mode: 'development',
  entry: {
    bundle: __dirname + '/src/frontend/index.js'
  },
  output: {
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  }
};

module.exports = config;
