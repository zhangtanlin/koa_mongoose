const router = require('koa-router')()
router.prefix('/outreachlog')

//查询方法
router.post('/search', async (ctx, next) => {
    //获取前端传递的参数
    let req = ctx.request.body;
    console.log('req', req);
    //定义查询条件
    var match = {}; //聚合筛选条件
    let sort = {}; //排序条件
    let skip = 0; //跳过多少数据
    let limit = 17; //展示数据条数
    //遍历前端数据
    for (let i in req) {
        if (i == "search") {
            search = req[i];
        };
        if (i == 'sort') {
            sort = req[i];
        };
        if (i == 'page') {
            page = Number(req[i]);
        };
        if (i == 'pageSize') {
            pageSize = Number(req[i]);
        };
    };


    //解析前端参数




    //构造插入值
    // let param = {
    //     'name': req.name,
    //     'password': Long.fromString(req.password),
    // };
    // //保存数据
    // let save = await user.save(param)
    // //返回值
    // if (save) {
    //     ctx.body = true;
    // } else {
    //     ctx.body = false;
    // }
});




module.exports = router