const express = require('express')
const router = express.Router();
const dbArticle = require('../db/article');

var article = require('../db/article');

router.get('/article/get_list_article', (req, res) => {
    console.log('发送请求');
    dbArticle.findOne({}, {_id:0, __v:0}).then(data => {
        res.send({
            code: 0,
            msg: '请求到数据了',
            data
        })
    }).catch(() => {
        res.send({
            code: 4,
            msg: '没有数据啦~~'
        })
    })
})

module.exports = router;