const mongoose = require('mongoose')

let articleNumInfo = mongoose.model('articleNumInfo', new mongoose.Schema({
    tags: {type: Array},
    num: {type: Number, default: 0},
}));

// 添加假数据
// articleNumInfo.create({
//     tags: ['张爱玲', '爱情', '人间值得', '苦情'],
//     num: 100
// });

module.exports = articleNumInfo