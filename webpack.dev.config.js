/**
 * Created by aresn on 16/7/5.
 */
var config = require('./webpack.base.config');
var fs = require('fs');

config.devtool = '#source-map';
config.output.publicPath = '/dist/';

// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'module.exports = "development";';
    fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
});

module.exports = config;