// var express = require('express');
// var router = express.Router();
const articleRouter = require('./article.router');
const articleNumInfoRouter = require('./articleNumInfo.router');

var fs = require('fs');
var path = require('path');

function register(app, services) {
  let fnames = fs.readdirSync(__dirname);
  fnames.forEach(function (fname) {
    if (fname !== 'index.js' && fname.endsWith('.js')) {
      var prefix = path.basename(fname, '.js');
      var realname = path.resolve(__dirname, fname);
      try {
        require(realname)(app, `/${prefix}`, services);
      } catch (err) {
        console.error(`routes init: require('${prefix}') failed with error:`, err);
      }
    }
  });
}

module.exports = register;
