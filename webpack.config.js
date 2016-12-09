'use strict'
// basic web pack require
const webpack           = require('webpack');
// path for correct file pointing
const path              = require('path');
// weback plugin for HTML construction
const HtmlWebpackPlugin = require('html-webpack-plugin');
// I don't know what this does
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const htmlTemplate = require('html-webpack-template');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    // don't know if I need this or not
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    //   },
    // }),
    new HtmlWebpackPlugin({
      title: 'reAsk',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container',
      scripts: [
        "/socket.io/socket.io.js"
      ]
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true
    })
  ],

  module : {
    include: path.join(__dirname, 'src'),
    loaders: [
      // I'm pretty sure this is the CSS styling loader
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      // checking for png gif and jpg files
      { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=/images/[name].[ext]' },
      // i'm not using svg's but Let's put this here
      { test: /\.svg$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // { test: /\.gif$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // { test: /\.jpg$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // testing for JS and JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  }
};

// this part is added from @jasonseminara web pack
// it's a dev environment check
if (process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
  ];

  config.plugins = config.plugins.concat(prodPlugins);

  config.cache = false;
  config.debug = false;
  config.devtool = undefined;
}

module.exports = config;
