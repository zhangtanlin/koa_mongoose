const router = require('koa-router')()
router.prefix('/user')

//numberLong数据类型
var mongoose = require('mongoose')
require('mongoose-long')(mongoose);
var Long = mongoose.Types.Long;

//用户控制器
const user = require('../controllers/user');

//登陆
router.post('/login', async (ctx, next) => {
    //获取前端参数
    let req = ctx.request.body;

    //构造查询数据
    let con = {
        'name': req.name,
        'password': req.password,
    };

    //构造更新数据
    let upd = {
        'chtime': Long.fromString(String(Date.parse(new Date()) / 1000))
    };

    //查询并更新时间
    let findOneAndUpdate = await user.findOneAndUpdate(con, upd);

    //返回值
    if (findOneAndUpdate) {
        ctx.body = true;
    } else {
        ctx.body = false;
    }
});

module.exports = router