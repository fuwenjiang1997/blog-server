const express = require('express');
const router = express.Router()
const path = require('path')

router.get('/img', function(req, res) {
    console.log(req)
    console.log(path.resolve(__dirname, '../public/img'))
})

module.exports = router