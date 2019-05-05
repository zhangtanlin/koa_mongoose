//用户模型
const Outreachlog = require('../models/outreachlog');

module.exports = {

    //保存一条数据
    create: (req, next) => {
        return new Promise((resolve, reject) => {
            let user = new Outreachlog(req); //模型实例化
            user.create((err, cb) => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        }).catch(err => {
            return false;
        });
    },

    //聚合插叙




};