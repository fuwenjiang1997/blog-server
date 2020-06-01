var express = require('express');
var router = express.Router();

/* GET home page. */
var article = require('../db/article');
var articleNumInfo = require('../db/articleNumInfo');
// router.get('/', require('../db/article'));

module.exports = router;
