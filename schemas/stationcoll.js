var mongoose = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

//创建变电站schema
var stationcollSchema = new mongoose.Schema({
    sid: {
        type: Long
    },
    short: {
        type: String
    },
    full: {
        type: String
    },
    prov: {
        type: String
    },
    city: {
        type: String
    },
    dist: {
        type: String
    },
    adress: {
        type: String
    },
    responsor: {
        type: String
    },
    phone: {
        type: String
    },
    mail: {
        type: String
    },
    crtime: {
        type: Long
    },
    chtime: {
        type: Long
    },
    oper: {
        type: String
    },
    oper_id: {
        type: Number
    },
    voltage: {
        type: Number
    },
    com: {
        type: String
    },
    comoper: {
        type: String
    },
    grade: {
        type: String
    }
}, {
    versionKey: false, //禁止保存版本号__v
    collection: 'stationcoll' //设置数据库集合
});

//导出变电站schema
module.exports = stationcollSchema;