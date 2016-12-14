'use strict'
require('dotenv').config({ silent: true });
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
const YOUR_API_KEY      = process.env.API_KEY;

const config = {
  // this is where we specify to take the input of our code
  entry: `${APP_DIR}/index.jsx`,
  // this is where webpack will spit out our final file
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
      title: 'iParkMySelf',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container',
      scripts: [
        // "/socket.io/socket.io.js"
        // "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzVkLA7e6e-kwBRasdSM90ZQif2NN64OA"
        "https://maps.googleapis.com/maps/api/js?visualization&key=AIzaSyCzVkLA7e6e-kwBRasdSM90ZQif2NN64OA”
        // &callback=initMap
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
      // { test: /\.jpg$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=/images/[name].[ext]' },
      // i'm not using svg's but Let's put this here
      { test: /\.svg$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // { test: /\.gif$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // { test: /\.jpg$/, loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'},
      // testing for JS and JSX files
      {
        test:   /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      { test: /\.ico$/, loader: 'file-loader?name=/[name].[ext]' },
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
