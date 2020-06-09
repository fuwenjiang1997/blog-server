const express = require('express')
const router = express.Router();
const dbArticleType = require('../db/articleType');

router.get('/article/get_article_type', (req, res) => {
    dbArticleType.findOne({}, {_id:0, __v:0}).then(data => {
        console.log(data)
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
