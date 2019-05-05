//导入用户模型
const User = require('../models/user');

module.exports = {

    //查询一条数据并更新某些属性
    findOneAndUpdate: (con, upd, next) => {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(con, upd, {
                'new': true,
                'runValidators': true
            }).then(cb => {
                if (cb) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }).catch(err => {
            return false;
        });
    },

};