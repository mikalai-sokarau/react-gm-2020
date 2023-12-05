const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const developmentConfiguration = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4200,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

module.exports = merge(common, developmentConfiguration);
