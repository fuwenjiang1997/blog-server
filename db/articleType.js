const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let articleType = mongoose.model('articleType', new Schema({
    tags: {type: String, required: true},
    num: {type: Number, default: 0},
}));

// 添加假数据
// var arr = ['张爱玲', '爱情', '人间值得', '苦情'];
// arr.forEach(item => {
//     articleType.create({
//         tag: item
//     })
// });

// console.log("创建成功")

module.exports = articleType