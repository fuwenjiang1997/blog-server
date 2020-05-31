const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let article = mongoose.model('article', new Schema({
    type: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    tag: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    surface: {type: String, default: '/img/default.jpg'},
    pv: {type: Number, default: 0}, // 浏览量
    comment: [{type: Schema.Types.ObjectId, ref: "comment"}] // 关联到comment表
}));

// 添加假数据
// for(let i = 0; i < 5; i++) {
//     article.create({
//         type: ["原创", "转载"][(Math.random()*2)|0],
//         title: `第${i+1}篇文章`,
//         content: '怀念不一定就要相见，喜欢不一定就要在一起，你要相信，每一种距离都有它存在的意义。尽心尽力做好自己的事，走自己的路，按自己的原则，好好生活。即使有人亏待了你，时光也不会亏待追梦的你。笑，全世界便与你同声笑，哭，你便独自哭。因为爱过，所以慈悲;因为懂得，所以宽容。于千万人之中，遇见你要遇见的人。于千万年之中，时间无涯的荒野里，没有早一步，也没有迟一步，遇上了也只能轻轻地说一句：“你也在这里吗?”“死生契阔——与子相悦，执子之手，与子偕老是一首最悲哀的诗……生与死与离别，都是大事，不由我们支配的。比起外界的力量，我们人是多么小，多么小!可是我们偏要说：‘我永远和你在一起，我们一生一世都别离开’。——好象我们自己做得了主似的。”你问我爱你值不值得，其实你应该知道，爱就是不问值得不值得。',
//         tag: ['张爱玲', '爱情', '人间值得', '苦情'][Math.random()*4|0]
//     });
// }

module.exports = article