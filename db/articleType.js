const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let articleType = mongoose.model('article_tags', new Schema({
    tag: {type: String, required: true},
    article_num: {type: Number, default: 0}
}));

// 添加假数据
// var arr = ['张爱玲', '爱情', '人间值得', '苦情'];
// arr.forEach(item => {
//     articleType.create({
//         tag: item
//     })
// });

module.exports = articleType