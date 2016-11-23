/**
 * Created by aresn on 16/7/5.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    main: './src/main',
    vendors: ['vue', 'vue-router']
  },
  // 输出
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/dist/'
  },
  // 加载器
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }]
  },
  //注释部分为按需加载 
  //vue: {
  //  loaders: {
  //    css: ExtractTextPlugin.extract(
  //      "style-loader",
  //      "css-loader?sourceMap", {
  //        publicPath: "../dist/"
  //      }
  //    )
  //  }
  //},
  // 转es6
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      filter: path.join(__dirname, './src/filters'),
      components: path.join(__dirname, './src/components')
    }
  },
  plugins: [
    //  new ExtractTextPlugin("[name].css", {
    //    allChunks: true,
    //    resolve: ['modules']
    //  }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};