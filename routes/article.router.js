const express = require('express')
const router = express.Router();
const dbArticle = require('../db/article');
const dbArticleType = require('../db/articleType');

router.get('/get_article_list', (req, res) => {
    var pageSize = 5;
    var currentPage = 1;
    var sort = {"date": 1}; // 排序方式
    var options = {}; // 查询条件
    var skipNum = (currentPage - 1) * pageSize; // 跳过数据条数
    dbArticle.find(options).skip(skipNum).limit(pageSize).sort(sort).exec().then(data => {
        res.send({
            code: 1000,
            msg: '请求到数据了',
            data
        })
    }).catch(err => {
        res.sendStatus(500).send({
            code: 1,
            message: err
        })
    })
    // dbArticle.findOne({}, {_id:0, __v:0}).then(data => {
    //     res.send({
    //         code: 1000,
    //         msg: '请求到数据了',
    //         data
    //     })
    // }).catch(() => {
    //     res.send({
    //         code: 4,
    //         msg: '没有数据啦~~'
    //     })
    // })
})

router.get('/get_article_type', (req, res) => {
    dbArticleType.find({}, {_id:0, __v:0}).then(data => {
        res.send({
            code: 1000,
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