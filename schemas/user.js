var mongoose = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

//创建用户schema
var userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    crtime: {
        type: Long
    },
    chtime: {
        type: Long
    }
}, {
    versionKey: false, //禁止保存版本号__v
    collection: 'acl_user' //设置数据库集合
});

//导出用户schema
module.exports = userSchema;