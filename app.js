var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var app = express();
const articleRouterType = require('./routes/article.router')
// const dbArticleType = require('./db/articleType');

// 允许跨域，中间件
app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'PUT,GET,POST,DELETE,OPTIONS',
        'Content-Type': 'application/json;charset=utf-8'
    })
    if(req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('连接成功！')
}).catch(() => {
    console.log('连接失败！')
})

// 中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由

app.use('/article', articleRouterType);

module.exports = app;
